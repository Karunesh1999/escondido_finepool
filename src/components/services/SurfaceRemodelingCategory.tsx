import React from 'react'
import {
  Droplets,
  Grid,
  Shield,
  CheckCircle2,
  Table as TableIcon,
} from 'lucide-react'

export const SurfaceRemodelingCategory: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f9f9ff] scroll-mt-36" id="surface-remodeling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
              Category 01 • Surface Architecture
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
              Surface Remodeling &amp; Luxury Finishes
            </h2>
            <p className="text-base text-[#424751] max-w-2xl mt-3 leading-relaxed">
              Transform weathered, rough, or delaminating pool interiors into smooth, tactile works of art designed to withstand Southern California sunshine and water chemistry.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#dee8ff] text-[#003673] font-display text-xs font-bold">
              Plaster
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#dee8ff] text-[#003673] font-display text-xs font-bold">
              Mini Pebble
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#dee8ff] text-[#003673] font-display text-xs font-bold">
              Travertine Coping
            </span>
          </div>
        </div>

        {/* 3 Sub-services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Plaster & Pebble */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                New Plaster &amp; Pebble Finishes
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Specialized high-end pebble aggregate and fortified quartz applications. We eliminate chalking, rough patches, and scale while repairing chipped, broken steps and crack margins to factory-fresh integrity.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Pebble Tec &amp; Pebble Sheen Aggregate</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Micro-Smooth Quartz Blends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Full Step &amp; Bench Re-contouring</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-44 bg-[#dee8ff] border border-[#dee8ff]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdSUCWmhh_evn0T-WdcQYyQZM65ys8gldlAK6O6j-l2tKT86NI_TI0uqv0qsUNKam7XdBxYEB48jCcui3TqWwJutkKpmTnCSdDXMWWbeKUyqGqBMus7MYTcx5F8RqEX0Kbx9CUsJvXl_69ZSB1zeEpQbvYrwzYXFL9Dk0CbXR-zEwaUfShwH0f1MEsUmKU66XOONUoCI2gdoI3YhG2YA41SP2sRl_M71fzy0rRXHw"
                alt="Macro close-up photograph of luxury Pebble Sheen pool plaster aggregate texture submerged in crystal clear azure water"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 2: Tile & Coping */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Grid className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                Tile &amp; Coping Architecture
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Replacement of cracked, loose, or outdated waterline tile with artisanal glass mosaics, glazed porcelain, and Spanish ceramics paired with custom bullnose or straight-edge stone coping.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Italian Porcelain &amp; Glass Waterline Tile</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Natural Travertine &amp; Flagstone Coping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Seamless Deck-to-Coping Level Transition</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-44 bg-[#dee8ff] border border-[#dee8ff]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8qDqg9RJe9FaeMxPV0vu34xI621NQuAkpO6yVqPDIFsFNSzyhva6nDSHsP8P9uoMSUQspcNXcr34skwLkZP9MaQ4Tft0a98umGmX3RvNwdPu1FAK4t3T6XVF4tRyhlt15AH9s_jQm2K8HhFP5q5PcfxzeuXZ6NL96KcGYUKYLyc-0ljlaLHNkX4TaSu73u_V4uP7BGjOI0JNiWbSwND53b6pytNeepLroSVCR2Pg"
                alt="Pool renovation detail showing hand-laid turquoise glass waterline tiles meeting custom honed silver travertine coping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Card 3: Stone Hydro-Sealing */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                Natural Stone Hydro-Sealing
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Application of commercial-grade fluoropolymer sealants to porous natural stone and perimeter mortar joints. Completely repels mineral staining, salt decay, and harsh moisture penetration.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Sub-Surface Penetrating Barrier</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Efflorescence &amp; Calcium Blocker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
                  <span>Slip-Resistant Matte Finish Option</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden h-44 bg-[#dee8ff] border border-[#dee8ff]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG9HkPD2WfytOJ8KnHrvg6QNYy0GTmoD9w6I-LM4-Ug_Xjsb_0ul-YiMvDiFCs1CU0m-0QNtpTlKDimR0q8atGreyrMDtdjmqddU8MD_EAvWiMP-Fw9to3QewAx5Q2ZS0wO9E3iRM-3ZT08UeMiRSpsAwQNixtD8u0NOh3X1E-nNRcsbirQwHMBfZnrAE4biV2ONwxh1JGWqt9vQHcKOq7P2r0B6J-ZZvBn6v95mk"
                alt="Contractor applying protective stone sealer to natural flagstone pool deck showing water beading effortlessly"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Material Comparison Matrix */}
        <div className="bg-[#f0f3ff] rounded-2xl p-6 sm:p-8 border border-[#dee8ff] shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <TableIcon className="w-6 h-6 text-[#003673]" />
              <h4 className="font-display text-lg sm:text-xl font-bold text-[#111c2d]">
                Pool Surface Finishes Specification Comparison
              </h4>
            </div>
            <span className="font-display text-xs text-[#737782] uppercase tracking-wider font-bold hidden sm:block">
              Escondido Builder Grade Specs
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#dee8ff] text-[#111c2d] font-display text-xs font-bold uppercase tracking-wider">
                  <th className="p-3.5 rounded-l-xl">Material System</th>
                  <th className="p-3.5">Average Lifespan</th>
                  <th className="p-3.5">Texture Feel</th>
                  <th className="p-3.5">Chemical Resistance</th>
                  <th className="p-3.5 rounded-r-xl">Water Color Refraction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dee8ff] bg-white">
                <tr>
                  <td className="p-4 font-display font-bold text-[#003673]">
                    Natural Pebble Aggregates (Pebble Tec)
                  </td>
                  <td className="p-4 font-semibold text-[#111c2d]">18 – 25+ Years</td>
                  <td className="p-4 text-[#424751]">River stone tactile traction</td>
                  <td className="p-4 font-semibold text-emerald-700">Maximum (Impervious to etching)</td>
                  <td className="p-4 text-[#111c2d]">Deep Caribbean Emerald &amp; Azure</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-bold text-[#003673]">
                    Fortified Quartz Modified Blends
                  </td>
                  <td className="p-4 font-semibold text-[#111c2d]">12 – 16 Years</td>
                  <td className="p-4 text-[#424751]">Smooth satin with gentle sparkle</td>
                  <td className="p-4 font-semibold text-[#003673]">High (Polymer boosted)</td>
                  <td className="p-4 text-[#111c2d]">Vibrant Sky Blue &amp; Aqua</td>
                </tr>
                <tr>
                  <td className="p-4 font-display font-bold text-[#737782]">
                    Standard Marcite White Plaster
                  </td>
                  <td className="p-4 text-[#737782]">5 – 8 Years</td>
                  <td className="p-4 text-[#737782]">Silky smooth (Subject to wear)</td>
                  <td className="p-4 text-amber-700">Moderate (Vulnerable to calcium leech)</td>
                  <td className="p-4 text-[#737782]">Light Classic Aquamarine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
