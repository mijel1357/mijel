import { Star } from "lucide-react";
import { Card } from "./Card";

interface TestimonialCardProps {
    name: string;
    role?: string;
    location?: string;
    content: string;
    rating: number;
}

export function TestimonialCard({
    name,
    role,
    location,
    content,
    rating,
}: TestimonialCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-5 h-5 ${i < rating
                                ? "fill-secondary text-secondary"
                                : "fill-gray-200 text-gray-200"
                            }`}
                    />
                ))}
            </div>
            <p className="text-gray-600 italic mb-6 flex-grow">&ldquo;{content}&rdquo;</p>
            <div>
                <p className="font-semibold text-gray-900">{name}</p>
                {role && <p className="text-sm text-gray-500">{role}</p>}
                {location && <p className="text-sm text-gray-500">{location}</p>}
            </div>
        </Card>
    );
}
