"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Roadmap() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="roadmap" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto text-center px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          {t("roadmap.title") || "Our Roadmap"}
        </h2>

        <div className="relative flex flex-col items-center justify-center">
          {/* Phase 1 - Pre-ICO & Pre-launch */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold text-yellow-400">
                {t("roadmap.phase1.title") || "Phase 1: Pre-ICO & Pre-launch"}
              </h3>
              <p className="text-gray-400 mt-4">
                {t("roadmap.phase1.description") ||
                  "Whitepaper creation, $ROOT token smart contract development, and ICO preparation."}
              </p>
            </div>
          </div>

          {/* Phase 2 - ICO Launch */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold text-green-400">
                {t("roadmap.phase2.title") || "Phase 2: ICO Launch"}
              </h3>
              <p className="text-gray-400 mt-4">
                {t("roadmap.phase2.description") ||
                  "Fundraising campaign, token distribution, and initial mining hardware purchase."}
              </p>
            </div>
          </div>

          {/* Phase 3 - Expansion & Engagement */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold text-blue-400">
                {t("roadmap.phase3.title") || "Phase 3: Expansion & Engagement"}
              </h3>
              <p className="text-gray-400 mt-4">
                {t("roadmap.phase3.description") ||
                  "Scale the farm, distribute monthly profits, and engage the community with airdrops and events."}
              </p>
            </div>
          </div>

          {/* Phase 4 - New Features */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold text-purple-400">
                {t("roadmap.phase4.title") || "Phase 4: New Features"}
              </h3>
              <p className="text-gray-400 mt-4">
                {t("roadmap.phase4.description") ||
                  "Add profit monitoring tools, reward long-term holders, and list $ROOT on exchanges."}
              </p>
            </div>
          </div>

          {/* Phase 5 - DeFi & Sustainability */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold text-red-400">
                {t("roadmap.phase5.title") || "Phase 5: DeFi & Sustainability"}
              </h3>
              <p className="text-gray-400 mt-4">
                {t("roadmap.phase5.description") ||
                  "Integrate DeFi and sustainable energy solutions to enhance $ROOT utility and farm longevity."}
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/ico">
            <button className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
              {t("roadmap.cta") || "Join the ICO Now"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}