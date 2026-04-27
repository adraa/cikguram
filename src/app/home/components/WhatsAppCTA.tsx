'use client';

import React, { useState, useEffect } from 'react';

export default function WhatsAppCTA() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Tooltip: desktop only to avoid cluttering mobile */}
      {showTooltip && (
        <div className="hidden sm:block bg-white border border-black/10 shadow-card-hover rounded-xl px-4 py-3 max-w-[200px] animate-[fadeSlideIn_0.4s_ease-out_forwards]">
          <p className="text-xs text-black/70 font-body leading-relaxed">
            Chat with Cikgu Ram directly! 💬
          </p>
        </div>
      )}
    </div>
  );
}
