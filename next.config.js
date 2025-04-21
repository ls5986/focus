/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['example.com'],
  },
  basePath: '/focus',
  assetPrefix: '/focus/',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 