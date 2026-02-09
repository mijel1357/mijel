Bangun homepage mijel.id di app/(site)/page.tsx

KONTEKS KOMPETITOR:
Homepage cureahh.com sangat panjang dengan 15+ sections, 
terlalu banyak informasi sekaligus. Kita akan mengalahkan mereka 
dengan homepage yang FOKUS, CEPAT LOAD, dan TINGGI KONVERSI.

Prinsip:
- Setiap section punya SATU tujuan
- Above the fold harus sudah bisa convert
- Maksimal 10 sections (vs mereka 15+)
- Setiap section ada clear CTA atau link ke halaman detail
- Mobile-first, fast loading

═══════════════════════════════════════════════════════
SECTION 1: HERO (Above the fold - HARUS convert di sini)
═══════════════════════════════════════════════════════

Layout: 2 kolom di desktop (teks kiri, form kanan), stack di mobile

KOLOM KIRI:
- Badge kecil di atas H1: "Pengepul Tangan Pertama di Jabodetabek"
  (small, bg-green-100 text-green-800 rounded-full px-3 py-1)

- H1: "Jual Minyak Jelantah\nHarga Rp 7.000–8.500/Liter"
  (Langsung sebut harga di H1 — Cureahh tidak berani ini.
   Ini membuat kita terlihat lebih transparan dan confident.)
  
- Subtitle (text-lg text-neutral-600 mt-4):
  "Jemput GRATIS ke lokasi Anda. Timbang di depan Anda. 
   Bayar tunai langsung. Minimal 20 liter."

- 4 trust points horizontal (flex gap-4, icon + text kecil):
  ✓ Jemput Same Day
  ✓ Timbangan Digital
  ✓ Bayar Cash di Tempat  
  ✓ 100% Untuk Biodiesel

- 2 CTA buttons (mt-6, flex gap-3):
  Button 1 (primary, large): 
    "Jual Sekarang via WhatsApp" → WhatsApp link
    (icon: WhatsApp)
  Button 2 (secondary, large):
    "Hitung Estimasi Harga" → scroll to kalkulator section
    (icon: Calculator)

- Micro-proof di bawah CTA (text-sm text-neutral-500 mt-3):
  "⭐ 4.9/5 dari 200+ ulasan • Respon dalam 5 menit"

KOLOM KANAN (desktop only, mobile: hidden atau di bawah):
- QUICK FORM card (bg-white rounded-2xl shadow-xl p-6 border):
  Judul form: "Jadwalkan Penjemputan Gratis"
  
  Field 1: Nama (input text) *
  Field 2: Nomor WhatsApp (input tel) *
  Field 3: Perkiraan Jumlah (select): 
    20-50 liter | 50-100 liter | 100-500 liter | 500+ liter
  Field 4: Area (select):
    Jakarta Barat | Jakarta Pusat | Jakarta Selatan | 
    Jakarta Timur | Jakarta Utara | Bogor | Depok | 
    Tangerang | Bekasi
  
  Submit button (full width, whatsapp style):
    "Kirim & Kami Hubungi Anda" 
    → Generate WhatsApp message dengan data form
  
  Note kecil: "🔒 Data hanya untuk koordinasi penjemputan"
  Note: "Atau langsung WhatsApp: 0812-XXXX-XXXX"

  (HANYA 4 field, bukan 7 seperti Cureahh = less friction)

BACKGROUND: 
- Subtle gradient: from-green-50 to-white
- Atau pattern dots subtle

NOTES PENTING:
- Harga di H1 = power move. Orang datang cari harga, langsung dapat.
- Form di hero = bisa convert tanpa scroll sama sekali.
- Mobile: form muncul setelah CTA buttons.

═══════════════════════════════════════════════════════
SECTION 2: SOCIAL PROOF BAR (Trust strip)
═══════════════════════════════════════════════════════

Background: bg-neutral-900 text-white py-6

4 stats dalam satu baris (grid grid-cols-2 md:grid-cols-4 gap-6):

Stat 1:
  Number: "700+"  (text-3xl font-bold text-green-400)
  Label: "Pelanggan Aktif" (text-sm text-neutral-400)
  
Stat 2:
  Number: "75.000+"
  Label: "Liter/Bulan Dikumpulkan"
  
