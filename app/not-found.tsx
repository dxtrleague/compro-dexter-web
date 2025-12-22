"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import notfoundAnimation from "@/public/animations/404.json";

export default function NotFound() {

    return (
        <div className="flex items-center justify-center relative overflow-hidden min-h-[calc(100vh-80px)]">
            <div className="text-center max-w-lg mx-auto">
                <DotLottieReact
                    data={notfoundAnimation}
                    loop
                    autoplay
                />

                <div className="mb-6 md:mb-12 transition-all duration-700 delay-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
                        The page you are looking for seems to have vanished into the digital void.
                    </p>
                </div>

                <Link href="/">
                    <Button
                        className="bg-primary text-white rounded-full py-6 font-semibold text-base shadow-lg transition-all hover:scale-105 w-1/2 "
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}