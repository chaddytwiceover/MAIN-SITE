import type { Metadata, Viewport } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Twice Over',
    template: '%s — Twice Over',
  },
  description: 'Games and interactive projects by chaddytwiceover.',
  metadataBase: new URL('https://twiceover.dev'),
  openGraph: {
    title: 'Twice Over',
    description: 'Games and interactive projects by chaddytwiceover.',
    url: 'https://twiceover.dev',
    siteName: 'Twice Over',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'chaddytwiceover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chaddytwiceover',
    description: 'Games and interactive projects by chaddytwiceover.',
    site: '@chaddytwiceover',
    creator: '@chaddytwiceover',
    images: ['/og-image.png'],
  },
  other: { referrer: 'strict-origin-when-cross-origin' },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F8F5EE',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Twice Over',
              url: 'https://twiceover.dev',
              description: 'Games and interactive projects by chaddytwiceover.',
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
