import React from 'react';

interface CardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'glass';
}

export const Card: React.FC<CardProps> = ({
  id,
  children,
  className = '',
  hoverEffect = true,
  onClick,
  variant = 'default',
}) => {
  const variantStyles = {
    default: 'bg-white border-2 border-[var(--color-primary)]/20 shadow-md',
    elevated: 'bg-white border-2 border-[var(--color-primary)] shadow-lg',
    glass: 'glass-card border-2 border-[var(--color-primary)]/30',
  };

  const hoverStyles = hoverEffect
    ? 'hover:border-[var(--color-primary)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-2xl p-4 sm:p-5 md:p-6 ${variantStyles[variant]} ${hoverStyles} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

