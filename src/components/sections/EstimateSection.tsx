import React, { useState } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  AlertCircle,
  Send,
  Lock,
  CheckCircle,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const EstimateSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityZip: '',
    details: '',
  })

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Surface Remodeling',
  ])

  const [isSubmitted, setIsSubmitted] = useState(false)

  const availableServices = [
    'Surface Remodeling',
    'Structural & Baja Shelf',
    'Rockwork & Custom Spa',
    'Equipment & Automation',
    'New Construction',
  ]

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      // Keep feedback visible
    }, 5000)
  }

  return (
    <section id="estimate-section" className="w-full py-20 sm:py-28 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white shadow-2xl border border-[#e2d9d0]/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Master Contact & Direct Dial Panel */}
            <div className="lg:col-span-5 bg-[#003673] p-8 sm:p-12 text-white flex flex-col justify-between">
              <div>
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#d5e3ff] block mb-2">
                  Contact Us
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  Get In Touch
                </h2>
                <p className="text-base text-[#abc7ff] leading-relaxed mb-8">
                  Ready to revitalize your outdoor space? Fill out our simple form for a no-obligation project consultation and transparent written proposal.
                </p>

                {/* Operating Details List */}
                <div className="space-y-6 text-white">
                  {/* Phones */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                      <Phone className="w-5 h-5 text-[#d7e3ff]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#abc7ff] uppercase tracking-wider block font-display">
                        Direct Phone Lines
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.phone1Raw}`}
                        className="font-display text-lg font-bold hover:text-[#d5e3ff] transition-colors block"
                      >
                        {COMPANY_INFO.phone1}
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.phone2Raw}`}
                        className="text-sm text-[#abc7ff] hover:text-white transition-colors block"
                      >
                        {COMPANY_INFO.phone2}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                      <MapPin className="w-5 h-5 text-[#d7e3ff]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#abc7ff] uppercase tracking-wider block font-display">
                        Office &amp; Yard
                      </span>
                      <span className="text-sm text-white/90 leading-snug block">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/20">
                      <Clock className="w-5 h-5 text-[#d7e3ff]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#abc7ff] uppercase tracking-wider block font-display">
                        Operating Hours
                      </span>
                      <span className="text-sm text-white/90 block">
                        {COMPANY_INFO.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgent Care Callout Box */}
              <div className="mt-10 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2 text-[#d5e3ff] mb-1 font-display text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>Immediate Assistance Needed?</span>
                </div>
                <p className="text-xs text-[#abc7ff] leading-relaxed">
                  For major equipment leaks, plaster spalling, or electrical tripping, phone our emergency dispatch line directly.
                </p>
              </div>
            </div>

            {/* Right Column: Organized Lead Intake Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111c2d]">
                  Request Your Free In-Home Estimate
                </h3>
                <p className="text-sm text-[#424751] mt-1">
                  We typically respond within 2-4 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#f0f3ff] border border-[#dee8ff] text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#d5e3ff] text-[#003673] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#003673]">
                    Estimate Request Received!
                  </h4>
                  <p className="text-sm text-[#424751] max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.fullName || 'Neighbor'}</span>. Our licensed master builder will review your project details and contact you at <span className="font-semibold">{formData.phone || 'your phone number'}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ fullName: '', phone: '', email: '', cityZip: '', details: '' })
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#003673] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#0a4d9a] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Miller"
                        className="w-full px-4 py-3 rounded-lg bg-[#f0f3ff] text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] border border-[#c2c6d3]/60 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(760) 000-0000"
                        className="w-full px-4 py-3 rounded-lg bg-[#f0f3ff] text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] border border-[#c2c6d3]/60 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email and Address/City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#f0f3ff] text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] border border-[#c2c6d3]/60 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-1.5">
                        City / Zip Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cityZip}
                        onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                        placeholder="e.g. Escondido, 92027"
                        className="w-full px-4 py-3 rounded-lg bg-[#f0f3ff] text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] border border-[#c2c6d3]/60 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Type Interactive Pills */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-2">
                      Select Services Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const isSelected = selectedServices.includes(service)
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#003673] text-white shadow-sm'
                                : 'bg-[#f0f3ff] text-[#424751] hover:bg-[#dee8ff] border border-[#c2c6d3]/50'
                            }`}
                          >
                            {service}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Project Description Textarea */}
                  <div>
                    <label className="block font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider mb-1.5">
                      Project Details / Vision
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about the current condition of your pool, desired finishes, or project timeline..."
                      className="w-full px-4 py-3 rounded-lg bg-[#f0f3ff] text-[#111c2d] placeholder:text-[#737782] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#003673] border border-[#c2c6d3]/60 transition-all text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#003673] text-white font-display text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-[#0a4d9a] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Estimate Request</span>
                  </button>

                  {/* Confidentiality Footer */}
                  <div className="flex items-center justify-center gap-2 text-[#737782] font-display text-xs font-medium">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Your information is strictly confidential. No high-pressure sales.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
