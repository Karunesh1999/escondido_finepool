import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-lg border border-[#c2c6d3]/60 bg-[#f0f3ff] px-4 py-3 text-sm text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] focus:border-transparent transition-all disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'
