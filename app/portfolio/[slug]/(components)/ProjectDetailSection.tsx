import { getStatusColor } from "@/utils/status-color";
import { ProjectDetail } from "@/types/portfolio";
import { Smartphone, Monitor } from "lucide-react";

interface ProjectDetailSectionProps {
    project: ProjectDetail;
}

export default function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
    return (
        <section className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Client */}
                <div>
                    <p className="text-[16px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Client Name</p>
                    <p className="text-[14px] md:text-[16px] font-bold text-slate-800">{project.clientName}</p>
                </div>

                {/* Device */}
                <div>
                    <p className="text-[16px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Devices</p>
                    <div className="flex gap-6">
                        {project.devices.map((device, index) => (
                            <div key={index} className="flex items-center gap-1">
                                {device.name === 'Mobile' ? (
                                    <Smartphone className="w-8 h-8 text-slate-600" />
                                ) : (
                                    <Monitor className="w-8 h-8 text-slate-600" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service */}
                <div>
                    <p className="text-[16px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Service</p>
                    <div className="space-y-1">
                        {project.services.map((service, index) => (
                            <p key={index} className="text-[14px] md:text-[16px] font-bold text-slate-800">{service}</p>
                        ))}
                    </div>
                </div>

                {/* Status */}
                <div>
                    <p className="text-[16px] font-bold text-slate-500 uppercase tracking-[0.5px] mb-2">Status</p>
                    <div className={`${getStatusColor(project.status)} px-3 py-1.5 rounded-full inline-block`}>
                        <span className="text-[14px] md:text-[16px] font-bold">{project.status}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}