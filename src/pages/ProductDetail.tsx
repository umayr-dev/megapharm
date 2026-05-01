import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_PRODUCTS } from "@/data/products";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import { PRODUCT_CLINICAL } from "@/data/productClinical";
import { Button } from "@/components/ui/button";
import { ImageSwiper } from "@/components/ImageSwiper";
import { useCart } from "@/contexts/CartContext";

function pickClinicalLocale(lang: string) {
  return lang === "ru" ? "ru" : "en";
}

export function ProductDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-muted-foreground">{t("common.productNotFound")}</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-primary hover:underline"
        >
          {t("common.shopAll")}
        </Link>
      </div>
    );
  }

  const extra = PRODUCT_DETAILS[product.nameKey];
  const clinical = PRODUCT_CLINICAL[product.nameKey];
  const clin =
    clinical?.[pickClinicalLocale(i18n.language)] ?? clinical?.en;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="mb-4 text-xs text-muted-foreground md:mb-6 md:text-sm">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary">
          {t("nav.products")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">
          {t(product.nameKey)}
        </span>
      </nav>
      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl border bg-background">
          <ImageSwiper images={[product.image]} alt={t(product.nameKey)} />
        </div>

        <div className="space-y-4">
          <div>
            <h1 className="text-xl font-semibold text-foreground md:text-2xl">
              {t(product.nameKey)}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground md:mt-2">
              {t(product.descriptionKey)}
            </p>
          </div>

          {clin && (
            <div className="rounded-xl border border-mega-navy/15 bg-mega-light/40 p-4 text-sm text-foreground md:p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-mega-navy">
                {t("product.clinicalTitle")}
              </p>
              <h2 className="text-base font-semibold leading-snug text-mega-navy md:text-lg">
                {clin.program}
              </h2>
              {clin.audience && (
                <p className="mt-2 text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t("product.suitableForLabel")}:{" "}
                  </span>
                  {clin.audience}
                </p>
              )}
              <p className="mt-3">
                <span className="font-medium text-foreground">
                  {t("product.keyBacteriaSummaryLabel")}:{" "}
                </span>
                {clin.keyBacteria}
              </p>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">
                  {t("product.clinicalEffectLabel")}:{" "}
                </span>
                {clin.effect}
              </p>
            </div>
          )}

          {extra && (
            <div className="mt-2 rounded-xl border bg-muted/40 p-4 text-xs text-foreground space-y-2 md:text-sm md:p-5">
              <p className="text-sm font-semibold tracking-wide text-mega-navy">
                {t("product.detailsTitle")}
              </p>
              {extra.releaseForm && (
                <p>
                  <span className="font-medium">
                    {t("product.releaseFormLabel")}
                    :{" "}
                  </span>
                  {extra.releaseForm}
                </p>
              )}
              {extra.composition && (
                <div>
                  <p className="font-medium">
                    {t("product.compositionLabel")}
                    :
                  </p>
                  <ul className="mt-1 list-disc list-inside space-y-0.5 text-xs md:text-sm">
                    {extra.composition.split(",").map((part, idx) => (
                      <li key={idx}>{part.trim()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {extra.prebiotics && (
                <p>
                  <span className="font-medium">
                    {t("product.prebioticsLabel")}
                    :{" "}
                  </span>
                  {extra.prebiotics}
                </p>
              )}
              {extra.fruits && (
                <p>
                  <span className="font-medium">
                    {t("product.fruitsLabel")}
                    :{" "}
                  </span>
                  {extra.fruits}
                </p>
              )}
              {extra.vitamins && (
                <p>
                  <span className="font-medium">
                    {t("product.vitaminsLabel")}
                    :{" "}
                  </span>
                  {extra.vitamins}
                </p>
              )}
              {extra.microelements && (
                <p>
                  <span className="font-medium">
                    {t("product.microelementsLabel")}
                    :{" "}
                  </span>
                  {extra.microelements}
                </p>
              )}
              {extra.cfu && (
                <p>
                  <span className="font-medium">
                    {t("product.cfuLabel")}
                    :{" "}
                  </span>
                  {extra.cfu}
                </p>
              )}
            </div>
          )}

          <Button
            className="mt-4 bg-mega-navy hover:bg-mega-blue"
            onClick={() => product && addItem(product)}
          >
            {t("product.addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
}
