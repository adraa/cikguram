/** Google Business Profile on Maps (reviews, directions). Override via NEXT_PUBLIC_GOOGLE_MAPS_URL. */
export const GOOGLE_BUSINESS_MAPS_URL =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? 'https://maps.app.goo.gl/yi1x8GPtf3gcAs658';

/**
 * When `NEXT_PUBLIC_NEXT_INTAKE_DATE` is `YYYY-MM-DD`, returns a display string (Malaysia locale).
 * Leave unset if the next intake is not confirmed — the FAQ card omits the line instead of showing a placeholder.
 */
export function getNextIntakeDisplayLabel(): string | null {
  const raw = process.env.NEXT_PUBLIC_NEXT_INTAKE_DATE?.trim();
  if (!raw || !/^\d{4}-\d{2}-\d{2}$/.test(raw)) return null;
  const d = new Date(`${raw}T12:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat('en-MY', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}
