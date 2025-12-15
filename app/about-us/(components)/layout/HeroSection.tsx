import HeroImage from "../ui/HeroImage";

export default function HeroSection() {
    return (
        <div className="container flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 mx-auto px-6 py-12 lg:py-24">
            <div className="space-y-4">
                <p className="text-sm text-primary font-bold tracking-widest">WHO WE ARE?</p>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1E293B] mb-4 lg:mb-8">Accessible software with a purpose</h1>
                <p className="text-base lg:text-lg/8 text-[#64748B]">We bring love and stands for good causes in software development.
                <br/>
                We come with the idea that software customization should be accessible, affordable yet have good quality for all business levels.
                <br/>
                <br/>
                We also commit to support acceleration of digital transformation with genuinely sharing our best practices and knowledge throughout the time.</p>
            </div>
            <div className="p-2 lg:p-5 m-2 lg:m-5">
                <HeroImage />
            </div>
        </div>
    );
}