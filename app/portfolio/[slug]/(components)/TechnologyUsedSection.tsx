import { ProjectDetail } from "@/types/portfolio";
import { getTechStackById } from "@/datas/techstack_data";
import Image from "next/image";

interface TechnologyUsedSectionProps {
    project: ProjectDetail;
}

export default function TechnologyUsedSection({ project }: TechnologyUsedSectionProps) {
    // Ambil data teknologi lengkap berdasarkan ID
    const technologies = project.technologies.map(techId => getTechStackById(techId)).filter(Boolean);

    return (
        <section className="mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-6">Technology Used</h3>
            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <div key={tech!.id} className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-full flex items-center gap-2">
                        <div className="w-4 md:w-6 h-4 md:h-6 relative">
                            <Image
                                src={tech!.imageUrl}
                                alt={tech!.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xs md:text-sm text-slate-800">{tech!.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}