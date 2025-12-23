import Image from "next/image";
import { ProjectDetail } from "@/types/portfolio";
import { ScrollReveal } from "@/utils/animations";

interface HeaderSectionProps {
    project: ProjectDetail;
}

export default function HeaderSection({ project }: HeaderSectionProps) {
    return (
        <section className="mb-8 flex flex-col gap-4 md:gap-6">
            <ScrollReveal variant="top" className="w-full">
                <h1 className="text-2xl text-center md:text-4xl font-bold text-slate-800">{project.title}</h1>
            </ScrollReveal>

            <ScrollReveal variant="bottom" className="w-full">
                {/* Client Logo Banner */}
                <div className="rounded-2xl h-64 md:h-[450px] relative overflow-hidden bg-gray-900">
                    <Image
                        src={project.heroImage}
                        alt={`${project.clientName} logo`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </ScrollReveal>
        </section>
    )
}