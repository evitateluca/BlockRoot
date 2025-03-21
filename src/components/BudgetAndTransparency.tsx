"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import AOS from "aos";
import "aos/dist/aos.css";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function BudgetAndTransparency() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = {
    labels: [
      t("budget.labels.ico") || "ICO (40%)",
      t("budget.labels.team") || "Team & Founders (10%)",
      t("budget.labels.miningFarm") || "Mining Farm (20%)",
      t("budget.labels.community") || "Community & Rewards (10%)",
      t("budget.labels.marketing") || "Marketing & Partnerships (10%)",
      t("budget.labels.reserve") || "Strategic Reserve (10%)",
    ],
    datasets: [
      {
        data: [40, 10, 20, 10, 10, 10],
        backgroundColor: [
          "#F59E0B", // Giallo per ICO
          "#3B82F6", // Blu per Team & Founders
          "#10B981", // Verde per Mining Farm
          "#8B5CF6", // Viola per Community & Rewards
          "#D1D5DB", // Grigio per Marketing & Partnerships
          "#EF4444", // Rosso per Strategic Reserve
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
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          data-aos="fade-up"
        >
          {t("budget.title") || "Token Distribution & Transparency"}
        </h2>

        {/* Descrizione breve */}
        <p
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t("budget.description") ||
            "BlockRoots ensures full transparency in how the 1 billion $ROOT tokens are allocated to build a sustainable, community-driven mining ecosystem."}
        </p>

        {/* Tabella e Grafico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            className="overflow-x-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <table className="min-w-full table-auto border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-lg font-semibold">
                    {t("budget.table.category") || "Category"}
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-semibold">
                    {t("budget.table.percentage") || "Percentage"}
                  </th>
                  <th className="px-6 py-3 text-left text-lg font-semibold">
                    {t("budget.table.tokens") || "Tokens"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.ico") || "ICO"}</td>
                  <td className="px-6 py-4">40%</td>
                  <td className="px-6 py-4">400,000,000 $ROOT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.team") || "Team & Founders"}</td>
                  <td className="px-6 py-4">10%</td>
                  <td className="px-6 py-4">100,000,000 $ROOT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.miningFarm") || "Mining Farm"}</td>
                  <td className="px-6 py-4">20%</td>
                  <td className="px-6 py-4">200,000,000 $ROOT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.community") || "Community & Rewards"}</td>
                  <td className="px-6 py-4">10%</td>
                  <td className="px-6 py-4">100,000,000 $ROOT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.marketing") || "Marketing & Partnerships"}</td>
                  <td className="px-6 py-4">10%</td>
                  <td className="px-6 py-4">100,000,000 $ROOT</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">{t("budget.labels.reserve") || "Strategic Reserve"}</td>
                  <td className="px-6 py-4">10%</td>
                  <td className="px-6 py-4">100,000,000 $ROOT</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Grafico a torta */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-4">
              {t("budget.chartTitle") || "Token Allocation"}
            </h3>
            <div className="bg-black rounded-lg p-4">
              <Pie
                data={data}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { position: "top", labels: { color: "#fff" } },
                    tooltip: {
                      backgroundColor: "#111",
                      titleColor: "#fff",
                      bodyColor: "#ddd",
                      borderColor: "#333",
                      borderWidth: 1,
                    },
                  },
                  animation: {
                    animateScale: true,
                    animateRotate: true,
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12" data-aos="fade-up" data-aos-delay="500">
          <a href="/ico">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300">
              {t("budget.cta") || "Join the ICO Now"}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}