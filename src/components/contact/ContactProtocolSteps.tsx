import React from 'react'
import { PhoneCall, Ruler, FileText, CheckCircle2 } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Initial Phone Consultation',
    description:
      'We discuss your vision, pool condition, timeline, and budget. We answer any immediate questions you have about materials and permits.',
    badge: 'Quick & Convenient',
  },
  {
    step: '02',
    icon: Ruler,
    title: 'On-Site Yard Walkthrough',
    description:
      'We visit your home to inspect the pool shell and plumbing, take precise measurements, and bring physical pebble & tile samples right to your yard.',
    badge: 'Free In-Person Visit',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Detailed Written Proposal',
    description:
      'You receive an honest, itemized written estimate outlining scope, materials, schedule, and warranty protection with zero unexpected fees.',
    badge: 'Fixed Price Guarantee',
  },
]

export const ContactProtocolSteps: React.FC = () => {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-20 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#003673]">
            Our Simple Process
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
            What to Expect When You Contact Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2.5 leading-relaxed">
            We value your time and property. Here is how we guide your pool remodel or construction project from initial concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-blue-50 text-[#003673] font-display text-base font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#003673]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{item.badge}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
