// Optimize generated AI images to web-friendly WebP + AVIF.
// Hero/product shots → 1920px max width, quality 80
// Testimonials → 480px max width, quality 80
// Run before build: `node scripts/optimize-images.mjs`

import sharp from "sharp";
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";

const SRC = "public/generated";
const OUT = "public/img";

const PROFILES = {
  hero: { maxWidth: 2400, quality: 82 },
  product: { maxWidth: 1600, quality: 82 },
  bg: { maxWidth: 1920, quality: 78 },
  testimonial: { maxWidth: 480, quality: 80 },
};

function profileFor(name) {
  if (name.startsWith("hero-")) return PROFILES.hero;
  if (name.startsWith("product-")) return PROFILES.product;
  if (name.startsWith("bg-")) return PROFILES.bg;
  if (name.startsWith("testimonial-")) return PROFILES.testimonial;
  return PROFILES.product;
}

async function fileSize(path) {
  try {
    const s = await stat(path);
    return s.size;
  } catch {
    return 0;
  }
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) =>
    /\.(jpg|jpeg|png)$/i.test(f)
  );

  console.log(`Found ${files.length} source images. Optimizing →\n`);

  let totalIn = 0;
  let totalOut = 0;

  for (const file of files) {
    const { name } = parse(file);
    const inPath = join(SRC, file);
    const profile = profileFor(name);
    const inputBytes = await fileSize(inPath);
    totalIn += inputBytes;

    const webpPath = join(OUT, `${name}.webp`);
    const jpgPath = join(OUT, `${name}.jpg`);

    await sharp(inPath)
      .resize({ width: profile.maxWidth, withoutEnlargement: true })
      .webp({ quality: profile.quality, effort: 6 })
      .toFile(webpPath);

    await sharp(inPath)
      .resize({ width: profile.maxWidth, withoutEnlargement: true })
      .jpeg({ quality: profile.quality, mozjpeg: true, progressive: true })
      .toFile(jpgPath);

    const webpBytes = await fileSize(webpPath);
    const jpgBytes = await fileSize(jpgPath);
    totalOut += webpBytes;

    console.log(
      `  ${name.padEnd(42)}  ${fmtKB(inputBytes).padStart(8)} → webp ${fmtKB(webpBytes).padStart(8)}  jpg ${fmtKB(jpgBytes)}`
    );
  }

  console.log(
    `\nTotal: ${fmtKB(totalIn)} → ${fmtKB(totalOut)} (webp) — ${(
      (1 - totalOut / totalIn) *
      100
    ).toFixed(1)}% smaller`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
