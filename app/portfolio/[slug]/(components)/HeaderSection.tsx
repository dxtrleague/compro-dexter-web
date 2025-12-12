import Image from "next/image";
import { ProjectDetail } from "@/types/portfolio";

interface HeaderSectionProps {
    project: ProjectDetail;
}

export default function HeaderSection({ project }: HeaderSectionProps) {
    return (
        <section className="mb-8 flex flex-col">
            <h1 className="text-2xl md:text-[40px] font-bold text-slate-800 mb-4">{project.title}</h1>
            {/* Client Logo Banner */}
            <div className="rounded-2xl h-64 md:h-[450px] relative overflow-hidden bg-gray-900">
                <Image
                    src={project.heroImage}
                    alt={`${project.clientName} logo`}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
        </section>
    )
}