'use client';
import { motion } from 'framer-motion';
import Panel from './Panel';

const items = [
  { label: 'Next.js 14', note: 'App Router & RSCs' },
  { label: 'Tailwind CSS v4', note: 'Design system' },
  { label: 'Framer Motion', note: 'Micro-interactions' },
  { label: 'TypeScript', note: 'Type safety' },
];

export default function CurrentlyBuilding() {
  return (
    <Panel className="flex flex-col gap-4">
      <div className="font-mono text-accent text-sm mb-2">{'// currently building with'}</div>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            className="flex items-start gap-3 font-mono text-sm"
          >
            <span className="text-accent shrink-0">-</span>
            <div>
              <span className="text-text font-bold">{item.label}</span>
              <span className="text-text-muted ml-2">{item.note}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </Panel>
  );
}
