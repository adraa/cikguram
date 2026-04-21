'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import { ReviewCard } from '@/app/home/components/ReviewCard';
import { GOOGLE_REVIEWS_STATIC } from '@/data/google-reviews-static';
import { GOOGLE_BUSINESS_MAPS_URL } from '@/lib/site-urls';

/** Single strongest Google review for the FAQ conversion card (no emojis, clear outcome). */
const FEATURED_REVIEW = GOOGLE_REVIEWS_STATIC.find((r) => r.id === 'google-syahril')!;

const CHIP_ICON_SHELL =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFFCF5] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#FFCC00]/14';

/** WhatsApp brand mark (single path, currentColor) — sized to match Heroicons at 19px. */
function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={19}
      height={19}
      className={className}
      aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

const FEATURE_CHIPS = [
  { label: 'All-inclusive package' as const, avatar: { kind: 'heroicon' as const, name: 'CheckBadgeIcon' as const } },
  { label: 'JPJ & QTI ready' as const, avatar: { kind: 'jpj' as const } },
  { label: 'Manual & auto' as const, avatar: { kind: 'emoji' as const, emoji: '🚗' as const } },
  { label: 'Direct WhatsApp' as const, avatar: { kind: 'whatsapp' as const } },
] as const;

function pad2(n: number) {
  return String(Math.max(0, Math.min(99, n))).padStart(2, '0');
}

