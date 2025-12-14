import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Services } from "@/types/services";

interface ServiceCardProps {
  service: Services
}

export default function ServiceList({ service }: ServiceCardProps) {
  const Icon = service.icon;
  return (
        <Card key={service.id} className="group p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-start">
          <CardHeader className="p-0">

            {/* Icon Wrapper */}
            <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center group-hover:bg-pink-100 transition-colors">
              <Icon className="w-7 h-7 text-[#E91E63]" strokeWidth={1.5} />
            </div>

          </CardHeader>

          <CardContent className="p-0 -mt-2.5 space-y-4 flex-1">
            
            {/* Title */}
            <CardTitle className="text-xl font-bold text-[#1E293B]">
              {service.title}
            </CardTitle>

            {/* Description */}
            <CardDescription className="text-[#64748B] text-base leading-relaxed">
              {service.description}
            </CardDescription>

          </CardContent>
        </Card>
  );
}