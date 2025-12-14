import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Mission } from "@/types/mission";

interface MissionCardProps {
    mission: Mission
}


export default function MissionCard({ mission }: MissionCardProps) {
    return(
        <>
            <Card className="group h-full p-8 rounded-2xl shadow-lg transition-all hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-0 space-y-4">

                    {/* Title */}
                    <CardTitle className="text-[64px] font-bold text-slate-200 leading-none group-hover:text-primary/85">
                        {mission.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-base text-slate-600">
                        {mission.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}