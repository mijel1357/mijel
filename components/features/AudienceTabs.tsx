"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { UtensilsCrossed, Home, Users } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

export function AudienceTabs() {
    const [activeTab, setActiveTab] = useState<"kuliner" | "rumah" | "pengepul">("kuliner");

    return (
        <div className="max-w-4xl mx-auto">
            {/* Tab Headers */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button
                    onClick={() => setActiveTab("kuliner")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "kuliner"
                            ? "bg-primary text-white shadow-lg scale-105"
                            : "bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                >
                    <UtensilsCrossed className="w-5 h-5" />
                    Bisnis Kuliner
                </button>
                <button
                    onClick={() => setActiveTab("rumah")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "rumah"
                            ? "bg-primary text-white shadow-lg scale-105"
                            : "bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                >
                    <Home className="w-5 h-5" />
                    Rumah Tangga
                </button>
                <button
                    onClick={() => setActiveTab("pengepul")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === "pengepul"
                            ? "bg-primary text-white shadow-lg scale-105"
                            : "bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                >
                    <Users className="w-5 h-5" />
                    Pengepul Kecil
                </button>
            </div>

            {/* Tab Contents */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                {activeTab === "kuliner" && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">Untuk Warteg, Restoran & Katering</h3>
                                <p className="text-slate-600 mb-6">Ubah limbah dapur rutin Anda menjadi arus kas tambahan yang stabil. Kami menyediakan jerigen pengganti dan jadwal pickup yang konsisten.</p>
                                <Button
                                    variant="whatsapp"
                                    href={generateWhatsAppLink("Halo, saya pemilik usaha kuliner ingin jual minyak jelantah rutin.")}
                                >
                                    Jual dari Bisnis Anda →
                                </Button>
                            </div>
                            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200">
                                            <th className="text-left py-2 text-slate-500">Jenis Usaha</th>
                                            <th className="text-right py-2 text-slate-500">Est. Volume</th>
                                            <th className="text-right py-2 text-slate-500">Potensi Income</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="group hover:bg-slate-100 transition-colors">
                                            <td className="py-3 font-medium">Warteg / Angkringan</td>
                                            <td className="text-right text-slate-600">40-100 L</td>
                                            <td className="text-right font-bold text-green-600">Rp 750rb+</td>
                                        </tr>
                                        <tr className="group hover:bg-slate-100 transition-colors">
                                            <td className="py-3 font-medium">Restoran Sedang</td>
                                            <td className="text-right text-slate-600">100-500 L</td>
                                            <td className="text-right font-bold text-green-600">Rp 3.7 Jt+</td>
                                        </tr>
                                        <tr className="group hover:bg-slate-100 transition-colors">
                                            <td className="py-3 font-medium">Katering / Hotel</td>
                                            <td className="text-right text-slate-600">300-1000 L</td>
                                            <td className="text-right font-bold text-green-600">Rp 8.0 Jt+</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "rumah" && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="text-center max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-slate-800 mb-4">Untuk Rumah Tangga & Komunitas</h3>
                            <p className="text-slate-600 mb-8">Minimal penjemputan hanya 20 Liter. Ajak tetangga atau kumpulkan satu RT untuk mencapai kuota lebih cepat!</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h4 className="font-bold text-green-800 mb-2">Rumah Tangga</h4>
                                <p className="text-sm text-green-700">Kumpulkan jelantah harian Anda dalam jerigen bekas. Jangan buang di wastafel!</p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <h4 className="font-bold text-orange-800 mb-2">Koordinator RT/RW</h4>
                                <p className="text-sm text-orange-700">Jadi pengepul mini di lingkungan Anda. Kumpulkan dari tetangga, jual ke kami.</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h4 className="font-bold text-blue-800 mb-2">Apartemen</h4>
                                <p className="text-sm text-blue-700">Kerjasama dengan pengelola gedung untuk bank sampah minyak jelantah.</p>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <Button
                                variant="primary"
                                href={generateWhatsAppLink("Halo, saya ingin jual minyak jelantah skala rumah tangga.")}
                            >
                                Mulai Kumpulkan & Jual →
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === "pengepul" && (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">Upgrade Jadi Mitra Resmi</h3>
                                <p className="text-slate-600 mb-6">Sudah keliling kumpulkan jelantah tapi bingung jual kemana? Jual ke Mijel.id sebagai pengepul tangan pertama. Harga lebih tinggi dari tengkulak biasa.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-700">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                        Harga spesial mitra (lebih tinggi)
                                    </li>
                                    <li className="flex items-center text-slate-700">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                        Jadwal prioritas
                                    </li>
                                    <li className="flex items-center text-slate-700">
                                        <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                                        Support armada pickup kapasitas besar
                                    </li>
                                </ul>
                                <Button
                                    variant="outline"
                                    href="/mitra"
                                >
                                    Gabung Jadi Mitra →
                                </Button>
                            </div>
                            <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center">
                                {/* Placeholder for image */}
                                <Users className="w-24 h-24 text-slate-300" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
