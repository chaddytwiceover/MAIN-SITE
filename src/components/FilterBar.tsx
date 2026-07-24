'use client'

interface FilterBarProps {
  activeFilter: string
  onFilter: (filter: string) => void
}

const filters = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Live' },
  { value: 'experiment', label: 'Experiment' },
  { value: 'coming soon', label: 'Coming Soon' },
]

export default function FilterBar({ activeFilter, onFilter }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onFilter(value)}
          aria-pressed={activeFilter === value}
          className={`
            border px-4 py-2 font-mono text-xs tracking-wider uppercase transition-colors
            ${activeFilter === value
              ? 'border-accent text-accent'
              : 'border-transparent text-text-dim hover:text-text hover:border-border'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
