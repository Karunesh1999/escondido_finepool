import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Palette,
  Compass,
  HardHat,
  Sparkles,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const GalleryHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#003673] text-white py-16 sm:py-20 lg:py-24 border-b border-[#0a4d9a]/30">
      {/* 1. Atmospheric Photographic Pool Texture Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 transform scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaBym5PWEgxv4fn0-NL1mz9hOrKt2JMFH9Nou8zvX27XwbfqgJ1ZXiIJmK5-H1kvwBxONjb8D4eBI-7NLJ01kTK4t1oXkoDbr3WQ_q2262Nfa1_0muGXaCjAYyL3M-JFL7ZjBwYTOQAw0fScxtQj3CO-w50AWpDXb31hwCjjm7609aM2tX53a3Eqi3c90J-UUdVwQk2q1G8WR9WUbymrDybBRhWS-fBkfIQssWRJk')`,
        }}
      />

      {/* 2. Architectural Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003673] via-[#003673]/95 to-[#0a4d9a]/85 pointer-events-none" />

      {/* 3. Precision Blueprint Grid Matrix */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d7e3ff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 4. Ambient Radiant Light Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00537f]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#002b5c]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Breadcrumb Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-display text-xs sm:text-sm text-[#abc7ff] mb-6"
        >
          <Link
            to="/"
            className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <Home className="w-4 h-4 text-[#a1c1ff]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#abc7ff]/60" />
          <span className="text-white font-bold">Portfolio &amp; Project Gallery</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00537f]/80 backdrop-blur-md text-[#cce5ff] font-display text-xs font-bold tracking-wider uppercase w-fit border border-[#85c7ff]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#85c7ff]" />
              <span>Master Builder Transformations • 100+ North County Projects</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-sm">
              Curated Aquatic Architecture &amp; Remodeling Transformations
            </h1>

            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#abc7ff] max-w-2xl leading-relaxed font-normal">
              Explore authentic before-and-after pool resurfacing, structural depth modifications, Baja tanning shelves, and custom rock spa restorations across North County San Diego.
            </p>

            {/* Clean Action Button */}
            <div className="pt-2">
              <a
                href="#estimate-section"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#003673] font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#dee8ff] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Request a Free Estimate</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Trust Badges Strip (2x2 Matrix) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-display text-xs">
              <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    {COMPANY_INFO.license}
                  </span>
                  <span className="text-[11px] text-[#abc7ff] truncate">Licensed &amp; Bonded C-53</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                  <Palette className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    Artisanal Pebble &amp; Mosaics
                  </span>
                  <span className="text-[11px] text-[#abc7ff] truncate">Handcrafted Finishes</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    50-Mile Radius Service
                  </span>
                  <span className="text-[11px] text-[#abc7ff] truncate">North County Specialists</span>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                  <HardHat className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    Direct Builder Oversight
                  </span>
                  <span className="text-[11px] text-[#abc7ff] truncate">Zero Middlemen</span>
                </div>
              </div>
            </div>

            {/* Reassuring Quality Guarantee Note */}
            <div className="px-4 py-2.5 rounded-xl bg-[#002752]/70 backdrop-blur-md border border-[#85c7ff]/20 flex items-center justify-between text-[11px] text-[#abc7ff]">
              <span>✓ 100% In-House Plastering &amp; Tile Artisans</span>
              <span className="font-semibold text-white">500+ Completed Pools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
