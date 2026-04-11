import React from 'react';
import Image from 'next/image';

export default function StatsBarSection() {
  return (
    <section className="relative bg-[#F8F8F6] w-full overflow-hidden aspect-[1920/1080] flex items-center justify-center">
      {/* Sliding photo background — photos scroll left → right in a loop */}
      <div className="absolute inset-0 bg-[#F8F8F6]" aria-hidden="true">
        <div className="stats-orb stats-orb-1">
          <Image
            src="/stats-bg-1.jpg"
            alt=""
            fill
            priority
            quality={88}
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
            quality={88}
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
        </div>
        {/* Scrim so the stats card stays legible */}
        <div className="absolute inset-0 bg-[#F8F8F6]/35" />
        <div className="absolute inset-0 grid-bg" />
      </div>
      <div className="w-full px-4 sm:px-6 relative z-10 flex justify-center">
        <div className="w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.10)] border border-black/8 overflow-hidden reveal">
          <div className="grid grid-cols-3 divide-x divide-black/8">
            <div className="flex flex-col items-center justify-center gap-0.5 py-3 px-2">
              <div className="flex items-center">
                {[
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png', alt: 'Nurul Ain' },
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png', alt: 'Vikram' },
                  { src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png', alt: 'Wei Xian' },
                ].map((av, i) => (
                  <div
                    key={av.alt}
                    className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shrink-0"
                    style={{ marginLeft: i > 0 ? '-5px' : 0, zIndex: 3 - i }}>
                    <Image src={av.src} alt={av.alt} width={28} height={28} className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-display font-black text-[16px] text-[#111111] tracking-tight leading-none">4.9</span>
                <span className="text-[#C9A020] text-[12px] leading-none ml-0.5">★</span>
              </div>
              <span className="text-[9px] text-black/45 font-display font-semibold tracking-wide uppercase leading-tight">Google Rating</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-0.5 py-3 px-2">
              <span className="text-[14px] leading-none">💪</span>
              <span className="font-display font-black text-[16px] text-[#111111] tracking-tight leading-none">10+</span>
              <span className="text-[9px] text-black/45 font-display font-semibold tracking-wide uppercase leading-tight text-center">Years<br />Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-0.5 py-3 px-2">
              <span className="text-[14px] leading-none">❤️</span>
              <span className="font-display font-black text-[16px] text-[#111111] tracking-tight leading-none">600+</span>
              <span className="text-[9px] text-black/45 font-display font-semibold tracking-wide uppercase leading-tight text-center">Students<br />Passed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
