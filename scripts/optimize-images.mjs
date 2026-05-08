import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, basename, extname } from "node:path";
import sharp from "sharp";

const TARGETS = [
  "public/case-studies/conversation-steps",
  "public/case-studies/pacemaker-federated-prompt-ready",
];

// Cap visual width for portfolio use (case study body is 680px, so 1400w @2x covers retina)
const MAX_WIDTH = 1600;

async function optimizeDir(rel) {
  const dir = join(process.cwd(), rel);
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.log(`Skipping ${rel}: directory does not exist`);
    return;
  }

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;
    if (basename(file).includes(".optimized")) continue;

    const input = join(dir, file);
    const originalStat = await stat(input);
    const originalBytes = originalStat.size;

    const buffer = await readFile(input);
    const img = sharp(buffer);
    const meta = await img.metadata();
    const targetWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

    // Overwrite with optimized PNG, then write AVIF + WebP alongside
    const base = file.slice(0, -ext.length);

    // Optimized PNG (quality + resize)
    const pngBuf = await sharp(buffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
      .toBuffer();

    // WebP for fallback
    const webpBuf = await sharp(buffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    // AVIF for newest browsers
    const avifBuf = await sharp(buffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .avif({ quality: 60, effort: 6 })
      .toBuffer();

    await writeFile(input, pngBuf);
    await writeFile(join(dir, `${base}.webp`), webpBuf);
    await writeFile(join(dir, `${base}.avif`), avifBuf);

    const pct = (n) => ((1 - n / originalBytes) * 100).toFixed(0);
    console.log(
      `  ${file}: ${(originalBytes / 1024).toFixed(0)}KB → png ${(pngBuf.length / 1024).toFixed(0)}KB (${pct(pngBuf.length)}%) / webp ${(webpBuf.length / 1024).toFixed(0)}KB (${pct(webpBuf.length)}%) / avif ${(avifBuf.length / 1024).toFixed(0)}KB (${pct(avifBuf.length)}%)`
    );
  }
}

for (const dir of TARGETS) {
  console.log(`\n${dir}/`);
  await optimizeDir(dir);
}

// Also compress the About headshot
console.log("\npublic/about/");
const headshot = join(process.cwd(), "public/about/headshot.png");
try {
  const buf = await readFile(headshot);
  const s = await stat(headshot);
  const small = await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  const webp = await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 85 }).toBuffer();
  const avif = await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).avif({ quality: 62 }).toBuffer();
  await writeFile(headshot, small);
  await writeFile(join(process.cwd(), "public/about/headshot.webp"), webp);
  await writeFile(join(process.cwd(), "public/about/headshot.avif"), avif);
  console.log(
    `  headshot.png: ${(s.size / 1024).toFixed(0)}KB → png ${(small.length / 1024).toFixed(0)}KB / webp ${(webp.length / 1024).toFixed(0)}KB / avif ${(avif.length / 1024).toFixed(0)}KB`
  );
} catch (e) {
  console.log("  headshot not found, skipping");
}

console.log("\nDone.");
