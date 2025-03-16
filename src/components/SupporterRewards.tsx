"use client";  // Forza il rendering lato client

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS

export default function SupporterRewards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="rewards" className="py-16 bg-black text-white">
    <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Supporter Rewards
        </h2>

        {/* Descrizione breve */}
        <p className="text-lg text-gray-400 mb-12" data-aos="fade-up">
          Your support is crucial for the success of BlockRoots. Here’s what you get by contributing:
        </p>

        {/* Card dei livelli di ricompensa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tier I - Supporter */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Tier I - SUPPORTER</h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">Up to €50</p>
            <p className="text-gray-400 mb-4">
              Show your support with a small contribution and get a personalized thank-you email, exclusive updates, and your name listed.
            </p>
            <ul className="text-left text-gray-300 mb-6">
              <li>Personalized thank-you email</li>
              <li>Exclusive updates on the project</li>
              <li>Your name listed on the website/Telegram</li>
            </ul>
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md">
              Support Now
            </button>
          </div>

          {/* Tier II - Community Member */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full ">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">Tier II - COMMUNITY MEMBER</h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">€50 - €100</p>
            <p className="text-gray-400 mb-4">
              Join our exclusive community and get early access to reports, plus some cool merchandise.
            </p>
            <ul className="text-left text-gray-300 mb-6">
              <li>Everything from Supporter tier</li>
              <li>Exclusive merchandise (stickers + digital badge)</li>
              <li>Access to private Telegram/Discord group</li>
            </ul>
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg shadow-md">
              Support Now
            </button>
          </div>

          {/* Tier III - Founder Supporter */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full ">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tier III - FOUNDER SUPPORTER</h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">€100 - €200</p>
            <p className="text-gray-400 mb-4">
              Become a founder supporter and get exclusive access to the live dashboard, monthly mining reports, and a certificate.
            </p>
            <ul className="text-left text-gray-300 mb-6">
              <li>Everything from Community Member tier</li>
              <li>Access to live mining dashboard</li>
              <li>Founder Supporter certificate</li>
            </ul>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg shadow-md">
              Support Now
            </button>
          </div>

          {/* Tier IV - Legendary Miner */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full ">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Tier IV - LEGENDARY MINER</h3>
            <p className="text-lg font-semibold text-gray-300 mb-4">Over €500</p>
            <p className="text-gray-400 mb-4">
              Become a legendary miner and gain exclusive access to decision-making and technical Q&A sessions with the project team.
            </p>
            <ul className="text-left text-gray-300 mb-6">
              <li>Everything from Founder Supporter tier</li>
              <li>Exclusive technical Q&A sessions</li>
              <li>Opportunity to participate in future expansions</li>
            </ul>
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-black font-semibold rounded-lg shadow-md">
              Support Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
