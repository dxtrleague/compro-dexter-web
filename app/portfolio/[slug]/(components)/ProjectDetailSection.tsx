import { getStatusColor } from "@/utils/status-color";
import { ProjectDetail } from "@/types/portfolio";
import { Smartphone, Monitor, Minus } from "lucide-react";

interface ProjectDetailSectionProps {
    project: ProjectDetail;
}

export default function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
    return (
        <section className="bg-white border border-slate-200 rounded-xl p-4 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Client */}
                <div>
                    <p className="text-base font-bold text-black uppercase tracking-[0.5px] mb-2">Client</p>
                    <p className="text-sm md:text-base text-slate-500">{project.clientName}</p>
                </div>

                {/* Service */}
                <div>
                    <p className="text-base font-bold text-black uppercase tracking-[0.5px] mb-2">Services</p>
                    <div className="space-y-1">
                        {project.services.map((service, index) => (
                            <p key={index} className="text-sm md:text-base text-slate-500">{service}</p>
                        ))}
                    </div>
                </div>

                {/* Device */}
                <div>
                    <p className="text-base font-bold text-black uppercase tracking-[0.5px] mb-2">Devices</p>
                    <div className="flex gap-6">
                        {project.devices.map((device, index) => (
                            <div key={index} className="flex items-center gap-1">
                                {device.name === 'Mobile' ? (
                                    <Smartphone className="w-6 md:w-8 h-6 md:h-8 text-slate-500" />
                                ) : device.name === 'Web' ? (
                                    <Monitor className="w-6 md:w-8 h-6 md:h-8 text-slate-500" />
                                ) : (
                                    <Minus className="w-6 md:w-8 h-6 md:h-8 text-slate-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status */}
                <div>
                    <p className="text-base font-bold text-black uppercase tracking-[0.5px] mb-2">Status</p>
                    <div className={`${getStatusColor(project.status)} px-3 py-1.5 rounded-full inline-block`}>
                        <span className="text-sm md:text-base font-semibold">{project.status}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}