'use client';

type FilterType = 'All' | 'Live' | 'Experiment';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: FilterType[] = ['All', 'Live', 'Experiment'];

export default function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`font-mono text-xs uppercase px-4 py-2 border-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isActive 
                ? 'bg-accent text-bg border-accent' 
                : 'border-transparent text-dim hover:border-border hover:text-text'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
