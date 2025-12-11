import { servicesData } from "@/datas/servicesData";

export default function ServiceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesData.map((service, index) => (
        <div 
          key={index}
          className="group p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-start"
        >
          {/* Icon Wrapper */}
          <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
            <service.icon className="w-7 h-7 text-[#E91E63]" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
}