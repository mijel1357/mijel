import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PriceTable } from "@/components/ui/PriceTable";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { Card } from "@/components/ui/Card";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
    title: "Harga Minyak Jelantah Terbaru | Mijel.id",
    description:
        "Cek harga minyak jelantah terbaru hari ini. Harga terbaik untuk rumah tangga, restoran, hotel, dan industri. Update setiap hari.",
    canonicalUrl: "https://mijel.id/harga-minyak-jelantah",
});

const prices = [
    {
        type: "Rumah Tangga",
        pricePerKg: 1500,
        pricePerLiter: 1300,
        notes: "Minimal 5 liter, kualitas standar",
    },
    {
        type: "Restoran",
        pricePerKg: 3500,
        pricePerLiter: 3000,
        notes: "Kualitas menengah, volume rutin",
    },
    {
        type: "Hotel/Industri",
        pricePerKg: 5500,
        pricePerLiter: 5000,
        notes: "Volume besar, kualitas baik",
    },
    {
        type: "Premium",
        pricePerKg: 6000,
        pricePerLiter: 5500,
        notes: "Kualitas terbaik, warna jernih",
    },
];

const faqs = [
    {
        question: "Bagaimana cara menentukan kualitas minyak jelantah?",
        answer:
            "Kualitas ditentukan dari warna, kejernihan, dan kotoran. Minyak yang lebih jernih dan bersih mendapat harga lebih tinggi.",
    },
    {
        question: "Apakah harga bisa berubah sewaktu-waktu?",
        answer:
            "Ya, harga dapat berubah mengikuti harga pasar. Untuk harga terupdate, hubungi kami via WhatsApp.",
    },
    {
        question: "Apakah ada harga khusus untuk volume besar?",
        answer:
            "Ya, untuk volume di atas 100 liter per bulan, kami berikan harga spesial. Hubungi kami untuk negosiasi.",
    },
    {
        question: "Bagaimana sistem pembayaran?",
        answer:
            "Pembayaran tunai langsung di tempat setelah penimbangan. Untuk kontrak rutin, bisa transfer bank.",
    },
];

export default function HargaPage() {
    return (
        <>
            <FAQSchema items={faqs} />

            <Breadcrumb items={[{ label: "Harga Minyak Jelantah" }]} />

            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4">Harga Minyak Jelantah Terbaru</h1>
                        <p className="text-xl text-green-50">
                            Update harga terkini untuk berbagai jenis minyak jelantah
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <PriceTable prices={prices} updatedAt={new Date().toISOString()} />
                        </Card>

                        <div className="mt-8 space-y-6">
                            <Card>
                                <h2 className="text-xl font-bold mb-4">
                                    Faktor yang Mempengaruhi Harga
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>
                                            <strong>Kualitas:</strong> Warna, kejernihan, dan tingkat
                                            kotoran
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>
                                            <strong>Volume:</strong> Semakin besar volume, harga semakin
                                            baik
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>
                                            <strong>Lokasi:</strong> Area Jakarta harga bisa berbeda
                                            dengan luar Jakarta
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span>
                                            <strong>Harga Pasar:</strong> Mengikuti harga biodiesel dan
                                            CPO
                                        </span>
                                    </li>
                                </ul>
                            </Card>

                            <Card>
                                <h2 className="text-xl font-bold mb-4">Tips Mendapat Harga Terbaik</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">1.</span>
                                        <span>
                                            Saring minyak jelantah dari kotoran sebelum dijual
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">2.</span>
                                        <span>Simpan dalam wadah bersih dan tertutup rapat</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">3.</span>
                                        <span>Jual dalam volume besar untuk harga lebih baik</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">4.</span>
                                        <span>
                                            Hubungi kami secara rutin untuk mendapat info harga terbaru
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section bg="gray">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center mb-8">Pertanyaan tentang Harga</h2>
                        <FAQAccordion items={faqs} />
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <CTABox
                        title="Ingin Tahu Harga Terupdate?"
                        description="Hubungi kami via WhatsApp untuk mendapatkan harga terbaru sesuai kualitas minyak jelantah Anda"
                        whatsappMessage="Halo, saya mau tanya harga minyak jelantah terbaru"
                    />
                </Container>
            </Section>
        </>
    );
}
