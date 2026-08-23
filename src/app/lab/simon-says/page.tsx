import type { Metadata } from 'next'
import LabProjectDetail from '@/components/LabProjectDetail'

export const metadata: Metadata = { title: 'Simon Says', description: 'A classic memory loop with sharper feedback and faster pacing.' }

export default function SimonSaysPage() {
  return <LabProjectDetail title="simon says" description="A classic memory loop with sharper feedback, faster pacing, and an increasingly tricky sequence to remember." demoUrl="/demos/simon-says/index.html" notes="State-machine flow + tuned timing for the difficulty ramp." />
}
