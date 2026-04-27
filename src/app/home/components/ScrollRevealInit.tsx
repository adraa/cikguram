'use client';

import { useLayoutEffect } from 'react';

const REVEAL_SELECTOR = ':is(.reveal, .reveal-left, .reveal-right, .reveal-scale)';
const OBSERVER_OPTIONS = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' } as const;

/**
 * Mirrors IntersectionObserver (viewport root + same rootMargin + threshold) so
 * elements already in view get `.visible` before paint — avoids an empty-looking
 * first screen while keeping the same CSS animations. Scrolled-in elements still
 * use the observer only.
 */
function intersectsRevealRoot(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const rootTop = 0;
  const rootLeft = 0;
  const rootRight = window.innerWidth;
  const rootBottom = window.innerHeight - 40; // rootMargin bottom -40px

  const ih = Math.min(rect.bottom, rootBottom) - Math.max(rect.top, rootTop);
  const iw = Math.min(rect.right, rootRight) - Math.max(rect.left, rootLeft);
  if (ih <= 0 || iw <= 0) return false;

  const intersectionArea = ih * iw;
  const targetArea = rect.width * rect.height;
  if (targetArea <= 0) return false;

  return intersectionArea / targetArea >= OBSERVER_OPTIONS.threshold;
}

export default function ScrollRevealInit() {
  useLayoutEffect(() => {
    const allElements = document.querySelectorAll(REVEAL_SELECTOR);
    const list = Array.from(allElements);

    const alreadyVisible = new Set<Element>();
    for (const el of list) {
      if (intersectsRevealRoot(el)) {
        el.classList.add('visible');
        alreadyVisible.add(el);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      OBSERVER_OPTIONS
    );

    for (const el of list) {
      if (!alreadyVisible.has(el)) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
