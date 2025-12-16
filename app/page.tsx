import Hero from "./(components)/Hero";
import Client from "./(components)/clients";
import Partner from "./(components)/partners";
import About from "./(components)/about";
import Affordable from "./(components)/affordable";
import TechstackSection from "./(components)/TechstackSection";
import PortfolioHome from "./(components)/portfolioSection";
import ServiceSection from "./(components)/serviceSection";

import TellUs from "@/components/layouts/TellUs";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Client />
      <Partner />
      <About />
      <Affordable />
      <TechstackSection />
      <ServiceSection />
      <PortfolioHome />
      <TellUs />
    </main>
  );
}