// Required for static export
export function generateStaticParams() {
    return [{ index: [] }];
}

export default function StudioPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
                <h1 className="text-2xl font-bold mb-4">Sanity Studio</h1>
                <p className="text-gray-600 mb-4">
                    Sanity Studio akan dikonfigurasi di sini untuk manajemen konten.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                    <p className="text-sm text-blue-800">
                        Untuk mengonfigurasi Studio:
                    </p>
                    <ol className="list-decimal list-inside text-sm text-blue-800 mt-2 space-y-1">
                        <li>Buat project di sanity.io</li>
                        <li>Salin project ID ke .env.local</li>
                        <li>Run: npx sanity init</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
