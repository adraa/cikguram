import { NextRequest, NextResponse } from 'next/server';
import { createHash, createPrivateKey, sign } from 'node:crypto';
import { directoryResponseHeaders, MediaType } from 'http-message-sig';
import { jwkThumbprintPreCompute } from 'jsonwebkey-thumbprint';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/** RFC 9421 Appendix B.1.4 test key — dev fallback only; production must set WEB_BOT_AUTH_ED25519_JWK. */
const RFC9421_ED25519_TEST_JWK = {
  kty: 'OKP',
  crv: 'Ed25519',
  d: 'n4Ni-HpISpVObnQMW0wOhCKROaIKqKtW_2ZYb2p9KcU',
  x: 'JrQLj5P_89iXES9-vFgrIy29clF9CC_oPPsw3c5D0bs',
} as const;

const DIRECTORY_TYPE = MediaType.HTTP_MESSAGE_SIGNATURES_DIRECTORY;

function thumbprintEd25519Public(jwk: Pick<JsonWebKey, 'kty' | 'crv' | 'x'>): string {
  const pre = jwkThumbprintPreCompute({
    kty: 'OKP',
    crv: 'Ed25519',
    x: jwk.x,
  });
  return createHash('sha256').update(Buffer.from(pre)).digest('base64url');
}

function loadSigningJwk(): JsonWebKey {
  const raw = process.env.WEB_BOT_AUTH_ED25519_JWK?.trim();
  if (raw) {
    return JSON.parse(raw) as JsonWebKey;
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...RFC9421_ED25519_TEST_JWK };
  }
  throw new Error('missing WEB_BOT_AUTH_ED25519_JWK');
}

function toPublicOkpJwk(full: JsonWebKey): JsonWebKey {
  const { d: _d, ...rest } = full;
  return {
    kty: 'OKP',
    crv: 'Ed25519',
    x: rest.x,
  };
}

/**
 * /.well-known/http-message-signatures-directory — JWKS + signed response per
 * draft-meunier-http-message-signatures-directory / Cloudflare Web Bot Auth.
 */
export async function GET(req: NextRequest) {
  let signingJwk: JsonWebKey;
  try {
    signingJwk = loadSigningJwk();
  } catch {
    return new NextResponse('Web Bot Auth is not configured (set WEB_BOT_AUTH_ED25519_JWK).', {
      status: 503,
    });
  }

  const publicJwk = toPublicOkpJwk(signingJwk);
  const keyid = thumbprintEd25519Public(publicJwk);

  const privateKey = createPrivateKey({
    format: 'jwk',
    key: signingJwk as import('node:crypto').JsonWebKey,
  });

  const signer = {
    keyid,
    alg: 'ed25519' as const,
    sign: async (data: string) => new Uint8Array(sign(null, Buffer.from(data, 'utf8'), privateKey)),
  };

  const body = JSON.stringify({ keys: [publicJwk] });
  const host = req.headers.get('host') ?? req.nextUrl.host;

  const requestLike = {
    method: 'GET',
    url: req.url,
    protocol: req.nextUrl.protocol.replace(/:$/, '') || 'https',
    headers: { host },
  };

  const responseLike = {
    status: 200,
    headers: {
      'content-type': DIRECTORY_TYPE,
    },
  };

  const now = new Date();
  const expires = new Date(now.getTime() + 60_000);

  const sigHeaders = await directoryResponseHeaders(
    { request: requestLike, response: responseLike },
    [signer],
    { created: now, expires }
  );

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': DIRECTORY_TYPE,
      Signature: sigHeaders.Signature,
      'Signature-Input': sigHeaders['Signature-Input'],
      'Cache-Control': 'public, max-age=60',
    },
  });
}
