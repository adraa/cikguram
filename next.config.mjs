import path from 'path';
import { fileURLToPath } from 'url';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { imageHosts } from './image-hosts.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * `package.json` defines `browserslist` for SWC/autoprefixer. Next’s webpack CSS path uses a
 * vendored Browserslist that does not support `baseline widely available` yet, so we use
 * explicit minimum versions aligned with Baseline-style support (see web.dev baseline + polyfills).
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',
  experimental: {
    /** Tree-shake icon barrel imports — smaller shared chunks + fewer legacy polyfill deps surfaced in Lighthouse. */
    optimizePackageImports: ['@heroicons/react'],
  },
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

    // Google Tag Manager + GA4: https://developers.google.com/tag-platform/security/guides/csp
    const gtmScript =
      'https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://googletagmanager.com';
    const gaScript = 'https://www.google-analytics.com';
    const scriptExtras = `${gtmScript} ${gaScript}`;
    const inlineAndEval = `'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`;

    const csp = [
      "default-src 'self'",
      // unsafe-eval: dev only (HMR); unsafe-inline: Next hydration + GTM bootstrap (see Google CSP guide)
      `script-src 'self' ${inlineAndEval} ${scriptExtras}`,
      // External <script src>; mirrors script hosts so tools that emphasize script-src-elem stay aligned
      `script-src-elem 'self' ${inlineAndEval} ${scriptExtras}`,
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://images.pixabay.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.gstatic.com https://www.gstatic.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://www.google.com",
      "connect-src 'self' https://docs.google.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://region1.google-analytics.com https://www.google.com https://stats.g.doubleclick.net https://*.g.doubleclick.net",
      "form-action 'self' https://docs.google.com",
      "frame-ancestors 'none'",
      "frame-src 'self' https://www.googletagmanager.com",
      "base-uri 'self'",
      "object-src 'none'",
    ].join('; ');

    /**
     * LCP hero — HTTP preload is parsed before `<img>`; without `fetchpriority=high` it can load at
     * low priority and Lighthouse still fails “fetchpriority=high” even when the img has it (see
     * HeroSection `priority` + `fetchPriority="high"`).
     */
    const lcpPreloadMobile =
      '</cikgu-ram-westport-driving-academy-mobile-hero-828.webp>; rel=preload; as=image; fetchpriority=high; media=(max-width:767px)';
    const lcpPreloadDesktop =
      '</cikgu-ram-westport-driving-academy-desktop-hero-section.webp>; rel=preload; as=image; fetchpriority=high; media=(min-width:768px)';

    /** RFC 8288 / RFC 9727: homepage advertises API catalog and docs for agent discovery */
    const homepageDiscoveryLink = [
      lcpPreloadMobile,
      lcpPreloadDesktop,
      '</.well-known/api-catalog>; rel="api-catalog"',
      '</docs/api/spec>; rel="service-desc"',
      '</docs/api>; rel="service-doc"',
      '</docs/api/spec>; rel="describedby"',
    ].join(', ');

    /** Edge/CDN may cache HTML at POPs; browsers revalidate (`max-age=0`) so updates propagate after deploy + CDN TTL. */
    const homepageCacheControl =
      'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400';

    return [
      {
        source: '/',
        headers: [
          { key: 'Link', value: homepageDiscoveryLink },
          { key: 'Cache-Control', value: homepageCacheControl },
        ],
      },
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
        source: '/home',
        destination: '/',
        permanent: true,
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
