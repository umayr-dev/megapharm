import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PILLARS = [
  { num: "01", titleKey: "experienceTitle", textKey: "experienceText" },
  { num: "02", titleKey: "scienceTitle", textKey: "scienceText" },
  { num: "03", titleKey: "techTitle", textKey: "techText" },
  { num: "04", titleKey: "exportTitle", textKey: "exportText" },
] as const;

export function HomeWhySection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#0a2540] py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300/90">
              {t("why.subtitle")}
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
              {t("why.title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              {t("why.intro")}
            </p>
            <p className="mt-8 text-6xl font-bold leading-none text-white/10 md:text-7xl">
              15+
            </p>
            <p className="mt-2 text-sm font-medium text-sky-200/90">
              {t("home.statYears")}
            </p>
            <Link
              to="/why-mega-pharm"
              className="mt-6 inline-block text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              {t("common.learnMore")}
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
            {PILLARS.map(({ num, titleKey, textKey }) => (
              <article key={num} className="py-6 md:py-8">
                <div className="flex gap-5 md:gap-8">
                  <span className="shrink-0 font-mono text-sm font-bold text-sky-300/80">
                    {num}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold md:text-lg">
                      {t(`why.${titleKey}`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {t(`why.${textKey}`)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
