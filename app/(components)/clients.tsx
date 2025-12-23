import React from 'react';
import { clientData } from "@/datas/client_data";

const ClientSection: React.FC = () => {
  return (
    <section className="py-12 md:py-14 lg:py-18 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">Our Honorable Client</h2>
          <p className="text-sm md:text-base lg:text-lg text-secondary-foreground mt-4">Trusted by leading companies</p>
        </div>

        {/* Layout Grid Horizontal */}
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clientData.map((client) => (
            <div 
              key={client.id} 
              className="w-[40%] md:w-[30%] lg:w-[14%] flex justify-center p-4 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;