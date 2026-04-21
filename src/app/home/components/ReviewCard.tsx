'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { ShineBorder } from '@/components/ui/ShineBorder';
import type { DisplayReview } from '@/types/display-review';

/** iOS-style neutral avatar (kept for photo-less reviewers). */
const AVATAR_NEUTRAL =
  'bg-gradient-to-b from-[#E8EAED] to-[#DADCE0] text-[#3C4043] shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]';

function GoogleGMark({ className, monochrome }: { className?: string; monochrome?: boolean }) {
  if (monochrome) {
    return (
      <svg className={`text-[#5F6368] ${className ?? ''}`} viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="currentColor"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="currentColor"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="currentColor"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC04"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function ReviewerAvatar({
  t,
  ariaHidden,
  prominent,
}: {
  t: DisplayReview;
  ariaHidden?: boolean;
  /** Larger treatment for featured / horizontal cards (48px mobile → 56px sm+). */
  prominent?: boolean;
}) {
  const dim = prominent ? 56 : 44;
  const box = prominent ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-11 w-11';
  const initialsClass = prominent ? 'text-[12px] sm:text-[13px]' : 'text-[12px]';
  const imgSizes = prominent ? '(min-width: 640px) 56px, 48px' : `${dim}px`;

  if (t.avatar?.trim()) {
    return (
      <div
        className={`${box} shrink-0 overflow-hidden rounded-full border border-black/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.04)]`}>
        <AppImage
          src={t.avatar}
          alt={ariaHidden ? '' : t.avatarAlt}
          width={dim}
          height={dim}
          sizes={imgSizes}
          quality={72}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex ${box} shrink-0 items-center justify-center rounded-full font-google ${initialsClass} font-semibold tracking-tight text-[#3C4043] shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] ${AVATAR_NEUTRAL}`}
      aria-hidden={ariaHidden || undefined}>
      {initialsFromName(t.name)}
    </div>
  );
}

function reviewNeedsToggle(text: string) {
  return text.length > 160 || text.includes('\n');
}

/** Collapsed height fixed for row rhythm; expanded grows (no inner scroll). Shine: `<ShineBorder />`. */
const CARD_VERTICAL =
  'testimonial-card-pause-target relative flex w-[272px] shrink-0 flex-col overflow-hidden rounded-[12px] bg-white pl-3.5 pr-4 pb-3 pt-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] [contain:layout] sm:w-[272px]';

/** Featured wide card (FAQ): calm elevation, no marquee shine — product-page restraint. */
const CARD_HORIZONTAL =
  'relative flex w-full max-w-xl shrink-0 flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white px-4 pb-5 pt-5 text-left shadow-[0_1px_16px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] sm:px-7 sm:pb-7 sm:pt-7 sm:shadow-[0_2px_24px_rgba(0,0,0,0.04),0_12px_48px_rgba(0,0,0,0.04)]';

export function ReviewCard({
  t,
  ariaHidden,
  expanded: expandedProp,
  onExpandedChange,
  layout = 'vertical',
  /** FAQ / conversion blocks: link uses ink + brand focus ring (G mark matches testimonials). */
  neutralChrome = false,
}: {
  t: DisplayReview;
  ariaHidden?: boolean;
  /** When `onExpandedChange` is set, expanded is controlled (shared across marquee duplicates). */
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** `horizontal` = full-width row layout for embedded sections; default matches testimonials marquee. */
  layout?: 'vertical' | 'horizontal';
  neutralChrome?: boolean;
}) {
  const [expandedLocal, setExpandedLocal] = useState(false);
  const controlled = onExpandedChange !== undefined;
  const expanded = controlled ? !!expandedProp : expandedLocal;
  const setExpanded = (next: boolean) => {
    if (controlled) onExpandedChange(next);
    else setExpandedLocal(next);
  };
  const showToggle = reviewNeedsToggle(t.text);
  const locationTrimmed = t.location.trim();
  const showLocationLine =
    locationTrimmed.length > 0 && locationTrimmed.toLowerCase() !== 'google review';

  const googleStarsRow = (
    <div
      className="mb-2.5 flex min-w-0 shrink-0 flex-nowrap items-center gap-1.5"
      aria-label={`Google review, ${t.rating} out of 5 stars`}>
      <GoogleGMark className="h-4 w-4 shrink-0" aria-hidden />
      <span className="min-w-0 truncate font-google text-[11px] font-medium leading-none text-[#5F6368] sm:text-[12px]" aria-hidden>
        Google review
      </span>
      <span className="shrink-0 text-[#DADCE0]" aria-hidden>
        ·
      </span>
      <div className="flex shrink-0 items-center gap-0.5" aria-hidden>
        {Array.from({ length: t.rating }).map((_, si) => (
          <Icon
            key={si}
            name="StarIcon"
            size={12}
            variant="solid"
            className="shrink-0 text-[#FBBF0A]"
          />
        ))}
      </div>
    </div>
  );

  const nameMetaBlock = (
    <>
      <p className="font-google text-[15px] font-bold leading-tight tracking-[-0.02em] text-[#202124]">{t.name}</p>
      <p className="mt-0.5 font-google text-[12px] font-normal leading-snug text-[#5F6368]">
        {t.duration}
        {showLocationLine ? (
          <>
            <span className="text-[#DADCE0]"> · </span>
            {locationTrimmed}
          </>
        ) : null}
      </p>
    </>
  );

  const quoteBlock = (
    <div
      className={
        layout === 'horizontal'
          ? 'flex flex-col'
          : expanded
            ? 'flex min-h-0 flex-col'
            : 'flex min-h-0 flex-1 flex-col'
      }>
      <blockquote
        className={`testimonial-emoji-copy text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-[#202124] antialiased [font-feature-settings:'kern'_1] whitespace-pre-line sm:text-[15px] ${
          layout === 'horizontal'
            ? ''
            : expanded
              ? 'shrink-0'
              : 'min-h-0 flex-1 overflow-hidden'
        } ${layout === 'vertical' && showToggle && !expanded ? 'line-clamp-4' : ''}`}>
        {t.text}
      </blockquote>

      {showToggle && layout !== 'horizontal' && (
        <button
          type="button"
          tabIndex={ariaHidden ? -1 : undefined}
          aria-expanded={expanded}
          aria-label={expanded ? 'Show less of this review' : 'Read full review'}
          onClick={() => setExpanded(!expanded)}
          className="group mt-2 flex min-h-[44px] w-fit shrink-0 items-center gap-1 self-start font-google text-[14px] font-bold tracking-tight text-[#1A73E8] active:opacity-70">
          <span>{expanded ? 'Show less' : 'Read more'}</span>
          <Icon
            name="ChevronDownIcon"
            size={16}
            variant="solid"
            className={`text-[#1A73E8] transition-transform duration-200 ${expanded ? '-rotate-180' : ''}`}
          />
        </button>
      )}
    </div>
  );

  if (layout === 'horizontal') {
    const googleRowHorizontal = (
      <div
        className="flex min-w-0 flex-nowrap items-center gap-1.5"
        aria-label={`Google review, ${t.rating} out of 5 stars`}>
        <GoogleGMark className="h-4 w-4 shrink-0" aria-hidden />
        <span className="min-w-0 truncate font-google text-[11px] font-medium leading-none tracking-tight text-[#6e6e73] sm:text-[12px]">
          Google
        </span>
        <span className="shrink-0 text-[#d2d2d7]" aria-hidden>
          ·
        </span>
        <div className="flex shrink-0 items-center gap-0.5" aria-hidden>
          {Array.from({ length: t.rating }).map((_, si) => (
            <Icon
              key={si}
              name="StarIcon"
              size={12}
              variant="solid"
              className="shrink-0 text-[#E3B008]"
            />
          ))}
        </div>
      </div>
    );

    return (
      <article
        aria-hidden={ariaHidden || undefined}
        data-review-expanded={showToggle && expanded ? 'true' : undefined}
        className={CARD_HORIZONTAL}>
        {/*
          Mobile: identity row, then quote at full card width (readable measure).
          sm+: classic two-column spec — avatar spans rows, meta + quote in the second column.
        */}
        <div className="flex w-full min-w-0 flex-col gap-4 sm:grid sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-5">
          <div className="flex min-w-0 flex-row items-start gap-3 sm:contents">
            <div className="shrink-0 sm:row-span-2 sm:self-start">
              <ReviewerAvatar t={t} ariaHidden={ariaHidden} prominent />
            </div>
            <div className="min-w-0 flex-1 text-left sm:col-start-2 sm:row-start-1 sm:min-w-0">
              {googleRowHorizontal}

              <p className="mt-2.5 break-words font-google text-[16px] font-semibold leading-[1.2] tracking-[-0.022em] text-[#1d1d1f] sm:mt-3 sm:text-lg">
                {t.name}
              </p>
              <p className="mt-1 text-[12px] leading-snug text-[#86868b] sm:text-[14px]">
                {t.duration}
                {showLocationLine ? (
                  <>
                    <span className="text-black/25"> · </span>
                    {locationTrimmed}
                  </>
                ) : null}
              </p>
            </div>
          </div>

          <div className="min-w-0 text-left sm:col-start-2 sm:row-start-2">
            <blockquote
              className={`testimonial-emoji-copy border-none pl-0 text-left text-[15px] font-normal leading-[1.55] tracking-[-0.015em] text-[#1d1d1f] antialiased [font-feature-settings:'kern'_1] whitespace-pre-line text-pretty sm:text-[16px] sm:leading-[1.47] ${
                showToggle && !expanded ? 'line-clamp-4' : ''
              }`}>
              {t.text}
            </blockquote>

            {showToggle ? (
              <button
                type="button"
                tabIndex={ariaHidden ? -1 : undefined}
                aria-expanded={expanded}
                aria-label={expanded ? 'Show less of this review' : 'Read full review'}
                onClick={() => setExpanded(!expanded)}
                className={
                  neutralChrome
                    ? 'group mt-3 flex min-h-[44px] w-full touch-manipulation items-center justify-start gap-1 rounded-xl font-google text-[14px] font-semibold tracking-tight text-[#1d1d1f] transition-colors active:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC0000]/25 focus-visible:ring-offset-2 sm:mt-4 sm:w-auto sm:rounded-md sm:active:bg-transparent'
                    : 'group mt-3 flex min-h-[44px] w-full touch-manipulation items-center justify-start gap-1 rounded-xl font-google text-[14px] font-semibold tracking-tight text-[#007AFF] transition-colors active:bg-black/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/30 focus-visible:ring-offset-2 sm:mt-4 sm:w-auto sm:rounded-md sm:active:bg-transparent'
                }>
                <span>{expanded ? 'Show less' : 'Read more'}</span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  variant="solid"
                  className={`transition-transform duration-200 ${neutralChrome ? 'text-[#1d1d1f]' : 'text-[#007AFF]'} ${expanded ? '-rotate-180' : ''}`}
                />
              </button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      aria-hidden={ariaHidden || undefined}
      data-review-expanded={expanded ? 'true' : undefined}
      className={`${CARD_VERTICAL} ${expanded ? 'min-h-[308px] h-auto' : 'h-[308px] min-h-[308px]'}`}>
      <ShineBorder borderWidth={1} duration={14} aria-hidden />
      <div className={`relative z-[1] flex w-full flex-1 flex-col ${expanded ? '' : 'min-h-0'}`}>
        {googleStarsRow}

        <div className="flex gap-3">
          <ReviewerAvatar t={t} ariaHidden={ariaHidden} />
          <div className="min-w-0 flex-1 pt-0.5">{nameMetaBlock}</div>
        </div>

        <div className="my-3 h-px w-full bg-black/[0.06]" aria-hidden />

        {quoteBlock}
      </div>
    </article>
  );
}
