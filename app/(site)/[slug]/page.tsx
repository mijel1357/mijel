import { notFound } from "next/navigation";
import { Metadata } from "next";
import locations from "@/data/locations.json";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StepCard } from "@/components/ui/StepCard";
import { PriceTable } from "@/components/ui/PriceTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { Card } from "@/components/ui/Card";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { generateSEOMetadata } from "@/lib/seo";
import { Home as HomeIcon, UtensilsCrossed, Building2, Factory } from "lucide-react";
import Link from "next/link";

// Generate static params from locations data
export async function generateStaticParams() {
    return locations.map((location) => ({
        slug: location.slug.replace("pengepul-minyak-jelantah-di-", ""),
    }));
}

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = locations.find(
        (loc) =>
            loc.slug === `pengepul-minyak-jelantah-di-${params.slug}` ||
            loc.slug === params.slug
    );

    if (!location) {
        return {};
    }

    return generateSEOMetadata({
        title: location.metaTitle,
        description: location.metaDescription,
        canonicalUrl: `https://mijel.id/pengepul-minyak-jelantah-di-${params.slug}`,
    });
}

export default function LocationPage({ params }: Props) {
    const location = locations.find(
        (loc) =>
            loc.slug === `pengepul-minyak-jelantah-di-${params.slug}` ||
            loc.slug === params.slug
    );

    if (!location || !location.isActive) {
        notFound();
    }

    const isKota = location.type === "kota";

    // Sample prices
    const prices = [
        { type: "Rumah Tangga", pricePerKg: 1500, pricePerLiter: 1300 },
        { type: "Restoran", pricePerKg: 3500, pricePerLiter: 3000 },
        { type: "Hotel/Industri", pricePerKg: 5500, pricePerLiter: 5000 },
        { type: "Premium", pricePerKg: 6000, pricePerLiter: 5500 },
    ];

    // Get nearby locations if they exist
    const nearbyLocations = location.nearbyIds
        ? locations.filter((loc) => location.nearbyIds?.includes(loc.id))
        : [];

    return (
        <>
            <LocalBusinessSchema />
            {location.faqs && <FAQSchema items={location.faqs} />}

            <Breadcrumb
                items={[
                    { label: "Area Layanan", href: "/area-layanan" },
                    ...(location.city && !isKota
                        ? [
                            {
                                label: location.city,
                                href: `/pengepul-minyak-jelantah-di-${location.citySlug?.replace("pengepul-minyak-jelantah-di-", "")}`,
                            },
                        ]
                        : []),
                    { label: location.name },
                ]}
            />

            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4">
                            Pengepul Minyak Jelantah di {location.name}
                        </h1>
                        <p className="text-xl text-green-50 mb-6">
                            Jual minyak jelantah di {location.name} dengan harga terbaik.
                            Gratis jemput ke lokasi Anda, bayar tunai di tempat.
                        </p>
                        <CTABox
                            title="Hubungi Kami Sekarang"
                            description={`Tim kami siap melayani ${location.name} dengan profesional`}
                            whatsappMessage={`Halo, saya ingin jual minyak jelantah di ${location.name}`}
                            className="bg-white/10 backdrop-blur-sm border-white/20"
                        />
                    </div>
                </Container>
            </Section>

            {/* Description */}
            <Section>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {location.description}
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Layanan */}
            <Section bg="gray">
                <Container>
                    <h2 className="text-center mb-12">Layanan di {location.name}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={HomeIcon}
                            title="Rumah Tangga"
                            description="Untuk ibu rumah tangga"
                            features={["Minimal 5L", "Gratis jemput", "Bayar tunai"]}
                        />
                        <ServiceCard
                            icon={UtensilsCrossed}
                            title="Restoran"
                            description="Warung & restoran"
                            features={["Pickup rutin", "Harga bagus", "Profesional"]}
                        />
                        <ServiceCard
                            icon={Building2}
                            title="Hotel"
                            description="Hotel & katering"
                            features={["Kontrak", "Jadwal tetap", "Invoice resmi"]}
                        />
                        <ServiceCard
                            icon={Factory}
                            title="Industri"
                            description="Pabrik & industri"
                            features={["Volume besar", "Harga terbaik", "SOP lengkap"]}
                        />
                    </div>
                </Container>
            </Section>

            {/* Cara Jual */}
            <Section>
                <Container>
                    <h2 className="text-center mb-12">
                        Cara Jual Minyak Jelantah di {location.name}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StepCard
                            number={1}
                            title="Hubungi"
                            description="Chat WhatsApp kami"
                        />
                        <StepCard number={2} title="Jadwal" description="Atur waktu pickup" />
                        <StepCard number={3} title="Jemput" description="Tim datang & timbang" />
                        <StepCard number={4} title="Bayar" description="Terima uang tunai" />
                    </div>
                </Container>
            </Section>

            {/* Harga */}
            <Section bg="gray">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-center mb-8">
                            Harga Minyak Jelantah di {location.name}
                        </h2>
                        <Card>
                            <PriceTable prices={prices} />
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Area Dilayani (for kecamatan) */}
            {!isKota && location.kelurahan && location.kelurahan.length > 0 && (
                <Section>
                    <Container>
                        <h2 className="text-center mb-8">Area yang Kami Layani</h2>
                        <div className="max-w-4xl mx-auto">
                            <Card>
                                <h3 className="text-lg font-semibold mb-4">
                                    Kelurahan di {location.name}:
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {location.kelurahan.map((kelurahan, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center text-gray-700"
                                        >
                                            <span className="text-primary mr-2">✓</span>
                                            {kelurahan}
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </Container>
                </Section>
            )}

            {/* FAQ */}
            {location.faqs && location.faqs.length > 0 && (
                <Section bg="gray">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-center mb-8">
                                Pertanyaan Seputar Layanan di {location.name}
                            </h2>
                            <FAQAccordion items={location.faqs} />
                        </div>
                    </Container>
                </Section>
            )}

            {/* Nearby Locations */}
            {nearbyLocations.length > 0 && (
                <Section>
                    <Container>
                        <h2 className="text-center mb-8">Area Terdekat</h2>
                        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {nearbyLocations.slice(0, 6).map((nearby) => (
                                <Link
                                    key={nearby.id}
                                    href={`/pengepul-minyak-jelantah-di-${nearby.slug.replace("pengepul-minyak-jelantah-di-", "")}`}
                                >
                                    <Card hover className="text-center cursor-pointer">
                                        <h3 className="font-semibold">{nearby.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{nearby.city}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* Final CTA */}
            <Section>
                <Container>
                    <CTABox
                        title={`Siap Jual Minyak Jelantah di ${location.name}?`}
                        description="Hubungi kami sekarang untuk jadwal penjemputan dan dapatkan harga terbaik!"
                        whatsappMessage={`Halo, saya di ${location.name} ingin jual minyak jelantah`}
                    />
                </Container>
            </Section>
        </>
    );
}
