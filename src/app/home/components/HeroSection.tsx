import React from 'react';
import Image from 'next/image';
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
        className="object-cover object-[center_35%] md:hidden"
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

      {/* Scrim — light touch at top, darkens only from mid-point down for CTAs */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.80) 100%)',
        }}
      />

      <div className="relative z-10 w-full flex-1 flex flex-col">

        {/* Text content */}
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center gap-3 px-5 sm:px-8 lg:px-10 pt-[24px] sm:pt-14 pb-4 sm:pb-10">

          {/* Badge pill — kept exactly as-is */}
          <div className="reveal sm:mt-6">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-black/12 text-[#111111] font-display font-semibold tracking-[0.05em] uppercase shadow-sm"
              style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
              <span className="traffic-dot shrink-0" />
              P-License in 1 Month &amp; 2 Weeks
            </span>
          </div>

          {/* Headline — image-based for pixel-perfect speed typography */}
          <h1 className="sm:mb-5 flex flex-col items-center">
            <Image
              src="/hero-headline.png"
              alt="Guaranteed Fastest"
              width={520}
              height={160}
              className="w-[clamp(280px,80vw,520px)] h-auto"
              priority
            />
            <span
              className="block font-body not-italic text-white/90 tracking-wide leading-snug mt-2"
              style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.25rem, 4.2vw, 1.6rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Way To Get Your
            </span>
            <span
              className="block font-body not-italic text-white/90 tracking-wide leading-snug"
              style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(1.25rem, 4.2vw, 1.6rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Driving License
            </span>
          </h1>

          {/* Mobile CTAs — right below headline, button first then urgency */}
          <div className="sm:hidden flex flex-col items-center gap-2 w-full max-w-[320px]">
            <a
              href="#register"
              className="w-full min-h-[44px] bg-[#FF2020] hover:bg-[#E01010] text-white flex items-center justify-center gap-2 px-1 py-3 rounded-xl text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_4px_16px_rgba(255,32,32,0.45)] transition-all active:scale-[0.98]">
              Claim RM299 Discount Now <span className="cta-arrow">↓</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] shrink-0 animate-pulse" />
              <span className="text-white text-[11px] font-display font-semibold tracking-wide whitespace-nowrap drop-shadow-sm">
                Only 4 spots left this month
              </span>
            </div>
          </div>

        </div>

        {/* Spacer — pushes CTAs to bottom */}
        <div className="flex-1" />

        {/* CTA row — pinned to bottom of hero */}
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 pb-1 sm:pb-10 flex flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          {/* Secondary — mobile: plain text, desktop: small button card */}
          <a
            href="#process"
            className="order-3 sm:order-1 text-[#111111] bg-white/90 hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm border border-black/10 text-[10px] sm:text-xs font-display font-semibold uppercase tracking-[0.06em] whitespace-nowrap transition-all duration-200 backdrop-blur-sm hover:shadow-md hover:text-[#111111]">
            Meet Cikgu Ram ↓
          </a>
          {/* Right side: urgency above CTA, perfectly aligned — desktop only */}
          <div className="hidden sm:flex order-1 sm:order-2 flex-col items-center gap-1 sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] shrink-0 animate-pulse" />
              <span className="text-white text-[11px] font-display font-semibold tracking-wide whitespace-nowrap drop-shadow-sm">
                Only 4 spots left this month
              </span>
            </div>
            <a
              href="#register"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[44px] bg-[#FF2020] hover:bg-[#E01010] text-white flex items-center justify-center gap-2 px-6 sm:px-6 py-3 sm:py-3 rounded-xl text-[14px] sm:text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_4px_16px_rgba(255,32,32,0.45)] transition-all hover:-translate-y-0.5 active:scale-[0.98]">
              Claim RM299 Discount Now <span className="cta-arrow">↓</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
