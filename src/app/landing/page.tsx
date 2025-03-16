import Hero from "@/components/Hero"; 
import Roadmap from "@/components/Roadmap";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import BudgetAndTransparency from "@/components/BudgetAndTransparency";
import SupporterRewards from "@/components/SupporterRewards";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* How It Works Section */}
      <HowItWorks />


      {/* Roadmap Section */}
      <Roadmap />

      {/* Budget & Transparency Section */}
      <BudgetAndTransparency />

      {/* Supporter Rewards Section */}
      <SupporterRewards />

      {/* FAQ Section */}
      <FAQ />

      {/* Team Section */}
      <Team />

      {/* Contact & Community Section */}
      <Contact />


    </main>
  );
}
