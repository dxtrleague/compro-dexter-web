import { ProjectDetail } from '@/types/portfolio';
import { getTechStackById } from '@/datas/techstack_data';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Monitor, Minus } from "lucide-react";

interface PortfolioCardProps {
  project: ProjectDetail;
}

const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-md">
    {children}
  </span>
);

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const subtitle = project.about && project.about.length > 0 ? project.about[0] : 'Klik untuk detail lebih lanjut.';
  const technologies = project.technologies.map(techId => getTechStackById(techId)).filter(Boolean);

  return (
    <div className="font-poppins">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col lg:flex-row group transition-shadow hover:shadow-xl">

        {/* Bagian Kiri: Gambar dengan Hover Zoom */}
        <div className="lg:w-2/5 h-44 sm:h-64 lg:h-auto relative overflow-hidden bg-gray-900 group">
          <Image
            src={project.heroImage}
            alt={`Gambar proyek ${project.title}`}
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-90 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Bagian Kanan: Konten */}
        <div className="lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Judul dan Subtitle */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-8 leading-relaxed line-clamp-3">{subtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
              {/* 1. Client */}
              <div>
                <p className="text-black font-bold uppercase tracking-wider text-sm md:text-base mb-1">Client</p>
                <p className="text-gray-600 text-sm md:text-base font-medium">{project.clientName}</p>
              </div>

              {/* 2. Service */}
              <div>
                <p className="text-black font-bold uppercase tracking-wider text-sm md:text-base mb-1">Service</p>
                <p className="text-gray-600 text-sm md:text-base font-medium">{project.service}</p>
              </div>

              {/* 3. Devices */}
              <div>
                <p className="text-black font-bold uppercase tracking-widertext-xs md:text-base mb-1">Devices</p>
                <div className="flex gap-4 items-center">
                  {project.devices.map((device, index) => (
                    <span key={index}>
                      {device.name === 'Mobile' ? (
                        <Smartphone className="w-5 h-5 text-gray-600" />
                      ) : device.name === 'Web' ? (
                        <Monitor className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-600" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-200 mb-6" />
          </div>

          {/* Bagian Bawah: Teknologi (Badges) dan Link Detail */}
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">

            {/* Teknologi dalam bentuk Badge (kiri) */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech!.id}>{tech!.name}</TechBadge>
              ))}
            </div>

            {/* Link Detail (kanan) */}
            <Link
              href={`/portfolio/${project.slug}`}
              className="text-pink-600 hover:text-pink-700 font-semibold inline-flex items-center gap-2 group/link text-sm md:text-base whitespace-nowrap"
            >
              See more details
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}