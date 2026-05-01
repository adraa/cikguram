import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/home/components/HeroSection';
import PricingCard from '@/app/home/components/PricingCard';
import SocialProofSection from '@/app/home/components/SocialProofSection';
import ProcessSection from '@/app/home/components/ProcessSection';
import TestimonialsSection from '@/app/home/components/TestimonialsSection';
import StillHaveQuestionsSection from '@/app/home/components/StillHaveQuestionsSection';
import ReserveFormSection from '@/app/home/components/ReserveFormSection';
import StatsBarSection from '@/app/home/components/StatsBarSection';
import DeferredHomeClient from '@/app/home/components/DeferredHomeClient';

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

      {/* 3. Render deferred components at the very end (dynamic + ssr:false lives in client module) */}
      <DeferredHomeClient />
    </main>
  );
}
