import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Manrope, Barlow_Condensed, Space_Grotesk, Roboto } from 'next/font/google';
import '../styles/tailwind.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
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

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

/** Testimonials: Google-style typography without affecting the rest of the site. */
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  variable: '--font-google',
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
  title: 'CikguRam | Get Your Driving License Fast in Malaysia',
  description: 'Register online with Cikgu Ram at Westport Driving Academy. RM2,349 all-in package, free transport, 600+ students passed. Save RM299 today.',
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/png' }],
    shortcut: '/assets/images/app_logo.png',
    apple: '/assets/images/app_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <html
        lang="en"
        className={`${dmSans.variable} ${manrope.variable} ${barlowCondensed.variable} ${spaceGrotesk.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}