import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'glass' | 'gold'
}

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#003673] text-white',
    secondary: 'bg-[#d5e3ff] text-[#001b3c]',
    outline: 'border border-[#c2c6d3] text-[#424751]',
    glass: 'bg-white/15 backdrop-blur-md text-white border border-white/20',
    gold: 'bg-amber-100 text-amber-900 border border-amber-200',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}
