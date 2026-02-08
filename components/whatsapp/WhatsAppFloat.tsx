"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/Button";

export function WhatsAppFloat() {
    const defaultMessage = "Halo Mijel.id, saya ingin bertanya tentang layanan pengepulan minyak jelantah";

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="whatsapp"
                href={generateWhatsAppLink(defaultMessage)}
                className="shadow-2xl hover:scale-110 transition-transform"
            >
                <MessageCircle className="w-6 h-6 mr-2" />
                <span className="hidden sm:inline">Chat WhatsApp</span>
            </Button>
        </div>
    );
}
