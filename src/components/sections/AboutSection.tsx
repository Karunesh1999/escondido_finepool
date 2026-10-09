import React from 'react'
import { Droplets, Check, PhoneCall, Sparkles } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="w-full py-20 sm:py-28 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visual: Custom Stone Masonry & Spa Work */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#e7eeff] border border-[#e2d9d0]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJB4x_3FpvPuEbK_WV6sh8t9wZLuia8iI6t9CYgFBB9xTnGb66FpumWtSB0OZ0o6Qz4JeYzec0Cb18UYXbXWbwxH6mvw3Xsix0bTKWsQhh8hDuNoR7QPwUCzsjn-tbcu9_49U2AQesgtmsvwRgc--4eUvl0WW002dcCa2rvy_9QN_K9cSvKk4z5GF32Mcm7opsFcK78P_bxY5waET0L59V3wWAg7shi7QcWobAmsw"
                alt="Artisanal custom rock grotto in-ground spa being renovated with sculpted natural sandstone coping in Escondido"
                className="w-full h-[460px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Inset Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#e2d9d0]/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#003673] uppercase tracking-widest block font-display">
                    Project Snapshot
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-[#111c2d]">
                    Artisanal Stone Spa Remodel
                  </span>
                </div>
                <span className="px-3 py-1 rounded-md bg-[#d5e3ff] text-[#001b3c] font-display text-xs font-semibold">
                  Escondido, CA
                </span>
              </div>
            </div>

            {/* Decorative Offset Card Behind */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-40 h-40 bg-[#d5e3ff] -z-10 rounded-2xl opacity-70" />
          </div>

          {/* Right Content: The Craftsmanship Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#003673]">
              <Droplets className="w-4 h-4 text-[#0a4d9a]" />
              <span>About Escondido Fine Pools</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight leading-tight">
              Mastery In Renovation: 14 Years Transforming Lifestyles In Escondido
            </h2>

            <p className="text-base text-[#424751] leading-relaxed">
              At Escondido Fine Pools, we don't just repair pools; we restore the heart of your home's outdoor living space. Founded on a commitment to luxury finishes and definitive structural solutions, our craftsmen bring unmatched engineering and aesthetic elegance to every project across Escondido and surrounding North County communities.
            </p>

            {/* Precision Bullet Stack */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f0f3ff] transition-colors border border-transparent hover:border-[#dee8ff]">
                <div className="w-8 h-8 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Premium Quartz &amp; Pebble Surface Finishes
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424751] mt-0.5">
                    Silky smooth aggregates with resilient lifetime color pigments and stain resistance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f0f3ff] transition-colors border border-transparent hover:border-[#dee8ff]">
                <div className="w-8 h-8 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Custom Rockwork, Waterfalls &amp; Integrated Spas
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424751] mt-0.5">
                    Natural flagstone coping, hydro-carved grottos, swim-up perches, and ambient spillways.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f0f3ff] transition-colors border border-transparent hover:border-[#dee8ff]">
                <div className="w-8 h-8 rounded-full bg-[#d5e3ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Energy-Efficient Pumps, Filtration &amp; Smart Controls
                  </h4>
                  <p className="text-xs sm:text-sm text-[#424751] mt-0.5">
                    Next-gen variable frequency pumps, salt sanitation, and smartphone heating interfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Hub */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services-section"
                className="px-7 py-3.5 rounded-lg bg-[#003673] text-white font-display text-sm font-bold uppercase tracking-wider shadow-md hover:bg-[#0a4d9a] hover:-translate-y-0.5 transition-all"
              >
                Learn More About Us
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone1Raw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#e7eeff] text-[#003673] font-display text-sm font-bold hover:bg-[#dee8ff] transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#0a4d9a]" />
                <span>{COMPANY_INFO.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
