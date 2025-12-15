import { ProjectDetail } from '@/types/portfolio';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Monitor } from "lucide-react";

interface PortfolioCardProps {
  project: ProjectDetail;
}

// Komponen Badge untuk teknologi
const TechBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-3 py-1 rounded-md">
    {children}
  </span>
);

export default function PortfolioCard({ project }: PortfolioCardProps) {
  // Menyesuaikan data dari ProjectDetail ke kebutuhan tampilan Card
  const subtitle = project.about && project.about.length > 0 ? project.about[0] : 'Klik untuk detail lebih lanjut.';
  
  return (
    // Tambahkan padding-y di sekitar card agar ada 'lebihan' seperti di design
    <div className="py-4 font-poppins"> 
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col md:flex-row group transition-shadow hover:shadow-xl">
          
          {/* Bagian Kiri: Gambar ( proporsi tetap 2/5) */}
          <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden bg-gray-900">
            <Image
              src={project.heroImage}
              alt={`Gambar proyek ${project.title}`}
              fill
              style={{objectFit: 'cover'}}
              className="opacity-90"
            />
          </div>

          {/* Bagian Kanan: Konten (proporsi tetap 3/5) */}
          <div className="md:w-3/5 p-8 flex flex-col justify-between">
            <div>
              {/* Judul dan Subtitle */}
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{subtitle}</p>

              {/* Bagian Informasi Tiga Kolom Sejajar (CLIENT, DATE/ROLE, SERVICE) */}
              <div className="grid grid-cols-3 gap-y-4 mb-8 text-sm">
                
                {/* 1. Client */}
                <div>
                  <p className="font-semibold text-gray-500 uppercase tracking-wider text-xs mb-1">CLIENT</p>
                  <p className="text-gray-800 font-medium">{project.clientName}</p>
                </div>
                
                {/* 2. Devices (Menggantikan Date) */}
                <div>
                  <p className="font-semibold text-gray-500 uppercase tracking-wider text-xs mb-1">DEVICES</p>
                  <div className="flex gap-4 items-center"> 
                    {project.devices.map((device, index) => (
                      <span key={index} className="text-gray-800 font-medium">
                        {device.name === 'Mobile' ? (
                          <Smartphone className="w-6 h-6 text-slate-600" /> // Ukuran ikon diperkecil agar lebih pas
                        ) : (
                          <Monitor className="w-6 h-6 text-slate-600" /> // Ukuran ikon diperkecil agar lebih pas
                        )}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* 3. Service */}
                <div>
                  <p className="font-semibold text-gray-500 uppercase tracking-wider text-xs mb-1">SERVICE</p>
                  <p className="text-gray-800 font-medium">{project.service}</p>
                </div>
              </div>

              {/* Garis pemisah horizontal di sini */}
              <hr className="border-t border-gray-200 mb-6" />
            </div>

            {/* Bagian Bawah: Teknologi (Badges) dan Link Detail */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0"> {/* Menggunakan items-center untuk menyejajarkan badge dan link */}
              
              {/* Teknologi dalam bentuk Badge (kiri) */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech.name}>{tech.name}</TechBadge>
                ))}
              </div>
              
              {/* Link Detail (kanan) */}
              <Link 
                href={`/portfolio/${project.slug}`} 
                className="text-pink-600 hover:text-pink-700 font-semibold inline-flex items-center gap-2 group/link text-sm whitespace-nowrap"
              >
                See more details
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}