'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  licenseType: string;
  location: string;
  message: string;
}

export default function ReserveFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    licenseType: 'D',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-16 sm:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      {/* Red accent blob — desktop only */}
      <div className="glow-blob w-[400px] h-[400px] bg-red-100 top-1/2 right-0 -translate-y-1/2 opacity-50 hidden sm:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="section-label">Reserve Your Spot</span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Start Your License Journey Today
          </h2>
          <p className="text-black/50 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Fill in the form below and Cikgu Ram will contact you within 24 hours to confirm your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 items-start">
          {/* Left: Info panel — shown after form on mobile */}
          <div className="lg:col-span-2 reveal-left order-2 lg:order-1">
            <div className="light-card rounded-2xl p-6 sm:p-7 mb-5 sm:mb-6 border-t-4 border-t-[#CC0000]">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#CC0000]/10 flex items-center justify-center">
                  <Icon name="BoltIcon" size={20} variant="solid" className="text-[#CC0000]" />
                </div>
                <div>
                  <div className="font-display font-700 text-[#111111] text-sm">Online Registration</div>
                  <div className="text-xs text-black/40 font-body mt-0.5">Save RM299 instantly</div>
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4">
                {[
                  { icon: 'CheckCircleIcon', text: 'Immediate confirmation' },
                  { icon: 'CheckCircleIcon', text: 'RM299 discount applied' },
                  { icon: 'CheckCircleIcon', text: 'Free transport included' },
                  { icon: 'CheckCircleIcon', text: 'Flexible schedule' },
                  { icon: 'CheckCircleIcon', text: 'No hidden fees' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} variant="solid" className="text-[#1A7A3C] shrink-0" />
                    <span className="text-sm text-black/60 font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="light-card rounded-2xl p-5 sm:p-6">
              <h4 className="font-display font-700 text-[#111111] text-sm mb-4 sm:mb-5">Contact Directly</h4>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/601096388803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black/55 hover:text-[#1A7A3C] transition-colors text-sm font-body min-h-[44px]"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} variant="outline" className="text-[#1A7A3C]" />
                  +60 10-963 8803
                </a>
                <a
                  href="mailto:staracad.888@gmail.com"
                  className="flex items-center gap-3 text-black/55 hover:text-[#CC0000] transition-colors text-sm font-body min-h-[44px]"
                >
                  <Icon name="EnvelopeIcon" size={16} variant="outline" className="text-[#CC0000]" />
                  staracad.888@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form — shown first on mobile */}
          <div className="lg:col-span-3 reveal-right order-1 lg:order-2">
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
                      required
                      placeholder="Ahmad bin Abdullah"
                      className="form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px]"
                      suppressHydrationWarning
                      autoComplete="name"
                    />
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
                      required
                      placeholder="+60 12-345 6789"
                      className="form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px]"
                      suppressHydrationWarning
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px]"
                    suppressHydrationWarning
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                {/* License type */}
                <div className="mb-4">
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    License Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'D', label: 'Manual Car (D)', sub: 'Full flexibility' },
                      { value: 'DA', label: 'Auto Car (DA)', sub: 'Easier to learn' },
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
                          className={`p-3 sm:p-3 rounded-xl border transition-all duration-200 min-h-[60px] flex flex-col justify-center ${
                            formData.licenseType === opt.value
                              ? 'border-[#CC0000]/50 bg-[#CC0000]/6'
                              : 'border-black/8 bg-white'
                          }`}
                        >
                          <div className={`font-display font-700 text-sm ${formData.licenseType === opt.value ? 'text-[#CC0000]' : 'text-black/65'}`}>
                            {opt.label}
                          </div>
                          <div className="text-xs text-black/35 font-body mt-0.5">{opt.sub}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Your Location / Area
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Klang, Shah Alam, Petaling Jaya"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px]"
                    suppressHydrationWarning
                    autoComplete="address-level2"
                  />
                </div>

                {/* Message */}
                <div className="mb-5 sm:mb-6">
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any questions or special requirements..."
                    className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                    suppressHydrationWarning
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-display font-700"
                  suppressHydrationWarning
                >
                  <Icon name="BoltIcon" size={18} variant="solid" />
                  Reserve My Spot — Save RM299
                </button>

                <p className="text-center text-xs text-black/30 font-body mt-3">
                  No payment required now. Cikgu Ram will contact you to confirm.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}