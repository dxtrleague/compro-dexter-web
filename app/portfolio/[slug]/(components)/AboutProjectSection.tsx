import { ProjectDetail } from "@/types/portfolio";
import { AlertCircle, Lightbulb } from "lucide-react";

interface AboutProjectSectionProps {
    project: ProjectDetail;
}

export default function AboutProjectSection({ project }: AboutProjectSectionProps) {
    return (
        <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 mb-8 md:mb-16">
            <div className="col-span-2">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-6">About The Project</h2>
                <div className="space-y-4 text-slate-500 text-sm md:text-base leading-7">
                    {project.about.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-col col-span-1 md:col-span-2 lg:col-span-1 gap-4 space-y-4">
                {/* Challenge */}
                <div className="w-full h-full bg-slate-50 border border-black/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2 md:mb-4">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                            <AlertCircle className="w-4 h-4 text-amber-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Challenge</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-7">
                        {project.challenge}
                    </p>
                </div>

                {/* Solution */}
                <div className="w-full h-full bg-slate-50 border border-black/5 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-2 md:mb-4">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <Lightbulb className="w-4 h-4 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">Solution</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-7">
                        {project.solution}
                    </p>
                </div>
            </div>
        </section>
    )
}