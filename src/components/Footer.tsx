'use client';

import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#F8F8F6]">
      {/* Road stripe accent */}
      <div className="road-stripe w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex w-full justify-center">
          <Link
            href="/home"
            className="flex items-center gap-2 sm:gap-2.5 group min-h-[44px]"
            aria-label="Cikgu Ram, Westport Driving Academy, home">
            <AppLogo size={26} onClick={() => {}} />
            <div className="flex flex-col text-left">
              <span className="block font-space text-[13px] font-700 italic leading-none tracking-[-0.02em] text-[#CC0000] sm:text-[14px]">
                CIKGU RAM 🇲🇾
              </span>
              <span className="text-[8px] sm:text-[9px] text-black/40 font-body tracking-widest uppercase leading-none mt-0.5">
                Westport Driving Academy
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-black/6 text-center">
          <p className="text-black/25 text-xs font-body">
            © 2026 CikguRam · Westport Driving Academy · Reg. No. staracad.888 · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
