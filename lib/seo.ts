import { Metadata } from "next";
import { SITE_DOMAIN, SITE_NAME } from "@/lib/constants";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogImage?: string;
    noindex?: boolean;
}

export function generateSEOMetadata({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    noindex = false,
}: SEOProps): Metadata {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const imageUrl = ogImage || `${SITE_DOMAIN}/og-image.jpg`;

    return {
        title: fullTitle,
        description,
        keywords: keywords?.join(", "),
        robots: noindex ? "noindex,nofollow" : "index,follow",
        alternates: {
            canonical: canonicalUrl || SITE_DOMAIN,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonicalUrl || SITE_DOMAIN,
            siteName: SITE_NAME,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "id_ID",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
            images: [imageUrl],
        },
    };
}
