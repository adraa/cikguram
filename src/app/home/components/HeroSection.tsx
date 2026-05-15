'use client';

import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import TrustStatsGrid from '@/app/home/components/TrustStatsGrid';
import { scrollToFullNameInput } from '@/lib/scroll-to-full-name-input';

const HERO_IMAGE_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

/** One-line urgency under trust stats; kept short so narrow phones do not wrap it. */
const HERO_URGENCY_LINE = 'ONLY 7 SEATS LEFT IN MAY 2026';

/** Primary hero CTA — same words on all breakpoints; desktop size unchanged. */
const HERO_CTA_LABEL = 'SECURE MY SEAT NOW (SAVE RM299)';

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
        <div className="relative w-full overflow-hidden bg-[#F8F8F6] max-md:flex max-md:min-h-[100svh] max-md:flex-col max-md:items-start max-md:overflow-visible max-md:bg-[#F4F5EF] md:aspect-[1536/1024]">
          {/* Mobile: overlay bottom = poster bottom (avoids viewport-anchored dead space). Desktop: wrapper is `contents` so layout matches prior siblings. */}
          <div className="relative w-full max-md:self-start max-md:pb-[clamp(7rem,26vw,10.25rem)] md:contents">
            <div className="hero-mobile-frame relative min-h-0 w-full overflow-hidden max-md:box-border max-md:h-auto max-md:rounded-2xl max-md:border-2 max-md:border-solid max-md:border-[#F8F8F6] max-md:bg-[#F8F8F6] max-md:p-0.5 md:absolute md:inset-0 md:h-full md:min-h-0 md:flex-none md:aspect-auto md:rounded-none md:border-0 md:bg-transparent md:p-0">
              <div className="relative w-full overflow-hidden max-md:h-auto max-md:rounded-[calc(1rem-2px)] md:contents md:h-full md:min-h-0">
                <picture className="block w-full max-md:relative max-md:h-auto md:absolute md:inset-0 md:h-full">
                  <source
                    media="(min-width: 768px)"
                    srcSet="/cikgu-ram-westport-driving-academy-new-desktop-hero-section.webp"
                  />
                  <img
                    src="/cikgu-ram-westport-driving-academy-mobile-hero-45-days-fast-track.webp"
                    alt={HERO_IMAGE_ALT}
                    width={682}
                    height={1024}
                    className="block max-h-none w-full max-w-none max-md:relative max-md:h-auto max-md:w-full md:absolute md:inset-0 md:h-full md:object-cover md:object-top"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
            <div className="hero-mobile-actions pointer-events-none z-10 flex w-full justify-center px-3 sm:px-5 md:absolute md:inset-x-0 md:bottom-0 md:mt-0 md:items-end md:bg-transparent md:[background-image:none] md:px-6 md:pb-4 md:pt-3.5">
              <div className="pointer-events-auto hero-bottom-stack-enter flex w-full max-w-[min(100%,22.5rem)] flex-col items-stretch gap-2 md:max-w-[22rem] md:gap-4">
                <TrustStatsGrid className="w-full" presentation="supporting" />
                <div
                  className="hero-urgency-card-pulse flex min-h-[44px] items-center justify-center rounded-lg border border-solid border-black/[0.1] bg-white px-2 py-1.5 backdrop-blur-sm sm:px-3 md:min-h-0 md:rounded-xl md:border-black/[0.12] md:bg-white/95 md:px-3.5 md:py-2.5 md:backdrop-blur-md"
                  role="status"
                >
                  <p
                    className="w-full whitespace-nowrap text-center font-display text-sm font-semibold uppercase leading-tight tracking-wide text-[#1a1814] max-[359px]:text-[11px] sm:text-[11px] md:text-[0.875rem] md:font-bold md:leading-none md:tracking-normal"
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
                  className="btn-primary rounded-lg inline-flex min-h-[44px] w-full max-w-full flex-wrap items-center justify-center gap-1.5 text-center font-display font-700 uppercase leading-snug tracking-wide shadow-[0_6px_22px_rgba(204,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.22)] [-webkit-tap-highlight-color:transparent] touch-manipulation motion-safe:hover:shadow-[0_10px_32px_rgba(204,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.25)] motion-safe:active:brightness-[0.96] motion-reduce:active:brightness-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1814]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5EF] md:focus-visible:ring-offset-[#F8F8F6] max-md:px-3 max-md:py-3 max-md:text-base sm:max-md:text-lg max-[359px]:gap-1 max-[359px]:px-2 max-[359px]:py-2.5 max-[359px]:text-sm sm:gap-2 sm:px-4 md:min-h-[48px] md:flex-nowrap md:gap-2 md:whitespace-nowrap md:rounded-xl md:px-9 md:py-4 md:text-[17px] md:leading-none md:tracking-normal"
                  aria-label="Secure my seat now and save RM299 - go to registration form"
                >
                  <span className="max-w-full text-pretty md:shrink-0">{HERO_CTA_LABEL}</span>
                  <ArrowDownIcon
                    className="h-4 w-4 shrink-0 max-md:h-5 max-md:w-5 md:h-[1.125rem] md:w-[1.125rem]"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
