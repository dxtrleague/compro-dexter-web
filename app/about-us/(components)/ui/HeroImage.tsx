import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Hero from "@/public/assets/aboutUs/Hero.png"

export default function HeroImage() {
    return (
        <AspectRatio ratio={6 / 4}>
            <Image
                src={Hero.src}
                alt="Team working together"
                fill
                className="rounded-3xl object-cover"
            />
        </AspectRatio>
    );
}