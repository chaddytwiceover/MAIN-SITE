'use client';

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="section-num text-3xl mb-1">{number}</div>
      <h2 className="font-heading font-bold text-text text-4xl md:text-6xl uppercase mb-6 tracking-tight">
        {title}
      </h2>
      <div className="w-24 neo-border-accent border-x-0 border-t-0 mb-8" />
      {description && (
        <p className="font-mono text-text-muted text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
