'use client';

import Image from 'next/image';
import React from 'react';
import { PricingInlineCountdown } from '@/app/home/components/PricingInlineCountdown';
import { ReviewCard } from '@/app/home/components/ReviewCard';
import { GOOGLE_REVIEWS_STATIC } from '@/data/google-reviews-static';
import { FAQ_WARM_OUTLINE } from '@/lib/faq-warm-outline';
import { WhatsAppMark } from '@/components/icons/WhatsAppMark';

/** Single strongest Google review for the FAQ conversion card (no emojis, clear outcome). */
const FEATURED_REVIEW = GOOGLE_REVIEWS_STATIC.find((r) => r.id === 'google-syahril')!;

/**
 * Nested FAQ tray on yellow: cool neutral well (#F2F2F7); inner chip tiles keep ink hairlines.
 */
const FAQ_SUBPANEL_SURFACE = `${FAQ_WARM_OUTLINE} bg-[#F2F2F7]`;

/** Tray padding: same inset on mobile as `sm:` so inner cards keep the same silhouette. */
const FAQ_CHIPS_TRAY_CLASS = `${FAQ_SUBPANEL_SURFACE} p-3`;

/**
 * Feature chips: on narrow widths stack icon then copy so the pill + labels get full cell width
 * (avoids `min-w-0` + side-by-side icon squeezing “EXCLUSIVE” against tray `overflow-hidden`).
 * From `sm:` restore single-row layout to match desktop.
 */
const FAQ_CHIP_TILE_ROW =
  'flex min-h-[3.5rem] min-w-0 flex-col items-start gap-2 rounded-xl border-[0.5px] border-solid border-[#1a1814]/14 bg-white px-4 py-3 shadow-sm motion-safe:transition-[transform,box-shadow] motion-safe:active:scale-[0.985] motion-safe:active:shadow-[0_1px_6px_rgba(0,0,0,0.06)] motion-reduce:active:scale-100 sm:flex-row sm:items-center sm:gap-3.5';

const FAQ_CHIP_TILE_CLASS = FAQ_CHIP_TILE_ROW;

/**
 * Inline “verified seal” (12‑lobe rosette + check) for the FAQ chip — original SVG
 * geometry, not Meta CDN artwork or their proprietary asset.
 */
function VerifiedSealBadge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="#1877F2"
        d="M50.00,4.00L59.84,13.29L73.00,10.16L76.87,23.13L89.84,27.00L86.71,40.16L96.00,50.00L86.71,59.84L89.84,73.00L76.87,76.87L73.00,89.84L59.84,86.71L50.00,96.00L40.16,86.71L27.00,89.84L23.13,76.87L10.16,73.00L13.29,59.84L4.00,50.00L13.29,40.16L10.16,27.00L23.13,23.13L27.00,10.16L40.16,13.29Z"
      />
      <path
        d="M36 52 L47 66 L70 38"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FEATURE_CHIPS: readonly (
  | { label: 'Until Pass Package'; badge: 'Exclusive'; avatar: { kind: 'verifiedSeal' } }
  | {
      label: 'QTI & JPJ Ready';
      avatar: { kind: 'jpj' };
      hint: 'Covers on-road Part 2 (QTI), JPJ theory, and paperwork.';
    }
  | { label: 'Manual / Automatic'; avatar: { kind: 'emoji'; emoji: '🚗' } }
  | { label: 'WhatsApp Support'; avatar: { kind: 'whatsapp' } }
)[] = [
  { label: 'Until Pass Package', badge: 'Exclusive', avatar: { kind: 'verifiedSeal' } },
  {
    label: 'QTI & JPJ Ready',
    avatar: { kind: 'jpj' },
    hint: 'Covers on-road Part 2 (QTI), JPJ theory, and paperwork.',
  },
  { label: 'Manual / Automatic', avatar: { kind: 'emoji', emoji: '🚗' } },
  { label: 'WhatsApp Support', avatar: { kind: 'whatsapp' } },
];

const FAQ_CHIP_ICON_WRAP_CLASS = 'flex h-9 w-9 shrink-0 items-center justify-center text-[#3d3830]';

