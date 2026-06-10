import React from 'react';

/**
 * Чудо Садик — Badge
 * Small rounded status/label pill. Solid or soft tint.
 */
export function Badge({
  children,
  color = 'primary',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    primary: { solid: 'var(--color-primary)', soft: 'var(--pink-50)', softText: 'var(--pink-600)' },
    secondary: { solid: 'var(--color-secondary)', soft: 'var(--orange-50)', softText: 'var(--orange-600)' },
    accent: { solid: 'var(--color-accent)', soft: 'var(--purple-50)', softText: 'var(--purple-600)' },
    sun: { solid: 'var(--yellow-400)', soft: 'var(--yellow-100)', softText: 'var(--yellow-600)' },
    success: { solid: 'var(--color-success)', soft: 'var(--mint-50)', softText: 'var(--mint-500)' },
    info: { solid: 'var(--color-info)', soft: 'var(--sky-50)', softText: 'var(--sky-500)' },
    neutral: { solid: 'var(--ink-700)', soft: 'var(--sand-100)', softText: 'var(--ink-700)' },
  };
  const sizes = {
    sm: { padding: '3px 9px', fontSize: '11px', gap: '4px' },
    md: { padding: '5px 12px', fontSize: '13px', gap: '5px' },
    lg: { padding: '7px 15px', fontSize: '14px', gap: '6px' },
  };
  const c = palette[color] || palette.primary;
  const isSolid = variant === 'solid';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizes[size].gap,
        fontFamily: 'var(--font-body)',
        fontWeight: 800,
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        background: isSolid ? c.solid : c.soft,
        color: isSolid ? '#fff' : c.softText,
        ...sizes[size],
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
    </span>
  );
}
