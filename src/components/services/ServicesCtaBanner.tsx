import React from 'react'
import { Calendar, PhoneCall, Phone, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

interface ServicesCtaBannerProps {
  onScheduleConsult?: () => void
}

export const ServicesCtaBanner: React.FC<ServicesCtaBannerProps> = ({
  onScheduleConsult,
}) => {
  return (
    <section className="w-full bg-[#003673] text-white py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Details */}
          <div className="flex flex-col gap-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-[#003b5d] font-display text-xs font-bold text-[#cce5ff] border border-[#00537f] shadow-sm">
              <Clock className="w-4 h-4 text-[#85c7ff]" />
              <span>Monday – Sunday: 8:00 AM – 7:00 PM • Prompt Local Estimates</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Need Immediate Assistance or Ready for a Detailed Project Estimate?
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#abc7ff] leading-relaxed">
              Speak directly with our Master Builder today. We review your existing pool, provide physical material samples, and map out clear fixed-price pricing for your sanctuary.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 font-display text-sm sm:text-base text-white font-bold mt-2">
              <a
                className="flex items-center gap-2 hover:text-[#d7e3ff] transition-colors"
                href={`tel:${COMPANY_INFO.phone1Raw}`}
              >
                <Phone className="w-4 h-4 text-[#85c7ff]" />
                <span>{COMPANY_INFO.phone1}</span>
              </a>
              <span className="text-[#85c7ff]">•</span>
              <a
                className="flex items-center gap-2 hover:text-[#d7e3ff] transition-colors"
                href={`tel:${COMPANY_INFO.phone2Raw}`}
              >
                <Phone className="w-4 h-4 text-[#85c7ff]" />
                <span>{COMPANY_INFO.phone2}</span>
              </a>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onScheduleConsult}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#003673] font-display text-sm font-bold uppercase tracking-wider hover:bg-[#dee8ff] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#003673]" />
              <span>Schedule In-Home Consult</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0a4d9a] text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-[#00537f] transition-all shadow-md flex items-center justify-center gap-2.5 border border-[#85c7ff]/30"
            >
              <PhoneCall className="w-5 h-5 text-[#85c7ff]" />
              <span>Call Master Builder</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
