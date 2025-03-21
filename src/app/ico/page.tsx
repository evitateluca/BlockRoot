"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from "react-icons/io"; // Icona per il dropdown

export default function ICO() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Stato per il dropdown

  const endDate = new Date("2025-05-21T00:00:00Z").getTime();

  // Lista dei wallet con nome e URL favicon
  const wallets = [
    { name: "MetaMask", favicon: "https://metamask.io/favicon.ico", url: "https://metamask.io" },
    { name: "Phantom", favicon: "https://phantom.com/favicon/favicon.ico", url: "https://phantom.app" },
    { name: "Trust Wallet", favicon: "https://trustwallet.com/favicon.ico", url: "https://trustwallet.com" },
    { name: "Coinbase Wallet", favicon: "https://www.coinbase.com/favicon.ico", url: "https://www.coinbase.com/wallet" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

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

  // Funzione per toggle del dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="ico" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Hero Section con Countdown e Dropdown */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            {t("ico.hero.title") || "Partecipa all’ICO di BlockRoots"}
          </h1>
          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("ico.hero.description") ||
              "Unisciti alla rivoluzione del mining decentralizzato: acquista i token $ROOT e diventa parte di un futuro trasparente e redditizio!"}
          </p>
          {/* Countdown */}
          <div
            className="flex justify-center space-x-6 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-green-400">
                {timeLeft.days}
              </span>
              <span className="text-gray-400">{t("ico.hero.countdown.days") || "Giorni"}</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-green-400">
                {timeLeft.hours}
              </span>
              <span className="text-gray-400">{t("ico.hero.countdown.hours") || "Ore"}</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-green-400">
                {timeLeft.minutes}
              </span>
              <span className="text-gray-400">{t("ico.hero.countdown.minutes") || "Minuti"}</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold text-green-400">
                {timeLeft.seconds}
              </span>
              <span className="text-gray-400">{t("ico.hero.countdown.seconds") || "Secondi"}</span>
            </div>
          </div>
          {/* Dropdown al posto del pulsante */}
          <div
            className="relative inline-block"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center px-8 py-4 !bg-green-600 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              {t("ico.hero.cta") || "Acquista ora i tuoi $ROOT"}
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
        </div>

        {/* Dettagli ICO */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            {t("ico.details.title") || "Dettagli dell’ICO"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                {t("ico.details.phase1.title") || "Pre-vendita"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.phase1.description") ||
                  "Prezzo: $0.01 per $ROOT - Disponibili: 200M token - Inizia: 1° aprile 2025"}
              </p>
            </div>
            <div
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                {t("ico.details.phase2.title") || "Vendita pubblica"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.phase2.description") ||
                  "Prezzo: $0.02 per $ROOT - Disponibili: 200M token - Inizia: 15 aprile 2025"}
              </p>
            </div>
            <div
              className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {t("ico.details.total.title") || "Totale ICO"}
              </h3>
              <p className="text-gray-400">
                {t("ico.details.total.description") ||
                  "400M token $ROOT (40% del totale) per finanziare la nostra mining farm"}
              </p>
            </div>
          </div>
        </div>

        {/* Vantaggi */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            {t("ico.benefits.title") || "Perché partecipare ora?"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                {t("ico.benefits.price.title") || "Prezzo imbattibile"}
              </h3>
              <p className="text-gray-400">
                {t("ico.benefits.price.description") ||
                  "Ottieni $ROOT a partire da $0.01, il miglior affare prima della quotazione!"}
              </p>
            </div>
            <div
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                {t("ico.benefits.profits.title") || "Profitti immediati"}
              </h3>
              <p className="text-gray-400">
                {t("ico.benefits.profits.description") ||
                  "Inizia a guadagnare fino al 15% dei profitti mensili della farm."}
              </p>
            </div>
            <div
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {t("ico.benefits.voice.title") || "La tua voce conta"}
              </h3>
              <p className="text-gray-400">
                {t("ico.benefits.voice.description") ||
                  "Decidi il futuro di BlockRoots con il potere di voto dei token."}
              </p>
            </div>
          </div>
        </div>

        {/* Come partecipare */}
        <div className="mb-16">
          <h2
            className="text-3xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            {t("ico.howTo.title") || "Come partecipare"}
          </h2>
          <ol
            className="space-y-6 max-w-2xl mx-auto text-gray-400"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>
              <span className="text-green-400 font-semibold">1. </span>
              {t("ico.howTo.step1") ||
                "Crea un wallet compatibile (es. MetaMask) e aggiungi fondi in criptovaluta (ETH, USDT)."}
            </li>
            <li>
              <span className="text-green-400 font-semibold">2. </span>
              {t("ico.howTo.step2") ||
                "Visita il nostro portale ICO e connetti il tuo wallet."}
            </li>
            <li>
              <span className="text-green-400 font-semibold">3. </span>
              {t("ico.howTo.step3") ||
                "Scegli quanti $ROOT vuoi acquistare e completa la transazione."}
            </li>
            <li>
              <span className="text-green-400 font-semibold">4. </span>
              {t("ico.howTo.step4") ||
                "Ricevi i tuoi token e inizia a guadagnare con BlockRoots!"}
            </li>
          </ol>
        </div>

        {/* CTA Finale */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-6">
            {t("ico.finalCta.title") || "Non perdere questa occasione!"}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {t("ico.finalCta.description") ||
              "L’ICO è il momento migliore per entrare in BlockRoots: assicurati i tuoi $ROOT e unisciti alla rivoluzione del mining!"}
          </p>
          <a
            href="#join-now"
            className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            {t("ico.finalCta.button") || "Acquista ora"}
          </a>
        </div>
      </div>
    </section>
  );
}