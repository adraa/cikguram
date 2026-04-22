'use client';

/**
 * ReserveFormSection
 *
 * GOOGLE FORMS / SHEETS SETUP (required for submissions to reach your spreadsheet):
 *
 * 1. Go to forms.google.com → Create a new form
 * 2. Add 3 "Short answer" questions:  "Full Name",  "Phone Number",  "License Type"
 * 3. Click ⋮ (top-right) → "Get pre-filled link" → fill dummy values → Copy link
 * 4. From the pre-filled URL extract:
 *    • The form action URL  (everything before the query string, replace /viewform with /formResponse)
 *    • The three  entry.XXXXXXXXXX  field IDs from the query params
 * 5. Create / update  .env.local  with:
 *
 *      NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL=https://docs.google.com/forms/d/e/<YOUR_ID>/formResponse
 *      NEXT_PUBLIC_GF_ENTRY_NAME=entry.XXXXXXXXXX
 *      NEXT_PUBLIC_GF_ENTRY_PHONE=entry.XXXXXXXXXX
 *      NEXT_PUBLIC_GF_ENTRY_LICENSE=entry.XXXXXXXXXX
 *
 * 6. In Google Forms → Responses tab → click the Sheets icon to link to Google Sheets
 */

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
// Google Forms field IDs: replace with your actual entry IDs after following setup above
const ENTRY_NAME    = process.env.NEXT_PUBLIC_GF_ENTRY_NAME    ?? 'entry.000000001';
const ENTRY_PHONE   = process.env.NEXT_PUBLIC_GF_ENTRY_PHONE   ?? 'entry.000000002';
const ENTRY_LICENSE = process.env.NEXT_PUBLIC_GF_ENTRY_LICENSE ?? 'entry.000000003';

interface FormData {
  name: string;
  phone: string;
  category: string;
  citizenship: string;
  licenseType: string;
}

