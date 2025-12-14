"use client";

import { servicesData } from "@/datas/servicesData";
import ServiceList from "./ServicesCard";

export default function Services() {
  return (
    <main className="bg-white min-h-screen font-sans">
      
      {/* --- BAGIAN 1: HEADER & SERVICE LIST --- */}
      <div className="container mx-auto px-6 pt-20 pb-24">
        
        {/* JUDUL (Header) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to accelerate your business growth and technological capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceList key={service.id} service={service} />
          ))}
        </div>
        
      </div>
    </main>
  );
}