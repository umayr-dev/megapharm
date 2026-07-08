import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Product } from "@/data/products";
import { categoryIdToI18nKey } from "@/constants/categories";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  /** Home katalog — biroz kattaroq rasm maydoni */
  catalog?: boolean;
}

export const ProductCard = memo(function ProductCard({
  product,
  priority = false,
  catalog = false,
}: ProductCardProps) {
  const { t } = useTranslation();
  const [src, setSrc] = useState(() => encodeURI(product.imageThumb));

  const handleImgError = () => {
    setSrc(encodeURI(product.image));
  };

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md",
        "[content-visibility:auto] [contain-intrinsic-size:200px_260px]",
      )}
    >
      <Link
        to={`/product/${product.id}`}
        className="block outline-none focus-visible:ring-2 focus-visible:ring-mega-navy focus-visible:ring-inset"
      >
        <div
          className={cn(
            "flex items-center justify-center bg-white",
            catalog ? "aspect-[5/6] p-4" : "aspect-square p-3",
          )}
        >
          <img
            src={src}
            alt={t(product.nameKey)}
            width={catalog ? 200 : 180}
            height={catalog ? 240 : 180}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "low"}
            sizes={catalog ? "200px" : "(max-width: 640px) 45vw, 180px"}
            onError={handleImgError}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className={cn(catalog ? "px-3 py-3" : "px-2.5 py-2.5")}>
          <h3
            className={cn(
              "line-clamp-2 font-semibold leading-snug text-foreground group-hover:text-mega-navy",
              catalog ? "text-sm" : "text-xs sm:text-sm",
            )}
          >
            {t(product.nameKey)}
          </h3>
          <p className="mt-1 line-clamp-1 text-[10px] text-muted-foreground sm:text-[11px]">
            {t(categoryIdToI18nKey[product.categoryId])}
          </p>
        </div>
      </Link>
    </article>
  );
});
