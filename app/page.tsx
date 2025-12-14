import Hero from "./(components)/Hero";
import Client from "./(components)/clients";
import Partner from "./(components)/partners";
import TellUs from "@/components/layouts/TellUs";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Client />
      <Partner />
      <TellUs />
    </main>
  );
}