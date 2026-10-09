import React from 'react'
import { Award, ShieldCheck } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const GalleryWarrantyBanner: React.FC = () => {
  return (
    <section className="w-full py-10 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#dee8ff]/70 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#abc7ff]/60 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#003673] text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-8 h-8 text-[#abc7ff]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl sm:text-2xl text-[#111c2d] font-bold">
                Guaranteed Master Builder Structural Warranty
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#424751] max-w-2xl leading-relaxed">
                Every structural modification, Baja ledge integration, and shotcrete backfill is certified by {COMPANY_INFO.license} and backed by our comprehensive 10-year structural integrity guarantee.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 bg-white/80 px-5 py-3 rounded-xl border border-[#abc7ff]/40">
            <div className="flex flex-col text-left sm:text-right">
              <span className="font-display text-xs sm:text-sm font-bold text-[#003673]">
                Bonded &amp; Insured
              </span>
              <span className="font-display text-[11px] text-[#424751]">
                Worker&apos;s Comp &amp; $2M General Liability
              </span>
            </div>
            <ShieldCheck className="w-8 h-8 text-[#003673] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
