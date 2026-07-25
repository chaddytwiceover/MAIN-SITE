import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  href?: string;
  asExternal?: boolean;
}

export default function Button({ variant = 'primary', href, asExternal, className = '', children, ...props }: ButtonProps) {
  const baseClasses = "font-mono text-sm uppercase tracking-wide px-6 py-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent inline-block text-center";
  
  const variantClasses = variant === 'primary' 
    ? "bg-accent text-bg border-3 border-accent shadow-[4px_4px_0_#000] hover:bg-transparent hover:text-accent hover:shadow-[6px_6px_0_#00FFD0]"
    : "bg-transparent text-text border-3 border-border shadow-[4px_4px_0_#fff] hover:border-accent hover:text-accent hover:shadow-[6px_6px_0_#00FFD0]";

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
