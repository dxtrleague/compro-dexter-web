import { ProjectDetail } from "@/types/portfolio";

interface TechnologyUsedSectionProps {
    project: ProjectDetail;
}

export default function TechnologyUsedSection({ project }: TechnologyUsedSectionProps) {
    return (
        <section className="mb-16">
            <h3 className="text-[24px] font-bold text-slate-800 mb-6">Technology Used</h3>
            <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-full flex items-center gap-2">
                        <div className={`w-4 h-4 ${tech.color} rounded`}></div>
                        <span className="text-[14px] text-slate-800">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}