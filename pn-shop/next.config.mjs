/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Отключает Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
