import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown, Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCart } from "@/contexts/CartContext";
import { CATEGORY_IDS } from "@/constants/categories";
import { categoryIdToI18nKey } from "@/constants/categories";

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim())
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      {/* Utility bar */}
      <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 border-b px-4 py-2 text-sm text-muted-foreground">
        <Link
          to="/store-locator"
          className="hover:text-primary transition-colors"
        >
          {t("nav.findInStore")}
        </Link>
        <Link to="/login" className="hover:text-primary transition-colors">
          {t("nav.signIn")}
        </Link>
        <Link to="/register" className="hover:text-primary transition-colors">
          {t("nav.register")}
        </Link>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between gap-4 bg-mega-navy px-4 py-3 text-white md:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/logo.png"
            alt="MEGA PHARM SERVICE"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {/* Categories dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
            >
              {t("nav.categories")}
              <ChevronDown className="h-4 w-4" />
            </button>
            {categoriesOpen && (
              <div className="absolute left-0 top-full min-w-[280px] rounded-b-md border border-t-0 border-border bg-white py-2 shadow-lg">
                {CATEGORY_IDS.map((id) => (
                  <Link
                    key={id}
                    to={`/products/${id}`}
                    className="block px-4 py-2 text-foreground hover:bg-muted"
                    onClick={() => setCategoriesOpen(false)}
                  >
                    {t(categoryIdToI18nKey[id])}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/why-mega-pharm"
            className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
          >
            {t("nav.whyMegaPharm")}
            <ChevronDown className="h-4 w-4" />
          </Link>
          {/* More: About, FAQ, News, Blog */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
            >
              More
              <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full min-w-[200px] rounded-b-md border border-t-0 border-border bg-white py-2 shadow-lg">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-foreground hover:bg-muted"
                  onClick={() => setMoreOpen(false)}
                >
                  {t("nav.about")}
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-foreground hover:bg-muted"
                  onClick={() => setMoreOpen(false)}
                >
                  {t("nav.faq")}
                </Link>
                <Link
                  to="/news"
                  className="block px-4 py-2 text-foreground hover:bg-muted"
                  onClick={() => setMoreOpen(false)}
                >
                  {t("nav.news")}
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-foreground hover:bg-muted"
                  onClick={() => setMoreOpen(false)}
                >
                  {t("nav.blog")}
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden items-center md:flex">
            <input
              type="search"
              placeholder={t("nav.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-48 rounded-l-md border border-r-0 bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              size="icon"
              variant="secondary"
              className="rounded-l-none h-9 w-9"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <LanguageSwitcher />
          <Link
            to="/cart"
            className="relative flex items-center gap-1.5 rounded p-2 text-white transition-colors hover:bg-white/10"
            aria-label={t("nav.cart")}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-1.5 text-xs font-bold text-mega-navy">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="rounded p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white p-4 md:hidden">
          <Link
            to="/products"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.categories")}
          </Link>
          <Link
            to="/why-mega-pharm"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.whyMegaPharm")}
          </Link>
          <Link
            to="/about"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/faq"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.faq")}
          </Link>
          <Link
            to="/news"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.news")}
          </Link>
          <Link
            to="/blog"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.blog")}
          </Link>
          <Link
            to="/cart"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.cart")} ({itemCount})
          </Link>
          <div
            className="mt-2 border-t pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <LanguageSwitcher variant="light" />
          </div>
          <form onSubmit={handleSearch} className="mt-2 flex gap-2">
            <input
              type="search"
              placeholder={t("nav.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded border bg-background px-3 py-2 text-sm"
            />
            <Button type="submit" size="sm">
              Search
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}
