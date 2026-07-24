import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'chaddytwiceover',
    template: '%s — chaddytwiceover',
  },
  description:
    'personal lab. front-end experiments, digital doodads, and whatever else ends up here.',
  metadataBase: new URL('https://chaddytwiceover.com'),
  openGraph: {
    title: 'chaddytwiceover',
    description:
      'personal lab. front-end experiments, digital doodads, and whatever else ends up here.',
    url: 'https://chaddytwiceover.com',
    siteName: 'chaddytwiceover',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'chaddytwiceover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chaddytwiceover',
    description:
      'personal lab. front-end experiments, digital doodads, and whatever else ends up here.',
    site: '@chaddytwiceover',
    creator: '@chaddytwiceover',
    images: ['/og-image.png'],
  },
  other: {
    referrer: 'strict-origin-when-cross-origin',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0a0a0a" />
        {/* Google Fonts — Space Grotesk, Inter, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'chaddytwiceover',
                url: 'https://chaddytwiceover.com',
                description:
                  'personal lab. front-end experiments, digital doodads, and whatever else ends up here.',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'chaddytwiceover',
                url: 'https://chaddytwiceover.com',
                image: 'https://chaddytwiceover.com/favicon.png',
                sameAs: [
                  'https://github.com/chaddytwiceover',
                  'https://twitter.com/chaddytwiceover',
                  'https://instagram.com/chaddytwiceover',
                  'https://tiktok.com/@chaddytwiceover',
                ],
              },
            ]),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
