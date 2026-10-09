import React, { useState } from 'react'
import {
  CheckCircle2,
  Lock,
  ArrowRight,
  Loader2,
} from 'lucide-react'

const SERVICE_OPTIONS = [
  { id: 'remodeling', label: 'Pebble Plaster & Resurfacing' },
  { id: 'structural', label: 'Baja Shelf & Steps Addition' },
  { id: 'equipment', label: 'Equipment & Pump Upgrades' },
  { id: 'mastic', label: 'Tile & Mastic Joint Replacement' },
  { id: 'spa-water', label: 'Custom Spa & Waterfall Features' },
  { id: 'new-build', label: 'New Custom Pool Construction' },
]

export const ContactConsultationForm: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [cityZip, setCityZip] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>(['remodeling'])
  const [timeframe, setTimeframe] = useState('Within 1-3 Months')
  const [projectNotes, setProjectNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id))
      }
    } else {
      setSelectedServices([...selectedServices, id])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 700)
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-9 shadow-xs border border-slate-200 flex flex-col gap-7">
      {/* Header */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#003673]">
          Free Estimate Request
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          Request an In-Home Consultation
        </h2>
        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
          Tell us about your pool and your project vision. We'll contact you within 24 hours to discuss details and schedule a free on-site walkthrough.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col gap-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#003673] text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Thank You, {fullName || 'Neighbor'}!
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                We have received your estimate request. One of our project managers will call or email you at <span className="font-semibold text-slate-900">{phoneNumber || emailAddress}</span> shortly to coordinate next steps.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false)
              setProjectNotes('')
            }}
            className="self-start text-xs font-bold text-[#003673] hover:underline mt-2 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="full-name" className="text-xs font-bold text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="full-name"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Marcus Vance"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone-number" className="text-xs font-bold text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone-number"
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="(760) 555-0199"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] transition-all text-sm"
              />
            </div>
          </div>

          {/* Row 2: Email and Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email-address" className="text-xs font-bold text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email-address"
                type="email"
                required
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="name@email.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="city-zip" className="text-xs font-bold text-slate-700">
                City or ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                id="city-zip"
                type="text"
                required
                value={cityZip}
                onChange={(e) => setCityZip(e.target.value)}
                placeholder="e.g. Escondido, 92027"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] transition-all text-sm"
              />
            </div>
          </div>

          {/* Services Needed */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-bold text-slate-700">
              Services Needed <span className="text-slate-400 font-normal">(select all that apply)</span>
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICE_OPTIONS.map((opt) => {
                const checked = selectedServices.includes(opt.id)
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                      checked
                        ? 'bg-blue-50/70 border-blue-300 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleService(opt.id)}
                      className="w-4 h-4 rounded text-[#003673] border-slate-300 focus:ring-0"
                    />
                    <span>{opt.label}</span>
                  </label>
                )
              })}
            </div>
          </div>

          {/* Timeframe Selector */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="timeframe" className="text-xs font-bold text-slate-700">
              Desired Project Timeline
            </label>
            <select
              id="timeframe"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] text-sm cursor-pointer"
            >
              <option value="Immediately (Urgent Repair)">Immediately (Urgent Repair / Leak)</option>
              <option value="Within 1 Month">Within 1 Month</option>
              <option value="Within 1-3 Months">Within 1–3 Months</option>
              <option value="Just Planning / Exploring Budget">Just Planning / Exploring Budget</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="project-notes" className="text-xs font-bold text-slate-700">
                Project Details or Questions
              </label>
              <span className="text-[11px] text-slate-400">
                {projectNotes.length}/500
              </span>
            </div>
            <textarea
              id="project-notes"
              rows={3}
              maxLength={500}
              value={projectNotes}
              onChange={(e) => setProjectNotes(e.target.value)}
              placeholder="Tell us about your pool (age, dimensions, finish preferences, or specific issues)..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003673]/20 focus:border-[#003673] transition-all text-sm resize-none"
            />
          </div>

          {/* Reassurance Strip */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs">
            <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>
              Your information is kept private. We will only contact you regarding your pool consultation.
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#003673] text-white text-sm font-semibold shadow-xs hover:bg-[#0a4d9a] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Estimate Request</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <span className="text-xs text-slate-500">
              No obligation • 100% Free Consultation
            </span>
          </div>
        </form>
      )}
    </div>
  )
}
