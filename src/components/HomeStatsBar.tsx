import { useTranslation } from "react-i18next";
const STATS = [
  { value: "2009", labelKey: "home.statSince" },
  { value: "50+", labelKey: "home.statFormulas" },
  { value: "FDA", labelKey: "home.statExport" },
  { value: "HACCP", labelKey: "home.statQuality" },
] as const;

export function HomeStatsBar() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
        {STATS.map(({ value, labelKey }) => (
          <div key={labelKey} className="px-4 py-5 text-center md:py-6">
            <p className="text-2xl font-bold tracking-tight text-mega-navy md:text-3xl">
              {value}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground md:text-xs">
              {t(labelKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
