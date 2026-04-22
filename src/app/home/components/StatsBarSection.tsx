import React from 'react';
import Image from 'next/image';
import TrustStatsGrid from '@/app/home/components/TrustStatsGrid';

export default function StatsBarSection() {
  return (
    <section
      id="track-record"
      aria-label="Ratings and track record"
      className="relative flex w-full flex-col overflow-hidden border-t border-black/10 bg-[#F8F8F6]"
    >
      {/* Photo slideshow + stats card: same cinematic band + cream treatment on all breakpoints */}
      <div className="relative z-0 aspect-[1920/1080] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F8F6]" aria-hidden="true">
          <div className="stats-orb stats-orb-1">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/stats-bg-1.jpg"
                alt=""
                fill
                quality={75}
                sizes="100vw"
                className="object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
          <div className="stats-orb stats-orb-2">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/stats-bg-2.jpg"
                alt=""
                fill
                quality={75}
                sizes="100vw"
                className="object-cover object-center"
                draggable={false}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[#F8F8F6]/35" />
          <div className="absolute inset-0 grid-bg" />
        </div>

        <div className="absolute inset-0 z-10 flex min-h-0 w-full items-center justify-center px-4 py-0 sm:px-6">
          <div className="w-full max-w-xs reveal sm:max-w-sm">
            <TrustStatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
