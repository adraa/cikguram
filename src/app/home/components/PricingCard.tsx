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
            The Deadline Isn&apos;t <span className="text-[#CC0000]">Far.</span>
          </h2>
        </div>

        {/* Main pricing card — no overflow-hidden so price pill can bleed over image */}
        <div className="reveal delay-100 max-w-2xl mx-auto rounded-2xl border border-black/8 bg-white shadow-card relative">

          {/* ── Hero image — square gives enough height to show faces, car, and road ── */}
          <div className="relative aspect-[1/1] sm:aspect-[3/2] overflow-hidden rounded-t-2xl">
            <Image
              src="/hero-desktop.webp"
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
            <div className="bg-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-black/8">
              <div className="flex items-start gap-1 leading-none">
                <span className="font-display font-400 text-base text-black/30 mt-2.5 shrink-0">RM</span>
                <span className="font-display font-black text-[3rem] sm:text-[3.5rem] text-[#111111] tracking-tight leading-none">
                  2,349
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1.5 mt-1.5">
                <span className="text-black/40 line-through text-sm font-body">RM2,648</span>
                <span className="px-2 py-0.5 rounded bg-[#CC0000] text-white text-xs font-display font-700 shrink-0">
                  SAVE RM299
                </span>
                <InlineCountdown timeLeft={timeLeft} />
              </div>
              <p className="text-black/45 text-[11px] font-body mt-1.5">Complete Package · Zero Hidden Fees</p>
            </div>
          </div>

          {/* ── Checklist: core items — single column, divider between each row ── */}
          <div className="pt-5">
            {coreItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-3 ${i < coreItems.length - 1 ? 'border-b border-black/6' : ''}`}
              >
                <div className="w-5 h-5 rounded-full bg-[#1A7A3C]/12 flex items-center justify-center shrink-0">
                  <Icon name="CheckIcon" size={11} variant="solid" className="text-[#1A7A3C]" />
                </div>
                <span className="text-sm text-black/70 font-body">{item}</span>
              </div>
            ))}
          </div>

          {/* ── BONUS divider bar — full width, feels like a section break ── */}
          <div className="flex items-center gap-2.5 px-6 py-3 bg-[#C9A020] mt-2">
            <Icon name="GiftIcon" size={14} variant="solid" className="text-white shrink-0" />
            <span className="text-[11px] font-display font-700 text-white uppercase tracking-[0.14em]">
              Bonus — Included Free
            </span>
          </div>

          {/* ── Bonus items — single column, divider between each row ── */}
          <div>
            {bonusItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-3 bg-[#FEFBF0] ${i < bonusItems.length - 1 ? 'border-b border-[#C9A020]/18' : ''}`}
              >
                <div className="w-5 h-5 rounded-full bg-[#C9A020]/20 flex items-center justify-center shrink-0">
                  <Icon name="CheckIcon" size={11} variant="solid" className="text-[#7D6008]" />
                </div>
                <span className="text-sm text-[#5C4A00] font-body">{item}</span>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="px-6 pt-5 pb-5">
            <a
              href="#register"
              className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700"
            >
              <Icon name="BoltIcon" size={18} variant="solid" />
              Secure My Spot Now
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
