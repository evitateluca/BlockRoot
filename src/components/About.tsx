"use client";  // Forza il rendering lato client

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS
import Link from "next/link";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Introduzione Breve */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          About BlockRoots
        </h2>
        <p className="text-lg text-gray-400 mb-12" data-aos="fade-up" data-aos-delay="200">
          BlockRoots is not just a mining farm; it's a decentralized, sustainable initiative that empowers individuals through transparent and eco-friendly cryptocurrency mining.
        </p>

        {/* Sezione Vision */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-yellow-400 mb-4">
              <i className="fas fa-eye fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-400">
              We envision a future where cryptocurrency mining is accessible, eco-friendly, and driven by a passionate, decentralized community.
            </p>
          </div>

          {/* Sezione Mission */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-green-400 mb-4">
              <i className="fas fa-bullseye fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              Our mission is to make mining accessible to all, promoting sustainability and inclusivity in the process. By leveraging renewable energy, we aim to minimize our environmental footprint.
            </p>
          </div>

          {/* Sezione Impegno */}
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card w-full md:w-1/3">
            <div className="text-blue-400 mb-4">
              <i className="fas fa-handshake fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-400">
              We are committed to full transparency, ethical practices, and sustainability in every step of our mining operations.
            </p>
          </div>
        </div>

        {/* CTA (Call to Action) */}
        <div data-aos="fade-up" data-aos-delay="600">
            <Link href="#cta">
                <button className="mt-8 px-8 py-3 text-white font-semibold rounded-lg shadow-md transition-all">
                    Join the Movement
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
