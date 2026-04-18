import type { DisplayReview } from '@/types/display-review';

const ACCENT_ROTATION = [
  'border-t-[#CC0000]',
  'border-t-[#1A7A3C]',
  'border-t-[#C9A020]',
  'border-t-[#111111]',
] as const;

const DEFAULT_AVATAR = '/assets/images/no_image.png';

type PlaceReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

export function mapPlaceDetailsReviews(reviews: PlaceReview[]): DisplayReview[] {
  return reviews
    .filter((r) => r.text && String(r.text).trim())
    .map((r, i) => {
      const name = (r.author_name || 'Google reviewer').trim();
      const time = typeof r.time === 'number' ? r.time : i;
      return {
        id: `google-${time}-${i}`,
        name,
        location: r.relative_time_description?.trim() || 'Google review',
        avatar: r.profile_photo_url?.trim() || DEFAULT_AVATAR,
        avatarAlt: name ? `Profile photo of ${name}` : 'Reviewer',
        rating: Math.min(5, Math.max(1, Math.round(Number(r.rating) || 5))),
        text: String(r.text).trim(),
        license: 'Google Maps',
        duration: r.relative_time_description?.trim() || 'Google review',
        accentColor: ACCENT_ROTATION[i % ACCENT_ROTATION.length],
      };
    });
}
