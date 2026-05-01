/**
 * PNG → WebP for pricing hero (square asset; max side 704 ≈ 2× ~672px card).
 * Run: pnpm run optimize:pricing-image
 */
const fs = require('fs');
const path = require('path');

const sharp = require('sharp');

const root = path.join(__dirname, '..');
const input = path.join(
  root,
  'public',
  'cikgu-ram-westport-driving-academy-mobile-desktop-price-section.png',
);
const output = path.join(
  root,
  'public',
  'cikgu-ram-westport-driving-academy-mobile-desktop-price-section-704.webp',
);

/** Card art max ~672 CSS px — ~704 covers 2× without oversized intrinsic bytes (see optimize-perf-images.cjs). */
const MAX_SIDE = 704;

async function main() {
  if (!fs.existsSync(input)) {
    console.error('Missing:', input);
    process.exit(1);
  }

  const meta = await sharp(input).metadata();
  let pipeline = sharp(input);

  if (
    typeof meta.width === 'number' &&
    typeof meta.height === 'number' &&
    (meta.width > MAX_SIDE || meta.height > MAX_SIDE)
  ) {
    pipeline = pipeline.resize(MAX_SIDE, MAX_SIDE, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({ quality: 73, effort: 6, smartSubsample: true })
    .toFile(output);

  const inB = fs.statSync(input).size;
  const outB = fs.statSync(output).size;
  console.log(`Wrote ${path.relative(root, output)} (${outB} bytes, PNG was ${inB} bytes)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
