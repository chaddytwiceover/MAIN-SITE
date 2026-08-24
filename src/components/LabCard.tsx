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
  lime: 'text-lime border-lime/50 hover:border-lime',
  neon: 'text-neon border-neon/50 hover:border-neon',
  amber: 'text-amber border-amber/50 hover:border-amber',
}

const dotClass: Record<Accent, string> = {
  lime: 'bg-lime',
  neon: 'bg-neon',
  amber: 'bg-amber',
}

const patternStyle: Record<Accent, string> = {
  lime: "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23D6FF5C' fill-opacity='0.18'/%3E%3C/svg%3E\")] bg-[length:12px_12px]",
  neon: "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath d='M0 10h20M10 0v20' stroke='%237AFFD2' stroke-opacity='0.08' stroke-width='1'/%3E%3C/svg%3E\")] bg-[length:20px_20px]",
  amber: '',
}

export default function LabCard({ title, accent, tech, description, href }: LabCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[12px] border bg-bgSoft p-5 transition-colors duration-150 ${accentClass[accent]} ${patternStyle[accent]}`}
    >
      {accent === 'amber' && (
        <span className="pointer-events-none absolute inset-0 rounded-[12px] border border-transparent opacity-0 transition-all duration-200 group-hover:scale-105 group-hover:border-amber/35 group-hover:opacity-100" />
      )}

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.08em] text-textDim">
          <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${dotClass[accent]}`} />
          live
        </span>
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-textFaint"
          >
            {item}
          </span>
        ))}
      </div>

      <h3 className="font-serif text-[20px] lowercase leading-tight text-text">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-textDim">{description}</p>

      <Link
        href={href}
        className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.08em] text-textDim transition-colors hover:text-text"
      >
        play →
      </Link>
    </article>
  )
}
