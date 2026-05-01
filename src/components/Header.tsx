import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const MORE_CLOSE_DELAY_MS = 150;

export function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMoreMenu = () => {
    clearCloseTimer();
    setMoreOpen(true);
  };

  const scheduleCloseMoreMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setMoreOpen(false);
      closeTimerRef.current = null;
    }, MORE_CLOSE_DELAY_MS);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim())
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <header className="sticky top-0 z-[100] w-full max-w-[100vw] border-b border-white/10 bg-mega-navy text-white">
      <div className="flex min-w-0 items-center justify-between gap-3 px-4 py-4 md:gap-4 md:px-8 lg:gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/logo.png"
            alt="MEGA PHARM SERVICE"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
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

          <DropdownMenu.Root
            open={moreOpen}
            onOpenChange={(open) => {
              clearCloseTimer();
              setMoreOpen(open);
            }}
            modal={false}
          >
            <div
              onPointerEnter={openMoreMenu}
              onPointerLeave={scheduleCloseMoreMenu}
            >
              <DropdownMenu.Trigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 rounded px-3 py-2 text-white outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/60",
                    moreOpen && "bg-white/10"
                  )}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                >
                  {t("nav.more")}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      moreOpen && "rotate-180"
                    )}
                  />
                </button>
              </DropdownMenu.Trigger>
            </div>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="z-[200] min-w-[220px] rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xl outline-none"
                sideOffset={8}
                align="end"
                side="bottom"
                collisionPadding={12}
                onPointerEnter={openMoreMenu}
                onPointerLeave={scheduleCloseMoreMenu}
              >
                <DropdownMenu.Item asChild>
                  <Link
                    to="/certificates"
                    className="flex cursor-pointer select-none rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 outline-none hover:bg-slate-100 data-[highlighted]:bg-slate-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    {t("nav.certificates")}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    to="/patents"
                    className="flex cursor-pointer select-none rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 outline-none hover:bg-slate-100 data-[highlighted]:bg-slate-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    {t("nav.patents")}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    to="/news"
                    className="flex cursor-pointer select-none rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 outline-none hover:bg-slate-100 data-[highlighted]:bg-slate-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    {t("nav.news")}
                  </Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <Link
                    to="/blog"
                    className="flex cursor-pointer select-none rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 outline-none hover:bg-slate-100 data-[highlighted]:bg-slate-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    {t("nav.blog")}
                  </Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>

        <div className="flex min-w-0 items-center gap-2">
          <form
            onSubmit={handleSearch}
            className="relative hidden min-w-0 items-center lg:flex"
          >
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-white/70" />
            <input
              type="search"
              placeholder={t("nav.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-56 max-w-[14rem] rounded-full border border-white/25 bg-white/10 pl-9 pr-4 text-sm text-white placeholder:text-white/60 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/60 xl:max-w-none xl:w-56"
            />
          </form>
          <LanguageSwitcher minimal />
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
            className="relative flex shrink-0 items-center gap-1.5 rounded p-2 text-white transition-colors hover:bg-white/10"
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
            onClick={() => {
              setMobileMenuOpen((o) => {
                if (o) setMobileMoreOpen(false);
                return !o;
              });
            }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-white p-4 md:hidden">
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
          <div className="border-t border-border pt-1">
            <button
              type="button"
              className="flex w-full items-center justify-between py-2 text-left font-medium text-foreground"
              onClick={() => setMobileMoreOpen((o) => !o)}
              aria-expanded={mobileMoreOpen}
            >
              {t("nav.more")}
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  mobileMoreOpen && "rotate-180"
                )}
              />
            </button>
            {mobileMoreOpen && (
              <div className="border-l-2 border-mega-navy/20 pl-3">
                <Link
                  to="/certificates"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.certificates")}
                </Link>
                <Link
                  to="/patents"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.patents")}
                </Link>
                <Link
                  to="/news"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.news")}
                </Link>
                <Link
                  to="/blog"
                  className="block py-2 text-sm text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.blog")}
                </Link>
              </div>
            )}
          </div>
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
              {t("nav.search")}
            </Button>
          </form>
        </div>
      )}
    </header>
  );
}
