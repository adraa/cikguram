import { NextRequest, NextResponse } from 'next/server';

// Store only in Cloudflare dashboard secrets or .env.local — never NEXT_PUBLIC_* or git.
// MAKE_WEBHOOK_URL=https://hook.eu2.make.com/<your-webhook-id>
const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? '';
const LEAD_FORWARDING_ERROR = 'Registration is temporarily unavailable. Please try again later.';

const MY_PHONE_RE = /^(\+?60|0)[1-9]\d{7,9}$/;
const normalisePhone = (v: string) => v.replace(/[\s\-().]/g, '');

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = (ipTimestamps.get(ip) ?? []).filter((t) => now - t < 60_000);
  if (prev.length >= 5) return true;
  ipTimestamps.set(ip, [...prev, now]);
  return false;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });
  }

  const webhookUrl = MAKE_WEBHOOK_URL.trim();
  if (process.env.NODE_ENV === 'production' && !webhookUrl) {
    return NextResponse.json({ error: LEAD_FORWARDING_ERROR }, { status: 503 });
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

  if (
    !['University Student', 'Parent registering for a teen', 'Working Professional'].includes(
      category
    )
  )
    return NextResponse.json({ error: 'Invalid category.' }, { status: 400 });

  if (!['Malaysian', 'Non-Malaysian'].includes(citizenship))
    return NextResponse.json({ error: 'Invalid citizenship.' }, { status: 400 });

  if (!['D', 'DA'].includes(licenseType))
    return NextResponse.json({ error: 'Invalid license type.' }, { status: 400 });

  // Forward to Make.com webhook — only report success after the lead is accepted upstream.
  if (webhookUrl) {
    let webhookRes: Response;
    try {
      webhookRes = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: name.trim(),
          phone: normPhone,
          category,
          citizenship,
          licenseType,
        }),
      });
    } catch (error) {
      console.error('Lead webhook request failed', error);
      return NextResponse.json({ error: LEAD_FORWARDING_ERROR }, { status: 502 });
    }

    if (!webhookRes.ok) {
      console.error('Lead webhook returned non-success status', { status: webhookRes.status });
      return NextResponse.json({ error: LEAD_FORWARDING_ERROR }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
