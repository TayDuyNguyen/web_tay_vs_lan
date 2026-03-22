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
      <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 px-1 sm:px-2 md:px-4 w-full max-w-full">
        {/* Days */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 relative p-2 sm:p-3 md:p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex gap-0.5 sm:gap-1">
            {days.digits.map((digit, index) => (
              <FlipDigit
                key={`day-${index}`}
                value={digit}
                variant={isPrimary ? 'large' : 'medium'}
              />
            ))}
          </div>
          <span
            className={`font-label text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] ${
              isPrimary ? 'text-primary font-semibold' : 'text-on-surface-variant/60'
            } uppercase`}
          >
            {days.label}
          </span>
          {/* Underline for days */}
          <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isPrimary ? 'bg-primary/30' : 'bg-on-surface-variant/20'} rounded-full`}></div>
        </div>

        {/* Separator Dots */}
        <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-6">
          <div className={`w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full ${isPrimary ? 'bg-primary/50' : 'bg-primary/30'} animate-pulse`}></div>
          <div className={`w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full ${isPrimary ? 'bg-primary/50' : 'bg-primary/30'} animate-pulse`}></div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 relative p-2 sm:p-3 md:p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex gap-0.5 sm:gap-1">
            {hours.digits.map((digit, index) => (
              <FlipDigit
                key={`hour-${index}`}
                value={digit}
                variant={isPrimary ? 'large' : 'medium'}
              />
            ))}
          </div>
          <span
            className={`font-label text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] ${
              isPrimary ? 'text-secondary font-semibold' : 'text-on-surface-variant/60'
            } uppercase`}
          >
            {hours.label}
          </span>
          {/* Underline for hours */}
          <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isPrimary ? 'bg-secondary/30' : 'bg-on-surface-variant/20'} rounded-full`}></div>
        </div>

        {/* Minutes & Seconds - Wrapped on smaller screens */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          {/* Minutes */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 relative p-2 sm:p-3 md:p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex gap-0.5 sm:gap-1">
              {minutes.digits.map((digit, index) => (
                <FlipDigit
                  key={`minute-${index}`}
                  value={digit}
                  variant={isPrimary ? 'large' : 'medium'}
                />
              ))}
            </div>
            <span
              className={`font-label text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] ${
                isPrimary ? 'text-on-surface-variant font-semibold' : 'text-on-surface-variant/60'
              } uppercase`}
            >
              {minutes.label}
            </span>
            {/* Underline for minutes */}
            <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isPrimary ? 'bg-on-surface-variant/30' : 'bg-on-surface-variant/20'} rounded-full`}></div>
          </div>

          {/* Separator between minutes and seconds */}
          <div className="flex flex-col gap-0.5 sm:gap-1 mb-2 sm:mb-3">
            <div className={`w-0.5 h-0.5 rounded-full ${isPrimary ? 'bg-primary/40' : 'bg-primary/20'}`}></div>
            <div className={`w-0.5 h-0.5 rounded-full ${isPrimary ? 'bg-primary/40' : 'bg-primary/20'}`}></div>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3 relative p-2 sm:p-3 md:p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex gap-0.5 sm:gap-1">
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
              className={`font-label text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] ${
                isPrimary ? 'text-accent font-semibold animate-pulse' : 'text-on-surface-variant/60'
              } uppercase`}
            >
              {seconds.label}
            </span>
            {/* Underline for seconds with animation */}
            <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isPrimary ? 'bg-accent/50 animate-pulse' : 'bg-on-surface-variant/20'} rounded-full`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipClock;
