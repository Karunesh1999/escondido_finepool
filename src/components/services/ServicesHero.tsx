import React from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  ShieldCheck,
  Shield,
  Headphones,
  CheckCircle,
  Sparkles,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full bg-[#003673] text-white py-14 sm:py-20 lg:py-24 overflow-hidden">
      {/* Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d7e3ff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 font-display text-xs sm:text-sm text-[#abc7ff] mb-6"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#abc7ff]/60" />
          <span className="text-white font-bold">Services &amp; Remodeling</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Trust Pills */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#0a4d9a] text-[#85c7ff] font-display text-xs font-bold tracking-wider uppercase border border-[#85c7ff]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#85c7ff]" />
              <span>Full-Spectrum Aquatic Craftsmanship &amp; Remodeling</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.14] drop-shadow-sm">
              Architectural Pool Remodeling, Surface Mastery &amp; Modern Engineering.
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#abc7ff] leading-relaxed max-w-2xl">
              From bespoke Pebble Sheen aggregate and travertine pool coping resurfacing to structural depth conversions and ultra-quiet variable-speed filtration systems across Escondido and North County San Diego.
            </p>

            {/* Trust Validation Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="flex items-center gap-2 bg-[#003b5d]/80 px-3.5 py-2.5 rounded-xl border border-[#00537f] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#85c7ff] shrink-0" />
                <span className="font-display text-xs font-bold text-white tracking-wide">
                  {COMPANY_INFO.license.replace('CA ', '')}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#003b5d]/80 px-3.5 py-2.5 rounded-xl border border-[#00537f] shadow-sm">
                <Shield className="w-4 h-4 text-[#85c7ff] shrink-0" />
                <span className="font-display text-xs font-bold text-white tracking-wide">
                  Bonded &amp; Insured
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#003b5d]/80 px-3.5 py-2.5 rounded-xl border border-[#00537f] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#85c7ff] shrink-0" />
                <span className="font-display text-xs font-bold text-white tracking-wide">
                  Free Estimates
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#003b5d]/80 px-3.5 py-2.5 rounded-xl border border-[#00537f] shadow-sm">
                <Headphones className="w-4 h-4 text-[#85c7ff] shrink-0" />
                <span className="font-display text-xs font-bold text-white tracking-wide">
                  7-Day Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-white/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhzxqfWRPHWhQqBXKzd5UL1Y2hAi1OqOjIGAijueaS3o1QjX40CVlcDIPAUa1Y_WnnKgoBDeeTKL4SFNx1VDDOXG3pvrMd04XGd3WSX-FWm4i48l_V6W3cn0VnbB5WaIbtJrQUL2-EjQtaakbWGxeSDrj8arGpmZrZHxegrQ1E0pE_S4SWs9PzF-dQo_rr4-BNhzr_fNboTmc4kiebdx5nY50bnYXhsdzDi-pd2-U"
                alt="Bespoke luxury custom swimming pool renovation in Escondido California with modern pebble finish and travertine cantilever coping"
                className="w-full h-[360px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003673]/95 via-[#003673]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#85c7ff] animate-pulse"></span>
                  <span className="font-display text-[11px] font-bold uppercase tracking-widest text-[#abc7ff]">
                    Project Highlight • Bear Valley Springs
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                  Depth Reduction &amp; Pebble Azure Conversion
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#d5e3ff] mt-1 line-clamp-2">
                  Converted 9ft diving well to 5.5ft social play lounge with multi-zone LED automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
