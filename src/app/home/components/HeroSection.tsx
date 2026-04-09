import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-white"
      aria-label="Hero section">

      {/* Subtle grid background — hidden on mobile for perf */}
      <div className="absolute inset-0 grid-bg opacity-100 hidden sm:block" />

      {/* Red accent blob — top right, desktop only */}
      <div className="glow-blob w-[500px] h-[400px] bg-red-100 top-0 right-0 opacity-60 hidden sm:block" style={{ zIndex: 0 }} />
      {/* Yellow accent blob — bottom left, desktop only */}
      <div className="glow-blob w-[400px] h-[300px] bg-yellow-50 bottom-0 left-0 opacity-80 hidden sm:block" style={{ zIndex: 0 }} />

      {/* Bottom road stripe */}
      <div className="beam-border-h" style={{ zIndex: 5 }} />

      {/* Content — doubled vertical breathing room */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-40 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">

          {/* Left: Main copy */}
          <div className="lg:col-span-7">
            {/* Road sign badge */}
            <div className="reveal mb-5 sm:mb-8">
              <span className="road-sign-badge font-semibold">
                <span className="flex items-center gap-1">
                  <span className="traffic-dot" />
                </span>
                <strong>Get Your License in 1 Month &amp; 2 Weeks</strong>
              </span>
            </div>

            {/* Headline — dramatically larger on desktop with tighter leading */}
            <h1 className="reveal delay-100 font-display font-900 leading-[0.92] tracking-tight mb-7 sm:mb-8">
              <span className="block text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] text-[#CC0000] italic font-black uppercase">
                Guaranteed Fastest
              </span>
              <span className="block text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] text-[#111111] font-black uppercase leading-[1.1]">
                To Get Your<br />Driving License.
              </span>
            </h1>

            {/* Sub — increased contrast gap vs headline */}

            {/* CTAs — full width on mobile */}
            <div className="reveal delay-300 flex flex-col sm:flex-row gap-3">
              <a
                href="#register"
                className="btn-primary flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl text-base font-display font-700 w-full sm:w-auto">
                Register Now — Save RM299
                <Icon name="ArrowRightIcon" size={18} variant="outline" />
              </a>
              <a
                href="#process"
                className="btn-secondary flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl text-base font-display font-600 w-full sm:w-auto">
                See How It Works
              </a>
            </div>

            {/* Trust signals */}
            <div className="reveal delay-400 flex flex-wrap items-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              {[
                { icon: 'CheckBadgeIcon', label: 'JPJ Certified' },
                { icon: 'TruckIcon', label: 'Free Transport' },
                { icon: 'UserGroupIcon', label: '600+ Passed' }
              ].map((item) =>
                <div key={item.label} className="flex items-center gap-1.5">
                  <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} variant="solid" className="text-[#CC0000]" />
                  <span className="text-xs text-black/65 font-display font-600 tracking-wide">{item.label}</span>
                </div>
              )}
            </div>
          </div>


        </div>
      </div>

      {/* Scroll indicator — hidden on small mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 opacity-40 hidden sm:flex">
        <span className="text-xs text-black/40 tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent" />
      </div>
    </section>
  );
}
