import { MessageCircle, Phone } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import { generateWhatsAppLink } from "@/lib/utils";

interface CTABoxProps {
    title: string;
    description: string;
    whatsappMessage: string;
    className?: string;
}

export function CTABox({
    title,
    description,
    whatsappMessage,
    className,
}: CTABoxProps) {
    return (
        <Card
            className={`bg-gradient-to-br from-primary to-primary-dark text-white ${className}`}
        >
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-green-50 mb-6">{description}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="whatsapp" href={generateWhatsAppLink(whatsappMessage)}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat WhatsApp
                    </Button>
                    <Button
                        variant="outline"
                        href={generateWhatsAppLink(whatsappMessage)}
                        className="bg-white hover:bg-gray-50 text-primary border-white"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        Hubungi Kami
                    </Button>
                </div>
            </div>
        </Card>
    );
}
