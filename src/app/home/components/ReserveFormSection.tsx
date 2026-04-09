'use client';

/**
 * ReserveFormSection
 *
 * GOOGLE FORMS / SHEETS SETUP (required for submissions to reach your spreadsheet):
 * ─────────────────────────────────────────────────────────────────────────────────
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
 * ─────────────────────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

// Google Forms field IDs — replace with your actual entry IDs after following setup above
const ENTRY_NAME    = process.env.NEXT_PUBLIC_GF_ENTRY_NAME    ?? 'entry.000000001';
const ENTRY_PHONE   = process.env.NEXT_PUBLIC_GF_ENTRY_PHONE   ?? 'entry.000000002';
const ENTRY_LICENSE = process.env.NEXT_PUBLIC_GF_ENTRY_LICENSE ?? 'entry.000000003';

// Testimonial avatars reused as social proof avatars in the form header
const PROOF_AVATARS = [
  'https://img.rocket.new/generatedImages/rocket_gen_img_1f2d969d9-1772546065138.png',
  'https://img.rocket.new/generatedImages/rocket_gen_img_1b5ea51b0-1763293852695.png',
  'https://img.rocket.new/generatedImages/rocket_gen_img_1318f9f53-1772631229001.png',
];

interface FormData {
  name: string;
  phone: string;
  licenseType: string;
}

export default function ReserveFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    licenseType: 'D',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  // Progress: 3 required fields — name, phone, licenseType (licenseType always pre-filled to 'D')
  const requiredFields: (keyof FormData)[] = ['name', 'phone', 'licenseType'];
  const filledRequired = requiredFields.filter(f => formData[f].trim() !== '').length;
  const progressPercent = Math.round((filledRequired / requiredFields.length) * 100);

  return (
    <section id="register" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-blob w-[400px] h-[400px] bg-red-100 top-1/2 right-0 -translate-y-1/2 opacity-50 hidden sm:block" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-6 sm:mb-8 reveal">
          <span className="section-label">Reserve Your Spot</span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Start Your License Journey Today
          </h2>
          <p className="text-black/50 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Fill in the form below and Cikgu Ram will contact you within 24 hours to confirm your spot.
          </p>
        </div>

        {/* ── Social proof strip ── */}
        <div className="flex items-center justify-center gap-3 mb-6 reveal">
          {/* Stacked avatars */}
          <div className="flex -space-x-2">
            {PROOF_AVATARS.map((src, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm"
              >
                <AppImage
                  src={src}
                  alt="Student"
                  width={32}
                  height={32}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Stars + copy */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map(s => (
                <Icon key={s} name="StarIcon" size={12} variant="solid" className="text-[#E8B800]" />
              ))}
              <span className="ml-1.5 text-xs font-display font-700 text-[#111111]">4.9 / 5.0</span>
            </div>
            <span className="text-xs text-black/50 font-body mt-0.5">Join 600+ licensed drivers</span>
          </div>
        </div>

        {/* ── Form card ── */}
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
              className="light-card rounded-2xl p-5 sm:p-8 border-t-4 border-t-[#E8B800]"
            >
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-display font-600 text-black/45 uppercase tracking-widest">
                    Form Progress
                  </span>
                  <span className="text-xs font-display font-700 text-[#CC0000]">
                    {progressPercent}% Complete
                  </span>
                </div>
                <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#CC0000] to-[#FF2222] transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Name + Phone — side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="e.g. Ahmad bin Abdullah"
                    className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                      formData.name ? 'border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
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
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="e.g. 012-345 6789"
                    className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                      formData.phone ? 'border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
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
              </div>

              {/* License type */}
              <div className="mb-6">
                <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                  Preferred License Type *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'D',  label: 'Manual (D)',  sub: 'Full flexibility',  icon: 'Cog6ToothIcon' },
                    { value: 'DA', label: 'Auto (DA)',   sub: 'Easier to learn',   icon: 'BoltIcon' },
                  ].map((opt) => (
                    <label key={opt.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="licenseType"
                        value={opt.value}
                        checked={formData.licenseType === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                        suppressHydrationWarning
                      />
                      <div
                        className={`p-4 rounded-xl border-2 transition-all duration-200 min-h-[72px] flex items-center gap-3 ${
                          formData.licenseType === opt.value
                            ? 'border-[#CC0000] bg-[#CC0000]/6 shadow-sm'
                            : 'border-black/8 bg-white hover:border-black/15'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          formData.licenseType === opt.value ? 'bg-[#CC0000]' : 'bg-black/5'
                        }`}>
                          <Icon
                            name={opt.icon as Parameters<typeof Icon>[0]['name']}
                            size={18}
                            variant="solid"
                            className={formData.licenseType === opt.value ? 'text-white' : 'text-black/40'}
                          />
                        </div>
                        <div>
                          <div className={`font-display font-700 text-sm leading-tight ${
                            formData.licenseType === opt.value ? 'text-[#CC0000]' : 'text-black/65'
                          }`}>
                            {opt.label}
                          </div>
                          <div className="text-xs text-black/40 font-body mt-0.5">{opt.sub}</div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Key benefits — inline, replaces removed left panel */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { icon: 'CheckCircleIcon', text: 'RM299 discount applied' },
                  { icon: 'CheckCircleIcon', text: 'Free transport included' },
                  { icon: 'CheckCircleIcon', text: 'Flexible schedule' },
                  { icon: 'CheckCircleIcon', text: 'No hidden fees' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={14} variant="solid" className="text-[#1A7A3C] shrink-0" />
                    <span className="text-xs text-black/55 font-body">{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700 shadow-lg hover:shadow-xl"
                suppressHydrationWarning
              >
                <Icon name="BoltIcon" size={18} variant="solid" />
                Reserve My Spot — Save RM299
              </button>

              <div className="mt-4 flex items-start gap-2 px-2">
                <Icon name="LockClosedIcon" size={14} variant="solid" className="text-black/25 shrink-0 mt-0.5" />
                <p className="text-xs text-black/40 font-body leading-relaxed">
                  Your information is secure and will only be used to contact you about your registration. No payment required now.
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
