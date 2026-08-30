import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
  it('renders all filter options', () => {
    const handleFilterChange = jest.fn();
    render(<FilterBar activeFilter="All" onFilterChange={handleFilterChange} />);

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Live' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Experiment' })).toBeInTheDocument();
  });

  it('applies active styling to the active filter button', () => {
    const handleFilterChange = jest.fn();
    render(<FilterBar activeFilter="Live" onFilterChange={handleFilterChange} />);

    const liveButton = screen.getByRole('button', { name: 'Live' });
    const allButton = screen.getByRole('button', { name: 'All' });

    expect(liveButton.className).toContain('bg-accent');
    expect(liveButton.className).toContain('text-bg');
    expect(liveButton.className).toContain('neo-shadow');

    expect(allButton.className).not.toContain('bg-accent text-bg');
    expect(allButton.className).toContain('bg-transparent');
  });

  it('calls onFilterChange callback with correct filter when button is clicked', () => {
    const handleFilterChange = jest.fn();
    render(<FilterBar activeFilter="All" onFilterChange={handleFilterChange} />);

    const experimentButton = screen.getByRole('button', { name: 'Experiment' });
    fireEvent.click(experimentButton);

    expect(handleFilterChange).toHaveBeenCalledTimes(1);
    expect(handleFilterChange).toHaveBeenCalledWith('Experiment');
  });
});
