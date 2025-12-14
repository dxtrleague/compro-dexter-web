"use client";

import { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/datas/portfolio_data";
import PortfolioCard from "./PortfolioCard";
import { Loader2 } from "lucide-react";

export default function PortfolioPage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const visibleProjects = portfolioData.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioData.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          // Simulasi loading delay agar terlihat efek infinite scroll
          setTimeout(() => {
            setVisibleCount((prev) => prev + 4);
            setIsLoading(false);
          }, 1500);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <main className="bg-gray-50/50 font-poppins">
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
          {visibleProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* --- INFINITE SCROLL LOADING --- */}
        {hasMore && (
          <div ref={observerTarget} className="flex justify-center items-center py-12 min-h-[100px]">
            {isLoading ? (
              <div className="flex flex-col items-center gap-3 text-gray-500 animate-pulse">
                <Loader2 className="w-8 h-8 animate-spin text-pink-600" />
                <span className="text-sm font-medium">Memuat proyek lainnya...</span>
              </div>
            ) : (
              <div className="h-4 w-full" />
            )}
          </div>
        )}
      </div>
    </main>
  );
}