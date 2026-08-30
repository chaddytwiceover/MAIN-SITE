import React from 'react';
import { render, screen } from '@testing-library/react';
import LabCard from './LabCard';

describe('LabCard', () => {
  const defaultProps = {
    title: 'Interactive 3D Simulation',
    accent: 'lime' as const,
    tech: ['Three.js', 'React', 'WebGL'],
    description: 'A experimental 3D particle simulation built with Three.js.',
    href: '/demos/simulation',
  };

  it('renders title, description, tech tags, and play link correctly', () => {
    render(<LabCard {...defaultProps} />);

    expect(screen.getByText('Interactive 3D Simulation')).toBeInTheDocument();
    expect(screen.getByText('A experimental 3D particle simulation built with Three.js.')).toBeInTheDocument();

    defaultProps.tech.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    const link = screen.getByRole('link', { name: /play/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/demos/simulation');
  });

  it('renders correctly with lime accent classes', () => {
    const { container } = render(<LabCard {...defaultProps} accent="lime" />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('text-lime', 'border-lime/30');

    const dot = container.querySelector('span.animate-pulse');
    expect(dot).toHaveClass('bg-lime');
  });

  it('renders correctly with neon accent classes', () => {
    const { container } = render(<LabCard {...defaultProps} accent="neon" />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('text-neon', 'border-neon/30');

    const dot = container.querySelector('span.animate-pulse');
    expect(dot).toHaveClass('bg-neon');
  });

  it('renders correctly with amber accent classes', () => {
    const { container } = render(<LabCard {...defaultProps} accent="amber" />);

    const article = container.querySelector('article');
    expect(article).toHaveClass('text-amber', 'border-amber/30');

    const dot = container.querySelector('span.animate-pulse');
    expect(dot).toHaveClass('bg-amber');
  });

  it('renders correctly when tech array is empty', () => {
    render(<LabCard {...defaultProps} tech={[]} />);

    expect(screen.getByText('Interactive 3D Simulation')).toBeInTheDocument();
    expect(screen.getByText('live')).toBeInTheDocument();
  });
});
