import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'white'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

    const variantStyles = {
      default:
        'bg-[#003673] text-white hover:bg-[#0a4d9a] shadow-[0_8px_20px_-4px_rgba(10,77,154,0.35)] hover:-translate-y-0.5 active:translate-y-0',
      secondary:
        'bg-[#dee8ff] text-[#003673] hover:bg-[#d5e3ff]',
      outline:
        'border-2 border-[#003673] text-[#003673] hover:bg-[#f5efeb]',
      ghost:
        'text-[#111c2d] hover:bg-[#f0f3ff]',
      glass:
        'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20',
      white:
        'bg-white text-[#003673] hover:bg-[#dee8ff] shadow-xl hover:-translate-y-0.5',
    }

    const sizeStyles = {
      default: 'h-11 px-5 py-2.5 text-sm',
      sm: 'h-9 px-3.5 py-1.5 text-xs',
      lg: 'h-13 px-8 py-3.5 text-base',
      icon: 'h-10 w-10 p-0',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
