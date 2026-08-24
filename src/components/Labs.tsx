import LabCard from '@/components/LabCard'
import { labProjects } from '@/lib/lab-projects'

const accentBySlug = {
  flowerquest: 'amber' as const,
  'tic-tac-toe': 'neon' as const,
  'simon-says': 'amber' as const,
}

export default function Labs() {
  const labs = labProjects
    .filter((project) => project.featured ?? project.status === 'live')
    .map((project) => ({
      title: project.title.toLowerCase(),
      accent: accentBySlug[project.slug as keyof typeof accentBySlug] ?? 'amber',
      tech: project.tags.slice(0, 3),
      description: project.description,
      href: project.demoUrl,
    }))

  return (
    <section id="labs" className="mx-auto mt-20 w-full max-w-[1100px] px-6 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">02 / labs</p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <LabCard key={lab.title} {...lab} />
        ))}
      </div>
    </section>
  )
}
