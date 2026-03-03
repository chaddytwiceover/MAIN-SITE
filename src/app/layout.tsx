import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
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
    images: [
      { url: '/images/hero.png', alt: 'CHADDYTWICEOVER portfolio preview' },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHADDYTWICEOVER',
    description:
      'Web dev student building experiments in public. Design & development portfolio.',
    images: [
      { url: '/images/hero.png', alt: 'CHADDYTWICEOVER portfolio preview' },
    ],
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
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
