import React from 'react';
import Icon from '@/components/ui/AppIcon';

// Two hero features: the most differentiating claims of this school
const heroFeatures = [
  {
    icon: 'TruckIcon',
    title: 'Free Transport — Every Session',
    description: 'Pick-up and drop-off for every training session and JPJ test. No car, no problem. Just show up ready to learn.',
    stat: '100% free · included in every package',
    color: 'text-[#CC0000]',
    bg: 'bg-[#CC0000]/8',
    accent: 'border-t-[#CC0000]',
  },
  {
    icon: 'CheckBadgeIcon',
    title: 'JPJ Test Ready — Guaranteed',
    description: 'A full pre-test evaluation before you sit the real JPJ test. We only send you when you are ready to pass.',
    stat: '98% pass rate · first attempt',
    color: 'text-[#111111]',
    bg: 'bg-black/8',
    accent: 'border-t-[#111111]',
  },
];

// Four supporting features: complete the picture without competing for attention
const supportingFeatures = [
  {
    icon: 'AcademicCapIcon',
    title: 'Theory Training (KPP)',
    description: '6-hour KPP01 course covering Malaysian road laws, signs, and safety regulations.',
    color: 'text-[#CC0000]',
    bg: 'bg-[#CC0000]/8',
    accent: 'border-t-[#CC0000]',
  },
  {
    icon: 'MapIcon',
    title: 'Circuit & Road Training',
    description: 'KPP02 circuit and KPP03 real-road sessions covering parking, hill starts, and traffic.',
    color: 'text-[#111111]',
    bg: 'bg-black/6',
    accent: 'border-t-[#111111]',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Flexible Schedule',
    description: 'Weekday and weekend slots. We work around your school or work timetable.',
    color: 'text-[#7D6008]',
    bg: 'bg-[#C9A020]/10',
    accent: 'border-t-[#C9A020]',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'All Paperwork Handled',
    description: 'JPJ registration, LDL application, test booking — every form and fee managed for you.',
    color: 'text-[#CC0000]',
    bg: 'bg-[#CC0000]/8',
    accent: 'border-t-[#CC0000]',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="section-label">What You Get</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Everything You Need to Pass
          </h2>
          <p className="text-black/65 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            One package. Zero hassle. From registration to P-License in the shortest time possible.
          </p>
        </div>

        {/* Hero features — 2 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {heroFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal light-card rounded-2xl p-8 sm:p-9 border-t-4 ${feature.accent} delay-${i * 100 + 100} flex flex-col`}>

              {/* Icon */}
              <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-5 sm:mb-6`}
                style={{ width: '3.25rem', height: '3.25rem' }}>
                <Icon
                  name={feature.icon as Parameters<typeof Icon>[0]['name']}
                  size={26}
                  variant="solid"
                  className={feature.color}
                />
              </div>

              {/* Title + description */}
              <h3 className="font-display font-700 text-[#111111] text-xl sm:text-2xl mb-3 leading-tight tracking-tight">
                {feature.title}
              </h3>
              <p className="text-black/65 font-body text-sm sm:text-base leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* Stat — anchored to bottom */}
              <div className="mt-6 pt-5 border-t border-black/6 flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={14} variant="solid" className={feature.color} />
                <span className={`text-xs font-display font-700 ${feature.color} uppercase tracking-wide`}>
                  {feature.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting features — compact 2×2 grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {supportingFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal light-card rounded-2xl p-5 sm:p-6 border-t-2 ${feature.accent} delay-${i * 100 + 300}`}>

              <div className={`w-9 h-9 rounded-xl ${feature.bg} flex items-center justify-center mb-3.5`}>
                <Icon
                  name={feature.icon as Parameters<typeof Icon>[0]['name']}
                  size={18}
                  variant="solid"
                  className={feature.color}
                />
              </div>
              <h3 className="font-display font-700 text-[#111111] text-sm sm:text-base mb-2 leading-tight tracking-tight">
                {feature.title}
              </h3>
              <p className="text-black/60 font-body text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
