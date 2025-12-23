import { ProjectDetail } from "@/types/portfolio";
import Image from "next/image";

interface ProjectOverviewSectionProps {
    project: ProjectDetail;
}

export default function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
    return (
        <section>
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-6">Project Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.projectOverview.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="col-span-1 border border-slate-200 rounded-xl shadow-lg overflow-hidden bg-white"
                    >
                        {/* Konten Gambar */}
                        <div className="p-2 flex items-center justify-center lg:min-h-[300px]">
                            <Image
                                src={imageUrl}
                                alt={`Project Screenshot ${index + 1}`}
                                width={1000}
                                height={200}
                                className="w-full h-full object-cover rounded-xl"
                            />

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}