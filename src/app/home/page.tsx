import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import FreeTransportSection from './components/FreeTransportSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ReserveFormSection from './components/ReserveFormSection';
import StickyMobileCTA from './components/StickyMobileCTA';
import ScrollRevealInit from './components/ScrollRevealInit';

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
      <StickyMobileCTA />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}