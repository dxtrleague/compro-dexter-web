import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"; 
import { 
  Facebook, 
  Github, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react"; 

export default function Footer() {
  const sitemapLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    // Footer Background Gelap (#3B3B3B)
    <footer className="bg-[#3B3B3B] text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6">
        
        {/* --- GRID UTAMA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. KOLOM KIRI: LOGO & DESKRIPSI */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-sm">
              <Image
                src="images/logo-dexter.png" 
                alt="Dexter League"
                width={140} 
                height={45}
                className="object-contain" 
              />
            </Link>

            <p className="text-gray-300 text-base leading-relaxed max-w-sm mt-4">
              Creative thinking drives progress. That’s why we use it to unlock new possibilities for your business.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-pink-600 transition-colors"><Github size={20} /></Link>
            </div>
          </div>

          {/* 2. KOLOM TENGAH: SITEMAP */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Sitemap</h3>
            <ul className="flex flex-col space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-pink-600 transition-colors text-base font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. KOLOM KANAN: CONTACT */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300 group">
                <Phone size={20} className="mt-1 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                <span className="text-base font-medium group-hover:text-white transition-colors">+62 877 8150 4968</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300 group">
                <Mail size={20} className="mt-1 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                <span className="text-base font-medium group-hover:text-white transition-colors">hello@dexter.id</span>
              </li>
                <li className="flex items-start gap-3 text-gray-300 group">
                <MapPin size={20} className="mt-1 flex-shrink-0 group-hover:text-pink-600 transition-colors" />
                <span className="text-base font-medium leading-relaxed group-hover:text-white transition-colors">
                    LEEON Office, Jl Moch. Kahfi II No. 23,<br />Cipedak, Jagakarsa, Jakarta Selatan 12630
                </span>
               </li>
            </ul>
          </div>

        </div>

        {/* --- GARIS PEMISAH --- */}
        <Separator className="bg-gray-600 my-8 opacity-50" />

        {/* --- COPYRIGHT --- */}
        <div className="text-center text-gray-400 text-sm font-medium">
          <p>Copyright © 2025 PT Aliansi Golongan Kanan</p>
        </div>

      </div>
    </footer>
  );
}