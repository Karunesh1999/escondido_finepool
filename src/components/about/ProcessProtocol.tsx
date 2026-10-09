import React from 'react'
import {
  Compass,
  Search,
  PenTool,
  Hammer,
  Sparkles,
} from 'lucide-react'

export const ProcessProtocol: React.FC = () => {
  const steps = [
    {
      step: '01',
      phase: 'Phase 1: Verification',
      title: 'On-Site Diagnostic & Soil Check',
      desc: 'In-depth structural scan of shell density, surrounding soil hydrology, leak history, and plumbing infrastructure.',
      icon: <Search className="w-5 h-5 text-[#737782]" />,
    },
    {
      step: '02',
      phase: 'Phase 2: Custom Design',
      title: 'Engineering & Material Selection',
      desc: 'Material curation with natural pebble aggregates, custom waterline tiles, travertine pavers, and 3D architectural alignment.',
      icon: <PenTool className="w-5 h-5 text-[#737782]" />,
    },
    {
      step: '03',
      phase: 'Phase 3: Craftsmanship',
      title: 'Artisan Pebble & Stone Execution',
      desc: 'Expert pneumatic pebble application, handcrafted coping stone alignment, and precision mortar hand-troweling by master builders.',
      icon: <Hammer className="w-5 h-5 text-[#737782]" />,
    },
    {
      step: '04',
      phase: 'Phase 4: Commissioning',
      title: 'Chemical Balance & Lifetime Handover',
      desc: 'Water startup balancing, 28-day hydration schedule monitoring, client orientation, and activation of lifetime structural warranty.',
      icon: <Sparkles className="w-5 h-5 text-[#737782]" />,
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f3ff] border-y border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
              The Escondido Standard
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
              Our 4-Stage Architectural Protocol
            </h2>
            <p className="text-base text-[#424751] mt-3">
              Every renovation undergoes our stringent quality check sequence, eliminating risks and assuring structural integrity for decades to come.
            </p>
          </div>
          <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-[#003673] bg-white px-4 py-2.5 rounded-xl border border-[#dee8ff] shadow-sm">
            <Compass className="w-4 h-4 text-[#0a4d9a]" />
            <span>Engineered Precision</span>
          </div>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#e2d9d0]/70 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-xl bg-[#003673] text-white flex items-center justify-center font-display text-sm font-bold shadow-md">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#f0f3ff] flex items-center justify-center group-hover:bg-[#dee8ff] transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-[#111c2d] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#424751] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dee8ff] text-xs font-bold text-[#003673] uppercase tracking-wider font-display">
                {item.phase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
