'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!isPrivacyOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsPrivacyOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isPrivacyOpen]);

  return (
    <footer className="border-t border-black/8 bg-[#F8F8F6]">
      {/* Road stripe accent */}
      <div className="road-stripe w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex w-full justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group min-h-[44px]"
            aria-label="Cikgu Ram, Westport Driving Academy, home"
          >
            <AppLogo size={26} onClick={() => {}} />
            <div className="flex flex-col text-left">
              <span className="block font-space text-[13px] font-700 leading-none tracking-[-0.02em] text-[#CC0000] sm:text-[14px]">
                CIKGU RAM 🇲🇾
              </span>
              <span className="text-[8px] sm:text-[9px] text-black/40 font-body tracking-widest uppercase leading-none mt-0.5">
                Westport Driving Academy
              </span>
            </div>
          </Link>
        </div>

        <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-black/6 text-center flex flex-col items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setIsPrivacyOpen(true)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-md px-2 text-sm font-body text-black/45 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black/25"
          >
            Privacy Policy
          </button>
          <p className="text-black/25 text-xs font-body">
            © 2026 Cikgu Ram · Westport Driving Academy, Bukit Rotan · All rights reserved.
          </p>
        </div>
      </div>

      {isPrivacyOpen ? (
        <div className="fixed inset-0 z-50" aria-hidden={false}>
          <div
            role="presentation"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsPrivacyOpen(false)}
          />
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:items-center sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="privacy-policy-title"
              className="pointer-events-auto flex w-full max-w-lg max-h-[min(85vh,calc(100dvh-2rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
            >
              <div className="overflow-y-auto overscroll-contain px-5 py-6 sm:px-6 sm:py-8">
                <h2
                  id="privacy-policy-title"
                  className="font-space text-lg font-700 tracking-tight text-black sm:text-xl"
                >
                  Privacy Policy
                </h2>
                <div className="mt-5 space-y-5 text-left text-sm font-body leading-relaxed text-black/70">
                  <section>
                    <h3 className="mb-2 font-medium text-black">Data collection</h3>
                    <p>
                      We only collect information that you voluntarily provide when you submit a lead
                      or enquiry through our website—for example, your name, phone number, or email
                      address.
                    </p>
                  </section>
                  <section>
                    <h3 className="mb-2 font-medium text-black">Purpose</h3>
                    <p>
                      We use this information solely to contact you about driving lessons and related
                      enquiries for Cikgu Ram.
                    </p>
                  </section>
                  <section>
                    <h3 className="mb-2 font-medium text-black">Third-party sharing</h3>
                    <p>
                      We do not sell your personal data. We do not share it with third parties for
                      marketing purposes.
                    </p>
                  </section>
                </div>
              </div>
              <div className="shrink-0 border-t border-black/8 bg-white px-5 py-4 sm:px-6">
                <button
                  type="button"
                  onClick={() => setIsPrivacyOpen(false)}
                  className="inline-flex h-11 min-h-[44px] w-full items-center justify-center rounded-lg bg-black text-base font-medium font-body text-white transition-colors hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:w-auto sm:min-w-[120px]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
