import React from 'react'
import {
  Mountain,
  Headphones,
  Cpu,
  FileSpreadsheet,
  ShieldCheck,
  Info,
} from 'lucide-react'

export const WhyChooseUsPillars: React.FC = () => {
  const pillars = [
    {
      id: '01',
      title: 'Proven Local Experience',
      icon: <Mountain className="w-6 h-6 text-[#003673]" />,
      desc: 'We understand California’s unique soil, seismic, and climate conditions. 14 years of successful projects back every diagnosis, foundation repair, and custom aquatic pool design we provide across North County.',
    },
    {
      id: '02',
      title: '7-Day Availability & Responsiveness',
      icon: <Headphones className="w-6 h-6 text-[#003673]" />,
      desc: 'Direct communication with our master builder Monday through Sunday, 8:00 AM – 7:00 PM. No automated answering services or weeks waiting for a consultation callback.',
    },
    {
      id: '03',
      title: 'Engineering-Focused Solutions',
      icon: <Cpu className="w-6 h-6 text-[#003673]" />,
      desc: 'Definitive structural reinforcement, advanced hydraulic re-plumbing, zero-leak skimmer conversions, and high-efficiency variable speed systems engineered to drastically slash your monthly energy utility costs.',
    },
    {
      id: '04',
      title: 'Honest & Transparent Estimates',
      icon: <FileSpreadsheet className="w-6 h-6 text-[#003673]" />,
      desc: 'Detailed, transparent line-item estimates with zero surprise contingencies, upfront pricing guarantees, and clearly mapped phases from demolition day to initial pool filling.',
    },
    {
      id: '05',
      title: 'Uncompromising Quality Commitment',
      icon: <ShieldCheck className="w-6 h-6 text-[#003673]" />,
      desc: 'Artisan-grade pebble aggregate, hand-pressed waterline glass tiles, precision travertine coping, and rock-solid warranties that provide genuine lifelong peace of mind.',
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Pillar Overview Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-2 text-[#003673] font-display text-xs font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#003673]"></span>
              <span>Distinct Advantages</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight mb-5 leading-tight">
              Why Choose Escondido Fine Pools? (Benefits)
            </h2>

            <p className="text-base text-[#424751] leading-relaxed mb-8">
              We operate with clear architectural transparency. Rather than subcontracting your dreams through third-party brokers, every single evaluation, plumbing overhaul, and pebble aggregate trowel is overseen directly by our veteran craftspeople.
            </p>

            {/* Performance Stat Card */}
            <div className="bg-[#dee8ff]/50 rounded-2xl p-6 sm:p-7 flex flex-col gap-5 border border-[#dee8ff] shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-base font-bold text-[#111c2d]">
                  North County Performance
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#003673] text-white font-display text-[10px] font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>

              {/* Progress Visualization */}
              <div className="flex flex-col gap-4 text-xs font-display">
                <div>
                  <div className="flex justify-between text-[#424751] mb-1.5 font-semibold">
                    <span>Soil &amp; Seismic Adaptability</span>
                    <span className="font-bold text-[#003673]">100% Guaranteed</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#d8e3fb] overflow-hidden">
                    <div className="h-full bg-[#003673] rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#424751] mb-1.5 font-semibold">
                    <span>On-Schedule Project Delivery</span>
                    <span className="font-bold text-[#003673]">98.4%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#d8e3fb] overflow-hidden">
                    <div className="h-full bg-[#003673] rounded-full transition-all duration-1000" style={{ width: '98.4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[#424751] mb-1.5 font-semibold">
                    <span>Direct Master Builder Contact</span>
                    <span className="font-bold text-[#003673]">7 Days / Wk</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#d8e3fb] overflow-hidden">
                    <div className="h-full bg-[#003673] rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[#737782] text-xs font-medium border-t border-[#dee8ff]">
                <Info className="w-4 h-4 text-[#003673] shrink-0" />
                <span>Based on verified North County residential contracts (2010–2025).</span>
              </div>
            </div>
          </div>

          {/* 5-Pillar Structured List Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white border border-[#e2d9d0]/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4 sm:gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#dee8ff] text-[#003673] flex items-center justify-center shrink-0">
                  {pillar.icon}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="font-display text-xs text-[#003673] font-bold uppercase tracking-wider">
                      PILLAR {pillar.id}
                    </span>
                    <span className="text-[#c2c6d3]">•</span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#111c2d]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#424751] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
