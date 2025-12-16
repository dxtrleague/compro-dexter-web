import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function VisionCard() {
    return(
        <>
            <Card className="max-w-4xl p-6 sm:p-8 lg:p-12 shadow-2xl">
                <CardContent className="text-center space-y-4 lg:space-y-8">
                    <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                        Our Vision
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg lg:text-2xl/8 text-[#1E293B]">
                        "Become a Company that putting forward values over profit and help other business throughout Information Technology with a goodwill"
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}