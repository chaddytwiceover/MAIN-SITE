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
    svgBg: '#0a0a1e',
    svgStroke: '#00f5ff',
    svgLabel: 'THE LAB',
  },
  {
    id: 'social-hub',
    title: 'Social Hub',
    category: 'web',
    description: 'Original standalone social links page, now integrated into the main portfolio.',
    focus: 'Navigation patterns + usability',
    stack: 'HTML, CSS, JavaScript, SVG',
    status: 'Integrated into main site',
    svgBg: '#1a0820',
    svgStroke: '#ff2d78',
    svgLabel: 'SOCIAL HUB',
  },
]
