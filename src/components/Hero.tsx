"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden hero-overlay">
      {/* Video di sfondo */}
      {isClient ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/abstract-hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-black"></div>
      )}

      {/* Contenuto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          {t("hero.title") || "Empowering Decentralized Mining"}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          {t("hero.description") ||
            "Join BlockRoots and earn from a transparent, community-driven mining farm."}
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex space-x-4">
          <Link href="/ico">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
              {t("hero.cta.join") || "Join the ICO"}
            </button>
          </Link>

          <Link href="#about">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition">
              {t("hero.cta.learnMore") || "Learn More"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}