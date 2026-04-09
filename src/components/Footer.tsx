import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#F8F8F6]">
      {/* Road stripe accent */}
      <div className="road-stripe w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-4">
          {/* Logo + Brand */}
          <Link href="/home" className="flex items-center gap-2.5">
            <AppLogo size={28} />
            <span className="font-display text-sm font-700 text-black/70 tracking-tight">
              CikguRam
            </span>
          </Link>

          {/* Links — wrap on mobile */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-600 text-black/40 font-display">
            <a href="#pricing" className="hover:text-[#CC0000] transition-colors min-h-[44px] flex items-center">Pricing</a>
            <a href="#process" className="hover:text-[#CC0000] transition-colors min-h-[44px] flex items-center">Process</a>
            <a href="#faq" className="hover:text-[#CC0000] transition-colors min-h-[44px] flex items-center">FAQ</a>
            <a href="#register" className="hover:text-[#CC0000] transition-colors min-h-[44px] flex items-center">Register</a>
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/601096388803"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/35 hover:text-[#1A7A3C] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="outline" />
            </a>
            <span className="text-black/20 text-xs">·</span>
            <span className="text-black/30 text-xs font-body">Privacy</span>
            <span className="text-black/20 text-xs">·</span>
            <span className="text-black/30 text-xs font-body">Terms</span>
          </div>
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