import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
      aria-label="Hero section">

      {/* Background image — focal point at 45% to show the car+hand, not just road */}
      <Image
        src="/hero-car.webp"
        alt="Get your P license with Cikgu Ram"
        fill
        className="object-cover object-[center_45%]"
        priority
      />

      {/* Gradient: solid white top ~30% for crisp text, then rapid fade to reveal image */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 25%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.3) 48%, transparent 58%)',
        }}
      />

      {/* All content sits above the gradient */}
      <div className="relative z-10 w-full flex-1 flex flex-col">

        {/* Text content — compact top area to leave room for image */}
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center px-5 sm:px-8 lg:px-10 pt-24 sm:pt-28 pb-5 sm:pb-6">

          {/* Gold Pill Badge */}
          <div className="reveal mb-3 sm:mb-4">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C9A020] border border-black/20 text-[#111111] font-display font-600 tracking-[0.05em] uppercase shadow-sm"
              style={{ fontSize: 'clamp(10px, 2.5vw, 12px)' }}>
              <span className="traffic-dot shrink-0 bg-black/80 rounded-full" style={{ width: 6, height: 6 }} />
              Get Your License in 1 Month &amp; 2 Weeks
            </span>
          </div>

          {/* 4-line Headline */}
          <h1 className="font-display font-black tracking-tight mb-6 sm:mb-8 flex flex-col items-center">
            <span
              className="block leading-[0.9] text-[#CC0000] italic uppercase whitespace-nowrap drop-shadow-sm"
              style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', letterSpacing: '-0.02em' }}>
              Guaranteed
            </span>
            <span
              className="block leading-[0.9] text-[#CC0000] italic uppercase whitespace-nowrap drop-shadow-sm"
              style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', letterSpacing: '-0.02em' }}>
              Fastest
            </span>
            <span
              className="block leading-[1] text-[#111111] uppercase mt-2 drop-shadow-sm"
              style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)', letterSpacing: '-0.01em' }}>
              Way To Get Your
            </span>
            <span
              className="block leading-[1] text-[#111111] uppercase drop-shadow-sm"
              style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)', letterSpacing: '-0.01em' }}>
              Driving License.
            </span>
          </h1>

          {/* CTAs — text shadow ensures readability in the gradient transition zone */}
          <div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <a
              href="#register"
              className="bg-[#CC0000] hover:bg-[#A30000] text-white flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-display font-black uppercase tracking-wider whitespace-nowrap shadow-lg transition-transform hover:-translate-y-0.5">
              Claim RM299 Discount Now ↓
            </a>
            <a
              href="#process"
              className="flex items-center justify-center gap-1.5 text-[#111111] hover:text-[#CC0000] text-sm sm:text-base font-display font-black uppercase tracking-wider whitespace-nowrap transition-colors"
              style={{ textShadow: '0 1px 8px rgba(255,255,255,0.8)' }}>
              Meet Cikgu Ram ↓
            </a>
          </div>
        </div>

        {/* Spacer — the background image is visible here */}
        <div className="flex-1" />

        {/* Trust signals — updated to a darker/translucent style to match the image contrast */}
        <div className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 mt-auto">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-3 px-5 py-4 sm:py-5">
            {[
              { icon: 'CheckBadgeIcon', label: 'JPJ Certified' },
              { icon: 'TruckIcon', label: 'Free Transport' },
              { icon: 'UserGroupIcon', label: '600+ Passed' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <Icon
                  name={item.icon as Parameters<typeof Icon>[0]['name']}
                  size={18}
                  variant="solid"
                  className="text-white shrink-0"
                />
                <span className="text-[13px] sm:text-sm text-white font-display font-500 tracking-wide whitespace-nowrap">
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
