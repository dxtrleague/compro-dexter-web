import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; 

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] overflow-hidden font-poppins">
      
      {/* LAYER 1: HERO IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/hero.png" 
          alt="Hero Background"
          fill 
          priority 
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="container px-4 mx-auto h-full flex flex-col items-center justify-center gap-6 text-white relative z-10 pb-24">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md text-center leading-tight max-w-5xl text-balance mx-auto">
          Build Better with the Right Digital Solutions
        </h1>

        <p className="text-sm md:text-xl max-w-2xl font-medium drop-shadow-sm text-center text-gray-100">
          Transform your business with cutting-edge technology and creative strategies designed for growth.
        </p>
        
        {/* BUTTON GROUP */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            
            {/* Tombol 1: "Why choose us?" */}
            <Button asChild className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105 w-full sm:w-auto">
                <Link href="/about-us">Why choose us?</Link>
            </Button>

            {/* Tombol 2: "Tell Dexter" */}
            <Button asChild className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105 w-full sm:w-auto">
    <Link href="https://wa.me/6287781504968" target="_blank">
        {/* Gunakan tanda seru (!) pada w dan h untuk memaksa ukuran membesar */}
        <FaWhatsapp className="mr-1 !w-6 !h-6 md:!w-6 md:!h-6" />
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