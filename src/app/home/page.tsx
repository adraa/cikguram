import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';

// Lazy load below-fold components for faster initial paint
const SocialProofSection = dynamic(() => import('./components/SocialProofSection'), { ssr: true });
const FeaturesSection = dynamic(() => import('./components/FeaturesSection'), { ssr: true });
const FreeTransportSection = dynamic(() => import('./components/FreeTransportSection'), { ssr: true });
const ProcessSection = dynamic(() => import('./components/ProcessSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'), { ssr: true });
const FAQSection = dynamic(() => import('./components/FAQSection'), { ssr: true });
const ReserveFormSection = dynamic(() => import('./components/ReserveFormSection'), { ssr: true });
const WhatsAppCTA = dynamic(() => import('./components/WhatsAppCTA'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const ScrollRevealInit = dynamic(() => import('./components/ScrollRevealInit'), { ssr: false });

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
