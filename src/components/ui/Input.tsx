import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className="relative w-full">
      {icon && (
        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full py-2.5 rounded-xl border border-slate-200/90 bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-blue-500/15 transition-all shadow-2xs ${
          icon ? 'pr-10 pl-4' : 'px-4'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

