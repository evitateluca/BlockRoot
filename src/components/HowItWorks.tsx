"use client";  // Forza il rendering lato client

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="how-it-works" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          How BlockRoots Works
        </h2>

        {/* Introduzione generale */}
        <p className="text-lg text-gray-400 mb-12" data-aos="fade-up">
          BlockRoots is a community-driven mining farm where individuals can participate in cryptocurrency mining and earn rewards in a decentralized and transparent way.
        </p>

        {/* Fasi del processo */}
        <div className="space-y-12">
          {/* Fase 1 - Invest */}
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Step 1: Invest</h3>
              <p className="text-gray-400">
                Participate by investing in the BlockRoots mining farm. Your contribution will help fund the necessary infrastructure and mining equipment.
              </p>
            </div>
          </div>

          {/* Fase 2 - Mine */}
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Step 2: Mine</h3>
              <p className="text-gray-400">
                Once you invest, your funds will be used to mine cryptocurrencies. You’ll be part of a transparent mining process powered by renewable energy.
              </p>
            </div>
          </div>

          {/* Fase 3 - Earn */}
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Step 3: Earn</h3>
              <p className="text-gray-400">
                As mining generates profits, you’ll receive earnings based on your contribution. The rewards are paid transparently, and you can track your progress.
              </p>
            </div>
          </div>
        </div>

        {/* CTA (Call to Action) */}
        <div className="mt-12" data-aos="fade-up">
          <a href="#cta">
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-all">
              Join the Movement
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
