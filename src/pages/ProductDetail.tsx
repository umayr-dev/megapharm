import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_PRODUCTS } from "@/data/products";
import { PRODUCT_DETAILS } from "@/data/productDetails";
import { Button } from "@/components/ui/button";
import { ImageSwiper } from "@/components/ImageSwiper";
import { useCart } from "@/contexts/CartContext";

export function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = MOCK_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-muted-foreground">Product not found.</p>
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

          {extra && (
            <div className="mt-2 rounded-xl border bg-muted/40 p-4 text-xs text-foreground space-y-2 md:text-sm md:p-5">
              <p className="text-sm font-semibold tracking-wide text-mega-navy">
                {t("product.detailsTitle", { defaultValue: "Product details" })}
              </p>
              {extra.releaseForm && (
                <p>
                  <span className="font-medium">
                    {t("product.releaseFormLabel", {
                      defaultValue: "Release form",
                    })}
                    :{" "}
                  </span>
                  {extra.releaseForm}
                </p>
              )}
              {extra.composition && (
                <div>
                  <p className="font-medium">
                    {t("product.compositionLabel", {
                      defaultValue: "Probiotics / composition",
                    })}
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
                    {t("product.prebioticsLabel", {
                      defaultValue: "Prebiotics / additional ingredients",
                    })}
                    :{" "}
                  </span>
                  {extra.prebiotics}
                </p>
              )}
              {extra.fruits && (
                <p>
                  <span className="font-medium">
                    {t("product.fruitsLabel", {
                      defaultValue: "Fruit base",
                    })}
                    :{" "}
                  </span>
                  {extra.fruits}
                </p>
              )}
              {extra.vitamins && (
                <p>
                  <span className="font-medium">
                    {t("product.vitaminsLabel", {
                      defaultValue: "Vitamins",
                    })}
                    :{" "}
                  </span>
                  {extra.vitamins}
                </p>
              )}
              {extra.microelements && (
                <p>
                  <span className="font-medium">
                    {t("product.microelementsLabel", {
                      defaultValue: "Microelements",
                    })}
                    :{" "}
                  </span>
                  {extra.microelements}
                </p>
              )}
              {extra.cfu && (
                <p>
                  <span className="font-medium">
                    {t("product.cfuLabel", {
                      defaultValue: "Viable microorganisms",
                    })}
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
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
