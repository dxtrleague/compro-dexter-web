"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollToTopProps {
    children: React.ReactNode;
}

export default function ScrollToTop({ children }: ScrollToTopProps) {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return <>{children}</>;
}