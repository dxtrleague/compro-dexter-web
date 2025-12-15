import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function TellUs() {
    return (
        // PERBAIKAN PENTING:
        // 1. id="tell-us-your-story": Ini target yang dicari tombol Navbar.
        // 2. scroll-mt-28: Memberi jarak atas saat scroll agar tidak tertutup Navbar sticky.
        <div id="tell-us-your-story" className="w-full bg-slate-100 scroll-mt-28">
                <div className="container py-24 px-6 mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row gap-4 items-center justify-between transition-transform hover:shadow-md">
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-2">Tell us your story</h2>
                            <p className="text-[16px] text-slate-500">Ready to start your next big project? Let`s chat.</p>
                        </div>
                        
                        {/* Saya bungkus Link agar tombolnya berfungsi mengarah ke WA */}
                        <Link href="https://wa.me/6287781504968" target="_blank">
                            <button className="bg-pink-600 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-pink-700 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}