"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                >
                    <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={cn(
                                "w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                                openIndex === index && "transform rotate-180"
                            )}
                        />
                    </button>
                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-200",
                            openIndex === index ? "max-h-96" : "max-h-0"
                        )}
                    >
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
