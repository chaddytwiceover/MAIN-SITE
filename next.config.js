/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
