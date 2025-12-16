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
                <div className="w-full flex flex-col items-center space-y-8 lg:space-y-15">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#9C27B0]">Our Mission</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full max-w-6xl">
                        {missionData.map((mission) => (
                            <MissionCard key={mission.id} mission={mission} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}