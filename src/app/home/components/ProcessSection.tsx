'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
  status: 'required' | 'test' | 'practical' | 'final';
}

const steps: ProcessStep[] = [
  {
    id: 1,
    phase: 'Registration',
    title: 'Register with Cikgu Ram',
    description: 'Sign up online or via WhatsApp. Submit your IC copy and passport photo. We handle JPJ registration on your behalf.',
    duration: '1 Day',
    details: ['IC copy required', 'Passport photo (2 copies)', 'Online registration saves RM299', 'Immediate confirmation'],
    status: 'required',
  },
  {
    id: 2,
    phase: 'Theory',
    title: 'KPP01 Theory Course (6 Hours)',
    description: 'Attend the mandatory 6-hour road safety and traffic law course. Available on weekdays and weekends.',
    duration: '1 Day',
    details: ['6-hour classroom session', 'Road signs & traffic laws', 'Safety regulations', 'Certificate issued upon completion'],
    status: 'required',
  },
  {
    id: 3,
    phase: 'Theory Test',
    title: 'Computerised Theory Test (Undang)',
    description: 'Sit the JPJ computerised theory test. Cikgu Ram provides practice materials to ensure you pass on the first attempt.',
    duration: '1–3 Days',
    details: ['50 multiple-choice questions', 'Pass mark: 42/50', 'Practice tests provided', 'LDL issued upon passing'],
    status: 'test',
  },
  {
    id: 4,
    phase: 'Circuit Training',
    title: 'KPP02 Practical Circuit Training',
    description: 'Learn controlled driving skills on the JPJ circuit — hill start, 3-point turn, parking, and S/Z course navigation.',
    duration: '3–5 Sessions',
    details: ['Hill start mastery', '3-point turn', 'Side & parallel parking', 'S-course & Z-course'],
    status: 'practical',
  },
  {
    id: 5,
    phase: 'Road Training',
    title: 'KPP03 On-Road Practical Training',
    description: 'Real-road driving sessions with Cikgu Ram. Navigate Malaysian traffic, junctions, roundabouts, and expressways.',
    duration: '6–8 Sessions',
    details: ['Real traffic conditions', 'Junctions & roundabouts', 'Highway driving', 'Night driving (if required)'],
    status: 'practical',
  },
  {
    id: 6,
    phase: 'Pre-Test',
    title: 'Pre-Test Evaluation',
    description: 'Full mock JPJ test conducted by Cikgu Ram. Identifies weak areas and ensures you are 100% ready before the real test.',
    duration: '1 Session',
    details: ['Full mock circuit test', 'Mock road test', 'Detailed feedback', 'Only proceed when ready'],
    status: 'test',
  },
  {
    id: 7,
    phase: 'JPJ Test',
    title: 'JPJ Practical Test (Circuit + Road)',
    description: 'The official JPJ driving test. With Cikgu Ram\'s preparation, our students achieve a 98% pass rate.',
    duration: '1 Day',
    details: ['Circuit test first', 'Road test (if circuit passed)', 'Results same day', '98% pass rate'],
    status: 'final',
  },
  {
    id: 8,
    phase: 'P-License',
    title: 'Receive Your Probationary License (Lesen P)',
    description: 'Congratulations! Collect your P-License and hit the road. 2-year probationary period before upgrading to full license.',
    duration: '1–2 Weeks',
    details: ['P-License issued by JPJ', '2-year probationary period', 'Speed limit: 90 km/h', 'Upgrade to full license after 2 years'],
    status: 'final',
  },
];

const statusConfig = {
  required: { label: 'Required', color: 'text-[#111111]', bg: 'bg-black/6', border: 'border-black/12' },
  test: { label: 'Test', color: 'text-[#7D6008]', bg: 'bg-[#C9A020]/10', border: 'border-[#C9A020]/30' },
  practical: { label: 'Practical', color: 'text-[#CC0000]', bg: 'bg-[#CC0000]/8', border: 'border-[#CC0000]/20' },
  final: { label: 'Final', color: 'text-[#CC0000]', bg: 'bg-[#CC0000]/8', border: 'border-[#CC0000]/20' },
};

export default function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  return (
    <section id="process" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <span className="section-label">Step by Step</span>
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Your Road to a P-License
          </h2>
          <p className="text-black/65 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            A clear, structured path from zero to licensed driver. Cikgu Ram guides you through every stage.
          </p>
          {/* Road stripe accent */}
          <div className="road-stripe w-48 mx-auto mt-5" />
        </div>

        {/* Steps */}
        <div className="space-y-3 sm:space-y-4 reveal delay-100">
          {steps.map((step, i) => {
            const isExpanded = expandedStep === step.id;
            const config = statusConfig[step.status];

            return (
              <div
                key={step.id}
                className={`relative rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'bg-white border-[#CC0000]/25 shadow-card'
                    : 'bg-[#F8F8F6] border-black/6 active:border-black/12'
                }`}
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[27px] top-full w-0.5 h-3 sm:h-4 bg-black/10 z-10" />
                )}

                {/* Header row */}
                <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                  {/* Step number */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-display font-800 text-sm transition-colors duration-300 ${
                      isExpanded ? 'bg-[#CC0000] text-white' : 'bg-black/8 text-black/50'
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] text-black/30 font-display font-600 uppercase tracking-[0.14em]">
                        {step.phase}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-display font-600 ${config.bg} ${config.border} border ${config.color}`}>
                        {config.label}
                      </span>
                    </div>
                    <h3 className={`font-display font-700 text-sm sm:text-base leading-tight tracking-tight transition-colors duration-300 ${isExpanded ? 'text-[#111111]' : 'text-black/70'}`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Duration + chevron */}
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className="text-xs text-black/30 font-body hidden sm:block">{step.duration}</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[#CC0000]/12 rotate-180' : 'bg-black/6'}`}>
                      <Icon name="ChevronDownIcon" size={14} variant="outline" className={isExpanded ? 'text-[#CC0000]' : 'text-black/35'} />
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 sm:pb-6 pl-[3.75rem] sm:pl-[4.5rem]">
                    <p className="text-black/65 font-body text-sm leading-relaxed mb-4 sm:mb-5">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {step.details.map((detail, di) => (
                        <div key={di} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#CC0000] shrink-0" />
                          <span className="text-xs text-black/65 font-body leading-snug">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 sm:mt-5 flex items-center gap-2">
                      <Icon name="ClockIcon" size={12} variant="outline" className="text-black/30" />
                      <span className="text-xs text-black/30 font-body">Estimated duration: {step.duration}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-14 text-center reveal delay-200">
          <p className="text-black/60 font-body text-sm mb-5 leading-relaxed">
            Ready to start your journey? Register now and get your P-License faster than you think.
          </p>
          <a
            href="#register"
            className="btn-primary inline-flex items-center gap-2 px-8 sm:px-10 py-4 rounded-xl text-base font-display font-700 w-full sm:w-auto justify-center"
          >
            Start My License Journey
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
        </div>
      </div>
    </section>
  );
}