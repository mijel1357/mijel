import { Metadata } from "next";
import {
    Phone,
    MapPin,
    DollarSign,
    Recycle,
    Shield,
    Clock,
    MessageCircle,
    Truck,
    Banknote,
    Star,
    CheckCircle,
    XCircle,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { generateSEOMetadata } from "@/lib/seo";
import { generateWhatsAppLink } from "@/lib/utils";

// Client Components
import { HeroForm } from "@/components/features/HeroForm";
import { HomeCalculator } from "@/components/features/HomeCalculator";
import { AudienceTabs } from "@/components/features/AudienceTabs";

export const metadata: Metadata = generateSEOMetadata({
    title: "Jual Minyak Jelantah Harga Tinggi - Jemput Gratis Jabodetabek | Mijel.id",
    description: "Jual minyak jelantah mulai Rp 7.000/liter. Pengepul tangan pertama di Jabodetabek. Jemput gratis, timbang digital, bayar cash di tempat. Hubungi sekarang!",
    keywords: [
        "pengepul minyak jelantah",
        "jual minyak jelantah",
        "harga minyak jelantah",
        "minyak jelantah Jakarta",
        "beli minyak jelantah",
        "limbah minyak goreng"
    ],
});

const faqs = [
    {
        question: "Berapa harga jual minyak jelantah di Mijel.id?",
        answer: "Harga minyak jelantah di Mijel.id mulai dari Rp 7.000 per liter, tergantung volume dan kualitas. Volume besar (500L+) bisa mendapat Rp 8.000+/liter. Kami adalah pengepul tangan pertama sehingga harga lebih tinggi dibanding tengkulak. Hubungi WhatsApp kami untuk harga pasti hari ini."
    },
    {
        question: "Berapa minimal jelantah untuk dijemput gratis?",
        answer: "Minimal 20 liter untuk penjemputan gratis di seluruh Jabodetabek. Ini lebih rendah dari kebanyakan pengepul lain yang mensyaratkan 40-50 liter."
    },
    {
        question: "Berapa lama proses dari chat sampai terima uang?",
        answer: "Rata-rata 1-2 jam untuk area Jakarta. Setelah Anda chat WhatsApp, tim kami akan datang, timbang dengan timbangan digital di depan Anda, dan bayar cash langsung. Tidak perlu menunggu transfer."
    },
    {
        question: "Apakah timbangan Mijel.id akurat?",
        answer: "Ya, kami menggunakan timbangan digital tersertifikasi yang ditimbang di depan Anda. Prosesnya 100% transparan, Anda bisa lihat sendiri angka timbangan."
    },
    {
        question: "Minyak jelantah saya akan diapakan?",
        answer: "100% diolah menjadi biodiesel di pabrik bersertifikat ISCC. TIDAK PERNAH dijual untuk konsumsi manusia. Setiap liter yang Anda jual berkontribusi untuk energi terbarukan Indonesia."
    },
    {
        question: "Apakah menerima jelantah dari rumah tangga?",
        answer: "Ya! Kami menerima dari semua sumber: rumah tangga, warteg, restoran, hotel, catering, dan industri makanan. Untuk rumah tangga, kami sarankan kumpulkan bersama tetangga untuk mencapai minimal 20 liter."
    },
    {
        question: "Area mana saja yang dilayani?",
        answer: "Seluruh Jabodetabek: Jakarta (Barat, Pusat, Selatan, Timur, Utara), Bogor, Depok, Tangerang, dan Bekasi. Kami melayani hingga level kecamatan."
    },
    {
        question: "Apa syarat jelantah yang diterima?",
        answer: "Jelantah tidak tercampur air berlebihan, tidak mengandung kotoran padat besar, dan disimpan dalam wadah tertutup. Semakin bersih kualitasnya, semakin tinggi harga yang kami berikan."
    },
    {
        question: "Bagaimana cara jadi mitra Mijel.id?",
        answer: "Hubungi kami via WhatsApp. Syarat: domisili Jabodetabek, punya akses ke sumber jelantah, dan komitmen minimal per bulan. Mitra mendapat harga spesial, training, dan support penuh."
    },
    {
        question: "Apakah ada biaya tambahan atau potongan?",
        answer: "Tidak ada. Jemput gratis, tidak ada potongan timbangan, tidak ada biaya administrasi. Harga yang disepakati adalah harga final yang Anda terima tunai."
    }
];

const testimonials = [
    {
        name: "Ibu Sari",
        role: "Pemilik Warteg, Kebon Jeruk",
        location: "Jakarta Barat",
        content: "Harga lebih tinggi dari pengepul lain yang pernah saya coba. Prosesnya cepat, tim datang tepat waktu, dan bayar cash langsung. Sangat recommended!",
        rating: 5,
    },
    {
        name: "Pak Hendra",
        role: "Restoran Padang, Kemayoran",
        location: "Jakarta Pusat",
        content: "Sebagai pemilik restoran, saya butuh pengepul yang reliable dan jadwalnya konsisten. Mijel.id selalu on time dan harga stabil. Sudah jadi langganan 6 bulan.",
        rating: 5,
    },
    {
        name: "Mbak Rina",
        role: "Ibu Rumah Tangga, Bekasi",
        location: "Bekasi",
        content: "Awalnya ragu karena baru dengar, tapi setelah coba pertama langsung ketagihan. Jelantah dari rumah saya dan 4 tetangga dikumpulin jadi 30 liter, dapat Rp 210.000. Lumayan banget!",
        rating: 5,
    },
];

export default function Home() {
    return (
        <>
            <LocalBusinessSchema />
            <FAQSchema items={faqs} />

            {/* SECTION 1: HERO */}
            <Section className="bg-gradient-to-b from-green-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-green-100 text-green-800 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
                                🏆 Pengepul Tangan Pertama di Jabodetabek
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                                Jual Minyak Jelantah <br />
                                <span className="text-green-600">Harga Rp 7.000–8.500/Liter</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
                                Jemput GRATIS ke lokasi Anda. Timbang di depan Anda.
                                Bayar tunai langsung. Minimal 20 liter.
                            </p>

                            {/* Trust Points */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm font-medium text-slate-700">
                                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border">
                                    <Clock className="w-4 h-4 text-green-500" /> Jemput Same Day
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border">
                                    <Shield className="w-4 h-4 text-green-500" /> Timbangan Digital
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border">
                                    <DollarSign className="w-4 h-4 text-green-500" /> Bayar Tunai
                                </div>
                                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm border">
                                    <Recycle className="w-4 h-4 text-green-500" /> 100% Biodiesel
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                                <Button
                                    variant="whatsapp"
                                    href={generateWhatsAppLink(
                                        "Halo Mijel.id, saya ingin jual minyak jelantah"
                                    )}
                                    className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Jual Sekarang via WhatsApp
                                </Button>
                                <Button
                                    variant="outline"
                                    href="#kalkulator"
                                    className="text-lg px-8 py-4"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Hitung Estimasi Harga
                                </Button>
                            </div>

                            <p className="text-sm text-slate-500 font-medium">
                                ⭐ 4.9/5 dari 200+ ulasan • Respon dalam 5 menit
                            </p>
                        </div>

                        {/* Right Column - Hero Form */}
                        <div className="relative z-10">
                            <HeroForm />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* SECTION 2: SOCIAL PROOF BAR */}
            <Section className="bg-slate-900 text-white py-10">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">700+</div>
                            <div className="text-sm text-slate-400">Pelanggan Aktif</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">75.000+</div>
                            <div className="text-sm text-slate-400">Liter/Bulan</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">&lt;1 Jam</div>
                            <div className="text-sm text-slate-400">Rata-rata Respon</div>
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-1">4.9 ⭐</div>
                            <div className="text-sm text-slate-400">Rating Google Maps</div>
                        </div>
                    </div>
                    <div className="text-center mt-6 text-xs text-slate-600">
                        Data internal per Juni 2025
                    </div>
                </Container>
            </Section>

            {/* SECTION 3: CARA KERJA */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Jual Jelantah dalam 3 Langkah</h2>
                        <p className="text-lg text-slate-600">Dari chat sampai terima uang, cuma 1-2 jam prosesnya.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                        {/* Step 1 */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                                <MessageCircle className="w-10 h-10 text-green-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Chat WhatsApp</h3>
                            <p className="text-slate-600">Kirim lokasi & estimasi jumlah liter. Tim admin kami akan respon cepat dalam 5 menit.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                                <Truck className="w-10 h-10 text-green-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Kami Datang Jemput</h3>
                            <p className="text-slate-600">Tim driver tiba membawa timbangan digital. Penimbangan dilakukan transparan di depan Anda.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform relative">
                                <Banknote className="w-10 h-10 text-green-600" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Terima Uang Tunai</h3>
                            <p className="text-slate-600">Pembayaran cash langsung di tempat sesuai berat timbangan. Tanpa potongan apapun.</p>
                        </div>
                    </div>

                    <div className="max-w-2xl mx-auto mt-12 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg flex items-start gap-4">
                        <div className="mt-1"><Clock className="w-5 h-5 text-green-600" /></div>
                        <p className="text-green-800 text-sm md:text-base font-medium">
                            ⚡ <strong>Fact:</strong> Rata-rata pelanggan kami menerima uang dalam 2 jam setelah chat pertama. Area Jakarta bisa same day pickup.
                        </p>
                    </div>

                    <div className="text-center mt-10">
                        <Button variant="whatsapp" href={generateWhatsAppLink("Halo, saya mau jual jelantah. Mohon info pickup.")}>
                            Mulai Jual Sekarang
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* SECTION 4: HARGA */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Harga Minyak Jelantah — Lebih Tinggi</h2>
                        <p className="text-lg text-slate-600">Kami pengepul tangan pertama. Tanpa perantara = harga lebih tinggi untuk Anda.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Pricing Table */}
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                            <div className="bg-slate-900 text-white p-4 text-center font-bold tracking-wide">
                                TABEL HARGA TERBARU
                            </div>
                            <div className="p-6">
                                <table className="w-full text-slate-700">
                                    <thead>
                                        <tr className="border-b border-slate-200">
                                            <th className="text-left py-3 px-2 font-bold">Volume</th>
                                            <th className="text-right py-3 px-2 font-bold">Harga/Liter</th>
                                            <th className="text-right py-3 px-2 font-bold hidden sm:table-cell">Est. 1 Jerigen (18L)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="group hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-2 font-medium">20 – 100 Liter</td>
                                            <td className="text-right py-4 px-2 font-bold text-green-600">Rp 7.000</td>
                                            <td className="text-right py-4 px-2 text-slate-500 hidden sm:table-cell">Rp 126.000</td>
                                        </tr>
                                        <tr className="group hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-2 font-medium">100 – 500 Liter</td>
                                            <td className="text-right py-4 px-2 font-bold text-green-600">Rp 7.500</td>
                                            <td className="text-right py-4 px-2 text-slate-500 hidden sm:table-cell">Rp 135.000</td>
                                        </tr>
                                        <tr className="group hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-2 font-medium">500+ Liter</td>
                                            <td className="text-right py-4 px-2 font-bold text-green-600">Rp 8.000+</td>
                                            <td className="text-right py-4 px-2 text-slate-500 hidden sm:table-cell">Rp 144.000+</td>
                                        </tr>
                                        <tr className="bg-green-50/50">
                                            <td className="py-4 px-2 font-bold text-green-800 flex items-center gap-2">
                                                <Star className="w-4 h-4 fill-green-600 text-green-600" /> Mitra Resmi
                                            </td>
                                            <td className="text-right py-4 px-2 font-bold text-green-700">Rp 8.500</td>
                                            <td className="text-right py-4 px-2 text-green-700 font-bold hidden sm:table-cell">Rp 153.000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                                    <span>🔄 Update: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</span>
                                    <span>*Harga dapat berubah sewaktu-waktu</span>
                                </div>
                            </div>
                        </div>

                        {/* Comparison */}
                        <div className="space-y-6">
                            {/* Bad Option */}
                            <div className="bg-red-50 border border-red-100 rounded-xl p-6 opacity-70 hover:opacity-100 transition-opacity">
                                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Pengepul Biasa
                                </h3>
                                <ul className="space-y-3 text-sm text-red-700">
                                    <li className="flex gap-3"><span className="text-red-500">✗</span> Harga rendah (Rp 4.000 - 5.500/liter)</li>
                                    <li className="flex gap-3"><span className="text-red-500">✗</span> Sering oper ke tengkulak lain</li>
                                    <li className="flex gap-3"><span className="text-red-500">✗</span> Timbangan manual (sering tidak pas)</li>
                                    <li className="flex gap-3"><span className="text-red-500">✗</span> Bayar transfer (sering ditunda)</li>
                                </ul>
                            </div>

                            {/* Good Option */}
                            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 relative shadow-lg transform lg:scale-105">
                                <div className="absolute -top-3 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Rekomendasi
                                </div>
                                <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-xl">
                                    <CheckCircle className="w-6 h-6" /> Mijel.id
                                </h3>
                                <ul className="space-y-3 text-sm font-medium text-slate-700">
                                    <li className="flex gap-3 items-center"><span className="text-green-600 bg-green-100 rounded-full p-0.5"><CheckCircle className="w-4 h-4" /></span> Harga tinggi (Rp 7.000 - 8.500/liter)</li>
                                    <li className="flex gap-3 items-center"><span className="text-green-600 bg-green-100 rounded-full p-0.5"><CheckCircle className="w-4 h-4" /></span> Pengepul tangan pertama (Direct)</li>
                                    <li className="flex gap-3 items-center"><span className="text-green-600 bg-green-100 rounded-full p-0.5"><CheckCircle className="w-4 h-4" /></span> Timbangan digital tersertifikasi</li>
                                    <li className="flex gap-3 items-center"><span className="text-green-600 bg-green-100 rounded-full p-0.5"><CheckCircle className="w-4 h-4" /></span> Bayar CASH di tempat</li>
                                    <li className="flex gap-3 items-center"><span className="text-green-600 bg-green-100 rounded-full p-0.5"><CheckCircle className="w-4 h-4" /></span> 100% untuk Biodiesel (Resmi)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="whatsapp" href={generateWhatsAppLink("Halo, saya mau cek harga jelantah hari ini.")}>
                            Cek Harga Hari Ini
                        </Button>
                        <Button variant="outline" href="/harga-minyak-jelantah">
                            Lihat Detail Harga Lengkap &rarr;
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* SECTION 5: KALKULATOR */}
            <Section id="kalkulator" className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Hitung Estimasi Penghasilan Anda</h2>
                        <p className="text-lg text-slate-600">Geser slider atau masukkan jumlah liter untuk melihat berapa cuan yang Anda dapatkan.</p>
                    </div>
                    <HomeCalculator />
                </Container>
            </Section>

            {/* SECTION 6: SEGMENTASI */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Siapa Saja Bisa Jual ke Mijel.id</h2>
                        <p className="text-lg text-slate-600">Dari ibu rumah tangga sampai pabrik makanan, semua bisa jadi uang.</p>
                    </div>
                    <AudienceTabs />
                </Container>
            </Section>

            {/* SECTION 7: JAMINAN KEAMANAN */}
            <Section className="bg-green-900 text-white">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">100% Jelantah Anda Jadi Biodiesel.<br />Bukan Minyak Goreng Ilegal.</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-6">
                                <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">⚠️ TAHUKAH ANDA?</h4>
                                <p className="text-red-100/80 leading-relaxed">
                                    Banyak pengepul nakal &quot;mencuci&quot; jelantah dengan bahan kimia berbahaya dan menjualnya kembali sebagai &quot;minyak goreng curah&quot; murah. Ini sangat berbahaya dan karsinogenik (penyebab kanker).
                                </p>
                            </div>

                            <div className="bg-green-800/40 border border-green-500/30 rounded-xl p-6">
                                <h4 className="font-bold text-green-400 mb-4 flex items-center gap-2">✅ JAMINAN MIJEL.ID:</h4>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-green-50"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> 100% disalurkan ke pabrik Biodiesel</li>
                                    <li className="flex gap-3 text-green-50"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Mitra resmi pabrik bersertifikat ISCC</li>
                                    <li className="flex gap-3 text-green-50"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> Full traceability dari pickup sampai pabrik</li>
                                    <li className="flex gap-3 text-green-50"><CheckCircle className="w-5 h-5 text-green-400 shrink-0" /> TIDAK PERNAH dijual kembali untuk pangan</li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative pl-8 border-l-2 border-green-700 space-y-12">
                            <div className="relative">
                                <span className="absolute -left-[41px] bg-green-900 border-2 border-green-500 w-6 h-6 rounded-full"></span>
                                <h4 className="font-bold text-xl mb-1">🏠 Dapur Anda</h4>
                                <p className="text-green-300 text-sm">Minyak dikumpulkan di jerigen</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] bg-green-900 border-2 border-green-500 w-6 h-6 rounded-full"></span>
                                <h4 className="font-bold text-xl mb-1">🚚 Pickup Mijel.id</h4>
                                <p className="text-green-300 text-sm">Quality control & penimbangan digital</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] bg-green-500 w-6 h-6 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse"></span>
                                <h4 className="font-bold text-xl mb-1 text-green-400">🏭 Pabrik Biodiesel</h4>
                                <p className="text-green-300 text-sm">Diolah menjadi bahan bakar terbarukan (FAME)</p>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] bg-green-900 border-2 border-green-500 w-6 h-6 rounded-full"></span>
                                <h4 className="font-bold text-xl mb-1">⛽ Bahan Bakar Hijau</h4>
                                <p className="text-green-300 text-sm">Digunakan mesin diesel industri/transportasi</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* SECTION 8: AREA LAYANAN */}
            <Section className="bg-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Area Layanan Jabodetabek</h2>
                        <p className="text-lg text-slate-600">Jemput gratis ke lokasi Anda tanpa minimal radius.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            { name: "Jakarta Barat", slug: "jakarta-barat", subs: "8 Kecamatan" },
                            { name: "Jakarta Pusat", slug: "jakarta-pusat", subs: "8 Kecamatan" },
                            { name: "Jakarta Selatan", slug: "jakarta-selatan", subs: "10 Kecamatan" },
                            { name: "Jakarta Timur", slug: "jakarta-timur", subs: "10 Kecamatan" },
                            { name: "Jakarta Utara", slug: "jakarta-utara", subs: "6 Kecamatan" },
                            { name: "Bogor", slug: "bogor", subs: "Kota & Kab" },
                            { name: "Depok", slug: "depok", subs: "11 Kecamatan" },
                            { name: "Tangerang", slug: "tangerang", subs: "Kota, Sel & Kab" },
                            { name: "Bekasi", slug: "bekasi", subs: "Kota & Kab" },
                        ].map((city) => (
                            <Link
                                key={city.slug}
                                href={`/pengepul-minyak-jelantah-di-${city.slug}`}
                                className="group block"
                            >
                                <Card className="h-full text-center hover:border-green-500 transition-all hover:shadow-md group-hover:-translate-y-1">
                                    <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-slate-800 mb-1">{city.name}</h3>
                                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{city.subs}</span>
                                </Card>
                            </Link>
                        ))}
                        <Link
                            href="/area-layanan"
                            className="group block"
                        >
                            <Card className="h-full text-center bg-green-50 border-green-200 hover:bg-green-100 transition-all flex flex-col justify-center items-center">
                                <span className="font-bold text-green-700 flex items-center">
                                    Lihat Semua <ArrowRight className="w-4 h-4 ml-1" />
                                </span>
                            </Card>
                        </Link>
                    </div>
                </Container>
            </Section>

            {/* SECTION 9: TESTIMONI */}
            <Section className="bg-slate-50">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Dipercaya Ratusan Pelanggan</h2>
                        <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
                            <div className="flex"><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /><Star className="fill-current w-5 h-5" /></div>
                            <span className="text-slate-600 font-bold text-sm">4.9/5 Rata-rata Rating</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {testimonials.map((testi, i) => (
                            <TestimonialCard key={i} {...testi} />
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-sm hover:text-green-600 hover:underline">
                            Lihat 200+ ulasan lainnya di Google Maps &rarr;
                        </a>
                    </div>
                </Container>
            </Section>

            {/* SECTION 10: CTA FINAL */}
            <Section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
                <Container>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">Jangan Buang Jelantah Anda.<br />Jual ke Mijel.id Hari Ini!</h2>
                        <div className="flex flex-wrap justify-center gap-3 lg:gap-6 mb-8 text-sm lg:text-base font-bold text-green-100">
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">💰 Harga Tinggi</span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">🚚 Jemput Gratis</span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">💵 Bayar Cash</span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">♻️ 100% Biodiesel</span>
                        </div>
                        <p className="max-w-2xl mx-auto text-lg text-green-50 mb-10">
                            Setiap liter yang Anda jual = <strong>Rp 7.000+ untuk Anda</strong> + menyelamatkan 1 juta liter air + energi terbarukan.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
                        <div className="text-center lg:text-right space-y-4">
                            <Button
                                variant="whatsapp"
                                className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 text-xl py-6 px-10 shadow-xl"
                                href={generateWhatsAppLink("Halo Mijel.id, saya mau jual jelantah.")}
                            >
                                <MessageCircle className="w-6 h-6 mr-3" />
                                Chat WhatsApp Sekarang
                            </Button>
                            <p className="text-green-200 text-sm">Respon admin biasanya &lt; 5 menit</p>

                            <div className="pt-4">
                                <a href="tel:+6281212345678" className="inline-flex items-center text-green-100 hover:text-white font-bold border border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                                    <Phone className="w-5 h-5 mr-3" />
                                    Atau Telepon: 0812-1234-5678
                                </a>
                                <p className="text-green-200/60 text-xs mt-2">Senin - Sabtu, 08.00 - 17.00 WIB</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center lg:text-left">
                            <h3 className="font-bold text-xl mb-4">Butuh Penjemputan Terjadwal?</h3>
                            <p className="text-green-50 mb-6">Isi form singkat di bagian paling atas halaman ini untuk dijadwalkan oleh admin kami.</p>
                            <Button
                                variant="outline"
                                className="w-full border-white text-white hover:bg-white hover:text-green-800"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                Scroll ke Form Penjadwalan &uarr;
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FAQ Section (SEO) */}
            <Section className="bg-white py-12">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold mb-2 text-slate-900">Pertanyaan Umum</h2>
                            <p className="text-slate-500">Informasi tambahan yang mungkin Anda butuhkan.</p>
                        </div>
                        <FAQAccordion items={faqs} />
                    </div>
                </Container>
            </Section>
        </>
    );
}
