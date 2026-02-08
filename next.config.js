/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    // Enable static generation
    // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    trailingSlash: true,
};

module.exports = nextConfig;
