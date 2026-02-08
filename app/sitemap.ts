import { MetadataRoute } from "next";
import locations from "@/data/locations.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://mijel.id";

    // Static pages
    const staticPages = [
        "",
        "/harga-minyak-jelantah",
        "/area-layanan",
        "/tentang",
        "/kontak",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Location pages
    const locationPages = locations
        .filter((loc) => loc.isActive)
        .map((location) => ({
            url: `${baseUrl}/${location.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: location.type === "kota" ? 0.9 : 0.7,
        }));

    return [...staticPages, ...locationPages];
}
