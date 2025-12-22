import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <main className="bg-gray-50/50 font-sans">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* --- BAGIAN JUDUL --- */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 tracking-tight">
            Contact us
          </h1>
          <p className="font-medium mt-4 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Have a brilliant idea or project you want to bring to life? We&apos;re ready to listen and collaborate with you.
          </p>
        </div>

        {/* --- BAGIAN KONTEN UTAMA (GRID) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* --- KOLOM KIRI: INFORMASI KONTAK --- */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <ContactInfo />
          </div>

          {/* --- KOLOM KANAN: PETA --- */}
          <div className="w-full h-[400px] lg:h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1152.7205614836682!2d106.8203425900688!3d-6.347956801661692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec29aaf86ba3%3A0x5a778c15d8cc6a32!2sGMI%20Building%2C%20Srengseng%20Sawah%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012630!5e0!3m2!1sid!2sid!4v1766390259608!5m2!1sid!2sid4v1716380000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maps of Dexter League"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}