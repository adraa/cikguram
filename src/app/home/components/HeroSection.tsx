'use client';

import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import TrustStatsGrid from '@/app/home/components/TrustStatsGrid';
import { scrollToFullNameInput } from '@/lib/scroll-to-full-name-input';

const HERO_IMAGE_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

/** One-line urgency under trust stats; `clamp` keeps copy on a single row from ~320px up. */
const HERO_URGENCY_LINE = '⚠️ ONLY 7 SEATS LEFT IN MAY 2026 ⚠️';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden" aria-label="Hero section">
      <h1 className="sr-only">
        Ready to drive? Get your P-license with Cikgu Ram at Westport Authority Official Academy.
        Fast-track driving school, save RM299, free transport. Get your driving license in about six
        weeks.
      </h1>

      {/*
        One `<picture>` / one selected asset: two separate `next/image` heroes both had `priority`,
        which commonly triggers eager fetches for the hidden breakpoint image too — extra decode
        bandwidth before first contentful paint. `next.config` + layout preloads use `media` to match.
        Warm neutral `#F8F8F6` on outer + inner photo frame so the hero blends with the site header;
        picture markup and sizing classes are unchanged.
      */}
      <div className="relative w-full overflow-hidden bg-[#F8F8F6] pb-[max(10.75rem,env(safe-area-inset-bottom,0px)+10rem)] sm:pb-[max(10.5rem,env(safe-area-inset-bottom,0px)+9.75rem)] md:pb-[max(10.25rem,env(safe-area-inset-bottom,0px)+9.5rem)]">
        <div className="relative w-full overflow-hidden bg-[#F8F8F6] max-md:h-[min(78dvh,760px)] max-md:min-h-[260px] md:aspect-[1536/1024]">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              media="(min-width: 768px)"
              srcSet="/cikgu-ram-westport-driving-academy-new-desktop-hero-section.webp"
            />
            <img
              src="/cikgu-ram-westport-driving-academy-new-mobile-hero-828.webp"
              alt={HERO_IMAGE_ALT}
              width={828}
              height={1242}
              className="block h-full w-full max-w-none object-cover object-top md:object-center"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-3.5 pb-[max(0.5rem,env(safe-area-inset-bottom,0px)+0.25rem)] pt-2.5 sm:px-5 sm:pb-[max(0.625rem,env(safe-area-inset-bottom,0px)+0.375rem)] sm:pt-3 md:px-6 md:pb-4 md:pt-3.5">
          <div className="pointer-events-auto hero-bottom-stack-enter flex w-full max-w-[min(100%,20rem)] flex-col items-stretch gap-3 sm:max-w-[20.5rem] sm:gap-3.5 md:max-w-[22rem] md:gap-4">
            <TrustStatsGrid variant="compact" />
            <div
              className="hero-urgency-card-pulse flex min-h-[40px] items-center justify-center rounded-xl border border-solid border-black/[0.12] bg-white/95 px-3 py-2 backdrop-blur-md sm:min-h-[44px] sm:px-3.5 sm:py-2.5 md:min-h-0 md:py-2.5"
              role="status"
            >
              <p
                className="w-full whitespace-nowrap text-center font-display text-sm font-bold uppercase leading-none tracking-tight text-[#1a1814] sm:text-[clamp(0.75rem,0.26rem+1.4vw,0.875rem)] sm:tracking-[0.06em]"
                aria-label="Only seven seats left in May twenty twenty-six"
              >
                {HERO_URGENCY_LINE}
              </p>
            </div>
            <a
              href="#full-name-input"
              onClick={(e) => {
                e.preventDefault();
                scrollToFullNameInput();
              }}
              className="btn-primary inline-flex min-h-[48px] w-full max-w-full flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-3.5 text-center text-sm font-display font-700 uppercase leading-none tracking-wide shadow-[0_6px_22px_rgba(204,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.22)] [-webkit-tap-highlight-color:transparent] touch-manipulation motion-safe:hover:shadow-[0_10px_32px_rgba(204,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.25)] motion-safe:active:brightness-[0.96] motion-reduce:active:brightness-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1814]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F8F6] sm:px-7 sm:py-4 sm:px-9 sm:text-[16px] md:text-[17px]"
              aria-label="Secure your seat and save RM299 — go to registration form"
            >
              <span className="shrink-0 whitespace-nowrap">SECURE MY SEAT (SAVE RM299)</span>
              <ArrowDownIcon
                className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem] md:h-[1.125rem] md:w-[1.125rem]"
                aria-hidden
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
