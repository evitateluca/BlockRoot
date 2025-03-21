"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SupporterRewards() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section id="rewards" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          {t("rewards.title") || "$ROOT Holder Rewards"}
        </h2>

        {/* Descrizione breve */}
        <p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("rewards.description") ||
            "Unlock exclusive rewards by holding $ROOT tokens in our decentralized mining ecosystem. The longer you stay, the bigger your share of the future!"}
        </p>

        {/* Card dei livelli di ricompensa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tier I - New Holder */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              {t("rewards.tier1.title") || "Tier I - New Holder"}
            </h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">
              {t("rewards.tier1.duration") || "1-3 Months"}
            </p>
            <p className="text-gray-400 mb-4">
              {t("rewards.tier1.description") ||
                "Kick off your BlockRoots journey with immediate benefits."}
            </p>
            <ul className="text-left text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>
                {t("rewards.tier1.benefits.profit") || "Earn "}{" "}
                <span className="text-yellow-400">
                  {t("rewards.tier1.benefits.profitPercentage") || "5% of monthly mining profits"}
                </span>{" "}
                {t("rewards.tier1.benefits.profitEnd") || "from day one."}
              </li>
              <li>
                {t("rewards.tier1.benefits.updates") ||
                  "Get insider community updates on mining progress."}
              </li>
              <li>
                {t("rewards.tier1.benefits.staking") ||
                  "Unlock staking eligibility to grow your $ROOT holdings."}
              </li>
            </ul>
            <a href="/ico">
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition duration-300">
                {t("rewards.cta") || "Get $ROOT Now"}
              </button>
            </a>
          </div>

          {/* Tier II - Loyal Holder */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              {t("rewards.tier2.title") || "Tier II - Loyal Holder"}
            </h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">
              {t("rewards.tier2.duration") || "3-6 Months"}
            </p>
            <p className="text-gray-400 mb-4">
              {t("rewards.tier2.description") ||
                "Build your stake and gain a stronger voice in our ecosystem."}
            </p>
            <ul className="text-left text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>
                {t("rewards.tier2.benefits.profit") || "Boost your earnings with "}{" "}
                <span className="text-green-400">
                  {t("rewards.tier2.benefits.profitPercentage") || "10% of monthly profits"}
                </span>
                .
              </li>
              <li>
                {t("rewards.tier2.benefits.staking") ||
                  "Enjoy priority staking rewards for higher returns."}
              </li>
              <li>
                {t("rewards.tier2.benefits.governance") ||
                  "Vote on key governance decisions to shape BlockRoots."}
              </li>
            </ul>
            <a href="/ico">
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg shadow-md transition duration-300">
                {t("rewards.cta") || "Get $ROOT Now"}
              </button>
            </a>
          </div>

          {/* Tier III - Veteran Holder */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              {t("rewards.tier3.title") || "Tier III - Veteran Holder"}
            </h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">
              {t("rewards.tier3.duration") || "6+ Months"}
            </p>
            <p className="text-gray-400 mb-4">
              {t("rewards.tier3.description") ||
                "Become a cornerstone of BlockRoots with top-tier rewards."}
            </p>
            <ul className="text-left text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>
                {t("rewards.tier3.benefits.profit") || "Maximize profits with "}{" "}
                <span className="text-blue-400">
                  {t("rewards.tier3.benefits.profitPercentage") || "15% of monthly mining revenue"}
                </span>
                .
              </li>
              <li>
                {t("rewards.tier3.benefits.staking") ||
                  "Access enhanced staking bonuses for long-term growth."}
              </li>
              <li>
                {t("rewards.tier3.benefits.events") ||
                  "Join exclusive community events and AMAs with the team."}
              </li>
            </ul>
            <a href="/ico">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg shadow-md transition duration-300">
                {t("rewards.cta") || "Get $ROOT Now"}
              </button>
            </a>
          </div>

          {/* Tier IV - Staking Legend */}
          <div
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">
              {t("rewards.tier4.title") || "Tier IV - Staking Legend"}
            </h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">
              {t("rewards.tier4.duration") || "Staked $ROOT"}
            </p>
            <p className="text-gray-400 mb-4">
              {t("rewards.tier4.description") ||
                "Stake your $ROOT to unlock elite rewards and influence."}
            </p>
            <ul className="text-left text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>
                {t("rewards.tier4.benefits.perks") ||
                  "Includes all Veteran Holder perks, plus more."}
              </li>
              <li>
                {t("rewards.tier4.benefits.staking") || "Earn "}{" "}
                <span className="text-purple-400">
                  {t("rewards.tier4.benefits.stakingTokens") || "additional $ROOT tokens"}
                </span>{" "}
                {t("rewards.tier4.benefits.stakingEnd") || "through staking."}
              </li>
              <li>
                {t("rewards.tier4.benefits.governance") ||
                  "Gain priority in proposing and voting on ecosystem upgrades."}
              </li>
            </ul>
            <a href="/ico">
              <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-black font-semibold rounded-lg shadow-md transition duration-300">
                {t("rewards.cta") || "Get $ROOT Now"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}