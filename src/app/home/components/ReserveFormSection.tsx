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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Calculate form completion progress
  const requiredFields = ['name', 'phone', 'licenseType'];
  const filledRequired = requiredFields.filter(field => formData[field as keyof FormData].trim() !== '').length;
  const progressPercent = Math.round((filledRequired / requiredFields.length) * 100);

  return (
    <section id="register" className="py-12 sm:py-16 lg:py-24 bg-[#F8F8F6] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg hidden lg:block" />
      <div className="glow-blob w-[400px] h-[400px] bg-red-100 top-1/2 right-0 -translate-y-1/2 opacity-50 hidden lg:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14 reveal">
          <span className="section-label">Reserve Your Spot</span>
          <h2 className="font-display font-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#111111] mt-3 mb-3 sm:mb-4 tracking-tight leading-[1.15] sm:leading-[1.1]">
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
                className="light-card rounded-2xl p-4 sm:p-6 lg:p-8 border-t-4 border-t-[#E8B800]"
              >
                {/* Progress bar */}
                <div className="mb-5 sm:mb-6">
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
                      className="h-full bg-gradient-to-r from-[#CC0000] to-[#FF2222] transition-all duration-300 ease-out rounded-full will-change-[width]"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                      Email <span className="text-black/25">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. ahmad@email.com"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                        formData.email ? 'border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
                      }`}
                      suppressHydrationWarning
                      autoComplete="email"
                      inputMode="email"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                      Your Area <span className="text-black/25">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('location')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g. Shah Alam"
                      className={`form-input w-full px-4 py-3 rounded-xl text-sm min-h-[48px] transition-all ${
                        formData.location ? 'border-[#1A7A3C] bg-[#1A7A3C]/[0.02]' : ''
                      }`}
                      suppressHydrationWarning
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                {/* License type - moved to bottom, decision deferred */}
                <div className="mb-5">
                  <label className="block text-xs font-display font-600 text-black/45 uppercase tracking-widest mb-2">
                    Preferred License Type *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'D', label: 'Manual (D)', sub: 'Full flexibility', icon: 'Cog6ToothIcon' },
                      { value: 'DA', label: 'Auto (DA)', sub: 'Easier to learn', icon: 'BoltIcon' },
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

                {/* Message - collapsed by default */}
                <details className="mb-5 sm:mb-6 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between p-3 rounded-xl border border-black/8 hover:border-black/15 transition-colors">
                    <span className="text-xs font-display font-600 text-black/55 uppercase tracking-widest">
                      Add a message (optional)
                    </span>
                    <Icon 
                      name="ChevronDownIcon" 
                      size={16} 
                      variant="outline" 
                      className="text-black/40 transition-transform group-open:rotate-180" 
                    />
                  </summary>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any questions or special requirements..."
                    className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none mt-3"
                    suppressHydrationWarning
                  />
                </details>

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
      </div>
    </section>
  );
}
