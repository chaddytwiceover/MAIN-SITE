export interface LabProject {
  slug: string
  title: string
  description: string
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
    tags: ['JavaScript', 'CSS', 'Canvas'],
    status: 'live',
    demoUrl: '/demos/pixel-art/index.html',
    featured: true,
  },
  {
    slug: 'simon-says',
    title: 'Simon Says Game',
    description: 'classic memory game but slightly more punishing. simple code, satisfying feedback loop.',
    tags: ['JavaScript', 'Game', 'CSS'],
    status: 'live',
    demoUrl: '/demos/simon-says/index.html',
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe — Neural Grid',
    description: 'got obsessed with the minimax algorithm so i built tic tac toe. the unbeatable mode is actually unbeatable. styled it cyberpunk because why not.',
    tags: ['JavaScript', 'Minimax'],
    status: 'live',
    demoUrl: '/demos/tic-tac-toe/index.html',
    featured: true,
  },
  {
    slug: 'css-hover-gallery',
    title: 'CSS Hover Gallery',
    description: 'just messing around with pure css hover states and blend modes. no javascript in here, just vibes.',
    tags: ['CSS', 'UI'],
    status: 'experiment',
    demoUrl: '#',
  },
  {
    slug: 'gradient-generator',
    title: 'Gradient Generator',
    description: 'started making this to help me pick colors. it works but it needs a lot more UI polish before i let people use it.',
    tags: ['JavaScript', 'CSS'],
    status: 'prototype',
    demoUrl: '#',
  },
]
