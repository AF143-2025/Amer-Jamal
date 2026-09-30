import React from 'react';
import { Severity } from '../../types';
import { getSeverityClasses } from '../../utils/formatters';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'emerald' | 'amber' | 'rose' | 'purple' | 'severity' | 'outline' | 'success';
  severity?: Severity;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  severity,
  size = 'sm',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 font-medium',
    md: 'text-xs px-3 py-1 font-semibold',
  };

  if (variant === 'severity' && severity) {
    const sev = getSeverityClasses(severity);
    return (
      <span
        className={`inline-flex items-center font-mono rounded-md border ${sev.bg} ${sev.text} ${sev.border} ${sizeClasses[size]} ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full ml-1.5 bg-current opacity-80" />
        {children}
      </span>
    );
  }

  const variantClasses = {
    default: 'bg-slate-100 text-slate-800 border-2 border-slate-300 font-bold',
    cyan: 'bg-[#f0f9ff] text-[#0284c7] border-2 border-[#0284c7] font-bold',
    emerald: 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400 font-bold',
    amber: 'bg-amber-100 text-amber-800 border-2 border-amber-400 font-bold',
    rose: 'bg-teal-100 text-teal-800 border-2 border-teal-400 font-bold',
    purple: 'bg-purple-100 text-purple-800 border-2 border-purple-400 font-bold',
    severity: 'bg-slate-100 text-slate-800 border-2 border-slate-300 font-bold',
    outline: 'bg-white text-slate-800 border-2 border-[#0284c7] font-bold shadow-sm',
    success: 'bg-emerald-100 text-emerald-800 border-2 border-emerald-400 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md border ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
};

