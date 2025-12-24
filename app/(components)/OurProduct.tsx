import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2} from "lucide-react";
import jarwoImage from "@/public/assets/home/JarwoProduct.png";

const OurProduct = () => {
  const features = [
    "Intelligent Task Automation",
    "24/7 Customer Engagement",
    "Real-time Data Analytics",
    "Seamless Workflow Integration"
  ];

  return (
    <section className="py-12 md:py-14 lg:py-18 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
            {/* Label Button */}
            <div className="inline-block bg-pink-100 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
              Our Product
            </div>

            {/* Mobile Image (Hidden on Desktop) */}
            <div className="w-full relative lg:hidden">
              <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-foreground bg-white">
                <Image
                  src={jarwoImage}
                  alt="Jarwo AI Dashboard"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Jarwo AI
            </h2>
            
            {/* Subtitle */}
            <p className="text-base md:text-xl text-secondary-foreground leading-relaxed">
              Meet Jarwo, your intelligent business assistant. Designed to automate repetitive tasks and enhance customer interactions, Jarwo AI helps you focus on what truly matters—growing your business.
            </p>
            
            {/* 4 Business Points */}
            <ul className="space-y-4 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-primary-foreground/85 font-medium text-base md:text-xl">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                asChild 
                className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-base md:text-lg font-bold shadow-lg transition-transform hover:scale-105"
              >
                <Link href="https://jarwo.ai" target="_blank">
                  Try Jarwo AI Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative hidden lg:block">
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <Image
                src={jarwoImage}
                alt="Jarwo AI Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurProduct;