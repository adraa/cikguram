import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './home/components/HeroSection';
import PricingCard from './home/components/PricingCard';
import SocialProofSection from './home/components/SocialProofSection';
import FeaturesSection from './home/components/FeaturesSection';
import FreeTransportSection from './home/components/FreeTransportSection';
import ProcessSection from './home/components/ProcessSection';
import TestimonialsSection from './home/components/TestimonialsSection';
import FAQSection from './home/components/FAQSection';
import ReserveFormSection from './home/components/ReserveFormSection';
import WhatsAppCTA from './home/components/WhatsAppCTA';
import StickyMobileCTA from './home/components/StickyMobileCTA';
import ScrollRevealInit from './home/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'CikguRam — Get Your Driving License Fast in Malaysia',
  description: 'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport, 600+ students passed. Save RM299 today.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  openGraph: {
    title: 'CikguRam — Get Your License Fast',
    description: 'Get your P-License in 5-8 weeks. RM2,349 all-in, free transport, 98% pass rate.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    type: 'website',
    images: [
      {
        url: '/assets/images/app_logo.png',
        width: 1200,
        height: 630,
        alt: 'CikguRam Westport Driving Academy logo and branding',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden pb-20 sm:pb-0">
      <Header />
      <HeroSection />
      <PricingCard />
      <SocialProofSection />
      <FeaturesSection />
      <FreeTransportSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ReserveFormSection />
      <WhatsAppCTA />
      <StickyMobileCTA />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}
