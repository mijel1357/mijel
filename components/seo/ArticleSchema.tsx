import { SchemaMarkup } from "./SchemaMarkup";
import { SITE_DOMAIN } from "@/lib/constants";

interface ArticleSchemaProps {
    title: string;
    description: string;
    publishedAt: string;
    modifiedAt?: string;
    authorName?: string;
    imageUrl?: string;
    slug: string;
}

export function ArticleSchema({
    title,
    description,
    publishedAt,
    modifiedAt,
    authorName = "Mijel.id Team",
    imageUrl,
    slug,
}: ArticleSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: publishedAt,
        dateModified: modifiedAt || publishedAt,
        author: {
            "@type": "Person",
            name: authorName,
        },
        publisher: {
            "@type": "Organization",
            name: "Mijel.id",
            logo: {
                "@type": "ImageObject",
                url: `${SITE_DOMAIN}/logo.png`,
            },
        },
        image: imageUrl,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_DOMAIN}/blog/${slug}`,
        },
    };

    return <SchemaMarkup schema={schema} />;
}
