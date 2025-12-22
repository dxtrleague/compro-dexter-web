import { missionData } from "@/datas/mision_datas";
import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";


export default function VisionMission() {
    return(
        <section className="w-full bg-slate-100 py-12 lg:py-24">
            <div className="flex flex-col container mx-auto items-center space-y-12 lg:space-y-[115px] px-4 lg:px-6">

                {/* Vision */}
                <VisionCard />

                {/* Mission */}
                <div className="w-full flex flex-col items-center space-y-8 lg:space-y-10">
                    <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-muted">Our Mission</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:flex md:flex-wrap md:justify-center lg:grid lg:grid-cols-3 gap-6 lg:gap-10">
                        {missionData.map((mission) => (
                            <div key={mission.id} className="md:max-w-[calc(50%-0.75rem)] lg:max-w-xl">
                                <MissionCard mission={mission} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}