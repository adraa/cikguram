import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
import SocialProofSection from './components/SocialProofSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import StillHaveQuestionsSection from './components/StillHaveQuestionsSection';
import ReserveFormSection from './components/ReserveFormSection';
import StatsBarSection from './components/StatsBarSection';
import StickyMobileCTA from './components/StickyMobileCTA';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <HeroSection />
      <Header />
      <PricingCard />

      {/* Visual break between pricing and register */}
      <div className="bg-[#F8F8F6] py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-black/12 to-transparent" />
        </div>
      </div>

      <ReserveFormSection />
      <StatsBarSection />
      <SocialProofSection />
      <ProcessSection />
      <TestimonialsSection />
      <StillHaveQuestionsSection />
      <Footer />
      <ScrollRevealInit />
    </main>
  );
}