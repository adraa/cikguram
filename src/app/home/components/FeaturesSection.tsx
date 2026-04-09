import React from 'react';
import Icon from '@/components/ui/AppIcon';

const features = [
  {
    icon: 'AcademicCapIcon',
    title: 'Theory Training (KPP)',
    description: '6-hour KPP01 course covering Malaysian road laws, signs, and safety regulations. Fully guided by experienced instructors.',
    color: 'text-[#CC0000]',
    bg: 'bg-[#CC0000]/8',
    accent: 'border-t-[#CC0000]',
  },
  {
    icon: 'MapIcon',
    title: 'Circuit & Road Training',
    description: 'Hands-on KPP02 circuit training and KPP03 real-road sessions. Master parking, hill starts, and traffic navigation.',
    color: 'text-[#111111]',
    bg: 'bg-black/6',
    accent: 'border-t-[#111111]',
  },
  {
    icon: 'CheckBadgeIcon',
    title: 'JPJ Test Ready',
    description: 'Pre-test evaluation ensures you are fully prepared. Our 98% pass rate speaks for itself — we only send you when you are ready.',
    color: 'text-[#1A7A3C]',
    bg: 'bg-[#1A7A3C]/8',
    accent: 'border-t-[#1A7A3C]',
  },
  {
    icon: 'CalendarDaysIcon',
    title: 'Flexible Schedule',
    description: 'Weekday and weekend slots available. We work around your school or work schedule so you can get licensed without disruption.',
    color: 'text-[#B8900A]',
    bg: 'bg-[#E8B800]/10',
    accent: 'border-t-[#E8B800]',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'All Paperwork Handled',
    description: 'JPJ registration, LDL application, test booking — we handle every form and fee so you can focus on learning to drive.',
    color: 'text-[#CC0000]',
    bg: 'bg-[#CC0000]/8',
    accent: 'border-t-[#CC0000]',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'WhatsApp Support',
    description: 'Direct line to Cikgu Ram and the team throughout your journey. Questions answered fast, progress updates always available.',
    color: 'text-[#1A7A3C]',
    bg: 'bg-[#1A7A3C]/8',
    accent: 'border-t-[#1A7A3C]',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <span className="section-label">What You Get</span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Everything You Need to Pass
          </h2>
          <p className="text-black/65 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            One package. Zero hassle. From registration to P-License in the shortest time possible.
          </p>
        </div>

        {/* Features grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`reveal light-card rounded-2xl p-6 sm:p-7 transition-all duration-300 group border-t-4 ${feature.accent} delay-${(i % 3) * 100 + 100}`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 sm:mb-5`}>
                <Icon
                  name={feature.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  variant="solid"
                  className={feature.color}
                />
              </div>
              <h3 className="font-display font-800 text-[#111111] text-base sm:text-lg mb-2.5 leading-tight tracking-tight">
                {feature.title}
              </h3>
              <p className="text-black/65 font-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}