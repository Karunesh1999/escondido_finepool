import React from 'react'
import { Target, Eye, Handshake, CheckCircle } from 'lucide-react'

export const MissionVision: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f3ff] border-y border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
            Foundational Principles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
            Our Guiding Purpose &amp; Future
          </h2>
          <p className="text-base text-[#424751] mt-3">
            Engineered precision meets artisan pride. Discover the principles steering every resurfacing and custom construction project we build.
          </p>
        </div>

        {/* Dual-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#e2d9d0]/70 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0a4d9a] text-white flex items-center justify-center mb-6 shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#003673]"></span>
                <span className="font-display text-xs font-bold tracking-widest text-[#003673] uppercase">
                  Purpose
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111c2d] mb-4">
                Our Mission
              </h3>
              <p className="text-base text-[#424751] leading-relaxed">
                Providing world-class pool remodeling services that blend handcrafted aesthetics with modern engineering. We are dedicated to revitalizing aquatic spaces in California, using premium materials and expert workmanship to ensure the safety, functionality, and beauty of every project.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#dee8ff] flex items-center gap-2.5 font-display text-xs font-bold text-[#003673] uppercase tracking-wider">
              <Handshake className="w-4 h-4 text-[#0a4d9a]" />
              <span>Uncompromising Structural Standards</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#e2d9d0]/70 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#3a5f94] text-white flex items-center justify-center mb-6 shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#3a5f94]"></span>
                <span className="font-display text-xs font-bold tracking-widest text-[#3a5f94] uppercase">
                  Ambition
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#111c2d] mb-4">
                Our Vision
              </h3>
              <p className="text-base text-[#424751] leading-relaxed">
                To solidify our position as the most recommended pool remodeling company in Southern California, expanding our legacy of excellence through constant innovation in pebble finishes and structural design, always synonymous with durability and elegance.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#dee8ff] flex items-center gap-2.5 font-display text-xs font-bold text-[#3a5f94] uppercase tracking-wider">
              <CheckCircle className="w-4 h-4 text-[#3a5f94]" />
              <span>The Gold Standard in Pebble &amp; Stone Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