/** FAQ feature chips: same icon scale as desktop so each tile keeps one silhouette on mobile. */
const FAQ_CHIP_ICON_MEDIA_CLASS = 'h-6 w-6 shrink-0';

/** Price pill markup with FAQ `ReviewCard` warm ring + lift (`FAQ_WARM_OUTLINE`). */
function FaqPricingPill() {
  return (
    <div
      className={`${FAQ_WARM_OUTLINE} bg-white px-4 py-3.5 text-center sm:flex sm:flex-col sm:items-center sm:px-5 sm:py-3.5`}
      role="group"
      aria-labelledby="faq-pricing-label"
    >
      <p
        id="faq-pricing-label"
        className="text-xs font-medium uppercase leading-snug tracking-[0.12em] text-black/45 sm:text-[11px] sm:tracking-[0.14em]"
      >
        All-inclusive rate
      </p>
      <div className="mt-1 flex min-w-0 items-baseline justify-center gap-1.5 leading-none tabular-nums">
        <span className="shrink-0 font-display text-[0.9375rem] font-medium text-black/45">RM</span>
        <span className="min-w-0 font-display text-[clamp(2.25rem,9vw+1rem,2.625rem)] font-semibold tracking-tight text-[#111111] sm:text-[3rem]">
          2,050
        </span>
      </div>
      {/* Stack promo row + countdown on narrow widths; single row from `sm` (no hover-only affordances). */}
      <div className="mt-2.5 flex min-w-0 flex-col items-center gap-2 sm:mt-2.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-1.5">
        <div className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
          <span className="font-body text-sm text-black/35 line-through">RM2,349</span>
          <span className="hidden h-3 w-px shrink-0 bg-black/[0.08] sm:block" aria-hidden />
          <span className="rounded-md bg-[#CC0000] px-2 py-1 font-display text-[11px] font-semibold uppercase tracking-wide text-white sm:py-0.5">
            SAVE RM299
          </span>
        </div>
        <div className="flex min-w-0 items-center justify-center gap-x-2 sm:contents">
          <span className="hidden h-3 w-px shrink-0 bg-black/[0.08] sm:block" aria-hidden />
          <PricingInlineCountdown targetHours={23} />
        </div>
      </div>
    </div>
  );
}

