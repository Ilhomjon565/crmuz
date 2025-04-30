/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export enabled
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
    domains: ["localhost", "yourdomain.com"],
    unoptimized: true, // Required for static export with images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
