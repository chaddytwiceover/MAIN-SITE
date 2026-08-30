import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders the number and title correctly', () => {
    render(<SectionHeader number="01" title="Test Title" />);

    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();

    // Description should not be present
    expect(screen.queryByText(/test description/i)).not.toBeInTheDocument();
  });

  it('renders the description if provided', () => {
    const description = "This is a test description.";
    render(<SectionHeader number="02" title="Another Title" description={description} />);

    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('Another Title')).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
