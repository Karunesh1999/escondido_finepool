import React from 'react'
import { Phone, Smartphone } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const ContactQuickCallBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#003673] text-white py-12 border-t border-[#0a4d9a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col text-center md:text-left">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Prefer to speak directly with an estimator right now?
          </h3>
          <p className="text-sm text-[#abc7ff] mt-1.5">
            Our field phone lines are open 7 days a week from 8:00 AM until 7:00 PM.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="px-6 py-3.5 rounded-xl bg-white text-[#003673] text-sm font-bold shadow-md hover:bg-[#dee8ff] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-[#003673]" />
            <span>{COMPANY_INFO.phone1}</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone2Raw}`}
            className="px-6 py-3.5 rounded-xl bg-[#0a4d9a] text-white text-sm font-bold border border-[#a1c1ff]/30 hover:bg-[#3a5f94] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <Smartphone className="w-4 h-4" />
            <span>{COMPANY_INFO.phone2}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
