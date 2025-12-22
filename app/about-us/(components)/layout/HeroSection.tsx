import HeroImage from "../ui/HeroImage";

export default function HeroSection() {
    return (
        <section className="container flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 mx-auto px-6 py-12 lg:py-24">
            <div className="space-y-4">
                <p className="text-md md:text-lg lg:text-xl text-primary font-bold tracking-widest">WHO WE ARE?</p>
                <h1 className="text-[32px] sm:text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-4 lg:mb-8">Accessible software with a purpose</h1>
                <p className="text-base md:text-lg/6 lg:text-xl/8 font-medium text-secondary-foreground">We bring love and stands for good causes in software development.
                <br/>
                We come with the idea that software customization should be accessible, affordable yet have good quality for all business levels.
                <br/>
                <br/>
                We also commit to support acceleration of digital transformation with genuinely sharing our best practices and knowledge throughout the time.</p>
            </div>
            <div className="p-2 m-2 lg:p-5 lg:m-5 lg:self-center">
                <HeroImage />
            </div>
        </section>
    );
}