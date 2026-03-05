import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-lg p-6 transition-all duration-300',
        hover && 'hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)]',
        className
      )}
    >
      {children}
    </div>
  );
}
