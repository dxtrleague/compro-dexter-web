import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; 

export default function TellUs() {
    return (
        <div id="tell-us-your-story" className="w-full bg-slate-100 scroll-mt-28">
                <div className="container py-24 px-6 mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row gap-4 items-center justify-between transition-transform hover:shadow-md">
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-2">Tell us your story</h2>
                            <p className="text-[16px] text-slate-500">Ready to start your next big project? Let's chat.</p>
                        </div>
                        
                        <Link href="https://wa.me/6287781504968" target="_blank">
                            <button className="bg-primary hover:bg-[#D81B60] text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-md">
                                <FaWhatsapp className="!w-7 !h-7 md:!w-8 md:!h-8" />
                                Tell Dexter
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}