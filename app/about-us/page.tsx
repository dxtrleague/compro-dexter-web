import type { Metadata } from 'next';
import TellUs from "@/components/layouts/TellUs";
import HeroSection from './(components)/layout/HeroSection';
import VisionMission from './(components)/layout/VisionMission';
import CoreValues from './(components)/layout/CoreValues';

export const metadata: Metadata = {
    title: 'Portfolio - Dexter League',
    description: 'Lihat proyek-proyek yang telah kami kerjakan, dari pengembangan web hingga aplikasi mobile dan solusi digital lainnya.',
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