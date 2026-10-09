import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'How quickly can you visit my home for an estimate?',
    answer:
      'We typically schedule on-site consultations within 24 to 48 hours throughout Escondido, Poway, Rancho Bernardo, and North County San Diego. For urgent equipment leaks or plumbing issues, we can often come out the same day.',
  },
  {
    question: 'Are your initial estimates completely free?',
    answer:
      'Yes, 100% free. We inspect your current pool shell and equipment, take measurements, show you physical plaster & tile samples, and provide an itemized written estimate with zero obligation or sales pressure.',
  },
  {
    question: 'Can you provide neighborhood references of past work?',
    answer:
      'Absolutely. Having worked in San Diego County for over 14 years, we have completed dozens of projects across local neighborhoods. We are happy to connect you with previous clients or show completed projects nearby.',
  },
  {
    question: 'What details should I prepare before our consultation?',
    answer:
      'Having a rough idea of your pool age, any photos, and what you’d like to change (e.g. plaster color, adding a Baja tanning ledge, replacing old tile, or upgrading to an energy-efficient pump) helps us bring the most relevant samples to our meeting.',
  },
]

export const ContactFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="w-full bg-slate-50 py-16 lg:py-20 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#003673]">
            Common Questions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Clear answers about consultations, pricing, and project timelines.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl shadow-2xs border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#003673]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
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
