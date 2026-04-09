'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

/**
 * StickyMobileCTA
 * Renders a fixed bottom bar on mobile (hidden on sm+).
 * Automatically hides when the #register section is scrolled into view,
 * so it never overlaps the form itself.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById('register');
    if (!target) return;

    // Show bar after a short delay on mount so it doesn't flash immediately
    const showTimer = setTimeout(() => setVisible(true), 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide when the register section is ≥ 10% visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(target);

    return () => {
      clearTimeout(showTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-white border-t border-black/8 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#register"
        className="btn-primary flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-display font-700"
      >
        <Icon name="BoltIcon" size={16} variant="solid" />
        Claim RM299 Discount Now ↓
      </a>
      <p className="text-center text-[11px] text-black/35 font-body mt-1.5">
        Only 4 spots left &middot; No payment needed
      </p>
    </div>
  );
}
