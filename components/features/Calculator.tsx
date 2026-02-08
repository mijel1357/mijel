"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatCurrency, generateWhatsAppLink } from "@/lib/utils";
import { Calculator as CalculatorIcon, Phone, Info } from "lucide-react";

type PriceType = {
    type: string;
    pricePerKg: number;
    pricePerLiter: number;
    notes: string;
};

// Default prices if not provided
const defaultPrices: PriceType[] = [
    {
        type: "Rumah Tangga",
        pricePerKg: 1500,
        pricePerLiter: 1300,
        notes: "Minimal 5 liter",
    },
    {
        type: "Restoran",
        pricePerKg: 3500,
        pricePerLiter: 3000,
        notes: "Kualitas menengah",
    },
    {
        type: "Hotel/Industri",
        pricePerKg: 5500,
        pricePerLiter: 5000,
        notes: "Volume besar",
    },
    {
        type: "Premium",
        pricePerKg: 6000,
        pricePerLiter: 5500,
        notes: "Kualitas terbaik",
    },
];

interface CalculatorProps {
    initialPrices?: PriceType[];
}

export function Calculator({ initialPrices = defaultPrices }: CalculatorProps) {
    const [selectedType, setSelectedType] = useState<PriceType>(initialPrices[0]);
    const [quantity, setQuantity] = useState<string>("");
    const [unit, setUnit] = useState<"liter" | "kg">("liter");
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const qty = parseFloat(quantity) || 0;
        const price = unit === "liter" ? selectedType.pricePerLiter : selectedType.pricePerKg;
        setTotal(qty * price);
    }, [quantity, unit, selectedType]);

    const whatsappMessage = `Halo Mijel.id, saya ingin jual minyak jelantah.\n\nJenis: ${selectedType.type
        }\nJumlah: ${quantity} ${unit}\nEstimasi Harga: ${formatCurrency(total)}\n\nMohon info penjemputan.`;

    return (
        <Card className="max-w-xl mx-auto p-6 md:p-8">
            <div className="flex items-center justify-center mb-6 text-primary">
                <CalculatorIcon className="w-8 h-8 mr-3" />
                <h2 className="text-2xl font-bold">Hitung Pendapatan Anda</h2>
            </div>

            <div className="space-y-6">
                {/* Type Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Sumber Minyak
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        {initialPrices.map((price) => (
                            <button
                                key={price.type}
                                onClick={() => setSelectedType(price)}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${selectedType.type === price.type
                                    ? "bg-primary text-white border-primary ring-2 ring-primary ring-offset-1"
                                    : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:bg-green-50"
                                    }`}
                            >
                                {price.type}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2 flex items-center">
                        <Info className="w-3 h-3 mr-1" />
                        {selectedType.notes}
                    </p>
                </div>

                {/* Quantity and Unit */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Jumlah Minyak
                        </label>
                        <input
                            type="number"
                            min="0"
                            placeholder="0"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Satuan
                        </label>
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value as "liter" | "kg")}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        >
                            <option value="liter">Liter</option>
                            <option value="kg">Kg</option>
                        </select>
                    </div>
                </div>

                {/* Result */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
                    <p className="text-gray-500 text-sm mb-1">Estimasi Pendapatan</p>
                    <div className="text-3xl font-bold text-primary">
                        {formatCurrency(total)}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                        *Harga dapat berubah dan bergantung pada kualitas minyak
                    </p>
                </div>

                {/* Action */}
                <Button
                    variant="whatsapp"
                    href={generateWhatsAppLink(whatsappMessage)}
                    className="w-full py-4 text-lg"
                    disabled={!quantity || parseFloat(quantity) <= 0}
                >
                    <Phone className="w-5 h-5 mr-2" />
                    Jual Sekarang
                </Button>
            </div>
        </Card>
    );
}
