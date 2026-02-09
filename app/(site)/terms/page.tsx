import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
    title: `Syarat & Ketentuan - ${SITE_NAME}`,
    description: "Syarat dan ketentuan penggunaan layanan Mijel.id.",
};

export default function TermsPage() {
    return (
        <>
            <Section className="bg-gray-50 pt-20 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-4">Syarat & Ketentuan</h1>
                        <p className="text-gray-600">
                            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="prose max-w-3xl mx-auto text-gray-700">
                        <h3>1. Pendahuluan</h3>
                        <p>
                            Selamat datang di {SITE_NAME}! Syarat dan ketentuan ini menguraikan aturan dan peraturan untuk penggunaan Situs Web {SITE_NAME}.
                        </p>
                        <p>
                            Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini. Jangan terus menggunakan {SITE_NAME} jika Anda tidak setuju untuk mengikuti semua syarat dan ketentuan yang tercantum di halaman ini.
                        </p>

                        <h3>2. Lisensi</h3>
                        <p>
                            Kecuali dinyatakan lain, {SITE_NAME} dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di {SITE_NAME}. Semua hak kekayaan intelektual dilindungi undang-undang. Anda dapat mengakses ini dari {SITE_NAME} untuk penggunaan pribadi Anda sendiri dengan tunduk pada batasan yang diatur dalam syarat dan ketentuan ini.
                        </p>

                        <h3>3. Layanan Kami</h3>
                        <p>
                            {SITE_NAME} menyediakan layanan informasi dan fasilitasi pengumpulan minyak jelantah. Kami berhak untuk menolak layanan, menghentikan akun, atau membatalkan pesanan (penjemputan) atas kebijakan kami sendiri.
                        </p>

                        <h3>4. Harga & Pembayaran</h3>
                        <p>
                            Harga beli minyak jelantah yang tertera di website adalah estimasi dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Harga final ditentukan setelah pengecekan kualitas dan kuantitas fisik oleh tim kami atau mitra kami.
                        </p>

                        <h3>5. Batasan Tanggung Jawab</h3>
                        <p>
                            Dalam hal apa pun {SITE_NAME}, maupun direktur, karyawan, mitra, agen, pemasok, atau afiliasinya, tidak bertanggung jawab atas segala kerusakan tidak langsung, insidental, khusus, konsekuensial, atau hukuman, termasuk namun tidak terbatas pada, hilangnya keuntungan, data, penggunaan, goodwill, atau kerugian tidak berwujud lainnya.
                        </p>

                        <h3>6. Perubahan Syarat</h3>
                        <p>
                            Kami berhak, atas kebijakan kami sendiri, untuk memodifikasi atau mengganti Syarat ini kapan saja. Jika revisi tersebut material, kami akan mencoba memberikan pemberitahuan setidaknya 30 hari sebelum syarat baru berlaku. Apa yang merupakan perubahan material akan ditentukan atas kebijakan kami sendiri.
                        </p>

                        <h3>7. Kontak Kami</h3>
                        <p>
                            Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami melalui halaman Kontak.
                        </p>
                    </div>
                </Container>
            </Section>
        </>
    );
}
