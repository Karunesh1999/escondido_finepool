import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Compass,
  FileCheck2,
  Clock,
  Phone,
  Sparkles,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const ContactHero: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Reassurance Status Bar */}
      <section className="w-full bg-[#002752] border-b border-[#0a4d9a]/30 py-2.5 text-xs text-[#abc7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Serving North County San Diego:</span>
            <span className="hidden sm:inline text-[#abc7ff]">Escondido, Rancho Bernardo, Poway, San Marcos, Encinitas &amp; beyond</span>
            <span className="sm:hidden text-[#abc7ff]">North County &amp; surroundings</span>
          </div>

          <div className="flex items-center gap-4 font-medium">
            <span className="hidden md:inline font-semibold text-white/90">{COMPANY_INFO.license}</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-[#abc7ff]">
              <Clock className="w-3.5 h-3.5 text-[#85c7ff]" />
              {COMPANY_INFO.hours}
            </span>
            <span className="text-white/30">•</span>
            <a
              href={`tel:${COMPANY_INFO.phone1Raw}`}
              className="text-[#85c7ff] font-bold hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              {COMPANY_INFO.phone1}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Architectural Contact Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#003673] text-white py-14 sm:py-20 lg:py-24 border-b border-[#0a4d9a]/40">
        {/* 1. Atmospheric Photographic Pool Texture Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 transform scale-105 pointer-events-none"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-display text-xs sm:text-sm text-[#abc7ff] mb-6">
            <Link
              to="/"
              className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <Home className="w-4 h-4 text-[#a1c1ff]" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#abc7ff]/60" />
            <span className="text-white font-bold">Contact Us</span>
          </nav>

          {/* Eyebrow Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00537f]/80 backdrop-blur-md text-[#cce5ff] font-display text-xs font-bold uppercase tracking-wider border border-[#85c7ff]/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#85c7ff]" />
              <span>Free On-Site Consultations</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-display text-xs font-semibold border border-white/15 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#85c7ff]" />
              <span>CA License #1145783 • Fully Bonded &amp; Insured</span>
            </div>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.14] mb-5 drop-shadow-sm">
              Schedule Your Free In-Home Consultation &amp; Estimate
            </h1>
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#abc7ff] leading-relaxed max-w-3xl font-normal">
              Have questions about your pool remodel, plastering, equipment upgrades, or a custom new build? Contact our team directly to discuss your project or book a complimentary yard walkthrough.
            </p>
          </div>

          {/* Trust Credential Matrix Chips (4 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/15">
            <div className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white leading-snug font-display">Open 7 Days</span>
                <span className="text-xs text-[#abc7ff] truncate">8:00 AM – 7:00 PM</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white leading-snug font-display">{COMPANY_INFO.serviceRadius} Radius</span>
                <span className="text-xs text-[#abc7ff] truncate">North County San Diego</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white leading-snug font-display">Clear Written Quotes</span>
                <span className="text-xs text-[#abc7ff] truncate">No Hidden Surcharges</span>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#85c7ff]/40 shadow-sm transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#00537f]/80 border border-[#85c7ff]/30 flex items-center justify-center text-[#85c7ff] group-hover:scale-105 group-hover:text-white transition-all shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-white leading-snug font-display">14+ Years Local</span>
                <span className="text-xs text-[#abc7ff] truncate">500+ Satisfied Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
