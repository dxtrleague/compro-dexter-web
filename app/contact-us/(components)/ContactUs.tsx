import ContactInfo from "./ContactInfo";

export default function ContactUs() {
  return (
    <main className="bg-gray-50/50 font-sans">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* --- BAGIAN JUDUL --- */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="font-medium mt-4 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Punya ide cemerlang atau proyek yang ingin diwujudkan? Kami siap mendengarkan dan berkolaborasi dengan Anda.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3583145878556!2d106.818103710891!3d-6.347628062076447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef6a75b4fc3b%3A0xbf38db1f6e003ffd!2sLEEON%20-%20Legal%20Solusi%20Indonesia!5e0!3m2!1sid!2sid!4v1751340074096!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Dexter League"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}