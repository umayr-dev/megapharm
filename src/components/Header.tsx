import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCart } from "@/contexts/CartContext";

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim())
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-mega-navy text-white">
      {/* Single-row main nav */}
      <div className="flex items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/logo.png"
            alt="MEGA PHARM SERVICE"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {/* Products, About, FAQ */}
          <Link
            to="/products"
            className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
          >
            {t("nav.products")}
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/faq"
            className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
          >
            {t("nav.faq")}
          </Link>

          {/* More dropdown: Certificates, News, Blog */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded px-3 py-2 text-white hover:bg-white/10"
              onClick={() => setMoreOpen((o) => !o)}
            >
              {t("nav.more")}
              <ChevronDown className="h-4 w-4" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full min-w-[200px] rounded-b-md border border-t-0 border-border bg-white py-2 shadow-lg">
                <Link
                  to="/why-mega-pharm#certificates"
                  className="block px-4 py-2 text-foreground hover:bg-muted"
                  onClick={() => setMoreOpen(false)}
                >
                  {t("why.certificates")}
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
          {/* Desktop search - glass effect, minimal */}
          <form
            onSubmit={handleSearch}
            className="relative hidden items-center lg:flex"
          >
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-white/70" />
            <input
              type="search"
              placeholder={t("nav.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-56 rounded-full border border-white/25 bg-white/10 pl-9 pr-4 text-sm text-white placeholder:text-white/60 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </form>
          <LanguageSwitcher minimal />
          {/* Desktop start button */}
          <div className="hidden items-center md:flex">
            <Link
              to="/register"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-mega-navy shadow-sm transition hover:bg-mega-light"
            >
              {t("nav.start")}
            </Link>
          </div>
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
            {t("nav.products")}
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
            to="/why-mega-pharm#certificates"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("why.certificates")}
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
          <Link
            to="/register"
            className="block py-2 text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.start")}
          </Link>
          <div
            className="mt-2 border-t pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <LanguageSwitcher variant="light" minimal />
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
