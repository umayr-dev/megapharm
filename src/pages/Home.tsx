import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS } from "@/data/products";
import { ProductRowSwiper } from "@/components/ProductRowSwiper";

export function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <HeroBanner />

      <ProductRowSwiper
        products={MOCK_PRODUCTS}
        title={t("categories.title")}
        subtitle={t("why.subtitle")}
      />
      <div className="mx-auto max-w-6xl px-4 pb-12 text-center">
        <Button asChild variant="outline" size="lg">
          <Link to="/products">{t("common.shopAll")}</Link>
        </Button>
      </div>

      <section className="bg-muted/30 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {t("why.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t("why.intro")}
          </p>
          <Button asChild className="mt-6 bg-mega-navy hover:bg-mega-blue">
            <Link to="/why-mega-pharm">{t("common.learnMore")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
