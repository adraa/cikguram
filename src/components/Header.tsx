import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative z-50 w-full overflow-hidden bg-[#F8F8F6] md:z-20 md:border-b md:border-black/[0.06]">
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 md:py-5 lg:py-6">
        <Link
          href="/home"
          className="group flex min-h-[44px] items-center gap-2.5 sm:gap-3 md:min-h-0 md:gap-3.5"
        >
          <AppLogo size={32} className="shrink-0" />
          <div className="flex min-w-0 flex-col text-left">
            <span className="block font-space text-[15px] font-700 leading-tight tracking-[-0.02em] text-[#CC0000] sm:text-base md:text-lg">
              CIKGU RAM 🇲🇾
            </span>
            <span className="mt-0.5 font-body text-xs font-medium uppercase leading-snug tracking-wide text-black/45 md:text-sm">
              Westport Driving Academy
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
