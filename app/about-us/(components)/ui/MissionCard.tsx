import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Mission } from "@/types/mission";

interface MissionCardProps {
    mission: Mission
}


export default function MissionCard({ mission }: MissionCardProps) {
    return(
        <>
            <Card className="w-full p-8 rounded-2xl shadow-lg">
                <CardContent className="p-0 space-y-4">
                    <CardTitle className="text-[64px] font-bold text-slate-200 leading-none">
                        {mission.title}
                    </CardTitle>
                    <CardDescription className="text-base text-slate-600">
                        {mission.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}