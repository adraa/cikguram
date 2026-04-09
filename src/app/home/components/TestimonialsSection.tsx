import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
  {
    name: 'Nurul Ain Binti Razak',
    location: 'Klang, Selangor',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png",
    avatarAlt: 'Young Malaysian woman with hijab, friendly smile, bright background',
    rating: 5,
    text: 'I was so nervous about driving but Cikgu Ram made everything so easy to understand. Passed my JPJ test on the first try! The free transport was a lifesaver since I don\'t have a car yet.',
    license: 'D License (Manual)',
    duration: 'Completed in 6 weeks',
    accentColor: 'border-t-[#CC0000]',
  },
  {
    name: 'Vikram Subramaniam',
    location: 'Shah Alam, Selangor',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png",
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
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png",
    avatarAlt: 'Young Malaysian Chinese man, light shirt, outdoor setting, natural smile',
    rating: 5,
    text: 'As a working adult with a busy schedule, I appreciated the flexible timing. Cikgu Ram worked around my work hours. Got my license in under 2 months. The RM2,349 package covers absolutely everything.',
    license: 'D License (Manual)',
    duration: 'Completed in 7 weeks',
    accentColor: 'border-t-[#C9A020]',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      {/* Subtle dark grid texture */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Accent glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#CC0000]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats strip — top of dark section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x sm:divide-white/10 mb-16 sm:mb-20 reveal">
          {[
            { value: '600+', label: 'Students Passed', color: 'text-[#CC0000]' },
            { value: '98%', label: 'Pass Rate', color: 'text-[#C9A020]' },
            { value: '5★', label: 'Avg Rating', color: 'text-[#C9A020]' },
            { value: '10+', label: 'Years Teaching', color: 'text-[#1A7A3C]' },
          ]?.map((stat) =>
            <div key={stat?.label} className="text-center py-5 sm:py-8">
              <div className={`font-display font-800 text-3xl sm:text-5xl tracking-tight ${stat?.color}`}>{stat?.value}</div>
              <div className="text-xs sm:text-sm text-white/55 font-body font-500 mt-2 whitespace-nowrap tracking-wide">{stat?.label}</div>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-display font-700 uppercase tracking-[0.18em] text-white/70 border border-white/10 rounded-full px-4 py-1.5 mb-5">
            Student Reviews
          </span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4 tracking-tight leading-[1.1]">
            What Our Students Say
          </h2>
          <p className="text-white/55 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            600+ successful drivers can&apos;t be wrong. Here&apos;s what some of them had to say.
          </p>
        </div>

        {/* Testimonials — single column on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials?.map((t, i) =>
            <div
              key={t?.name}
              className={`reveal delay-${i * 100 + 100} flex flex-col rounded-2xl p-7 sm:p-8 border-t-4 ${t?.accentColor} bg-white/5 border border-white/8 backdrop-blur-sm`}>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 sm:mb-5">
                {Array.from({ length: t?.rating })?.map((_, si) =>
                  <Icon key={si} name="StarIcon" size={14} variant="solid" className="text-[#C9A020]" />
                )}
              </div>

              {/* Quote */}
              <blockquote className="text-white/65 font-body text-sm leading-[1.7] flex-1 mb-5 sm:mb-6">
                &ldquo;{t?.text}&rdquo;
              </blockquote>

              {/* License badge */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                <span className="px-2.5 py-1 rounded bg-[#CC0000]/20 border border-[#CC0000]/30 text-xs font-display font-600 text-[#CC0000]">
                  {t?.license}
                </span>
                <span className="px-2.5 py-1 rounded bg-white/8 border border-white/10 text-xs font-body text-white/55">
                  {t?.duration}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <AppImage
                    src={t?.avatar}
                    alt={t?.avatarAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    loading="lazy" />
                </div>
                <div>
                  <div className="font-display font-700 text-white text-sm tracking-tight">{t?.name}</div>
                  <div className="text-xs text-white/60 font-body mt-0.5 tracking-wide">{t?.location}</div>
                </div>
                <div className="ml-auto">
                  <Icon name="CheckBadgeIcon" size={16} variant="solid" className="text-[#1A7A3C]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
