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
      <div className="mb-12 border-b-[3px] border-border pb-8">
        <div className="section-num text-3xl mb-2">01</div>
        <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tight text-text">LAB</h1>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-12 border-b-[3px] border-border pb-6">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-mono text-sm font-bold uppercase px-6 py-3 border-[3px] transition-all duration-0 ${
              filter === f 
                ? 'bg-accent text-bg border-accent neo-shadow' 
                : 'bg-bg text-text border-border hover:bg-text hover:text-bg hover:neo-border-accent'
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
              <LabCard 
                title={project.title}
                accent={project.slug === 'pixel-art' ? 'lime' : project.slug === 'tic-tac-toe' ? 'neon' : project.slug === 'simon-says' ? 'amber' : 'lime'}
                tech={project.tags}
                description={project.description}
                href={project.demoUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center neo-border p-8 bg-bg">
          <p className="font-mono text-text-muted">No projects found matching the filter.</p>
        </div>
      )}
    </div>
  );
}
