import React from 'react'
import {
  ArrowUpDown,
  Armchair,
  Waves,
  Layers,
  Compass,
  Zap,
} from 'lucide-react'

export const StructuralDesignCategory: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f3ff] scroll-mt-36 border-y border-[#dee8ff]" id="structural-design">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: 4 Architecture Blocks */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
              Category 02 • Structural Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight leading-tight">
              Structural Modifications &amp; Modern Architecture
            </h2>
            <p className="text-base text-[#424751] leading-relaxed">
              Re-engineer an old deep bowl into an entertainer's resort. With custom shotcrete re-bar forming and precision engineering, we alter your pool's actual physical architecture without completely demolishing your yard.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl shadow-sm border border-[#dee8ff]">
                <div className="w-9 h-9 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <ArrowUpDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Depth Reduction &amp; Floor Elevation
                  </h4>
                  <p className="text-xs text-[#424751] mt-0.5 leading-relaxed">
                    Cut energy and chemical volume by converting hazardous 8–10 ft diving wells to active 4.5–5.5 ft family play zones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl shadow-sm border border-[#dee8ff]">
                <div className="w-9 h-9 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Armchair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Baja Sun Shelves &amp; Ledge Lounges
                  </h4>
                  <p className="text-xs text-[#424751] mt-0.5 leading-relaxed">
                    Construct shallow (6"-10") tanning platforms with umbrella anchors, LED bubblers, and built-in drink tables.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl shadow-sm border border-[#dee8ff]">
                <div className="w-9 h-9 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Beach Entries &amp; Zero-Edge Transitions
                  </h4>
                  <p className="text-xs text-[#424751] mt-0.5 leading-relaxed">
                    Gentle zero-depth grade shorelines allowing children, seniors, and guests to walk gracefully into the water.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white rounded-xl shadow-sm border border-[#dee8ff]">
                <div className="w-9 h-9 rounded-lg bg-[#dee8ff] flex items-center justify-center text-[#003673] shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d]">
                    Raised Architectural Bond Beams &amp; Water Walls
                  </h4>
                  <p className="text-xs text-[#424751] mt-0.5 leading-relaxed">
                    Multi-tier stacked quartzite retaining walls with sheer descent water blades, scuppers, and integrated gas fire features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Transformation Showcase & Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#e2d9d0]/70">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFqTqAqRzVh_vGhZiO-6SMk23fdbfSIBCKTAaanqo0_MYWNSaHGYviBl5kMKfimDx4Ei4tgRYdYnCDQMGREVPKrRSrOg0MR9WdcNiadLfrHSUjMyYEqG1BG9a5_1E4oerLVMplrcRRcrg6qOODaCT_TGdSelQ3LMnKwMSiWAKU76gymJrKP_s2HuaDyCCupJRFB5sqJ2MsygY3On4I0cc0KOOD-Sr4LlReVndEYDk"
                alt="Modern renovated swimming pool featuring a shallow Baja shelf with two white in-water loungers and umbrella"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#dee8ff]">
                <div>
                  <span className="font-display text-xs font-bold uppercase tracking-wider text-[#003673]">
                    Escondido Hilltop Estate
                  </span>
                  <p className="font-display text-base font-bold text-[#111c2d] mt-0.5">
                    Baja Tanning Ledge + Triple Sheer Descent Retaining Wall
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-full bg-[#d5e3ff] text-[#001b3c] font-display text-xs font-bold whitespace-nowrap self-start sm:self-auto">
                  Structural Shotcrete
                </span>
              </div>
            </div>

            {/* Secondary Dual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-2xl border border-[#dee8ff] shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#003673]">
                  <Compass className="w-5 h-5" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider">
                    Structural Rigor
                  </span>
                </div>
                <p className="text-xs text-[#424751] leading-relaxed">
                  Rebar grids tied #4 grade steel at 8" on-center dowelled into existing structural gunite shells with marine-grade structural epoxy.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#dee8ff] shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#003673]">
                  <Zap className="w-5 h-5" />
                  <span className="font-display text-xs font-bold uppercase tracking-wider">
                    Thermal Efficiency
                  </span>
                </div>
                <p className="text-xs text-[#424751] leading-relaxed">
                  Reducing pool depth reduces water volume by 25-35%, cutting solar heating time and gas bills dramatically throughout all four seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
