import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    name: "Instagram",
    value: "@dxtrleague",
    href: "https://www.instagram.com/dxtrleague/",
    icon: <Instagram className="w-6 h-6 text-gray-600" />,
  },
  {
    name: "Phone number",
    value: "+(62) 877 8150 4968",
    href: "https://wa.me/6287781504968",
    icon: <Phone className="w-6 h-6 text-gray-600" />,
  },
  {
    name: "Email",
    value: "hello@dexter.id",
    href: "mailto:hello@dexter.id",
    icon: <Mail className="w-6 h-6 text-gray-600" />,
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-12 font-sans">
      {/* Bagian Lokasi */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <MapPin className="w-7 h-7 text-pink-600" />
          Our Location
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          GMI Building, Jl Srengseng Sawah No. 4,   <br />
          Srengseng Sawah, Jagakarsa, South Jakarta City, Jakarta 12630
          <br />
          Indonesia
        </p>
      </div>

      {/* Bagian Kontak & Social Media */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Social Media & Contacts
        </h3>
        <div className="space-y-6">
          {contactInfo.map((item) => (
            <div key={item.name} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg text-pink-600 hover:text-pink-700 transition-colors break-all">
                  {item.value}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}