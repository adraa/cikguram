import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
      aria-label="Hero section">

      {/* Mobile hero (portrait): visible below md */}
      <Image
        src="/hero-mobile.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-[center_35%] md:hidden"
        priority
        sizes="100vw"
        quality={78}
      />
      {/* Desktop hero (landscape): visible at md and above */}
      <Image
        src="/hero-desktop.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-center hidden md:block"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Scrim: light touch at top, darkens only from mid-point down for CTAs */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.3) 65%, rgba(0,0,0,0.80) 100%)',
        }}
      />

      <div className="relative z-10 flex w-full flex-1 flex-col justify-start sm:justify-center">

        {/* Content block: top-aligned on mobile, vertically centred from sm */}
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-5 pb-4 pt-8 text-center sm:gap-3 sm:px-8 sm:pb-10 sm:pt-[22vh] lg:px-10">

          {/* Badge pill */}
          <div className="reveal">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-black/12 text-[#111111] font-display font-semibold tracking-[0.05em] uppercase shadow-sm"
              style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
              <span className="traffic-dot shrink-0" />
              P-License in 1 Month &amp; 2 Weeks
            </span>
          </div>

          {/* Headline: pure CSS typography, no image box */}
          <h1 className="flex flex-col items-center" style={{ fontFamily: 'var(--font-headline)', fontWeight: 900 }}>
            <span
              className="block leading-[0.92] italic uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(3.2rem, 12vw, 6rem)',
                letterSpacing: '-0.02em',
                backgroundImage: 'linear-gradient(to right, #FF2200, #FF4D00, #FF7A00, #E8AA00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1.5px #000000',
                transform: 'skewX(-6deg)',
                paddingRight: '0.25em',
              }}>
              Guaranteed
            </span>
            <span
              className="block leading-[0.92] italic uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(3.2rem, 12vw, 6rem)',
                letterSpacing: '-0.02em',
                backgroundImage: 'linear-gradient(to right, #FF2200, #FF4D00, #FF7A00, #E8AA00)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                WebkitTextStroke: '1.5px #000000',
                transform: 'skewX(-6deg)',
                paddingRight: '0.25em',
              }}>
              Fastest
            </span>
            <span
              className="block font-body italic uppercase text-white/90 tracking-wide leading-snug mt-2"
              style={{ fontSize: 'clamp(1.25rem, 4.2vw, 1.6rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Way To Get Your
            </span>
            <span
              className="block font-body italic uppercase text-white/90 tracking-wide leading-snug"
              style={{ fontSize: 'clamp(1.25rem, 4.2vw, 1.6rem)', letterSpacing: '0.04em', fontWeight: 600, textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.8)' }}>
              Driving License
            </span>
          </h1>

          {/* Mobile CTA block: urgency below button, tight to CTA */}
          <div className="mt-2 flex w-full max-w-[320px] flex-col items-center gap-1 sm:hidden">
            <a
              href="#full-name-input"
              className="w-full min-h-[44px] bg-[#FF2020] hover:bg-[#E01010] text-white flex items-center justify-center gap-2 px-1 py-3 rounded-xl text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_4px_16px_rgba(255,32,32,0.45)] transition-all active:scale-[0.98]">
              Claim RM299 Discount Now <span className="cta-arrow">↓</span>
            </a>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#CC0000]" />
              <span className="whitespace-nowrap font-display text-[11px] font-semibold tracking-wide text-white drop-shadow-sm">
                Only 6 spots left this month
              </span>
            </div>
          </div>

        </div>

        {/* Spacer: pushes bottom bar down */}
        <div className="flex-1" />

        {/* Bottom bar: pinned to bottom of hero */}
        <div className="w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 pb-1 sm:pb-10 flex flex-col items-center gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <a
            href="#instructor"
            className="order-3 sm:order-1 text-[#111111] bg-white/90 hover:bg-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-sm border border-black/10 text-[10px] sm:text-xs font-display font-semibold uppercase tracking-[0.06em] whitespace-nowrap transition-all duration-200 backdrop-blur-sm hover:shadow-md hover:text-[#111111]">
            Meet Cikgu Ram ↓
          </a>
          {/* Desktop CTA: urgency ABOVE button */}
          <div className="hidden sm:flex order-1 sm:order-2 flex-col items-center gap-1 sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CC0000] shrink-0 animate-pulse" />
              <span className="text-white text-[11px] font-display font-semibold tracking-wide whitespace-nowrap drop-shadow-sm">
                Only 6 spots left this month
              </span>
            </div>
            <a
              href="#full-name-input"
              className="w-full sm:w-auto min-h-[44px] bg-[#FF2020] hover:bg-[#E01010] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[14px] font-display font-black uppercase tracking-wider whitespace-nowrap shadow-[0_4px_16px_rgba(255,32,32,0.45)] transition-all hover:-translate-y-0.5 active:scale-[0.98]">
              Claim RM299 Discount Now <span className="cta-arrow">↓</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
