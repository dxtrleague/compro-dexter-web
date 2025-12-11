import { portfolioData } from "@/datas/portfolio_data";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioPage() {
  return (
    <main className="bg-gray-50/50 font-sans">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* --- BAGIAN JUDUL --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Our Portfolio
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa proyek yang telah kami kerjakan dengan bangga, menunjukkan keahlian dan dedikasi kami dalam setiap detail.
          </p>
        </div>

        {/* --- BAGIAN KONTEN UTAMA (LIST) --- */}
        <div className="space-y-12 md:space-y-16">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}