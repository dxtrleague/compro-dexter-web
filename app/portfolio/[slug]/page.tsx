import { getPortfolioBySlug, getAllPortfolioSlugs } from "@/datas/portfolio_data";
import { notFound } from "next/navigation";
import TellUs from "@/components/layouts/TellUs";

import HeaderSection from "./(components)/HeaderSection";
import ProjectDetailSection from "./(components)/ProjectDetailSection";
import TechnologyUsedSection from "./(components)/TechnologyUsedSection";
import AboutProjectSection from "./(components)/AboutProjectSection";
import ProjectOverviewSection from "./(components)/ProjectOverviewSection";
import BackButton from "./(components)/BackButton";

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
                    <BackButton />

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