import React from 'react'
import {
  SlidersHorizontal,
  Paintbrush,
  Layers,
  Wrench,
  Shield,
  Phone,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const ServicesStickyNav: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="sticky top-[120px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#e2d9d0]/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <span className="font-display text-xs uppercase tracking-wider text-[#737782] font-bold hidden md:inline-flex items-center gap-1.5 shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-[#003673]" />
          <span>Navigate Services</span>
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollTo('#surface-remodeling')}
            className="px-4 py-2 rounded-full bg-[#f0f3ff] text-[#111c2d] hover:bg-[#003673] hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Paintbrush className="w-3.5 h-3.5" />
            <span>01. Surface Remodeling</span>
          </button>

          <button
            onClick={() => scrollTo('#structural-design')}
            className="px-4 py-2 rounded-full bg-[#f0f3ff] text-[#111c2d] hover:bg-[#003673] hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>02. Structural &amp; Baja Shelves</span>
          </button>

          <button
            onClick={() => scrollTo('#critical-equipment')}
            className="px-4 py-2 rounded-full bg-[#f0f3ff] text-[#111c2d] hover:bg-[#003673] hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>03. Hydraulic &amp; Equipment</span>
          </button>

          <button
            onClick={() => scrollTo('#mastic-safety')}
            className="px-4 py-2 rounded-full bg-[#f0f3ff] text-[#111c2d] hover:bg-[#003673] hover:text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>04. Mastic &amp; Safety</span>
          </button>
        </div>

        <a
          href={`tel:${COMPANY_INFO.phone1Raw}`}
          className="hidden xl:inline-flex items-center gap-1.5 text-[#003673] font-display text-xs font-bold hover:underline shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-[#0a4d9a]" />
          <span>{COMPANY_INFO.phone1}</span>
        </a>
      </div>
    </section>
  )
}
