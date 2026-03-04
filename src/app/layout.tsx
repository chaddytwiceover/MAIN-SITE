import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'CHADDYTWICEOVER',
    template: '%s — CHADDYTWICEOVER',
  },
  description:
    'CHADDYTWICEOVER — Web dev student building experiments in public. Design & development portfolio.',
  metadataBase: new URL('https://chaddytwiceover.com'),
  openGraph: {
    title: 'CHADDYTWICEOVER',
    description:
      'Web dev student building experiments in public. Design & development portfolio.',
    url: 'https://chaddytwiceover.com',
    siteName: 'CHADDYTWICEOVER',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHADDYTWICEOVER',
    description:
      'Web dev student building experiments in public. Design & development portfolio.',
  },
  other: {
    'theme-color': '#faf9f7',
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
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'CHADDYTWICEOVER',
                url: 'https://chaddytwiceover.com',
                description:
                  'Web dev student building experiments in public. Design & development portfolio.',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'CHADDYTWICEOVER',
                url: 'https://chaddytwiceover.com',
                sameAs: [
                  'https://github.com/chaddytwiceover',
                  'https://twitter.com/chaddytwiceover',
                  'https://instagram.com/chaddytwiceover',
                  'https://tiktok.com/@chaddytwiceover',
                ],
                jobTitle: 'Web Development Student',
                knowsAbout: [
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'Web Development',
                  'Responsive Design',
                  'Accessibility',
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
