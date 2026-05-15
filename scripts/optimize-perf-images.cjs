/**
 * Resize heavy first-party images for mobile Lighthouse / LCP (project uses next/image + unoptimized).
 * Run: pnpm run optimize:perf-images
 */
const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const root = path.join(__dirname, '..');

async function writeWebpFromFile(inputRel, outputRel, resizeWidth, webpOpts) {
  const input = path.join(root, inputRel);
  const output = path.join(root, outputRel);
  if (!fs.existsSync(input)) {
    console.error('Missing:', inputRel);
    process.exit(1);
  }

  const inputBuf = fs.readFileSync(input);
  let pipeline = sharp(inputBuf);
  if (resizeWidth) {
    pipeline = pipeline.resize(resizeWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  const buf = await pipeline.webp(webpOpts).toBuffer();
  const tmp = `${output}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, buf);
  try {
    if (fs.existsSync(output)) fs.unlinkSync(output);
    fs.renameSync(tmp, output);
  } catch {
    fs.copyFileSync(tmp, output);
    fs.unlinkSync(tmp);
  }
  const meta = await sharp(buf).metadata();
  console.log(
    `Wrote ${outputRel} → ${meta.width}x${meta.height} (${Math.round(buf.length / 1024)} KiB)`,
  );
}

async function main() {
  // LCP mobile hero (45-day fast-track creative): PNG master → WebP.
  await writeWebpFromFile(
    'public/cikgu-ram-westport-driving-academy-mobile-hero-45-days-fast-track.png',
    'public/cikgu-ram-westport-driving-academy-mobile-hero-45-days-fast-track.webp',
    828,
    { quality: 78, effort: 6, smartSubsample: true },
  );

  // LCP mobile hero: PNG master → WebP (≤828w wide, ~2× for common phone widths; q78 balances size vs clarity).
  await writeWebpFromFile(
    'public/cikgu-ram-westport-driving-academy-mobile-hero-section-final.png',
    'public/cikgu-ram-westport-driving-academy-mobile-hero-section-final.webp',
    828,
    { quality: 78, effort: 6, smartSubsample: true },
  );

  await writeWebpFromFile(
    'public/cikgu-ram-westport-driving-academy-mobile-hero-section-new.png',
    'public/cikgu-ram-westport-driving-academy-mobile-hero-section-new.webp',
    828,
    { quality: 78, effort: 6, smartSubsample: true },
  );

  // Hero mobile: 828px wide WebP (2:3 → 828×1242) — separate filename avoids Windows locks when `pnpm dev` serves the hero.
  await writeWebpFromFile(
    'public/cikgu-ram-westport-driving-academy-new-mobile-hero-section.webp',
    'public/cikgu-ram-westport-driving-academy-new-mobile-hero-828.webp',
    828,
    { quality: 84, effort: 6, smartSubsample: true },
  );

  await writeWebpFromFile(
    'public/cikgu-ram-westport-driving-academy-new-desktop-hero-section.webp',
    'public/cikgu-ram-westport-driving-academy-new-desktop-hero-section.webp',
    1920,
    { quality: 74, effort: 6, smartSubsample: true },
  );

  // Stats band: displayed ~721px wide on Moto G-style audits — serve ~960px WebP instead of 1920 JPG.
  await writeWebpFromFile(
    'public/stats-bg-1.jpg',
    'public/stats-bg-1.webp',
    960,
    { quality: 78, effort: 6, smartSubsample: true },
  );
  await writeWebpFromFile(
    'public/stats-bg-2.jpg',
    'public/stats-bg-2.webp',
    960,
    { quality: 78, effort: 6, smartSubsample: true },
  );

  // Logo: separate path avoids transient locks on `app_logo.webp` while IDE/sync holds it open.
  await writeWebpFromFile(
    'public/assets/images/app_logo.webp',
    'public/assets/images/app_logo-112.webp',
    112,
    { quality: 82, effort: 6, smartSubsample: true },
  );

  // Pricing square: prefer PNG master; fallback resizes existing WebP into a staging file then swaps.
  const pricingPngRel = 'public/cikgu-ram-westport-driving-academy-mobile-desktop-price-section.png';
  const pricingWebpRel =
    'public/cikgu-ram-westport-driving-academy-mobile-desktop-price-section.webp';
  const pricingOut704Rel =
    'public/cikgu-ram-westport-driving-academy-mobile-desktop-price-section-704.webp';

  if (fs.existsSync(path.join(root, pricingPngRel))) {
    await writeWebpFromFile(pricingPngRel, pricingOut704Rel, 704, {
      quality: 73,
      effort: 6,
      smartSubsample: true,
    });
  } else {
    await writeWebpFromFile(pricingWebpRel, pricingOut704Rel, 704, {
      quality: 73,
      effort: 6,
      smartSubsample: true,
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