Stat 3:
  Number: "<1 Jam"
  Label: "Rata-rata Respon"
  
Stat 4:
  Number: "4.9 ⭐"
  Label: "Rating Google Maps"

Note kecil di bawah center: "Data per Juni 2025" 
  (text-xs text-neutral-500)

STRATEGI: Angka kita HARUS lebih besar dari Cureahh 
(mereka: 500+ mitra, 50K+ liter). 
Jika belum punya data real, gunakan angka realistis yang 
bisa kita kejar. Atau pakai framing berbeda:
- Mereka "500+ mitra", kita "700+ pelanggan" (lebih inklusif)
- Mereka "50K+ liter", kita "75.000+ liter" 
- Tambah "respon time" yang mereka TIDAK punya

═══════════════════════════════════════════════════════
SECTION 3: CARA KERJA (Simplicity wins)
═══════════════════════════════════════════════════════

Background: white

H2: "Jual Jelantah dalam 3 Langkah"
Subtitle: "Dari chat sampai terima uang, cuma 1-2 jam."

3 steps (grid grid-cols-1 md:grid-cols-3 gap-8):
(Cureahh pakai 3 step tapi kita buat visualnya lebih kuat)

Step 1:
  Icon: MessageCircle (lucide) dalam circle bg-green-100
  Number: "1" (badge kecil)
  Title: "Chat WhatsApp"
  Desc: "Kirim lokasi & estimasi jumlah liter. 
         Kami respon dalam 5 menit."

Step 2:
  Icon: Truck
  Number: "2"  
  Title: "Kami Datang Jemput"
  Desc: "Tim kami tiba dengan timbangan digital. 
         Timbang transparan di depan Anda."

Step 3:
  Icon: Banknote
  Number: "3"
  Title: "Terima Uang Tunai"
  Desc: "Bayar cash langsung di tempat. 
         Tanpa potongan, tanpa ribet."

Di bawah steps:
  Highlight box (bg-green-50 border-l-4 border-green-500 p-4):
  "⚡ Rata-rata 1-2 jam dari chat sampai terima uang. 
   Area Jakarta bisa same day."

CTA: "Mulai Sekarang" (WhatsApp button)

═══════════════════════════════════════════════════════
SECTION 4: HARGA (Langsung, transparan, beat kompetitor)
═══════════════════════════════════════════════════════

Background: bg-neutral-50

H2: "Harga Minyak Jelantah — Lebih Tinggi dari Pengepul Lain"
Subtitle: "Kami pengepul tangan pertama. Tanpa perantara = harga lebih tinggi untuk Anda."

TABEL HARGA (card bg-white shadow rounded-xl overflow-hidden):

| Volume          | Harga/Liter | Estimasi/Jerigen 18L |
|-----------------|-------------|----------------------|
| 20 – 100 Liter  | Rp 7.000    | Rp 126.000           |
| 100 – 500 Liter | Rp 7.500    | Rp 135.000           |
| 500+ Liter      | Rp 8.000+   | Rp 144.000+          |
| Mitra Kontrak   | Rp 8.500    | Rp 153.000           |

(Harga dummy, nanti bisa diubah. Yang penting LEBIH TINGGI 
dari Cureahh atau framing berbeda.)

Di bawah tabel:
  Badge: "🔄 Update terakhir: [tanggal]"
  Text: "Harga bisa berubah sesuai kondisi pasar. 
         Hubungi untuk harga pasti hari ini."

PERBANDINGAN MINI (ini mengcounter tabel Cureahh tapi lebih ringkas):
  
  Card kiri (bg-red-50, border-red-200):
    Title: "Pengepul Biasa"
    - ✗ Rp 4.000-5.500/liter
    - ✗ Perantara/tengkulak
    - ✗ Timbangan manual
    - ✗ Bayar transfer (nunggu)
    - ✗ Tidak jelas kemana minyaknya

  Card kanan (bg-green-50, border-green-500, ring highlight):
    Title: "Mijel.id" + badge "REKOMENDASI"
    - ✓ Rp 7.000-8.500/liter
    - ✓ Pengepul tangan pertama
    - ✓ Timbangan digital tersertifikasi
    - ✓ Bayar cash di tempat
    - ✓ 100% untuk biodiesel bersertifikat

  (2 cards side by side desktop, stack mobile)

