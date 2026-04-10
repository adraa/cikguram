import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
      aria-label="Hero section">

      <Image
        src="/hero-car.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-[center_40%]"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Art-directed gradient: clear at top so the image breathes, darkening intentionally downward to anchor the CTAs */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0.22) 42%, rgba(0,0,0,0.62) 70%, rgba(0,0,0,0.85) 100%)',
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
              style={{ fontSize: 'clamp(3.4rem, 11vw, 7rem)', letterSpacing: '0.01em' }}>
              Guaranteed
            </span>
            <span
              className="block leading-[0.88] text-[#CC0000] italic uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(3.4rem, 11vw, 7rem)', letterSpacing: '0.01em' }}>
              Fastest
            </span>
            <span
              className="block leading-[1.05] text-white uppercase mt-3"
              style={{ fontSize: 'clamp(1.5rem, 5.8vw, 3.5rem)', letterSpacing: '0.02em', fontWeight: 700 }}>
              Way To Get Your
            </span>
            <span
              className="block leading-[1.05] text-white uppercase"
              style={{ fontSize: 'clamp(1.5rem, 5.8vw, 3.5rem)', letterSpacing: '0.02em', fontWeight: 700 }}>
              Driving License.
            </span>
          </h1>

          {/* CTAs — desktop only */}
          <div className="reveal delay-200 hidden sm:flex flex-row items-center justify-center gap-6">
            <a
              href="#register"
              className="min-h-[48px] bg-[#CC0000] hover:bg-[#A30000] text-white flex items-center justify-center gap-2 px-8 py-[18px] rounded-full text-[15px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_8px_24px_rgba(204,0,0,0.45)] transition-all hover:-translate-y-0.5 active:scale-[0.98]">
              Claim RM299 Discount Now ↓
            </a>
            <a
              href="#process"
              className="min-h-[44px] flex items-center justify-center gap-1.5 text-[#111111] hover:text-[#CC0000] text-sm font-display font-semibold uppercase tracking-wider whitespace-nowrap bg-white/80 backdrop-blur-sm border border-black/10 rounded-full px-5 shadow-[0_1px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-white transition-all duration-200">
              Meet Cikgu Ram ↓
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Mobile CTAs — stronger presence, anchored urgency */}
        <div className="sm:hidden px-5 pb-6 flex flex-col items-center gap-2 w-full max-w-[320px] mx-auto">
          <a
            href="#register"
            className="w-full min-h-[52px] bg-[#CC0000] hover:bg-[#A30000] text-white flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_8px_24px_rgba(204,0,0,0.45)] transition-transform active:scale-[0.98]">
            Claim RM299 Discount Now ↓
          </a>
          <p className="text-white/60 text-[11px] font-display font-medium tracking-wide">
            4 spots left this month
          </p>
          <a
            href="#process"
            className="min-h-[44px] flex items-center justify-center gap-1.5 text-white text-sm font-display font-black uppercase tracking-wider whitespace-nowrap transition-colors drop-shadow-md">
            Meet Cikgu Ram ↓
          </a>
        </div>

      </div>

      {/* Trust signals — white card pinned to very bottom, redesigned for legibility */}
      <div className="absolute bottom-0 left-0 right-0 z-20 sm:relative sm:z-10 w-full px-4 pb-0 sm:pb-3">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-black/6 overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-black/8">
            {[
              { highlight: '★ 4.9', label: 'Google Rating', gold: true },
              { highlight: '💪 10 Yrs', label: 'Experience', gold: false },
              { highlight: '❤️ 500+', label: 'Students Passed', gold: false },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-0.5 py-3 sm:py-4 px-2 min-h-[52px]">
                <span
                  className={`text-[14px] sm:text-[15px] font-display font-bold tracking-tight whitespace-nowrap ${
                    item.gold ? 'text-[#C9A020]' : 'text-[#111111]'
                  }`}>
                  {item.highlight}
                </span>
                <span className="text-[9px] sm:text-[10px] text-black/50 font-display font-semibold tracking-wide text-center leading-tight uppercase">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
