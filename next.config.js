/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
