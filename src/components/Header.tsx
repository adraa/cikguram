'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/8 py-2.5 sm:py-3 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-black/5 py-3 sm:py-4'
        }`}
      >
        {/* Top accent stripe — road yellow */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8B800]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 sm:gap-2.5 group">
            <AppLogo size={30} onClick={() => {}} />
            <div className="flex flex-col">
              <span className="font-display text-sm sm:text-base font-800 text-[#111111] tracking-tight leading-none">
                CikguRam
              </span>
              <span className="text-[9px] sm:text-[10px] text-black/40 font-body tracking-widest uppercase leading-none mt-0.5">
                Westport Driving Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="text-sm font-600 text-black/55 hover:text-[#CC0000] transition-colors duration-200 tracking-tight font-display min-h-[44px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#register"
              className="btn-primary hidden sm:flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg text-sm font-display font-700 min-h-[44px]"
            >
              Register Now
              <Icon name="ArrowRightIcon" size={16} variant="outline" />
            </a>
            {/* Mobile: compact register link */}
            <a
              href="#register"
              className="sm:hidden btn-primary flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-display font-700"
            >
              Register
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-black/60 hover:text-[#CC0000] transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              {menuOpen ? (
                <Icon name="XMarkIcon" size={24} variant="outline" />
              ) : (
                <Icon name="Bars3Icon" size={24} variant="outline" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`mobile-menu absolute top-0 right-0 h-full w-[280px] sm:w-72 bg-white border-l border-black/8 flex flex-col pt-20 px-5 sm:px-6 pb-8 shadow-xl ${
            menuOpen ? 'open' : ''
          }`}
        >
          {/* Yellow top stripe */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#E8B800]" />

          <nav className="flex flex-col gap-1">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                className="text-lg font-display font-600 text-black/70 hover:text-[#CC0000] py-3.5 border-b border-black/6 transition-colors min-h-[52px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
          </nav>
          <a
            href="#register"
            onClick={handleNavClick}
            className="btn-primary mt-8 flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-display font-700 w-full"
          >
            Register Now
            <Icon name="ArrowRightIcon" size={18} variant="outline" />
          </a>
        </div>
      </div>
    </>
  );
}