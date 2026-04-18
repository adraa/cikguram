/**
 * Live Google reviews: set GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID (server-only).
 * Enable "Places API" in Google Cloud; billing required. Place Details returns at most 5 reviews.
 * Place ID: use https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
 * or open your listing on Google Maps and copy from the URL (ChIJ…).
 *
 * Without API: add reviews to src/data/google-reviews-manual.json (same shape as DisplayReview).
 */
import { NextResponse } from 'next/server';
import manualReviews from '@/data/google-reviews-manual.json';
import { mapPlaceDetailsReviews } from '@/lib/google-place-reviews';
import type { DisplayReview } from '@/types/display-review';

/** Run on each request so server env (API key, Place ID) is always applied on Vercel. */
export const dynamic = 'force-dynamic';

const PLACE_DETAILS = 'https://maps.googleapis.com/maps/api/place/details/json';

function normalizeManual(raw: unknown): DisplayReview[] {
  if (!Array.isArray(raw)) return [];
  const ACCENT_ROTATION = [
    'border-t-[#CC0000]',
    'border-t-[#1A7A3C]',
    'border-t-[#C9A020]',
    'border-t-[#111111]',
  ];
  return raw
    .map((row, i) => {
      if (!row || typeof row !== 'object') return null;
      const o = row as Record<string, unknown>;
      const text = typeof o.text === 'string' ? o.text.trim() : '';
      if (!text) return null;
      const name = typeof o.name === 'string' ? o.name.trim() : 'Reviewer';
      const id = typeof o.id === 'string' && o.id.trim() ? o.id.trim() : `manual-${i}`;
      return {
        id,
        name,
        location: typeof o.location === 'string' ? o.location : 'Google review',
        avatar: typeof o.avatar === 'string' && o.avatar ? o.avatar : '/assets/images/no_image.png',
        avatarAlt: typeof o.avatarAlt === 'string' ? o.avatarAlt : `Photo of ${name}`,
        rating: Math.min(5, Math.max(1, Math.round(Number(o.rating) || 5))),
        text,
        license: typeof o.license === 'string' ? o.license : 'Google Maps',
        duration: typeof o.duration === 'string' ? o.duration : '',
        accentColor: typeof o.accentColor === 'string' ? o.accentColor : ACCENT_ROTATION[i % ACCENT_ROTATION.length],
      } satisfies DisplayReview;
    })
    .filter(Boolean) as DisplayReview[];
}

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (key && placeId) {
    try {
      const params = new URLSearchParams({
        place_id: placeId,
        fields: 'reviews',
        key,
      });
      const res = await fetch(`${PLACE_DETAILS}?${params}`, { cache: 'no-store' });
      const data = (await res.json()) as {
        status?: string;
        result?: { reviews?: { author_name?: string; profile_photo_url?: string; rating?: number; relative_time_description?: string; text?: string; time?: number }[] };
      };

      if (data.status === 'OK' && data.result?.reviews?.length) {
        const reviews = mapPlaceDetailsReviews(data.result.reviews);
        if (reviews.length > 0) {
          return NextResponse.json({
            source: 'places_api' as const,
            reviews,
          });
        }
      }
    } catch {
      // fall through to manual / empty
    }
  }

  const manual = normalizeManual(manualReviews);
  if (manual.length > 0) {
    return NextResponse.json({ source: 'manual_json' as const, reviews: manual });
  }

  return NextResponse.json({ source: 'none' as const, reviews: [] as DisplayReview[] });
}
