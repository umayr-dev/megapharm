import type { Product } from "@/data/products";

export interface ProductExtraInfo {
  releaseForm?: string;
  composition?: string;
  prebiotics?: string;
  fruits?: string;
  vitamins?: string;
  microelements?: string;
  cfu?: string;
}

// DOC/PDF fayldagi jadval asosida to'ldirilgan ma'lumotlar
// Kalitlar `Product.nameKey` qiymatlariga mos keladi
export const PRODUCT_DETAILS: Record<Product["nameKey"], ProductExtraInfo> = {
  // 1. Bifidumbacterin Mega
  "product.bifidumBakterin": {
    releaseForm: "Release form: vial, sachet",
    composition:
      "Bifidobacterium adolescentis 104, Bifidobacterium longum 83, Bifidobacterium bifidum 1, Bifidobacterium longum 17x",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 2. Lactobacterin Mega
  "product.laktoBakterin": {
    releaseForm: "Release form: vial, sachet and capsule",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus thermophilus E-1, Streptococcus lactis E-100",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 3. Farmatik
  "product.farmatik": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Bifidobacterium adolescentis 104, Bifidobacterium longum 83, Bifidobacterium bifidum 1, Bifidobacterium longum 17x, Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus thermophilus E-1, Streptococcus lactis E-10",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
    prebiotics: "Jerusalem artichoke",
  },

  // 4. Megabifidum (Mega Bifidum)
  "product.megaBifidum": {
    releaseForm: "Release form: sachet, capsule and bottles",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 83 (Megabifidum)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.megaBifidum300": {
    releaseForm: "Release form: sachet, capsule and bottles (300 mg)",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 83 (Megabifidum 300 mg)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 5. Megalakto (Mega Lakto)
  "product.megaLakto": {
    releaseForm: "Release form: sachet, capsule and bottles",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4 (Megalakto)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.megaLakto300": {
    releaseForm: "Release form: sachet, capsule and bottles (300 mg)",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4 (Megalakto 300 mg)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 6. BioBalans (Biobalans / Biobalans K)
  "product.biobalans": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium adolescentis, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus thermophilus E-1",
    vitamins: "Vitamin A, Vitamin C, Vitamin D3",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.biobalansK": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium adolescentis, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus thermophilus E-1",
    vitamins: "Vitamin A, Vitamin C, Vitamin D3",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 7. Probinav 7+
  "product.probinav7": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 83, Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus lactis E-1",
    prebiotics: "Topinambur (inulin)",
    microelements: "Zinc Zn+2",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.probinav710k": {
    releaseForm: "Release form: sachet and capsule (10 caps)",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 83, Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Lactobacillus acidophilus E-70, Lactobacillus bulgaricum E-100; Streptococcus lactis E-1",
    prebiotics: "Topinambur (inulin)",
    microelements: "Zinc Zn+2",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 8. Probinav LB+
  "product.probinavLb": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Saccharomyces cerevisiae boulardii; Streptococcus thermophilus E-1",
    microelements: "Zinc Zn+2",
    prebiotics: "Topinambur (inulin)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.probinavLbK": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Saccharomyces cerevisiae boulardii; Streptococcus thermophilus E-1",
    microelements: "Zinc Zn+2",
    prebiotics: "Topinambur (inulin)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 9. Probi Life (Probilayf)
  "product.probiLife": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Bifidobacterium bifidum 1, Lactobacillus acidophilus E-70, Streptococcus thermophilus E-1, Lactobacillus bulgaricum E-100",
    vitamins: "Vitamin D3, Vitamin C",
    microelements: "Zinc Zn+2",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.probiLife10k": {
    releaseForm: "Release form: sachet and capsule (10 caps)",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Bifidobacterium bifidum 1, Lactobacillus acidophilus E-70, Streptococcus thermophilus E-1, Lactobacillus bulgaricum E-100",
    vitamins: "Vitamin D3, Vitamin C",
    microelements: "Zinc Zn+2",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 10. Enteronorm
  "product.enteronorm": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Bifidobacterium bifidum 1, Bifidobacterium longum 83, Lactobacillus acidophilus E-70, Streptococcus thermophilus E-1, Lactobacillus bulgaricum E-100",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.enteronormK": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4, Bifidobacterium bifidum 1, Bifidobacterium longum 83, Lactobacillus acidophilus E-70, Streptococcus thermophilus E-1, Lactobacillus bulgaricum E-100",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 11. Baktrimsubtil
  "product.baktrisubtil": {
    releaseForm: "Release form: sachet and capsule",
    composition: "Bacillus cereus IP5832",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 12. Megavita
  "product.megavitaSashe": {
    releaseForm: "Release form: sachet and bottles",
    composition:
      "Lactobacillus acidophilus E-70, Streptococcus thermophillus E-1, Streptococcus lactis E-10, Lactobacillus bulgaricum E-100",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 13. Pro Bulard
  "product.proBulard20k": {
    releaseForm: "Release form: sachet and capsule",
    composition: "Saccharomyces cerevisiae boulardii",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 14. Endoflor
  "product.endoflor": {
    releaseForm: "Release form: sachet and capsule",
    composition:
      "Streptococcus lactis, Saccharomyces cerevisiae boulardii (Endoflor)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },
  "product.endoflor10k": {
    releaseForm: "Release form: sachet and capsule (10 caps)",
    composition:
      "Streptococcus lactis, Saccharomyces cerevisiae boulardii (Endoflor)",
    cfu: "The number of viable lactobacilli, KOE/g not less than 5×10^9",
  },

  // 15. Imkur (Imkur kids / Imkur)
  "product.imkur20sashe": {
    releaseForm: "Release form: sachet",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 17x, Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4",
    prebiotics: "Ginger, Turmeric, Apple Pectin",
    vitamins: "Vitamin D3, Vitamin C, Vitamin A",
    microelements: "Calcium Ca+2",
    cfu: "The number of viable lactobacilli, KOE/g not less than 1×10^9",
  },
  "product.imkur20k": {
    releaseForm: "Release form: capsule",
    composition:
      "Bifidobacterium bifidum 1, Bifidobacterium longum 17x, Lactobacillus plantarum 8P-A3, Lactobacillus fermentum 90T-C4",
    prebiotics: "Apple pectin",
    vitamins: "Vitamin B2, Vitamin B9",
    cfu: "The number of viable lactobacilli, KOE/g not less than 1×10^9",
  },
};
