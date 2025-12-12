import { ProjectDetail } from "@/types/portfolio";

interface ProjectOverviewSectionProps {
    project: ProjectDetail;
}

export default function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
    return (
        <section>
            <h2 className="text-[30px] text-center font-bold mb-6">What We Did (Project Overview)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.projectOverview.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="col-span-1 border border-slate-200 rounded-2xl shadow-lg overflow-hidden bg-white"
                    >
                        {/* Konten Gambar */}
                        <div className="p-2 flex items-center justify-center lg:min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1761839258671-6495fdc188b3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt={`Project Screenshot ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}