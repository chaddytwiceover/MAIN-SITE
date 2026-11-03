/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'www.twiceover.dev' }],
      destination: 'https://twiceover.dev/:path*',
      permanent: true,
    }]
  },
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
