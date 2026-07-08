import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { CATEGORY_IDS, categoryIdToI18nKey } from "@/constants/categories";

export function ProductSidebar() {
  const { t } = useTranslation();
  const { categoryId: currentCategory } = useParams<{ categoryId?: string }>();

  return (
    <aside className="hidden md:block">
      <div
        className={cn(
          "sticky top-24 z-[60] w-56",
          "max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-y-contain",
          "rounded-xl border border-slate-200 bg-white p-4",
        )}
      >
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t("categories.viewBy")}
        </h3>

        <ul className="space-y-0.5">
          <li>
            <SidebarLink to="/products" active={!currentCategory}>
              {t("categories.all")}
            </SidebarLink>
          </li>
          {CATEGORY_IDS.map((id) => (
            <li key={id}>
              <SidebarLink
                to={`/products/${id}`}
                active={currentCategory === id}
              >
                {t(categoryIdToI18nKey[id])}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function SidebarLink({
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
        "block rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-mega-navy/10 font-medium text-mega-navy"
          : "text-muted-foreground hover:bg-slate-50 hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
