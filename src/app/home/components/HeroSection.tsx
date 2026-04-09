import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-white"
      aria-label="Hero section">

      {/* Decorative — desktop only */}
      <div className="absolute inset-0 grid-bg hidden sm:block" />
      <div className="beam-border-h" style={{ zIndex: 5 }} />

      {/* Full-width split container */}
      <div className="relative z-10 w-full min-h-[100svh] flex flex-col lg:flex-row">

        {/* ── LEFT: Text column ── */}
        <div className="flex-1 flex flex-col justify-center min-h-[calc(100svh-72px)] px-5 sm:px-8 lg:pl-14 xl:pl-20 lg:pr-10 pt-4 sm:pt-10 pb-6 sm:pb-8 lg:min-h-0 lg:py-0">

          {/* Badge */}
          <div className="reveal mb-3 sm:mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-[#C9A020] border border-black/20 text-[#111111] font-display font-500 tracking-[0.05em] uppercase"
              style={{ fontSize: 'clamp(9px, 2.5vw, 11px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45), 0 1px 4px rgba(0,0,0,0.10)' }}>
              <span className="traffic-dot shrink-0" style={{ width: 6, height: 6 }} />
              Get Your License in 1 Month &amp; 2 Weeks
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-black tracking-tight mb-4 sm:mb-5"
            style={{ opacity: 1 }}>
            <span
              className="block leading-[1.0] text-[#CC0000] italic uppercase whitespace-nowrap"
              style={{ fontSize: 'clamp(1.45rem, 7.2vw, 6rem)' }}>
              Guaranteed Fastest
            </span>
            <span
              className="block leading-[1.05] text-[#111111] uppercase"
              style={{ fontSize: 'clamp(1.05rem, 5.5vw, 3.8rem)' }}>
              Way To Get Your
            </span>
            <span
              className="block leading-[1.05] text-[#111111] uppercase"
              style={{ fontSize: 'clamp(1.05rem, 5.5vw, 3.8rem)' }}>
              Driving License.
            </span>
          </h1>

          {/* Mobile photo strip — between headline and CTA */}
          <div className="lg:hidden relative w-full h-[200px] min-[390px]:h-[210px] sm:h-[220px] rounded-2xl overflow-hidden mb-4 sm:mb-5 shadow-card">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1e87b8662-1772196926946.png"
              alt="Cikgu Ram, JPJ-certified driving instructor, Westport Driving Academy"
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-black/6">
                <div className="w-2 h-2 rounded-full bg-[#1A7A3C] shrink-0" />
                <span className="text-xs font-display font-700 text-[#111111]">
                  Cikgu Ram · JPJ Certified · 10+ Years
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="reveal delay-200 flex flex-col sm:flex-row gap-1.5 sm:gap-3 w-full">
            <a
              href="#register"
              className="btn-primary flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-base font-display font-700 w-full sm:w-auto">
              Claim RM299 Discount Now ↓
            </a>
            <a
              href="#process"
              className="flex items-center justify-center gap-1.5 text-sm font-display font-600 text-black/55 underline underline-offset-4 py-1.5 sm:py-3 w-full sm:w-auto">
              Meet Cikgu Ram ↓
            </a>
          </div>

          {/* Trust signals */}
          <div className="reveal delay-300 flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 sm:mt-6">
            {[
              { icon: 'CheckBadgeIcon', label: 'JPJ Certified' },
              { icon: 'TruckIcon', label: 'Free Transport' },
              { icon: 'UserGroupIcon', label: '600+ Passed' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <Icon
                  name={item.icon as Parameters<typeof Icon>[0]['name']}
                  size={16}
                  variant="solid"
                  className="text-[#CC0000] shrink-0"
                />
                <span className="text-xs text-black/65 font-display font-600 tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo column — desktop only ── */}
        <div className="hidden lg:block lg:w-[44%] xl:w-[46%] shrink-0 relative self-stretch">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1e87b8662-1772196926946.png"
            alt="Cikgu Ram, JPJ-certified driving instructor, Westport Driving Academy"
            fill
            className="object-cover object-top"
            sizes="46vw"
            priority
          />
          {/* Left-edge blend into white text area */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent" />
          {/* Bottom gradient for credential badge legibility */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Instructor credential badge */}
          <div className="absolute bottom-8 left-12 right-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-card border border-black/6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0">
                <Icon name="UserIcon" size={18} variant="solid" className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-700 text-[#111111] text-sm leading-tight">Cikgu Ram</div>
                <div className="text-xs text-black/50 font-body mt-0.5">Lead Instructor · JPJ Certified · 10+ Years</div>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icon key={s} name="StarIcon" size={11} variant="solid" className="text-[#C9A020]" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
