import { MetadataRoute } from 'next';

/**
 * User-agents that declare AI / ML dataset or training use; compliant crawlers
 * will not fetch site content for those purposes when Disallow: / is set.
 * This is a voluntary signal — not legal protection or a security boundary.
 *
 * We intentionally do not block retrieval/product bots (e.g. ChatGPT-User,
 * PerplexityBot, OAI-SearchBot) so ordinary search and live citations can
 * still work; tighten those separately if you want zero AI access.
 */
const AI_TRAINING_USER_AGENTS = [
  'GPTBot', // OpenAI model training
  'Google-Extended', // Google Gemini / generative features training (not Google Search ranking)
  'anthropic-ai', // Anthropic training collection
  'ClaudeBot', // Anthropic crawling (often blocked alongside training opt-out)
  'CCBot', // Common Crawl (widely used in AI datasets)
  'Bytespider', // ByteDance
  'Applebot-Extended', // Apple Intelligence / extended crawling
  'Applebot', // Apple general crawler (aligns with Cloudflare AI bot list; may affect Siri/Spotlight discovery)
  'Amazonbot', // Amazon AI services
  'FacebookBot', // Meta
  'Meta-ExternalAgent', // Meta external / AI-related crawling
  'cohere-ai',
  'AI2Bot',
  'Omgilibot',
  'PetalBot',
  'Diffbot',
  'magpie-crawler',
] as const;

export default function robots(): MetadataRoute.Robots {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const baseUrl = raw.replace(/\/$/, '');

  const trainingOptOutRules: MetadataRoute.Robots['rules'] = AI_TRAINING_USER_AGENTS.map(
    (userAgent) => ({
      userAgent,
      disallow: '/',
    })
  );

  return {
    rules: [
      ...trainingOptOutRules,
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
