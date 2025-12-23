import Image from "next/image";
import { getAllTechStack } from "@/datas/techstack_data";

export default function TechstackSection() {
    const techstackData = getAllTechStack();

    return (
        <section className="py-12 md:py-14 lg:py-18 bg-foreground flex flex-col gap-8 justify-center items-center">
            <div className="container mx-auto ">
                {/* Title */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">Technology We Use</h2>
                    <p className="text-sm md:text-base lg:text-lg text-secondary-foreground mt-4">The technology we always use</p>
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
            </div>
        </section>
    )
}