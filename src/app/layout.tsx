import type { Metadata } from "next";
import "@/styles/globals.css";
import { Suspense } from "react";
import TranslationProvider from "@/components/TranslationProvider";

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
            {children}
          </TranslationProvider>
        </Suspense>
      </body>
    </html>
  );
}