"use client";

import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import i18n from "@/lib/i18n";

const ICOContent = dynamic(() => import("./ICOContent"), { ssr: false });

export default function ICO() {
  const { t } = useTranslation("translation"); // Aggiornato a "translation"

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="ico" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ico.hero.title") || "Participate in the BlockRoots ICO"}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {t("ico.hero.description") ||
              "Join the decentralized mining revolution: buy $ROOT tokens and be part of a transparent and profitable future!"}
          </p>
          <ICOContent />
          <button onClick={() => changeLanguage("en")} className="mx-2 px-4 py-2 bg-blue-500 text-white">
            English
          </button>
          <button onClick={() => changeLanguage("it")} className="mx-2 px-4 py-2 bg-blue-500 text-white">
            Italiano
          </button>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("ico.details.title") || "ICO Details"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                {t("ico.details.phase1.title") || "Pre-Sale"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.phase1.description") ||
                  "Price: $0.01 per $ROOT - Available: 200M tokens - Starts: April 1, 2025"}
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                {t("ico.details.phase2.title") || "Public Sale"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.phase2.description") ||
                  "Price: $0.02 per $ROOT - Available: 200M tokens - Starts: April 15, 2025"}
              </p>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {t("ico.details.total.title") || "Total ICO"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.total.description") ||
                  "400M $ROOT tokens (40% of total supply) to fund our mining farm"}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("ico.finalCta.title") || "Don’t Miss This Opportunity!"}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {t("ico.finalCta.description") ||
              "The ICO is the best time to join BlockRoots: secure your $ROOT tokens now!"}
          </p>
          <a
            href="#join-now"
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {t("ico.finalCta.button") || "Buy Now"}
          </a>
        </div>
      </div>
    </section>
  );
}