import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CATEGORY_IDS, categoryIdToI18nKey } from "@/constants/categories";
import { cn } from "@/lib/utils";

/** Mobil / planshet — gorizontal kategoriya filter */
export function CategoryFilterChips() {
  const { t } = useTranslation();
  const { categoryId: current } = useParams<{ categoryId?: string }>();

  return (
    <div className="mb-5 md:hidden">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none">
        <Chip to="/products" active={!current}>
          {t("categories.all")}
        </Chip>
        {CATEGORY_IDS.map((id) => (
          <Chip key={id} to={`/products/${id}`} active={current === id}>
            {t(categoryIdToI18nKey[id])}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function Chip({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-mega-navy bg-mega-navy text-white"
          : "border-slate-200 bg-white text-foreground hover:border-mega-navy/30",
      )}
    >
      {children}
    </Link>
  );
}
