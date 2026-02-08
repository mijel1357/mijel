import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Card } from "@/components/ui/Card";
import { CTABox } from "@/components/ui/CTABox";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { generateSEOMetadata } from "@/lib/seo";
import { Users, Target, Award, TrendingUp, Shield, Recycle } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
    title: "Tentang Mijel.id - Pengepul Minyak Jelantah Terpercaya",
    description:
        "Mengenal Mijel.id, pengepul minyak jelantah terpercaya sejak 2019. Visi, misi, dan values kami dalam memberikan layanan terbaik.",
    canonicalUrl: "https://mijel.id/tentang",
});

export default function TentangPage() {
    return (
        <>
            <Breadcrumb items={[{ label: "Tentang Kami" }]} />

            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="mb-4">Tentang Mijel.id</h1>
                        <p className="text-xl text-green-50">
                            Partner terpercaya untuk pengelolaan minyak jelantah Anda
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Card>
                            <h2 className="mb-4">Siapa Kami</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>Mijel.id</strong> adalah perusahaan pengepul minyak
                                    jelantah terpercaya yang telah beroperasi sejak tahun 2019.
                                    Kami hadir untuk memberikan solusi pengelolaan minyak jelantah
                                    yang mudah, menguntungkan, dan ramah lingkungan.
                                </p>
                                <p>
                                    Dengan pengalaman lebih dari 5 tahun, kami telah melayani
                                    ribuan pelanggan di wilayah Jabodetabek, mulai dari rumah
                                    tangga, warung makan, restoran, hotel, hingga industri besar.
                                </p>
                                <p>
                                    Komitmen kami adalah memberikan harga terbaik, pelayanan
                                    profesional, dan kontribusi nyata untuk lingkungan melalui
                                    daur ulang minyak jelantah menjadi biodiesel dan produk ramah
                                    lingkungan lainnya.
                                </p>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section bg="gray">
                <Container>
                    <h2 className="text-center mb-12">Visi & Misi</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card>
                            <div className="flex items-start mb-4">
                                <Target className="w-10 h-10 text-primary mr-4" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Visi</h3>
                                    <p className="text-gray-700">
                                        Menjadi pengepul minyak jelantah terdepan di Indonesia yang
                                        memberikan nilai ekonomis maksimal bagi masyarakat sambil
                                        berkontribusi pada kelestarian lingkungan.
                                    </p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="flex items-start mb-4">
                                <Award className="w-10 h-10 text-primary mr-4" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Misi</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Memberikan harga terbaik dan jujur</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Layanan cepat dan profesional</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Edukasi pentingnya daur ulang</span>
                                        </li>
                                        <li className="flex">
                                            <span className="text-primary mr-2">•</span>
                                            <span>Berkontribusi untuk lingkungan</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <h2 className="text-center mb-12">Nilai-Nilai Kami</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={Shield}
                            title="Terpercaya"
                            description="Transparansi dan kejujuran dalam setiap transaksi"
                        />
                        <FeatureCard
                            icon={Users}
                            title="Profesional"
                            description="Tim terlatih dan berpengalaman melayani dengan ramah"
                        />
                        <FeatureCard
                            icon={TrendingUp}
                            title="Kompetitif"
                            description="Harga terbaik yang menguntungkan untuk pelanggan"
                        />
                        <FeatureCard
                            icon={Recycle}
                            title="Berkelanjutan"
                            description="Komitmen pada kelestarian lingkungan"
                        />
                        <FeatureCard
                            icon={Award}
                            title="Berkualitas"
                            description="Standar operasional tertinggi dalam setiap layanan"
                        />
                        <FeatureCard
                            icon={Target}
                            title="Inovatif"
                            description="Terus berinovasi untuk pelayanan lebih baik"
                        />
                    </div>
                </Container>
            </Section>

            <Section bg="gray">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-center mb-8">Pencapaian Kami</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                                <p className="text-gray-600">Tahun Pengalaman</p>
                            </Card>
                            <Card className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                                <p className="text-gray-600">Pelanggan Puas</p>
                            </Card>
                            <Card className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <p className="text-gray-600">Area Terlayani</p>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <CTABox
                        title="Ingin Bergabung dengan Kami?"
                        description="Hubungi kami sekarang dan rasakan pengalaman jual minyak jelantah yang mudah dan menguntungkan"
                        whatsappMessage="Halo, saya tertarik untuk jual minyak jelantah ke Mijel.id"
                    />
                </Container>
            </Section>
        </>
    );
}
