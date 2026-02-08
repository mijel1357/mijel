import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { SITE_NAME, FOOTER_NAVIGATION, CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <Container>
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About Column */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">
                                Tentang {SITE_NAME}
                            </h3>
                            <p className="text-sm mb-4">
                                Layanan pengepul minyak jelantah terpercaya di Jabodetabek.
                                Kami jemput minyak jelantah Anda dan bayar tunai.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start">
                                    <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                                    <span>Jakarta, Bogor, Depok, Tangerang, Bekasi</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {CONTACT_EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Layanan Column */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Layanan</h3>
                            <ul className="space-y-2 text-sm">
                                {FOOTER_NAVIGATION.services.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Area Column */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">
                                Area Layanan
                            </h3>
                            <ul className="space-y-2 text-sm">
                                {FOOTER_NAVIGATION.area.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Info Column */}
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Informasi</h3>
                            <ul className="space-y-2 text-sm">
                                {FOOTER_NAVIGATION.info.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <Container>
                    <div className="py-6 text-sm text-center md:text-left">
                        <p>
                            &copy; {currentYear} {SITE_NAME}. All rights reserved.
                        </p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