export default function StillHaveQuestionsSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-still-deciding-heading"
      className="relative overflow-hidden bg-white py-14 scroll-mt-24 sm:scroll-mt-28 sm:py-24"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-3xl px-4 sm:px-6">
        <div className="relative isolate mt-8 w-full min-w-0 sm:mt-14">
          <div className="relative isolate w-full min-w-0 overflow-x-clip rounded-3xl border border-black/[0.12] bg-[#FFD100] text-center shadow-[0_12px_48px_rgba(0,0,0,0.1)] reveal delay-200 motion-reduce:delay-0">
            <div className="relative z-[1] w-full min-w-0 break-words pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom,0px)+1.25rem)] pl-[max(0.875rem,env(safe-area-inset-left,0px))] pr-[max(0.875rem,env(safe-area-inset-right,0px))] sm:pt-10 sm:pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] sm:pl-[max(2.5rem,env(safe-area-inset-left,0px))] sm:pr-[max(2.5rem,env(safe-area-inset-right,0px))] lg:pl-[max(1.25rem,env(safe-area-inset-left,0px))] lg:pr-[max(1.25rem,env(safe-area-inset-right,0px))]">
              <div className="mx-auto w-full min-w-0 max-w-lg text-left sm:max-w-xl">
                <header className="mb-5 text-center sm:mb-8">
                  <p className="font-display text-base font-semibold leading-snug tracking-[-0.02em] text-[#6b645c] sm:text-[1rem]">
                    Still deciding?
                  </p>
                  <h2
                    id="faq-still-deciding-heading"
                    className="mx-auto mt-2 max-w-[min(100%,20.5rem)] text-pretty font-display text-[clamp(1.5rem,5vw+0.75rem,2.25rem)] font-black leading-[1.1] tracking-[-0.035em] text-[#1a1814] sm:max-w-none sm:leading-[1.12] sm:text-[clamp(1.625rem,3.2vw+1rem,2.5rem)]"
                  >
                    Decide to pass.
                  </h2>
                </header>
                <div className={FAQ_CHIPS_TRAY_CLASS}>
                  <ul
                    className="m-0 grid list-none grid-cols-2 gap-2 gap-y-2 p-0"
                    aria-label="What is included"
                  >
                    {FEATURE_CHIPS.map((item) => (
                      <li key={item.label} className={FAQ_CHIP_TILE_CLASS}>
                        <div className={FAQ_CHIP_ICON_WRAP_CLASS}>
                          {item.avatar.kind === 'verifiedSeal' ? (
                            <VerifiedSealBadge className={FAQ_CHIP_ICON_MEDIA_CLASS} />
                          ) : item.avatar.kind === 'jpj' ? (
                            <Image
                              src="/jpj-logo.webp"
                              alt=""
                              width={24}
                              height={24}
                              sizes="24px"
                              className={`${FAQ_CHIP_ICON_MEDIA_CLASS} object-contain object-center`}
                            />
                          ) : item.avatar.kind === 'emoji' ? (
                            <span
                              className={`${FAQ_CHIP_ICON_MEDIA_CLASS} flex items-center justify-center text-2xl leading-none tracking-tight text-[#3d3830]/90`}
                              aria-hidden
                            >
                              {item.avatar.emoji}
                            </span>
                          ) : (
                            <WhatsAppMark
                              className={`${FAQ_CHIP_ICON_MEDIA_CLASS} text-[#25D366]`}
                            />
                          )}
                        </div>
                        <div className="min-w-0 w-full sm:w-auto sm:flex-1">
                          {'badge' in item ? (
                            <>
                              <span className="mb-1.5 inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-md border-[0.5px] border-solid border-[#1a1814]/16 bg-[#F5F5F7] px-2.5 py-1 font-display text-[10px] font-semibold uppercase leading-none tracking-[0.16em] text-[#1a1814] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                                <span aria-hidden className="select-none text-[11px] leading-none">
                                  🔥
                                </span>
                                {item.badge}
                              </span>
                              <span className="block min-w-0 text-pretty font-display text-sm font-semibold tracking-[-0.018em] text-[#2a2620] max-sm:leading-[1.03] sm:leading-snug sm:text-base sm:tracking-[-0.02em]">
                                {item.label}
                              </span>
                            </>
                          ) : (
                            <span className="min-w-0 text-pretty font-display text-sm font-semibold tracking-[-0.018em] text-[#2a2620] max-sm:leading-[1.06] sm:leading-snug sm:text-base sm:tracking-[-0.02em]">
                              {'hint' in item ? (
                                <>
                                  <span id="faq-chip-hint-qti-jpj" className="sr-only">
                                    {item.hint}
                                  </span>
                                  <abbr
                                    title={item.hint}
                                    aria-describedby="faq-chip-hint-qti-jpj"
                                    className="cursor-help no-underline decoration-transparent"
                                  >
                                    {item.label}
                                  </abbr>
                                </>
                              ) : (
                                item.label
                              )}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mx-auto mt-5 w-full min-w-0 max-w-full sm:mt-8 sm:max-w-xl">
                <ReviewCard
                  t={FEATURED_REVIEW}
                  layout="horizontal"
                  neutralChrome
                  horizontalDensity="compact"
                />
              </div>

              <div className="relative z-[2] mx-auto mt-8 w-full min-w-0 max-w-md sm:mt-14">
                <FaqPricingPill />
              </div>

              <div className="mt-7 flex w-full min-w-0 justify-center px-0 pb-0.5 sm:mt-10">
                <a
                  href="#register"
                  className="btn-primary inline-flex w-full max-w-full min-h-[52px] min-w-0 items-center justify-center whitespace-normal break-words rounded-2xl px-5 py-4 text-center text-base font-display font-bold leading-snug tracking-[0.5px] text-pretty [-webkit-tap-highlight-color:transparent] touch-manipulation motion-safe:active:brightness-[0.96] motion-reduce:active:brightness-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1814]/65 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFD100] sm:min-h-[48px] sm:w-auto sm:min-w-[min(100%,280px)] sm:max-w-none sm:px-10"
                >
                  BOOK MY SEAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
