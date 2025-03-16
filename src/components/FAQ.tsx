"use client";  // Forza il rendering lato client

import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importa le icone della freccia

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null); // Collapse if the same question is clicked
    } else {
      setActiveIndex(index); // Expand the clicked question
    }
  };

  return (
    <section id="faq" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-left"> {/* Allineamento a sinistra */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {/* Domanda 1 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            onClick={() => toggleAccordion(0)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                What is BlockRoots?
              </h3>
              <span>
                {activeIndex === 0 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                height: activeIndex === 0 ? "auto" : "0px", // Uso dell'altezza dinamica
              }}
            >
              {activeIndex === 0 && (
                <p className="text-gray-400 mt-4">
                  BlockRoots is the first Social Mining Farm, designed to provide decentralized cryptocurrency mining with a focus on sustainability and transparency. Users can participate by supporting our project and receive rewards based on their contribution.
                </p>
              )}
            </div>
          </div>

          {/* Domanda 2 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            onClick={() => toggleAccordion(1)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                How does the mining process work?
              </h3>
              <span>
                {activeIndex === 1 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                height: activeIndex === 1 ? "auto" : "0px",
              }}
            >
              {activeIndex === 1 && (
                <p className="text-gray-400 mt-4">
                  Once you contribute to BlockRoots, you will be able to monitor the mining process via our live dashboard. Your contribution helps fund the purchase of mining hardware and energy upgrades, and you will receive a share of the profits.
                </p>
              )}
            </div>
          </div>

          {/* Domanda 3 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            onClick={() => toggleAccordion(2)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                How are funds allocated?
              </h3>
              <span>
                {activeIndex === 2 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                height: activeIndex === 2 ? "auto" : "0px",
              }}
            >
              {activeIndex === 2 && (
                <p className="text-gray-400 mt-4">
                  The funds are allocated as follows: 60% for hardware and infrastructure, 15% for energy upgrades, 5% for marketing, and 5% for security. The remaining funds are reserved for renewable energy R&D and an emergency reserve.
                </p>
              )}
            </div>
          </div>

          {/* Domanda 4 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            onClick={() => toggleAccordion(3)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                What happens after the campaign ends?
              </h3>
              <span>
                {activeIndex === 3 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                height: activeIndex === 3 ? "auto" : "0px",
              }}
            >
              {activeIndex === 3 && (
                <p className="text-gray-400 mt-4">
                  After the campaign ends, we will begin purchasing hardware and setting up the mining farm. Regular updates will be provided, and supporters will be able to track their contribution through the live dashboard.
                </p>
              )}
            </div>
          </div>

          {/* Domanda 5 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg"
            data-aos="fade-up"
            onClick={() => toggleAccordion(4)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white cursor-pointer">
                Can I get a refund if I change my mind?
              </h3>
              <span>
                {activeIndex === 4 ? (
                  <IoIosArrowUp className="text-white text-3xl" />
                ) : (
                  <IoIosArrowDown className="text-white text-3xl" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                height: activeIndex === 4 ? "auto" : "0px",
              }}
            >
              {activeIndex === 4 && (
                <p className="text-gray-400 mt-4">
                  Contributions are non-refundable once the funds have been allocated to the project. However, if you encounter any issues, please contact our support team for assistance.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
