import { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

export function ServiceCard({
    icon: Icon,
    title,
    description,
    features,
}: ServiceCardProps) {
    return (
        <Card className="h-full" hover>
            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                    <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="text-primary mr-2">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
}
