import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import AppWrapper from '@/components/AppWrapper'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CHADDYTWICEOVER',
    template: '%s — CHADDYTWICEOVER',
  },
  description:
    'CHADDYTWICEOVER — web dev student sharing front-end experiments, UI builds, and design work in public.',
  metadataBase: new URL('https://chaddytwiceover.com'),
  openGraph: {
    title: 'CHADDYTWICEOVER',
    description:
      'Web dev student sharing front-end experiments, UI builds, and design work in public.',
    url: 'https://chaddytwiceover.com',
    siteName: 'CHADDYTWICEOVER',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CHADDYTWICEOVER — Design & Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHADDYTWICEOVER',
    description:
      'Web dev student sharing front-end experiments, UI builds, and design work in public.',
    site: '@chaddytwiceover',
    creator: '@chaddytwiceover',
    images: ['/og-image.png'],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f7' },
    { media: '(prefers-color-scheme: dark)', color: '#111110' },
  ],
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
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
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
                  'Web dev student sharing front-end experiments, UI builds, and design work in public.',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://chaddytwiceover.com/projects?q={search_term_string}',
                  },
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'CHADDYTWICEOVER',
                url: 'https://chaddytwiceover.com',
                image: 'https://chaddytwiceover.com/favicon.png',
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
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Web Development',
                  'Responsive Design',
                  'Accessibility',
                  'UI Design',
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
        <AppWrapper>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
        </AppWrapper>
      </body>
    </html>
  )
}
