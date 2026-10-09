import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border border-[#c2c6d3]/60 bg-[#f0f3ff] px-4 py-2 text-sm text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] focus:border-transparent transition-all disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
