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
            className={`font-mono font-bold text-sm uppercase px-6 py-3 border-3 transition-colors duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              isActive 
                ? 'bg-accent text-bg border-accent neo-shadow' 
                : 'bg-transparent border-border text-text-dim hover:bg-border hover:text-text'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
