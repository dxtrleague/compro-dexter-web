"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden font-poppins">
      
      {/* --- LAYER 1: HERO IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero.png"
          alt="Background Building"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* --- LAYER 3: KONTEN TEKS & TOMBOL --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center gap-8 mt-[-100px] md:mt-[-150px]">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md tracking-tight">
          Build Better with the Right <br className="hidden md:block" /> Digital Solutions
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl font-medium leading-relaxed drop-shadow-sm">
          Transform your business with cutting-edge technology and creative strategies designed for growth.
        </p>

        <Button
          asChild
          className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full px-10 py-7 font-bold text-lg shadow-xl mt-4 transition-transform hover:scale-105"
        >
          <Link href="/about-us">
            Why choose us?
          </Link>
        </Button>
      </div>

      {/* --- LAYER 4: SCROLL DOWN INDICATOR --- */}
      {/* PERUBAHAN 2: Ubah bottom-10 jadi bottom-32 agar indikator naik ke atas */}
      <div className="absolute bottom-20 md:bottom-32 z-20 flex flex-col items-center text-white gap-3 animate-bounce">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center p-2 opacity-80">
            <div className="w-1 h-2 bg-white rounded-full animate-ping" />
        </div>
        <span className="text-sm font-medium tracking-wide opacity-80">Scroll Down</span>
      </div>

    </section>
  );
}