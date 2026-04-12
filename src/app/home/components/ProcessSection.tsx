'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type MilestoneBadge = 'L-LICENSE' | 'P-LICENSE';

interface ProcessStep {
  id: number;
  /** Grey category pill (uppercase) */
  category: string;
  title: string;
  /** One line when collapsed: keep plain language */
  summary: string;
  description: string;
  duration: string;
  details: string[];
  /** Metro red milestone only where it adds new info */
  milestone: MilestoneBadge | null;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    category: 'REGISTRATION',
    title: 'Register with Cikgu Ram',
    summary: 'IC, photo, and JPJ paperwork: we register you with JPJ.',
    description:
      'Sign up online or via WhatsApp. Submit your IC copy and passport photo. We handle JPJ registration on your behalf.',
    duration: '1 Day',
    details: ['IC copy required', 'Passport photo (2 copies)', 'Online registration saves RM299', 'Immediate confirmation'],
    milestone: null,
  },
  {
    id: 2,
    category: 'THEORY',
    title: 'KPP01 Theory Course (6 Hours)',
    summary: 'Six hours covering Malaysian road laws, signs, and safe driving.',
    description:
      'Attend the mandatory 6-hour road safety and traffic law course. Available on weekdays and weekends.',
    duration: '1 Day',
    details: ['6-hour classroom session', 'Road signs & traffic laws', 'Safety regulations', 'Certificate issued upon completion'],
    milestone: null,
  },
  {
    id: 3,
    category: 'THEORY TEST',
    title: 'Computerised Theory Test (Undang)',
    summary: 'JPJ computer test: practice materials included; LDL when you pass.',
    description:
      'Sit the JPJ computerised theory test. Cikgu Ram provides practice materials to ensure you pass on the first attempt.',
    duration: '1–3 Days',
    details: ['50 multiple-choice questions', 'Pass mark: 42/50', 'Practice tests provided', 'LDL issued upon passing'],
    milestone: 'L-LICENSE',
  },
  {
    id: 4,
    category: 'CIRCUIT',
    title: 'KPP02 Practical Circuit Training',
    summary: 'Hill start, parking, and S/Z course on the JPJ circuit.',
    description:
      'Learn controlled driving skills on the JPJ circuit: hill start, 3-point turn, parking, and S/Z course navigation.',
    duration: '3–5 Sessions',
    details: ['Hill start mastery', '3-point turn', 'Side & parallel parking', 'S-course & Z-course'],
    milestone: null,
  },
  {
    id: 5,
    category: 'ROAD',
    title: 'KPP03 On-Road Practical Training',
    summary: 'Real traffic: junctions, roundabouts, and highway time with Cikgu Ram.',
    description:
      'Real-road driving sessions with Cikgu Ram. Navigate Malaysian traffic, junctions, roundabouts, and expressways.',
    duration: '6–8 Sessions',
    details: ['Real traffic conditions', 'Junctions & roundabouts', 'Highway driving', 'Night driving (if required)'],
    milestone: null,
  },
  {
    id: 6,
    category: 'PRE-TEST',
    title: 'Pre-Test Evaluation',
    summary: 'Full mock circuit and road test: clear feedback before JPJ.',
    description:
      'Full mock JPJ test conducted by Cikgu Ram. Identifies weak areas and ensures you are 100% ready before the real test.',
    duration: '1 Session',
    details: ['Full mock circuit test', 'Mock road test', 'Detailed feedback', 'Only proceed when ready'],
    milestone: null,
  },
  {
    id: 7,
    category: 'JPJ TEST',
    title: 'JPJ Practical Test (Circuit + Road)',
    summary: 'Official JPJ test: circuit first, then road; results same day.',
    description:
      "The official JPJ driving test. With Cikgu Ram's preparation, our students achieve a 98% pass rate.",
    duration: '1 Day',
    details: ['Circuit test first', 'Road test (if circuit passed)', 'Results same day', '98% pass rate'],
    milestone: null,
  },
  {
    id: 8,
    category: 'PROBATION',
    title: 'Receive Your Probationary License (Lesen P)',
    summary: 'Collect Lesen P: 2-year probation and 90 km/h limit until full license.',
    description:
      'Congratulations! Collect your P-License and hit the road. 2-year probationary period before upgrading to full license.',
    duration: '1–2 Weeks',
    details: ['P-License issued by JPJ', '2-year probationary period', 'Speed limit: 90 km/h', 'Upgrade to full license after 2 years'],
    milestone: 'P-LICENSE',
  },
];

