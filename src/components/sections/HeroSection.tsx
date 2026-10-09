import React from 'react'
import {
  Star,
  ArrowRight,
  Image as ImageIcon,
  ShieldCheck,
  History,
  Award,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#003673] pt-6 pb-20 md:pb-24">
      {/* Background with overflow-hidden contained only here so floating cards aren't clipped */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* High-Resolution Atmospheric Pool Photography Background */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-35 transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaBym5PWEgxv4fn0-NL1mz9hOrKt2JMFH9Nou8zvX27XwbfqgJ1ZXiIJmK5-H1kvwBxONjb8D4eBI-7NLJ01kTK4t1oXkoDbr3WQ_q2262Nfa1_0muGXaCjAYyL3M-JFL7ZjBwYTOQAw0fScxtQj3CO-w50AWpDXb31hwCjjm7609aM2tX53a3Eqi3c90J-UUdVwQk2q1G8WR9WUbymrDybBRhWS-fBkfIQssWRJk')`,
          }}
        />
        {/* Radiant Architectural Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003673] via-[#003673]/90 to-[#0a4d9a]/80" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-20 flex flex-col justify-center items-start min-h-[520px]">
        {/* Trust Rating Capsule */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md shadow-sm mb-6 border border-white/20 hover:bg-white/20 transition-colors">
          <div className="flex text-amber-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-300 stroke-amber-300" />
            ))}
          </div>
          <span className="text-xs font-semibold text-white tracking-wide uppercase font-display">
            Rated {COMPANY_INFO.rating} by {COMPANY_INFO.reviewsCount} Southern California Homeowners
          </span>
        </div>

        {/* Hero Headline & Editorial Subtitle */}
        <div className="max-w-3xl space-y-4 mb-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-sm">
            Transform Your Backyard With Custom Pool Construction &amp; Remodeling
          </h1>
          <p className="font-sans text-lg sm:text-xl text-[#abc7ff] leading-relaxed max-w-2xl font-normal">
            We specialize in premium pool construction and remodeling tailored to your lifestyle. Delivering durable, stylish, and functional outdoor sanctuaries across Escondido and San Diego County.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <a
            href="#estimate-section"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#003673] font-display text-sm font-bold uppercase tracking-wider shadow-[0_12px_30px_-8px_rgba(0,0,0,0.3)] hover:bg-[#dee8ff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Request a Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#gallery-section"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-display text-sm font-bold uppercase tracking-wider hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" />
            <span>Explore Our Work</span>
          </a>
        </div>
      </div>

      {/* Floating Value Pillar Banner: Elevated Architectural 3-Card Trio */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-32 md:-mb-36 z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Pillar 1: Licensed Contractor */}
          <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#e2d9d0] shadow-[0_15px_35px_-10px_rgba(10,77,154,0.18)] hover:shadow-[0_22px_45px_-10px_rgba(10,77,154,0.28)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-[#003673] via-[#0a4d9a] to-[#265dab]" />

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dee8ff] to-[#d8e3fb] border border-[#a1c1ff]/50 flex items-center justify-center text-[#003673] shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-[#003673] group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0a4d9a] font-display">
                    CA Licensed &amp; Bonded
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#111c2d] group-hover:text-[#003673] transition-colors leading-snug">
                  {COMPANY_INFO.license}
                </h4>
                <p className="text-xs text-[#424751] leading-relaxed mt-1">
                  {COMPANY_INFO.licenseDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 2: 14+ Years Experience */}
          <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#e2d9d0] shadow-[0_15px_35px_-10px_rgba(10,77,154,0.18)] hover:shadow-[0_22px_45px_-10px_rgba(10,77,154,0.28)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-[#0a4d9a] via-[#265dab] to-[#85c7ff]" />

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dee8ff] to-[#d8e3fb] border border-[#a1c1ff]/50 flex items-center justify-center text-[#003673] shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-[#003673] group-hover:text-white transition-all duration-300">
                <History className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0a4d9a] font-display">
                    Local Heritage
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#003673] bg-[#d5e3ff] px-2 py-0.5 rounded-full">
                    <Sparkles className="w-3 h-3 text-[#0a4d9a]" />
                    North County
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#111c2d] group-hover:text-[#003673] transition-colors leading-snug">
                  {COMPANY_INFO.experienceYears} Years Craftsmanship
                </h4>
                <p className="text-xs text-[#424751] leading-relaxed mt-1">
                  Specialized North County In-Ground Pool &amp; Spa Craftsmanship
                </p>
              </div>
            </div>
          </div>

          {/* Pillar 3: 100% Satisfaction */}
          <div className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-[#e2d9d0] shadow-[0_15px_35px_-10px_rgba(10,77,154,0.18)] hover:shadow-[0_22px_45px_-10px_rgba(10,77,154,0.28)] hover:-translate-y-1.5 transition-all duration-300">
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-[#003673] via-[#0a4d9a] to-[#265dab]" />

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#dee8ff] to-[#d8e3fb] border border-[#a1c1ff]/50 flex items-center justify-center text-[#003673] shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-[#003673] group-hover:text-white transition-all duration-300">
                <Award className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0a4d9a] font-display">
                    Quality Promise
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    Guaranteed
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-[#111c2d] group-hover:text-[#003673] transition-colors leading-snug">
                  100% Satisfaction Warranty
                </h4>
                <p className="text-xs text-[#424751] leading-relaxed mt-1">
                  Comprehensive Warranty on Surfaces, Plumbing &amp; Reinforced Shell
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
