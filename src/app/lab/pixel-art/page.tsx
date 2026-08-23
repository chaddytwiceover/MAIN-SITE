import type { Metadata } from 'next'
import LabProjectDetail from '@/components/LabProjectDetail'

export const metadata: Metadata = { title: 'Pixel Art Editor', description: 'A lightweight pixel editor with spray brush and tiny quality-of-life tools.' }

export default function PixelArtPage() {
  return <LabProjectDetail title="happy little pixels" description="A lightweight pixel editor with spray brush, symmetry modes, nature-inspired palettes, and tiny quality-of-life tools." demoUrl="/demos/pixel-art/index.html" notes="Canvas API + custom brush math + keyboard shortcuts." />
}