CTA: "Cek Harga Terbaru" (WhatsApp) + 
     "Lihat Detail Harga →" (link ke /harga-minyak-jelantah/)

═══════════════════════════════════════════════════════
SECTION 5: KALKULATOR (Interactive, lebih powerful dari Cureahh)
═══════════════════════════════════════════════════════

"use client" component

Background: white

H2: "Hitung Estimasi Penghasilan Anda"
Subtitle: "Geser slider atau masukkan jumlah liter untuk 
           melihat berapa yang Anda dapatkan."

KALKULATOR CARD (max-w-2xl mx-auto, bg-white shadow-xl rounded-2xl p-8):

Input 1: Jumlah Liter
  - Slider (range: 20 - 2000, step: 10)
  - Number input di samping slider (bisa ketik manual)
  - Quick buttons di bawah: [20L] [50L] [100L] [200L] [500L] [1000L]
  
Input 2: Kualitas (optional toggle)
  - 3 toggle buttons: Bagus | Standar | Campuran
  - Default: Standar

OUTPUT (animasi count-up saat berubah):
  Box besar tengah:
    "Estimasi Anda Dapat:"
    "Rp XXX.XXX" (text-4xl font-bold text-green-600, animated)
    
  Detail kecil di bawah:
    "XX liter × Rp X.XXX/liter"
    
  Dampak lingkungan (3 mini stats horizontal):
    🌊 "Menyelamatkan [X juta] liter air"
    🌳 "Setara menanam [X] pohon"
    ♻️ "Mengurangi [X] kg CO₂"

CTA (full width):
  "Jual Sekarang — WhatsApp" 
  → auto message: "Halo Mijel.id, saya mau jual jelantah 
     [X] liter. Estimasi Rp [total]. Bisa dijemput?"

Note: "* Estimasi berdasarkan harga terkini. 
       Harga final setelah pengecekan kualitas."

Link: "Buka kalkulator lengkap →" (/kalkulator-minyak-jelantah/)

LOGIC:
- 20-100L: Rp 7.000/L
- 100-500L: Rp 7.500/L  
- 500+: Rp 8.000/L
- Quality modifier: Bagus +500, Standar 0, Campuran -500
- Air: 1L jelantah = 1 juta liter air saved (capped at reasonable)
- Pohon: setiap 100L = 12 pohon
- CO2: setiap 1L = 2.5 kg CO2 reduced

═══════════════════════════════════════════════════════
SECTION 6: SIAPA YANG COCOK JUAL (Segmentasi cerdas)
═══════════════════════════════════════════════════════

Background: bg-neutral-50

H2: "Siapa Saja Bisa Jual ke Mijel.id"
Subtitle: "Dari ibu rumah tangga sampai pabrik makanan."

TABS atau CARDS (3 segment):

TAB 1: "Bisnis Kuliner" (icon: UtensilsCrossed)
  Grid 2 kolom:
  
  | Jenis Usaha         | Volume/Bulan   | Potensi/Bulan        |
  |----------------------|----------------|----------------------|
  | Warteg & Angkringan  | 40-100 liter   | Rp 280.000-750.000   |
  | Restoran             | 100-500 liter  | Rp 750.000-3.750.000 |
  | Hotel & Catering     | 300-1000 liter | Rp 2.250.000-8.000.000|
  | Food Court           | 200-500 liter  | Rp 1.500.000-3.750.000|
  
  CTA: "Jual dari Bisnis Anda →" (WhatsApp)

TAB 2: "Rumah Tangga & Komunitas" (icon: Home)
  3 cards:
  
  Card 1: "Rumah Tangga"
    "Kumpulkan bersama 3-5 tetangga untuk capai 20 liter."
    
  Card 2: "RT/RW/Kompleks"
    "Koordinator kumpulkan dari warga. 
     Bisa dapat 50-100L/bulan dari 30 rumah."
    
  Card 3: "Apartemen"
    "Kerjasama dengan building management 
     untuk pengumpulan rutin."
  
  CTA: "Mulai Kumpulkan & Jual →"

