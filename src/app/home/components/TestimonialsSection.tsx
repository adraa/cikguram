'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { GOOGLE_REVIEWS_STATIC } from '@/data/google-reviews-static';
import { GOOGLE_BUSINESS_MAPS_URL } from '@/lib/site-urls';
import type { DisplayReview } from '@/types/display-review';

/** iOS-style neutral avatar (accentColor ignored — visual consistency). */
const AVATAR_NEUTRAL =
  'bg-gradient-to-b from-[#E5E5EA] to-[#D1D1D6] text-[#3A3A3C] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]';

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function ReviewerAvatar({ t, ariaHidden }: { t: DisplayReview; ariaHidden?: boolean }) {
  if (t.avatar?.trim()) {
    return (
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-black/[0.06]">
        <AppImage
          src={t.avatar}
          alt={ariaHidden ? '' : t.avatarAlt}
          width={48}
          height={48}
          sizes="48px"
          quality={72}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-semibold tracking-[-0.03em] ${AVATAR_NEUTRAL}`}
      aria-hidden={ariaHidden || undefined}>
      {initialsFromName(t.name)}
    </div>
  );
}

function reviewNeedsToggle(text: string) {
  return text.length > 160 || text.includes('\n');
}

function ReviewCard({
  t,
  ariaHidden,
  expanded: expandedProp,
  onExpandedChange,
}: {
  t: DisplayReview;
  ariaHidden?: boolean;
  /** When `onExpandedChange` is set, expanded is controlled (shared across marquee duplicates). */
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}) {
  const [expandedLocal, setExpandedLocal] = useState(false);
  const controlled = onExpandedChange !== undefined;
  const expanded = controlled ? !!expandedProp : expandedLocal;
  const setExpanded = (next: boolean) => {
    if (controlled) onExpandedChange(next);
    else setExpandedLocal(next);
  };
  const showToggle = reviewNeedsToggle(t.text);

  return (
    <article
      aria-hidden={ariaHidden || undefined}
      className={`flex h-full min-h-[292px] w-[min(82vw,300px)] shrink-0 flex-col rounded-[1.25rem] bg-white px-5 pb-5 pt-5 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.04] sm:min-h-[304px] sm:w-[280px] sm:px-6 sm:pb-6 sm:pt-6 lg:w-[300px]`}>
      <div className="flex gap-3">
        <ReviewerAvatar t={t} ariaHidden={ariaHidden} />
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="font-display text-[15px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#1d1d1f]">{t.name}</p>
          <p className="mt-1 font-body text-[13px] leading-snug tracking-[-0.01em] text-[#86868b]">
            {t.duration}
            <span className="text-[#C7C7CC]"> · </span>
            {t.location}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-0.5">
        {Array.from({ length: t.rating }).map((_, si) => (
          <Icon key={si} name="StarIcon" size={12} variant="solid" className="text-[#FF9500]" />
        ))}
      </div>

      <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" aria-hidden />

      <div className="flex min-h-0 flex-1 flex-col">
        <blockquote
          className={`font-body text-[15px] font-normal leading-[1.5] tracking-[-0.015em] text-[#1d1d1f] antialiased [font-feature-settings:'kern'_1] whitespace-pre-line sm:text-[16px] sm:leading-[1.5] ${
            showToggle && !expanded
              ? 'line-clamp-4 max-h-[7.25rem] overflow-hidden sm:line-clamp-5 sm:max-h-[9rem]'
              : ''
          }`}>
          {t.text}
        </blockquote>

        {showToggle && (
          <button
            type="button"
            tabIndex={ariaHidden ? -1 : undefined}
            aria-expanded={expanded}
            aria-label={expanded ? 'Show less of this review' : 'Read full review'}
            onClick={() => setExpanded(!expanded)}
            className="group mt-4 flex min-h-[44px] w-fit items-center gap-1 self-start font-display text-[15px] font-semibold tracking-[-0.01em] text-[#007AFF] transition-opacity hover:opacity-80 active:opacity-60">
            <span>{expanded ? 'Show less' : 'Read more'}</span>
            <Icon
              name="ChevronDownIcon"
              size={16}
              variant="solid"
              className={`text-[#007AFF] transition-transform duration-200 ${expanded ? '-rotate-180' : ''}`}
            />
          </button>
        )}
      </div>
    </article>
  );
}

