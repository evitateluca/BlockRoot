"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";

export default function ICOContent() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const endDate = new Date("2025-05-21T00:00:00Z").getTime();

  const wallets = [
    { name: "MetaMask", favicon: "/wallets/metamask.ico", url: "https://metamask.io" },
    { name: "Phantom", favicon: "/wallets/phantom.ico", url: "https://phantom.app" },
    { name: "Trust Wallet", favicon: "/wallets/trustwallet.ico", url: "https://trustwallet.com" },
    { name: "Coinbase Wallet", favicon: "/wallets/coinbase.ico", url: "https://www.coinbase.com/wallet" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex justify-center space-x-6 mb-8">
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-green-400">
            {timeLeft.days}
          </span>
          <span className="text-gray-400">{t("ico.hero.countdown.days") || "Days"}</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-green-400">
            {timeLeft.hours}
          </span>
          <span className="text-gray-400">{t("ico.hero.countdown.hours") || "Hours"}</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-green-400">
            {timeLeft.minutes}
          </span>
          <span className="text-gray-400">{t("ico.hero.countdown.minutes") || "Minutes"}</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl md:text-4xl font-bold text-green-400">
            {timeLeft.seconds}
          </span>
          <span className="text-gray-400">{t("ico.hero.countdown.seconds") || "Seconds"}</span>
        </div>
      </div>
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          {t("ico.hero.cta") || "Buy $ROOT Now"}
          <IoIosArrowDown className={`ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
        </button>
        {isDropdownOpen && (
          <div className="relative left-0 mt-2 w-full bg-black bg-opacity-90 rounded-lg shadow-lg z-10">
            {wallets.map((wallet) => (
              <a
                key={wallet.name}
                href={wallet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition duration-200"
              >
                <img
                  src={wallet.favicon}
                  alt={`${wallet.name} favicon`}
                  className="w-5 h-5 mr-2"
                />
                {wallet.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}