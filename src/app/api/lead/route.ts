import { NextRequest, NextResponse } from 'next/server';

const ENTRY_NAME        = process.env.GF_ENTRY_NAME        ?? '';
const ENTRY_PHONE       = process.env.GF_ENTRY_PHONE       ?? '';
const ENTRY_LICENSE     = process.env.GF_ENTRY_LICENSE     ?? '';
const ENTRY_CATEGORY    = process.env.GF_ENTRY_CATEGORY    ?? '';
const ENTRY_CITIZENSHIP = process.env.GF_ENTRY_CITIZENSHIP ?? '';
const FORM_ACTION_URL   = process.env.GF_FORM_ACTION_URL   ?? '';

const MY_PHONE_RE = /^(\+?60|0)[1-9]\d{7,9}$/;
const normalisePhone = (v: string) => v.replace(/[\s\-().]/g, '');

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const prev = (ipTimestamps.get(ip) ?? []).filter(t => now - t < 60_000);
  if (prev.length >= 5) return true;
  ipTimestamps.set(ip, [...prev, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, phone, category, citizenship, licenseType } = body;

  // Server-side validation
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100)
    return NextResponse.json({ error: 'Invalid name.' }, { status: 400 });

  const normPhone = normalisePhone(phone ?? '');
  if (!MY_PHONE_RE.test(normPhone))
    return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });

  if (!['University Student', 'Parent registering for a teen', 'Working Professional'].includes(category))
    return NextResponse.json({ error: 'Invalid category.' }, { status: 400 });

  if (!['Malaysian', 'Non-Malaysian'].includes(citizenship))
    return NextResponse.json({ error: 'Invalid citizenship.' }, { status: 400 });

  if (!['D', 'DA'].includes(licenseType))
    return NextResponse.json({ error: 'Invalid license type.' }, { status: 400 });

  // Forward to Google Forms — URL never leaves the server
  if (FORM_ACTION_URL) {
    const formBody = new URLSearchParams({
      ...(ENTRY_NAME        && { [ENTRY_NAME]:        name.trim()  }),
      ...(ENTRY_PHONE       && { [ENTRY_PHONE]:       normPhone    }),
      ...(ENTRY_LICENSE     && { [ENTRY_LICENSE]:     licenseType  }),
      ...(ENTRY_CATEGORY    && { [ENTRY_CATEGORY]:    category     }),
      ...(ENTRY_CITIZENSHIP && { [ENTRY_CITIZENSHIP]: citizenship  }),
    });

    await fetch(FORM_ACTION_URL, {
      method: 'POST',
      body:   formBody,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }).catch(() => {/* log in production */});
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
