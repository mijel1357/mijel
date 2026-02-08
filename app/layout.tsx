import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/whatsapp/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mijel.id - Pengepul Minyak Jelantah Terpercaya",
    description:
        "Jual Minyak Jelantah, Kami Jemput & Bayar Tunai. Layanan pengepul minyak jelantah terpercaya di Jakarta, Bogor, Depok, Tangerang, Bekasi.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}
