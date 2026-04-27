import React from 'react';
import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

const HERO_IMAGE_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

const heroRegisterOverlayLinkBase =
  'pointer-events-auto inline-flex shrink-0 flex-row items-center justify-center whitespace-nowrap rounded-xl border border-white/55 bg-[#E31E24] text-center font-display font-black uppercase tracking-wide text-white shadow-red-lg transition-transform hover:border-white/80 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100';

/** CTA over hero art: mobile uses larger tap target and type; desktop matches wide hero layout. */
function HeroRegisterOverlayLink({ variant }: { variant: 'mobile' | 'desktop' }) {
  const variantClasses =
    variant === 'mobile'
      ? 'min-h-[52px] gap-2.5 px-5 py-3 text-sm'
      : 'min-h-[48px] gap-2 px-4 py-2.5 text-xs sm:gap-2.5 sm:px-5 sm:text-sm';

  const iconClasses =
    variant === 'mobile' ? 'h-5 w-5 shrink-0' : 'h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]';

  return (
    <a
      href="#full-name-input"
      aria-label="Register now — go to registration form"
      className={`${heroRegisterOverlayLinkBase} ${variantClasses}`}
    >
      <span>Register Now</span>
      <span className="cta-arrow inline-flex" aria-hidden>
        <ArrowDownIcon className={iconClasses} />
      </span>
    </a>
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
          <HeroRegisterOverlayLink variant="mobile" />
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
          <HeroRegisterOverlayLink variant="desktop" />
        </div>
      </div>
    </section>
  );
}
