'use client';

import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import bonusFlash from '@/assets/bonus-flash.webp';
import { PricingInlineCountdown, usePricingCountdown } from '@/app/home/components/PricingInlineCountdown';
import TrustStatsGrid from '@/app/home/components/TrustStatsGrid';

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
  const timeLeft = usePricingCountdown(23);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15]">
            The Discount Is Real.<br />
            The Deadline Isn&apos;t <span className="text-[#CC0000] font-black">Far.</span>
          </h2>
        </div>

        {/* Main pricing card: no overflow-hidden so price pill can bleed over image */}
        <div className="reveal delay-100 max-w-2xl mx-auto rounded-2xl border border-black/8 bg-white shadow-card relative">

          {/* Hero image: square gives enough height to show faces, car, and road */}
          <div className="relative aspect-[1/1] sm:aspect-[3/2] overflow-hidden rounded-t-2xl">
            <Image
              src="/pricing-students.webp"
              alt="Students holding P-plates in front of CikguRam's car RAM 308"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 672px"
              quality={80}
            />
            {/* Bottom-only gradient anchors the price pill: top is clear so faces show */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)',
              }}
            />
          </div>

          {/* Price pill: negative margin pulls it halfway over the image bottom */}
          <div className="relative -mt-14 mx-5 z-10">
            <div className="rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-center shadow-[0_10px_36px_rgba(0,0,0,0.1)] sm:flex sm:flex-col sm:items-center sm:px-5 sm:py-3.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">All-inclusive rate</p>
              <div className="mt-1 flex items-baseline justify-center gap-1.5 leading-none tabular-nums">
                <span className="shrink-0 font-display text-[0.9375rem] font-medium text-black/45">RM</span>
                <span className="font-display text-[2.625rem] font-semibold tracking-tight text-[#111111] sm:text-[3rem]">
                  2,050
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 sm:mt-2.5">
                <span className="font-body text-sm text-black/35 line-through">RM2,349</span>
                <span className="hidden h-3 w-px shrink-0 bg-black/[0.08] sm:block" aria-hidden />
                <span className="rounded-md bg-[#CC0000] px-2 py-0.5 font-display text-[11px] font-semibold uppercase tracking-wide text-white">
                  SAVE RM299
                </span>
                <span className="hidden h-3 w-px shrink-0 bg-black/[0.08] sm:block" aria-hidden />
                <PricingInlineCountdown timeLeft={timeLeft} />
              </div>
              <p className="mt-2 max-w-sm text-center text-base leading-snug text-black/50 font-body sm:mt-2.5">
                Complete package · Zero hidden fees
              </p>
            </div>

            {/* Social proof stats: same strip as FAQ (`TrustStatsGrid`) */}
            <div className="mt-3">
              <TrustStatsGrid />
            </div>
          </div>

          {/* Core items */}
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

          {/* Bonus section header: refined pill with flanking rules */}
          <div className="flex items-center gap-3 mx-6 my-1">
            <div className="h-px flex-1 bg-[#C9A020]/35" />
            <div className="flex items-center gap-1.5 px-3 py-[6px] rounded-full bg-[#C9A020]/12 border border-[#C9A020]/25">
              <span className="shrink-0 text-[12px] leading-none select-none" role="img" aria-label="Gift">
                🎁
              </span>
              <span className="text-[10px] font-display font-700 text-[#8A6A00] uppercase tracking-[0.12em] whitespace-nowrap">
                Bonus (Included Free)
              </span>
            </div>
            <div className="h-px flex-1 bg-[#C9A020]/35" />
          </div>

          {/* Bonus items */}
          <div className="pt-1 pb-3">
            {bonusItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-[10px] ${i < bonusItems.length - 1 ? 'border-b border-[#C9A020]/12' : ''}`}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden>
                  <Image
                    src={bonusFlash}
                    alt=""
                    width={41}
                    height={72}
                    className="h-[18px] w-auto max-h-[18px] object-contain select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                    sizes="18px"
                  />
                </div>
                <span className="text-[13.5px] text-[#5C4A00] font-body font-500 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
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

          {/* Scarcity bar: dark/serious, left red border, rounded-b-2xl */}
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
