import Link from 'next/link'

type Accent = 'lime' | 'neon' | 'amber'

interface LabCardProps {
  title: string
  accent: Accent
  tech: string[]
  description: string
  href: string
}

const accentClass: Record<Accent, string> = {
  lime: 'text-lime border-lime/30 hover:border-lime hover:shadow-[0_0_24px_rgba(214,255,92,0.14)]',
  neon: 'text-neon border-neon/30 hover:border-neon hover:shadow-[0_0_24px_rgba(122,255,210,0.14)]',
  amber: 'text-amber border-amber/30 hover:border-amber hover:shadow-[0_0_24px_rgba(255,184,107,0.14)]',
}

const dotClass: Record<Accent, string> = {
  lime: 'bg-lime shadow-[0_0_8px_rgba(214,255,92,0.8)]',
  neon: 'bg-neon shadow-[0_0_8px_rgba(122,255,210,0.8)]',
  amber: 'bg-amber shadow-[0_0_8px_rgba(255,184,107,0.8)]',
}

const patternStyle: Record<Accent, string> = {
  lime: "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23D6FF5C' fill-opacity='0.18'/%3E%3C/svg%3E\")] bg-[length:12px_12px]",
  neon: "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%237AFFD2' stroke-opacity='0.08' stroke-width='1'/%3E%3C/svg%3E\")] bg-[length:20px_20px]",
  amber: '',
}

export default function LabCard({ title, accent, tech, description, href }: LabCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[14px] border bg-bgSoft/80 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 ${accentClass[accent]} ${patternStyle[accent]}`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-textDim">
          <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${dotClass[accent]}`} />
          live
        </span>
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border/80 bg-black/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-textFaint"
          >
            {item}
          </span>
        ))}
      </div>

      <h3 className="font-serif text-[21px] lowercase leading-tight text-text">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-textDim">{description}</p>

      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text group-hover:text-text"
      >
        play <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </Link>
    </article>
  )
}
