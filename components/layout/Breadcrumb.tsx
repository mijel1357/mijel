import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "./Container";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
            <Container>
                <ol className="flex items-center space-x-2 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-500 hover:text-primary transition-colors flex items-center"
                        >
                            <Home className="w-4 h-4" />
                            <span className="sr-only">Home</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                            {item.href && index < items.length - 1 ? (
                                <Link
                                    href={item.href}
                                    className="text-gray-500 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-900 font-medium">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </Container>
        </nav>
    );
}
