import React from 'react';

export interface FlipDigitProps {
  value: string;
  variant?: 'large' | 'medium' | 'small' | 'extraSmall';
  className?: string;
}

export const FlipDigit: React.FC<FlipDigitProps> = ({
  value,
  variant = 'large',
  className = '',
}) => {
  const sizeClasses = {
    large: {
      container: 'w-14 h-20 sm:w-16 sm:h-24 md:w-24 md:h-36 lg:w-28 lg:h-40',
      text: 'text-3xl sm:text-4xl md:text-6xl lg:text-7xl',
      opacity: 'opacity-100',
      bg: 'bg-surface-container-highest/60',
      border: 'border-primary/10',
    },
    medium: {
      container: 'w-12 h-18 sm:w-14 sm:h-20 md:w-20 md:h-32 lg:w-24 lg:h-36',
      text: 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl',
      opacity: 'opacity-90',
      bg: 'bg-surface-container-highest/50',
      border: 'border-primary/5',
    },
    small: {
      container: 'w-10 h-14 sm:w-12 sm:h-18 md:w-16 md:h-24 lg:w-20 lg:h-28',
      text: 'text-xl sm:text-2xl md:text-4xl lg:text-5xl',
      opacity: 'opacity-70',
      bg: 'bg-surface-container-highest/40',
      border: 'border-primary/5',
    },
    extraSmall: {
      container: 'w-8 h-12 sm:w-10 sm:h-14 md:w-14 md:h-20 lg:w-16 lg:h-24',
      text: 'text-lg sm:text-xl md:text-3xl lg:text-4xl',
      opacity: 'opacity-60',
      bg: 'bg-surface-container-highest/30',
      border: 'border-primary/5',
    },
  };

  const classes = sizeClasses[variant];

  return (
    <div
      className={`relative ${classes.container} ${classes.bg} backdrop-blur-xl rounded-xl ${classes.border} flip-split flex items-center justify-center ${classes.opacity} ${className}`}
    >
      <span
        className={`font-headline ${classes.text} font-bold tracking-tighter text-primary select-none`}
      >
        {value}
      </span>
    </div>
  );
};
