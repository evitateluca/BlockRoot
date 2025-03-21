"use client";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Team() {
  const { t, i18n } = useTranslation();

  // Funzione per cambiare lingua (esempio)
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <section id="team" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {t("team.title")}
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          {t("team.description")}
        </p>

        {/* Pulsanti per switch lingua (temporanei) */}
        {/* <div className="mb-8">
          <button
            onClick={() => changeLanguage("en")}
            className="px-4 py-2 mr-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
          >
            Italiano
          </button>
        </div> */}

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              alt={t("team.members.marco.name")}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {t("team.members.marco.name")}
            </h3>
            <p className="text-gray-400 mb-4">
              {t("team.members.marco.role")}
            </p>
            <p className="text-gray-500 mb-4">
              {t("team.members.marco.bio")}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-blue-400 hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              alt={t("team.members.elena.name")}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {t("team.members.elena.name")}
            </h3>
            <p className="text-gray-400 mb-4">
              {t("team.members.elena.role")}
            </p>
            <p className="text-gray-500 mb-4">
              {t("team.members.elena.bio")}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-600 hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
              alt={t("team.members.luca.name")}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {t("team.members.luca.name")}
            </h3>
            <p className="text-gray-400 mb-4">
              {t("team.members.luca.role")}
            </p>
            <p className="text-gray-500 mb-4">
              {t("team.members.luca.bio")}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-blue-400 hover:text-blue-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}