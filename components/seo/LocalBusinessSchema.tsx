import { SchemaMarkup } from "./SchemaMarkup";
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/lib/constants";

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE_NAME,
        description: "Layanan pengepul minyak jelantah terpercaya di Jabodetabek",
        url: SITE_DOMAIN,
        telephone: `+${WHATSAPP_NUMBER}`,
        email: CONTACT_EMAIL,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
        },
        areaServed: [
            {
                "@type": "City",
                name: "Jakarta",
            },
            {
                "@type": "City",
                name: "Bogor",
            },
            {
                "@type": "City",
                name: "Depok",
            },
            {
                "@type": "City",
                name: "Tangerang",
            },
            {
                "@type": "City",
                name: "Bekasi",
            },
        ],
        priceRange: "Rp 1.000 - Rp 6.000",
    };

    return <SchemaMarkup schema={schema} />;
}
