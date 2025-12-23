import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; 
import heroImage from "@/public/assets/home/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] overflow-hidden">
      
      {/* LAYER 1: HERO IMAGE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute z-1 top-0 left-0 w-full h-full bg-linear-to-br from-primary/70 via-muted/60 to-secondary/70"></div>
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background"
          fill 
          priority 
          className="z-0 object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="container px-4 mx-auto h-full flex flex-col items-center justify-center gap-6 text-white relative z-10 pb-24">
        <h1 className="text-[28px] md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md text-center leading-tight max-w-5xl">
          Build Better with the Right <br /> Digital Solutions
        </h1>

        <p className="text-base md:text-xl lg:text-2xl max-w-2xl font-medium drop-shadow-sm text-center">
          Transform your business with cutting-edge technology and creative strategies designed for growth.
        </p>
        
        {/* BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            
            {/* Tombol 1: "Why choose us?" */}
            <Button asChild className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-base md:text-lg font-bold shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                <Link href="/about-us">Why choose us?</Link>
            </Button>

            {/* Tombol 2: "Tell Dexter" */}
            <Button asChild className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-base md:text-lg font-bold shadow-lg transition-all hover:scale-105 w-full sm:w-auto">
              <Link href="https://wa.me/6287781504968" target="_blank">
                  <FaWhatsapp className="mr-1 w-5! h-5! md:w-7! md:h-7!" />
                  Tell Dexter
              </Link>
            </Button>
            
        </div>
      </div>

      {/* INDIKATOR SCROLL */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex justify-center pt-2 opacity-90">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
          <span className="text-sm font-medium opacity-90 whitespace-nowrap">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;