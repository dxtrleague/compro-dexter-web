"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// Import data
import { portfolioData } from "@/datas/portfolio_data";

export default function PortfolioHome() {
  const displayedPortfolio = portfolioData.slice(0, 4);

  return (
    <section className="py-20 bg-white font-poppins">
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            A glimpse into our recent success stories.
          </p>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {displayedPortfolio.map((item) => (
            <Card 
              key={item.id} 
              // REFACTOR CARD:
              className="group border-gray-100 bg-white p-0 gap-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col lg:shadow-xl"
            >
              {/* --- IMAGE AREA --- */}
              <div className="relative w-full h-64 overflow-hidden bg-gray-100">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* --- CONTENT AREA --- */}
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.services && item.services.slice(0, 3).map((svc, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-100 text-slate-600 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                {/* Title dengan CardTitle */}
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">
                  {item.title}
                </CardTitle>

                {/* Description dengan CardDescription */}
                <CardDescription className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                  {item.about && item.about.length > 0 ? item.about[0] : "No description available."}
                </CardDescription>

                {/* Link Details */}
                <Link 
                  href={`/portfolio/${item.slug}`} 
                  className="inline-flex items-center text-[#E91E63] font-bold text-sm hover:underline gap-1 group/link mt-auto"
                >
                  See Project Details 
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="w-full bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
            <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    See Our Other Projects
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                    Explore more of our work across different industries.
                </p>
            </div>
            
            <Button asChild className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full px-8 py-6 font-bold shadow-md transition-transform hover:scale-105">
                <Link href="/portfolio">
                    Show More Projects
                </Link>
            </Button>
        </div>

      </div>
    </section>
  );
}