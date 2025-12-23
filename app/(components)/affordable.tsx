import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Bagian Kiri: Judul, Sub Judul, dan CTA */}
          <div className="w-full lg:w-1/2 flex flex-col lg:items-start space-y-6">
            {/* Judul */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Affordable, Quality Software for Everyone
            </h2>
            
            {/* Sub Judul */}
            <p className="text-base md:text-lg lg:text-xl text-secondary-foreground font-medium leading-relaxed">
              We believe that software should be accessible, customizable, and affordable, without compromising quality. Our mission is to empower businesses of all sizes through technology, and we’re committed to accelerating digital transformation in Indonesia by openly sharing our best practices and expertise.
            </p>
            
            {/* 2 CTA Buttons */}
            <div className="flex flex-wrap flex-col lg:flex-row gap-4 pt-4">
              {/* CTA 1: Our Service (Full Ungu, Tulisan Putih) */}
              <Button 
                asChild 
                className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold shadow-md transition-transform hover:scale-105"
              >
                <Link href="/about-us">
                  Get to know us
                </Link>
              </Button>

              {/* CTA 2: Download Profile (Border Ungu, Tulisan Ungu, No Background) */}
              <Button 
                asChild
                className="bg-transparent border-2 border-muted text-muted hover:bg-[#F3E5F5] rounded-full px-8 py-6 text-lg font-bold shadow-sm transition-all box-border"
              >
                <Link href="/contact-us" >
                  Talk to us
                </Link>
              </Button>
            </div>
          </div>

          {/* Bagian Kanan: Gambar */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              {/* Pastikan path gambar sesuai dengan aset Anda */}
              <Image
                src="https://images.unsplash.com/photo-1758873271772-6bbc792c1514?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="About Us Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
