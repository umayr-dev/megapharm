import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { CATEGORY_IDS, categoryIdToI18nKey } from "@/constants/categories";
import type { CategoryId } from "@/constants/categories";
import { MOCK_PRODUCTS } from "@/data/products";

export function HomeCategoriesSection() {
  const { t } = useTranslation();

  const categoriesWithCount = useMemo(() => {
    const counts = new Map<CategoryId, number>();
    for (const p of MOCK_PRODUCTS) {
      counts.set(p.categoryId, (counts.get(p.categoryId) ?? 0) + 1);
    }
    return CATEGORY_IDS.filter((id) => (counts.get(id) ?? 0) > 0).map(
      (id) => ({ id, count: counts.get(id) ?? 0 }),
    );
  }, []);

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">
              {t("home.browseCategories")}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("home.categoriesHint")}
            </p>
          </div>
          <Link
            to="/products"
            className="hidden items-center gap-1 text-sm font-medium text-mega-navy hover:underline sm:inline-flex"
          >
            {t("categories.all")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {categoriesWithCount.map(({ id, count }) => (
            <li key={id}>
              <Link
                to={`/products/${id}`}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-mega-navy/[0.03] md:px-6 md:py-5"
              >
                <span className="text-sm font-semibold text-foreground group-hover:text-mega-navy md:text-base">
                  {t(categoryIdToI18nKey[id])}
                </span>
                <span className="flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {count}
                  </span>
                  <ArrowRight className="h-4 w-4 text-mega-navy opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
