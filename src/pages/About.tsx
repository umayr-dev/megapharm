import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Award, FlaskConical, Heart } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  const values = [
    { key: "quality", icon: Award, textKey: "about.qualityText" },
    { key: "science", icon: FlaskConical, textKey: "about.scienceText" },
    { key: "trust", icon: Heart, textKey: "about.trustText" },
  ] as const;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.about")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("about.title")}
      </h1>
      <p className="mt-2 text-xl text-muted-foreground">
        {t("about.subtitle")}
      </p>
      <p className="mt-6 text-foreground">{t("about.intro")}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          {t("about.ourStory")}
        </h2>
        <p className="mt-3 text-muted-foreground">{t("about.ourStoryText")}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          {t("about.values")}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {values.map(({ key, icon: Icon, textKey }) => (
            <div
              key={key}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mega-navy/10 text-mega-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {t(`about.${key}`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(textKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          to="/why-mega-pharm"
          className="inline-flex rounded-lg bg-mega-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-mega-blue"
        >
          {t("nav.whyMegaPharm")}
        </Link>
        <Link
          to="/products"
          className="inline-flex rounded-lg border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
        >
          {t("nav.products")}
        </Link>
      </div>
    </div>
  );
}
