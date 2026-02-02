import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductCard } from "@/components/ProductCard";
import { MOCK_PRODUCTS } from "@/data/products";

const PER_PAGE = 24;

export function Products() {
  const { t } = useTranslation();
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const filtered = useMemo(() => {
    let list = [...MOCK_PRODUCTS];
    if (categoryId) {
      list = list.filter((p) => p.categoryId === categoryId);
    }
    if (q) {
      const lower = q.toLowerCase();
      list = list.filter(
        (p) =>
          t(p.nameKey).toLowerCase().includes(lower) ||
          t(p.descriptionKey).toLowerCase().includes(lower)
      );
    }
    return list;
  }, [categoryId, q, t]);

  const total = filtered.length;
  const from = 1;
  const to = Math.min(PER_PAGE, total);

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

      <div className="flex flex-col gap-6 md:flex-row">
        <ProductSidebar />

        <div className="min-w-0 flex-1">
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, PER_PAGE).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-muted-foreground">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
