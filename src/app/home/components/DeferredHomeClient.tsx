'use client';

import dynamic from 'next/dynamic';

// 1. Client-heavy scripts — separate chunks, no SSR so they don't block the mobile main thread
const ScrollRevealInit = dynamic(() => import('@/app/home/components/ScrollRevealInit'), {
  ssr: false,
});

// 2. WhatsApp button — same pattern
const WhatsAppCTA = dynamic(() => import('@/app/home/components/WhatsAppCTA'), { ssr: false });

/** 3. Render at the end of the page so critical content paints first. */
export default function DeferredHomeClient() {
  return (
    <>
      <ScrollRevealInit />
      <WhatsAppCTA />
    </>
  );
}
