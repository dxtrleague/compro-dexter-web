import { getStatusColor } from "@/utils/status-color";
import { ProjectDetail } from "@/types/portfolio";

interface ProjectDetailSectionProps {
    project: ProjectDetail;
}

export default function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
    return (
        <section className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Client Name</p>
                    <p className="text-[16px] font-bold text-slate-800">{project.clientName}</p>
                </div>
                <div>
                    <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Service</p>
                    <p className="text-[16px] font-bold text-slate-800">{project.service}</p>
                </div>
                <div>
                    <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Devices</p>
                    <p className="text-[16px] font-bold text-slate-800">Mobile</p>
                </div>
                <div>
                    <p className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Status</p>
                    <div className={`${getStatusColor(project.status)} px-3 py-1.5 rounded-full inline-block`}>
                        <span className="text-[16px] font-bold">{project.status}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}