'use client';

import React, { useEffect, useState, useRef } from 'react';

export interface PricingTimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export function usePricingCountdown(targetHours: number): PricingTimeLeft {
  const endTimeRef = useRef<number>(0);
  const [timeLeft, setTimeLeft] = useState<PricingTimeLeft>({
    hours: targetHours,
    minutes: 0,
    seconds: 0,
  });

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

export function PricingInlineCountdown({ timeLeft }: { timeLeft: PricingTimeLeft }) {
  const fmt = (n: number) => String(n).padStart(2, '0');
  return (
    <span className="inline-flex items-center gap-0.5 text-[13px] font-display font-700 text-[#CC0000] tabular-nums">
      <span className="mr-0.5 text-[13px] leading-none">⏰</span>
      {fmt(timeLeft.hours)}
      <span className="mx-0.5 opacity-60">:</span>
      {fmt(timeLeft.minutes)}
      <span className="mx-0.5 opacity-60">:</span>
      {fmt(timeLeft.seconds)}
    </span>
  );
}
