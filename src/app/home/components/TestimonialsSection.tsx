'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { GOOGLE_REVIEWS_STATIC } from '@/data/google-reviews-static';
import { GOOGLE_BUSINESS_MAPS_URL } from '@/lib/site-urls';
import type { DisplayReview } from '@/types/display-review';
import { ReviewCard } from '@/app/home/components/ReviewCard';

/** Sets --marquee-w = first segment width + flex gap so the CSS loop stays pixel-seamless. */
function TestimonialsMarqueeTrack({ items }: { items: DisplayReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const seg1Ref = useRef<HTMLDivElement>(null);
  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  useLayoutEffect(() => {
    const track = trackRef.current;
    const seg1 = seg1Ref.current;
    const sync = () => {
      if (!track || !seg1) return;
      const g = parseFloat(getComputedStyle(track).gap || '0') || 20;
      track.style.setProperty('--marquee-w', `${seg1.offsetWidth + g}px`);
    };
    sync();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    if (seg1) ro?.observe(seg1);
    if (track) ro?.observe(track);
    window.addEventListener('resize', sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [items]);

  return (
    <div className="testimonials-marquee-wrap">
      <div ref={trackRef} className="testimonials-marquee-track flex flex-nowrap gap-6">
        <div ref={seg1Ref} className="flex shrink-0 items-start gap-6">
          {items.map((t) => (
            <ReviewCard
              key={`m-a-${t.id}`}
              t={t}
              expanded={!!expandedById[t.id]}
              onExpandedChange={(next) => setExpandedById((p) => ({ ...p, [t.id]: next }))}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-start gap-6" aria-hidden="true">
          {items.map((t) => (
            <ReviewCard
              key={`m-b-${t.id}`}
              t={t}
              ariaHidden
              expanded={!!expandedById[t.id]}
              onExpandedChange={(next) => setExpandedById((p) => ({ ...p, [t.id]: next }))}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const items = GOOGLE_REVIEWS_STATIC;

  return (
    <section
      id="testimonials"
      className="font-google relative overflow-hidden border-y border-black/[0.06] bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_42%,#ffffff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(255,255,255,0.9)_0%,transparent_52%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-12 text-center sm:mb-16">
          <h2 className="mb-3 font-google text-[1.65rem] font-black leading-[1.08] tracking-[-0.03em] text-[#202124] sm:text-4xl md:text-[2.5rem]">
            <span className="block sm:inline">Why Do We Prefer</span>{' '}
            <span className="block text-[#202124]/90 sm:inline">CIKGU RAM 🇲🇾</span>
          </h2>
          <p className="mx-auto max-w-md font-google text-base font-normal leading-relaxed text-[#5F6368] sm:text-lg">
            Here&apos;s what our champions had to say.
          </p>
          <a
            href={GOOGLE_BUSINESS_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[12px] border border-black/[0.1] bg-white px-5 font-google text-sm font-bold tracking-tight text-[#202124] active:bg-black/[0.03]">
            <span>See reviews on Google</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" className="text-[#5F6368]" aria-hidden />
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-7xl motion-reduce:block">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t) => (
            <div key={t.id} className="snap-center snap-always">
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 block motion-reduce:hidden">
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-12 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-16"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-12 bg-gradient-to-l from-white via-white/95 to-transparent sm:w-16"
            aria-hidden="true"
          />
          <TestimonialsMarqueeTrack items={items} />
        </div>
      </div>
    </section>
  );
}
