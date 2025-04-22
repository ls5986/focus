/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/focus',
  assetPrefix: '/focus/',
  images: {
    unoptimized: true,
    domains: ['example.com']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 