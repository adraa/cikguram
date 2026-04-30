import path from 'path';
import { fileURLToPath } from 'url';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { imageHosts } from './image-hosts.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: imageHosts,
    // OpenNext on Workers: no `IMAGES` binding in wrangler by default (avoids requiring Cloudflare Images).
    // See CLOUDFLARE.md to enable optimization + `images.binding` in wrangler.jsonc.
    unoptimized: true,
  },
  async headers() {
    // Next.js dev mode uses eval() for HMR / React Fast Refresh — allow it locally only
    const isDev = process.env.NODE_ENV === 'development';

    const csp = [
      "default-src 'self'",
      // unsafe-eval: dev only (webpack HMR + React Fast Refresh require it); stripped in production
      // unsafe-inline: required for Next.js hydration scripts and GA tag manager
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://www.google-analytics.com`,
      // Tailwind + inline styles used throughout
      "style-src 'self' 'unsafe-inline'",
      // next/font self-hosts Google Fonts at build time — no external font CDN needed
      "font-src 'self'",
      // Images: self + Next.js image proxy + allowed remote hosts
      "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://images.pixabay.com",
      // Fetch targets: Google Forms (lead capture) + Google Analytics
      "connect-src 'self' https://docs.google.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      // Form POST target
      "form-action 'self' https://docs.google.com",
      // Disallow embedding in iframes (anti-clickjacking)
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy',       value: csp },
          { key: 'X-Frame-Options',               value: 'DENY' },
          { key: 'X-Content-Type-Options',        value: 'nosniff' },
          { key: 'Referrer-Policy',               value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',            value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          { key: 'Strict-Transport-Security',     value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },

  webpack(config, { dev }) {
    if (dev) {
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }
    return config;
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
