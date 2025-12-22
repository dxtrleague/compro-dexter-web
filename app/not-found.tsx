import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import Link from "next/link";


export default function NotFound() {

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
            <div className="text-center max-w-lg mx-auto">
                <div className="mb-8 transition-all duration-700 transform translate-y-0 opacity-100">
                    <div className="relative inline-block">
                        <h1 className="text-8xl md:text-9xl font-bold text-slate-900 mb-2 tracking-tighter">
                            404
                        </h1>
                        <div className="absolute -top-2 -right-8 md:-top-4 md:-right-12">
                            <Search className="w-10 h-10 md:w-14 md:h-14 text-blue-500/30 animate-bounce" />
                        </div>
                    </div>
                </div>

                <div className="mb-12 transition-all duration-700 delay-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
                        The page you are looking for seems to have vanished into the digital void.
                    </p>
                </div>

                <Link href="/">
                    <Button
                        className="bg-primary text-white rounded-full py-6 font-semibold text-base shadow-lg transition-all hover:scale-105 w-1/2 gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}