'use client';

import React, { useEffect, useState, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetHours: number): TimeLeft {
  const endTimeRef = useRef<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: targetHours, minutes: 0, seconds: 0 });

  useEffect(() => {
    endTimeRef.current = Date.now() + targetHours * 60 * 60 * 1000;
    const tick = () => {
      const diff = Math.max(0, endTimeRef.current - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetHours]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setTicking(true);
      const t = setTimeout(() => setTicking(false), 300);
      setPrev(value);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  const display = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className={`countdown-digit text-2xl sm:text-3xl font-display font-800 text-[#111111] tabular-nums ${ticking ? 'tick' : ''}`}>
        {display}
      </div>
      <div className="text-[10px] text-black/35 uppercase tracking-[0.14em] font-display font-600 mt-1">{label}</div>
    </div>
  );
}

const packageIncludes = [
  'KPP Theory Course (6 Hours)',
  'Computerised Theory Test (Undang-Undang)',
  'Learner\'s Driving License (LDL)',
  'KPP02 Practical Circuit Training',
  'KPP03 On-Road Practical Training',
  'Pre-Test Evaluation',
  'JPJ Practical Test (Circuit + Road)',
  'All Processing Fees Included',
  'WhatsApp Support Throughout',
  'Free Transport Provided',
];

export default function PricingCard() {
  const timeLeft = useCountdown(23);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section label */}
        <div className="text-center mb-8 sm:mb-12 reveal">
          <span className="section-label" style={{ color: '#CC0000' }}>Limited Time Offer</span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 tracking-tight leading-[1.1]">
            Register Online &amp; Save <span className="text-[#CC0000]">RM299</span>
          </h2>
        </div>

        {/* Main pricing card */}
        <div className="reveal delay-100 relative rounded-2xl overflow-hidden border border-black/8 bg-white shadow-card">
          {/* Top accent bar — road yellow */}
          <div className="h-1.5 w-full bg-[#E8B800]" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left: Price + Timer */}
            <div className="lg:col-span-2 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/6 flex flex-col justify-between gap-6 sm:gap-8 bg-[#F8F8F6]">
              {/* License type badges */}
              <div className="flex flex-wrap gap-2">
                <span className="road-sign-badge-red">Manual Car (D)</span>
                <span className="px-3 py-1 rounded text-xs font-display font-600 bg-black/6 text-black/50 border border-black/8">
                  Auto Car (DA)
                </span>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-800 text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
                    RM2,349
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-black/45 line-through text-base sm:text-lg font-body">RM2,648</span>
                  <span className="px-2 py-0.5 rounded bg-[#CC0000] text-white text-xs font-display font-700">
                    SAVE RM299
                  </span>
                </div>
                <p className="text-black/40 text-sm font-body mt-3 leading-relaxed">
                  All-in package · No hidden fees · Free transport
                </p>
              </div>

              {/* Countdown */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="ClockIcon" size={14} variant="outline" className="text-[#CC0000]" />
                  <span className="text-[10px] text-black/40 font-display font-600 uppercase tracking-[0.14em]">
                    Offer expires in
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CountdownUnit value={timeLeft.hours} label="Hrs" />
                  <span className="text-2xl font-display font-300 text-black/25 mb-4">:</span>
                  <CountdownUnit value={timeLeft.minutes} label="Min" />
                  <span className="text-2xl font-display font-300 text-black/25 mb-4">:</span>
                  <CountdownUnit value={timeLeft.seconds} label="Sec" />
                </div>
              </div>

              {/* CTA — full width, large touch target */}
              <a
                href="#register"
                className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700"
              >
                <Icon name="BoltIcon" size={18} variant="solid" />
                Register Now
              </a>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#E8B800]/10 border border-[#E8B800]/30">
                <Icon name="ExclamationTriangleIcon" size={14} variant="solid" className="text-[#B8900A] mt-0.5 shrink-0" />
                <p className="text-xs text-[#B8900A] font-body leading-relaxed">
                  Limited spots available. This price is only valid for online registration.
                </p>
              </div>
            </div>

            {/* Right: Package includes */}
            <div className="lg:col-span-3 p-6 sm:p-10 bg-white">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <Icon name="GiftIcon" size={20} variant="solid" className="text-[#CC0000]" />
                <h3 className="font-display font-800 text-[#111111] text-lg tracking-tight">
                  Everything Included
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {packageIncludes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#1A7A3C]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name="CheckIcon" size={10} variant="solid" className="text-[#1A7A3C]" />
                    </div>
                    <span className="text-sm text-black/65 font-body leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Free transport callout */}
              <div className="mt-6 sm:mt-8 p-5 rounded-xl bg-[#1A7A3C]/6 border border-[#1A7A3C]/20 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#1A7A3C]/12 flex items-center justify-center shrink-0">
                  <Icon name="TruckIcon" size={22} variant="solid" className="text-[#1A7A3C]" />
                </div>
                <div>
                  <div className="font-display font-700 text-[#111111] text-sm tracking-tight">Free Transport Provided</div>
                  <div className="text-xs text-black/45 font-body mt-1 leading-relaxed">
                    Pick-up &amp; drop-off service included in your package
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}