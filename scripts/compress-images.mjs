import sharp from 'sharp';
import { statSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const BACKUP_DIR = 'assets-src/originals';

const targets = [
  { src: 'public/cikgu-ram-westport-driving-academy-mobile-hero-section.webp',  resize: { width: 1080 }, format: 'webp', quality: 72 },
  { src: 'public/cikgu-ram-westport-driving-academy-desktop-hero-section.webp', resize: { width: 1920 }, format: 'webp', quality: 74 },
  { src: 'public/cikgu-ram-westport-driving-academy-mobile-desktop-price-section.webp', resize: { width: 768 }, format: 'webp', quality: 75 },
  { src: 'public/stats-bg-1.jpg', resize: { width: 1920 }, format: 'jpeg', quality: 70 },
  { src: 'public/stats-bg-2.jpg', resize: { width: 1920 }, format: 'jpeg', quality: 70 },
  // Logo: shrink + convert to webp (also writes a .webp sibling so existing .png usage can be migrated)
  { src: 'public/assets/images/app_logo.png', out: 'public/assets/images/app_logo.webp', resize: { width: 256 }, format: 'webp', quality: 82, keepOriginal: true },
];

mkdirSync(BACKUP_DIR, { recursive: true });

function fmt(bytes) { return (bytes / 1024).toFixed(0) + ' KB'; }

for (const t of targets) {
  if (!existsSync(t.src)) { console.warn('skip (missing):', t.src); continue; }
  const before = statSync(t.src).size;
  const backupPath = path.join(BACKUP_DIR, path.basename(t.src));
  if (!existsSync(backupPath)) copyFileSync(t.src, backupPath);

  let pipeline = sharp(backupPath).resize(t.resize.width, undefined, { withoutEnlargement: true });
  if (t.format === 'webp') pipeline = pipeline.webp({ quality: t.quality, effort: 6 });
  else if (t.format === 'jpeg') pipeline = pipeline.jpeg({ quality: t.quality, mozjpeg: true });

  const out = t.out || t.src;
  const buf = await pipeline.toBuffer();
  await sharp(buf).toFile(out);
  const after = statSync(out).size;
  console.log(`${path.basename(t.src)} -> ${path.basename(out)}  ${fmt(before)} -> ${fmt(after)}`);
}
