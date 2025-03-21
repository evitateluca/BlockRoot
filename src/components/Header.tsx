"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Stato per il dropdown mobile
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Lingua corrente:", i18n.language); // Debug
  }, [i18n.language]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false); // Chiude il dropdown mobile dopo la selezione
  };

  return (
    <header
      className={`transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50 ${
        scrolling ? "h-16 bg-black bg-opacity-90" : "h-24 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          BlockRoots
        </Link>

        {/* Menu per Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="text-white hover:text-gray-400">
            {t("header.about")}
          </Link>
          <Link href="#how-it-works" className="text-white hover:text-gray-400">
            {t("header.howItWorks")}
          </Link>
          <Link href="#roadmap" className="text-white hover:text-gray-400">
            {t("header.roadmap")}
          </Link>
          <Link href="#budget" className="text-white hover:text-gray-400">
            {t("header.budget")}
          </Link>
          <Link href="#rewards" className="text-white hover:text-gray-400">
            {t("header.rewards")}
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-400">
            {t("header.contact")}
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md"
          >
            {t("header.login")}
          </Link>
          {/* Dropdown lingua per desktop (dopo Login) */}
          <div className="relative group">
            <button className="text-white hover:text-gray-400 flex items-center space-x-1">
              <ReactCountryFlag
                countryCode={i18n.language === "en" ? "GB" : "IT"}
                svg
                style={{ width: "1.5em", height: "1.5em" }}
                title={i18n.language === "en" ? "English" : "Italiano"}
              />
              <span>{i18n.language === "en" ? "EN" : "IT"}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute right-0 hidden group-hover:block bg-black bg-opacity-95 border border-gray-800 rounded-lg shadow-lg mt-2 py-2 w-36">
              <button
                onClick={() => changeLanguage("en")}
                className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                  title="English"
                />
                English
              </button>
              <button
                onClick={() => changeLanguage("it")}
                className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
              >
                <ReactCountryFlag
                  countryCode="IT"
                  svg
                  style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                  title="Italiano"
                />
                Italiano
              </button>
            </div>
          </div>
        </nav>

        {/* Menu Hamburger per mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute top-0 left-0 w-full p-6 z-50">
          <nav className="space-y-4">
            <Link href="#about" className="block text-white hover:text-gray-400">
              {t("header.about")}
            </Link>
            <Link
              href="#how-it-works"
              className="block text-white hover:text-gray-400"
            >
              {t("header.howItWorks")}
            </Link>
            <Link href="#roadmap" className="block text-white hover:text-gray-400">
              {t("header.roadmap")}
            </Link>
            <Link href="#budget" className="block text-white hover:text-gray-400">
              {t("header.budget")}
            </Link>
            <Link href="#rewards" className="block text-white hover:text-gray-400">
              {t("header.rewards")}
            </Link>
            <Link href="#contact" className="block text-white hover:text-gray-400">
              {t("header.contact")}
            </Link>
            <Link
              href="/login"
              className="block w-full text-center px-6 py-3 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md"
            >
              {t("header.login")}
            </Link>
            {/* Dropdown lingua per mobile (dopo Login) */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="w-full bg-black bg-opacity-95 text-white border border-gray-800 rounded-lg py-2 px-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <ReactCountryFlag
                    countryCode={i18n.language === "en" ? "GB" : "IT"}
                    svg
                    style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                  />
                  {i18n.language === "en" ? "English" : "Italiano"}
                </div>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute w-full bg-black bg-opacity-95 border border-gray-800 rounded-lg shadow-lg mt-1">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    <ReactCountryFlag
                      countryCode="GB"
                      svg
                      style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                    />
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("it")}
                    className="flex items-center w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    <ReactCountryFlag
                      countryCode="IT"
                      svg
                      style={{ width: "1.5em", height: "1.5em", marginRight: "0.5em" }}
                    />
                    Italiano
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}