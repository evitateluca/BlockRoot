"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

const loadTranslations = async (lng: string) => {
  try {
    console.log(`Loading translations for ${lng}...`);
    const response = await fetch(`/locales/${lng}/translation.json`); // Aggiornato a translation.json
    if (!response.ok) {
      throw new Error(`Failed to fetch translations for ${lng}: ${response.statusText}`);
    }
    const translations = await response.json();
    i18n.addResourceBundle(lng, "translation", translations, true, true); // Namespace "translation"
    i18n.changeLanguage(lng);
    console.log(`Translations for ${lng} loaded successfully`);
  } catch (error) {
    console.error("Failed to load translations:", error);
  }
};

export default function TranslationProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadTranslations("en").then(() => setIsReady(true)); // Lingua iniziale
  }, []);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      console.log(`Language changed to: ${lng}`);
      if (!i18n.hasResourceBundle(lng, "translation")) {
        loadTranslations(lng);
      }
    };
    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  if (!isReady) {
    return <div>Loading translations...</div>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}