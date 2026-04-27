import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const HERO_IMAGE_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

const heroRegisterOverlayLinkBase =
  'pointer-events-auto relative z-[1] inline-flex shrink-0 flex-row items-center justify-center whitespace-nowrap rounded-xl border-2 border-white/70 bg-[#E31E24] text-center font-display font-black uppercase tracking-wide text-white shadow-[0_12px_40px_rgba(227,30,36,0.55)] ring-2 ring-white/35 transition-transform hover:border-white hover:brightness-105 hover:shadow-[0_14px_44px_rgba(227,30,36,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100 sm:scale-[1.03] motion-reduce:sm:scale-100';

const heroSecondaryOverlayLinkBase =
  'pointer-events-auto inline-flex shrink-0 flex-row items-center justify-center whitespace-nowrap rounded-xl border border-white/40 bg-black/35 text-center font-display font-semibold uppercase tracking-wide text-white/95 shadow-[0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors hover:border-white/55 hover:bg-black/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100';

/** Secondary CTAs: same anchors as nav — lower visual weight than Register Now. */
function HeroSecondaryOverlayLink({
  href,
  'aria-label': ariaLabel,
  children,
}: {
  href: string;
  'aria-label': string;
  children: React.ReactNode;
}) {
  const sizing =
    'min-h-[44px] max-w-full px-2 py-2 text-[10px] leading-tight sm:px-3 sm:text-xs md:px-4 md:text-sm';

  return (
    <a href={href} aria-label={ariaLabel} className={`${heroSecondaryOverlayLinkBase} ${sizing}`}>
      <span className="block text-center leading-tight">{children}</span>
    </a>
  );
}

/** Primary CTA — centered between secondaries; scales up slightly vs flanking buttons. */
function HeroRegisterOverlayLink() {
  const sizing =
    'min-h-[44px] shrink-0 gap-1.5 px-3 py-2 text-xs sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm md:min-h-[52px] md:px-6 md:py-3 md:text-base';

  const iconClasses = 'h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]';

  return (
    <a
      href="#full-name-input"
      aria-label="Register now — go to registration form"
      className={`${heroRegisterOverlayLinkBase} ${sizing}`}
    >
      <span className="whitespace-nowrap">Register Now</span>
      <span className="cta-arrow inline-flex shrink-0" aria-hidden>
        <ArrowDownIcon className={iconClasses} />
      </span>
    </a>
  );
}

/** Single row on all breakpoints; grid keeps Register geometrically centered with flanking CTAs. */
function HeroOverlayCTAs() {
  return (
    <div className="pointer-events-auto grid w-full max-w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-1 px-0.5 sm:gap-x-2 sm:px-2 md:gap-x-4 md:px-4">
      <div className="flex min-w-0 justify-end">
        <HeroSecondaryOverlayLink
          href="#instructor"
          aria-label="Meet Cikgu Ram — jump to instructor section"
        >
          Meet Cikgu Ram
        </HeroSecondaryOverlayLink>
      </div>
      <div className="flex justify-center">
        <HeroRegisterOverlayLink />
      </div>
      <div className="flex min-w-0 justify-start">
        <HeroSecondaryOverlayLink
          href="#pricing"
          aria-label="View package — jump to pricing section"
        >
          View Package
        </HeroSecondaryOverlayLink>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full overflow-hidden" aria-label="Hero section">
      <h1 className="sr-only">
        Ready to drive? Get your P-license with Cikgu Ram at Westport Authority Official Academy.
        Fast-track driving school, save RM299, free transport. Get your driving license in about six
        weeks.
      </h1>

      {/* Mobile: full-bleed width, natural 1536×2752 aspect (no object-cover crop). */}
      <div className="relative w-full bg-[#121212] md:hidden">
        <Image
          src="/cikgu-ram-westport-driving-academy-mobile-hero-section.webp"
          alt={HERO_IMAGE_ALT}
          width={1536}
          height={2752}
          className="block h-auto w-full max-w-none"
          priority
          sizes="100vw"
          unoptimized
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-16">
          <HeroOverlayCTAs />
        </div>
      </div>

      {/* Desktop: frame matches asset 2752×1536 */}
      <div className="relative hidden aspect-[2752/1536] w-full overflow-hidden md:block">
        <Image
          src="/cikgu-ram-westport-driving-academy-desktop-hero-section.webp"
          alt={HERO_IMAGE_ALT}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-4 pt-12 sm:pb-5 sm:pt-16 md:pb-6 md:pt-20">
          <HeroOverlayCTAs />
        </div>
      </div>
    </section>
  );
}
