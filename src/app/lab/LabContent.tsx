'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { labProjects } from '@/lib/lab-projects'
import LabCard from '@/components/LabCard'
import SectionHeader from '@/components/SectionHeader'
import PageTransition from '@/components/PageTransition'
import FilterBar from '@/components/FilterBar'
import { useSkipAnimation } from '@/lib/useSafeAnimation'

export default function LabContent() {
  const [filter, setFilter] = useState('all')
  const skipAnimation = useSkipAnimation()

  const filteredProjects = labProjects.filter(p => 
    filter === 'all' ? true : p.status === filter
  )

  return (
    <PageTransition>
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 py-20">
        <SectionHeader
          label="// lab"
          title="Lab"
          description="experiments, builds, and digital doodads."
        />

        <FilterBar activeFilter={filter} onFilter={setFilter} />

        <div className="bg-border p-[1px] mt-8">
          <motion.div 
            layout={!skipAnimation}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout={!skipAnimation}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-bg h-full"
                >
                  <LabCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
