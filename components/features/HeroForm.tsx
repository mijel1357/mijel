"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/lib/utils";

export function HeroForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("20-50");
    const [area, setArea] = useState("Jakarta Barat");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Halo Mijel.id, saya ingin jadwal penjemputan.\n\nNama: ${name}\nNo WA: ${phone}\nPerkiraan: ${amount} liter\nArea: ${area}`;
        const link = generateWhatsAppLink(message);
        window.open(link, "_blank");
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Jadwalkan Penjemputan Gratis</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                    <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Contoh: Budi Santoso"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                    <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="0812xxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Perkiraan Jumlah</label>
                        <select
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        >
                            <option value="20-50">20-50 Liter</option>
                            <option value="50-100">50-100 Liter</option>
                            <option value="100-500">100-500 Liter</option>
                            <option value="500+">500+ Liter</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Area</label>
                        <select
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        >
                            <option value="Jakarta Barat">Jakarta Barat</option>
                            <option value="Jakarta Pusat">Jakarta Pusat</option>
                            <option value="Jakarta Selatan">Jakarta Selatan</option>
                            <option value="Jakarta Timur">Jakarta Timur</option>
                            <option value="Jakarta Utara">Jakarta Utara</option>
                            <option value="Bogor">Bogor</option>
                            <option value="Depok">Depok</option>
                            <option value="Tangerang">Tangerang</option>
                            <option value="Bekasi">Bekasi</option>
                        </select>
                    </div>
                </div>

                <Button type="submit" variant="whatsapp" className="w-full py-3 text-lg font-bold shadow-lg">
                    Kirim & Kami Hubungi Anda
                </Button>

                <p className="text-xs text-center text-slate-500 mt-2">
                    🔒 Data hanya untuk koordinasi penjemputan
                </p>
                <div className="text-center">
                    <a href="https://wa.me/6281234567890" target="_blank" className="text-sm text-primary font-medium hover:underline">
                        Atau langsung WhatsApp: 0812-3456-7890
                    </a>
                </div>
            </form>
        </div>
    );
}
