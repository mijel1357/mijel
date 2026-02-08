import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    bg?: "white" | "gray" | "primary";
    className?: string;
}

export function Section({ children, bg = "white", className }: SectionProps) {
    return (
        <section
            className={cn(
                "py-12 md:py-16 lg:py-20",
                bg === "white" && "bg-white",
                bg === "gray" && "bg-gray-50",
                bg === "primary" && "bg-primary text-white",
                className
            )}
        >
            {children}
        </section>
    );
}
