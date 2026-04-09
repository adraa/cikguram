import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#F8F8F6]"
      aria-label="Hero section">

      {/* Content — centered layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Gold pill badge */}
          <div className="reveal mb-4 sm:mb-6">
            <span className="road-sign-badge font-bold text-xs sm:text-sm">
              GET YOUR LICENSE IN 1 MONTH &amp; 2 WEEKS
            </span>
          </div>

          {/* Headline — exactly matching reference */}
          <h1 className="reveal delay-100 font-display font-black leading-[0.9] tracking-tight mb-8 sm:mb-10 lg:mb-12">
            <span className="block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#CC0000] italic uppercase mb-2">
              GUARANTEED FASTEST.
            </span>
            <span className="block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#111111] uppercase">
              WAY TO GET YOUR DRIVING LICENSE.
            </span>
          </h1>

          {/* Hero Image */}
          <div className="reveal delay-200 w-full max-w-5xl mb-8 sm:mb-10 lg:mb-12">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cikguram-lp-hero.png-XCgN3tCxaHdwKiiTy0gvA0EDM3nbv4.jpeg"
              alt="Hand holding P-plate over red car on racing track with palm trees at sunset"
              className="w-full h-auto rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>

          {/* CTAs — side by side with arrows */}
          <div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-10">
            <div className="flex items-center gap-3">
              <Icon name="ArrowDownIcon" size={24} variant="outline" className="text-black/40 hidden sm:block" />
              <a
                href="#register"
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base sm:text-lg font-display font-700 whitespace-nowrap">
                CLAIM RM299 DISCOUNT NOW
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="#instructor"
                className="text-base sm:text-lg font-display font-700 text-[#111111] hover:text-[#CC0000] transition-colors flex items-center gap-2">
                MEET CIKGU RAM
                <Icon name="ArrowDownIcon" size={20} variant="outline" />
              </a>
              <Icon name="ArrowDownIcon" size={24} variant="outline" className="text-black/40 hidden sm:block" />
            </div>
          </div>

          {/* Trust badges — bottom row */}
          <div className="reveal delay-400 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: 'CheckCircleIcon', label: 'JPJ Certified' },
              { icon: 'TruckIcon', label: 'Free Transport' },
              { icon: 'CheckCircleIcon', label: '600+ Passed' }
            ].map((item) =>
              <div key={item.label} className="flex items-center gap-2">
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={24} variant="solid" className="text-[#111111]" />
                <span className="text-sm sm:text-base text-black/80 font-display font-700">{item.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 opacity-40 hidden sm:flex">
        <span className="text-xs text-black/40 tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent" />
      </div>
    </section>
  );
}
