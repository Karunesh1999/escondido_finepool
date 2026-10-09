import React from 'react'
import {
  Layers,
  Accessibility,
  ShieldAlert,
  Hammer,
  Info,
} from 'lucide-react'

export const MasticSafetyCategory: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f3ff] scroll-mt-36 border-y border-[#dee8ff]" id="mastic-safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#e2d9d0]/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Descriptions and 4 safety features */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
                  Category 04 • Structural Longevity
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
                  Expansion Mastic &amp; Pool Safety Infrastructure
                </h2>
                <p className="text-base text-[#424751] mt-3 leading-relaxed">
                  The flexible expansion joint between your coping and pool deck is your pool's primary defensive seal against water intrusion. Neglected mastic allows water to seep underneath, destabilizing subsoil and causing deck cracking and shifting.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 p-4 bg-[#f0f3ff] rounded-xl border border-[#dee8ff]">
                  <div className="flex items-center gap-2 text-[#003673] font-display text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-[#0a4d9a]" />
                    <span>Expansion Joint Mastic</span>
                  </div>
                  <p className="text-xs text-[#424751] leading-relaxed mt-0.5">
                    Self-leveling polyurethane joint filler with quartz sand broadcast, engineered to endure thermal expansion without drying or peeling.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 p-4 bg-[#f0f3ff] rounded-xl border border-[#dee8ff]">
                  <div className="flex items-center gap-2 text-[#003673] font-display text-xs font-bold uppercase tracking-wider">
                    <Accessibility className="w-4 h-4 text-[#0a4d9a]" />
                    <span>Safety Handrails &amp; Ladders</span>
                  </div>
                  <p className="text-xs text-[#424751] leading-relaxed mt-0.5">
                    Marine-grade 316 polished stainless steel or powder-coated custom handrails securely core-drilled for effortless, slip-free entry.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 p-4 bg-[#f0f3ff] rounded-xl border border-[#dee8ff]">
                  <div className="flex items-center gap-2 text-[#003673] font-display text-xs font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-[#0a4d9a]" />
                    <span>VGB Anti-Entrapment Drains</span>
                  </div>
                  <p className="text-xs text-[#424751] leading-relaxed mt-0.5">
                    Installation of Virginia Graeme Baker (VGB) Act compliant anti-vortex drain covers to prevent dangerous suction hazards.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 p-4 bg-[#f0f3ff] rounded-xl border border-[#dee8ff]">
                  <div className="flex items-center gap-2 text-[#003673] font-display text-xs font-bold uppercase tracking-wider">
                    <Hammer className="w-4 h-4 text-[#0a4d9a]" />
                    <span>Deck Leveling &amp; Joint Repair</span>
                  </div>
                  <p className="text-xs text-[#424751] leading-relaxed mt-0.5">
                    Precision diamond-grinding of trip hazards along uneven deck seams paired with backer-rod joint stabilization.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Photo & Technical Detail Card */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-[#dee8ff] border border-[#e2d9d0]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAfAqHom-QuLYvajKi5MS5_N8qkj4qlsfcb7-PJl7y987z9fVBeMnRST7-HjzjCeZdCzOUMKmhHWy3XJAI2_rcnU75U6AdqTpnfIV11lNntc6KRR7Iy9kppA5HDWuAjsCAr0Nj_2Ibxf8lXPOdDIBESA1ooF7mKX4mhF4lSgiXUEFJbe1Ug27HCFZ3VG8V9lP3vIxsxnttl8kDX7aW9_K4KIFXa_lRhqYEp5COi2U"
                  alt="Close up photograph of a pool contractor precisely applying clean sand-colored self leveling expansion joint mastic"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Technical Detail Card */}
              <div className="p-5 bg-[#dee8ff]/50 rounded-2xl text-[#111c2d] flex items-start gap-4 border border-[#dee8ff]">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#003673] shrink-0 shadow-sm">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-[#003673]">
                    Why Replace Mastic Every 3 to 5 Years?
                  </h4>
                  <p className="text-xs text-[#424751] mt-1 leading-relaxed">
                    In North County's adobe and clay soils, rain seepage underneath unsealed coping causes soil expansion. This forces the deck to heave upward, shearing pool tiles and cracking structural bond beams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
