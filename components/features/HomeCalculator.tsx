"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink, formatCurrency } from "@/lib/utils";
import { Droplets, TreePine, CloudFog } from "lucide-react";

export function HomeCalculator() {
    const [liters, setLiters] = useState(20);
    const [quality, setQuality] = useState<"bagus" | "standar" | "campuran">("standar");
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);

    // Calculate price logic based on taskhp.md
    useEffect(() => {
        let basePrice = 0;

        if (liters >= 500) {
            basePrice = 8000;
        } else if (liters >= 100) {
            basePrice = 7500;
        } else {
            basePrice = 7000;
        }

        // Quality modifier
        let modifier = 0;
        if (quality === "bagus") modifier = 500;
        if (quality === "campuran") modifier = -500;

        const finalPrice = basePrice + modifier;
        setPrice(finalPrice);
        setTotal(finalPrice * liters);
    }, [liters, quality]);

    const handleWhatsapp = () => {
        const message = `Halo Mijel.id, saya mau jual jelantah ${liters} liter (Kualitas: ${quality}). Estimasi total Rp ${formatCurrency(total)}. Bisa dijemput?`;
        window.open(generateWhatsAppLink(message), "_blank");
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 max-w-3xl mx-auto">
            <div className="space-y-8">
                {/* Input Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <label className="font-bold text-lg text-slate-800">Jumlah Liter</label>
                        <input
                            type="number"
                            min="20"
                            max="5000"
                            value={liters}
                            onChange={(e) => setLiters(Number(e.target.value))}
                            className="w-24 text-right px-3 py-1 border border-slate-300 rounded-lg font-bold text-primary"
                        />
                    </div>
                    <input
                        type="range"
                        min="20"
                        max="1000"
                        step="10"
                        value={liters}
                        onChange={(e) => setLiters(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex gap-2 flex-wrap mt-4 justify-center">
                        {[20, 50, 100, 200, 500, 1000].map((val) => (
                            <button
                                key={val}
                                onClick={() => setLiters(val)}
                                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${liters === val
                                        ? "bg-primary text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {val}L
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quality Section */}
                <div>
                    <label className="block font-bold text-lg text-slate-800 mb-4">Kualitas Minyak</label>
                    <div className="grid grid-cols-3 gap-4">
                        <button
                            onClick={() => setQuality("bagus")}
                            className={`p-3 rounded-xl border-2 transition-all ${quality === "bagus"
                                    ? "border-primary bg-primary/5 text-primary font-bold"
                                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                                }`}
                        >
                            Bagus
                            <span className="block text-xs font-normal mt-1 opacity-80">(Jernih)</span>
                        </button>
                        <button
                            onClick={() => setQuality("standar")}
                            className={`p-3 rounded-xl border-2 transition-all ${quality === "standar"
                                    ? "border-primary bg-primary/5 text-primary font-bold"
                                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                                }`}
                        >
                            Standar
                            <span className="block text-xs font-normal mt-1 opacity-80">(Biasa)</span>
                        </button>
                        <button
                            onClick={() => setQuality("campuran")}
                            className={`p-3 rounded-xl border-2 transition-all ${quality === "campuran"
                                    ? "border-primary bg-primary/5 text-primary font-bold"
                                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                                }`}
                        >
                            Campuran
                            <span className="block text-xs font-normal mt-1 opacity-80">(Keruh/Air)</span>
                        </button>
                    </div>
                </div>

                {/* Result Box */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
                    <p className="text-slate-600 font-medium mb-2">Estimasi Anda Dapat:</p>
                    <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 animate-pulse">
                        {formatCurrency(total)}
                    </div>
                    <p className="text-sm text-slate-500">
                        {liters} liter × {formatCurrency(price)}/liter
                    </p>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs md:text-sm">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-700">
                        <Droplets className="w-5 h-5 mx-auto mb-2 opacity-70" />
                        <span className="font-bold block">{liters} Juta L</span> Air Selamat
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl text-green-700">
                        <TreePine className="w-5 h-5 mx-auto mb-2 opacity-70" />
                        <span className="font-bold block">{Math.ceil(liters * 0.12)}</span> Pohon
                    </div>
                    <div className="p-3 bg-gray-50 rounded-xl text-gray-700">
                        <CloudFog className="w-5 h-5 mx-auto mb-2 opacity-70" />
                        <span className="font-bold block">{Math.ceil(liters * 2.5)} kg</span> CO₂ Kurang
                    </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                    <Button onClick={handleWhatsapp} variant="whatsapp" className="w-full text-lg py-4 font-bold shadow-lg h-auto">
                        Jual Sekarang — WhatsApp
                    </Button>
                    <p className="text-xs text-center text-slate-400 italic">
                        * Estimasi berdasarkan harga terkini. Harga final setelah pengecekan kualitas.
                    </p>
                </div>
            </div>
        </div>
    );
}
