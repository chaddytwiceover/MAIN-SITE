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
    description: 'built a little pixel art thing because canvas API is neat. has bob ross quotes and a spray tool that feels pretty good.',
    techNotes: 'Vanilla JS + Canvas. Lightweight state for brush, palette, and undo-ish behavior.',
    tags: ['JavaScript', 'CSS', 'Canvas'],
    status: 'live',
    demoUrl: '/demos/pixel-art/index.html',
    featured: true,
  },
  {
    slug: 'simon-says',
    title: 'Simon Says Game',
    description: 'classic memory game but slightly more punishing. simple code, satisfying feedback loop.',
    techNotes: 'Sequence generator with timing windows and input lockout during playback.',
    tags: ['JavaScript', 'Game', 'CSS'],
    status: 'live',
    demoUrl: '/demos/simon-says/index.html',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe — Neural Grid',
    description: 'got obsessed with the minimax algorithm so i built tic tac toe. the unbeatable mode is actually unbeatable. styled it cyberpunk because why not.',
    techNotes: 'Classic minimax with depth scoring so AI prefers faster wins and slower losses.',
    tags: ['JavaScript', 'Minimax'],
    status: 'live',
    demoUrl: '/demos/tic-tac-toe/index.html',
    featured: true,
  },
  {
    slug: 'css-hover-gallery',
    title: 'CSS Hover Gallery',
    description: 'just messing around with pure css hover states and blend modes. no javascript in here, just vibes.',
    techNotes: 'Pure CSS transitions and blend modes. No JS behavior at all.',
    tags: ['CSS', 'UI'],
    status: 'experiment',
    demoUrl: '#',
  },
  {
    slug: 'gradient-generator',
    title: 'Gradient Generator',
    description: 'started making this to help me pick colors. it works but it needs a lot more UI polish before i let people use it.',
    techNotes: 'Gradient math is done; export and usability are still in rough prototype mode.',
    tags: ['JavaScript', 'CSS'],
    status: 'prototype',
    demoUrl: '#',
  },
]
