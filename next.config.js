/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'ojsatfyoynhbtnfoxcvj.supabase.co',
        pathname: '/storage/v1/object/public/post-images'
      }
    ],
  },
}

module.exports = nextConfig
