import Hero from "./(components)/Hero";
import TellUs from "@/components/layouts/TellUs";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
                  <div className="w-full bg-slate-100">
                      <div className="container py-24 px-6 mx-auto">
                          <TellUs />
                      </div>
                  </div>
    </main>
  );
}