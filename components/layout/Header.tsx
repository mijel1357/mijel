"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./Container";
import { MAIN_NAVIGATION, SITE_NAME } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import { Button } from "../ui/Button";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary">
                            {SITE_NAME}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {MAIN_NAVIGATION.map((item) => (
                            <div key={item.label} className="relative group">
                                {item.children ? (
                                    <>
                                        <button className="text-gray-700 hover:text-primary transition-colors font-medium">
                                            {item.label}
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-primary transition-colors font-medium"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button
                            variant="primary"
                            href={generateWhatsAppLink(
                                "Halo Mijel.id, saya ingin jual minyak jelantah"
                            )}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Jual Sekarang
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-gray-200">
                        {MAIN_NAVIGATION.map((item) => (
                            <div key={item.label} className="py-2">
                                {item.children ? (
                                    <>
                                        <div className="font-medium text-gray-900 px-4 py-2">
                                            {item.label}
                                        </div>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-8 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="px-4 pt-4">
                            <Button
                                variant="primary"
                                href={generateWhatsAppLink(
                                    "Halo Mijel.id, saya ingin jual minyak jelantah"
                                )}
                                className="w-full"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Jual Sekarang
                            </Button>
                        </div>
                    </nav>
                )}
            </Container>
        </header>
    );
}
