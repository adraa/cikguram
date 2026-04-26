import React from 'react';
import Image from 'next/image';
import {
  ArrowDownIcon,
  ClockIcon,
  ShieldCheckIcon,
  HandThumbUpIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const HERO_FEATURES = [
  {
    icon: ClockIcon,
    title: 'Fast track',
    body: 'Get your license in just 6 weeks.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'JPJ-ready',
    body: 'Structured training by certified instructors.',
  },
  {
    icon: HandThumbUpIcon,
    title: 'High pass rate',
    body: 'Proven methods. Real results.',
  },
] as const;

function heroRevealClass(
  delay:
    | ''
    | 'delay-100'
    | 'delay-200'
    | 'delay-300'
    | 'delay-400'
    | 'delay-500',
) {
  const base =
    'motion-reduce:opacity-100 motion-safe:opacity-0 motion-safe:animate-fade-up';
  return delay ? `${base} ${delay}` : '';
}

/** Portrait poster: white type on bright red, slanted ribbon (parallelogram). */
function MobileRedParallelogramTimeline() {
  return (
    <div className="flex justify-center">
      <div className="inline-block shadow-lg ring-1 ring-white/25 [transform:skewX(-14deg)] bg-[#E60000] px-8 py-2.5 sm:px-10 sm:py-3">
        <span className="block [transform:skewX(14deg)] text-center font-display text-xs font-bold uppercase italic tracking-[0.14em] text-white sm:text-sm">
          In 1 month &amp; 2 weeks
        </span>
      </div>
    </div>
  );
}

const DESKTOP_HERO_ALT =
  'Ready to drive? Get your P-license in 45 days fast track with Cikgu Ram. Save RM299. Free transport. Westport driving academy.';

/** Same control as desktop lower-banner CTA; used in overlay rows (pointer-events on parent). */
function HeroRegisterOverlayLink() {
  return (
    <a
      href="#full-name-input"
      aria-label="Register now — go to registration form"
      className="pointer-events-auto inline-flex min-h-[48px] shrink-0 flex-row items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/55 bg-[#E31E24] px-4 py-2.5 text-center font-display text-xs font-black uppercase tracking-wide text-white shadow-red-lg transition-transform hover:border-white/80 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:gap-2.5 sm:px-5 sm:text-sm motion-reduce:transition-none motion-reduce:hover:brightness-100 motion-reduce:active:scale-100">
      <span>Register Now</span>
      <span className="cta-arrow inline-flex" aria-hidden>
        <ArrowDownIcon className="h-4 w-4 shrink-0 sm:h-[1.125rem] sm:w-[1.125rem]" />
      </span>
    </a>
  );
}

function FeatureColumns() {
  return (
    <ul className="mt-6 grid w-full max-w-md grid-cols-3 divide-x divide-white/35">
      {HERO_FEATURES.map((item, i) => {
        const Icon = item.icon;
        const delays: ('delay-100' | 'delay-200' | 'delay-300')[] = [
          'delay-100',
          'delay-200',
          'delay-300',
        ];
        return (
          <li
            key={item.title}
            className={`flex min-w-0 flex-col items-center px-1.5 text-center sm:px-2 ${heroRevealClass(
              delays[i] ?? 'delay-100',
            )}`}>
            <Icon
              className="mx-auto h-6 w-6 shrink-0 text-[#FF8C00] sm:h-7 sm:w-7"
              aria-hidden
            />
            <p className="mt-2 font-display text-[9px] font-bold uppercase leading-tight tracking-wide text-white sm:text-[10px]">
              {item.title}
            </p>
            <p className="mt-1 font-body text-[8px] font-normal leading-snug text-white sm:text-[10px]">
              {item.body}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col overflow-hidden md:block md:min-h-0 md:overflow-hidden"
      aria-label="Hero section">
      {/* Lossless WebP from PNG — unoptimized so Next does not re-encode the asset */}
      <Image
        src="/cikgu-ram-westport-driving-academy-mobile-hero-section.webp"
        alt={DESKTOP_HERO_ALT}
        fill
        className="object-cover object-[center_28%] md:hidden"
        priority
        sizes="100vw"
        unoptimized
      />
      {/* Desktop: frame matches asset 2752×1536 → object-cover scales uniformly with zero crop and no letterboxing */}
      <div className="relative z-0 hidden aspect-[2752/1536] w-full overflow-hidden md:block">
        <Image
          src="/cikgu-ram-westport-driving-academy-desktop-hero-section.webp"
          alt={DESKTOP_HERO_ALT}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />
        {/* Desktop: CTA centred on lower part of banner (sits on built-in fade) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-4 pt-12 sm:pb-5 sm:pt-16 md:pb-6 md:pt-20">
          <HeroRegisterOverlayLink />
        </div>
      </div>

      {/* Scrim only on mobile — desktop hero is a flat graphic with its own contrast */}
      <div className="absolute inset-0 z-[1] bg-hero-scrim md:hidden" aria-hidden />

      {/* Mobile: same Register CTA as desktop, over the photo (clears bottom sheet) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[12] flex justify-center px-4 pb-[min(48svh,18rem)] pt-10 md:hidden">
        <HeroRegisterOverlayLink />
      </div>

      <h1 className="sr-only">
        Ready to drive? Get your P-license with Cikgu Ram at Westport Authority Official Academy.
        Fast-track driving school, save RM299, free transport. Get your driving license in about six
        weeks.
      </h1>

      {/* ——— Mobile: portrait poster ——— */}
      <div className="relative z-10 flex min-h-[100svh] flex-col md:hidden">
        <div className="flex flex-1 flex-col items-center px-3 pb-4 pt-12 text-center sm:px-4 sm:pt-14">
          <div
            aria-hidden
            className="w-full max-w-[22rem] [transform:perspective(760px)_rotateX(6deg)] origin-[50%_0%] font-headline font-black uppercase leading-[0.8] tracking-tight sm:max-w-md">
            <span
              className={`block text-[clamp(2.65rem,12vw,4.35rem)] text-poster-ready ${heroRevealClass(
                '',
              )}`}>
              Ready
            </span>
            <span
              className={`mt-1 flex flex-wrap items-end justify-center gap-x-2 gap-y-0 ${heroRevealClass(
                'delay-100',
              )}`}>
              <span className="pb-[0.08em] font-headline text-[clamp(1.85rem,8.5vw,3.1rem)] font-black tracking-tight text-poster-ready">
                To
              </span>
              <span className="font-headline text-[clamp(2.65rem,12vw,4.6rem)] font-black italic leading-none tracking-tight text-gradient-drive-poster">
                Drive?
              </span>
            </span>
          </div>

          <p
            className={`mt-5 max-w-md px-1 font-display text-xs font-bold uppercase leading-snug tracking-wide text-white drop-shadow-md sm:text-sm ${heroRevealClass(
              'delay-200',
            )}`}>
            Get your driving license
          </p>

          <div className={`mt-5 w-full max-w-md px-1 ${heroRevealClass('delay-300')}`}>
            <MobileRedParallelogramTimeline />
          </div>

          <FeatureColumns />
        </div>

        <div className="mt-auto space-y-4 bg-black/85 px-3 pb-7 pt-5 backdrop-blur-md supports-[backdrop-filter]:bg-black/75 sm:px-4">
          <div
            className={`mx-auto w-full max-w-md overflow-hidden rounded-lg border border-white/90 bg-black/70 ${heroRevealClass(
              'delay-400',
            )}`}>
            <div className="flex flex-col divide-y divide-white/30 sm:flex-row sm:divide-x sm:divide-y-0">
              <div className="flex flex-col items-center gap-2 px-3 py-3.5 sm:flex-1 sm:flex-row sm:justify-center sm:gap-2.5 sm:px-4">
                <UsersIcon className="h-6 w-6 shrink-0 text-white" aria-hidden />
                <p className="text-center font-display text-[10px] font-bold uppercase leading-snug tracking-wide text-white sm:text-[11px]">
                  Only <span className="text-[#FF8C00]">6 spots</span> left this month
                </p>
              </div>
              <a
                href="#full-name-input"
                className="flex min-h-[44px] flex-col items-center justify-center gap-1 px-3 py-3.5 text-center uppercase sm:flex-1 sm:px-4">
                <span className="font-display text-xs font-black tracking-wide text-[#FF8C00] sm:text-sm">
                  RM299 discount
                </span>
                <span className="font-display text-[9px] font-bold tracking-wide text-white sm:text-[10px]">
                  Claim your discount now!
                </span>
              </a>
            </div>
          </div>

          <div className={`mx-auto w-full max-w-md ${heroRevealClass('delay-500')}`}>
            <a
              href="#full-name-input"
              className="flex min-h-[48px] w-full flex-row items-center justify-center gap-3 rounded-2xl bg-[#E31E24] px-5 py-3.5 text-center font-display text-sm font-black uppercase tracking-wider text-white shadow-red-lg transition-transform hover:brightness-105 active:scale-[0.98] sm:text-base">
              <span>Register Now</span>
              <span className="cta-arrow text-lg leading-none">↓</span>
            </a>
          </div>

          <footer className="flex flex-col items-center gap-2.5 pt-1">
            <Image
              src="/assets/images/app_logo.png"
              alt="Westport Authority Official Academy"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
            <p className="font-display text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-[11px]">
              Westport Authority
            </p>
            <div className="flex max-w-xs items-center justify-center gap-2.5 px-4">
              <span className="h-px w-10 bg-[#C5A059] sm:w-12" aria-hidden />
              <span className="text-center font-display text-[9px] font-bold uppercase tracking-[0.28em] text-[#C5A059] sm:text-[10px]">
                Official Academy
              </span>
              <span className="h-px w-10 bg-[#C5A059] sm:w-12" aria-hidden />
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
