import uzTranslations from "@/i18n/locals/uz.json";
import ruTranslations from "@/i18n/locals/ru.json";
import { Locale } from "./i18n";

export function loadTranslations(locale: Locale) {
  switch (locale) {
    case "uz":
      return uzTranslations;
    case "ru":
      return ruTranslations;
    default:
      return uzTranslations;
  }
}