export default function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const activeIdx = expandedStep == null ? -1 : steps.findIndex((s) => s.id === expandedStep);

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] mb-4 tracking-tight leading-[1.1]">
            Your Road to a P-License
          </h2>
        </div>

        {/* Journey: high-contrast module (steps + price + CTA) */}
        <div
          className="relative reveal delay-100 overflow-hidden rounded-2xl bg-[#111111] text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] ring-1 ring-white/10"
          style={
            {
              ['--journey-p']: activeIdx < 0 ? 0 : (activeIdx + 0.5) / steps.length,
            } as React.CSSProperties
          }
        >
          {/* Steps + spine only: spine stops at last row so it does not read as a line through the price block */}
          <div className="relative z-[1]">
            <div
              className="pointer-events-none absolute left-[1.625rem] top-6 bottom-6 z-0 w-1 -translate-x-1/2 rounded-full sm:left-[2.25rem] sm:top-8 sm:bottom-8"
              style={{
                background:
                  activeIdx < 0
                    ? 'rgba(255,255,255,0.1)'
                    : 'linear-gradient(to bottom, #CC0000 0%, #CC0000 calc(100% * var(--journey-p, 0)), rgba(255,255,255,0.1) calc(100% * var(--journey-p, 0)), rgba(255,255,255,0.1) 100%)',
              }}
              aria-hidden
            />
            {steps.map((step) => {
              const isExpanded = expandedStep === step.id;
              const isComplete = expandedStep != null && step.id < expandedStep;
              const isUpcoming = expandedStep != null && step.id > expandedStep;

              return (
                <div
                  key={step.id}
                  className={`relative z-[1] flex min-h-[44px] cursor-pointer gap-4 border-b border-white/[0.08] transition-all duration-300 last:border-b-0 sm:gap-6 md:gap-8 ${
                    isExpanded
                      ? 'bg-[#1a1a1a]'
                      : `bg-[#141414] ${
                          isComplete ? 'bg-[#181818]' : isUpcoming ? 'bg-[#101010]' : ''
                        }`
                  }`}
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                >
                  {/* Step index: sits on the spine */}
                  <div className="relative flex w-[3.25rem] shrink-0 flex-col items-center justify-start self-stretch py-5 pl-3 sm:w-[3.5rem] sm:pl-4 sm:py-6 md:py-7">
                    <div
                      className={`relative z-[2] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[2.5px] border-[#111111] font-display text-sm font-800 shadow-sm transition-colors duration-300 ${
                        isExpanded
                          ? 'border-[#1a1a1a] bg-[#CC0000] text-white'
                          : isComplete
                            ? 'bg-white/12 text-white/45'
                            : 'bg-white/[0.08] text-white/80 ring-1 ring-white/10'
                      }`}
                    >
                      {step.id}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 pr-4 py-5 sm:pr-6 sm:py-6 md:pr-8 md:py-7">
                    <div
                      className={`mb-3 grid min-h-[32px] items-center gap-x-2 gap-y-2 sm:mb-4 sm:gap-x-4 ${
                        step.milestone != null ? 'grid-cols-[minmax(0,1fr)_auto]' : 'grid-cols-1'
                      }`}
                    >
                      <span className="inline-flex min-h-[32px] w-fit max-w-full items-center rounded-sm border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-display font-700 uppercase tracking-[0.16em] text-white/70 sm:px-3.5 sm:py-2 sm:text-[11px]">
                        {step.category}
                      </span>
                      {step.milestone != null && (
                        <span className="inline-flex min-h-[32px] justify-self-end items-center rounded-sm bg-[#CC0000] px-3 py-1.5 text-[10px] font-display font-700 uppercase tracking-wide text-white sm:px-3.5">
                          {step.milestone}
                        </span>
                      )}
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`font-display font-800 text-base uppercase leading-snug tracking-tight transition-colors duration-300 sm:text-lg sm:normal-case sm:tracking-tight ${
                            isExpanded ? 'text-white' : 'text-white/95'
                          }`}
                        >
                          {step.title}
                        </h3>
                        {!isExpanded && (
                          <p className="mt-2.5 text-base leading-relaxed text-white/55 font-body sm:mt-3">{step.summary}</p>
                        )}
                      </div>

                      <div className="flex shrink-0 items-center gap-2.5 pt-1 sm:gap-3 sm:pt-1.5 md:gap-4">
                        <span className="hidden text-base text-white/40 font-body sm:inline">{step.duration}</span>
                        <div
                          className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-all duration-300 ${
                            isExpanded ? 'rotate-180 bg-[#CC0000]/25' : 'bg-white/10'
                          }`}
                        >
                          <Icon
                            name="ChevronDownIcon"
                            size={14}
                            variant="outline"
                            className={isExpanded ? 'text-[#CC0000]' : 'text-white/45'}
                          />
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-5 sm:mt-7">
                        <p className="mb-4 font-body text-base leading-relaxed text-white/65 sm:mb-5">{step.description}</p>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
                          {step.details.map((detail, di) => (
                            <div key={di} className="flex items-start gap-3">
                              <div className="mt-2 h-1 w-4 shrink-0 rounded-none bg-[#CC0000]" />
                              <span className="text-base leading-snug text-white/70 font-body">{detail}</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center gap-2 sm:mt-6">
                          <span className="mr-0.5 inline-flex shrink-0 text-[13px] leading-none text-[#CC0000]" aria-hidden>
                            ⏰
                          </span>
                          <span className="text-base text-white/45 font-body">Estimated duration: {step.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-5 py-10 text-center sm:px-8 sm:py-12">
            <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/45">Complete program</p>
                <p className="font-display text-5xl font-800 leading-none tracking-tighter text-white sm:text-6xl">
                  RM2,050
                </p>
                <span className="inline-flex min-h-[28px] shrink-0 items-center rounded-sm border border-white/20 bg-white/[0.06] px-3 py-1.5 text-[11px] font-display font-700 uppercase tracking-[0.16em] text-white/55">
                  SAVE RM299
                </span>
              </div>
              <a
                href="#register"
                className="btn-primary inline-flex min-h-[44px] w-auto items-center justify-center rounded-sm px-14 py-4 text-base font-display font-800 uppercase tracking-wide"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
