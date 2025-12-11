import { MessageCircle } from "lucide-react";

export default function TellUs() {
    return (
        <div className="w-full bg-slate-100">
                <div className="container py-24 px-6 mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-[32px] font-bold text-slate-800 mb-2">Tell us your story</h2>
                            <p className="text-[16px] text-slate-500">Ready to start your next big project? Let`s chat.</p>
                        </div>
                        <button className="bg-pink-600 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-pink-700 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </button>
                    </div>
                </div>
        </div>
    )
}