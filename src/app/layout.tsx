import type { Metadata } from 'next'
import Script from 'next/script'
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
    'chaddytwiceover is a personal landing page for links, experiments, socials, and random things I make.',
  metadataBase: new URL('https://chaddytwiceover.com'),
  openGraph: {
    title: 'chaddytwiceover',
    description:
      'A personal landing page for links, experiments, socials, and random things I make.',
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
      'A personal landing page for links, experiments, socials, and random things I make.',
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
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
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
                  'A personal landing page for links, experiments, socials, and random things I make.',
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
