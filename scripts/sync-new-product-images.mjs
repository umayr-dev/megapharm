/**
 * public/new-product/ dagi yangi mockup rasmlarni mavjud mahsulot WebP fayllariga almashtiradi.
 * Ishlatish: node scripts/sync-new-product-images.mjs
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const srcDir = path.join(root, "public", "new-product");
const outDir = path.join(root, "public");

/** [yangi JPG, mavjud public WebP nomi] */
const MAP = [
  ["BAKTRIMSUBTIL_mockup.jpg", "БАКТРИМСУБТИЛ (12).webp"],
  ["BIOBALANS_(2)mockup.jpg", "БИОБАЛАНС к (13).webp"],
  ["BIOBALANS_mockup.jpg", "БИОБАЛАНС (14).webp"],
  ["BIFIDUM BAKETRIN_SINK_mockup.jpg", "БИФИДУМ БАКТЕРИН (11).webp"],
  ["IMKUR_KIDS_mockup.jpg", "ИМКУР 20 к (13).webp"],
  ["IMKUR_mockup.jpg", "ИМКУР 20 саше (12).webp"],
  ["LAKTOBAKTERIN_MEGA_mockup.jpg", "ЛАКТО БАКТЕРИН (11).webp"],
  ["MEGA_BIFIDUM_mockup.jpg", "МЕГА БИФИДУМ 300 мг (12).webp"],
  ["MEGA_BIFIDUM_(2) mockup.jpg", "МЕГА БИФИДУМ (12).webp"],
  ["MEGA_LAKTO_mockup.jpg", "МЕГА ЛАКТО 300 мг  (12).webp"],
  ["MEGA_LAKTOBAKTERIN_mockup.jpg", "МЕГА ЛАКТО (12).webp"],
  ["MEGAVITA_mockup.jpg", "МЕГАВИТА саше (12).webp"],
  ["PROBOULARD(250MG)_mockup.jpg", "ПРО БУЛАРД 20 к (12).webp"],
  ["PROBILIFE_mockup.jpg", "ПРОБИ ЛАЙФ 10 к (12).webp"],
  ["PROBILIFE (2)_mockup.jpg", "ПРОБИ ЛАЙФ (13).webp"],
  ["PROBINAV (7+)_mockup.jpg", "ПРОБИНАВ 7+ 10 к (12).webp"],
  ["PROBINAV.jpg", "ПРОБИНАВ 7+ (14).webp"],
  ["LB(+)_PROBINAV_mockup.jpg", "ПРОБИНАВ ЛБ+ к (12).webp"],
  ["LB(+)_PROBINAV_(2) mockup.jpg", "ПРОБИНАВ ЛБ+ (13).webp"],
  ["FARMATIK_mockup.jpg", "ФАРМАТИК (14).webp"],
  ["ENDOFLOR_mockup.jpg", "ЭНДОФЛОР 10 к (12).webp"],
  ["ENDOFLOR.jpg", "ЭНДОФЛОР (14).webp"],
  ["ENTERONORM_mockup.jpg", "ЭНТЕРОНОРМ к (12).webp"],
  ["ENTERONORM_(2) mockup.jpg", "ЭНТЕРОНОРМ (14).webp"],
];

let ok = 0;
for (const [srcName, destName] of MAP) {
  const src = path.join(srcDir, srcName);
  const dest = path.join(outDir, destName);
  try {
    await fs.access(src);
  } catch {
    console.error(`SKIP (topilmadi): ${srcName}`);
    continue;
  }
  const before = (await fs.stat(dest).catch(() => null))?.size ?? 0;
  await sharp(src)
    .rotate()
    .webp({ quality: 88, effort: 4 })
    .toFile(dest);
  const after = (await fs.stat(dest)).size;
  console.log(
    `${srcName}\n  → ${destName}  (${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB)`,
  );
  ok++;
}

console.log(`\n${ok}/${MAP.length} ta rasm yangilandi.`);
