import React from 'react'
import { Calendar, PhoneCall, Clock, Zap } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const GalleryCtaBanner: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#003673] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a4d9a] text-white font-display text-xs font-bold uppercase tracking-widest shadow-sm border border-[#a1c1ff]/30">
          <Calendar className="w-3.5 h-3.5 text-[#abc7ff]" />
          <span>Free On-Site Diagnostic • 50-Mile Radius Around Escondido</span>
        </div>

        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Envisioning a Similar Transformation for Your Backyard Sanctuary?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#abc7ff] leading-relaxed max-w-2xl mx-auto">
            Schedule an on-site design consultation and material walkthrough. We inspect your existing pool shell, provide physical stone &amp; pebble swatches, and deliver a comprehensive fixed-price proposal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href="#estimate-section"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#estimate-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#003673] font-display text-sm sm:text-base font-bold shadow-xl hover:bg-[#dee8ff] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-[#003673]" />
            <span>Schedule On-Site Consultation</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#00537f] text-white font-display text-sm sm:text-base font-bold hover:bg-[#0a4d9a] border border-[#a1c1ff]/30 hover:-translate-y-0.5 transition-all cursor-pointer shadow-lg"
          >
            <PhoneCall className="w-5 h-5 text-[#85c7ff]" />
            <span>Call Builder {COMPANY_INFO.phone1}</span>
          </a>
        </div>

        {/* Operational Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-[#abc7ff] font-display text-xs">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#cce5ff]" />
            <span>{COMPANY_INFO.hours}</span>
          </span>
          <span className="hidden sm:inline text-[#737782]">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#cce5ff]" />
            <span>Same-Day Diagnostic Consultations Available</span>
          </span>
        </div>
      </div>
    </section>
  )
}
