import Link from 'next/link';

interface LabCardProps {
  title: string;
  accent: 'lime' | 'neon' | 'amber';
  tech: string[];
  description: string;
  href: string;
}

export default function LabCard({ title, accent, tech, description, href }: LabCardProps) {
  const hoverBorderColor = {
    lime: 'hover:border-lime',
    neon: 'hover:border-neon',
    amber: 'hover:border-amber',
  }[accent];

  const dotColor = {
    lime: 'bg-lime',
    neon: 'bg-neon',
    amber: 'bg-amber',
  }[accent];

  const bgStyles = {
    lime: 'bg-[url("data:image/svg+xml,%3Csvg width=\'4\' height=\'4\' viewBox=\'0 0 4 4\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h1v1H1z\' fill=\'%23D6FF5C\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")]',
    neon: 'bg-[url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0v20H0\' fill=\'none\' stroke=\'%237AFFD2\' stroke-opacity=\'0.05\' stroke-width=\'1\'/%3E%3C/svg%3E")]',
    amber: 'hover:shadow-[0_0_15px_rgba(255,184,107,0.1)]',
  }[accent];

  return (
    <Link href={href} className={`group block relative overflow-hidden rounded-[12px] border border-border bg-bgSoft p-5 transition-all duration-150 hover:bg-bgRaise ${hoverBorderColor}`}>
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${bgStyles}`} />
      
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${dotColor} animate-pulse`} />
          <span className="font-mono text-[10px] uppercase tracking-wider text-textDim">Live</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase text-textDim">
              {t}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="font-serif text-[20px] lowercase text-text mb-2">{title}</h3>
        <p className="font-sans text-[14px] text-textDim">{description}</p>
      </div>

      <div className="relative z-10 mt-6 flex justify-end">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textDim group-hover:text-text transition-colors">
          live →
        </span>
      </div>
    </Link>
  );
}
