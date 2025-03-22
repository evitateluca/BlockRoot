"use client";

import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import i18n from "@/lib/i18n";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Roadmap = dynamic(() => import("@/components/Roadmap"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const BudgetAndTransparency = dynamic(() => import("@/components/BudgetAndTransparency"), { ssr: false });
const SupporterRewards = dynamic(() => import("@/components/SupporterRewards"), { ssr: false });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: false });
const Team = dynamic(() => import("@/components/Team"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  const { t } = useTranslation("translation"); // Aggiornato a "translation"

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Roadmap />
      <BudgetAndTransparency />
      <SupporterRewards />
      <FAQ />
      <Team />
      <Contact />
    </main>
  );
}