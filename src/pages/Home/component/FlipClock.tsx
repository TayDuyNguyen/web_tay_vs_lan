import React from 'react';
import { FlipDigit } from './FlipDigit';

export interface TimeValue {
  digits: string[];
  label: string;
}

export interface FlipClockProps {
  days: TimeValue;
  hours: TimeValue;
  minutes: TimeValue;
  seconds: TimeValue;
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

export const FlipClock: React.FC<FlipClockProps> = ({
  days,
  hours,
  minutes,
  seconds,
  title,
  subtitle,
  variant = 'primary',
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Header */}
      {(title || subtitle) && (
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          {title && (
            <h2
              className={`font-headline ${
                isPrimary ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-on-surface/90'
              } tracking-tight uppercase`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <span
              className={`font-label text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] ${
                isPrimary ? 'text-on-surface-variant' : 'text-on-surface-variant/70'
              } uppercase`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Clock Display */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 px-2">
        {/* Days */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex gap-1 sm:gap-1">
            {days.digits.map((digit, index) => (
              <FlipDigit
                key={`day-${index}`}
                value={digit}
                variant={isPrimary ? 'large' : 'medium'}
              />
            ))}
          </div>
          <span
            className={`font-label text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${
              isPrimary ? 'text-on-surface-variant' : 'text-on-surface-variant/60'
            } uppercase`}
          >
            {days.label}
          </span>
        </div>

        {/* Separator Dots - Hidden on small screens */}
        <div className="hidden lg:flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${isPrimary ? 'bg-primary/30' : 'bg-primary/20'}`}></div>
          <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full ${isPrimary ? 'bg-primary/30' : 'bg-primary/20'}`}></div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
          <div className="flex gap-1 sm:gap-1">
            {hours.digits.map((digit, index) => (
              <FlipDigit
                key={`hour-${index}`}
                value={digit}
                variant={isPrimary ? 'large' : 'medium'}
              />
            ))}
          </div>
          <span
            className={`font-label text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${
              isPrimary ? 'text-on-surface-variant' : 'text-on-surface-variant/60'
            } uppercase`}
          >
            {hours.label}
          </span>
        </div>

        {/* Minutes & Seconds - Wrapped on smaller screens */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8">
          {/* Minutes */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
            <div className="flex gap-1 sm:gap-1">
              {minutes.digits.map((digit, index) => (
                <FlipDigit
                  key={`minute-${index}`}
                  value={digit}
                  variant={isPrimary ? 'large' : 'medium'}
                />
              ))}
            </div>
            <span
              className={`font-label text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${
                isPrimary ? 'text-on-surface-variant' : 'text-on-surface-variant/60'
              } uppercase`}
            >
              {minutes.label}
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
            <div className="flex gap-1 sm:gap-1">
              {seconds.digits.map((digit, index) => (
                <FlipDigit
                  key={`second-${index}`}
                  value={digit}
                  variant={isPrimary ? 'small' : 'extraSmall'}
                  className={isPrimary ? 'kinetic-glow' : ''}
                />
              ))}
            </div>
            <span
              className={`font-label text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] ${
                isPrimary ? 'text-on-surface-variant' : 'text-on-surface-variant/60'
              } uppercase`}
            >
              {seconds.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipClock;
