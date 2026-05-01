import { useMemo, useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { MOCK_PRODUCTS } from "@/data/products";

/** 4 ustun × 2 qator */
const INITIAL_VISIBLE = 8;
const LOAD_MORE_STEP = 8;

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
    <div className="mx-auto max-w-6xl px-4 py-6">
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.products")}</span>
      </nav>

      <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        {t("categories.title")}
      </h1>

      {/* Grid + sticky: kategoriya scroll bilan siljimaydi (faqat mahsulotlar siljiydi) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[16rem_minmax(0,1fr)] md:items-start">
        <ProductSidebar />

        <div className="min-w-0">
          <div className="mb-4 rounded-lg border bg-muted/30 p-4 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="h-32 w-full rounded-md bg-gradient-to-br from-mega-light to-mega-sky/20 md:h-24 md:w-48" />
              <div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {t("why.rangeText").slice(0, 120)}…
                </p>
                <Link
                  to="/products"
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {t("common.shopAll")}
                </Link>
              </div>
            </div>
          </div>

          <p className="mb-4 text-sm text-muted-foreground">
            {t("categories.itemCount", { from, to, total })}
          </p>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {filtered.slice(0, shownCount).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center pb-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="min-w-[200px] border-mega-navy/30 font-semibold text-mega-navy hover:bg-mega-navy/5"
                onClick={() =>
                  setVisibleCount((c) => Math.min(c + LOAD_MORE_STEP, total))
                }
              >
                {t("categories.loadMore")}
              </Button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              {t("categories.noResults")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
