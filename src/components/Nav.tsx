import Link from 'next/link'

const links = [
  { href: '#labs', label: 'Labs' },
  { href: '#socials', label: 'Socials' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/90 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-mono text-[12px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text">
          chaddytwiceover
        </Link>

        <ul className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
