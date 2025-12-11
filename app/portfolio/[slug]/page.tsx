import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Lightbulb } from "lucide-react";
import { getPortfolioBySlug, getAllPortfolioSlugs } from "@/datas/portfolio_data";
import { notFound } from "next/navigation";
import TellUs from "@/components/layouts/TellUs";

export async function generateStaticParams() {
    const slugs = getAllPortfolioSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function DetailPortfolio({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getPortfolioBySlug(slug);

    if (!project) {
        notFound();
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'bg-green-50 text-green-600';
            case 'In Progress':
                return 'bg-blue-50 text-blue-600';
            case 'Planning':
                return 'bg-amber-50 text-amber-600';
            default:
                return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <>
            <div className="w-full">
                {/* Main Content */}
                <div className="container py-8 px-6 pb-24 mx-auto">
                    {/* Back Link */}
                    <Link href="/portfolio" className="flex items-center gap-2 mb-6 group">
                        <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-slate-500 text-[14px] font-normal">Back to Portfolio</span>
                    </Link>

                    {/* Project Header */}
                    <div className="mb-8">
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
                    </div>

                    {/* Project Details */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 mb-8">
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
                    </div>

                    {/* Technology Used */}
                    <div className="mb-16">
                        <h3 className="text-[18px] font-bold text-slate-800 mb-4">Technology Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-full flex items-center gap-2">
                                    <div className={`w-4 h-4 ${tech.color} rounded`}></div>
                                    <span className="text-[14px] text-slate-800">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About The Project */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-16 mb-16">
                        <div className="col-span-2">
                            <h2 className="text-[24px] font-bold text-pink-600 mb-6">About The Project</h2>
                            <div className="space-y-4 text-slate-500 text-[16px] leading-[28.8px]">
                                {project.about.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-10">
                            {/* Challenge */}
                            <div className="bg-slate-50 border border-black/5 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                                        <AlertCircle className="w-4 h-4 text-amber-600" />
                                    </div>
                                    <h3 className="text-[18px] font-bold text-slate-800">What we faced (Challenge)</h3>
                                </div>
                                <p className="text-[15px] text-slate-500 leading-6">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="bg-slate-50 border border-black/5 rounded-xl p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <Lightbulb className="w-4 h-4 text-green-600" />
                                    </div>
                                    <h3 className="text-[18px] font-bold text-slate-800">What we offer (Solution)</h3>
                                </div>
                                <p className="text-[15px] text-slate-500 leading-6">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[30px] text-center font-bold mb-6">What We Did (Project Overview)</h2>
                    {/* Project Overview */}
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
                </div>
            </div>

            <div className="w-full bg-slate-100">
                <div className="container py-24 px-6 mx-auto">
                    <TellUs />
                </div>
            </div>
        </>
    );
}