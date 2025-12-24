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
    <section className="py-12 md:py-16 lg:py-18 bg-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="font-medium text-sm md:text-base lg:text-lg text-secondary-foreground">
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
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* --- CONTENT AREA --- */}
              <CardContent className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.services && item.services.slice(0, 3).map((svc, index) => (
                    <span
                      key={index}
                      className="bg-foreground text-secondary-foreground text-[11px] md:text-xs px-3 py-1.5 rounded-full"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                {/* Title dengan CardTitle */}
                <CardTitle className="text-lg md:text-xl font-bold text-primary-foreground mb-3 line-clamp-1">
                  {item.title}
                </CardTitle>

                {/* Description dengan CardDescription */}
                <CardDescription className="text-secondary-foreground text-sm md:text-base leading-relaxed mb-6 grow line-clamp-2">
                  {item.about && item.about.length > 0 ? item.about[0] : "No description available."}
                </CardDescription>

                {/* Link Details */}
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="inline-flex items-center text-primary font-bold text-sm md:text-base hover:underline gap-1 group/link mt-auto"
                >
                  See Project Details
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </Link>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="w-full bg-linear-to-r from-primary/20 to-muted/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-sm">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
              See Our Other Projects
            </h3>
            <p className="text-secondary-foreground text-sm md:text-base">
              Explore more of our work across different industries.
            </p>
          </div>

          <Button asChild className="bg-primary hover:bg-[#D81B60] text-base md:text-lg text-white rounded-full px-8 py-6 font-bold shadow-md transition-transform hover:scale-105">
            <Link href="/portfolio">
              Show More Projects
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}