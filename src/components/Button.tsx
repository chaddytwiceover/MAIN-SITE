import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  asExternal?: boolean;
}

export default function Button({ variant = 'primary', href, asExternal, className = '', children, ...props }: ButtonProps) {
  const baseClasses = "font-mono font-bold text-sm uppercase tracking-widest px-6 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent inline-block text-center transition-all duration-0";
  
  const variantClasses = variant === 'primary' 
    ? "bg-accent text-bg neo-border-accent neo-shadow hover:bg-bg hover:text-accent hover:neo-shadow-hover"
    : "bg-transparent text-text neo-border neo-shadow hover:bg-text hover:text-bg hover:neo-shadow-hover";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    if (asExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
