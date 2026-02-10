import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { ru } from "./locales/ru";
import { de } from "./locales/de";
import { ar } from "./locales/ar";
import { uz } from "./locales/uz";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  de: { translation: de },
  ar: { translation: ar },
  uz: { translation: uz },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
