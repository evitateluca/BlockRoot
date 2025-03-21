import type { Metadata } from "next";
import AOSInitializer from "@/components/AOSInitializer"; // Importa il componente per AOS
import "@/styles/globals.css"; // Import corretto con alias "@"
import Header from "@/components/Header"; // Importa il componente Header
import Footer from "@/components/Footer"; // Importa il componente Footer
import { Suspense } from "react";
import TranslationProvider from "@/components/TranslationProvider"; // Importa il componente TranslationProvider

export const metadata: Metadata = {
  title: "BlockRoots - The Future of Mining",
  description: "Decentralized, Transparent, and Sustainable Mining",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <TranslationProvider>
            <main>{children}</main>
          </TranslationProvider>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
