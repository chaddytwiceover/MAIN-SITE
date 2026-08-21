import LabCard from '@/components/LabCard'

const labs = [
  {
    title: 'happy little pixels',
    accent: 'lime' as const,
    tech: ['Canvas API', 'Spray', 'Color Presets'],
    description: 'Lightweight pixel editor with spray brush and tiny QoL tools for quick doodads.',
    href: '/demos/pixel-art/index.html',
  },
  {
    title: 'tic tac toe — neural grid',
    accent: 'neon' as const,
    tech: ['Minimax', 'Game AI', 'Unbeatable'],
    description: 'Neon-flavored build where hardest mode stays fully unbeatable.',
    href: '/demos/tic-tac-toe/index.html',
  },
  {
    title: 'simon says',
    accent: 'amber' as const,
    tech: ['State Machine', 'Timing', 'UI'],
    description: 'Classic memory loop with sharper feedback and faster pacing on streaks.',
    href: '/demos/simon-says/index.html',
  },
]

export default function Labs() {
  return (
    <section id="labs" className="mx-auto mt-20 w-full max-w-[1100px] px-6 md:px-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-textFaint">02 / labs</p>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {labs.map((lab) => (
          <LabCard key={lab.title} {...lab} />
        ))}
      </div>
    </section>
  )
}
