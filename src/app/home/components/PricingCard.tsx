'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetHours: number): TimeLeft {
  const endTimeRef = useRef<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: targetHours, minutes: 0, seconds: 0 });

  useEffect(() => {
    endTimeRef.current = Date.now() + targetHours * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, endTimeRef.current - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetHours]);

  return timeLeft;
}

function InlineCountdown({ timeLeft }: { timeLeft: TimeLeft }) {
  const fmt = (n: number) => String(n).padStart(2, '0');
  return (
    <span className="inline-flex items-center gap-0.5 text-[13px] font-display font-700 text-[#CC0000] tabular-nums">
      <span className="mr-0.5 text-[13px] leading-none">⏰</span>
      {fmt(timeLeft.hours)}
      <span className="opacity-60 mx-0.5">:</span>
      {fmt(timeLeft.minutes)}
      <span className="opacity-60 mx-0.5">:</span>
      {fmt(timeLeft.seconds)}
    </span>
  );
}

const coreItems = [
  'KPP Theory Classes (KPP01)',
  'Computer Theory Test (KPP01)',
  'KPP02 & KPP03 Practical',
  'QTI Pre-Test',
  'JPJ Practical Test',
  'JPJ Road Test Preparation',
];

const bonusItems = [
  '2-Hours of Additional Training',
  'Computer Theory Test Retake',
  'QTI Pre-Test Retake',
  'JPJ Practical Test Retake',
  'WhatsApp Support Throughout',
];

export default function PricingCard() {
  const timeLeft = useCountdown(23);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15]">
            The Discount Is Real.<br />
            The Deadline Isn&apos;t <span className="text-[#CC0000] font-black">Far.</span>
          </h2>
        </div>

        {/* Main pricing card — no overflow-hidden so price pill can bleed over image */}
        <div className="reveal delay-100 max-w-2xl mx-auto rounded-2xl border border-black/8 bg-white shadow-card relative">

          {/* ── Hero image — square gives enough height to show faces, car, and road ── */}
          <div className="relative aspect-[1/1] sm:aspect-[3/2] overflow-hidden rounded-t-2xl">
            <Image
              src="/pricing-students.webp"
              alt="Students holding P-plates in front of CikguRam's car RAM 308"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 672px"
              quality={88}
            />
            {/* Bottom-only gradient anchors the price pill — top is clear so faces show */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)',
              }}
            />
          </div>

          {/* ── Price pill — negative margin pulls it halfway over the image bottom ── */}
          <div className="relative -mt-14 mx-5 z-10">
            <div className="bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-black/8 sm:flex sm:flex-col sm:items-center sm:text-center">
              <div className="flex items-start gap-1 leading-none">
                <span className="font-display font-400 text-base text-black/30 mt-2.5 shrink-0">RM</span>
                <span className="font-display font-black text-[3rem] sm:text-[3.5rem] text-[#111111] tracking-tight leading-none">
                  2,050
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1.5 mt-1.5 sm:justify-center">
                <span className="text-black/40 line-through text-sm font-body">RM2,349</span>
                <span className="px-2 py-0.5 rounded bg-[#CC0000] text-white text-xs font-display font-700 shrink-0">
                  SAVE RM299
                </span>
                <InlineCountdown timeLeft={timeLeft} />
              </div>
              <p className="text-black/45 text-[11px] font-body mt-1.5">Complete Package · Zero Hidden Fees</p>
            </div>

            {/* ── Social proof stats — same card as SocialProofSection trust bar ── */}
            <div className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.10)] border border-black/8 overflow-hidden mt-3">
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

          {/* ── Core items ── */}
          <div className="pt-4 pb-3">
            {coreItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-[10px] ${i < coreItems.length - 1 ? 'border-b border-black/[0.05]' : ''}`}
              >
                <div className="w-[18px] h-[18px] rounded-full bg-[#1A7A3C] flex items-center justify-center shrink-0">
                  <Icon name="CheckIcon" size={10} variant="solid" className="text-white" />
                </div>
                <span className="text-[13.5px] text-[#1C1C1E] font-body font-500 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* ── Bonus section header — refined pill with flanking rules ── */}
          <div className="flex items-center gap-3 mx-6 my-1">
            <div className="h-px flex-1 bg-[#C9A020]/35" />
            <div className="flex items-center gap-1.5 px-3 py-[6px] rounded-full bg-[#C9A020]/12 border border-[#C9A020]/25">
              <Icon name="GiftIcon" size={11} variant="solid" className="text-[#C9A020] shrink-0" />
              <span className="text-[10px] font-display font-700 text-[#8A6A00] uppercase tracking-[0.12em] whitespace-nowrap">
                Bonus — Included Free
              </span>
            </div>
            <div className="h-px flex-1 bg-[#C9A020]/35" />
          </div>

          {/* ── Bonus items ── */}
          <div className="pt-1 pb-3">
            {bonusItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-[10px] ${i < bonusItems.length - 1 ? 'border-b border-[#C9A020]/12' : ''}`}
              >
                <div className="w-[18px] h-[18px] rounded-full bg-[#C9A020] flex items-center justify-center shrink-0">
                  <Icon name="CheckIcon" size={10} variant="solid" className="text-white" />
                </div>
                <span className="text-[13.5px] text-[#5C4A00] font-body font-500 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="px-6 pt-5 pb-5">
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('full-name-input');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  setTimeout(() => el.focus(), 650);
                }
              }}
              className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700"
            >
              👇 Secure My Spot Now
            </a>
          </div>

          {/* ── Scarcity bar — dark/serious, left red border, rounded-b-2xl ── */}
          <div className="flex items-start gap-3.5 px-5 py-4 bg-[#111111] rounded-b-2xl overflow-hidden">
            <Icon name="ExclamationTriangleIcon" size={15} variant="solid" className="text-[#CC0000] mt-0.5 shrink-0" />
            <p className="text-xs text-white/80 font-body leading-relaxed">
              <span className="font-display font-700 text-white">15 students max per month.</span>{' '}
              Cikgu Ram limits intake to guarantee personal attention. Spots for this month are filling up now.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
