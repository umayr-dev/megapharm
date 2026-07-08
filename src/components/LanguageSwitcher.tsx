import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loadLanguage } from "@/i18n";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "uz", label: "O'zbek", short: "UZ" },
] as const;

type Variant = "dark" | "light";

interface LanguageSwitcherProps {
  variant?: Variant;
  minimal?: boolean;
}

export function LanguageSwitcher({
  variant = "dark",
  minimal = false,
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isLight = variant === "light";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = async (code: string) => {
    await loadLanguage(code);
    setOpen(false);
  };

  const current =
    LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center rounded-full text-sm font-medium backdrop-blur-sm transition-all duration-200",
          minimal
            ? "h-9 w-9 justify-center border border-white/30 bg-white/10 text-white hover:bg-white/20 focus:ring-white/40 focus:ring-offset-mega-navy"
            : "gap-2 border px-3 py-2",
          !minimal &&
            (isLight
              ? "border-border bg-muted/80 text-foreground hover:bg-muted focus:ring-mega-navy"
              : "border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-white/20 focus:ring-white/40 focus:ring-offset-mega-navy"),
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          open &&
            (isLight
              ? "bg-muted ring-2 ring-mega-navy/30"
              : "bg-white/15 border-white/25 ring-2 ring-white/30"),
        )}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4 shrink-0 opacity-90" />
        {!minimal && (
          <>
            <span className="hidden sm:inline">{current.label}</span>
            <span className="sm:hidden">{current.short}</span>
            <svg
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                open && "rotate-180",
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        )}
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-50 mt-2 min-w-[200px] overflow-hidden rounded-xl border border-border bg-white shadow-xl transition-all duration-200 ease-out",
          open
            ? "translate-y-0 opacity-100 visible"
            : "invisible -translate-y-2 opacity-0",
        )}
        role="listbox"
      >
        <div className="py-1">
          {LANGUAGES.map((lang) => {
            const isActive = i18n.language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                  isActive
                    ? "bg-mega-navy/10 text-mega-navy font-medium"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <span>{lang.label}</span>
                {isActive && (
                  <Check className="h-4 w-4 shrink-0 text-mega-navy" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
