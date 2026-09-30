import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'brand' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  icon,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-xl font-medium',
    md: 'text-sm px-4.5 py-2 gap-2 rounded-xl font-semibold',
    lg: 'text-base px-6 py-2.5 gap-2.5 rounded-2xl font-bold',
  };

  const variantClasses = {
    primary: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 shadow-md active:scale-[0.99] transition-all duration-150 border-2 border-slate-900 dark:border-white',
    brand: 'bg-gradient-to-r from-[#0ea5e9] to-[#4f46e5] hover:bg-[#0f172a] text-white shadow-md active:scale-[0.99] transition-all duration-150 border-2 border-[#0284c7]',
    secondary: 'bg-white dark:bg-[#131926] hover:bg-slate-50 dark:hover:bg-[#1a2233] text-[#0284c7] font-bold border-2 border-[#0284c7] shadow-sm active:scale-[0.99] transition-all duration-150',
    outline: 'bg-transparent hover:bg-slate-100/80 dark:hover:bg-white/[0.05] text-slate-800 dark:text-slate-200 border-2 border-slate-300 dark:border-white/[0.15] font-bold transition-colors',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-700 font-bold hover:text-slate-900 transition-colors',
    danger: 'bg-teal-50 hover:bg-teal-100 text-teal-700 border-2 border-teal-300 font-bold transition-all',
  };

  const baseClasses = `inline-flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noreferrer" 
          className={baseClasses}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={baseClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

