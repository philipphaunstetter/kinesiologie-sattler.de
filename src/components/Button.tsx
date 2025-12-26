import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-2 min-h-9 px-4 py-[7.5px] rounded-lg font-semibold text-sm leading-[21px] tracking-[0.07px] whitespace-nowrap transition-colors';
  
  const variantStyles = {
    primary: 'bg-[#437c6d] text-[#f8fafc] hover:bg-[#356353]',
    secondary: 'bg-white text-[#437c6d] hover:bg-gray-50',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