TAB 3: "Pengepul Kecil" (icon: Users)
  "Sudah kumpulkan jelantah tapi bingung jual kemana? 
   Jual ke Mijel.id sebagai pengepul tangan pertama. 
   Harga lebih baik dari tengkulak."
  
  Benefit list:
  - Harga konsisten & transparan
  - Jadwal pickup teratur
  - Bisa jadi mitra resmi
  
  CTA: "Gabung Jadi Mitra →" (link ke /mitra/)

IMPLEMENTASI: 
- Gunakan tab component (useState untuk active tab)
- "use client" untuk tab switching
- Atau accordion di mobile

═══════════════════════════════════════════════════════
SECTION 7: JAMINAN KEAMANAN (Trust & differentiator)
═══════════════════════════════════════════════════════

Background: bg-green-900 text-white

H2: "100% Jelantah Anda Jadi Biodiesel. Bukan Minyak Goreng Ilegal."

Layout 2 kolom:

KOLOM KIRI:
  Warning box (bg-red-900/30 border border-red-500/50 rounded-xl p-6):
    "⚠️ TAHUKAH ANDA?"
    "Banyak pengepul nakal menjual jelantah ke oknum yang 
     mengolahnya jadi 'minyak goreng curah' ilegal. 
     Berbahaya dan mengandung karsinogen penyebab kanker."

  Guarantee box (bg-green-800/50 border border-green-400/50 rounded-xl p-6 mt-4):
    "✅ JAMINAN MIJEL.ID:"
    List:
    - 100% diolah jadi biodiesel bersertifikat
    - Sertifikasi ISCC (International Sustainability)
    - Full traceability dari pickup hingga pabrik
    - TIDAK PERNAH untuk konsumsi manusia

KOLOM KANAN:
  Alur visual sederhana (vertical flow):
    🏠 Dapur Anda
    ↓
    🚚 Mijel.id (Quality Control)
    ↓
    🏭 Pabrik Biodiesel Bersertifikat
    ↓
    ⛽ Bahan Bakar Kendaraan
    
  Setiap step punya 1-line description kecil

Link: "Baca selengkapnya: Kemana jelantah Anda setelah dijual →" 
  (link ke blog post)

═══════════════════════════════════════════════════════
SECTION 8: AREA LAYANAN (Quick overview)
═══════════════════════════════════════════════════════

Background: white

H2: "Melayani Seluruh Jabodetabek"
Subtitle: "Jemput gratis ke lokasi Anda."

Layout: Grid of city cards (grid-cols-2 md:grid-cols-3 lg:grid-cols-5)

Jakarta Barat → link /pengepul-minyak-jelantah-di-jakarta-barat/
  Badge: "8 kecamatan"

Jakarta Pusat → link
  Badge: "8 kecamatan"
  
Jakarta Selatan → link
  Badge: "10 kecamatan"
  
Jakarta Timur → link
  Badge: "10 kecamatan"
  
Jakarta Utara → link
  Badge: "6 kecamatan"
  
Bogor → link
Depok → link
Tangerang → link
Bekasi → link

Tombol: "Lihat Semua Area Layanan →" (/area-layanan/)

BERBEDA DARI CUREAHH:
- Mereka list semua kecamatan di homepage (terlalu panjang)
- Kita cukup tampilkan kota-kota, detail di halaman masing-masing
- Lebih clean, lebih cepat load

═══════════════════════════════════════════════════════
SECTION 9: TESTIMONI (Social proof real)
═══════════════════════════════════════════════════════

Background: bg-neutral-50

H2: "Dipercaya Ratusan Pelanggan di Jabodetabek"

Layout: 3 TestimonialCards (carousel di mobile)

Testimoni 1:
  "Harga lebih tinggi dari pengepul lain yang pernah saya 
   coba. Prosesnya cepat, tim datang tepat waktu, dan 
   bayar cash langsung. Sangat recommended!"
  — Ibu Sari, Pemilik Warteg, Kebon Jeruk
  Rating: 5 stars

Testimoni 2:
  "Sebagai pemilik restoran, saya butuh pengepul yang 
   reliable dan jadwalnya konsisten. Mijel.id selalu 
   on time dan harga stabil. Sudah jadi langganan 
   6 bulan."
  — Pak Hendra, Restoran Padang, Kemayoran
  Rating: 5 stars

