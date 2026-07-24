import type { Metadata } from 'next'
import LabContent from './LabContent'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'experiments, builds, and digital doodads.'
}

export default function LabPage() {
  return <LabContent />
}
