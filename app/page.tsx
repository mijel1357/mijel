import { Metadata } from "next";
import {
    Phone,
    MapPin,
    DollarSign,
    Recycle,
    TrendingUp,
    Shield,
    Clock,
    Building2,
    Home as HomeIcon,
    UtensilsCrossed,
    Factory,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { StepCard } from "@/components/ui/StepCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { PriceTable } from "@/components/ui/PriceTable";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { generateSEOMetadata } from "@/lib/seo";
import { generateWhatsAppLink } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
    title: `${SITE_NAME} - Pengepul Minyak Jelantah Terpercaya di Jabodetabek`,
    description:
        "Jual Minyak Jelantah, Kami Jemput & Bayar Tunai. Layanan pengepul minyak jelantah terpercaya di Jakarta, Bogor, Depok, Tangerang, Bekasi. Harga terbaik, gratis jemput.",
    keywords: [
        "pengepul minyak jelantah",
        "jual minyak jelantah",
        "harga minyak jelantah",
        "minyak jelantah Jakarta",
        "used cooking oil",
    ],
});

// Hardcoded data for now
const prices = [
    {
        type: "Rumah Tangga",
        pricePerKg: 1500,
        pricePerLiter: 1300,
        notes: "Minimal 5 liter",
    },
    {
        type: "Restoran",
        pricePerKg: 3500,
        pricePerLiter: 3000,
        notes: "Kualitas menengah",
    },
    {
        type: "Hotel/Industri",
        pricePerKg: 5500,
        pricePerLiter: 5000,
        notes: "Volume besar",
    },
    {
        type: "Premium",
        pricePerKg: 6000,
        pricePerLiter: 5500,
        notes: "Kualitas terbaik",
    },
];

const testimonials = [
    {
        name: "Ibu Siti",
        role: "Pemilik Warung Makan",
        location: "Cengkareng, Jakarta Barat",
        content:
            "Sudah 6 bulan jual minyak jelantah ke Mijel.id. Prosesnya mudah, tim nya profesional, dan harganya bagus. Recommended!",
        rating: 5,
    },
    {
        name: "Pak Budi",
        role: "Manajer Hotel",
        location: "Kebayoran Baru, Jakarta Selatan",
        content:
            "Kerjasama yang sangat baik. Jadwal pickup rutin setiap minggu, pembayaran selalu tepat waktu, dan dokumentasi lengkap.",
        rating: 5,
    },
    {
        name: "Bu Ani",
        role: "Ibu Rumah Tangga",
        location: "Depok",
        content:
            "Awalnya ragu, tapi ternyata benar jemput gratis dan bayar tunai. Minyak jelantah yang biasanya dibuang sekarang jadi uang tambahan.",
        rating: 5,
    },
];

const faqs = [
    {
        question: "Apa itu minyak jelantah?",
        answer:
            "Minyak jelantah adalah minyak goreng yang sudah dipakai untuk memasak dan tidak layak digunakan kembali. Minyak ini bisa didaur ulang menjadi biodiesel dan produk lainnya.",
    },
    {
        question: "Berapa harga minyak jelantah per kg/liter?",
        answer:
            "Harga minyak jelantah berkisar Rp 1.500 - Rp 6.000 per kg tergantung kualitas dan volume. Untuk harga terbaru, silakan hubungi kami via WhatsApp.",
    },
    {
        question: "Berapa minimal minyak jelantah yang bisa dijual?",
        answer:
            "Untuk Jakarta minimal 5 liter, untuk Bogor/Depok/Tangerang/Bekasi minimal 10 liter. Kami siap jemput langsung ke lokasi Anda.",
    },
    {
        question: "Bagaimana cara menjual minyak jelantah?",
        answer:
            "Sangat mudah! Hubungi kami via WhatsApp, beritahu lokasi dan volume minyak jelantah Anda. Tim kami akan datang untuk menjemput dan membayar tunai di tempat.",
    },
    {
        question: "Apakah ada biaya penjemputan?",
        answer:
            "Tidak ada biaya penjemputan sama sekali. Layanan gratis untuk semua wilayah yang kami layani di Jabodetabek.",
    },
    {
        question: "Area mana saja yang dilayani?",
        answer:
            "Kami melayani Jakarta (semua wilayah), Bogor, Depok, Tangerang, Tangerang Selatan, dan Bekasi. Cek halaman Area Layanan untuk detail lengkap.",
    },
];

