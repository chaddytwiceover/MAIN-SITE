'use client'

/**
 * FilterBar — Filter buttons for the Projects page
 *
 * Pill-shaped filter buttons with active state highlighting.
 */

interface FilterBarProps {
  activeFilter: string
  onFilter: (filter: string) => void
}

const filters = [
  { value: 'all', label: 'All' },
  { value: 'live', label: 'Live' },
  { value: 'coming-soon', label: 'Coming Soon' },
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
            px-4 py-2 text-sm font-medium rounded-xl
            transition-all duration-200 min-h-[44px]
            focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2
            ${activeFilter === value
              ? 'bg-accent/10 text-accent border border-accent/30'
              : 'bg-surface border border-border text-text-muted hover:text-text hover:border-border-hover'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
