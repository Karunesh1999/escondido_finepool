import React from 'react'
import {
  Wrench,
  Phone,
  MapPin,
  ArrowRight,
  PhoneCall,
  Clock,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

interface AboutCtaProps {
  onConsultationClick?: () => void
}

export const AboutCta: React.FC<AboutCtaProps> = ({ onConsultationClick }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#003673] text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Details */}
          <div className="flex flex-col max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a4d9a] text-[#85c7ff] font-display text-xs font-bold uppercase tracking-wider mb-5 w-fit border border-[#85c7ff]/30">
              <Wrench className="w-4 h-4 text-[#85c7ff]" />
              <span>Remodel Support &amp; Emergency Diagnostic</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Need Immediate Help or Planning a Complete Remodel?
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#abc7ff] leading-relaxed mb-8">
              Speak directly with our master pool builders today for an honest inspection and tailored estimate. No obligations, no pushy sales reps — just experienced aquatic craftsmanship.
            </p>

            {/* Direct Office & Phone Strip */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#d5e3ff]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#85c7ff]" />
                <div className="flex items-center gap-2 font-display font-bold">
                  <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone1}
                  </a>
                  <span className="text-white/40">|</span>
                  <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#85c7ff]" />
                <span className="text-[#abc7ff]">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Right Call to Action Buttons */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4">
            <button
              onClick={onConsultationClick}
              className="px-8 py-4 rounded-xl bg-white text-[#003673] font-display text-sm font-bold uppercase tracking-wider text-center hover:bg-[#dee8ff] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="px-8 py-4 rounded-xl bg-[#0a4d9a] text-white font-display text-sm font-bold uppercase tracking-wider text-center hover:bg-[#00537f] transition-all shadow-md flex items-center justify-center gap-2 border border-[#85c7ff]/30"
            >
              <PhoneCall className="w-4 h-4 text-[#85c7ff]" />
              <span>Call Now: {COMPANY_INFO.phone1}</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-center font-display text-xs font-semibold text-[#abc7ff] pt-1">
              <Clock className="w-3.5 h-3.5 text-[#85c7ff]" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
