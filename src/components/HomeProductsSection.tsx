import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { HOME_CATALOG_COUNT, MOCK_PRODUCTS } from "@/data/products";

export function HomeProductsSection() {
  const { t } = useTranslation();
  const products = MOCK_PRODUCTS.slice(0, HOME_CATALOG_COUNT);

  return (
    <section className="border-b border-slate-200 bg-[#f8f9fb]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[320px_1fr]">
          {/* Chap — mavjud sayt matni */}
          <div className="lg:pt-2">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mega-navy">
              {t("categories.title")}
            </p>
            <h2 className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
              {t("why.rangeTitle")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("why.rangeText")}
            </p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mega-navy hover:underline"
            >
              {t("common.shopAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-8 hidden text-xs text-muted-foreground lg:block">
              {t("home.productCount", { count: MOCK_PRODUCTS.length })}
            </p>
          </div>

          {/* O‘ng — mahsulotlar */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {products.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  catalog
                  priority={idx < 2}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center lg:justify-end">
              <Link
                to="/products"
                className="inline-flex h-10 items-center justify-center rounded-md border border-mega-navy/25 bg-white px-5 text-sm font-medium text-mega-navy transition-colors hover:bg-mega-navy hover:text-white"
              >
                {t("categories.loadMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
