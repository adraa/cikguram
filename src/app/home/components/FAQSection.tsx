'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    q: 'How long does it take to get a P-License in Malaysia?',
    a: 'With Cikgu Ram\'s structured program, most students complete their P-License within 5–8 weeks depending on their schedule and availability. We work around your timetable to get you licensed as fast as possible.',
  },
  {
    q: 'Is the RM2,349 package really all-inclusive?',
    a: 'Yes, absolutely. The RM2,349 package includes KPP theory course, computerised theory test, LDL application, all practical training sessions (KPP02 & KPP03), pre-test evaluation, JPJ test fees, all JPJ processing fees, and free transport. There are no hidden charges.',
  },
  {
    q: 'What is the free transport service?',
    a: 'We provide complimentary pick-up and drop-off for all your training sessions and tests. Just let us know your location and we\'ll arrange transport. This is included in your package at no extra cost.',
  },
  {
    q: 'Can I choose between manual (D) and automatic (DA) license?',
    a: 'Yes. We offer both manual car (Class D) and automatic car (Class DA) licenses. Manual license is recommended if you want full flexibility. Automatic is easier to learn and faster to complete. Discuss with Cikgu Ram which suits you best.',
  },
  {
    q: 'What happens if I fail the JPJ test?',
    a: 'We conduct a thorough pre-test evaluation to ensure you are ready before attempting the JPJ test. Our 98% pass rate reflects this preparation. In the unlikely event of a failure, re-test fees apply but Cikgu Ram will provide additional training to ensure you pass on the next attempt.',
  },
  {
    q: 'How do I register and save RM299?',
    a: 'Simply fill in the reservation form on this page or contact Cikgu Ram directly via WhatsApp at +60 10-963 8803. Online registration qualifies you for the RM299 discount automatically. This offer is time-limited so register as soon as possible.',
  },
  {
    q: 'What documents do I need to register?',
    a: 'You will need a copy of your Malaysian IC (MyKad) and two passport-sized photographs. For students under 18, a parent or guardian\'s consent is required. Cikgu Ram\'s team will guide you through the full documentation process.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="section-label">Got Questions?</span>
          <h2 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl text-[#111111] mt-3 mb-4 tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-black/50 font-body max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Everything you need to know about getting your driving license with Cikgu Ram.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-3 sm:space-y-4 reveal delay-100">
          {faqs?.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#CC0000]/25 shadow-card'
                    : 'bg-[#F8F8F6] border-black/6 active:border-black/12'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 sm:gap-5 p-5 sm:p-6 text-left min-h-[60px]"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  suppressHydrationWarning
                >
                  <span className={`font-display font-600 text-sm sm:text-base leading-snug tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#111111]' : 'text-black/70'}`}>
                    {faq?.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#CC0000] rotate-180' : 'bg-black/6'}`}>
                    <Icon name="ChevronDownIcon" size={14} variant="outline" className={isOpen ? 'text-white' : 'text-black/35'} />
                  </div>
                </button>
                <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <p className="text-black/55 font-body text-sm leading-[1.7]">
                      {faq?.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8F8F6] border border-black/8 text-center reveal delay-200">
          <Icon name="ChatBubbleLeftRightIcon" size={28} variant="solid" className="text-[#1A7A3C] mx-auto mb-4" />
          <h3 className="font-display font-700 text-[#111111] text-base sm:text-lg mb-2.5 tracking-tight">
            Still have questions?
          </h3>
          <p className="text-black/50 font-body text-sm mb-5 leading-relaxed">
            Chat directly with Cikgu Ram on WhatsApp. He typically replies within minutes.
          </p>
          <a
            href="https://wa.me/601096388803?text=Hi%20Cikgu%20Ram%2C%20I%20have%20a%20question%20about%20getting%20my%20driving%20license."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1A7A3C] hover:bg-[#22A050] transition-colors duration-300 text-white font-display font-700 text-sm shadow-sm w-full sm:w-auto justify-center"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
            WhatsApp Cikgu Ram
          </a>
        </div>
      </div>
    </section>
  );
}