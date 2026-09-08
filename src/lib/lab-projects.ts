export interface LabProject {
  slug: string
  title: string
  description: string
  techNotes?: string
  tags: string[]
  status: 'live' | 'prototype' | 'experiment' | 'coming soon'
  demoUrl: string
  gameUrl?: string
  sourceUrl?: string
  featured?: boolean
  hidden?: boolean
}

export const labProjects: LabProject[] = [
  {
    slug: 'flowerquest',
    title: "Monnie's Flower Quest",
    description: "A polished mobile-first garden adventure where Monnie collects flowers, dodges beetles, bees & wasps, collects power blooms, and unlocks the garden gate across ten handcrafted levels.",
    techNotes: "Phaser gameplay embedded through the lab shell, with standalone game deployed on Vercel.",
    featured: true,
    tags: ['Phaser', 'React', 'TypeScript', 'Vite'],
    status: 'live',
    demoUrl: '/lab/flowerquest/',
    gameUrl: 'https://flowerquest.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover/flowerquest'
  },
  {
    slug: 'south-florida-fighter',
    title: 'South Florida Fighter',
    description: "A vibrant 2D arcade fighter set on the boardwalks and beaches of South Florida, featuring special cancels, locked 60 FPS combat, and dynamic audio DSP.",
    techNotes: "Custom 2D arcade engine with frame-accurate cancel windows, deployed on Vercel.",
    featured: true,
    tags: ['Arcade', 'Canvas', 'TypeScript', 'Vite'],
    status: 'live',
    demoUrl: '/lab/south-florida-fighter/',
    gameUrl: process.env.NEXT_PUBLIC_SF_FIGHTER_URL ?? 'https://south-florida-fighter.vercel.app',
    sourceUrl: 'https://south-florida-fighter.vercel.app'
  },
  {
    slug: 'simon-says',
    title: 'Simon Says Game',
    description: "A classic memory game where players must repeat an increasingly complex sequence of colors. Test your memory and concentration skills!",
    techNotes: "State machine flow + Web Audio synthesizer + tuned difficulty curve.",
    featured: true,
    tags: ['JavaScript', 'Web Audio API', 'CSS Grid'],
    status: 'live',
    demoUrl: '/lab/simon-says/',
    gameUrl: 'https://simon-says-neon.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover'
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    description: "A dark-themed, minimalist Tic Tac Toe game featuring three AI difficulty levels (Easy, tactical Medium, and unbeatable Minimax), 2-player local Pass & Play, dynamic hover ghost previews, and 4 curated color palettes.",
    techNotes: "Minimax algorithm with alpha-beta pruning & opening book optimization, tactical heuristic AI, and animated SVG win lines.",
    featured: true,
    tags: ['JavaScript', 'Minimax AI', 'Heuristic AI', 'CSS Grid'],
    status: 'live',
    demoUrl: '/lab/tic-tac-toe/',
    gameUrl: 'https://tic-tac-toe-two-self-24.vercel.app/',
    sourceUrl: 'https://github.com/chaddytwiceover/tic-tac-toe'
  }
]
