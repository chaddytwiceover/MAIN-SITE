'use client';

interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="font-mono text-accent mb-2">{number}</div>
      <h2 className="font-heading font-bold text-text text-3xl md:text-5xl uppercase mb-4">
        {title}
      </h2>
      <div className="w-16 border-b-3 border-accent mb-6" />
      {description && (
        <p className="font-mono text-text-muted text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
