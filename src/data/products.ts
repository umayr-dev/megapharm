import type { CategoryId } from "@/constants/categories";

export interface Product {
  id: string;
  categoryId: CategoryId;
  nameKey: string;
  descriptionKey: string;
  price: number;
  image: string;
}

// Public folder dagi rasmlar nomiga qarab mahsulotlar
const PRODUCT_IMAGES = [
  "БАКТРИМСУБТИЛ.jpg",
  "БИОБАЛАНС к.jpg",
  "БИОБАЛАНС.jpg",
  "БИФИДУМ БАКТЕРИН.jpg",
  "ИМКУР 20 к.jpg",
  "ИМКУР 20 саше.jpg",
  "ЛАКТО БАКТЕРИН.jpg",
  "МЕГА БИФИДУМ 300 мг.jpg",
  "МЕГА БИФИДУМ.jpg",
  "МЕГА ЛАКТО 300 мг .jpg",
  "МЕГА ЛАКТО.jpg",
  "МЕГАВИТА саше.jpg",
  "ПРО БУЛАРД 20 к.jpg",
  "ПРОБИ ЛАЙФ 10 к.jpg",
  "ПРОБИ ЛАЙФ.jpg",
  "ПРОБИНАВ 7+ 10 к.jpg",
  "ПРОБИНАВ 7+.jpg",
  "ПРОБИНАВ ЛБ+ к.jpg",
  "ПРОБИНАВ ЛБ+.jpg",
  "ФАРМАТИК.jpg",
  "ЭНДОФЛОР 10 к.jpg",
  "ЭНДОФЛОР.jpg",
  "ЭНТЕРОНОРМ к.jpg",
  "ЭНТЕРОНОРМ.jpg",
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

export const MOCK_PRODUCTS: Product[] = PRODUCT_IMAGES.map((img, i) => ({
  id: String(i + 1),
  categoryId: CATEGORIES[i],
  nameKey: NAME_KEYS[i],
  descriptionKey: "product.descGeneric",
  price: 0,
  image: `/${img}`,
}));
