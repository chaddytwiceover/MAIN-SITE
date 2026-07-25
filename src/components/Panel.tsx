import { forwardRef } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(({ children, className = '', hover = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`border-3 border-border bg-bg-raised p-6 ${
        hover ? 'transition-shadow duration-200 hover:shadow-[4px_4px_0_#00FFD0]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Panel.displayName = 'Panel';
export default Panel;
