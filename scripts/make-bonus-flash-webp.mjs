/**
 * One-off: PNG flash asset → WebP with black/near-black keyed to transparent.
 * Run: node scripts/make-bonus-flash-webp.mjs
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const input =
  process.env.FLASH_PNG ??
  'C:\\Users\\dheep\\.cursor\\projects\\c-Users-dheep-cikguram\\assets\\c__Users_dheep_AppData_Roaming_Cursor_User_workspaceStorage_305707558bb3815b29d3ed4ac274e588_images_Flash__MZBXOeszYmBxvIe03igJDnkbvx0ZxUxcNcSA-1ab9e213-5a4a-4a44-b1c5-888996c80586.png';

const output = join(root, 'src', 'assets', 'bonus-flash.webp');
mkdirSync(dirname(output), { recursive: true });

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
if (channels !== 4) throw new Error(`Expected RGBA, got ${channels} channels`);

const fuzz = Number(process.env.FLASH_BG_FUZZ ?? 42);
for (let i = 0; i < data.length; i += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  if (r <= fuzz && g <= fuzz && b <= fuzz) {
    data[i + 3] = 0;
  }
}

const maxPx = Number(process.env.FLASH_MAX_PX ?? 72);

await sharp(Buffer.from(data), { raw: { width, height, channels: 4 } })
  .trim()
  .resize({
    width: maxPx,
    height: maxPx,
    fit: 'inside',
    withoutEnlargement: false,
  })
  .webp({ quality: 90, alphaQuality: 100, effort: 6 })
  .toFile(output);

console.log('Wrote', output);
