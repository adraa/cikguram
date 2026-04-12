import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function SocialProofSection() {
  return (
    <section id="instructor" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Instructor profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
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
              {/* Gradient overlay: keeps credential card readable on photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              {/* Trust module: compact chip, intrinsic width, centred (not full-bleed) */}
              <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 flex justify-center px-4 sm:bottom-5 sm:px-5">
                <div className="pointer-events-auto inline-flex max-w-[min(100%,21rem)] items-center gap-3 rounded-2xl border border-black/[0.08] bg-[#F8F7F5]/95 px-3.5 py-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.07)] backdrop-blur-sm sm:gap-3 sm:px-4 sm:py-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CC0000]">
                    <Icon name="UserIcon" size={17} variant="solid" className="text-white" />
                  </div>
                  <div className="min-w-0 text-left">
                    <span className="block font-space text-[13px] font-700 italic leading-none tracking-[-0.02em] text-[#CC0000] sm:text-[14px]">
                      CIKGU RAM 🇲🇾
                    </span>
                    <p className="mt-1 text-balance text-[11px] font-body leading-[1.35] text-[#444444] sm:text-[11px]">
                      Licensed Driving School Instructor
                      <br />
                      Westport Driving Academy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="reveal-right max-lg:pt-6">
            <h2 className="font-display mb-6 tracking-tight">
              <span className="block text-[17px] sm:text-[18px] text-[#111111] font-normal leading-snug mb-1.5">
                Learn with Cikgu Ram.
              </span>
              <span className="block text-[28px] sm:text-[30px] font-700 text-[#CC0000] leading-[1.15]">
                Drive with Confidence.
              </span>
            </h2>
            <p className="text-[15px] text-[#444444] font-body leading-[1.6] mb-5">
              Most people delay because they're scared of failing the JPJ test. Cikgu Ram's students don't have that problem.
            </p>
            <p className="text-[13px] sm:text-[13px] text-[#444444] font-body leading-[1.6] mb-8">
              With over a decade of experience at <strong className="text-[#111111] font-semibold">Westport Driving Academy</strong>, Cikgu Ram has mastered a teaching system that helps students pass their JPJ tests faster and with less stress. Based in Bukit Rotan, his patient and structured approach has successfully guided over 600+ students to their P-License.
            </p>

            {/* Benefits: scannable list */}
            <div className="space-y-3 mb-10">
              {[
                'Licensed & JPJ-Certified Expert',
                'Manual & Automatic Specialist',
                'Latest & Modern Curriculum',
                'Nervous-Driver Friendly',
              ].map((cred, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon
                    name="CheckIcon"
                    size={18}
                    variant="solid"
                    className="text-[#1A7A3C] shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-[15px] font-medium text-[#444444] font-body leading-relaxed">{cred}</span>
                </div>
              ))}
            </div>

            {/* CTA: centred when stacked (below lg); left-aligned in desktop two-column row */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#register"
                className="btn-primary inline-flex items-center justify-center min-w-[220px] px-10 py-4 rounded-2xl text-base font-display font-700 tracking-[0.5px]">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}