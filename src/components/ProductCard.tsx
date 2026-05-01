import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const [src, setSrc] = useState(() => encodeURI(product.imageThumb));

  const handleImgError = () => {
    setSrc(encodeURI(product.image));
  };

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md [content-visibility:auto] [contain-intrinsic-size:280px_380px]"
    >
      <Link to={`/product/${product.id}`} className="block flex-1 p-4">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-muted mb-3">
          <img
            src={src}
            alt={t(product.nameKey)}
            width={280}
            height={280}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes="(max-width: 640px) 50vw, 25vw"
            onError={handleImgError}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary">
          {t(product.nameKey)}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {t(product.descriptionKey)}
        </p>
      </Link>
      <div className="border-t p-3">
        <Button
          type="button"
          variant="default"
          size="sm"
          className="w-full bg-mega-navy hover:bg-mega-blue"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
        >
          {t("product.addToCart")}
        </Button>
      </div>
    </article>
  );
});
