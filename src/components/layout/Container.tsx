import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl'
}) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-6xl',
    full: 'max-w-full'
  };

  return (
    <div className={`mx-auto px-6 w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};

