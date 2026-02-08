import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Calculator } from "@/components/features/Calculator";
import { SITE_NAME } from "@/lib/constants";
import { client } from "@/lib/sanity/client";
import { allPricesQuery } from "@/lib/sanity/queries";

export const metadata: Metadata = {
    title: `Kalkulator Harga Minyak Jelantah - ${SITE_NAME}`,
    description:
        "Hitung estimasi pendapatan Anda dari penjualan minyak jelantah. Harga terbaik dan transparan.",
};

// Revalidate daily
export const revalidate = 86400;

export default async function CalculatorPage() {
    let prices = [];
    try {
        prices = await client.fetch(allPricesQuery);
    } catch (error) {
        console.warn("Failed to fetch prices:", error);
    }

    return (
        <>
            <Section className="bg-gradient-to-br from-primary to-primary-dark text-white pt-20 pb-16">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="mb-6">Kalkulator Minyak Jelantah</h1>
                        <p className="text-xl text-green-50">
                            Hitung potensi pendapatan Anda dengan mudah. Masukkan jumlah minyak jelantah yang Anda miliki.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Cara Menggunakan Kalkulator</h2>
                            <ol className="space-y-4 text-gray-600 mb-8 list-decimal pl-5">
                                <li>Pilih jenis sumber minyak jelantah Anda (Rumah Tangga, Restoran, dll).</li>
                                <li>Pilih satuan yang digunakan (Liter atau Kilogram).</li>
                                <li>Masukkan jumlah estimasi minyak jelantah yang Anda miliki.</li>
                                <li>Kalkulator akan menampilkan estimasi total pendapatan Anda.</li>
                                <li>Klik &quot;Jual Sekarang&quot; untuk menghubungi kami via WhatsApp.</li>
                            </ol>

                            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                                <h3 className="font-bold text-amber-800 mb-2">Catatan Penting:</h3>
                                <ul className="list-disc pl-5 text-sm text-amber-700 space-y-2">
                                    <li>Harga yang tertera adalah estimasi dan dapat berubah sewaktu-waktu.</li>
                                    <li>Harga final akan ditentukan setelah pengecekan kualitas fisik oleh tim kami.</li>
                                    <li>Kami tidak menerima minyak jelantah yang tercampur air, sabun, atau bahan kimia lainnya.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <Calculator initialPrices={prices.length > 0 ? prices : undefined} />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
