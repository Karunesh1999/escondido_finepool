import React from 'react'
import { METRICS } from '@/data/siteData'

export const MetricsStrip: React.FC = () => {
  return (
    <section className="w-full bg-[#f0f3ff] pt-40 sm:pt-44 md:pt-48 pb-16 border-b border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {METRICS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#e2d9d0]/70 shadow-[0_4px_16px_rgba(10,77,154,0.06)] flex flex-col items-center hover:shadow-[0_8px_24px_rgba(10,77,154,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-display text-4xl sm:text-5xl font-bold text-[#003673] tracking-tight">
                {item.value}
              </span>
              <span className="font-display text-xs sm:text-sm text-[#111c2d] font-bold uppercase tracking-wider mt-2">
                {item.label}
              </span>
              <span className="text-xs text-[#737782] mt-1 font-sans">
                {item.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
