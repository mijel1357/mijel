import { Card } from "./Card";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
    return (
        <Card className="relative" hover>
            <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {number}
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </Card>
    );
}
