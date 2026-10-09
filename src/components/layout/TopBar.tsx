import React from 'react'
import { MapPin, Clock, ShieldCheck, Phone } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#003673] text-white border-b border-[#0a4d9a]/40 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left Side: Address & Hours */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#a1c1ff]" />
            <span className="truncate max-w-[240px] sm:max-w-none">{COMPANY_INFO.address}</span>
          </span>
          <span className="hidden xl:flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-[#a1c1ff]" />
            <span>{COMPANY_INFO.hours}</span>
          </span>
        </div>

        {/* Right Side: License & Dual Direct Phones */}
        <div className="flex items-center gap-6">
          <span className="hidden md:flex items-center gap-1.5 font-medium tracking-wider uppercase text-white/90">
            <ShieldCheck className="w-3.5 h-3.5 text-[#a1c1ff]" />
            <span>{COMPANY_INFO.license}</span>
          </span>
          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#d7e3ff] transition-colors"
            title="Call Escondido Fine Pools"
          >
            <Phone className="w-3.5 h-3.5 text-[#a1c1ff]" />
            <span>{COMPANY_INFO.phone1}</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="hidden sm:inline">{COMPANY_INFO.phone2}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
