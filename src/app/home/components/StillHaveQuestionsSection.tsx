import React from 'react';
import Icon from '@/components/ui/AppIcon';

/** WhatsApp CTA only (FAQ accordion removed). */
export default function StillHaveQuestionsSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        {/* Still have questions — same block as former FAQSection footer */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl bg-[#F8F8F6] border border-black/8 text-center reveal delay-200">
          <Icon name="ChatBubbleLeftRightIcon" size={28} variant="solid" className="text-[#CC0000] mx-auto mb-4" />
          <h3 className="font-display font-700 text-[#111111] text-base sm:text-lg mb-2.5 tracking-tight">
            Still have questions?
          </h3>
          <p className="text-black/60 font-body text-sm mb-5 leading-relaxed">
            Chat directly with Cikgu Ram on WhatsApp. He typically replies within minutes.
          </p>
          <a
            href="https://wa.me/601096388803?text=Hi%20Cikgu%20Ram%2C%20I%20have%20a%20question%20about%20getting%20my%20driving%20license."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1A7A3C] hover:bg-[#22A050] transition-colors duration-300 text-white font-display font-700 text-sm shadow-sm w-full sm:w-auto justify-center min-h-[48px]"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
            WhatsApp Cikgu Ram
          </a>
        </div>
      </div>
    </section>
  );
}
