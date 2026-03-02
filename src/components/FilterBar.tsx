'use client'

interface FilterBarProps {
  activeFilter: string
  onFilter: (filter: string) => void
}

const filters = [
  { value: 'all', label: 'All' },
  { value: 'web', label: 'Web' },
  { value: 'experiment', label: 'Experiments' },
]

export default function FilterBar({ activeFilter, onFilter }: FilterBarProps) {
  return (
    <div
      className="filter-bar"
      role="group"
      aria-label="Filter projects by category"
    >
      {filters.map(({ value, label }) => (
        <button
          key={value}
          className={`filter-btn${activeFilter === value ? ' active' : ''}`}
          data-filter={value}
          type="button"
          aria-pressed={activeFilter === value}
          onClick={() => onFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
