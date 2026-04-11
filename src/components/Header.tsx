'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/8 py-1.5 sm:py-2 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-black/5 py-2 sm:py-2.5'
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        {/* Logo — centered */}
        <Link href="/home" className="flex items-center gap-2 sm:gap-2.5 group">
          <AppLogo size={26} onClick={() => {}} />
          <div className="flex flex-col">
            <span className="block font-space text-[13px] font-700 italic leading-none tracking-[-0.02em] text-[#CC0000] sm:text-[14px]">
              CIKGU RAM 🇲🇾
            </span>
            <span className="text-[8px] sm:text-[9px] text-black/40 font-body tracking-widest uppercase leading-none mt-0.5">
              Westport Driving Academy
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
