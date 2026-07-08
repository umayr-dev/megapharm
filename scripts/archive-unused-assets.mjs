/**
 * Saytda ishlatilmaydigan rasmlarni public/unused-media/ ga ko‘chiradi.
 * Ishlatish: node scripts/archive-unused-assets.mjs
 */
import fs from "fs/promises";
import path from "path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const archiveDir = path.join(publicDir, "unused-media");

const PRODUCT_IMAGES = [
  "БАКТРИМСУБТИЛ (12).webp",
  "БИОБАЛАНС к (13).webp",
  "БИОБАЛАНС (14).webp",
  "БИФИДУМ БАКТЕРИН (11).webp",
  "ИМКУР 20 к (13).webp",
  "ИМКУР 20 саше (12).webp",
  "ЛАКТО БАКТЕРИН (11).webp",
  "МЕГА БИФИДУМ 300 мг (12).webp",
  "МЕГА БИФИДУМ (12).webp",
  "МЕГА ЛАКТО 300 мг  (12).webp",
  "МЕГА ЛАКТО (12).webp",
  "МЕГАВИТА саше (12).webp",
  "ПРО БУЛАРД 20 к (12).webp",
  "ПРОБИ ЛАЙФ 10 к (12).webp",
  "ПРОБИ ЛАЙФ (13).webp",
  "ПРОБИНАВ 7+ 10 к (12).webp",
  "ПРОБИНАВ 7+ (14).webp",
  "ПРОБИНАВ ЛБ+ к (12).webp",
  "ПРОБИНАВ ЛБ+ (13).webp",
  "ФАРМАТИК (14).webp",
  "ЭНДОФЛОР 10 к (12).webp",
  "ЭНДОФЛОР (14).webp",
  "ЭНТЕРОНОРМ к (12).webp",
  "ЭНТЕРОНОРМ (14).webp",
];

const KEEP_ROOT = new Set([...PRODUCT_IMAGES, "logo.png", "favicon.svg"]);

const KEEP_PDF = new Set([
  "certificate/23-E-1461_Rev.0_Mega.pdf",
  "certificate/Свидетельство_о_государственной_регистрации_продукции_Выдача_разрешительного.pdf",
  "patent/Свидетельство_MGU 43106_МЕВАВИТ.pdf",
  "patent/Энтеронорм патент.pdf",
  "patent/Свидетельство_о_рег_МЕГАЛАЙФ_MGU_37714.pdf",
  "patent/Пробилайф патент.pdf",
  "patent/Свидетельство_о_рег_СИМБИЛАЙФ_MGU_37712.pdf",
  "patent/Свидетельство_о_рег_НОРМОСПЕР_MGU_37713.pdf",
  "patent/Свидетельство_о_рег_ИММУЛАБС_MGU_37715.pdf",
  "patent/Свидетельство_MGU 47373_МЕГАВИТА.pdf",
]);

const thumbKeep = new Set(PRODUCT_IMAGES);

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function moveToArchive(relPath) {
  if (relPath.startsWith("unused-media")) return;
  const src = path.join(publicDir, relPath);
  const dest = path.join(archiveDir, relPath);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.rename(src, dest);
  console.log("  →", relPath);
}

async function main() {
  await fs.mkdir(archiveDir, { recursive: true });
  let moved = 0;

  // public root fayllar
  const rootFiles = await fs.readdir(publicDir, { withFileTypes: true });
  for (const ent of rootFiles) {
    if (!ent.isFile()) continue;
    if (KEEP_ROOT.has(ent.name)) continue;
    await moveToArchive(ent.name);
    moved++;
  }

  // product-thumbs
  const thumbsDir = path.join(publicDir, "product-thumbs");
  if (await exists(thumbsDir)) {
    for (const f of await fs.readdir(thumbsDir)) {
      if (thumbKeep.has(f)) continue;
      await moveToArchive(`product-thumbs/${f}`);
      moved++;
    }
  }

  // new-product butun papka
  const newProduct = path.join(publicDir, "new-product");
  if (await exists(newProduct)) {
    const dest = path.join(archiveDir, "new-product");
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.rename(newProduct, dest);
    console.log("  → new-product/ (butun papka)");
    moved++;
  }

  // certificate / patent — faqat ishlatilmagan PDF
  for (const folder of ["certificate", "patent"]) {
    const dir = path.join(publicDir, folder);
    if (!(await exists(dir))) continue;
    for (const f of await fs.readdir(dir)) {
      const rel = `${folder}/${f}`;
      if (KEEP_PDF.has(rel)) continue;
      await moveToArchive(rel);
      moved++;
    }
  }

  console.log(`\nJami ${moved} ta fayl/papka unused-media/ ga ko‘chirildi.`);
  console.log(`Joylashuv: public/unused-media/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
