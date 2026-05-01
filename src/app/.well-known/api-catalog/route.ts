import { NextResponse } from 'next/server';

const LINKSET_PROFILE = 'https://www.rfc-editor.org/info/rfc9727';

function linksetBody(origin: string) {
  const catalogPath = `${origin}/.well-known/api-catalog`;
  return {
    linkset: [
      {
        anchor: catalogPath,
        item: [{ href: `${origin}/api/lead`, type: 'application/json' }],
      },
    ],
  };
}

function linksetContentType() {
  return `application/linkset+json; profile="${LINKSET_PROFILE}"`;
}

/** RFC 9727: GET returns an API catalog document (Linkset). */
export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  return NextResponse.json(linksetBody(origin), {
    headers: { 'Content-Type': linksetContentType() },
  });
}

/** RFC 9727: HEAD includes Link relation(s) from Section 3 (api-catalog). */
export async function HEAD(request: Request) {
  const url = new URL(request.url);
  const path = `${url.pathname}${url.search}`;
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Content-Type': linksetContentType(),
      Link: `<${path}>; rel="api-catalog"`,
    },
  });
}
