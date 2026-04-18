/** Unified shape for testimonial cards (static, Google API, or manual JSON). */
export type DisplayReview = {
  id: string;
  name: string;
  location: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
  text: string;
  license: string;
  duration: string;
  accentColor: string;
};
