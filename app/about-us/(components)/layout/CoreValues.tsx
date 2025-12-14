import { coreValuesData } from "@/datas/coreValues_data";
import CoreValuesCards from "../ui/CoreValuesCard";

export default function CoreValues() {
    return(
        <section className="w-full py-12">
            <div className="flex flex-col container px-5 pt-5 pb-12 mx-auto items-center">

                {/* Section Title */}
                <h2 className="text-4xl font-bold text-[#1E293B] mb-15">
                    Core Values
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11">
                    {coreValuesData.map((coreValue) => (
                        <CoreValuesCards key={coreValue.id} coreValue={coreValue} />
                    ))}
                </div>
            </div>
        </section>
    );
}