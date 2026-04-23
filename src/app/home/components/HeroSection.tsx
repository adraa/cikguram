import React from 'react';
import Image from 'next/image';

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function ThumbsUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
      <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function PeopleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const gradientText = {
  backgroundImage: 'linear-gradient(90deg, #FF2200 0%, #FF5500 50%, #FF9900 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

const gradientOrange = {
  backgroundImage: 'linear-gradient(90deg, #FF3300 0%, #FF8800 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
};

const features = [
  {
    Icon: ClockIcon,
    title: 'FAST TRACK',
    desc: 'Get your license in just 6 weeks',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'JPJ-READY',
    desc: 'Structured training by certified instructors',
  },
  {
    Icon: ThumbsUpIcon,
    title: 'HIGH PASS RATE',
    desc: 'Proven methods. Real results.',
  },
] as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
      aria-label="Hero section">

      {/* Mobile background */}
      <Image
        src="/hero-mobile.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-[center_35%] md:hidden"
        priority
        sizes="100vw"
        quality={78}
      />
      {/* Desktop background */}
      <Image
        src="/hero-desktop.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-center hidden md:block"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Vertical scrim: transparent top → dark bottom */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.92) 100%)',
        }}
      />
      {/* Desktop: horizontal scrim — dark left → transparent right (text legibility) */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.3) 46%, rgba(0,0,0,0) 65%)',
        }}
      />

      {/* Desktop: car image pinned to right half */}
      <div className="absolute right-0 bottom-0 w-[52%] h-full z-[2] hidden md:block pointer-events-none">
        <Image
          src="/hero-car.png"
          alt=""
          fill
          className="object-contain object-right-bottom"
          priority
          sizes="52vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div
          className="flex-1 flex flex-col justify-between md:justify-center md:gap-10 md:w-[50%] px-5 sm:px-8 md:px-10 lg:px-14 pt-[68px] sm:pt-[72px] pb-7 md:pb-12">

          {/* Headline + Subtitle */}
          <div>
            <h1
              className="font-headline font-black italic uppercase leading-[0.88] mb-3 md:mb-4"
              aria-label="Ready to drive? Get your driving license in 1 month and 2 weeks">
              <span
                className="block text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]"
                style={{ fontSize: 'clamp(3.8rem, 19vw, 7rem)' }}>
                READY
              </span>
              <span
                className="block drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]"
                style={{ fontSize: 'clamp(3.8rem, 19vw, 7rem)' }}>
                <span className="text-white">TO </span>
                <span style={gradientText}>DRIVE?</span>
              </span>
            </h1>

            <div>
              <p
                className="text-white/80 font-display font-semibold uppercase tracking-[0.12em] drop-shadow-sm"
                style={{ fontSize: 'clamp(0.72rem, 2vw, 0.9rem)' }}>
                GET YOUR DRIVING LICENSE
              </p>
              <p
                className="font-display font-black uppercase tracking-wide drop-shadow-sm"
                style={{ fontSize: 'clamp(1rem, 3.2vw, 1.25rem)', ...gradientText }}>
                IN 1 MONTH &amp; 2 WEEKS
              </p>
            </div>
          </div>

          {/* Feature badges + Spots bar + CTA */}
          <div className="flex flex-col gap-3">

            {/* Feature badges */}
            <div className="grid grid-cols-3 divide-x divide-white/25">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center text-center px-2 md:px-4 gap-1.5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#FF6600]" />
                  <span
                    className="font-display font-black uppercase text-white leading-none"
                    style={{ fontSize: 'clamp(9px, 2.2vw, 12px)' }}>
                    {title}
                  </span>
                  <span
                    className="font-body text-white/65 leading-tight"
                    style={{ fontSize: 'clamp(8px, 1.8vw, 11px)' }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Spots + Discount bar — clickable */}
            <a
              href="#full-name-input"
              className="block rounded-xl border border-white/30 overflow-hidden hover:border-white/55 transition-all active:scale-[0.99]">
              <div className="grid grid-cols-2 divide-x divide-white/30 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center gap-2.5 px-3 py-3 md:px-5 md:py-3.5">
                  <PeopleIcon className="w-5 h-5 md:w-6 md:h-6 text-white/70 shrink-0" />
                  <div className="text-left">
                    <span
                      className="block font-display font-black uppercase text-white leading-tight"
                      style={{ fontSize: 'clamp(10px, 2.4vw, 13px)' }}>
                      Only <span className="text-[#FF6600]">6</span> Spots
                    </span>
                    <span
                      className="block font-display font-semibold uppercase text-white/55 tracking-wide leading-none"
                      style={{ fontSize: 'clamp(8px, 1.8vw, 10px)' }}>
                      Left This Month
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center px-3 py-3 md:px-5 md:py-3.5">
                  <span
                    className="block font-display font-black uppercase leading-tight"
                    style={{ fontSize: 'clamp(0.85rem, 2.8vw, 1.1rem)', ...gradientOrange }}>
                    RM299 Discount
                  </span>
                  <span
                    className="block font-display font-semibold uppercase text-white/55 tracking-wide leading-none"
                    style={{ fontSize: 'clamp(8px, 1.8vw, 10px)' }}>
                    Claim Your Discount Now!
                  </span>
                </div>
              </div>
            </a>

            {/* CTA button */}
            <a
              href="#full-name-input"
              className="flex w-full min-h-[50px] items-center justify-center gap-2 bg-[#FF2020] hover:bg-[#E01010] text-white font-display font-black uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(255,32,32,0.5)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ fontSize: 'clamp(13px, 2.8vw, 15px)', padding: '14px 20px' }}>
              Claim RM299 Discount Now <span>↓</span>
            </a>

          </div>
        </div>
      </div>

    </section>
  );
}
