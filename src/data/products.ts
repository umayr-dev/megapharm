import type { CategoryId } from "@/constants/categories";

export interface Product {
  id: string;
  categoryId: CategoryId;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
}

// Public folder dagi WebP rasmlar nomiga qarab mahsulotlar
const PRODUCT_IMAGES = [
  "БАКТРИМСУБТИЛ (1).webp",
  "БИОБАЛАНС к.webp",
  "БИОБАЛАНС (8).webp",
  "БИФИДУМ БАКТЕРИН.webp",
  "ИМКУР 20 к.webp",
  "ИМКУР 20 саше.webp",
  "ЛАКТО БАКТЕРИН.webp",
  "МЕГА БИФИДУМ 300 мг.webp",
  "МЕГА БИФИДУМ (6).webp",
  "МЕГА ЛАКТО 300 мг .webp",
  "МЕГА ЛАКТО (6).webp",
  "МЕГАВИТА саше (6).webp",
  "ПРО БУЛАРД 20 к.webp",
  "ПРОБИ ЛАЙФ 10 к.webp",
  "ПРОБИ ЛАЙФ (7).webp",
  "ПРОБИНАВ 7+ 10 к.webp",
  "ПРОБИНАВ 7+ (8).webp",
  "ПРОБИНАВ ЛБ+ к.webp",
  "ПРОБИНАВ ЛБ+ (7).webp",
  "ФАРМАТИК (8).webp",
  "ЭНДОФЛОР 10 к.webp",
  "ЭНДОФЛОР (8).webp",
  "ЭНТЕРОНОРМ к.webp",
  "ЭНТЕРОНОРМ (8).webp",
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
