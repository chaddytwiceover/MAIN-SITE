import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LabCard from './LabCard';

describe('LabCard Component', () => {
  const defaultProps = {
    title: 'Test Lab',
    accent: 'neon' as const,
    tech: ['React', 'TypeScript'],
    description: 'A test description for the lab card.',
    href: '/labs/test-lab',
  };

  it('renders the title and description correctly', () => {
    render(<LabCard {...defaultProps} />);

    expect(screen.getByText('Test Lab')).toBeInTheDocument();
    expect(screen.getByText('A test description for the lab card.')).toBeInTheDocument();
  });

  it('renders the tech stack correctly', () => {
    render(<LabCard {...defaultProps} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders the href correctly in the link', () => {
    render(<LabCard {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/labs/test-lab');
    expect(link).toHaveTextContent('play');
  });

  it('applies the correct accent class', () => {
    const { container } = render(<LabCard {...defaultProps} accent="lime" />);

    // The article is the first child of the container
    const article = container.firstChild as HTMLElement;
    expect(article).toHaveClass('text-lime');
  });
});
