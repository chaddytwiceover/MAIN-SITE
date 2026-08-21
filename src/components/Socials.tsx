const socials = [
  { label: 'X', href: 'https://x.com/chaddytwiceover', primary: true },
  { label: 'Instagram', href: 'https://instagram.com/chaddytwiceover' },
  { label: 'TikTok', href: 'https://tiktok.com/@chaddytwiceover' },
  { label: 'Twitch', href: 'https://twitch.tv/chaddytwiceover' },
  { label: 'GitHub', href: 'https://github.com/chaddytwiceover' },
]

export default function Socials() {
  return (
    <section id="socials" className="mx-auto mt-20 w-full max-w-[1100px] px-6 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">03 / everywhere else</p>

      <div className="mt-5 flex flex-wrap gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ${
              social.primary
                ? 'scale-125 border-text bg-text text-bg'
                : 'border-border text-textDim hover:text-text'
            }`}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}
