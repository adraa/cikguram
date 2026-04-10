import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { DM_Sans, Manrope, Barlow_Condensed } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#CC0000',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'CikguRam — Get Your Driving License Fast in Malaysia',
  description: 'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport, 600+ students passed. Save RM299 today.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${barlowCondensed.variable}`}>
      <body>
        {children}
        <Script src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fcikguram3493back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" strategy="lazyOnload" />
        <Script src="https://static.rocket.new/rocket-shot.js?v=0.0.2" strategy="lazyOnload" />
      </body>
    </html>
  );
}