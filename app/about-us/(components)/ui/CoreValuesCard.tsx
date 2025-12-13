import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CoreValues } from "@/types/coreValues";

interface CoreValuesCardsProps {
    coreValue: CoreValues
}


export default function CoreValuesCards({ coreValue }: CoreValuesCardsProps) {
    const Icon = coreValue.icon;
    return (
        <>
            <Card className="w-full p-8 rounded-2xl shadow-lg">
                <CardHeader className="flex text-[#9C27B0]">
                        <Icon />
                </CardHeader>
                <CardContent className="space-y-4">
                    <CardTitle>{coreValue.title}</CardTitle>
                    <CardDescription>{coreValue.description}</CardDescription>
                </CardContent>
            </Card>
        </>
    );
}