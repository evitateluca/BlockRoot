import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en", // Lingua predefinita
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React già gestisce l'escaping
    },
    // Non caricare le traduzioni qui, le gestiremo dinamicamente
  });

export default i18n;