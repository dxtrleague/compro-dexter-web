import { coreValuesData } from "@/datas/coreValues_data";
import CoreValuesCards from "../ui/CoreValuesCard";

export default function CoreValues() {
    return(
        <section className="w-fullpy-8 lg:py-12">
            <div className="flex flex-col container px-4 pt-5 pb-8 lg:px-5 lg:pt-5 lg:pb-12 mx-auto items-center">

                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E293B] mb-8 lg:mb-15">
                    Core Values
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-11 w-full">
                    {coreValuesData.map((coreValue) => (
                        <CoreValuesCards key={coreValue.id} coreValue={coreValue} />
                    ))}
                </div>
            </div>
        </section>
    );
}