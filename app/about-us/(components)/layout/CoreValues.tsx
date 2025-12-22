import { coreValuesData } from "@/datas/coreValues_data";
import CoreValuesCards from "../ui/CoreValuesCard";

export default function CoreValues() {
    return(
        <section className="w-fullpy-8 lg:py-12">
            <div className="flex flex-col container pt-5 pb-8 md:pt-10 md:pb-13 lg:pt-5 mx-auto items-center">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-primary-foreground mb-8 md:mb-10 lg:mb-15">
                    Core Values
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mx-5">
                    {coreValuesData.map((coreValue) => (
                        <CoreValuesCards key={coreValue.id} coreValue={coreValue} />
                    ))}
                </div>
            </div>
        </section>
    );
}