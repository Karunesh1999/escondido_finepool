import React from 'react'
import {
  ClipboardCheck,
  Palette,
  Hammer,
  ThumbsUp,
} from 'lucide-react'

export const RemodelingProcessSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'On-Site Diagnostic & Inspection',
      desc: 'We physically test hollow plaster areas, inspect bond beams for structural fissures, assess hydraulic flow, and listen to your remodel goals directly at your home.',
      badge: 'Free Detailed Estimate',
      icon: <ClipboardCheck className="w-5 h-5 text-[#003673]" />,
    },
    {
      num: '02',
      title: 'Materials & Design Palette',
      desc: 'Touch physical samples of pebble aggregates, Spanish waterline tiles, and travertine coping. We align textures, colors, and lighting to match your outdoor architecture.',
      badge: 'Curated Tile & Stone Kits',
      icon: <Palette className="w-5 h-5 text-[#003673]" />,
    },
    {
      num: '03',
      title: 'Artisan Execution & Oversight',
      desc: 'Licensed crews handle hydro-demolition, shotcrete re-bar modification, tile setting, and pneumatic pebble application with daily project supervisor check-ins.',
      badge: 'CA Lic #1145783 Supervised',
      icon: <Hammer className="w-5 h-5 text-[#003673]" />,
    },
    {
      num: '04',
      title: 'Startup & Satisfaction Sign-off',
      desc: 'We oversee the critical initial 7-day chemical hydration curve (brushing, calcium balance, pH stabilization) so your new finish cures silky smooth and stays immaculate.',
      badge: '100% Final Walkthrough',
      icon: <ThumbsUp className="w-5 h-5 text-[#003673]" />,
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
            Transparent Execution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
            Our 4-Step Artisanal Remodeling Process
          </h2>
          <p className="text-base text-[#424751] mt-3">
            From the initial on-site physical evaluation to the crystal-clear chemical start-up, we provide a smooth, stress-free construction journey.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-[#abc7ff] leading-none">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#dee8ff] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-[#111c2d] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[#424751] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#dee8ff] text-xs font-bold text-[#003673] uppercase tracking-wider font-display">
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
