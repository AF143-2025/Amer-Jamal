import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'neutral';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  icon,
  trend = 'up',
}) => {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-[#0D111A] border border-slate-200/90 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-3 hover:border-slate-300 dark:hover:border-white/[0.15] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-arabic">
          {label}
        </span>
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300">
          {icon}
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
          {value}
        </div>
        {change && (
          <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.08] px-2.5 py-0.5 rounded-lg border border-slate-200 dark:border-white/[0.1] font-medium">
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

