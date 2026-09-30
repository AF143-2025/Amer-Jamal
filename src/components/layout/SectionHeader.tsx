import React from 'react';

export interface SectionHeaderProps {
  icon: React.ReactNode;
  label: string;
  title: string;
  description?: string;
  badge?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  label,
  title,
  description,
  badge,
  action,
  align = 'left',
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-2 sm:space-y-2.5 ${isCenter ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}>
      {/* Icon + Label Row */}
      <div className={`flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-between'}`}>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-teal-50/90 border border-teal-200/80 text-teal-800 text-[11px] font-mono font-bold tracking-wider uppercase">
          <span className="shrink-0 text-teal-700">{icon}</span>
          <span>{label}</span>
        </div>
        {badge && <div>{badge}</div>}
      </div>

      {/* Main Title + Action */}
      <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 ${isCenter ? 'sm:justify-center' : ''}`}>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 font-arabic leading-tight">
          {title}
        </h2>
        {action && !isCenter && (
          <div className="shrink-0 self-start sm:self-auto">
            {action}
          </div>
        )}
      </div>

      {/* Short Professional Description */}
      {description && (
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
};

