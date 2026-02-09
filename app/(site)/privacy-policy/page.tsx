import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
    title: `Kebijakan Privasi - ${SITE_NAME}`,
    description: "Kebijakan privasi dan perlindungan data pengguna di Mijel.id.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-20 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-4">Kebijakan Privasi</h1>
                        <p className="text-gray-600">
                            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="prose max-w-3xl mx-auto text-gray-700">
                        <p>
                            Di {SITE_NAME}, kami sangat menghargai privasi Anda. Dokumen Kebijakan Privasi ini menjelaskan jenis informasi pribadi yang dikumpulkan dan dicatat oleh {SITE_NAME} dan bagaimana kami menggunakannya.
                        </p>

                        <h3>Informasi yang Kami Kumpulkan</h3>
                        <p>
                            Jika Anda menghubungi kami secara langsung, kami mungkin menerima informasi tambahan tentang Anda seperti nama Anda, alamat email, nomor telepon, isi pesan dan/atau lampiran yang Anda kirimkan kepada kami, dan informasi lainnya yang Anda pilih untuk diberikan.
                        </p>

                        <h3>Penggunaan Informasi</h3>
                        <p>Kami menggunakan informasi yang kami kumpulkan dengan berbagai cara, termasuk untuk:</p>
                        <ul>
                            <li>Menyediakan, mengoperasikan, dan memelihara situs web kami</li>
                            <li>Meningkatkan, mempersonalisasi, dan memperluas situs web kami</li>
                            <li>Memahami dan menganalisis bagaimana Anda menggunakan situs web kami</li>
                            <li>Mengembangkan produk, layanan, fitur, dan fungsionalitas baru</li>
                            <li>Berkomunikasi dengan Anda, baik secara langsung atau melalui salah satu mitra kami, termasuk untuk layanan pelanggan, untuk memberi Anda pembaruan dan informasi lain yang berkaitan dengan situs web, dan untuk tujuan pemasaran dan promosi</li>
                        </ul>

                        <h3>Log Files</h3>
                        <p>
                            {SITE_NAME} mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analisis hosting layanan. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik.
                        </p>

                        <h3>Kebijakan Privasi Pihak Ketiga</h3>
                        <p>
                            Kebijakan Privasi {SITE_NAME} tidak berlaku untuk pengiklan atau situs web lain. Karena itu, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing dari server iklan pihak ketiga ini untuk informasi yang lebih rinci.
                        </p>

                        <h3>Persetujuan</h3>
                        <p>
                            Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui syarat-syaratnya.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
