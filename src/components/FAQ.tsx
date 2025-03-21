"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("faq.title") || "Frequently Asked Questions"}
        </h2>

        <div className="space-y-6">
          {/* Domanda 1 - Per principianti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q1.question") || "What is BlockRoots in simple terms?"}
              </h3>
              <span>
                {activeIndex === 0 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 0 ? "auto" : "0px" }}
            >
              {activeIndex === 0 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q1.answer") ||
                    "BlockRoots is like a community-owned cryptocurrency mining project. You buy $ROOT tokens, and they let you share the profits from mining digital coins, all while helping decide how the project grows. It’s simple, transparent, and open to everyone!"}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 2 - Per principianti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q2.question") || "How do I join BlockRoots?"}
              </h3>
              <span>
                {activeIndex === 1 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 1 ? "auto" : "0px" }}
            >
              {activeIndex === 1 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q2.answer") ||
                    "Just grab some $ROOT tokens during our ICO (starting at $0.01 in pre-sale). Hold them to earn a cut of the mining profits—up to 15% monthly after 6 months—or stake them for extra rewards. That’s it, you’re in!"}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 3 - Per tutti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q3.question") || "What are the $ROOT tokens for?"}
              </h3>
              <span>
                {activeIndex === 2 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 2 ? "auto" : "0px" }}
            >
              {activeIndex === 2 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q3.answer") ||
                    "$ROOT tokens are your key to BlockRoots. They let you earn mining profits (5-15% monthly based on how long you hold), vote on project decisions, and stake for extra tokens. They’re the fuel of our decentralized ecosystem."}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 4 - Per esperti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q4.question") || "How does the profit-sharing work technically?"}
              </h3>
              <span>
                {activeIndex === 3 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 3 ? "auto" : "0px" }}
            >
              {activeIndex === 3 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q4.answer") ||
                    "Profits from mined cryptocurrencies (like Bitcoin or Ethereum) are converted to a stablecoin monthly. These are then distributed to $ROOT holders based on holding duration: 5% for 1-3 months, 10% for 3-6 months, and 15% for 6+ months, proportional to your token amount."}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 5 - Per esperti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(4)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q5.question") || "What’s the 5% transaction tax used for?"}
              </h3>
              <span>
                {activeIndex === 4 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 4 ? "auto" : "0px" }}
            >
              {activeIndex === 4 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q5.answer") ||
                    "Every $ROOT trade has a 5% tax, split as: 2% to upgrade mining hardware, 1% for operational costs, 1% for marketing, and 1% redistributed as rewards to holders. It’s a self-sustaining mechanism to grow the farm and benefit the community."}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 6 - Per tutti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(5)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q6.question") || "How are the $ROOT tokens distributed?"}
              </h3>
              <span>
                {activeIndex === 5 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 5 ? "auto" : "0px" }}
            >
              {activeIndex === 5 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q6.answer") ||
                    "Out of 1 billion $ROOT tokens: 40% go to the ICO, 20% fund the mining farm, 10% are for the team (locked for 3 months), 10% for community rewards, 10% for marketing, and 10% as a reserve for future growth."}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 7 - Per principianti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(6)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q7.question") || "What happens if I miss the ICO?"}
              </h3>
              <span>
                {activeIndex === 6 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 6 ? "auto" : "0px" }}
            >
              {activeIndex === 6 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q7.answer") ||
                    "No worries! After the ICO, you can still buy $ROOT tokens on exchanges once they’re listed (planned for Phase 4). You’ll still earn profits and rewards, though ICO buyers get the best price ($0.01-$0.02)."}
                </p>
              )}
            </div>
          </div>

          {/* Domanda 8 - Per esperti */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            onClick={() => toggleAccordion(7)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                {t("faq.q8.question") || "How does staking affect my rewards and governance?"}
              </h3>
              <span>
                {activeIndex === 7 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: activeIndex === 7 ? "auto" : "0px" }}
            >
              {activeIndex === 7 && (
                <p className="text-gray-400 mt-4">
                  {t("faq.q8.answer") ||
                    "Staking locks your $ROOT tokens to earn extra $ROOT rewards (beyond the 5-15% profit share). It also boosts your voting power in governance, with staked tokens giving you priority in proposing and deciding on farm upgrades."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}