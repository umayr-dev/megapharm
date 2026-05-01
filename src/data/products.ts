import type { CategoryId } from "@/constants/categories";

export interface Product {
  id: string;
  categoryId: CategoryId;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
}

// Public folder: WebP rasmlar (dori nomi bilan mos, yengilroq yuklanish)
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
] as const;

const CATEGORIES: CategoryId[] = [
  "broad-spectrum",
  "broad-spectrum",
  "broad-spectrum",
  "broad-spectrum",
  "kids",
  "synbiotics",
  "broad-spectrum",
  "broad-spectrum",
  "broad-spectrum",
  "broad-spectrum",
  "broad-spectrum",
  "vitamins-minerals",
  "saccharomyces",
  "kids",
  "broad-spectrum",
  "kids",
  "broad-spectrum",
  "synbiotics",
  "synbiotics",
  "functional",
  "kids",
  "broad-spectrum",
  "functional",
  "functional",
];

const NAME_KEYS = [
  "product.baktrisubtil",
  "product.biobalansK",
  "product.biobalans",
  "product.bifidumBakterin",
  "product.imkur20k",
  "product.imkur20sashe",
  "product.laktoBakterin",
  "product.megaBifidum300",
  "product.megaBifidum",
  "product.megaLakto300",
  "product.megaLakto",
  "product.megavitaSashe",
  "product.proBulard20k",
  "product.probiLife10k",
  "product.probiLife",
  "product.probinav710k",
  "product.probinav7",
  "product.probinavLbK",
  "product.probinavLb",
  "product.farmatik",
  "product.endoflor10k",
  "product.endoflor",
  "product.enteronormK",
  "product.enteronorm",
] as const;

const DESC_KEYS: string[] = [
  "product.descGeneric", // БАКТРИМСУБТИЛ
  "product.descGeneric", // БИОБАЛАНС к
  "product.descGeneric", // БИОБАЛАНС
  "product.bifidumBakterinDesc", // БИФИДУМ БАКТЕРИН
  "product.descGeneric", // ИМКУР 20 к
  "product.descGeneric", // ИМКУР 20 саше
  "product.laktoBakterinDesc", // ЛАКТО БАКТЕРИН
  "product.megaBifidumDesc", // МЕГА БИФИДУМ 300 мг
  "product.megaBifidumDesc", // МЕГА БИФИДУМ
  "product.megaLaktoDesc", // МЕГА ЛАКТО 300 мг
  "product.megaLaktoDesc", // МЕГА ЛАКТО
  "product.descGeneric", // МЕГАВИТА саше
  "product.descGeneric", // ПРО БУЛАРД 20 к
  "product.descGeneric", // ПРОБИ ЛАЙФ 10 к
  "product.descGeneric", // ПРОБИ ЛАЙФ
  "product.descGeneric", // ПРОБИНАВ 7+ 10 к
  "product.descGeneric", // ПРОБИНАВ 7+
  "product.descGeneric", // ПРОБИНАВ ЛБ+ к
  "product.descGeneric", // ПРОБИНАВ ЛБ+
  "product.descGeneric", // ФАРМАТИК
  "product.descGeneric", // ЭНДОФЛОР 10 к
  "product.descGeneric", // ЭНДОФЛОР
  "product.descGeneric", // ЭНТЕРОНОРМ к
  "product.descGeneric", // ЭНТЕРОНОРМ
];

export const MOCK_PRODUCTS: Product[] = PRODUCT_IMAGES.map((img, i) => ({
  id: String(i + 1),
  categoryId: CATEGORIES[i],
  nameKey: NAME_KEYS[i],
  descriptionKey: DESC_KEYS[i] ?? "product.descGeneric",
  price: 0,
  image: `/${img}`,
}));
