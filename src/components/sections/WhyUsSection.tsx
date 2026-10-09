import React from 'react'
import { FileText, Headphones, Award } from 'lucide-react'

export const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <FileText className="w-7 h-7 text-[#003673]" />,
      title: 'Affordable & Transparent Pricing',
      description:
        'Detailed, upfront project line-item estimates with zero surprise contingencies. Flexible financing channels available so you never sacrifice finish quality.',
    },
    {
      icon: <Headphones className="w-7 h-7 text-[#003673]" />,
      title: 'Responsive & Dedicated Service',
      description:
        'Direct communication with your master builder. We pride ourselves on strict schedule adherence, daily job site cleanliness, and swift responses.',
    },
    {
      icon: <Award className="w-7 h-7 text-[#003673]" />,
      title: 'Decade+ Proven Expertise',
      description:
        'Licensed California contractors with 14+ continuous years in pool masonry, geotechnical stability, soil considerations, and advanced hydraulic engineering.',
    },
  ]

  return (
    <section id="why-us-section" className="w-full py-20 sm:py-28 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#003673] block mb-2">
            The Escondido Advantage
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
            Why Homeowners Trust Escondido Fine Pools
          </h2>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#f0f3ff] hover:bg-[#e7eeff] border border-[#dee8ff] transition-all duration-300 flex flex-col items-start hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-white text-[#003673] shadow-sm border border-[#e2d9d0]/60 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-3">
                {item.title}
              </h3>
              <p className="text-base text-[#424751] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
