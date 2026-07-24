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
    title: 'Pixel Art Editor',
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
  {
    slug: 'css-hover-gallery',
    title: 'CSS Hover Gallery',
    description:
      'A pure CSS playground focused on layered hover interactions and strong motion restraint.',
    techNotes: 'No JS; transform stack + blend-mode experiments.',
    tags: ['CSS', 'UI'],
    status: 'experiment',
    demoUrl: '#',
  },
  {
    slug: 'gradient-generator',
    title: 'Gradient Generator',
    description:
      'A rough but useful gradient sandbox for testing palettes before they land in bigger projects.',
    techNotes: 'Color stop interpolation and copy-ready CSS output.',
    tags: ['JavaScript', 'CSS'],
    status: 'prototype',
    demoUrl: '#',
  },
  {
    slug: 'tiny-arcade-loader',
    title: 'Tiny Arcade Loader',
    description:
      'Upcoming micro loader that rotates mini game intros and transitions like old cabinet boot screens.',
    techNotes: 'Planned with sprite sheets and timed CSS keyframes.',
    tags: ['Animation', 'CSS', 'Sprites'],
    status: 'coming soon',
    demoUrl: '#',
  },
]
