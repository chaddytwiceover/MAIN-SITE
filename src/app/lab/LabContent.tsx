'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { labProjects } from '@/lib/lab-projects';
import LabCard from '@/components/LabCard';

export default function LabContent() {
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'Live', 'Experiment'];
  
  const filteredProjects = labProjects.filter(project => {
    if (filter === 'All') return true;
    return project.status === filter;
  });

  return (
    <div className="max-w-[var(--max-width-content)] mx-auto px-6 py-20 min-h-screen">
      <div className="mb-12">
        <span className="font-mono text-accent text-sm tracking-wider uppercase block mb-2">{'// lab'}</span>
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-text">LAB</h1>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-12 border-b-[3px] border-border pb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono text-sm font-bold uppercase px-4 py-2 border-[3px] transition-all shadow-[4px_4px_0px_0px_#f0f0f0] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
              filter === f 
                ? 'bg-accent text-bg border-accent shadow-[4px_4px_0px_0px_#f0f0f0]' 
                : 'bg-bg text-text border-border hover:bg-bg-raised'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <LabCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center border-[3px] border-dashed border-border p-8 bg-bg-raised">
          <p className="font-mono text-text-muted">No projects found matching the filter.</p>
        </div>
      )}
    </div>
  );
}
