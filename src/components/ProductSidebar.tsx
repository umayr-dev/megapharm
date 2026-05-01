import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORY_IDS } from "@/constants/categories";
import { categoryIdToI18nKey } from "@/constants/categories";

export function ProductSidebar() {
  const { t } = useTranslation();
  const { categoryId: currentCategory } = useParams<{ categoryId?: string }>();
  const [expandedCategory, setExpandedCategory] = useState(true);
  const [expandedBrands, setExpandedBrands] = useState(false);

  return (
    <aside className="w-full shrink-0 md:w-64">
      <div
        className={cn(
          "md:sticky md:top-24 md:z-[60]",
          "md:max-h-[calc(100vh-7rem)] md:overflow-y-auto md:overscroll-y-contain",
          "md:rounded-xl md:border md:border-border md:bg-card md:p-3 md:shadow-sm",
        )}
      >
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {t("categories.viewBy")}
      </h3>

      {/* Category filter */}
      <div className="border-b border-border pb-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-md border border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium hover:bg-muted"
          onClick={() => setExpandedCategory(!expandedCategory)}
        >
          {t("categories.category")}
          <Plus
            className={cn(
              "h-4 w-4 transition-transform",
              expandedCategory && "rotate-45",
            )}
          />
        </button>
        {expandedCategory && (
          <ul className="mt-2 space-y-1 pl-2">
            {CATEGORY_IDS.map((id) => (
              <li key={id}>
                <Link
                  to={`/products/${id}`}
                  className={cn(
                    "block rounded px-3 py-2 text-sm",
                    currentCategory === id
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {t(categoryIdToI18nKey[id])}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brands placeholder */}
      <div className="mt-3 border-b border-border pb-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-md border border-border bg-muted/50 px-3 py-2 text-left text-sm font-medium hover:bg-muted"
          onClick={() => setExpandedBrands(!expandedBrands)}
        >
          {t("categories.brands")}
          <Plus
            className={cn(
              "h-4 w-4 transition-transform",
              expandedBrands && "rotate-45",
            )}
          />
        </button>
      </div>
      </div>
    </aside>
  );
}
