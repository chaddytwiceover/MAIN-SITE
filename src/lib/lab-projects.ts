export interface LabProject {
  slug: string
  title: string
  description: string
  techNotes?: string
  tags: string[]
  status: 'live' | 'prototype' | 'experiment' | 'coming soon'
  demoUrl: string
  featured?: boolean
}

export const labProjects: LabProject[] = [
  {
    slug: 'pixel-art',
    title: 'Happy Little Pixels',
    description:
      'A lightweight pixel editor with a spray brush, color presets, and tiny quality-of-life tools for quick doodads.',
    techNotes: 'Canvas API + custom brush math + keyboard shortcuts.',
    tags: ['JavaScript', 'CSS', 'Canvas'],
    status: 'live',
    demoUrl: '/demos/pixel-art/index.html',
    featured: true,
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe — Neural Grid',
    description:
      'A neon-flavored tic tac toe build with minimax AI so the hardest mode stays fully unbeatable.',
    techNotes: 'Minimax with score-depth weighting for cleaner AI decisions.',
    tags: ['JavaScript', 'Game AI', 'Minimax'],
    status: 'live',
    demoUrl: '/demos/tic-tac-toe/index.html',
    featured: true,
  },
  {
    slug: 'simon-says',
    title: 'Simon Says',
    description:
      'Classic memory loop game with sharper feedback and faster pacing once streaks get high.',
    techNotes: 'State machine flow + tuned timing for difficulty ramp.',
    tags: ['JavaScript', 'Game', 'UI'],
    status: 'live',
    demoUrl: '/demos/simon-says/index.html',
    featured: true,
  },
]
