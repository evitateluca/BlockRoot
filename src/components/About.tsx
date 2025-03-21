"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faBullseye, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Introduzione Breve */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          {t("about.title") || "About BlockRoots"}
        </h2>
        <p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("about.description") ||
            "BlockRoots is a decentralized mining farm built by the community, for the community. We’re revolutionizing the industry by making mining accessible, transparent, and rewarding for everyone."}
        </p>

        {/* Sezione Vision, Mission, Why */}
        <div
          className="flex flex-col md:flex-row justify-center gap-12 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-yellow-400 mb-4">
              <FontAwesomeIcon icon={faEye} className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {t("about.vision.title") || "Our Vision"}
            </h3>
            <p className="text-gray-400">
              {t("about.vision.description") ||
                "To lead the future of decentralized mining, empowering individuals with a sustainable and community-driven ecosystem."}
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-green-400 mb-4">
              <FontAwesomeIcon icon={faBullseye} className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {t("about.mission.title") || "Our Mission"}
            </h3>
            <p className="text-gray-400">
              {t("about.mission.description") ||
                "To democratize mining, sharing profits fairly and leveraging blockchain for transparency and inclusivity."}
            </p>
          </div>

          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-blue-400 mb-4">
              <FontAwesomeIcon icon={faHandshake} className="text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {t("about.why.title") || "Why BlockRoots?"}
            </h3>
            <p className="text-gray-400">
              {t("about.why.description") ||
                "Unlike centralized mining giants, we lower barriers to entry and reward our community with equity in profits."}
            </p>
          </div>
        </div>

        {/* Sezione Tokenomics e Profit Sharing */}
        <div
          className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card text-left mb-8"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            {t("about.tokenomics.title") || "$ROOT Token & Ecosystem"}
          </h3>
          <p className="text-gray-400 mb-4">
            {t("about.tokenomics.description") ||
              "The $ROOT token powers BlockRoots, enabling participation, governance, and profit-sharing in our decentralized mining farm."}
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              {t("about.tokenomics.tax") ||
                "5% transaction tax: 2% for mining hardware, 1% for holders, 1% for operations, 1% for growth."}
            </li>
            <li>
              {t("about.tokenomics.profitSharing") ||
                "Profit-sharing: Up to 15% of monthly profits based on holding duration (6+ months)."}
            </li>
            <li>
              {t("about.tokenomics.staking") ||
                "Staking and rewards: Earn more $ROOT through community engagement."}
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="600">
          <Link href="/ico">
            <button className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
              {t("about.cta") || "Join the ICO"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}