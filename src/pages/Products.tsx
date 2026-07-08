import { useMemo, useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductSidebar } from "@/components/ProductSidebar";
import { CategoryFilterChips } from "@/components/CategoryFilterChips";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS } from "@/data/products";

const INITIAL_VISIBLE = 12;
const LOAD_MORE_STEP = 12;

export function Products() {
  const { t, i18n } = useTranslation();
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(() => {
    let list = [...MOCK_PRODUCTS];
    if (categoryId) {
      list = list.filter((p) => p.categoryId === categoryId);
    }
    if (q) {
      const lower = q.toLowerCase();
      list = list.filter(
        (p) =>
          i18n.t(p.nameKey).toLowerCase().includes(lower) ||
          i18n.t(p.descriptionKey).toLowerCase().includes(lower),
      );
    }
    return list;
  }, [categoryId, q, i18n.language]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [categoryId, q]);

  const total = filtered.length;
  const shownCount = Math.min(visibleCount, total);
  const from = total === 0 ? 0 : 1;
  const to = shownCount;
  const hasMore = shownCount < total;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-mega-navy">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.products")}</span>
      </nav>

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {t("categories.title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("categories.itemCount", { from, to, total })}
        </p>
      </div>

      <CategoryFilterChips />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start">
        <ProductSidebar />

        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.slice(0, shownCount).map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={idx < 4}
              />
            ))}
          </div>

          {hasMore && (
            <div className="mt-10 flex justify-center pb-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="min-w-[200px] border-mega-navy/25 font-semibold text-mega-navy hover:bg-mega-navy hover:text-white"
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + LOAD_MORE_STEP, total))
                }
              >
                {t("categories.loadMore")}
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              {t("categories.noResults")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
