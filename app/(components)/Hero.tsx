import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] overflow-hidden font-poppins">
      
      {/* --- LAYER 1: HERO IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero.png" 
          alt="Hero Background"
          fill 
          priority 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* ---  (Teks & Tombol) --- */}
      <div className="container px-4 mx-auto h-full flex flex-col items-center justify-center gap-6 text-white relative z-10 pb-24">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md text-center leading-tight max-w-5xl">
          Build Better with the Right <br /> Digital Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-medium drop-shadow-sm text-center">
          Transform your business with cutting-edge technology and creative strategies designed for growth.
        </p>
        
        <Button asChild className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold mt-4 shadow-lg transition-transform hover:scale-105">
            <Link href="/about-us">Why choose us?</Link>
        </Button>
      </div>

      {/* --- INDIKATOR SCROLL --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center gap-2 text-white">
          <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center pt-2 opacity-90">
              <div className="w-1 h-2 bg-white rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-medium opacity-90 whitespace-nowrap">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;