import Image from "next/image";
import { getAllTechStack } from "@/datas/techstack_data";

export default function TechstackSection() {
    const techstackData = getAllTechStack();

    return (
        <section className="container mx-auto py-16 flex flex-col gap-8 justify-center items-center font-poppins">
            {/* Title */}
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Technology We Use</h2>
                <p className="font-medium text-gray-500 mt-2">Teknologi yang selalu kita gunakan</p>
            </div>

            {/* Data techstack */}
            <div className="px-4 lg:px-16 flex flex-wrap justify-center gap-x-24 gap-y-12 md:gap-y-4">
                {techstackData.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 md:p-10 group relative"
                    >
                        <Image
                            src={tech.imageUrl}
                            alt={tech.name}
                            width={65}
                            height={65}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}