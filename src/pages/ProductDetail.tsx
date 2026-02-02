import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MOCK_PRODUCTS } from "@/data/products";
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

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-primary">
          {t("nav.products")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t(product.nameKey)}</span>
      </nav>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full max-w-md md:w-1/2">
          <ImageSwiper images={[product.image]} alt={t(product.nameKey)} />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">
            {t(product.nameKey)}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {t(product.descriptionKey)}
          </p>
          <Button
            className="mt-6 bg-mega-navy hover:bg-mega-blue"
            onClick={() => product && addItem(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
