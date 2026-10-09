import React from 'react'
import { Sparkles, Layers, Wrench, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/siteData'

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#003673]" />
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#003673]" />
      case 'Wrench':
      default:
        return <Wrench className="w-6 h-6 text-[#003673]" />
    }
  }

  const getActionText = (id: string) => {
    if (id === 'surface-remodeling') return 'Explore Finishes'
    if (id === 'structural-modifications') return 'View Custom Designs'
    return 'Learn More'
  }

  return (
    <section id="services-section" className="w-full py-20 sm:py-28 bg-[#f0f3ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#003673] block mb-2">
            Our Specialties
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
            Exceptional Unmatched Quality Services
          </h2>
          <p className="text-base text-[#424751] mt-3">
            From full-scale luxury conversions to critical equipment overhauls, explore our comprehensive pool services designed to preserve beauty and structural integrity.
          </p>
        </div>

        {/* Services 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white p-7 border border-[#e2d9d0]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Photo Frame with Aspect Ratio */}
                <div className="w-full h-52 rounded-xl overflow-hidden bg-[#e7eeff] mb-5 relative">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#003673]/85 backdrop-blur-sm text-white font-display text-[11px] font-bold uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                {/* Icon Capsule */}
                <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] flex items-center justify-center mb-4">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#424751] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Bullet List */}
                <ul className="space-y-2 text-sm text-[#737782] mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#003673] shrink-0" />
                      <span className="text-[#424751] font-medium text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <a
                href="#estimate-section"
                className="inline-flex items-center gap-2 font-display text-xs sm:text-sm text-[#003673] font-bold uppercase tracking-wider group-hover:text-[#0a4d9a] transition-colors pt-2 border-t border-[#dee8ff]"
              >
                <span>{getActionText(service.id)}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
