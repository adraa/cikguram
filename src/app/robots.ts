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
/**
 * Link-preview / unfurl crawlers used by social platforms and chat apps.
 * Explicitly allowed (not just covered by `*`) so debuggers like Facebook's
 * Sharing Debugger don't conservatively report "blocked by robots.txt" when
 * they see sibling Meta/Facebook UAs in the disallow list.
 */
const LINK_PREVIEW_USER_AGENTS = [
  'facebookexternalhit', // Facebook + WhatsApp link previews
  'meta-externalfetcher', // Newer Meta unfurl crawler
  'Twitterbot', // X / Twitter cards
  'LinkedInBot', // LinkedIn previews
  'Slackbot', // Slack unfurls
  'Slackbot-LinkExpanding',
  'Discordbot', // Discord embeds
  'TelegramBot', // Telegram link previews
  'WhatsApp', // WhatsApp legacy preview UA
  'Pinterest',
] as const;

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

  const linkPreviewAllowRules: MetadataRoute.Robots['rules'] = LINK_PREVIEW_USER_AGENTS.map(
    (userAgent) => ({
      userAgent,
      allow: '/',
    })
  );

  const trainingOptOutRules: MetadataRoute.Robots['rules'] = AI_TRAINING_USER_AGENTS.map(
    (userAgent) => ({
      userAgent,
      disallow: '/',
    })
  );

  return {
    rules: [
      ...linkPreviewAllowRules,
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
