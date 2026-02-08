import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Home as HomeIcon, MapPin } from "lucide-react";

export default function NotFound() {
    return (
        <Section className="min-h-[60vh] flex items-center">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-8xl font-bold text-primary mb-4">404</div>
                    <h1 className="text-3xl font-bold mb-4">Halaman Tidak Ditemukan</h1>
                    <p className="text-gray-600 mb-8">
                        Maaf, halaman yang Anda cari tidak ditemukan. Mungkin halaman telah
                        dipindahkan atau dihapus.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" href="/">
                            <HomeIcon className="w-5 h-5 mr-2" />
                            Kembali ke Beranda
                        </Button>
                        <Button variant="outline" href="/area-layanan">
                            <MapPin className="w-5 h-5 mr-2" />
                            Lihat Area Layanan
                        </Button>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h2 className="text-lg font-semibold mb-4">Halaman Populer</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/harga-minyak-jelantah"
                                className="text-primary hover:underline"
                            >
                                Harga Minyak Jelantah
                            </Link>
                            <Link
                                href="/pengepul-minyak-jelantah-di-jakarta-barat"
                                className="text-primary hover:underline"
                            >
                                Jakarta Barat
                            </Link>
                            <Link
                                href="/pengepul-minyak-jelantah-di-jakarta-selatan"
                                className="text-primary hover:underline"
                            >
                                Jakarta Selatan
                            </Link>
                            <Link
                                href="/tentang"
                                className="text-primary hover:underline"
                            >
                                Tentang Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
