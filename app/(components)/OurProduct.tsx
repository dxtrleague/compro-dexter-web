import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2} from "lucide-react";

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
            <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
              Our Product
            </div>

            {/* Mobile Image (Hidden on Desktop) */}
            <div className="w-full relative lg:hidden">
              <div className="relative w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop" 
                  alt="Jarwo AI Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Jarwo AI
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed">
              Meet Jarwo, your intelligent business assistant. Designed to automate repetitive tasks and enhance customer interactions, Jarwo AI helps you focus on what truly matters—growing your business.
            </p>
            
            {/* 4 Business Points */}
            <ul className="space-y-4 mt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium text-lg">
                  <CheckCircle2 className="text-pink-600 w-6 h-6 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                asChild 
                className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-transform hover:scale-105"
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop" 
                alt="Jarwo AI Dashboard"
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

export default OurProduct;