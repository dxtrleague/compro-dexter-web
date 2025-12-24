import React from 'react';
import { servicesData } from '@/datas/servicesData';
import { Services } from '@/types/services';

const ServiceSection = () => {
  return (
    <section className="w-full py-12 md:py-14 lg:py-18 bg-linear-to-b from-white to-[#FAFAFA] font-poppins">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">Our Specialist</h2>
          <p className="text-sm md:text-base lg:text-lg text-secondary-foreground mt-4">Reliable in all digital fields</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-32 gap-y-12">
          {servicesData.map((service: Services, index: number) => {
            const Icon = service.icon;

            let transformClass = "";
            if (index === 1) {
              transformClass = "md:translate-y-12";
            } else if (index === 4) {
              transformClass = "md:-translate-y-12";
            }

            return (
              <div
                key={service.id}
                className={`relative bg-white p-8 rounded-3xl shadow-sm flex flex-col items-start hover:shadow-lg transition-all duration-300 h-full ${transformClass}`}
              >
                <div className="absolute top-0 left-8 right-8 h-[5px] bg-pink-500" />
                <div className="absolute bottom-0 left-8 right-8 h-px bg-pink-500" />
                <div className="absolute left-0 top-8 bottom-8 w-px bg-pink-500" />
                <div className="absolute right-0 top-8 bottom-8 w-px bg-pink-500" />

                <div className="w-13 h-13 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#9C27B0]">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg md:text-xl  font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-secondary-foreground leading-relaxed">
                  {service.descHome}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;