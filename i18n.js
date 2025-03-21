import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend"; // Per caricare file JSON

i18n
  .use(Backend) // Carica traduzioni da /public/locales
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true, // Attiva debug per vedere errori in console
    interpolation: {
      escapeValue: false, // Permette HTML nei testi
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Percorso ai file
    },
  });

export default i18n;