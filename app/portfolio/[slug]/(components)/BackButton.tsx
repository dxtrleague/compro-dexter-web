"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BackButtonContent() {
    const searchParams = useSearchParams();
    const from = searchParams.get("from");

    // Jika parameter 'from' adalah 'home', arahkan ke root (Home)
    // Jika tidak, default ke halaman /portfolio
    const backHref = from === "home" ? "/#portfolio" : "/portfolio";
    const backLabel = from === "home" ? "Back to Home" : "Back to Portfolio";

    return (
        <Link href={backHref} className="flex items-center gap-2 mb-6 group w-fit">
            <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-slate-500 text-sm">{backLabel}</span>
        </Link>
    );
}

export default function BackButton() {
    return (
        <Suspense fallback={
            <div className="flex items-center gap-2 mb-6 w-fit opacity-50">
                <ArrowLeft className="w-4 h-4 text-slate-500" />
                <span className="text-slate-500 text-sm">Back to Portfolio</span>
            </div>
        }>
            <BackButtonContent />
        </Suspense>
    );
}