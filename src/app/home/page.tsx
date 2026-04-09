import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import FreeTransportSection from './components/FreeTransportSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ReserveFormSection from './components/ReserveFormSection';
import WhatsAppCTA from './components/WhatsAppCTA';
import Footer from '@/components/Footer';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
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
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}
