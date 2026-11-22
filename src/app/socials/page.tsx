import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Socials',
  description: 'Find chaddytwiceover around the internet.',
}

const socials = [
  { label: 'TikTok', handle: '@chaddytwiceover', href: 'https://www.tiktok.com/@chaddytwiceover' },
  { label: 'Instagram', handle: '@chaddytwiceover', href: 'https://www.instagram.com/chaddytwiceover/' },
  { label: 'Twitter / X', handle: '@chaddytwiceover', href: 'https://x.com/chaddytwiceover' },
  { label: 'GitHub', handle: 'chaddytwiceover', href: 'https://github.com/chaddytwiceover' },
]

export default function SocialsPage() {
  return (
    <div className="sheet socials">
      <header className="page-heading"><h1>Socials</h1><p>Different corners, same chaddytwiceover.</p></header>
      <ul className="profiles">
        {socials.map(({ label, handle, href }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <span className="platform">{label}</span>
              <span className="handle">{handle}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
