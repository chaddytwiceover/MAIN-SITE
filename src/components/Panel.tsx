import { ElementType, forwardRef, ReactNode } from 'react'

/**
 * Panel — Solid soft brutalist container
 * 
 * Replaces GlassPanel. Solid background, rigid borders, no shadows/blur.
 */

interface PanelProps {
  as?: ElementType
  className?: string
  hover?: boolean
  rounded?: boolean
  children: ReactNode
}

const Panel = forwardRef<HTMLElement, PanelProps>(
  ({ as: Component = 'div', className = '', hover = false, rounded = false, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={`
          bg-bg-raised border border-border p-6
          ${rounded ? 'rounded-sm' : 'rounded-none'}
          ${hover ? 'transition-all duration-200 hover:border-border-strong hover:-translate-y-0.5' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Panel.displayName = 'Panel'

export default Panel
