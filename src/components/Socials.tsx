import Link from 'next/link';

export default function Socials() {
  const socials = [
    { name: "X", href: "https://x.com/chaddytwiceover", primary: true },
    { name: "Instagram", href: "https://instagram.com/chaddytwiceover" },
    { name: "TikTok", href: "https://tiktok.com/@chaddytwiceover" },
    { name: "Twitch", href: "https://twitch.tv/chaddytwiceover" },
    { name: "GitHub", href: "https://github.com/chaddytwiceover" }
  ];

  return (
    <section id="socials" className="mx-auto max-w-[1100px] px-6 py-24 md:px-12 border-t border-border">
      <div className="mb-8">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textFaint">03 / everywhere else</span>
      </div>
      
      <div className="flex flex-wrap items-center gap-4">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border border-border font-mono transition-colors flex items-center justify-center ${
              social.primary 
                ? 'bg-text text-bg hover:bg-textDim px-6 py-3 text-[13px]'
                : 'text-[11px] text-textDim hover:text-text hover:bg-bgSoft px-4 py-2'
            }`}
          >
            {social.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
