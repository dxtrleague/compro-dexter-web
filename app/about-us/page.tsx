import type { Metadata } from 'next';
import TellUs from "@/components/layouts/TellUs";
import HeroSection from './(components)/layout/HeroSection';
import VisionMission from './(components)/layout/VisionMission';
import CoreValues from './(components)/layout/CoreValues';

export const metadata: Metadata = {
    title: 'About Us - Dexter League',
    description: 'Pelajari lebih lanjut tentang Dexter League, visi, misi, dan nilai-nilai inti yang menjadi landasan kami dalam memberikan solusi teknologi inovatif.',
  };

export default function AboutUs() {
    return (
        <>
            <HeroSection />
            <VisionMission />
            <CoreValues />
            <TellUs />
        </>
    );
}