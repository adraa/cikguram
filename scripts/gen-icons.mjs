import sharp from 'sharp';
import { mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SRC = 'assets-src/logo-master.png';
const APP_DIR = 'src/app';
const PUBLIC_DIR = 'public';
const BRAND_BG = { r: 204, g: 0, b: 0, alpha: 1 };

async function main() {
  if (!existsSync(SRC)) throw new Error(`source not found: ${SRC}`);
  await mkdir(APP_DIR, { recursive: true });
  await mkdir(PUBLIC_DIR, { recursive: true });

  await sharp(SRC).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(path.join(APP_DIR, 'icon.png'));

  await sharp(SRC).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(APP_DIR, 'apple-icon.png'));

  const logoSize = 520;
  const logoBuffer = await sharp(SRC).resize(logoSize, logoSize, { fit: 'contain' }).png().toBuffer();
  const ogBuffer = await sharp({ create: { width: 1200, height: 630, channels: 3, background: BRAND_BG } })
    .composite([{ input: logoBuffer, gravity: 'center' }])
    .png()
    .toBuffer();

  await sharp(ogBuffer)
    .jpeg({ quality: 82, progressive: false, chromaSubsampling: '4:2:0', mozjpeg: true })
    .toFile(path.join(PUBLIC_DIR, 'opengraph-image.jpg'));

  await sharp(ogBuffer)
    .png({ compressionLevel: 9 })
    .toFile(path.join(PUBLIC_DIR, 'og-share-v2.png'));

  console.log('generated: icon.png, apple-icon.png, public/opengraph-image.jpg, public/og-share-v2.png');
}

main().catch((e) => { console.error(e); process.exit(1); });
