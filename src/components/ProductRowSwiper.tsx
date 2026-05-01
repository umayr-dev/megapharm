import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeProductCard } from "@/components/HomeProductCard";
import type { Product } from "@/data/products";

const PER_PAGE = 4;

interface ProductRowSwiperProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductRowSwiper({
  products,
  title,
  subtitle,
}: ProductRowSwiperProps) {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(products.length / PER_PAGE));

  const visible = useMemo(() => {
    const start = page * PER_PAGE;
    return products.slice(start, start + PER_PAGE);
  }, [products, page]);

  const showMore = () => {
    if (totalPages <= 1) return;
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50/90 via-background to-background dark:from-mega-navy/20 dark:via-background dark:to-background" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-mega-sky/15 blur-3xl dark:bg-mega-blue/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-mega-navy/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        {(title || subtitle) && (
          <div className="mb-10 text-center md:text-left">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-mega-navy" />
              <span className="text-xs font-semibold uppercase tracking-widest text-mega-navy/80">
                MEGA PHARM
              </span>
            </div>
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:mx-0">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          role="list"
          aria-label={t("categories.title")}
        >
          {visible.map((product, idx) => (
            <div key={product.id} role="listitem" className="min-w-0">
              <HomeProductCard
                product={product}
                priority={page === 0 && idx < 2}
              />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex gap-1.5" role="tablist" aria-label={t("common.productsPage", { current: page + 1, total: totalPages })}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === page}
                  aria-label={`${i + 1} / ${totalPages}`}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-8 bg-mega-navy"
                      : "w-2 bg-mega-navy/25 hover:bg-mega-navy/40"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {t("common.productsPage", {
                current: page + 1,
                total: totalPages,
              })}
            </p>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="min-w-[220px] rounded-full border-2 border-mega-navy/30 bg-background/80 px-8 text-mega-navy shadow-sm backdrop-blur-sm transition hover:border-mega-navy hover:bg-mega-navy hover:text-white"
              onClick={showMore}
            >
              <span className="mr-2">{t("common.showMore")}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
