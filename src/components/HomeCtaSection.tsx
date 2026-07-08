import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function HomeCtaSection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-slate-200 bg-mega-navy py-14 text-white md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              {t("home.ctaTitle")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              {t("home.ctaSubtitle")}
            </p>
            <p className="mt-4 text-sm text-white/60">{t("contact.address")}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button
              asChild
              size="lg"
              className="bg-white text-mega-navy hover:bg-white/90"
            >
              <Link to="/products">{t("common.shopAll")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10"
            >
              <Link to="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
