import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function VisionCard() {
    return(
        <>
            <Card className="max-w-4xl p-12 shadow-2xl">
                <CardContent className="text-center space-y-8">
                    <CardTitle className="text-4xl font-bold text-primary">
                        Our Vision
                    </CardTitle>
                    <CardDescription className="text-2xl/8 text-[#1E293B]">
                        "Become a Company that putting forward values over profit and help other business throughout Information Technology with a goodwill"
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}