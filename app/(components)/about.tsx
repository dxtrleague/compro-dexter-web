import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from '@/utils/animations';

const AboutSection = () => {
  return (
    <section className="py-12 md:py-18 bg-foreground">
      <ScrollReveal variant="left" className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Bagian Kiri: Gambar */}
          <div className="w-full lg:w-1/2 relative bg-white">
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              {/* Pastikan path gambar sesuai dengan aset Anda */}
              <Image
                src="https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="About Us Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bagian Kanan: Judul, Sub Judul, dan CTA */}
          <div className="w-full lg:w-1/2 flex flex-col lg:items-start space-y-6">
            {/* Judul */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Empowering Your Business with Digital Excellence
            </h2>
            
            {/* Sub Judul */}
            <p className="text-base md:text-lg lg:text-xl text-secondary-foreground font-medium leading-relaxed">
              DexterLeague is a Software House and Digital Transformation Consultant that helps businesses grow with the right technology. We offer end-to-end services, from business analysis and UI/UX design to app development, AI engineering, and technical leadership. Smart solutions, built with purpose.
            </p>
            
            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap flex-col lg:flex-row gap-4 pt-4">
              {/* CTA 1: Our Service (Full Ungu, Tulisan Putih) */}
              <Button 
                asChild 
                className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-base font-bold shadow-md transition-transform hover:scale-105"
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
                <Link href="assets/DXTR_Compro.pdf" target="_blank" download>
                  Download Profile
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutSection;
