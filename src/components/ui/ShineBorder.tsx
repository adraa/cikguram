'use client';

import * as React from 'react';

/** Google brand order: blue → red → yellow → green (only stops in the shine ring). */
export const SHINE_BORDER_GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'] as const;

export interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border thickness in px @default 1 */
  borderWidth?: number;
  /** Animation loop length in seconds @default 14 */
  duration?: number;
  /** Gradient colors for radial stops. Default: Google four-color only. */
  shineColor?: string | readonly string[];
}

/**
 * Magic UI–style shine border: radial gradient + moving background-position.
 * @see https://magicui.design/docs/components/shine-border
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = SHINE_BORDER_GOOGLE_COLORS,
  className = '',
  style,
  ...props
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(',') : shineColor;
  const mergedClass = [
    'pointer-events-none absolute inset-0 h-full w-full rounded-[inherit] will-change-[background-position]',
    'motion-safe:shine-border-animate motion-reduce:animate-none',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      style={
        {
          '--border-width': `${borderWidth}px`,
          '--duration': `${duration}s`,
          backgroundImage: `radial-gradient(transparent,transparent, ${colors},transparent,transparent)`,
          backgroundSize: '300% 300%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 'var(--border-width)',
          ...style,
        } as React.CSSProperties
      }
      className={mergedClass}
      {...props}
    />
  );
}
