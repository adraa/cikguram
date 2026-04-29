'use client';

import React from 'react';
import Image from 'next/image';
import {
  PricingInlineCountdown,
  usePricingCountdown,
} from '@/app/home/components/PricingInlineCountdown';

const PROCESS_IMAGE = '/cikgu-ram-westport-driving-academy-manual-automatic-process.webp';
const PROCESS_ALT =
  'Eight-step infographic: registration, KPP01 theory, computerised theory test and LDL, KPP02 circuit training, KPP03 on-road training, pre-test evaluation, JPJ practical test, then probationary P-license.';

function scrollToRegisterForm() {
  const el = document.getElementById('full-name-input');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => el.focus(), 650);
  }
}

export default function ProcessSection() {
  const timeLeft = usePricingCountdown(23);

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16 reveal">
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4 tracking-tight leading-[1.1]">
            Your Road to a P-License
          </h2>
        </div>

        <div className="relative reveal delay-100 w-full overflow-hidden rounded-2xl bg-[#111111] text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] ring-1 ring-white/10">
          <div className="relative z-[1] w-full">
            <Image
              src={PROCESS_IMAGE}
              alt={PROCESS_ALT}
              width={1856}
              height={2304}
              className="block h-auto w-full max-w-full"
              sizes="(max-width: 896px) 100vw, 896px"
              priority={false}
            />
          </div>

          <div className="w-full border-t border-black/[0.08] bg-white px-4 py-3 text-center text-[#111111] sm:flex sm:flex-col sm:items-center sm:px-5 sm:py-3.5">
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
              <PricingInlineCountdown timeLeft={timeLeft} />
            </div>
            <p className="mt-2 max-w-sm text-center text-base leading-snug text-black/50 font-body sm:mt-2.5">
              Complete package · Zero hidden fees
            </p>

            <div className="flex w-full justify-center px-6 pt-5 pb-5">
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToRegisterForm();
                }}
                className="btn-primary inline-flex min-h-[44px] w-auto max-w-full items-center justify-center whitespace-nowrap rounded-xl px-7 py-3 text-sm font-display font-700 uppercase tracking-wide sm:px-9 sm:text-[15px]"
              >
                RESERVE MY SEAT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
