import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://chaddytwiceover.com'

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/lab/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/whatever/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/links/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/guestbook/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
