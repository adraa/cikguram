import React from 'react';
import Image from 'next/image';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
      aria-label="Hero section">

      {/* Mobile hero (portrait) — visible below md */}
      <Image
        src="/hero-mobile.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-[center_55%] md:hidden"
        priority
        sizes="100vw"
        quality={92}
      />
      {/* Desktop hero (landscape) — visible at md and above */}
      <Image
        src="/hero-desktop.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-center hidden md:block"
        priority
        sizes="100vw"
        quality={92}
      />

      {/* Dark scrim — protects headline text at top, deepens toward CTAs at bottom */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0.22) 42%, rgba(0,0,0,0.65) 72%, rgba(0,0,0,0.88) 100%)',
        }}
      />

      <div className="relative z-10 w-full flex-1 flex flex-col">

        {/* Text content */}
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center px-5 sm:px-8 lg:px-10 pt-[50px] sm:pt-28 pb-4 sm:pb-10">

          {/* Badge pill — kept exactly as-is */}
          <div className="reveal mb-3 sm:mb-4">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-black/12 text-[#111111] font-display font-semibold tracking-[0.05em] uppercase shadow-sm"
              style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
              <span className="traffic-dot shrink-0" />
              P-License in 1 Month &amp; 2 Weeks
            </span>
          </div>

          {/* Headline — unified type system: red leads, white follows, one visual voice */}
          <h1 className="mb-6 sm:mb-8 flex flex-col items-center" style={{ fontFamily: 'var(--font-headline)', fontWeight: 900 }}>
            <span
              className="block leading-[0.88] text-[#CC0000] italic uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(3.4rem, 11vw, 7rem)', letterSpacing: '0.01em', textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Guaranteed
            </span>
            <span
              className="block leading-[0.88] text-[#CC0000] italic uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(3.4rem, 11vw, 7rem)', letterSpacing: '0.01em', textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Fastest
            </span>
            <span
              className="block font-body not-italic text-white/85 tracking-wide leading-snug mt-2"
              style={{ fontSize: 'clamp(1.25rem, 4.2vw, 2.25rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Way To Get Your
            </span>
            <span
              className="block font-body not-italic text-white/85 tracking-wide leading-snug"
              style={{ fontSize: 'clamp(1.25rem, 4.2vw, 2.25rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Driving License
            </span>
          </h1>

          {/* CTAs — desktop only */}
          <div className="reveal delay-200 hidden sm:flex flex-col items-center gap-3">
            <a
              href="#register"
              className="min-h-[48px] bg-[#CC0000] hover:bg-[#A30000] text-white flex items-center justify-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_8px_24px_rgba(204,0,0,0.45)] transition-all hover:-translate-y-0.5 active:scale-[0.98]">
              Claim RM299 Discount Now ↓
            </a>
            {/* Secondary link — clearly subordinate: no background, smaller, lower opacity */}
            <a
              href="#process"
              className="text-white/60 hover:text-white/90 text-xs font-display font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition-colors duration-200 drop-shadow-sm">
              Meet Cikgu Ram ↓
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Mobile CTAs — stronger presence, anchored urgency */}
        <div className="sm:hidden px-5 pb-6 flex flex-col items-center gap-2 w-full max-w-[320px] mx-auto">
          {/* Urgency pill — primes anxiety BEFORE the CTA */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{ background: 'rgba(204,0,0,0.10)', borderColor: 'rgba(204,0,0,0.28)' }}>
            <span className="w-2 h-2 rounded-full bg-[#CC0000] shrink-0 animate-pulse" />
            <span className="text-[#FF4444] text-[11px] font-display font-700 tracking-wide whitespace-nowrap">
              Only 4 spots left this month
            </span>
          </div>
          <a
            href="#register"
            className="w-full min-h-[52px] bg-[#CC0000] hover:bg-[#A30000] text-white flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_8px_24px_rgba(204,0,0,0.45)] transition-transform active:scale-[0.98]">
            Claim RM299 Discount Now ↓
          </a>
          <a
            href="#process"
            className="min-h-[44px] flex items-center justify-center gap-1.5 text-white text-sm font-display font-black uppercase tracking-wider whitespace-nowrap transition-colors drop-shadow-md">
            Meet Cikgu Ram ↓
          </a>
        </div>

      </div>

      {/* Trust signals — white card pinned to very bottom, pb-4 prevents desktop clip */}
      <div className="absolute bottom-0 left-0 right-0 z-20 sm:relative sm:z-10 w-full px-4 pb-0 sm:pb-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-black/6 overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-black/8">

            {/* Col 1 — Google Rating */}
            <div className="flex flex-col items-center justify-center gap-1 py-3 sm:py-4 px-2">
              {/* Photo avatars — bigger, less overlap so faces read clearly */}
              <div className="flex items-center">
                {[
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png', alt: 'Nurul Ain' },
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png', alt: 'Vikram' },
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png', alt: 'Wei Xian' },
                ].map((av, i) => (
                  <div
                    key={av.alt}
                    className="w-8 h-8 rounded-full border-[2.5px] border-white overflow-hidden shrink-0"
                    style={{ marginLeft: i > 0 ? '-6px' : 0, zIndex: 3 - i }}
                  >
                    <AppImage
                      src={av.src}
                      alt={av.alt}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Number FIRST — proof, not label */}
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span className="font-display font-black text-[20px] sm:text-[22px] text-[#111111] tracking-tight leading-none">4.9</span>
                <span className="text-[#C9A020] text-[13px] leading-none ml-0.5">★</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-black/45 font-display font-semibold tracking-wide text-center leading-tight uppercase">
                Google Rating
              </span>
            </div>

            {/* Col 2 — Experience */}
            <div className="flex flex-col items-center justify-center gap-0.5 py-3 sm:py-4 px-2">
              <span className="font-display font-black text-[20px] sm:text-[22px] text-[#111111] tracking-tight leading-none">
                10+
              </span>
              <span className="text-[9px] sm:text-[10px] text-black/45 font-display font-semibold tracking-wide text-center leading-tight uppercase">
                Yrs Experience
              </span>
            </div>

            {/* Col 3 — Students Passed */}
            <div className="flex flex-col items-center justify-center gap-0.5 py-3 sm:py-4 px-2">
              <span className="font-display font-black text-[20px] sm:text-[22px] text-[#111111] tracking-tight leading-none">
                500+
              </span>
              <span className="text-[9px] sm:text-[10px] text-black/45 font-display font-semibold tracking-wide text-center leading-tight uppercase">
                Students Passed
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
