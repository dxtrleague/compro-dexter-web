import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export default function VisionCard() {
    return(
        <>
            <Card className="max-w-4xl p-6 md:p-8 lg:p-12 shadow-xl md:shadow-2xl">
                <CardContent className="text-center space-y-4 md:space-y-6">
                    <CardTitle className="text-3xl md:text-4xl lg:text-[45px] font-bold text-primary">
                        Our Vision
                    </CardTitle>
                    <CardDescription className="text-base md:text-xl/8 lg:text-2xl/10 text-primary-foreground">
                        "Become a Company that putting forward values over profit and help other business throughout Information Technology with a goodwill"
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    );
}