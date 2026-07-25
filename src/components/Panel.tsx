import { forwardRef } from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Panel = forwardRef<HTMLDivElement, PanelProps>(({ children, className = '', hover = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`neo-border bg-bg-raised p-6 ${
        hover ? 'transition-shadow duration-0 hover:neo-shadow-hover' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Panel.displayName = 'Panel';
export default Panel;
