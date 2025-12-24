"use client";

import { useState } from "react";
import { ProjectDetail } from "@/types/portfolio";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import ImagePreviewModal from "@/components/customs/ImagePreviewModal";

interface ProjectOverviewSectionProps {
    project: ProjectDetail;
}

export default function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleClosePreview = () => {
        setSelectedImageIndex(null);
    };

    const handleImageChange = (newIndex: number) => {
        setSelectedImageIndex(newIndex);
    };

    const selectedImage = selectedImageIndex !== null ? project.projectOverview[selectedImageIndex] : null;

    return (
        <>
            <section>
                <h2 className="text-slate-800 text-xl md:text-2xl font-bold mb-2 md:mb-6">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
                    {project.projectOverview.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="col-span-1 overflow-hidden relative"
                        >
                            {/* Konten Gambar */}
                            <div
                                className="p-2 flex items-center justify-center aspect-3/2 cursor-pointer group"
                                onClick={() => handleImageClick(index)}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={imageUrl}
                                        alt={`Project Screenshot ${index + 1}`}
                                        width={1000}
                                        height={0}
                                        style={{ objectFit: 'cover' }}
                                        className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 duration-300 rounded-xl flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                                                <Maximize2 size={24} className="text-slate-700" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Preview Modal */}
            <ImagePreviewModal
                isOpen={selectedImageIndex !== null}
                imageSrc={selectedImage || ""}
                imageAlt={selectedImageIndex !== null ? `Project Screenshot ${selectedImageIndex + 1}` : ""}
                onClose={handleClosePreview}
                allImages={project.projectOverview}
                onImageChange={handleImageChange}
            />
        </>
    )
}