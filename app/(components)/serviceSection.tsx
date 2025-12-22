import React from 'react';
import { servicesData } from '@/datas/servicesData';
import { Services } from '@/types/services';

const ServiceSection = () => {
  return (
    <section className="w-full py-24 bg-linear-to-b from-white to-[#FAFAFA] font-poppins">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">Our Specialist</h2>
          <p className="text-sm md:text-base lg:text-lg text-secondary-foreground mt-4">Handal di semua bidang digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-32 gap-y-12">
          {servicesData.map((service: Services, index: number) => {
            const Icon = service.icon;

            // Logika untuk posisi card (menjorok)
            // Index 1 (Tengah Baris 1) -> Menjorok ke bawah (translate-y)
            // Index 4 (Tengah Baris 2) -> Menjorok ke atas (-translate-y)
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

                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-[#9C27B0]">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
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