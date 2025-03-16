"use client";  // Aggiungi questa riga per forzare il rendering lato client

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

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
        <h1 className="text-4xl md:text-6xl font-bold">Join the Future of Mining</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          Decentralized, Transparent, and Sustainable.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex space-x-4">
          <Link href="/crowdfunding">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
              Support Us Now
            </button>
          </Link>

          <Link href="#about">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
