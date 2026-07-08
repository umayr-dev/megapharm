import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const SUPPORTED_LANGUAGES = ["en", "ru", "de", "ar", "uz"] as const;
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const localeLoaders: Record<
  AppLanguage,
  () => Promise<{ default: Record<string, unknown> }>
> = {
  en: () => import("./locales/en").then((m) => ({ default: m.en })),
  ru: () => import("./locales/ru").then((m) => ({ default: m.ru })),
  de: () => import("./locales/de").then((m) => ({ default: m.de })),
  ar: () => import("./locales/ar").then((m) => ({ default: m.ar })),
  uz: () => import("./locales/uz").then((m) => ({ default: m.uz })),
};

const loaded = new Set<string>();

function resolveLanguage(lng?: string): AppLanguage {
  const code = (lng ?? "en").split("-")[0];
  return SUPPORTED_LANGUAGES.includes(code as AppLanguage)
    ? (code as AppLanguage)
    : "en";
}

export function applyDocumentLanguage(lng: string) {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
}

export async function loadLanguage(lng?: string): Promise<AppLanguage> {
  const code = resolveLanguage(lng);
  if (!loaded.has(code)) {
    const bundle = await localeLoaders[code]();
    i18n.addResourceBundle(code, "translation", bundle.default, true, true);
    loaded.add(code);
  }
  if (i18n.language !== code) {
    await i18n.changeLanguage(code);
  }
  applyDocumentLanguage(code);
  return code;
}

export async function bootstrapI18n(): Promise<void> {
  const stored =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("i18nextLng")
      : null;
  const browser =
    typeof navigator !== "undefined" ? navigator.language : undefined;
  await loadLanguage(stored ?? browser ?? "en");
}

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {},
  interpolation: { escapeValue: false },
});

export default i18n;
