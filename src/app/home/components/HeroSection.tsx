import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      style={{
        backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cikguram-lp-hero.png-XCgN3tCxaHdwKiiTy0gvA0EDM3nbv4.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />

      {/* Content overlaid on hero image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Gold pill badge */}
          <div className="reveal mb-3 sm:mb-4">
            <span className="inline-block bg-[#E8B800] text-black font-display font-black text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full tracking-wider">
              GET IT IN 1 MONTH &amp; 2 WEEKS.
            </span>
          </div>

          {/* Headline — overlaid on image */}
          <h1 className="reveal delay-100 font-display font-black leading-[0.85] sm:leading-[0.88] tracking-tight mb-6 sm:mb-8 md:mb-10">
            <span className="block text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#CC0000] italic uppercase drop-shadow-sm">
              GUARANTEED FASTEST.
            </span>
            <span className="block text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#111111] uppercase drop-shadow-sm">
              WAY TO GET YOUR DRIVING LICENSE.
            </span>
          </h1>

          {/* CTAs row with arrows */}
          <div className="reveal delay-200 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <Icon name="ArrowDownIcon" size={28} variant="outline" className="text-black/60 hidden sm:block" />
              <a
                href="#register"
                className="bg-[#CC0000] hover:bg-[#AA0000] text-white font-display font-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full transition-colors shadow-lg whitespace-nowrap uppercase">
                CLAIM RM299 DISCOUNT NOW
              </a>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#instructor"
                className="text-sm sm:text-base md:text-lg font-display font-black text-[#111111] hover:text-[#CC0000] transition-colors flex items-center gap-2 uppercase">
                MEET CIKGU RAM
                <Icon name="ArrowDownIcon" size={20} variant="outline" />
              </a>
              <Icon name="ArrowDownIcon" size={28} variant="outline" className="text-black/60 hidden sm:block" />
            </div>
          </div>

          {/* Trust badges — positioned at bottom */}
          <div className="reveal delay-300 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {[
              { icon: 'CheckCircleIcon', label: 'JPJ Certified' },
              { icon: 'TruckIcon', label: 'Free Transport' },
              { icon: 'CheckCircleIcon', label: '600+ Passed' }
            ].map((item) =>
              <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={28} variant="solid" className="text-[#111111]" />
                <span className="text-sm sm:text-base md:text-lg text-black font-display font-black uppercase">{item.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 opacity-40 hidden md:flex">
        <span className="text-xs text-black/60 tracking-widest uppercase font-body font-semibold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
    </section>
  );
}