export default function ReserveFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    category: '',
    citizenship: 'Malaysian',
    licenseType: 'D',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const action = process.env.NEXT_PUBLIC_GOOGLE_FORM_ACTION_URL;
    if (action) {
      const body = new URLSearchParams({
        [ENTRY_NAME]: formData.name,
        [ENTRY_PHONE]: formData.phone,
        [ENTRY_LICENSE]: formData.licenseType,
      });
      // no-cors: browser won't read the response, but data lands in Google Sheet
      fetch(action, { method: 'POST', mode: 'no-cors', body }).catch(() => {});
    }
    setSubmitted(true);
  };

  // After smooth in-page scroll to #full-name-input, move keyboard focus to the field
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const focusNameField = () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (window.location.hash !== '#full-name-input') return;
      const input = document.getElementById('full-name-input') as HTMLInputElement | null;
      if (!input) return;
      timeoutId = window.setTimeout(() => {
        input.focus({ preventScroll: true });
        timeoutId = undefined;
      }, 520);
    };

    focusNameField();
    window.addEventListener('hashchange', focusNameField);
    return () => {
      window.removeEventListener('hashchange', focusNameField);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="register" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-blob w-[400px] h-[400px] bg-red-100 top-1/2 right-0 -translate-y-1/2 opacity-50 hidden sm:block" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 reveal">
          <h2 className="font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15] mb-4">
            Begin Your Driving Journey
          </h2>
          <p className="text-black/60 font-body max-w-[420px] mx-auto text-[15px] sm:text-[18px] leading-[1.6]">
            Expect a personal message from Cikgu Ram within 24 hours to finalize your schedule.
          </p>
        </div>

        {/* Form card */}
        <div className="reveal-scale">
          {submitted ? (
            <div className="light-card rounded-2xl p-8 sm:p-10 text-center border border-[#1A7A3C]/20 border-t-4 border-t-[#1A7A3C]">
              <div className="w-16 h-16 rounded-full bg-[#1A7A3C]/12 flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircleIcon" size={32} variant="solid" className="text-[#1A7A3C]" />
              </div>
              <h3 className="font-display font-800 text-xl sm:text-2xl text-[#111111] mb-3 tracking-tight">
                Spot Reserved!
              </h3>
              <p className="text-black/55 font-body text-sm sm:text-base leading-[1.7] mb-6">
                Thank you! Cikgu Ram will contact you at the number provided within 24 hours
                to confirm your registration and schedule your first session.
              </p>
              <a
                href="https://wa.me/601096388803?text=Hi%20Cikgu%20Ram%2C%20I%20just%20submitted%20my%20registration%20form."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A7A3C] hover:bg-[#22A050] transition-colors text-white font-display font-700 text-sm shadow-sm w-full sm:w-auto"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
                Follow up on WhatsApp
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="register-form-faq-yellow light-card rounded-2xl overflow-hidden border-t-4 border-t-[#FFD100]"
            >
              {/* Form fields */}
              {/* 32px padding signals considered design, not a template */}
              <div className="p-8">
                {/* Name + Phone + Category: full-width stacked */}
                {/* mb-7 (28px) before license section signals a visual zone shift */}
                <div className="flex flex-col gap-4 mb-7">
                  {/* Name */}
                  <div>
                    <label className="block text-[13px] font-display font-600 text-[#374151] uppercase tracking-[0.08em] mb-2.5">
                      Full Name<span className="text-[#EF4444]"> *</span>
                    </label>
                    <input
                      id="full-name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ahmad bin Abdullah"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                        formData.name ? '!border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
                      }`}
                      suppressHydrationWarning
                      autoComplete="name"
                    />
                    {formData.name && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-[#1A7A3C]" />
                        <span className="text-xs text-[#1A7A3C] font-body">Looks good!</span>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[13px] font-display font-600 text-[#374151] uppercase tracking-[0.08em] mb-2.5">
                      Phone Number<span className="text-[#EF4444]"> *</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 012-345 6789"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                        formData.phone ? '!border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
                      }`}
                      suppressHydrationWarning
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    {formData.phone && (
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Icon name="CheckCircleIcon" size={14} variant="solid" className="text-[#1A7A3C]" />
                        <span className="text-xs text-[#1A7A3C] font-body">Looks good!</span>
                      </div>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-[13px] font-display font-600 text-[#374151] uppercase tracking-[0.08em] mb-2.5">
                      I am a<span className="text-[#EF4444]"> *</span>
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all appearance-none pr-10 ${
                          formData.category ? '!border-[#1A7A3C]' : ''
                        }`}
                        suppressHydrationWarning
                      >
                        <option value="" disabled>Select your category...</option>
                        <option value="University Student">University Student</option>
                        <option value="Parent registering for a teen">Parent registering for a teen</option>
                        <option value="Working Professional">Working Professional</option>
                      </select>
                      <Icon
                        name="ChevronDownIcon"
                        size={16}
                        variant="solid"
                        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-black/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Citizenship selector (sliding pill) */}
                <div className="mb-7">
                  <label className="block text-[13px] font-display font-600 text-[#374151] uppercase tracking-[0.08em] mb-3">
                    Citizenship<span className="text-[#EF4444]"> *</span>
                  </label>
                  {/* p-1.5 = 6px padding; gap-1.5 = 6px → pill width = calc(50% - 9px) */}
                  <div className="relative flex rounded-2xl bg-[#FFD100]/35 p-1.5 gap-1.5">
                    {/* Sliding pill — FAQ yellow */}
                    <div
                      aria-hidden
                      className="absolute top-1.5 bottom-1.5 rounded-[14px] bg-[#FFD100] shadow-[0_3px_14px_rgba(255,209,0,0.55)]"
                      style={{
                        width: 'calc(50% - 9px)',
                        left: 6,
                        transform: formData.citizenship === 'Malaysian'
                          ? 'translateX(0px)'
                          : 'translateX(calc(100% + 6px))',
                        transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                        willChange: 'transform',
                      }}
                    />
                    {[
                      { value: 'Malaysian',    label: 'Malaysian',     flag: '🇲🇾' },
                      { value: 'Non-Malaysian', label: 'Non-Malaysian', flag: '🌍' },
                    ].map((opt) => {
                      const isSelected = formData.citizenship === opt.value;
                      return (
                        <label key={opt.value} className="relative z-10 flex-1 cursor-pointer select-none">
                          <input
                            type="radio"
                            name="citizenship"
                            value={opt.value}
                            checked={isSelected}
                            onChange={handleChange}
                            className="sr-only"
                            suppressHydrationWarning
                          />
                          <div className="flex items-center justify-center gap-2 py-3.5 px-3 min-h-[54px] transition-transform duration-100 active:scale-[0.96]">
                            <span className="text-[18px] leading-none">{opt.flag}</span>
                            <span
                              className="font-display font-700 text-[13.5px] leading-none tracking-[-0.01em]"
                              style={{
                                color: isSelected ? '#111111' : '#5c5633',
                                transition: 'color 200ms ease',
                              }}
                            >
                              {opt.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* License type selector (sliding pill) */}
                <div className="mb-8">
                  <label className="block text-[13px] font-display font-600 text-[#374151] uppercase tracking-[0.08em] mb-3">
                    License Type<span className="text-[#EF4444]"> *</span>
                  </label>
                  <div className="relative flex rounded-2xl bg-[#FFD100]/35 p-1.5 gap-1.5">
                    {/* Sliding pill — FAQ yellow */}
                    <div
                      aria-hidden
                      className="absolute top-1.5 bottom-1.5 rounded-[14px] bg-[#FFD100] shadow-[0_3px_14px_rgba(255,209,0,0.55)]"
                      style={{
                        width: 'calc(50% - 9px)',
                        left: 6,
                        transform: formData.licenseType === 'D'
                          ? 'translateX(0px)'
                          : 'translateX(calc(100% + 6px))',
                        transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                        willChange: 'transform',
                      }}
                    />
                    {[
                      { value: 'D',  label: 'Manual',    letter: 'D'  },
                      { value: 'DA', label: 'Automatic', letter: 'DA' },
                    ].map((opt) => {
                      const isSelected = formData.licenseType === opt.value;
                      return (
                        <label key={opt.value} className="relative z-10 flex-1 cursor-pointer select-none">
                          <input
                            type="radio"
                            name="licenseType"
                            value={opt.value}
                            checked={isSelected}
                            onChange={handleChange}
                            className="sr-only"
                            suppressHydrationWarning
                          />
                          <div className="flex items-center justify-center gap-2.5 py-3.5 px-3 min-h-[54px] transition-transform duration-100 active:scale-[0.96]">
                            {/* License class badge */}
                            <div
                              className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                              style={{
                                background: isSelected ? '#111111' : '#1A1A1A',
                                transition: 'background 250ms ease',
                              }}
                            >
                              <span
                                className={`font-display font-black leading-none tracking-tight ${opt.letter === 'DA' ? 'text-[10px]' : 'text-[13px]'}`}
                                style={{
                                  color: '#FFD100',
                                  transition: 'color 200ms ease',
                                }}
                              >
                                {opt.letter}
                              </span>
                            </div>
                            <span
                              className="font-display font-700 text-[13.5px] leading-none tracking-[-0.01em]"
                              style={{
                                color: isSelected ? '#111111' : '#5c5633',
                                transition: 'color 200ms ease',
                              }}
                            >
                              {opt.label}
                            </span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn-primary flex items-center justify-center gap-2 min-w-[220px] px-10 py-3.5 rounded-2xl text-[15px] font-display font-700"
                    suppressHydrationWarning
                  >
                    Submit
                  </button>
                </div>

                <div className="mt-4 flex justify-center items-start gap-1.5 px-2">
                  <Icon name="LockClosedIcon" size={13} variant="solid" className="text-black/25 shrink-0 mt-0.5" />
                  {/* #767676 meets WCAG AA minimum contrast on white */}
                  <p className="text-[12px] text-[#767676] font-body leading-relaxed">
                    Your information is secure. No payment required now.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Next-section bridge: same type scale as “Begin Your Driving Journey”, spaced from the card above */}
        <p className="text-center font-display font-700 text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.15] mt-24 sm:mt-32 md:mt-40">
          The Proof Is Public
        </p>
      </div>
    </section>
  );
}
