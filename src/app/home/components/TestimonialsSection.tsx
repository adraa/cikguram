'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

type StudentReview = {
  name: string;
  location: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
  text: string;
  license: string;
  duration: string;
  accentColor: string;
};

const testimonials: StudentReview[] = [
  {
    name: 'Nurul Ain Binti Razak',
    location: 'Klang, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png',
    avatarAlt: 'Young Malaysian woman with hijab, friendly smile, bright background',
    rating: 5,
    text: "I was so nervous about driving but Cikgu Ram made everything so easy to understand. Passed my JPJ test on the first try! The free transport was a lifesaver since I don't have a car yet.",
    license: 'D License (Manual)',
    duration: 'Completed in 6 weeks',
    accentColor: 'border-t-[#CC0000]',
  },
  {
    name: 'Vikram Subramaniam',
    location: 'Shah Alam, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png',
    avatarAlt: 'Young Malaysian Indian man, casual shirt, neutral background, confident expression',
    rating: 5,
    text: 'Best decision I made was registering online and saving RM299. The whole process was smooth from start to finish. Cikgu Ram is very patient and explains everything clearly. Highly recommend!',
    license: 'DA License (Auto)',
    duration: 'Completed in 5 weeks',
    accentColor: 'border-t-[#1A7A3C]',
  },
  {
    name: 'Lim Wei Xian',
    location: 'Petaling Jaya, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png',
    avatarAlt: 'Young Malaysian Chinese man, light shirt, outdoor setting, natural smile',
    rating: 5,
    text: 'As a working adult with a busy schedule, I appreciated the flexible timing. Cikgu Ram worked around my work hours. Got my license in under 2 months. The RM2,349 package covers absolutely everything.',
    license: 'D License (Manual)',
    duration: 'Completed in 7 weeks',
    accentColor: 'border-t-[#C9A020]',
  },
  {
    name: 'Siti Aminah Binti Hassan',
    location: 'Bangi, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png',
    avatarAlt: 'Smiling Malaysian woman in casual attire, outdoor portrait',
    rating: 5,
    text: 'Clear instructions every lesson and zero hidden fees. I felt ready before every JPJ attempt and passed without the stress I expected.',
    license: 'D License (Manual)',
    duration: 'Completed in 5 weeks',
    accentColor: 'border-t-[#1A7A3C]',
  },
  {
    name: 'Arjun Kumar',
    location: 'Kajang, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png',
    avatarAlt: 'Young man in polo shirt, confident relaxed pose',
    rating: 5,
    text: 'Theory and practical both well organised. Pick-up on time every session. Worth every ringgit compared to friends who bounced between instructors.',
    license: 'DA License (Auto)',
    duration: 'Completed in 6 weeks',
    accentColor: 'border-t-[#C9A020]',
  },
  {
    name: 'Chen Jia Hui',
    location: 'Subang Jaya, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png',
    avatarAlt: 'Young professional smiling at camera',
    rating: 5,
    text: 'Circuit parking used to terrify me; we drilled it until it felt automatic. On test day I was calm and passed first time.',
    license: 'D License (Manual)',
    duration: 'Completed in 8 weeks',
    accentColor: 'border-t-[#CC0000]',
  },
  {
    name: 'Farhana Rashid',
    location: 'Seri Kembangan, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png',
    avatarAlt: 'Woman with friendly expression, neutral studio background',
    rating: 5,
    text: 'Patient teaching style and honest feedback after each lesson. I knew exactly what to improve before the next session.',
    license: 'DA License (Auto)',
    duration: 'Completed in 4 weeks',
    accentColor: 'border-t-[#CC0000]',
  },
  {
    name: 'David Ong',
    location: 'Cheras, Kuala Lumpur',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png',
    avatarAlt: 'Man in light shirt, natural smile',
    rating: 5,
    text: 'Night classes after work were a game changer. Communication on WhatsApp was fast whenever I had questions about JPJ paperwork.',
    license: 'D License (Manual)',
    duration: 'Completed in 9 weeks',
    accentColor: 'border-t-[#1A7A3C]',
  },
  {
    name: 'Aisyah Rahman',
    location: 'Cyberjaya, Selangor',
    avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png',
    avatarAlt: 'Young woman smiling, bright indoor setting',
    rating: 5,
    text: 'From registration to holding my P license, one trusted team. My parents appreciated the professionalism and safety focus on the road sessions.',
    license: 'D License (Manual)',
    duration: 'Completed in 6 weeks',
    accentColor: 'border-t-[#C9A020]',
  },
];

function ReviewCard({ t, ariaHidden }: { t: StudentReview; ariaHidden?: boolean }) {
  return (
    <article
      aria-hidden={ariaHidden}
      className={`flex shrink-0 flex-col rounded-3xl border border-black/[0.06] border-t-4 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03] sm:p-7 ${t.accentColor} w-[min(82vw,300px)] sm:w-[280px] lg:w-[300px] min-h-[min(72vw,320px)] sm:min-h-[300px]`}>
      <div className="mb-4 flex items-center gap-1 sm:mb-5">
        {Array.from({ length: t.rating }).map((_, si) => (
          <Icon key={si} name="StarIcon" size={14} variant="solid" className="text-[#C9A020]" />
        ))}
      </div>

      <blockquote className="mb-5 flex-1 font-body text-base leading-[1.65] text-black/55 sm:mb-6">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-600 text-primary">
          {t.license}
        </span>
        <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 font-body text-xs text-black/50">
          {t.duration}
        </span>
      </div>

      <div className="flex min-h-[44px] items-center gap-3 border-t border-black/[0.06] pt-5">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-black/[0.06]">
          <AppImage
            src={t.avatar}
            alt={ariaHidden ? '' : t.avatarAlt}
            width={40}
            height={40}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm font-700 tracking-tight text-[#111111]">{t.name}</div>
          <div className="mt-0.5 font-body text-xs tracking-wide text-black/45">{t.location}</div>
        </div>
        <div className="shrink-0">
          <Icon name="CheckBadgeIcon" size={16} variant="solid" className="text-[#1A7A3C]" />
        </div>
      </div>
    </article>
  );
}

/** Sets --marquee-w = first segment width + flex gap so the CSS loop stays pixel-seamless. */
function TestimonialsMarqueeTrack({ items }: { items: StudentReview[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const seg1Ref = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div ref={trackRef} className="testimonials-marquee-track flex flex-nowrap gap-5">
      <div ref={seg1Ref} className="flex shrink-0 gap-5">
        {items.map((t, i) => (
          <ReviewCard key={`m-a-${i}`} t={t} />
        ))}
      </div>
      <div className="flex shrink-0 gap-5" aria-hidden="true">
        {items.map((t, i) => (
          <ReviewCard key={`m-b-${i}`} t={t} ariaHidden />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-black/[0.06] bg-[#F5F5F7] py-24 sm:py-32">
      {/* Light “studio” field: soft bloom, whisper of brand colour, micro-grid */}
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
        </div>
      </div>

      {/* Reduced motion: single row, horizontal scroll, no duplicate content */}
      <div className="relative z-10 mx-auto hidden max-w-7xl motion-reduce:block">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <div key={t.name} className="snap-center snap-always">
              <ReviewCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee: full-bleed row, linear infinite, no hover pause */}
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
          <TestimonialsMarqueeTrack items={testimonials} />
        </div>
      </div>
    </section>
  );
}
