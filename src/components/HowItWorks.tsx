"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function HowItWorks() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="how-it-works" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          {t("howItWorks.title") || "How BlockRoots Works"}
        </h2>

        {/* Introduzione generale */}
        <p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("howItWorks.description") ||
            "BlockRoots is a decentralized mining farm where the community mines together, shares profits, and governs the future using the $ROOT token."}
        </p>

        {/* Fasi del processo */}
        <div
          className="flex flex-col md:!flex md:!flex-row justify-center gap-12 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Step 1 - Join with $ROOT */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold mb-4 mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {t("howItWorks.step1.title") || "Join with $ROOT"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t("howItWorks.step1.description") ||
                "Get $ROOT tokens via ICO (pre-sale $0.01, public $0.02) to fund the farm and unlock profits and governance rights."}
            </p>
          </div>

          {/* Step 2 - Mining & Growth */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-black font-bold mb-4 mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              {t("howItWorks.step2.title") || "Mining & Growth"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t("howItWorks.step2.description") ||
                "The farm mines crypto, reinvesting a 5% transaction tax (2% hardware, 1% operations, 1% marketing, 1% rewards) to scale operations."}
            </p>
          </div>

          {/* Step 3 - Earn & Participate */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold mb-4 mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {t("howItWorks.step3.title") || "Earn & Participate"}
            </h3>
            <p className="text-gray-400 text-sm">
              {t("howItWorks.step3.description") ||
                "Hold $ROOT for profit shares (up to 15% after 6+ months), stake for rewards, and vote on the project’s direction."}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
          <Link href="/ico">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
              {t("howItWorks.cta") || "Join the ICO Now"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}