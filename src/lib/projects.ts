export interface Project {
  id: string
  title: string
  category: 'web' | 'experiment'
  description: string
  focus: string
  stack: string
  status: string
  url?: string
  svgBg: string
  svgStroke: string
  svgLabel: string
  problem: string
  approach: string
  result: string
  learned: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'the-lab',
    title: 'The Lab',
    category: 'experiment',
    description: 'My sandbox for interaction experiments and front-end concept testing.',
    focus: 'UI experiments + front-end practice',
    stack: 'HTML, CSS, JavaScript, SVG',
    status: 'Active learning project',
    url: 'https://lab.chaddytwiceover.com',
    svgBg: '#f4f3f0',
    svgStroke: '#4a6741',
    svgLabel: 'THE LAB',
    problem: 'I needed a dedicated space to experiment with front-end ideas without worrying about breaking a "real" project.',
    approach: 'Built a standalone lab site to host small, self-contained experiments — each one exploring a specific UI concept or JavaScript technique.',
    result: 'An active collection of experiments including a pixel art editor, a minimax AI tic-tac-toe game, and a Simon Says game — all live and playable.',
    learned: 'Shipping small experiments regularly is a great way to stay consistent and build confidence. Constraints (vanilla JS, no frameworks) forced me to understand fundamentals deeply.',
    featured: true,
  },
  {
    id: 'social-hub',
    title: 'Social Hub',
    category: 'web',
    description: 'Original standalone social links page, now integrated into the main portfolio.',
    focus: 'Navigation patterns + usability',
    stack: 'HTML, CSS, JavaScript, SVG',
    status: 'Integrated into main site',
    url: 'https://social.chaddytwiceover.com',
    svgBg: '#f0ece6',
    svgStroke: '#6b6860',
    svgLabel: 'SOCIAL HUB',
    problem: 'I wanted a single, clean place to point people to all my online profiles — without relying on a third-party link-in-bio tool.',
    approach: 'Designed and built a minimal social links page from scratch using plain HTML, CSS, and JavaScript, focusing on simplicity and usability.',
    result: 'A live, fast-loading page that serves as a central hub for my online presence. Later integrated into the main portfolio as a dedicated section.',
    learned: 'Even a simple project teaches you something — this one reinforced layout fundamentals and the value of owning your own tools instead of outsourcing them.',
  },
]
