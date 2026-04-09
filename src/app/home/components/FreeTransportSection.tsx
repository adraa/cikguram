import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const transportPoints = [
  { icon: 'MapPinIcon', text: 'Pick-up from your home or nearby landmark' },
  { icon: 'ClockIcon', text: 'Punctual, scheduled transport for every session' },
  { icon: 'TruckIcon', text: 'Drop-off after training — door to door' },
  { icon: 'CurrencyDollarIcon', text: '100% free — included in your RM2,349 package' },
];

export default function FreeTransportSection() {
  return (
    <section className="py-0 relative overflow-hidden">
      <div className="relative min-h-[420px] sm:min-h-[480px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <AppImage
            src="https://images.unsplash.com/photo-1633121945200-05b2a267caee"
            alt="Malaysian road with vehicles at night, dark atmospheric setting, deep shadows, red and white light trails on wet tarmac"
            fill
            className="object-cover"
            sizes="100vw"
            priority />
          {/* Dark overlay — this section stays dark for contrast */}
          <div className="absolute inset-0 bg-[#111111]/88" />
        </div>

        {/* Road stripe top */}
        <div className="absolute top-0 left-0 right-0 road-stripe opacity-60" />
        {/* Road stripe bottom */}
        <div className="absolute bottom-0 left-0 right-0 road-stripe opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left */}
            <div className="reveal">
              {/* Label */}
              <div className="mb-4 sm:mb-5">
                <span className="road-sign-badge">
                  <Icon name="TruckIcon" size={12} variant="solid" className="text-[#C9A020]" />
                  Free Service
                </span>
              </div>

              <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 tracking-tight leading-[1.1]">
                Free Transport<br />
                <span className="text-[#C9A020]">Service Provided.</span>
              </h2>
              <p className="text-white/65 font-body text-sm sm:text-base leading-[1.7] mb-6 sm:mb-8 max-w-lg">
                No car? No problem. We provide free pick-up and drop-off for every training session.
                Just focus on learning — we handle the logistics.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                {transportPoints.map((point, i) =>
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/6 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A020]/15 flex items-center justify-center shrink-0">
                      <Icon
                        name={point.icon as Parameters<typeof Icon>[0]['name']}
                        size={16}
                        variant="solid"
                        className="text-[#C9A020]" />
                    </div>
                    <span className="text-sm text-white/75 font-body">{point.text}</span>
                  </div>
                )}
              </div>

              {/* Mobile CTA */}
              <a
                href="#register"
                className="btn-primary mt-6 flex sm:hidden items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700"
              >
                Register &amp; Get Free Transport
              </a>
            </div>

            {/* Right: visual accent — desktop only */}
            <div className="reveal-right hidden lg:flex flex-col items-end gap-4">
              <div className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-8 text-center max-w-xs">
                <div className="w-16 h-16 rounded-2xl bg-[#C9A020]/15 flex items-center justify-center mx-auto mb-4">
                  <Icon name="TruckIcon" size={32} variant="solid" className="text-[#C9A020]" />
                </div>
                <div className="font-display font-800 text-5xl text-white mb-1 tracking-tight">FREE</div>
                <div className="text-white/50 font-body text-sm tracking-wide">Transport Service</div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-[10px] text-white/35 font-display font-600 uppercase tracking-[0.14em]">
                    Included in every package
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}