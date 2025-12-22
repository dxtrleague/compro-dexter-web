import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CoreValues } from "@/types/coreValues";

interface CoreValuesCardsProps {
    coreValue: CoreValues
}


export default function CoreValuesCards({ coreValue }: CoreValuesCardsProps) {
    const Icon = coreValue.icon;
    return (
            <Card key={coreValue.id} className="group h-full flex flex-col p-8 rounded-2xl bg-[#F8FAFC] shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <CardHeader className="p-0">

                    {/* Icon */}
                    <div className="flex items-center justify-center text-muted w-13 h-13 md:w-14 md:h-14 bg-white rounded-2xl ">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 group-hover:text-primary/80"/>
                    </div>

                </CardHeader>
                <CardContent className="p-0 -mt-2.5 space-y-2 md:space-y-4 flex-1">

                    {/* Title & Description */}
                    <CardTitle className="text-primary-foreground font-bold text-lg md:text-[22px]">
                        {coreValue.title}
                    </CardTitle>
                    <CardDescription className="text-[15px] md:text-lg text-secondary-foreground leading-relaxed">
                        {coreValue.description}
                    </CardDescription>

                </CardContent>
            </Card>
    );
}