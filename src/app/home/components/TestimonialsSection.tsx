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
      // Single geometry read + CSS --marquee-gap (see tailwind.css) — no getComputedStyle
      track.style.setProperty('--marquee-w', `calc(${seg1.offsetWidth}px + var(--marquee-gap))`);
    };
    let raf = 0;
    const scheduleSync = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        sync();
      });
    };
    sync();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(scheduleSync) : null;
    if (seg1) ro?.observe(seg1);
    if (track) ro?.observe(track);
    window.addEventListener('resize', scheduleSync);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener('resize', scheduleSync);
    };
  }, [items]);

  return (
    <div className="testimonials-marquee-wrap">
      <div
        ref={trackRef}
        className="testimonials-marquee-track flex flex-nowrap gap-5 sm:gap-6 md:gap-7"
      >
        <div ref={seg1Ref} className="flex shrink-0 items-start gap-5 sm:gap-6 md:gap-7">
          {items.map((t) => (
            <ReviewCard
              key={`m-a-${t.id}`}
              t={t}
              expanded={!!expandedById[t.id]}
              onExpandedChange={(next) => setExpandedById((p) => ({ ...p, [t.id]: next }))}
            />
          ))}
        </div>
        <div className="flex shrink-0 items-start gap-5 sm:gap-6 md:gap-7" aria-hidden="true">
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
      className="font-google relative overflow-hidden border-y border-black/[0.06] bg-white py-16 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_42%,#ffffff_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-8%,rgba(255,255,255,0.9)_0%,transparent_52%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-black/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <h2 className="mx-auto mb-0 flex max-w-[min(100%,20rem)] flex-col items-center gap-1.5 text-pretty text-center sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2.5 sm:gap-y-0">
            <span className="text-pretty font-display font-700 text-3xl text-[#111111] tracking-tight leading-[1.15] sm:text-4xl md:text-5xl">
              Success Stories Of
            </span>
            <span className="text-pretty font-space font-700 text-3xl leading-[1.15] tracking-[-0.02em] text-[#CC0000] sm:text-4xl md:text-5xl">
              CIKGU RAM 🇲🇾
            </span>
          </h2>
          <a
            href={GOOGLE_BUSINESS_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-black/[0.1] bg-white px-5 py-2.5 font-google text-[15px] font-semibold leading-snug tracking-tight text-[#202124] shadow-sm transition-colors hover:bg-black/[0.03] active:bg-black/[0.05] sm:mt-6 sm:px-6 sm:py-3 sm:text-sm sm:font-bold md:mt-7"
          >
            <span>See reviews on Google</span>
            <Icon
              name="ArrowTopRightOnSquareIcon"
              size={16}
              variant="outline"
              className="shrink-0 text-[#5F6368]"
              aria-hidden
            />
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-7xl motion-reduce:block">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 pt-1 sm:gap-6 sm:px-6 sm:pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-gradient-to-r from-white via-white/95 to-transparent sm:w-14 md:w-16"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-gradient-to-l from-white via-white/95 to-transparent sm:w-14 md:w-16"
            aria-hidden="true"
          />
          <TestimonialsMarqueeTrack items={items} />
        </div>
      </div>
    </section>
  );
}
