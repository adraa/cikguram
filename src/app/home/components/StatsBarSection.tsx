import React from 'react';
import Image from 'next/image';
import { GOOGLE_BUSINESS_MAPS_URL } from '@/lib/site-urls';

export default function StatsBarSection() {
  return (
    <section
      id="track-record"
      aria-labelledby="stats-section-heading"
      className="relative flex w-full flex-col overflow-hidden border-t border-black/10 bg-[#F8F8F6]"
    >
      {/* Title sits on solid cream: above the photo stage (no grid / slideshow behind it) */}
      <header className="relative z-20 w-full shrink-0 bg-[#F8F8F6] px-4 pt-12 pb-6 text-center sm:px-6 sm:pt-14 sm:pb-8 md:pt-16 md:pb-10">
        <div className="reveal mx-auto max-w-2xl">
          <h2
            id="stats-section-heading"
            className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15] mb-4"
          >
            The Proof Is Public
          </h2>
        </div>
      </header>

      {/* Photo slideshow + stats card: aspect only applies to this band */}
      <div className="relative z-0 w-full overflow-hidden max-md:min-h-[260px] md:aspect-[1920/1080]">
        <div className="absolute inset-0 bg-[#F8F8F6]" aria-hidden="true">
          <div className="stats-orb stats-orb-1">
            <Image
              src="/stats-bg-1.jpg"
              alt=""
              fill
              quality={75}
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="stats-orb stats-orb-2">
            <Image
              src="/stats-bg-2.jpg"
              alt=""
              fill
              quality={75}
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
          </div>
          <div className="absolute inset-0 bg-[#F8F8F6]/35" />
          <div className="absolute inset-0 grid-bg" />
        </div>

        <div className="relative z-10 flex min-h-[240px] w-full items-center justify-center px-4 py-10 sm:min-h-[260px] sm:px-6 sm:py-12 md:absolute md:inset-0 md:min-h-0 md:py-0">
          <div className="w-full max-w-xs reveal rounded-xl border border-black/8 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.10)] sm:max-w-sm overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-black/8">
              <a
                href={GOOGLE_BUSINESS_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 py-3 px-2 transition-colors hover:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#CC0000]/35"
                aria-label="View Google reviews — 4.9 rating on Google Maps">
                <div className="flex items-center">
                  {[
                    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png', alt: 'Nurul Ain' },
                    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png', alt: 'Vikram' },
                    { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png', alt: 'Wei Xian' },
                  ].map((av, i) => (
                    <div
                      key={av.alt}
                      className="h-7 w-7 shrink-0 overflow-hidden rounded-full border-2 border-white"
                      style={{ marginLeft: i > 0 ? '-5px' : 0, zIndex: 3 - i }}
                    >
                      <Image
                        src={av.src}
                        alt={av.alt}
                        width={28}
                        height={28}
                        sizes="28px"
                        quality={70}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display text-[16px] font-black leading-none tracking-tight text-[#111111]">4.9</span>
                  <span className="ml-0.5 text-[12px] leading-none text-[#C9A020]">★</span>
                </div>
                <span className="font-display text-[9px] font-semibold uppercase leading-tight tracking-wide text-black/45">
                  Google Rating
                </span>
              </a>
              <div className="flex flex-col items-center justify-center gap-0.5 py-3 px-2">
                <span className="text-[14px] leading-none">💪</span>
                <span className="font-display text-[16px] font-black leading-none tracking-tight text-[#111111]">10+</span>
                <span className="text-center font-display text-[9px] font-semibold uppercase leading-tight tracking-wide text-black/45">
                  Years
                  <br />
                  Experience
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 py-3 px-2">
                <span className="text-[14px] leading-none">❤️</span>
                <span className="font-display text-[16px] font-black leading-none tracking-tight text-[#111111]">600+</span>
                <span className="text-center font-display text-[9px] font-semibold uppercase leading-tight tracking-wide text-black/45">
                  Students
                  <br />
                  Passed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
