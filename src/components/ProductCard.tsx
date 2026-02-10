import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link to={`/product/${product.id}`} className="block flex-1 p-4">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-muted mb-3">
          <img
            src={product.image}
            alt={t(product.nameKey)}
            loading="lazy"
            decoding="async"
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
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
