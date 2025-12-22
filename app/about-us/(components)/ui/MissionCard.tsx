import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Mission } from "@/types/mission";

interface MissionCardProps {
    mission: Mission
}


export default function MissionCard({ mission }: MissionCardProps) {
    return(
        <>
            <Card className="group h-full p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-0 space-y-3 lg:space-y-4">

                    {/* Title */}
                    <CardTitle className="text-4xl md:text-5xl lg:text-[64px] font-bold text-slate-200 leading-none group-hover:text-primary/85">
                        {mission.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-sm md:text-base lg:text-lg/8 text-primary-foreground/75">
                        {mission.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}