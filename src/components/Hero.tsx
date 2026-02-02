import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[420px] flex-col justify-center overflow-hidden bg-gradient-to-r from-mega-sky/30 to-mega-light md:flex-row md:items-center">
      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
        <h1 className="text-3xl font-bold tracking-tight text-mega-navy md:text-4xl lg:text-5xl">
          {t("hero.headline")}
        </h1>
        <p className="mt-2 text-lg text-mega-navy/90 md:text-xl">
          {t("hero.subheadline")}
          <sup className="ml-0.5 text-sm">+</sup>
        </p>
        <div className="mt-6">
          <Button asChild size="lg" className="bg-mega-navy hover:bg-mega-blue">
            <Link to="/products">{t("hero.shopNow")}</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center p-6">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 w-36 shrink-0 rounded-lg bg-white/80 shadow-md md:h-56 md:w-40"
              style={{
                background: "linear-gradient(135deg, #e8f4fc 0%, #5ba3d0 100%)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
