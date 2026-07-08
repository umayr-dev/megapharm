import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_PRODUCTS } from "@/data/products";
import type { ProductExtraInfo } from "@/data/productDetails";
import type { ProductClinical } from "@/data/productClinical";
import { categoryIdToI18nKey } from "@/constants/categories";
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

  const [extra, setExtra] = useState<ProductExtraInfo | null>(null);
  const [clinical, setClinical] = useState<ProductClinical | null>(null);
  const [metaLoading, setMetaLoading] = useState(true);

  useEffect(() => {
    if (!product) return;
    let cancelled = false;
    setMetaLoading(true);

    Promise.all([
      import("@/data/productDetails"),
      import("@/data/productClinical"),
    ])
      .then(([detailsMod, clinicalMod]) => {
        if (cancelled) return;
        setExtra(detailsMod.PRODUCT_DETAILS[product.nameKey] ?? null);
        setClinical(clinicalMod.PRODUCT_CLINICAL[product.nameKey] ?? null);
      })
      .finally(() => {
        if (!cancelled) setMetaLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [product?.nameKey]);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-muted-foreground">{t("common.productNotFound")}</p>
        <Link
          to="/products"
          className="mt-4 inline-block text-mega-navy hover:underline"
        >
          {t("common.shopAll")}
        </Link>
      </div>
    );
  }

  const clin =
    clinical?.[pickClinicalLocale(i18n.language)] ?? clinical?.en;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
      <nav className="mb-6 text-xs text-muted-foreground md:text-sm">
        <Link to="/" className="hover:text-mega-navy">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-mega-navy">
          {t("nav.products")}
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">
          {t(product.nameKey)}
        </span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div>
          <ImageSwiper
            images={[product.image]}
            alt={t(product.nameKey)}
            className="rounded-2xl"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-6">
          <header className="space-y-3 border-b border-slate-100 pb-6">
            <span className="inline-block rounded-full bg-mega-navy/10 px-3 py-0.5 text-xs font-medium text-mega-navy">
              {t(categoryIdToI18nKey[product.categoryId])}
            </span>
            <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
              {t(product.nameKey)}
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {t(product.descriptionKey)}
            </p>
            <Button
              size="lg"
              className="mt-2 w-full bg-mega-navy hover:bg-mega-blue sm:w-auto"
              onClick={() => addItem(product)}
            >
              {t("product.addToCart")}
            </Button>
          </header>

          {metaLoading && (
            <div className="h-24 animate-pulse rounded-xl bg-slate-100" />
          )}

          {!metaLoading && clin && (
            <section className="rounded-xl border border-mega-navy/15 bg-mega-light/30 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-mega-navy">
                {t("product.clinicalTitle")}
              </p>
              <h2 className="text-base font-semibold leading-snug text-mega-navy md:text-lg">
                {clin.program}
              </h2>
              {clin.audience && (
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t("product.suitableForLabel")}:{" "}
                  </span>
                  {clin.audience}
                </p>
              )}
              <p className="mt-2 text-sm">
                <span className="font-medium text-foreground">
                  {t("product.keyBacteriaSummaryLabel")}:{" "}
                </span>
                {clin.keyBacteria}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">
                  {t("product.clinicalEffectLabel")}:{" "}
                </span>
                {clin.effect}
              </p>
            </section>
          )}

          {!metaLoading && extra && (
            <section className="rounded-xl border border-slate-200 bg-white p-5 text-sm">
              <h2 className="mb-4 font-semibold text-mega-navy">
                {t("product.detailsTitle")}
              </h2>
              <dl className="space-y-3">
                {extra.releaseForm && (
                  <DetailRow
                    label={t("product.releaseFormLabel")}
                    value={extra.releaseForm}
                  />
                )}
                {extra.composition && (
                  <div>
                    <dt className="font-medium text-foreground">
                      {t("product.compositionLabel")}
                    </dt>
                    <dd className="mt-1">
                      <ul className="list-inside list-disc space-y-0.5 text-muted-foreground">
                        {extra.composition.split(",").map((part, idx) => (
                          <li key={idx}>{part.trim()}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {extra.prebiotics && (
                  <DetailRow
                    label={t("product.prebioticsLabel")}
                    value={extra.prebiotics}
                  />
                )}
                {extra.fruits && (
                  <DetailRow
                    label={t("product.fruitsLabel")}
                    value={extra.fruits}
                  />
                )}
                {extra.vitamins && (
                  <DetailRow
                    label={t("product.vitaminsLabel")}
                    value={extra.vitamins}
                  />
                )}
                {extra.microelements && (
                  <DetailRow
                    label={t("product.microelementsLabel")}
                    value={extra.microelements}
                  />
                )}
                {extra.cfu && (
                  <DetailRow
                    label={t("product.cfuLabel")}
                    value={extra.cfu}
                  />
                )}
              </dl>
            </section>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              asChild
              variant="outline"
              className="border-mega-navy/30 text-mega-navy"
            >
              <Link to="/products">{t("common.shopAll")}</Link>
            </Button>
            <Button asChild variant="ghost" className="text-mega-navy">
              <Link to="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-medium text-foreground">{label}</dt>
      <dd className="mt-0.5 text-muted-foreground">{value}</dd>
    </div>
  );
}
