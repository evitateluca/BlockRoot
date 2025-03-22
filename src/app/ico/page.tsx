"use client";

import dynamic from "next/dynamic";

const ICOContent = dynamic(() => import("./ICOContent"), { ssr: false });

export default function ICO() {
  return (
    <section id="ico" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Participate in the BlockRoots ICO
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Join the decentralized mining revolution: buy $ROOT tokens and be part of a transparent and profitable future!
          </p>
          <ICOContent />
        </div>
        {/* Altre sezioni statiche possono essere aggiunte qui */}
      </div>
    </section>
  );
}