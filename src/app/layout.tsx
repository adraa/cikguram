import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import '../styles/tailwind.css';

/** Only weights/styles used in the app — fewer @font-face blocks in CSS (Lighthouse critical path). */
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#CC0000',
};

const defaultSite = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(defaultSite),
  title: 'CikguRam | Get Your Driving License Fast in Malaysia',
  description:
    'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport, 600+ students passed. Save RM299 today.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: '/',
    siteName: 'CikguRam',
    title: 'CikguRam | Get Your Driving License Fast in Malaysia',
    description:
      'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport, 600+ students passed.',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'CikguRam | Get Your Driving License Fast in Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CikguRam | Get Your Driving License Fast in Malaysia',
    description:
      'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport.',
    images: ['/opengraph-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
