import { ProjectDetail } from "@/types/portfolio";

interface HeaderSectionProps {
    project: ProjectDetail;
}

export default function HeaderSection({ project }: HeaderSectionProps) {
    return (
        <section className="mb-8">
            <h1 className="text-2xl md:text-[40px] font-bold text-slate-800 mb-4">{project.title}</h1>
            {/* Client Logo Banner */}
            <div className="rounded-2xl md:h-[500px] flex items-center justify-center relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1761839258671-6495fdc188b3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-contain" />
                {/* <Image
                                src={project.thumbnail}
                                alt={`${project.clientName} logo`}
                                width={128}
                                height={128}
                                className="w-32 h-32 object-contain rounded-xl"
                            /> */}
            </div>
        </section>
    )
}