Testimoni 3:
  "Awalnya ragu karena baru dengar, tapi setelah coba 
   pertama langsung ketagihan. Jelantah dari rumah 
   saya dan 4 tetangga dikumpulin jadi 30 liter, 
   dapat Rp 210.000. Lumayan banget!"
  — Mbak Rina, Ibu Rumah Tangga, Bekasi
  Rating: 5 stars

Di bawah testimoni:
  Link: "Lihat ulasan kami di Google Maps →" (external link)
  
  Mini stat: "⭐ 4.9/5 dari 200+ ulasan Google"

═══════════════════════════════════════════════════════
SECTION 10: CTA FINAL + FORM (Conversion closer)
═══════════════════════════════════════════════════════

Background: gradient from-green-600 to-green-800 text-white

H2: "Jangan Buang Jelantah Anda. Jual ke Mijel.id Hari Ini!"

4 benefit pills horizontal:
  💰 Harga Tinggi • 🚚 Jemput Gratis • 💵 Bayar Cash • ♻️ 100% Biodiesel

Impact statement:
  "Setiap liter yang Anda jual = Rp 7.000+ untuk Anda 
   + menyelamatkan 1 juta liter air + energi terbarukan"

2 KOLOM:

Kolom kiri: 2 CTA besar
  Button 1 (bg-white text-green-700, LARGE):
    "📱 Chat WhatsApp Sekarang"
    Sub: "Respon dalam 5 menit"
    → WhatsApp link
    
  Button 2 (border-white text-white, LARGE):
    "📞 Telepon: 0812-XXXX-XXXX"
    → tel: link

  Jam operasional:
    "Senin - Sabtu, 08.00 - 21.00 WIB"

Kolom kanan: FORM (sama seperti hero form, 4 fields)
  Atau jika sudah ada form di hero, cukup:
  "Scroll ke atas untuk isi form penjadwalan"
  + WhatsApp button besar

═══════════════════════════════════════════════════════
FAQ (Hidden tapi ada untuk SEO)
═══════════════════════════════════════════════════════

H2: "Pertanyaan yang Sering Ditanyakan"

10 FAQ (lebih banyak dari Cureahh dan jawaban lebih baik):

Q1: "Berapa harga jual minyak jelantah di Mijel.id?"
A1: "Harga minyak jelantah di Mijel.id mulai dari Rp 7.000 
    per liter, tergantung volume dan kualitas. Volume besar 
    (500L+) bisa mendapat Rp 8.000+/liter. Kami adalah 
    pengepul tangan pertama sehingga harga lebih tinggi 
    dibanding tengkulak. Hubungi WhatsApp kami untuk harga 
    pasti hari ini."

Q2: "Berapa minimal jelantah untuk dijemput gratis?"
A2: "Minimal 20 liter untuk penjemputan gratis di seluruh 
    Jabodetabek. Ini lebih rendah dari kebanyakan pengepul 
    lain yang mensyaratkan 40-50 liter."

Q3: "Berapa lama proses dari chat sampai terima uang?"
A3: "Rata-rata 1-2 jam untuk area Jakarta. Setelah Anda 
    chat WhatsApp, tim kami akan datang, timbang dengan 
    timbangan digital di depan Anda, dan bayar cash 
    langsung. Tidak perlu menunggu transfer."

Q4: "Apakah timbangan Mijel.id akurat?"
A4: "Ya, kami menggunakan timbangan digital tersertifikasi 
    yang ditimbang di depan Anda. Prosesnya 100% transparan, 
    Anda bisa lihat sendiri angka timbangan."

Q5: "Minyak jelantah saya akan diapakan?"
A5: "100% diolah menjadi biodiesel di pabrik bersertifikat 
    ISCC. TIDAK PERNAH dijual untuk konsumsi manusia. 
    Setiap liter yang Anda jual berkontribusi untuk 
    energi terbarukan Indonesia."

Q6: "Apakah menerima jelantah dari rumah tangga?"
A6: "Ya! Kami menerima dari semua sumber: rumah tangga, 
    warteg, restoran, hotel, catering, dan industri makanan. 
    Untuk rumah tangga, kami sarankan kumpulkan bersama 
    tetangga untuk mencapai minimal 20 liter."

