"use client";

import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const AOSInitializer = dynamic(() => import("@/components/AOSInitializer"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInitializer />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}