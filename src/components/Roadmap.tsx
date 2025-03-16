"use client"; // Aggiungi questa riga per forzare il rendering lato client

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Roadmap() {
  const [scrollY, setScrollY] = useState(0);

  // Funzione per aggiornare la posizione della linea durante lo scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Imposta lo scroll in Y
    };

    window.addEventListener("scroll", handleScroll);

    // Pulisci l'event listener al momento della dismontaggio
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="roadmap" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Roadmap</h2>

        <div className="relative flex flex-col items-center justify-center">
          {/* <div
            className="absolute left-1/2 border-l-4 border-dashed border-gray-500 timeline-line"
            style={{
              top: `${Math.min(scrollY * 0.25, window.innerHeight * 0.25)}px`,
              transform: `translateX(-50%)`,
              zIndex: 10,
            }}
          ></div> */}

          {/* Fase 1 */}
          <div
            data-aos="fade-up"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold">Phase 1: Fundraising</h3>
              <p className="text-gray-400 mt-4">
                We will raise funds for hardware, infrastructure, and community building.
              </p>
            </div>
          </div>

          {/* Fase 2 */}
          <div
            data-aos="fade-up"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold">Phase 2: Hardware Setup</h3>
              <p className="text-gray-400 mt-4">
                Purchase and set up the mining hardware and infrastructure.
              </p>
            </div>
          </div>

          {/* Fase 3 */}
          <div
            data-aos="fade-up"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold">Phase 3: Green Energy Integration</h3>
              <p className="text-gray-400 mt-4">
                Transition to renewable energy sources to power the mining farm.
              </p>
            </div>
          </div>

          {/* Fase 4 */}
          <div
            data-aos="fade-up"
            className="timeline-item flex items-center space-x-4 max-w-3xl mx-auto mb-16"
          >
            <div className="glass-card w-full sm:w-180 mx-auto p-8 mt-6 relative">
              <h3 className="text-xl font-semibold">Phase 4: Expansion</h3>
              <p className="text-gray-400 mt-4">
                Expanding the farm based on community involvement and results.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="#cta">
            <button className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition">
              Get Updates
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
