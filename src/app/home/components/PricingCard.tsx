'use client';

import React from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import bonusFlash from '@/assets/bonus-flash.webp';
import { PricingInlineCountdown } from '@/app/home/components/PricingInlineCountdown';
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
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F8F8F6] pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15]">
            The Discount Is Real.
            <br />
            The Deadline Isn&apos;t <span className="text-[#CC0000] font-black">Far.</span>
          </h2>
        </div>

        {/* Main pricing card: top + sides only; bottom attaches to scarcity strip (sibling under section) */}
        <div className="reveal delay-100 max-w-2xl mx-auto rounded-t-2xl border border-black/8 border-b-0 bg-white shadow-card relative">
          {/* Square promo art (1:1); WebP max 704px — scripts/optimize-perf-images.cjs & encode-pricing-webp.cjs */}
          <div className="relative aspect-square overflow-hidden rounded-t-2xl">
            <Image
              src="/cikgu-ram-westport-driving-academy-mobile-desktop-price-section-704.webp"
              alt="Manual and automatic D and DA driving license — save RM299, free transport, WhatsApp support, register online"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 672px"
              quality={85}
            />
            {/* Bottom scrim only at the very edge — keeps corner polish without hiding the art CTA */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25"
              aria-hidden
            />
          </div>

          {/* Price pill sits below the promo art so “REGISTER ONLINE NOW” stays visible */}
          <div className="relative z-10 mx-5 mt-3 sm:mt-4">
            <div className="rounded-2xl border border-black/[0.08] bg-white px-4 py-3 text-center shadow-[0_10px_36px_rgba(0,0,0,0.1)] sm:flex sm:flex-col sm:items-center sm:px-5 sm:py-3.5">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">
                All-inclusive rate
              </p>
              <div className="mt-1 flex items-baseline justify-center gap-1.5 leading-none tabular-nums">
                <span className="shrink-0 font-display text-[0.9375rem] font-medium text-black/45">
                  RM
                </span>
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
                <PricingInlineCountdown targetHours={23} />
              </div>
              <p className="mt-2 max-w-sm text-center text-base leading-snug text-black/50 font-body sm:mt-2.5">
                Complete package · Zero hidden fees
              </p>
            </div>

            {/* Social proof stats: same strip as FAQ (`TrustStatsGrid`) */}
            <div className="mt-3 mb-6 sm:mb-7">
              <TrustStatsGrid />
            </div>
          </div>

          {/* Core section header: pill + rules (matches bonus row) */}
          <div className="flex items-center gap-3 mx-6 mb-2">
            <div className="h-px flex-1 bg-black/[0.08]" />
            <div className="flex items-center gap-1.5 px-3 py-[6px] rounded-full border border-black/[0.1]">
              <span
                className="shrink-0 text-[12px] leading-none select-none"
                role="img"
                aria-label="Included"
              >
                ✅
              </span>
              <span className="text-[10px] font-display font-700 text-[#111111] uppercase tracking-[0.12em] whitespace-nowrap">
                What&apos;s Included?
              </span>
            </div>
            <div className="h-px flex-1 bg-black/[0.08]" />
          </div>

          {/* Core items */}
          <div className="pt-1 pb-3">
            {coreItems.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-[10px] ${i < coreItems.length - 1 ? 'border-b border-black/[0.05]' : ''}`}
              >
                <div className="w-[18px] h-[18px] rounded-full bg-[#1A7A3C] flex items-center justify-center shrink-0">
                  <Icon name="CheckIcon" size={10} variant="solid" className="text-white" />
                </div>
                <span className="text-[13.5px] text-[#1C1C1E] font-body font-500 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Bonus section header: refined pill with flanking rules */}
          <div className="flex items-center gap-3 mx-6 my-1">
            <div className="h-px flex-1 bg-[#C9A020]/35" />
            <div className="flex items-center gap-1.5 px-3 py-[6px] rounded-full bg-[#C9A020]/12 border border-[#C9A020]/25">
              <span
                className="shrink-0 text-[12px] leading-none select-none"
                role="img"
                aria-label="Gift"
              >
                🎁
              </span>
              <span className="text-[10px] font-display font-700 text-[#8A6A00] uppercase tracking-[0.12em] whitespace-nowrap">
                BONUS (FREE)
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
                <span className="text-[13.5px] text-[#5C4A00] font-body font-500 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center px-6 pt-5 pb-5">
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
              className="btn-primary inline-flex min-h-[44px] w-auto max-w-full items-center justify-center whitespace-nowrap rounded-xl px-7 py-3 text-sm font-display font-700 uppercase tracking-wide sm:px-9 sm:text-[15px]"
            >
              RESERVE MY SEAT NOW
            </a>
          </div>
        </div>
      </div>

      {/* Scarcity strip: direct child of section#pricing; visually completes the card above */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="reveal delay-100 max-w-2xl mx-auto -mt-px rounded-b-2xl border border-black/8 border-t-0 bg-[#111111] px-5 py-4 overflow-hidden">
          <p className="text-center font-display font-700 text-sm text-white leading-tight sm:text-[15px] md:whitespace-nowrap">
            ⚠️ ONLY 15 STUDENTS PER MONTH ⚠️
          </p>
          <p className="mt-3 text-center text-sm text-white/85 font-body leading-relaxed">
            Cikgu Ram limits intake to guarantee personal attention. Spots for this month are filling
            up now.
          </p>
        </div>
      </div>
    </section>
  );
}
