import { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function FeatureCard({
    icon: Icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <Card className="text-center" hover>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </Card>
    );
}