/** Loops forever — illustrative only, not a real offer deadline. */
function DecorativeCountdown() {
  const [t, setT] = useState({ h: 23, m: 59, s: 47 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setT((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          return { h: 23, m: 59, s: 59 };
        }
        return { h, m, s };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-0 flex flex-col items-center gap-4 sm:gap-5">
      <p className="mx-auto w-full max-w-[19rem] px-1 text-pretty text-center antialiased [font-feature-settings:'kern'_1] sm:max-w-[22rem] sm:px-0 md:max-w-[24rem]">
        <span className="block font-display text-[0.875rem] font-normal leading-[1.45] tracking-[-0.022em] text-[#7a7268] sm:text-[1rem] sm:leading-[1.42] sm:tracking-[-0.026em] md:text-[1.0625rem] md:leading-[1.4]">
          The Discount Is Real.
        </span>
        <span className="mt-2 block font-display text-[0.875rem] font-normal leading-[1.45] tracking-[-0.022em] text-[#7a7268] sm:mt-2.5 sm:text-[1rem] sm:leading-[1.42] sm:tracking-[-0.026em] md:text-[1.0625rem] md:leading-[1.4]">
          {"The Deadline Isn't "}
          <span className="font-bold tracking-[-0.028em] text-[#CC0000] [text-rendering:optimizeLegibility]">Far</span>
          .
        </span>
      </p>
      <div
        className="inline-flex items-center gap-1 rounded-xl border border-[#FFCC00]/22 bg-white/90 px-3 py-2 font-display text-sm font-800 tabular-nums text-[#2a2620] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] ring-1 ring-[#FFCC00]/12 sm:px-3.5 sm:py-2"
        aria-hidden>
        <span className="mr-1 text-[13px]">⏰</span>
        <span>{pad2(t.h)}</span>
        <span className="text-[#FFCC00]/45">:</span>
        <span>{pad2(t.m)}</span>
        <span className="text-[#FFCC00]/45">:</span>
        <span>{pad2(t.s)}</span>
      </div>
      <p className="sr-only">Illustrative countdown for display only; not a purchase deadline.</p>
    </div>
  );
}

export default function StillHaveQuestionsSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <div
          className="relative mt-10 overflow-visible rounded-3xl border border-black/[0.12] bg-[#FFD100] text-center shadow-[0_12px_48px_rgba(0,0,0,0.1)] reveal delay-200 sm:mt-14">
          <div className="relative z-[1] px-5 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-10">
            <h2 className="font-display text-[1.375rem] font-800 leading-[1.12] tracking-tight text-[#1a1814] sm:text-3xl md:text-[2rem]">
              Join 600+ Malaysians Who Passed With Cikgu Ram
            </h2>

            {/* Feature grid — single inset panel, hairline dividers (product-spec style) */}
            <div className="mx-auto mt-8 max-w-lg text-left sm:mt-10">
              <div className="overflow-hidden rounded-2xl shadow-[0_2px_28px_rgba(255,190,70,0.09)] ring-1 ring-[#FFCC00]/18">
                <ul className="m-0 grid list-none grid-cols-2 gap-px bg-[#FFCC00]/16 p-0">
                  {FEATURE_CHIPS.map((item) => (
                    <li
                      key={item.label}
                      className="flex min-h-[4.5rem] items-center gap-3 bg-white px-4 py-3.5 sm:min-h-[5rem] sm:gap-3.5 sm:px-5 sm:py-4">
                      <div className={CHIP_ICON_SHELL}>
                        {item.avatar.kind === 'heroicon' ? (
                          <Icon
                            name={item.avatar.name}
                            size={19}
                            variant="solid"
                            className="text-[#3d3830]/85"
                            aria-hidden
                          />
                        ) : item.avatar.kind === 'jpj' ? (
                          <Image
                            src="/jpj-logo.png"
                            alt=""
                            width={22}
                            height={22}
                            sizes="22px"
                            className="h-[22px] w-[22px] object-contain object-center"
                          />
                        ) : item.avatar.kind === 'emoji' ? (
                          <span className="select-none text-[19px] leading-none tracking-tight text-[#3d3830]/90" aria-hidden>
                            {item.avatar.emoji}
                          </span>
                        ) : (
                          <WhatsAppMark className="text-[#25D366]" />
                        )}
                      </div>
                      <span className="min-w-0 font-display text-[14px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#2a2620] sm:text-[15px]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats row — mirrors #track-record strip */}
            <div className="mx-auto mt-8 grid max-w-md grid-cols-3 divide-x divide-[#FFCC00]/22 rounded-2xl border border-[#FFCC00]/25 bg-white py-3 shadow-[0_1px_3px_rgba(255,200,80,0.08)] sm:mt-10 sm:py-4">
              <a
                href={GOOGLE_BUSINESS_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-0.5 px-1 transition-colors hover:bg-[#FFCC00]/06 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#CC0000]/30"
                aria-label="View Google reviews — 4.9 rating on Google Maps">
                <span className="font-display text-[15px] font-black tabular-nums text-[#1a1814] sm:text-[16px]">4.9</span>
                <span className="text-[11px] leading-none text-[#D4A017] sm:text-[12px]" aria-hidden>
                  ★
                </span>
                <span className="mt-0.5 text-center font-display text-[8px] font-semibold uppercase leading-tight tracking-wide text-[#6b6359] sm:text-[9px]">
                  Google
                  <br />
                  rating
                </span>
              </a>
              <div className="flex flex-col items-center justify-center gap-0.5 px-1">
                <span className="text-[13px] sm:text-[14px]" aria-hidden>
                  💪
                </span>
                <span className="font-display text-[15px] font-black tabular-nums text-[#1a1814] sm:text-[16px]">10+</span>
                <span className="mt-0.5 text-center font-display text-[8px] font-semibold uppercase leading-tight tracking-wide text-[#6b6359] sm:text-[9px]">
                  Years
                  <br />
                  experience
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-0.5 px-1">
                <span className="text-[13px] sm:text-[14px]" aria-hidden>
                  ❤️
                </span>
                <span className="font-display text-[15px] font-black tabular-nums text-[#1a1814] sm:text-[16px]">600+</span>
                <span className="mt-0.5 text-center font-display text-[8px] font-semibold uppercase leading-tight tracking-wide text-[#6b6359] sm:text-[9px]">
                  Students
                  <br />
                  passed
                </span>
              </div>
            </div>

            {/* Same Google review card as #testimonials marquee */}
            <div className="mx-auto mt-8 flex w-full max-w-xl justify-center font-google sm:mt-10">
              <ReviewCard t={FEATURED_REVIEW} layout="horizontal" neutralChrome />
            </div>

            {/* Pricing — focal hero card (elevated depth, specular accents) */}
            <div className="relative z-[2] mx-auto mt-10 w-full max-w-md sm:mt-14">
              <div
                className="pointer-events-none absolute -inset-3 z-0 rounded-[1.625rem] bg-gradient-to-b from-[#FFCC00]/14 via-transparent to-transparent opacity-90 blur-2xl sm:-inset-5 sm:rounded-[2.125rem]"
                aria-hidden
              />

              <div className="relative z-[1] overflow-hidden rounded-[1.375rem] border border-[#E8D9B8] bg-gradient-to-b from-white via-[#FFFEFB] to-[#FAF6EF] px-6 py-8 shadow-[0_1px_2px_rgba(255,200,90,0.06),0_18px_36px_-10px_rgba(200,150,50,0.12),0_42px_84px_-28px_rgba(255,190,70,0.1)] ring-1 ring-white/90 sm:rounded-3xl sm:px-9 sm:py-10">
                <div
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FFCC00]/22 to-transparent sm:inset-x-10"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-12 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_28%_28%,rgba(255,255,255,0.98),transparent_68%)] opacity-55 sm:h-44 sm:w-44"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,252,245,0.65),transparent_72%)]"
                  aria-hidden
                />

                <div className="relative">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a8278] sm:text-[11px]">
                    All-inclusive rate
                  </p>
                  <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0 tabular-nums sm:mt-5">
                    <span className="font-display text-[1rem] font-medium leading-none text-[#7a7268] sm:text-[1.0625rem]">RM</span>
                    <span className="font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.045em] text-[#1a1814] sm:text-[3.5rem] md:text-[3.75rem]">
                      2,050
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-5">
                    <span className="font-body text-[15px] text-[#a3988a] line-through decoration-[#D4C4B0]/80 sm:text-base">
                      RM2,349
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#CC0000] px-3 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_2px_14px_rgba(204,0,0,0.38)] sm:px-3.5 sm:text-[11px]">
                      Save RM299
                    </span>
                  </div>

                  <div className="relative mt-8 border-t border-[#FFCC00]/18 pt-7 sm:mt-9 sm:pt-8">
                    <DecorativeCountdown />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center sm:mt-10">
              <a
                href="#register"
                className="btn-primary inline-flex items-center justify-center min-w-[220px] px-10 py-4 rounded-2xl text-base font-display font-700 tracking-[0.5px]">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
