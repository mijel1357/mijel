import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { CTABox } from "@/components/ui/CTABox";
import { generateSEOMetadata } from "@/lib/seo";
import locations from "@/data/locations.json";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Area Layanan Pengepul Minyak Jelantah | Jabodetabek",
    description:
        "Daftar lengkap area layanan pengepul minyak jelantah di Jakarta, Bogor, Depok, Tangerang, Bekasi. Cek apakah lokasi Anda terlayani.",
    canonicalUrl: "https://mijel.id/area-layanan",
});

export default function AreaLayananPage() {
    const activeLocations = locations.filter((loc) => loc.isActive);

    // Group by province/city
    const jakartaBarat = activeLocations.filter(
        (loc) => loc.city === "Jakarta Barat" && loc.type === "kecamatan"
    );
    const jakartaPusat = activeLocations.filter(
        (loc) => loc.city === "Jakarta Pusat" && loc.type === "kecamatan"
    );
    const jakartaSelatan = activeLocations.filter(
        (loc) => loc.city === "Jakarta Selatan" && loc.type === "kecamatan"
    );
    const jakartaTimur = activeLocations.filter(
        (loc) => loc.city === "Jakarta Timur" && loc.type === "kecamatan"
    );
    const jakartaUtara = activeLocations.filter(
        (loc) => loc.city === "Jakarta Utara" && loc.type === "kecamatan"
    );

    const hubCities = activeLocations.filter(
        (loc) =>
            loc.type === "kota" &&
            ["Bogor", "Depok", "Tangerang", "Bekasi"].includes(loc.city || "")
    );

    const otherCities = activeLocations.filter(
        (loc) =>
            loc.type === "kota" &&
            !["Jakarta Barat", "Jakarta Pusat", "Jakarta Selatan", "Jakarta Timur", "Jakarta Utara", "Bogor", "Depok", "Tangerang", "Bekasi"].includes(
                loc.city || ""
            )
    );

    return (
        <>
            <Breadcrumb items={[{ label: "Area Layanan" }]} />

            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4">Area Layanan Pengepul Minyak Jelantah</h1>
                        <p className="text-xl text-green-50">
                            Melayani seluruh Jabodetabek dengan jangkauan luas
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Jakarta */}
            <Section>
                <Container>
                    <h2 className="text-center mb-8">DKI Jakarta</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Jakarta Barat", locs: jakartaBarat },
                            { name: "Jakarta Pusat", locs: jakartaPusat },
                            { name: "Jakarta Selatan", locs: jakartaSelatan },
                            { name: "Jakarta Timur", locs: jakartaTimur },
                            { name: "Jakarta Utara", locs: jakartaUtara },
                        ].map((region) => (
                            <Card key={region.name} className="h-full">
                                <h3 className="font-bold text-lg mb-3 text-primary">
                                    {region.name}
                                </h3>
                                {region.locs.length > 0 ? (
                                    <ul className="space-y-2">
                                        {region.locs.slice(0, 5).map((loc) => (
                                            <li key={loc.id}>
                                                <Link
                                                    href={`/${loc.slug}`}
                                                    className="text-gray-700 hover:text-primary transition-colors text-sm"
                                                >
                                                    {loc.name}
                                                </Link>
                                            </li>
                                        ))}
                                        {region.locs.length > 5 && (
                                            <li className="text-sm text-gray-500">
                                                dan {region.locs.length - 5} lainnya
                                            </li>
                                        )}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-500">Segera hadir</p>
                                )}
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Jabodetabek */}
            <Section bg="gray">
                <Container>
                    <h2 className="text-center mb-8">Kota Penyangga</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hubCities.map((city) => (
                            <Link
                                key={city.id}
                                href={`/${city.slug}`}
                            >
                                <Card hover className="text-center cursor-pointer h-full">
                                    <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                                    <h3 className="text-lg font-semibold">{city.name}</h3>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {city.province}
                                    </p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Other Cities */}
            {otherCities.length > 0 && (
                <Section>
                    <Container>
                        <h2 className="text-center mb-8">Kota Besar Lainnya</h2>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                            {otherCities.map((city) => (
                                <Card key={city.id} className="text-center">
                                    <h3 className="font-semibold">{city.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {city.isActive ? "Aktif" : "Segera Hadir"}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* CTA */}
            <Section bg="gray">
                <Container>
                    <CTABox
                        title="Lokasi Anda Tidak Terdaftar?"
                        description="Hubungi kami untuk informasi lebih lanjut tentang layanan di area Anda"
                        whatsappMessage="Halo, saya ingin tanya apakah melayani area saya"
                    />
                </Container>
            </Section>
        </>
    );
}
