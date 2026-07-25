'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SectionCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function SectionCard({ number, title, description, href }: SectionCardProps) {
  return (
    <Link href={href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
      <motion.div
        whileHover={{ y: -4 }}
        className="border-3 border-border bg-bg p-6 shadow-[4px_4px_0_#00FFD0] hover:shadow-[6px_6px_0_#00FFD0] hover:border-accent transition-all duration-200 h-full flex flex-col"
      >
        <div className="font-mono text-accent text-sm mb-2">{number}</div>
        <h3 className="font-heading font-bold text-2xl text-text mb-2">{title}</h3>
        <p className="font-mono text-text-muted text-sm">{description}</p>
      </motion.div>
    </Link>
  );
}