export default function Home() {
    return (
        <>
            <LocalBusinessSchema />
            <FAQSchema items={faqs} />

            {/* Hero Section */}
            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white pt-20 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-6">
                            Jual Minyak Jelantah, Kami Jemput & Bayar Tunai
                        </h1>
                        <p className="text-xl text-green-50 mb-8">
                            Layanan pengepul minyak jelantah terpercaya di Jabodetabek.
                            Harga terbaik, gratis jemput, pembayaran tunai di tempat.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button
                                variant="whatsapp"
                                href={generateWhatsAppLink(
                                    "Halo Mijel.id, saya ingin jual minyak jelantah"
                                )}
                                className="text-lg px-8 py-4"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Jual Sekarang
                            </Button>
                            <Button
                                variant="outline"
                                href="/harga-minyak-jelantah"
                                className="text-lg px-8 py-4 bg-white hover:bg-gray-50 text-primary border-white"
                            >
                                <DollarSign className="w-5 h-5 mr-2" />
                                Cek Harga
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                Terpercaya
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 mr-2" />
                                Proses Cepat
                            </div>
                            <div className="flex items-center">
                                <DollarSign className="w-5 h-5 mr-2" />
                                Harga Terbaik
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Harga Widget */}
            <Section bg="gray">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="mb-3">Harga Minyak Jelantah Hari Ini</h2>
                            <p className="text-gray-600">
                                Harga terbaru untuk berbagai jenis minyak jelantah
                            </p>
                        </div>
                        <Card>
                            <PriceTable
                                prices={prices}
                                updatedAt={new Date().toISOString()}
                            />
                            <div className="mt-6 text-center">
                                <Button variant="primary" href="/harga-minyak-jelantah">
                                    Lihat Detail Harga
                                </Button>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            {/* Cara Kerja */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="mb-3">Cara Jual Minyak Jelantah</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Proses mudah dan cepat dalam 4 langkah sederhana
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StepCard
                            number={1}
                            title="Hubungi Kami"
                            description="Hubungi via WhatsApp, beritahu lokasi dan volume minyak jelantah Anda"
                        />
                        <StepCard
                            number={2}
                            title="Jadwal Pickup"
                            description="Tim kami akan konfirmasi jadwal penjemputan sesuai kenyamanan Anda"
                        />
                        <StepCard
                            number={3}
                            title="Kami Jemput"
                            description="Tim datang ke lokasi, menimbang minyak jelantah dengan timbangan digital"
                        />
                        <StepCard
                            number={4}
                            title="Bayar Tunai"
                            description="Pembayaran tunai langsung di tempat setelah penimbangan selesai"
                        />
                    </div>
                </Container>
            </Section>

            {/* Layanan */}
            <Section bg="gray">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="mb-3">Layanan Kami</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Melayani berbagai jenis pelanggan dengan kebutuhan yang berbeda
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={HomeIcon}
                            title="Rumah Tangga"
                            description="Untuk ibu rumah tangga yang ingin menjual minyak jelantah dari dapur"
                            features={[
                                "Minimal 5 liter",
                                "Gratis penjemputan",
                                "Pembayaran tunai",
                                "Jadwal fleksibel",
                            ]}
                        />
                        <ServiceCard
                            icon={UtensilsCrossed}
                            title="Restoran & Warung"
                            description="Solusi untuk restoran dan warung makan dengan volume menengah"
                            features={[
                                "Pickup rutin",
                                "Harga kompetitif",
                                "Dokumentasi lengkap",
                                "Tim profesional",
                            ]}
                        />
                        <ServiceCard
                            icon={Building2}
                            title="Hotel & Katering"
                            description="Layanan khusus untuk hotel dan katering dengan volume besar"
                            features={[
                                "Kontrak kerjasama",
                                "Jadwal tetap",
                                "Harga spesial",
                                "Invoice resmi",
                            ]}
                        />
                        <ServiceCard
                            icon={Factory}
                            title="Industri"
                            description="Partner terpercaya untuk industri makanan skala besar"
                            features={[
                                "Volume unlimited",
                                "Pickup terjadwal",
                                "Harga terbaik",
                                "SOP lengkap",
                            ]}
                        />
                    </div>
                </Container>
            </Section>

            {/* Mengapa Mijel.id */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="mb-3">Mengapa Pilih {SITE_NAME}?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Keunggulan kami yang membuat pelanggan percaya
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={DollarSign}
                            title="Harga Terbaik"
                            description="Kami memberikan harga kompetitif sesuai kualitas minyak jelantah Anda"
                        />
                        <FeatureCard
                            icon={MapPin}
                            title="Jemput Gratis"
                            description="Gratis penjemputan ke lokasi Anda di seluruh area Jabodetabek"
                        />
                        <FeatureCard
                            icon={Clock}
                            title="Proses Cepat"
                            description="Respon cepat dan jadwal penjemputan yang fleksibel sesuai kebutuhan"
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Terpercaya"
                            description="Berpengalaman lebih dari 5 tahun dengan ribuan pelanggan puas"
                        />
                        <FeatureCard
                            icon={Recycle}
                            title="Ramah Lingkungan"
                            description="Membantu daur ulang minyak jelantah untuk biodiesel dan produk ramah lingkungan"
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Transparan"
                            description="Penimbangan menggunakan timbangan digital bersertifikat di depan Anda"
                        />
                    </div>
                </Container>
            </Section>

            {/* Area Layanan */}
            <Section bg="gray">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="mb-3">Area Layanan</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Melayani seluruh Jabodetabek dengan jangkauan luas
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { name: "Jakarta Barat", slug: "jakarta-barat" },
                            { name: "Jakarta Pusat", slug: "jakarta-pusat" },
                            { name: "Jakarta Selatan", slug: "jakarta-selatan" },
                            { name: "Jakarta Timur", slug: "jakarta-timur" },
                            { name: "Jakarta Utara", slug: "jakarta-utara" },
                            { name: "Bogor", slug: "bogor" },
                            { name: "Depok", slug: "depok" },
                            { name: "Tangerang", slug: "tangerang" },
                            { name: "Bekasi", slug: "bekasi" },
                        ].map((city) => (
                            <Link
                                key={city.slug}
                                href={`/pengepul-minyak-jelantah-di-${city.slug}`}
                            >
                                <Card
                                    hover
                                    className="text-center cursor-pointer transition-all hover:border-primary"
                                >
                                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                                    <h3 className="text-lg font-semibold">{city.name}</h3>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button variant="primary" href="/area-layanan">
                            Lihat Semua Area
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Testimoni */}
            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="mb-3">Testimoni Pelanggan</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Apa kata mereka yang sudah menjual minyak jelantah kepada kami
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section bg="gray">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="mb-3">Pertanyaan yang Sering Diajukan</h2>
                            <p className="text-gray-600">
                                Jawaban untuk pertanyaan umum seputar jual minyak jelantah
                            </p>
                        </div>
                        <FAQAccordion items={faqs} />
                    </div>
                </Container>
            </Section>

            {/* CTA Final */}
            <Section>
                <Container>
                    <CTABox
                        title="Siap Jual Minyak Jelantah Anda?"
                        description="Hubungi kami sekarang untuk mendapatkan harga terbaik. Tim kami siap melayani Anda!"
                        whatsappMessage="Halo Mijel.id, saya ingin jual minyak jelantah. Mohon info lebih lanjut."
                    />
                </Container>
            </Section>
        </>
    );
}
