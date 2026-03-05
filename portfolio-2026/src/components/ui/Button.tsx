import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-primary focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-cyan-primary text-dark-bg hover:bg-cyan-light hover:-translate-y-0.5 shadow-lg hover:shadow-cyan-primary/30',
    secondary:
      'bg-dark-card text-text-primary border border-dark-lighter hover:border-cyan-primary hover:-translate-y-0.5',
    outline:
      'bg-transparent text-cyan-primary border-2 border-cyan-primary hover:bg-cyan-primary hover:text-dark-bg',
    ghost: 'bg-transparent text-text-secondary hover:text-cyan-primary hover:bg-cyan-primary/10',
  };

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, {
      className: cn(baseStyles, variants[variant], sizes[size], className),
    });
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
