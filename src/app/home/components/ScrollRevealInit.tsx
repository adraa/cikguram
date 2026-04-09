'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const selectors = ['.reveal', '.reveal-left', '.reveal-right', '.reveal-scale'];
    const allElements: Element[] = [];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => allElements.push(el));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    allElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}