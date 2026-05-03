import React from 'react';
import { FAQ_WARM_OUTLINE } from '@/lib/faq-warm-outline';

/** Outer chrome: gold hairline + soft lift (same as FAQ chips tray / pricing inset in `StillHaveQuestionsSection`). */
const TRUST_STATS_SHELL = `${FAQ_WARM_OUTLINE} bg-white`;

/** Trust strip: generous vertical rhythm + min height so each column feels tappable on phones. */
const TRUST_CELL_CLASS =
  'flex min-h-[5rem] flex-1 flex-col items-center justify-center gap-0.5 px-1.5 py-2.5 sm:min-h-0 sm:gap-0.5 sm:px-2 sm:py-2.5';

const TRUST_GLYPH_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center text-[13px] leading-none sm:h-[1.375rem] sm:text-[14px]';

const TRUST_VALUE_ROW =
  'flex h-5 w-full shrink-0 items-center justify-center font-display text-[15px] font-black tabular-nums leading-none tracking-[-0.02em] text-[#111111] sm:h-[1.375rem] sm:text-[16px]';

const TRUST_CAPTION_CLASS =
  'flex min-h-[1.875rem] w-full max-w-[6.25rem] flex-col items-center justify-center text-pretty text-center font-display text-[10px] font-semibold uppercase leading-[1.18] tracking-[0.06em] text-black/45 sm:min-h-[2rem] sm:max-w-[6rem] sm:text-[9px] sm:leading-[1.15] sm:tracking-[0.08em]';

/**
 * Three-column trust bar (Google / years / students): shared by FAQ, pricing, and track-record.
 */
export default function TrustStatsGrid() {
  return (
    <div className={TRUST_STATS_SHELL}>
      <div
        className="grid min-h-0 grid-cols-3 divide-x divide-black/8 items-stretch [contain:paint]"
        aria-label="Trust signals"
      >
        <div className={TRUST_CELL_CLASS}>
          <span className={TRUST_GLYPH_ROW} aria-hidden>
            🌟
          </span>
          <span className={TRUST_VALUE_ROW}>4.9</span>
          <span className={TRUST_CAPTION_CLASS}>
            Google
            <br />
            Rating
          </span>
        </div>
        <div className={TRUST_CELL_CLASS}>
          <span className={TRUST_GLYPH_ROW} aria-hidden>
            💪
          </span>
          <span className={TRUST_VALUE_ROW}>10+</span>
          <span className={TRUST_CAPTION_CLASS}>
            Years
            <br />
            Experience
          </span>
        </div>
        <div className={TRUST_CELL_CLASS}>
          <span className={TRUST_GLYPH_ROW} aria-hidden>
            ❤️
          </span>
          <span className={TRUST_VALUE_ROW}>600+</span>
          <span className={TRUST_CAPTION_CLASS}>
            Students
            <br />
            Passed
          </span>
        </div>
      </div>
    </div>
  );
}
