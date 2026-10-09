import React from 'react'
import {
  Wrench,
  Gauge,
  Smartphone,
  Zap,
  Check,
  ShieldCheck,
  Leaf,
  Wifi,
} from 'lucide-react'

export const HydraulicEquipmentCategory: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f9f9ff] scroll-mt-36" id="critical-equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-[#003673]">
              Category 03 • Mechanical &amp; Hydraulic Systems
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] mt-2 tracking-tight">
              Critical Maintenance &amp; Equipment Upgrades
            </h2>
            <p className="text-base text-[#424751] max-w-2xl mt-3 leading-relaxed">
              Address invisible structural decay, rusting rebar stains, and power-hungry pump rooms with energy-certified commercial plumbing and smart automations.
            </p>
          </div>
          <div className="bg-[#dee8ff] px-4 py-2.5 rounded-xl text-[#003673] font-display text-xs font-bold flex items-center gap-2 border border-[#a1c1ff]/50 self-start md:self-auto">
            <Zap className="w-4 h-4 text-[#003673]" />
            <span>Slashes Equipment Electricity Costs by up to 70%</span>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Rust Excision */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                Rust Excision &amp; Crack Stitching
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Bleeding rebar rust spots cut directly into gunite, treated with zinc inhibitors, and sealed. Structural faults are permanently stabilized with carbon fiber torque staples and pressurized epoxy welds.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Complete Rebar De-Rusting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Torque-Staple Structural Stitching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Zero Future Rust Bleed Guarantee</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 bg-[#f0f3ff] rounded-xl font-display text-xs font-bold text-[#003673] flex items-center gap-2 border border-[#dee8ff]">
              <ShieldCheck className="w-4 h-4 text-[#0a4d9a]" />
              <span>Permanent Mechanical Remediation</span>
            </div>
          </div>

          {/* Card 2: Variable-Speed Pumps */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                Variable-Speed Pumps &amp; Filters
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Replace roaring, obsolete single-speed pumps with ultra-quiet Pentair &amp; Hayward IntelliFlo systems. Upgrade undersized DE grids to large-capacity quad-cartridge and crushed glass filtration.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Title 20 California Energy Compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Clean &amp; Clear Cartridge Filters (520 sq ft)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Schedule 40 PVC Hydraulic Replumbing</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 bg-[#f0f3ff] rounded-xl font-display text-xs font-bold text-[#003673] flex items-center gap-2 border border-[#dee8ff]">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Energy Star Certified Units</span>
            </div>
          </div>

          {/* Card 3: Saltwater & App Controls */}
          <div className="bg-white rounded-2xl p-7 border border-[#e2d9d0]/70 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#dee8ff] flex items-center justify-center text-[#003673] mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#111c2d] mb-2 leading-snug">
                Saltwater &amp; Smart App Controls
              </h3>
              <p className="text-sm text-[#424751] leading-relaxed mb-5">
                Convert harsh chlorine systems into silky, gentle electrolytic saltwater generators. Control spa heaters, underwater multi-color LED shows, and spillover waterfalls directly from your phone.
              </p>
              <ul className="flex flex-col gap-2.5 text-sm text-[#111c2d] mb-6 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Pentair IntelliCenter / Hayward OmniLogic</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>No Red Eyes or Bleached Swimwear</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#003673] shrink-0 stroke-[2.5]" />
                  <span>Automated Daily Water Chemistry Feeders</span>
                </li>
              </ul>
            </div>
            <div className="p-3.5 bg-[#f0f3ff] rounded-xl font-display text-xs font-bold text-[#003673] flex items-center gap-2 border border-[#dee8ff]">
              <Wifi className="w-4 h-4 text-[#003673]" />
              <span>iOS &amp; Android Pool Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
