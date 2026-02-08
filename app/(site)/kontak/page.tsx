import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { CTABox } from "@/components/ui/CTABox";
import { generateSEOMetadata } from "@/lib/seo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Kontak Kami - Hubungi Pengepul Minyak Jelantah Mijel.id",
    description:
        "Hubungi kami via WhatsApp, telepon, atau email. Tim Mijel.id siap melayani Anda 6 hari seminggu untuk jual minyak jelantah.",
    canonicalUrl: "https://mijel.id/kontak",
});

export default function KontakPage() {
    return (
        <>
            <Breadcrumb items={[{ label: "Kontak" }]} />

            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4">Hubungi Kami</h1>
                        <p className="text-xl text-green-50">
                            Tim kami siap melayani Anda dengan profesional
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card>
                            <div className="flex items-start mb-6">
                                <Phone className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
                                    <p className="text-gray-600 mb-3">
                                        Cara tercepat untuk menghubungi kami
                                    </p>
                                    <a
                                        href="https://wa.me/628123456789"
                                        className="text-primary hover:underline font-semibold"
                                    >
                                        +62 812-3456-7890
                                    </a>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start mb-6">
                                <Mail className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Email</h3>
                                    <p className="text-gray-600 mb-3">
                                        Untuk pertanyaan dan kerjasama
                                    </p>
                                    <a
                                        href="mailto:info@mijel.id"
                                        className="text-primary hover:underline font-semibold"
                                    >
                                        info@mijel.id
                                    </a>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start mb-6">
                                <MapPin className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Lokasi</h3>
                                    <p className="text-gray-600">
                                        Jakarta, Bogor, Depok,
                                        <br />
                                        Tangerang, Bekasi
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start mb-6">
                                <Clock className="w-8 h-8 text-primary mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Jam Operasional</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>Senin - Sabtu: 08:00 - 17:00</p>
                                        <p>Minggu: Libur</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section bg="gray">
                <Container>
                    <CTABox
                        title="Siap Jual Minyak Jelantah Anda?"
                        description="Hubungi kami sekarang via WhatsApp untuk mendapatkan harga terbaik dan jadwal penjemputan"
                        whatsappMessage="Halo, saya ingin jual minyak jelantah. Mohon info lebih lanjut."
                    />
                </Container>
            </Section>
        </>
    );
}
