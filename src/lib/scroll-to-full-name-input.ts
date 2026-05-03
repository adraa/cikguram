/** Shared smooth scroll + focus for in-page CTAs targeting the registration form. */
export function scrollToFullNameInput() {
  const el = document.getElementById('full-name-input');
  if (!el) return;
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';
  el.scrollIntoView({ behavior, block: 'center' });
  setTimeout(() => el.focus(), prefersReduced ? 0 : 650);
}
