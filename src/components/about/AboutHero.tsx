import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Award, ShieldCheck, Shield, MapPin, ChevronRight } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const AboutHero: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="relative w-full overflow-hidden bg-[#003673] text-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[#003673] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-6 text-[#abc7ff] font-display text-xs sm:text-sm font-semibold">
          <button
            onClick={() => {
              navigate('/')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#a1c1ff]" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#a1c1ff]/60" />
          <span className="text-white font-bold">About Us</span>
        </nav>

        <div className="max-w-4xl">
          {/* Anniversary Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00537f]/80 backdrop-blur-md text-[#cce5ff] font-display text-xs font-bold tracking-wider uppercase mb-5 border border-[#85c7ff]/30 shadow-sm">
            <Award className="w-4 h-4 text-[#85c7ff]" />
            <span>14-Year Anniversary of Excellence</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.14] mb-6 drop-shadow-sm">
            14 Years of Craftsmanship, Integrity &amp; Aquatic Excellence in North County
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#abc7ff] leading-relaxed mb-8 max-w-3xl">
            Learn about the dedicated artisans, master builders, and local specialists behind Southern California’s finest custom pool transformations and resort-grade living spaces.
          </p>

          {/* Trust Badges Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-display text-xs font-semibold border border-white/15 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#d5e3ff]" />
              <span>{COMPANY_INFO.license}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-display text-xs font-semibold border border-white/15 shadow-sm">
              <Shield className="w-4 h-4 text-[#d5e3ff]" />
              <span>Fully Bonded &amp; Insured</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-display text-xs font-semibold border border-white/15 shadow-sm">
              <MapPin className="w-4 h-4 text-[#d5e3ff]" />
              <span>North County Specialist (50-Mile Radius)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
