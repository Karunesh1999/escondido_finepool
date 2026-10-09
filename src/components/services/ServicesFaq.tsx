import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export const ServicesFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How long does a complete pool plaster or pebble resurfacing take?',
      a: 'Typically, standard drain, prep, chip-out, tile replacement, and pebble application takes between 7 to 14 business days weather permitting. Once filled with water, we perform the essential 7-day chemical curing and startup procedure before you dive in.',
    },
    {
      q: 'Can my existing deep pool be safely converted to a shallower play depth?',
      a: 'Yes, absolutely. We frequently transform older 8 to 10-foot deep diving pools into modern 4 to 5.5-foot sports depths. We drill and epoxy structural rebar into the existing shell, backfill with compacted structural aggregate, and pour high-strength pneumatic shotcrete to form a permanent unified bond.',
    },
    {
      q: 'Why is perimeter joint mastic replacement so important?',
      a: 'Mastic acts as a watertight expansion buffer between your rigid coping and your pool deck. If the mastic cracks or pulls away, rain and pool splash water seeps below the surface. This triggers clay soil expansion, which breaks bond beams and heaves your concrete patio. Replacing mastic every 3 to 5 years prevents thousands in structural repairs.',
    },
    {
      q: 'Do you handle city building permits in Escondido and San Diego County?',
      a: 'Yes. While cosmetic plaster and tile swaps often do not require permits, major structural additions (such as raised retaining walls, gas fire lines, or severe re-engineering) require engineering plans and permits. As licensed California contractors (Lic #1145783), we draft, submit, and clear all required city and county building approvals.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-[#f0f3ff] border-y border-[#dee8ff]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-[#003673] mb-2">
            <HelpCircle className="w-4 h-4 text-[#0a4d9a]" />
            <span>Client Knowledge Base</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
            Frequently Asked Remodeling Questions
          </h2>
          <p className="text-base text-[#424751] mt-3">
            Clear answers regarding timelines, structural safety, materials, and city permits.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-[#e2d9d0]/70 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#111c2d] hover:text-[#003673] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#f0f3ff] flex items-center justify-center text-[#003673] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#dee8ff]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#424751] leading-relaxed border-t border-[#f0f3ff] pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
