"use client";
import React from "react";
import CandleStickChart from "./CandleStickChart"; // Assicurati di avere un componente grafico a candela per l'andamento delle statistiche

export default function Chart1() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col rounded-[15px] w-[851px] p-8">
      <div className="flex justify-between items-start">
        <div className="flex justify-between w-1/3">
          {/* Hashrate e Guadagni */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Hashrate</h1>
            <p></p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">920TH/s</h1> {/* Inserisci il valore dell'hashrate */}
            <p>+8.2%</p> {/* Modifica il valore dell'incremento in base ai dati */}
          </div>
        </div>

        <div className="flex gap-4">
          {/* Pulsanti per il periodo di visualizzazione */}
          <a
            className="bg-gray-100 dark:bg-dark text-primary rounded-md font-bold text-sm p-2"
            href="#"
          >
            1H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#"
          >
            3H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#"
          >
            5H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#"
          >
            1D
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#"
          >
            1W
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#"
          >
            1M
          </a>
        </div>
      </div>

      <div className="w-full pt-8">
        {/* Aggiungi il grafico delle performance relative a hashrate e guadagni */}
        <CandleStickChart />
      </div>

      <div className="flex justify-between items-center pt-6">
        {/* Guadagni */}
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Guadagni Totali</h1>
          <p></p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">€15,300</h1> {/* Guadagni totali */}
          <p>+12.5%</p> {/* Modifica in base ai dati */}
        </div>
      </div>
    </div>
  );
}
