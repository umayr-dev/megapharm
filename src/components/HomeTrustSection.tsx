import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const CERTS = [
  { id: "haccp", label: "HACCP" },
  { id: "iso", label: "ISO 22000" },
  { id: "fda", label: "U.S. FDA" },
] as const;

export function HomeTrustSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-slate-200 p-8 md:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-mega-navy">
                {t("why.certificates")}
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug text-foreground md:text-2xl">
                {t("home.trustTitle")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("why.techText")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-mega-navy hover:bg-mega-blue">
                  <Link to="/certificates">{t("nav.certificates")}</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/patents">{t("nav.patents")}</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-3 lg:grid-cols-1">
              {CERTS.map(({ id, label }) => (
                <div
                  key={id}
                  className="flex min-h-[120px] flex-col justify-between bg-[#faf9f7] p-6 lg:min-h-[140px]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {t("home.certVerified")}
                  </span>
                  <p className="text-lg font-bold tracking-tight text-mega-navy md:text-xl">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
