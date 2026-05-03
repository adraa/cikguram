import React from 'react';

/** Default strip (pricing / stats): thin ink outline + soft lift (outline is black, not gold ring). */
const TRUST_STATS_SHELL =
  'overflow-hidden rounded-2xl border border-solid border-black/[0.12] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)]';

/**
 * Hero overlay: same corner radius as urgency strip (`rounded-xl` only — avoids pill-like `rounded-2xl` on wide desktop).
 */
const TRUST_STATS_SHELL_COMPACT =
  'overflow-hidden rounded-xl border border-solid border-black/[0.12] bg-white/95 shadow-[0_4px_18px_rgba(0,0,0,0.14)] backdrop-blur-md';

/** Trust strip: generous vertical rhythm + min height so each column feels tappable on phones. */
const TRUST_CELL_CLASS =
  'flex min-h-[5rem] flex-1 flex-col items-center justify-center gap-0.5 px-1.5 py-2.5 sm:min-h-0 sm:gap-0.5 sm:px-2 sm:py-2.5';

const TRUST_CELL_COMPACT =
  'flex min-h-0 flex-1 flex-col items-center justify-center gap-1 px-1.5 py-2 sm:gap-1 sm:px-2 sm:py-2.5 md:px-2.5 md:py-3';

const TRUST_GLYPH_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center text-[13px] leading-none sm:h-[1.375rem] sm:text-[14px]';

const TRUST_GLYPH_ROW_COMPACT =
  'flex h-4 w-full shrink-0 items-center justify-center text-[11px] leading-none sm:h-[1.25rem] sm:text-[13px]';

const TRUST_VALUE_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center font-display text-[15px] font-black tabular-nums leading-none tracking-[-0.02em] text-[#111111] sm:h-[1.375rem] sm:text-[16px]';

const TRUST_VALUE_ROW_COMPACT =
  'flex h-4 w-full shrink-0 items-center justify-center font-display text-[12px] font-black tabular-nums leading-none tracking-[-0.02em] text-[#111111] sm:h-5 sm:text-[15px] md:text-[16px]';

const TRUST_CAPTION_CLASS =
  'flex min-h-[1.875rem] w-full max-w-[6.25rem] flex-col items-center justify-center text-pretty text-center font-display text-[10px] font-semibold uppercase leading-[1.18] tracking-[0.06em] text-black/45 sm:min-h-[2rem] sm:max-w-[6rem] sm:text-[9px] sm:leading-[1.15] sm:tracking-[0.08em]';

const TRUST_CAPTION_COMPACT =
  'flex min-h-0 w-full max-w-[5rem] flex-col items-center justify-center text-pretty text-center font-display text-[9px] font-semibold uppercase leading-[1.15] tracking-[0.06em] text-black/50 sm:max-w-[5.5rem] sm:text-[9px] sm:leading-[1.16] md:max-w-[6rem] md:text-[10px] md:leading-[1.18]';

export type TrustStatsGridVariant = 'default' | 'compact';

type TrustStatsGridProps = {
  /** `compact`: tighter type and padding for hero overlay; `default` for FAQ / pricing. */
  variant?: TrustStatsGridVariant;
  className?: string;
};

/**
 * Three-column trust bar (Google / years / students): shared by hero, pricing, and track-record.
 */
export default function TrustStatsGrid({ variant = 'default', className = '' }: TrustStatsGridProps) {
  const shell = variant === 'compact' ? TRUST_STATS_SHELL_COMPACT : TRUST_STATS_SHELL;
  const cell = variant === 'compact' ? TRUST_CELL_COMPACT : TRUST_CELL_CLASS;
  const glyph = variant === 'compact' ? TRUST_GLYPH_ROW_COMPACT : TRUST_GLYPH_ROW;
  const value = variant === 'compact' ? TRUST_VALUE_ROW_COMPACT : TRUST_VALUE_ROW;
  const caption = variant === 'compact' ? TRUST_CAPTION_COMPACT : TRUST_CAPTION_CLASS;

  return (
    <div className={`${shell} ${className}`.trim()}>
      <div
        className={`grid min-h-0 grid-cols-3 items-stretch divide-x [contain:paint] ${variant === 'compact' ? 'divide-black/[0.07]' : 'divide-black/8'}`}
        aria-label="Trust signals"
      >
        <div className={cell}>
          <span className={glyph} aria-hidden>
            🌟
          </span>
          <span className={value}>4.9</span>
          <span className={caption}>
            Google
            <br />
            Rating
          </span>
        </div>
        <div className={cell}>
          <span className={glyph} aria-hidden>
            💪
          </span>
          <span className={value}>10+</span>
          <span className={caption}>
            Years
            <br />
            Experience
          </span>
        </div>
        <div className={cell}>
          <span className={glyph} aria-hidden>
            ❤️
          </span>
          <span className={value}>600+</span>
          <span className={caption}>
            Students
            <br />
            Passed
          </span>
        </div>
      </div>
    </div>
  );
}
