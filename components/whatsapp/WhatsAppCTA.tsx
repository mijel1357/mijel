import { MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { generateWhatsAppLink } from "@/lib/utils";

interface WhatsAppCTAProps {
    message: string;
    text?: string;
    className?: string;
}

export function WhatsAppCTA({
    message,
    text = "Hubungi via WhatsApp",
    className,
}: WhatsAppCTAProps) {
    return (
        <Button
            variant="whatsapp"
            href={generateWhatsAppLink(message)}
            className={className}
        >
            <MessageCircle className="w-5 h-5 mr-2" />
            {text}
        </Button>
    );
}
