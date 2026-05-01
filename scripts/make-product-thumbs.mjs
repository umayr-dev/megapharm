/**
 * Katalog uchun yengil preview (max ~320px, WebP).
 * Ishlatish: npm run thumbs
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const publicDir = path.join(process.cwd(), "public");
const outDir = path.join(publicDir, "product-thumbs");

await fs.mkdir(outDir, { recursive: true });
const files = (await fs.readdir(publicDir)).filter((f) => f.endsWith(".webp"));

let totalIn = 0;
let totalOut = 0;

for (const f of files) {
  const src = path.join(publicDir, f);
  const dest = path.join(outDir, f);
  const inStat = await fs.stat(src);
  totalIn += inStat.size;
  await sharp(src)
    .rotate()
    .resize(420, 420, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(dest);
  const outStat = await fs.stat(dest);
  totalOut += outStat.size;
  console.log(`${(inStat.size / 1024).toFixed(0)}KB → ${(outStat.size / 1024).toFixed(0)}KB  ${f}`);
}

console.log(
  `\nJami: ${(totalIn / 1024).toFixed(0)} KB → ${(totalOut / 1024).toFixed(0)} KB (~${((1 - totalOut / totalIn) * 100).toFixed(0)}% tejash)`,
);
