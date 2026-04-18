/** Testimonial card data. Empty `avatar` shows initials (Google-style static reviews). */
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
