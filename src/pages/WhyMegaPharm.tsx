import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

const SECTIONS = [
  { key: "experienceTitle", textKey: "experienceText" },
  { key: "scienceTitle", textKey: "scienceText" },
  { key: "techTitle", textKey: "techText" },
  { key: "rangeTitle", textKey: "rangeText" },
  { key: "exportTitle", textKey: "exportText" },
  { key: "partnersTitle", textKey: "partnersText" },
  { key: "missionTitle", textKey: "missionText" },
] as const;

export function WhyMegaPharm() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("why.title")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("why.title")}
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">{t("why.subtitle")}</p>
      <p className="mt-6 text-foreground">{t("why.intro")}</p>

      <div className="mt-10 space-y-10">
        {SECTIONS.map(({ key, textKey }) => (
          <section key={key}>
            <h2 className="text-xl font-semibold text-foreground">
              {t(`why.${key}`)}
            </h2>
            <p className="mt-3 text-muted-foreground whitespace-pre-line">
              {t(`why.${textKey}`)}
            </p>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-lg border bg-muted/30 p-6">
        <h2 className="text-xl font-semibold text-foreground">
          {t("why.exportTitle")}
        </h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span>{t("why.exportText")}</span>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">
          {t("why.certificates")}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {["HACCP", "ISO 22000", "U.S. FDA"].map((cert) => (
            <div
              key={cert}
              className="flex h-32 items-center justify-center rounded-lg border border-border bg-card p-4 text-center font-medium"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <Link
          to="/products"
          className="rounded-md bg-mega-navy px-6 py-3 text-sm font-medium text-white hover:bg-mega-blue"
        >
          {t("common.shopAll")}
        </Link>
      </div>
    </div>
  );
}
