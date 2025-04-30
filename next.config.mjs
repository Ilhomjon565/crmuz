/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            },
        ],
        domains: ['localhost', 'yourdomain.com'], // localhost yoki boshqa domenga ruxsat berish
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
