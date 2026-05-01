/**
 * Klinik tavsiflar (foydalanuvchi bergan rus matniga asoslangan + EN tarjima).
 * ProductDetail sahifasida ko‘rsatiladi.
 */
import type { Product } from "@/data/products";

export interface ClinicalLocaleBlock {
  /** Masalan: "1. Для ежедневного поддержания кишечника" */
  program: string;
  /** "Подходит: ..." */
  audience?: string;
  /** Qisqa bakteriyalar qatori */
  keyBacteria: string;
  /** Ta’sir / qo‘llanish */
  effect: string;
}

export type ProductClinical = {
  ru: ClinicalLocaleBlock;
  en: ClinicalLocaleBlock;
};

export const PRODUCT_CLINICAL: Partial<Record<Product["nameKey"], ProductClinical>> =
  {
    "product.bifidumBakterin": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria:
          "Bifidobacterium adolescentis, B. longum, B. bifidum",
        effect: "Нормализация микрофлоры кишечника.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria:
          "Bifidobacterium adolescentis, B. longum, B. bifidum",
        effect: "Helps normalize intestinal microflora.",
      },
    },
    "product.megaBifidum": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria: "B. bifidum, B. longum",
        effect:
          "Подходит с рождения; поддержка микрофлоры. В комбинации с Mega Lakto (схема «Mega Bifidum + Mega Lakto»): нормализация микрофлоры и улучшение пищеварения (B. longum, B. bifidum, L. plantarum, L. fermentum).",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria: "B. bifidum, B. longum",
        effect:
          "Suitable from birth; microbiome support. Combined with Mega Lakto: normalization of microflora and better digestion (B. longum, B. bifidum, L. plantarum, L. fermentum).",
      },
    },
    "product.megaBifidum300": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria: "B. bifidum, B. longum",
        effect:
          "Подходит с рождения; поддержка микрофлоры. В комбинации с Mega Lakto: нормализация микрофлоры и улучшение пищеварения.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria: "B. bifidum, B. longum",
        effect:
          "Suitable from birth; microbiome support. With Mega Lakto: normalization of microflora and digestion.",
      },
    },
    "product.endoflor": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria: "Streptococcus lactis, Saccharomyces boulardii",
        effect: "Поддержка и нормализация кишечной микрофлоры.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria: "Streptococcus lactis, Saccharomyces boulardii",
        effect: "Supports and helps normalize intestinal microflora.",
      },
    },
    "product.endoflor10k": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria: "Streptococcus lactis, Saccharomyces boulardii",
        effect: "Поддержка и нормализация кишечной микрофлоры.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria: "Streptococcus lactis, Saccharomyces boulardii",
        effect: "Supports and helps normalize intestinal microflora.",
      },
    },
    "product.enteronorm": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, B. longum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Комплексное восстановление микрофлоры кишечника.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, B. longum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Broad support for restoring intestinal microflora.",
      },
    },
    "product.enteronormK": {
      ru: {
        program: "1. Для ежедневного поддержания кишечника",
        audience:
          "Подходит всем, кто хочет поддерживать микрофлору и пищеварение.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, B. longum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Комплексное восстановление микрофлоры кишечника.",
      },
      en: {
        program: "1. Daily intestinal support",
        audience:
          "For anyone who wants to support microbiome balance and digestion.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, B. longum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Broad support for restoring intestinal microflora.",
      },
    },
    "product.imkur20sashe": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Детям и взрослым, кто хочет одновременно улучшить кишечник и защиту организма. (Формат: Imkur для детей / саше)",
        keyBacteria: "B. bifidum, B. longum, L. plantarum, L. fermentum",
        effect:
          "Пребиотики: имбирь, куркума, яблочный пектин; витамины D3, C, A; кальций. Поддержка кишечника, иммунитета, общий тонус.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Children and adults who want to support gut health and natural defenses. (Kids / sachet format)",
        keyBacteria: "B. bifidum, B. longum, L. plantarum, L. fermentum",
        effect:
          "Prebiotics: ginger, turmeric, apple pectin; vitamins D3, C, A; calcium. Supports gut, immunity and general well-being.",
      },
    },
    "product.imkur20k": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Взрослым, кто хочет поддержать микрофлору и иммунитет. (Формат: капсулы)",
        keyBacteria: "B. longum, B. bifidum, L. fermentum, L. plantarum",
        effect:
          "Пребиотик: яблочный пектин; витамины B2, B9. Поддержка микрофлоры и иммунитета.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Adults who want to support microbiome and immunity. (Capsule format)",
        keyBacteria: "B. longum, B. bifidum, L. fermentum, L. plantarum",
        effect:
          "Prebiotic: apple pectin; vitamins B2, B9. Supports microflora and immunity.",
      },
    },
    "product.farmatik": {
      ru: {
        program: "2. Для укрепления иммунитета · 5. Для диабетиков",
        audience:
          "Тем, кто хочет поддержать кишечник и иммунитет; подходит при контроле уровня сахара (по назначению врача).",
        keyBacteria:
          "B. adolescentis, B. longum, B. bifidum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus, S. lactis",
        effect:
          "Пребиотик: инулин (топинамбур). Поддержка кишечника и иммунитета; может использоваться в рационе при диабете.",
      },
      en: {
        program: "2. Immune support · 5. Diabetes-friendly use",
        audience:
          "Those who want gut and immune support; may suit people monitoring blood sugar (as advised by a doctor).",
        keyBacteria:
          "B. adolescentis, B. longum, B. bifidum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus, S. lactis",
        effect:
          "Prebiotic: inulin (Jerusalem artichoke). Gut and immune support; suitable for many people with diabetes as part of diet.",
      },
    },
    "product.probiLife": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Детям и взрослым для восстановления микрофлоры после болезней и поддержки иммунитета.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, L. acidophilus, Streptococcus thermophilus, L. bulgaricum",
        effect:
          "Витамины D3, C; цинк. Восстановление микрофлоры после болезней, поддержка иммунитета.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Children and adults for microbiome recovery after illness and immune support.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, L. acidophilus, Streptococcus thermophilus, L. bulgaricum",
        effect:
          "Vitamins D3, C; zinc. Recovery of microflora after illness; immune support.",
      },
    },
    "product.probiLife10k": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Детям и взрослым для восстановления микрофлоры после болезней и поддержки иммунитета.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, L. acidophilus, Streptococcus thermophilus, L. bulgaricum",
        effect:
          "Витамины D3, C; цинк. Восстановление микрофлоры после болезней, поддержка иммунитета.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Children and adults for microbiome recovery after illness and immune support.",
        keyBacteria:
          "L. plantarum, L. fermentum, B. bifidum, L. acidophilus, Streptococcus thermophilus, L. bulgaricum",
        effect:
          "Vitamins D3, C; zinc. Recovery of microflora after illness; immune support.",
      },
    },
    "product.biobalans": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Детям и взрослым для витаминной поддержки и иммунитета.",
        keyBacteria:
          "B. bifidum, B. adolescentis, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect:
          "Витамины A, C, D3. Восполнение витаминов и поддержка иммунитета.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Children and adults for vitamin support and immunity.",
        keyBacteria:
          "B. bifidum, B. adolescentis, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Vitamins A, C, D3. Vitamin replenishment and immune support.",
      },
    },
    "product.biobalansK": {
      ru: {
        program: "2. Для укрепления иммунитета",
        audience:
          "Детям и взрослым для витаминной поддержки и иммунитета.",
        keyBacteria:
          "B. bifidum, B. adolescentis, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect:
          "Витамины A, C, D3. Восполнение витаминов и поддержка иммунитета.",
      },
      en: {
        program: "2. Immune support",
        audience:
          "Children and adults for vitamin support and immunity.",
        keyBacteria:
          "B. bifidum, B. adolescentis, L. acidophilus, L. bulgaricum, Streptococcus thermophilus",
        effect: "Vitamins A, C, D3. Vitamin replenishment and immune support.",
      },
    },
    "product.laktoBakterin": {
      ru: {
        program: "3. Для женского здоровья",
        audience:
          "Для поддержки влагалищной микрофлоры и общего женского здоровья.",
        keyBacteria:
          "L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus, S. lactis",
        effect:
          "Создаёт благоприятную среду для женского организма.",
      },
      en: {
        program: "3. Women’s health",
        audience:
          "For supporting vaginal microflora and overall women’s wellness.",
        keyBacteria:
          "L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, Streptococcus thermophilus, S. lactis",
        effect: "Helps maintain a favourable environment for women’s health.",
      },
    },
    "product.megaLakto": {
      ru: {
        program: "3. Для женского здоровья",
        audience:
          "Для поддержки влагалищной микрофлоры и общего женского здоровья.",
        keyBacteria: "Lactobacillus plantarum, Lactobacillus fermentum",
        effect:
          "Поддержка женской микрофлоры и создание благоприятной среды. В комбинации с Mega Bifidum — нормализация микрофлоры кишечника.",
      },
      en: {
        program: "3. Women’s health",
        audience:
          "For supporting vaginal microflora and overall women’s wellness.",
        keyBacteria: "Lactobacillus plantarum, Lactobacillus fermentum",
        effect:
          "Supports women’s microflora. With Mega Bifidum: intestinal microflora balance.",
      },
    },
    "product.megaLakto300": {
      ru: {
        program: "3. Для женского здоровья",
        audience:
          "Для поддержки влагалищной микрофлоры и общего женского здоровья.",
        keyBacteria: "Lactobacillus plantarum, Lactobacillus fermentum",
        effect:
          "Поддержка женской микрофлоры и благоприятная среда. В комбинации с Mega Bifidum — поддержка кишечника.",
      },
      en: {
        program: "3. Women’s health",
        audience:
          "For supporting vaginal microflora and overall women’s wellness.",
        keyBacteria: "Lactobacillus plantarum, Lactobacillus fermentum",
        effect:
          "Supports women’s microflora. With Mega Bifidum: gut support.",
      },
    },
    "product.probinavLb": {
      ru: {
        program: "4. Восстановление после болезней (ОРВИ, антибиотики, дисбактериоз)",
        audience:
          "После инфекций, антибиотиков или при дисбактериозе.",
        keyBacteria: "Streptococcus thermophilus, Saccharomyces boulardii",
        effect:
          "Пребиотик: инулин (топинамбур); цинк. Восстановление микрофлоры после ОРВИ.",
      },
      en: {
        program: "4. Recovery after illness (colds, antibiotics, dysbiosis)",
        audience: "After infections, antibiotics or dysbiosis.",
        keyBacteria: "Streptococcus thermophilus, Saccharomyces boulardii",
        effect:
          "Prebiotic: inulin; zinc. Microflora recovery after acute respiratory infections.",
      },
    },
    "product.probinavLbK": {
      ru: {
        program: "4. Восстановление после болезней (ОРВИ, антибиотики, дисбактериоз)",
        audience:
          "После инфекций, антибиотиков или при дисбактериозе.",
        keyBacteria: "Streptococcus thermophilus, Saccharomyces boulardii",
        effect:
          "Пребиотик: инулин (топинамбур); цинк. Восстановление микрофлоры после ОРВИ.",
      },
      en: {
        program: "4. Recovery after illness (colds, antibiotics, dysbiosis)",
        audience: "After infections, antibiotics or dysbiosis.",
        keyBacteria: "Streptococcus thermophilus, Saccharomyces boulardii",
        effect:
          "Prebiotic: inulin; zinc. Microflora recovery after acute respiratory infections.",
      },
    },
    "product.proBulard20k": {
      ru: {
        program: "4. Восстановление после болезней",
        audience:
          "После инфекций, антибиотиков или при дисбактериозе.",
        keyBacteria: "Saccharomyces boulardii",
        effect: "Восстановление кишечника.",
      },
      en: {
        program: "4. Recovery after illness",
        audience: "After infections, antibiotics or dysbiosis.",
        keyBacteria: "Saccharomyces boulardii",
        effect: "Supports intestinal recovery.",
      },
    },
    "product.baktrisubtil": {
      ru: {
        program: "4. Восстановление после болезней · дисбактериоз",
        audience:
          "При дисбактериозе и в программах восстановления кишечника.",
        keyBacteria: "Bacillus cereus",
        effect: "Применяют при дисбактериозе (по назначению врача).",
      },
      en: {
        program: "4. Recovery · dysbiosis",
        audience: "For dysbiosis and gut recovery programs.",
        keyBacteria: "Bacillus cereus",
        effect: "Used in dysbiosis (as prescribed by a doctor).",
      },
    },
    "product.probinav7": {
      ru: {
        program: "4. Восстановление после болезней",
        audience:
          "После антибиотиков, операций, при дисбактериозе.",
        keyBacteria:
          "B. bifidum, B. longum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, S. lactis",
        effect:
          "Пребиотик: инулин (топинамбур); цинк. Восстановление после антибиотиков и операций.",
      },
      en: {
        program: "4. Recovery after illness",
        audience: "After antibiotics, surgery or dysbiosis.",
        keyBacteria:
          "B. bifidum, B. longum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, S. lactis",
        effect:
          "Prebiotic: inulin; zinc. Recovery after antibiotics and surgery.",
      },
    },
    "product.probinav710k": {
      ru: {
        program: "4. Восстановление после болезней",
        audience:
          "После антибиотиков, операций, при дисбактериозе.",
        keyBacteria:
          "B. bifidum, B. longum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, S. lactis",
        effect:
          "Пребиотик: инулин (топинамбур); цинк. Восстановление после антибиотиков и операций.",
      },
      en: {
        program: "4. Recovery after illness",
        audience: "After antibiotics, surgery or dysbiosis.",
        keyBacteria:
          "B. bifidum, B. longum, L. plantarum, L. fermentum, L. acidophilus, L. bulgaricum, S. lactis",
        effect:
          "Prebiotic: inulin; zinc. Recovery after antibiotics and surgery.",
      },
    },
    "product.megavitaSashe": {
      ru: {
        program: "6. Для приготовления йогурта дома",
        audience:
          "Для использования в пищу как йогурт или ферментированные продукты.",
        keyBacteria:
          "Streptococcus thermophilus, Lactococcus lactis, L. acidophilus, L. bulgaricum",
        effect:
          "Приготовление йогурта дома; поддержка микрофлоры.",
      },
      en: {
        program: "6. Homemade yogurt",
        audience: "For use as yogurt or fermented foods at home.",
        keyBacteria:
          "Streptococcus thermophilus, Lactococcus lactis, L. acidophilus, L. bulgaricum",
        effect: "For making yogurt at home; supports microbiome.",
      },
    },
  };
