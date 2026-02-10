import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-mega-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="MEGA PHARM SERVICE"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  to="/why-mega-pharm"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.whyMegaPharm")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.cart")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.faq")}
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.news")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Central Asia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+998901234567" className="hover:text-white">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@megapharm.com"
                  className="hover:text-white"
                >
                  info@megapharm.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm text-white/70">
            {t("footer.copyright", { year })}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-white/70 transition hover:text-white"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to="/terms"
              className="text-white/70 transition hover:text-white"
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
