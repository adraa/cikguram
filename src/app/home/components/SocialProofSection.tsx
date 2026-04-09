import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { value: '600+', label: 'Successful Drivers', icon: 'UserGroupIcon', color: 'text-[#CC0000]', bg: 'bg-[#CC0000]/8' },
  { value: '10+', label: 'Years Experience', icon: 'AcademicCapIcon', color: 'text-[#C9A020]', bg: 'bg-[#C9A020]/10' },
  { value: '98%', label: 'Pass Rate', icon: 'TrophyIcon', color: 'text-[#1A7A3C]', bg: 'bg-[#1A7A3C]/8' },
];

export default function SocialProofSection() {
  return (
    <section id="instructor" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats row — compact on mobile */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8 mb-12 sm:mb-16 reveal">
          {stats.map((stat) =>
            <div
              key={stat.label}
              className={`light-card rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 text-center transition-all duration-300 border-t-4 ${stat.color === 'text-[#CC0000]' ? 'border-t-[#CC0000]' : stat.color === 'text-[#C9A020]' ? 'border-t-[#C9A020]' : 'border-t-[#1A7A3C]'}`}>
              <Icon
                name={stat.icon as Parameters<typeof Icon>[0]['name']}
                size={20}
                variant="solid"
                className={`${stat.color} mx-auto mb-2`} />
              <div className={`font-display font-800 text-2xl sm:text-3xl md:text-4xl ${stat.color} mb-0.5`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-black/45 font-body leading-tight">{stat.label}</div>
            </div>
          )}
        </div>

        {/* Instructor profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Image side */}
          <div className="reveal-left relative">
            <div className="relative rounded-2xl overflow-hidden img-zoom-wrap border border-black/8 aspect-[4/3] shadow-card">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1e87b8662-1772196926946.png"
                alt="Professional male driving instructor in dark polo shirt, confident smile, neutral studio background with soft lighting"
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
                priority />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Name badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center gap-3 shadow-card border border-black/6">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0">
                    <Icon name="UserIcon" size={18} variant="solid" className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-700 text-[#111111] text-sm">Cikgu Ram</div>
                    <div className="text-xs text-black/45 font-body">Lead Instructor · JPJ Certified</div>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) =>
                      <Icon key={s} name="StarIcon" size={11} variant="solid" className="text-[#C9A020]" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="reveal-right">
            <span className="section-label">Meet Your Instructor</span>
            <h2 className="font-display font-700 text-2xl sm:text-3xl md:text-4xl text-[#111111] mt-2 mb-4 tracking-tight leading-tight">
              Learn with Cikgu Ram,<br />
              <span className="text-[#CC0000]">Drive Like a Pro.</span>
            </h2>
            <p className="text-black/65 font-body leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
              With over 10 years of experience training drivers across Malaysia, Cikgu Ram
              has developed a proven system that gets students through their JPJ test
              faster and with more confidence. His patient, structured teaching style
              has helped 600+ students earn their P-License.
            </p>

            {/* Credentials */}
            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {[
                'JPJ-certified driving instructor',
                'Specialist in both manual (D) and automatic (DA) license',
                'Structured curriculum aligned with latest KPP standards',
                'Personalised coaching for nervous first-time drivers',
              ].map((cred, i) =>
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1A7A3C]/12 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="CheckIcon" size={11} variant="solid" className="text-[#1A7A3C]" />
                  </div>
                  <span className="text-sm text-black/65 font-body">{cred}</span>
                </div>
              )}
            </div>

            {/* WhatsApp CTA — full width on mobile */}
            <a
              href="https://wa.me/601096388803?text=Hi%20Cikgu%20Ram%2C%20I%27m%20interested%20in%20getting%20my%20driving%20license."
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:inline-flex items-center justify-center sm:justify-start gap-2.5 px-6 py-3.5 rounded-xl bg-[#1A7A3C] hover:bg-[#22A050] transition-colors duration-300 text-white font-display font-700 text-sm shadow-sm w-full sm:w-auto">
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
              Chat with Cikgu Ram on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}