import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SITE_NAME } from "@/lib/constants";
import { Truck, HandCoins, Recycle, Users } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: `Mitra & Kerjasama - ${SITE_NAME}`,
    description:
        "Bergabung menjadi mitra pengumpul minyak jelantah Mijel.id. Dapatkan penghasilan tambahan dan kontribusi untuk lingkungan.",
};

export default function MitraPage() {
    const waLink = generateWhatsAppLink(
        "Halo Admin Mijel.id, saya tertarik untuk menjadi mitra pengumpul minyak jelantah. Mohon infonya."
    );

    return (
        <>
            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white pt-20 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">Gabung Jadi Mitra Mijel.id</h1>
                        <p className="text-xl text-green-50">
                            Ubah limbah menjadi berkah. Mari berkolaborasi mengumpulkan minyak jelantah
                            untuk lingkungan yang lebih bersih dan penghasilan tambahan.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <FeatureCard
                            icon={HandCoins}
                            title="Harga Kompetitif"
                            description="Kami membeli minyak jelantah dengan harga terbaik di pasaran, transparan dan jujur."
                        />
                        <FeatureCard
                            icon={Truck}
                            title="Jemput Gratis"
                            description="Tim logistik kami siap menjemput minyak jelantah ke lokasi Anda tanpa biaya tambahan (S&K berlaku)."
                        />
                        <FeatureCard
                            icon={Recycle}
                            title="Limbah Terkelola"
                            description="Minyak jelantah Anda dijamin akan diolah menjadi biodiesel, bukan dijernihkan kembali."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Jaringan Luas"
                            description="Bergabung dengan jaringan pengumpul terpercaya di berbagai kota besar di Indonesia."
                        />
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-900">Siapa yang Bisa Bergabung?</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900">Restoran & Cafe</strong>
                                            <span className="text-gray-600">Pemilik usaha kuliner dengan limbah rutin.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900">Hotel & Katering</strong>
                                            <span className="text-gray-600">Industri hospitality dengan volume limbah besar.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900">Bank Sampah & Komunitas</strong>
                                            <span className="text-gray-600">Pengelola lingkungan tingkat RT/RW/Kelurahan.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900">Pengepul Mandiri</strong>
                                            <span className="text-gray-600">Individu yang ingin memulai bisnis pengumpulan.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-2xl font-bold mb-4">Mulai Sekarang</h3>
                                <p className="text-gray-600 mb-8">
                                    Konsultasikan potensi kerjasama dan dapatkan penawaran harga khusus untuk mitra rutin.
                                </p>
                                <Button href={waLink} size="lg" className="w-full justify-center">
                                    Hubungi Tim Kemitraan
                                </Button>
                                <p className="text-xs text-gray-400 mt-4">
                                    Diskusi gratis via WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
