import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function HeroImage() {
    return (
        <AspectRatio ratio={6 / 4}>
            <Image
                src="https://images.unsplash.com/photo-1681949103006-70066fb25dfe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team working together"
                fill
                className="rounded-3xl object-cover"
            />
        </AspectRatio>
    );
}