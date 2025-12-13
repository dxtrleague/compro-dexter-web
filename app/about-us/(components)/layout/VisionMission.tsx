import { missionData } from "@/datas/mision_datas";
import MissionCard from "../ui/MissionCard";
import VisionCard from "../ui/VisionCard";


export default function VisionMission() {
    return(
        <section className="w-full bg-slate-100 py-24 ">
            <div className="flex flex-col container mx-auto items-center space-y-[115px]">

                {/* Vision */}
                <VisionCard />

                {/* Mission */}
                <div className="w-full flex flex-col items-center space-y-15">
                    <h2 className="text-4xl font-bold text-[#9C27B0]">Our Mission</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
                        {missionData.map((mission) => (
                            <MissionCard key={mission.id} mission={mission} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}