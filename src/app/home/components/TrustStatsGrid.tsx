import React from 'react';

/** Pricing / FAQ: thin ink outline + soft lift — reads as a contained card. */
const TRUST_STATS_SHELL =
  'overflow-hidden rounded-2xl border border-solid border-black/[0.12] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)]';

/** Hero mobile: same content as pricing, visually de‑emphasised so it is not mistaken for a CTA. */
const TRUST_STATS_SHELL_SUPPORTING =
  'max-md:pointer-events-none max-md:cursor-default max-md:rounded-lg max-md:border-black/[0.06] max-md:bg-white/72 max-md:shadow-none max-md:[box-shadow:inset_0_0_0_1px_rgba(0,0,0,0.05)]';

/** Trust strip: generous vertical rhythm + min height so each column feels tappable on phones. */
const TRUST_CELL_CLASS =
  'flex min-h-[5rem] flex-1 flex-col items-center justify-center gap-0.5 px-1.5 py-2.5 sm:min-h-0 sm:gap-0.5 sm:px-2 sm:py-2.5';

const TRUST_CELL_SUPPORTING =
  'max-md:min-h-0 max-md:gap-0 max-md:px-1 max-md:py-1.5 max-md:justify-center';

const TRUST_GLYPH_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center text-[13px] leading-none sm:h-[1.375rem] sm:text-[14px]';

const TRUST_GLYPH_SUPPORTING = 'max-md:h-3.5 max-md:text-[10px]';

const TRUST_VALUE_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center font-display text-[15px] font-black tabular-nums leading-none tracking-[-0.02em] text-[#111111] sm:h-[1.375rem] sm:text-[16px]';

const TRUST_VALUE_SUPPORTING =
  'max-md:h-4 max-md:text-[13px] max-md:font-bold max-md:tracking-tight max-md:text-black/80';

const TRUST_CAPTION_CLASS =
  'flex min-h-[1.875rem] w-full max-w-[6.25rem] flex-col items-center justify-center text-pretty text-center font-display text-[10px] font-semibold uppercase leading-[1.18] tracking-[0.06em] text-black/45 sm:min-h-[2rem] sm:max-w-[6rem] sm:text-[9px] sm:leading-[1.15] sm:tracking-[0.08em]';

const TRUST_CAPTION_SUPPORTING =
  'max-md:min-h-0 max-md:max-w-[5.25rem] max-md:text-[10px] max-md:font-medium max-md:leading-tight max-md:tracking-[0.04em] max-md:text-black/40';

const TRUST_GRID_DIVIDE_SUPPORTING = 'max-md:divide-black/[0.05]';

type TrustStatsGridProps = {
  className?: string;
  /**
   * `supporting` — hero on small screens: flatter, smaller, non-interactive so users do not treat it as the primary CTA.
   * `default` — pricing / stats bar (unchanged).
   */
  presentation?: 'default' | 'supporting';
};

/**
 * Three-column trust bar (Google / years / students): shared by hero, pricing, and track-record.
 */
export default function TrustStatsGrid({
  className = '',
  presentation = 'default',
}: TrustStatsGridProps) {
  const supporting = presentation === 'supporting';

  const shell = supporting
    ? `${TRUST_STATS_SHELL} ${TRUST_STATS_SHELL_SUPPORTING}`.trim()
    : TRUST_STATS_SHELL;

  const cell = supporting ? `${TRUST_CELL_CLASS} ${TRUST_CELL_SUPPORTING}` : TRUST_CELL_CLASS;
  const glyph = supporting ? `${TRUST_GLYPH_ROW} ${TRUST_GLYPH_SUPPORTING}` : TRUST_GLYPH_ROW;
  const value = supporting ? `${TRUST_VALUE_ROW} ${TRUST_VALUE_SUPPORTING}` : TRUST_VALUE_ROW;
  const caption = supporting
    ? `${TRUST_CAPTION_CLASS} ${TRUST_CAPTION_SUPPORTING}`
    : TRUST_CAPTION_CLASS;

  const gridDivide = supporting
    ? `grid min-h-0 grid-cols-3 items-stretch divide-x divide-black/8 [contain:paint] ${TRUST_GRID_DIVIDE_SUPPORTING}`
    : 'grid min-h-0 grid-cols-3 items-stretch divide-x divide-black/8 [contain:paint]';

  return (
    <div className={`${shell} ${className}`.trim()}>
      <div className={gridDivide} aria-label="Trust signals">
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
