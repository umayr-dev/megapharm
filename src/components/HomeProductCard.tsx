import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

function imageSrc(path: string) {
  return encodeURI(path);
}

interface HomeProductCardProps {
  product: Product;
  /** First visible cards on LCP row — eager load for faster paint */
  priority?: boolean;
}

export const HomeProductCard = memo(function HomeProductCard({
  product,
  priority,
}: HomeProductCardProps) {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const thumb = imageSrc(product.imageThumb);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/90 shadow-sm backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-mega-navy/25 hover:shadow-xl hover:shadow-mega-navy/10"
      )}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block flex-1 outline-none focus-visible:ring-2 focus-visible:ring-mega-navy focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/60 dark:from-slate-900/40 dark:via-card dark:to-mega-navy/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.08),transparent_55%)]" />
          <img
            src={thumb}
            alt={t(product.nameKey)}
            width={360}
            height={450}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "low"}
            sizes="(max-width: 768px) 45vw, 220px"
            className="relative z-[1] h-full w-full object-contain p-5 transition duration-500 ease-out group-hover:scale-[1.06]"
          />
        </div>
        <div className="space-y-1.5 px-4 pb-2 pt-3">
          <h3 className="line-clamp-2 text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-mega-navy">
            {t(product.nameKey)}
          </h3>
          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
            {t(product.descriptionKey)}
          </p>
        </div>
        <span className="mx-4 mb-3 inline-flex items-center gap-1 text-xs font-medium text-mega-navy opacity-90 transition group-hover:gap-2">
          {t("common.viewProduct")}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </Link>

      <div className="mt-auto border-t border-border/40 bg-muted/20 px-3 py-3">
        <Button
          type="button"
          size="sm"
          className="h-9 w-full gap-2 rounded-xl bg-mega-navy text-xs font-semibold shadow-sm transition hover:bg-mega-blue md:text-sm"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
        >
          <ShoppingBag className="h-4 w-4 opacity-90" />
          {t("product.addToCart")}
        </Button>
      </div>
    </article>
  );
});