Q7: "Area mana saja yang dilayani?"
A7: "Seluruh Jabodetabek: Jakarta (Barat, Pusat, Selatan, 
    Timur, Utara), Bogor, Depok, Tangerang, dan Bekasi. 
    Kami melayani hingga level kecamatan."

Q8: "Apa syarat jelantah yang diterima?"
A8: "Jelantah tidak tercampur air berlebihan, tidak mengandung 
    kotoran padat besar, dan disimpan dalam wadah tertutup. 
    Semakin bersih kualitasnya, semakin tinggi harga yang 
    kami berikan."

Q9: "Bagaimana cara jadi mitra Mijel.id?"
A9: "Hubungi kami via WhatsApp. Syarat: domisili Jabodetabek, 
    punya akses ke sumber jelantah, dan komitmen minimal 
    per bulan. Mitra mendapat harga spesial, training, 
    dan support penuh."

Q10: "Apakah ada biaya tambahan atau potongan?"
A10: "Tidak ada. Jemput gratis, tidak ada potongan timbangan, 
     tidak ada biaya administrasi. Harga yang disepakati 
     adalah harga final yang Anda terima tunai."

Semua FAQ gunakan FAQAccordion component.
Tambahkan FAQ Schema markup.

═══════════════════════════════════════════════════════
METADATA & SCHEMA
═══════════════════════════════════════════════════════

generateMetadata():
  title: "Jual Minyak Jelantah Harga Tinggi - Jemput Gratis Jabodetabek | Mijel.id"
  description: "Jual minyak jelantah mulai Rp 7.000/liter. 
    Pengepul tangan pertama di Jabodetabek. Jemput gratis, 
    timbang digital, bayar cash di tempat. Hubungi sekarang!"
  url: "https://mijel.id"
  
Schema JSON-LD (semua dalam satu halaman):

1. Organization schema:
   name: "Mijel.id"
   url, logo, contactPoint, sameAs, address, areaServed

2. LocalBusiness schema:
   type: "LocalBusiness"
   name: "Mijel.id - Pengepul Minyak Jelantah"
   priceRange: "Rp 7.000 - Rp 8.500 per liter"
   areaServed: Jabodetabek
   aggregateRating: 4.9, reviewCount: 200

3. WebSite schema:
   name, url, potentialAction (SearchAction)

4. FAQPage schema:
   Semua 10 FAQ di atas

═══════════════════════════════════════════════════════
TECHNICAL NOTES
═══════════════════════════════════════════════════════

- Page utama: Server Component (SSG)
- Kalkulator section: separate client component, lazy loaded
- Tab section (siapa cocok): separate client component
- Form: client component, submit → generate WhatsApp link
- Semua section lain: server rendered
- Lazy load sections below fold
- Prioritas gambar: hero section only
- Mobile: single column, CTA selalu visible
- Sticky WhatsApp float button tetap ada (dari layout)

═══════════════════════════════════════════════════════
CARA KITA MENANG DARI CUREAHH (rangkuman):
═══════════════════════════════════════════════════════

1. HARGA DI H1 — Mereka sembunyikan, kita pamer
2. FORM DI HERO — Mereka taruh di paling bawah, kita di atas
3. MINIMAL LEBIH RENDAH — Mereka 40L, kita 20L
4. RESPON TIME — Mereka tidak sebut, kita "5 menit"
5. LEBIH RINGKAS — Mereka 15+ sections overwhelm, kita 10 fokus
6. KALKULATOR LEBIH BAGUS — Mereka slider doang, kita slider + input + quick buttons + dampak lingkungan
7. MOBILE LEBIH CEPAT — Lebih sedikit konten = lebih cepat load
8. CTA LEBIH BANYAK & JELAS — Setiap section ada CTA
9. FORM LEBIH SIMPLE — Mereka 7 field, kita 4 field
10. HARGA LEBIH TINGGI FRAMING — Tabel perbandingan side by side
KUNCI MENANG: Homepage Cureahh mencoba jadi "satu halaman untuk semua". Homepage Mijel.id fokus ke SATU hal: konversi pengunjung jadi leads WhatsApp secepat mungkin, lalu arahkan ke halaman detail untuk yang butuh info lebih.