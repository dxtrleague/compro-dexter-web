import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 font-poppins">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Bagian Kiri: Gambar */}
          <div className="w-full lg:w-1/2 relative bg-white">
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              {/* Pastikan path gambar sesuai dengan aset Anda */}
              <Image
                src="assets/home/hero.png" 
                alt="About Us Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bagian Kanan: Judul, Sub Judul, dan CTA */}
          <div className="w-full lg:w-1/2 flex flex-col md:items-start space-y-6">
            {/* Judul */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Empowering Your Business with Digital Excellence
            </h2>
            
            {/* Sub Judul */}
            <p className="text-base md:text-xl text-secondary-foreground font-medium leading-relaxed">
              DexterLeague is a Software House and Digital Transformation Consultant that helps businesses grow with the right technology. We offer end-to-end services, from business analysis and UI/UX design to app development, AI engineering, and technical leadership. Smart solutions, built with purpose.
            </p>
            
            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap flex-col md:flex-row gap-4 pt-4">
              {/* CTA 1: Our Service (Full Ungu, Tulisan Putih) */}
              <Button 
                asChild 
                className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold shadow-md transition-transform hover:scale-105"
              >
                <Link href="/services">
                  Our Service
                </Link>
              </Button>

              {/* CTA 2: Download Profile (Border Ungu, Tulisan Ungu, No Background) */}
              <Button 
                asChild
                className="bg-transparent border-2 border-muted text-muted hover:bg-[#F3E5F5] rounded-full px-8 py-6 text-lg font-bold shadow-sm transition-all box-border"
              >
                <Link href="assets/compro-dxtr.pdf" target="_blank" download>
                  Download Profile
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
