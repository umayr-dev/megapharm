import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_KEYS = [
  { q: "faq.q1", a: "faq.a1" },
  { q: "faq.q2", a: "faq.a2" },
  { q: "faq.q3", a: "faq.a3" },
  { q: "faq.q4", a: "faq.a4" },
  { q: "faq.q5", a: "faq.a5" },
] as const;

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          {t("nav.home")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{t("nav.faq")}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground md:text-4xl">
        {t("faq.title")}
      </h1>
      <p className="mt-2 text-muted-foreground">{t("faq.subtitle")}</p>

      <div className="mt-10 space-y-2">
        {FAQ_KEYS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-foreground">{t(item.q)}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-border px-5 py-4 text-muted-foreground">
                    {t(item.a)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-muted-foreground">
          {t("faq.subtitle")}{" "}
          <Link
            to="/contact"
            className="font-medium text-primary hover:underline"
          >
            {t("nav.contact")}
          </Link>
        </p>
      </div>
    </div>
  );
}
