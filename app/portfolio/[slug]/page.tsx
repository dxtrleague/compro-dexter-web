import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPortfolioBySlug, getAllPortfolioSlugs } from "@/datas/portfolio_data";
import { notFound } from "next/navigation";
import TellUs from "@/components/layouts/TellUs";

import HeaderSection from "./(components)/HeaderSection";
import ProjectDetailSection from "./(components)/ProjectDetailSection";
import TechnologyUsedSection from "./(components)/TechnologyUsedSection";
import AboutProjectSection from "./(components)/AboutProjectSection";
import ProjectOverviewSection from "./(components)/ProjectOverviewSection";

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
                    <HeaderSection project={project} />

                    {/* Project Details */}
                    <ProjectDetailSection project={project} />

                    {/* Technology Used */}
                    <TechnologyUsedSection project={project} />

                    {/* About The Project */}
                    <AboutProjectSection project={project} />

                    {/* Project Overview */}
                    <ProjectOverviewSection project={project} />

                </div>
            </div>

            <TellUs />
        </>
    );
}