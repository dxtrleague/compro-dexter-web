import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CoreValues } from "@/types/coreValues";

interface CoreValuesCardsProps {
    coreValue: CoreValues
}


export default function CoreValuesCards({ coreValue }: CoreValuesCardsProps) {
    const Icon = coreValue.icon;
    return (
            <Card className="group h-full flex flex-col p-8 rounded-2xl bg-[#F8FAFC] shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <CardHeader className="p-0">

                    {/* Icon */}
                    <div className="flex items-center justify-center text-[#9C27B0] w-14 h-14 bg-white rounded-2xl ">
                        <Icon className="w-8 h-8 group-hover:text-primary/80"/>
                    </div>

                </CardHeader>
                <CardContent className="p-0 -mt-2.5 space-y-4 flex-1">

                    {/* Title & Description */}
                    <CardTitle className="text-[#1E293B] font-bold text-xl">
                        {coreValue.title}
                    </CardTitle>
                    <CardDescription className="text-base text-[#64748B] leading-relaxed">
                        {coreValue.description}
                    </CardDescription>

                </CardContent>
            </Card>
    );
}