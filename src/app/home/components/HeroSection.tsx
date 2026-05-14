'use client';

import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import TrustStatsGrid from '@/app/home/components/TrustStatsGrid';
import { scrollToFullNameInput } from '@/lib/scroll-to-full-name-input';

const HERO_IMAGE_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

/** One-line urgency under trust stats; kept short so narrow phones do not wrap it. */
const HERO_URGENCY_LINE = 'ONLY 7 SEATS LEFT IN MAY 2026';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden" aria-label="Hero section">
      <h1 className="sr-only">
        Ready to drive? Get your P-license with Cikgu Ram at Westport Authority Official Academy.
        Fast-track driving school, save RM299, free transport. Get your driving license in about six
        weeks.
      </h1>

      {/* Mobile renders the poster in document flow; desktop keeps the fixed-ratio cover image. */}
      <div className="relative w-full overflow-hidden bg-[#F8F8F6] max-md:bg-[#F4F5EF] md:pb-[max(10.25rem,env(safe-area-inset-bottom,0px)+9.5rem)]">
        <div className="relative w-full overflow-hidden bg-[#F8F8F6] max-md:flex max-md:min-h-[100svh] max-md:flex-col max-md:overflow-visible max-md:bg-[#F4F5EF] md:aspect-[1536/1024]">
          <div className="hero-mobile-frame relative min-h-0 w-full overflow-hidden md:absolute md:inset-0 md:h-full md:min-h-0 md:flex-none">
            <picture className="block h-full w-full max-md:relative max-md:h-auto md:absolute md:inset-0">
              <source
                media="(min-width: 768px)"
                srcSet="/cikgu-ram-westport-driving-academy-new-desktop-hero-section.webp"
              />
              <img
                src="/cikgu-ram-westport-driving-academy-mobile-hero-section-final.webp"
                alt={HERO_IMAGE_ALT}
                width={768}
                height={1376}
                className="block h-full w-full max-w-none brightness-105 max-md:h-auto max-md:object-contain max-md:object-top md:object-cover md:object-center"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
          <div className="hero-mobile-actions pointer-events-none z-10 flex w-full justify-center px-3 sm:px-5 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:items-end md:bg-transparent md:[background-image:none] md:px-6 md:pb-4 md:pt-3.5">
            <div className="pointer-events-auto hero-bottom-stack-enter flex w-full max-w-[min(100%,21rem)] flex-col items-stretch gap-1.5 md:max-w-[22rem] md:gap-4">
              <TrustStatsGrid
                variant="compact"
                className="max-md:rounded-lg max-md:[&>div>div]:gap-0 max-md:[&>div>div]:px-0.5 max-md:[&>div>div]:py-0.5 max-md:[&_span:first-child]:h-3 max-md:[&_span:first-child]:text-[9px] max-md:[&_span:nth-child(2)]:h-3.5 max-md:[&_span:nth-child(2)]:text-[10px] max-md:[&_span:last-child]:text-[7px] max-md:[&_span:last-child]:leading-none max-[359px]:[&_span:last-child]:text-[6.5px]"
              />
              <div
                className="hero-urgency-card-pulse flex min-h-[24px] items-center justify-center rounded-lg border border-solid border-black/[0.12] bg-white/95 px-1.5 py-0 backdrop-blur-md sm:min-h-[30px] sm:px-3 sm:py-1 md:min-h-0 md:rounded-xl md:px-3.5 md:py-2.5"
                role="status"
              >
                <p
                  className="w-full whitespace-nowrap text-center font-display text-[10px] font-bold uppercase leading-none tracking-normal text-[#1a1814] max-[359px]:text-[9px] sm:text-[11px] md:text-[0.875rem]"
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
                className="btn-primary inline-flex min-h-[42px] w-full max-w-full flex-nowrap items-center justify-center gap-1 whitespace-nowrap rounded-lg px-2 py-2 text-center text-[11px] font-display font-700 uppercase leading-none tracking-normal shadow-[0_6px_22px_rgba(204,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.22)] [-webkit-tap-highlight-color:transparent] touch-manipulation motion-safe:hover:shadow-[0_10px_32px_rgba(204,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.25)] motion-safe:active:brightness-[0.96] motion-reduce:active:brightness-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1814]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5EF] md:focus-visible:ring-offset-[#F8F8F6] max-[359px]:text-[10px] sm:min-h-[44px] sm:gap-2 sm:px-4 sm:text-[12px] md:min-h-[48px] md:rounded-xl md:px-9 md:py-4 md:text-[17px] md:tracking-normal"
                aria-label="Secure your seat and save RM299 - go to registration form"
              >
                <span className="shrink-0 whitespace-nowrap md:hidden">
                  SAVE RM299 - SECURE SEAT
                </span>
                <span className="hidden shrink-0 whitespace-nowrap md:inline">
                  SECURE MY SEAT (SAVE RM299)
                </span>
                <ArrowDownIcon
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 md:h-[1.125rem] md:w-[1.125rem]"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
