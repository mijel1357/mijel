// Site Information
export const SITE_NAME = "Mijel.id";
export const SITE_DOMAIN = "https://mijel.id";
export const SITE_DESCRIPTION =
    "Jual Minyak Jelantah, Kami Jemput & Bayar Tunai. Layanan pengepul minyak jelantah terpercaya di Jakarta, Bogor, Depok, Tangerang, Bekasi.";
export const SITE_TAGLINE = "Jual Minyak Jelantah, Kami Jemput & Bayar Tunai";

// Contact Information
export const WHATSAPP_NUMBER =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "62XXXXXXXXXXX";
export const CONTACT_EMAIL = "info@mijel.id";

// Default SEO Values
export const DEFAULT_SEO = {
    title: "Mijel.id - Pengepul Minyak Jelantah Terpercaya",
    description: SITE_DESCRIPTION,
    keywords: [
        "pengepul minyak jelantah",
        "jual minyak jelantah",
        "harga minyak jelantah",
        "minyak jelantah Jakarta",
        "used cooking oil",
        "daur ulang minyak",
    ],
};

// Navigation Structure
export const MAIN_NAVIGATION = [
    { label: "Beranda", href: "/" },
    {
        label: "Layanan",
        href: "#",
        children: [
            { label: "Rumah Tangga", href: "/#layanan" },
            { label: "Restoran & Hotel", href: "/#layanan" },
            { label: "Industri", href: "/#layanan" },
        ],
    },
    {
        label: "Harga",
        href: "/harga-minyak-jelantah",
    },
    {
        label: "Area",
        href: "/area-layanan",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Tentang",
        href: "/tentang",
    },
    {
        label: "Kontak",
        href: "/kontak",
    },
];

// Footer Navigation
export const FOOTER_NAVIGATION = {
    about: [
        { label: "Tentang Kami", href: "/tentang" },
        { label: "Cara Kerja", href: "/#cara-kerja" },
        { label: "Mitra", href: "/mitra" },
        { label: "Kontak", href: "/kontak" },
    ],
    services: [
        { label: "Rumah Tangga", href: "/#layanan" },
        { label: "Restoran & Hotel", href: "/#layanan" },
        { label: "Industri", href: "/#layanan" },
        { label: "Harga", href: "/harga-minyak-jelantah" },
    ],
    area: [
        { label: "Jakarta", href: "/area-layanan" },
        { label: "Bogor", href: "/area-layanan" },
        { label: "Depok", href: "/area-layanan" },
        { label: "Tangerang", href: "/area-layanan" },
        { label: "Bekasi", href: "/area-layanan" },
    ],
    info: [
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/#faq" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
    ],
};

// Price Types
export const PRICE_TYPES = {
    rumahan: "Rumah Tangga",
    restoran: "Restoran",
    industri: "Industri",
    premium: "Premium",
};