/** Sets --marquee-w = first segment width + flex gap so the CSS loop stays pixel-seamless. */
function TestimonialsMarqueeTrack({ items }: { items: DisplayReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const seg1Ref = useRef<HTMLDivElement>(null);
  const [expandedById, setExpandedById] = useState<Record<string, boolean>>({});

  useLayoutEffect(() => {
    const track = trackRef.current;
    const seg1 = seg1Ref.current;
    const sync = () => {
      if (!track || !seg1) return;
      const g = parseFloat(getComputedStyle(track).gap || '0') || 20;
      track.style.setProperty('--marquee-w', `${seg1.offsetWidth + g}px`);
    };
    sync();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(sync) : null;
    if (seg1) ro?.observe(seg1);
    if (track) ro?.observe(track);
    window.addEventListener('resize', sync);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [items]);

  return (
    <div ref={trackRef} className="testimonials-marquee-track flex flex-nowrap gap-6">
      <div ref={seg1Ref} className="flex shrink-0 gap-6">
        {items.map((t) => (
          <ReviewCard
            key={`m-a-${t.id}`}
            t={t}
            expanded={!!expandedById[t.id]}
            onExpandedChange={(next) => setExpandedById((p) => ({ ...p, [t.id]: next }))}
          />
        ))}
      </div>
      <div className="flex shrink-0 gap-6" aria-hidden="true">
        {items.map((t) => (
          <ReviewCard
            key={`m-b-${t.id}`}
            t={t}
            ariaHidden
            expanded={!!expandedById[t.id]}
            onExpandedChange={(next) => setExpandedById((p) => ({ ...p, [t.id]: next }))}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const items = GOOGLE_REVIEWS_STATIC;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-black/[0.06] bg-[#F5F5F7] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F5F5F7] to-[#EBEBED]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-15%,rgba(255,255,255,0.95)_0%,transparent_55%)]" />
        <div className="absolute -top-32 left-1/2 h-[min(80vw,520px)] w-[min(100vw,900px)] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.07)_0%,rgba(204,0,0,0.02)_40%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[min(60vw,420px)] w-[min(72vw,480px)] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(26,122,60,0.05)_0%,transparent_68%)] blur-3xl" />
        <div className="absolute top-[35%] -left-[18%] h-[min(50vw,320px)] w-[min(55vw,360px)] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(201,160,32,0.04)_0%,transparent_72%)] blur-3xl" />
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1.5px)] opacity-[0.35]" />
        <div className="absolute inset-0 bg-[length:20px_20px] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025)_0.5px,transparent_1px)] opacity-[0.4]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal mb-14 text-center sm:mb-20">
          <h2 className="mb-4 font-display text-3xl font-800 leading-[1.05] tracking-[-0.02em] text-[#111111] sm:text-4xl md:text-[2.75rem]">
            <span className="block sm:inline">Why Do We Prefer</span>{' '}
            <span className="block text-black/85 sm:inline">CIKGU RAM 🇲🇾</span>
          </h2>
          <p className="mx-auto max-w-md font-body text-base leading-relaxed text-black/45 sm:text-lg">
            Here&apos;s what our champions had to say.
          </p>
          <a
            href={GOOGLE_BUSINESS_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-5 font-display text-sm font-700 text-[#111111] shadow-sm transition-colors hover:border-black/15 hover:bg-black/[0.02]">
            <span>See reviews on Google</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" className="text-black/50" aria-hidden />
          </a>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden max-w-7xl motion-reduce:block">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((t) => (
            <div key={t.id} className="snap-center snap-always">
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 block motion-reduce:hidden">
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-12 bg-gradient-to-r from-[#F5F5F7] via-[#F5F5F7]/95 to-transparent sm:w-20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-12 bg-gradient-to-l from-[#F5F5F7] via-[#F5F5F7]/95 to-transparent sm:w-20"
            aria-hidden="true"
          />
          <TestimonialsMarqueeTrack items={items} />
        </div>
      </div>
    </section>
  );
}
