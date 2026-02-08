import { formatCurrency } from "@/lib/utils";

interface PriceItem {
    type: string;
    pricePerKg: number;
    pricePerLiter: number;
    notes?: string;
}

interface PriceTableProps {
    prices: PriceItem[];
    updatedAt?: string;
}

export function PriceTable({ prices, updatedAt }: PriceTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">
                            Jenis
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 border-b">
                            Harga per Kg
                        </th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 border-b">
                            Harga per Liter
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                        >
                            <td className="px-6 py-4 border-b">
                                <div>
                                    <div className="font-medium text-gray-900">{price.type}</div>
                                    {price.notes && (
                                        <div className="text-sm text-gray-500 mt-1">
                                            {price.notes}
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="px-6 py-4 text-right border-b">
                                <span className="font-semibold text-primary">
                                    {formatCurrency(price.pricePerKg)}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right border-b">
                                <span className="font-semibold text-primary">
                                    {formatCurrency(price.pricePerLiter)}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {updatedAt && (
                <p className="text-sm text-gray-500 mt-4 text-right">
                    Terakhir diperbarui: {new Date(updatedAt).toLocaleDateString("id-ID")}
                </p>
            )}
        </div>
    );
}
