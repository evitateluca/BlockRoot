"use client";  // Forza il rendering lato client

import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function BudgetAndTransparency() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = {
    labels: [
      "ASIC Miners",
      "Cooling & Security",
      "Energy Upgrades",
      "Marketing & Admin",
      "Renewable Energy R&D",
      "Emergency Reserve",
    ],
    datasets: [
      {
        data: [60, 5, 15, 5, 10, 5],
        backgroundColor: [
          "#1F2937", // Colore scuro per ASIC Miners
          "#3B82F6", // Blu per Cooling & Security
          "#10B981", // Verde per Energy Upgrades
          "#F59E0B", // Giallo per Marketing & Admin
          "#8B5CF6", // Viola per Renewable Energy R&D
          "#D1D5DB", // Grigio chiaro per Emergency Reserve
        ],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <section id="budget" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        {/* Titolo della sezione */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Budget & Transparency
        </h2>

        {/* Descrizione breve */}
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8" data-aos="fade-up">
          We are committed to transparency in every step of our journey. Here's how we plan to allocate the funds:
        </p>

        {/* Tabella */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="overflow-x-auto mb-12" data-aos="fade-up">
                <table className="min-w-full table-auto border-collapse border border-gray-700">
                    <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-lg font-semibold">Category</th>
                        <th className="px-6 py-3 text-left text-lg font-semibold">Percentage</th>
                        <th className="px-6 py-3 text-left text-lg font-semibold">Estimated Amount (€)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="px-6 py-4">ASIC Miners</td>
                        <td className="px-6 py-4">60%</td>
                        <td className="px-6 py-4">€18,000 - €30,000</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Cooling & Security</td>
                        <td className="px-6 py-4">5%</td>
                        <td className="px-6 py-4">€1,500 - €2,500</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Energy Upgrades</td>
                        <td className="px-6 py-4">15%</td>
                        <td className="px-6 py-4">€4,500 - €7,500</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Marketing & Admin</td>
                        <td className="px-6 py-4">5%</td>
                        <td className="px-6 py-4">€1,500 - €2,500</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Renewable Energy R&D</td>
                        <td className="px-6 py-4">10%</td>
                        <td className="px-6 py-4">€3,000 - €5,000</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Emergency Reserve</td>
                        <td className="px-6 py-4">5%</td>
                        <td className="px-6 py-4">€1,500 - €2,500</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Grafico a torta */}
            <div data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-4">Budget Visualization</h3>
                <div className="bg-black rounded-lg p-4">
                    <Pie data={data} options={{ 
                    responsive: true, 
                    plugins: {
                        legend: { position: "top" },
                        tooltip: { 
                        backgroundColor: "#111", 
                        titleColor: "#fff", 
                        bodyColor: "#ddd", 
                        borderColor: "#333", 
                        borderWidth: 1 
                        }
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                    }} />
                </div>
            </div>
        </div>

        {/* CTA (Call to Action) */}
        <div className="mt-12" data-aos="fade-up">
          <a href="#cta">
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-all">
              Support BlockRoots Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
