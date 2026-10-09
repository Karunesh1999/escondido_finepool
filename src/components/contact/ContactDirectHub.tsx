import React from 'react'
import {
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  AlertCircle,
} from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const ContactDirectHub: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Direct Contact Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200 flex flex-col gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#003673]">
            Direct Contact
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
            Call or Visit Our Office
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
            Speak directly with our project leads and licensed pool builders—never an overseas call center or automated menu.
          </p>
        </div>

        {/* Direct Phone Channels */}
        <div className="flex flex-col gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#003673] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Main Line &amp; Estimates
                </span>
                <span className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#003673] transition-colors">
                  {COMPANY_INFO.phone1}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#003673] group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone2Raw}`}
            className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-200 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3a5f94] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                  Senior Project Estimator
                </span>
                <span className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#003673] transition-colors">
                  {COMPANY_INFO.phone2}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#003673] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Email Addresses */}
        <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Email Us Directly
          </span>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:info@escondidofinepools.pro"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-[#003673]" />
              <span className="font-semibold text-[#003673]">info@escondidofinepools.pro</span>
            </a>
            <a
              href="mailto:Fmoralessantiago@yahoo.com"
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 text-slate-700 transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span className="font-medium text-slate-600">Fmoralessantiago@yahoo.com</span>
            </a>
          </div>
        </div>

        {/* Address & Hours */}
        <div className="flex flex-col gap-3 pt-3 border-t border-slate-100 text-sm">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#003673] shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800">Physical Office &amp; Yard:</span>
              <span className="text-slate-600 text-xs sm:text-sm">{COMPANY_INFO.address}</span>
              <span className="text-slate-400 text-xs mt-0.5">Mailing: P.O. Box 301996, Escondido, CA 92030</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800">Business Hours:</span>
              <span className="text-slate-600 text-xs sm:text-sm">Monday – Sunday: 8:00 AM – 7:00 PM PST</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageSquare className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Have Pool Photos?</span>
              <span className="text-xs text-slate-600">Send photos via WhatsApp for quick review</span>
            </div>
          </div>
          <a
            href="https://wa.me/16196330346"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:brightness-105 shadow-2xs transition-all shrink-0 cursor-pointer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* 2. Urgent Repairs Card */}
      <div className="bg-[#003673] text-white rounded-2xl p-6 shadow-xs border border-[#0a4d9a] flex flex-col gap-3.5">
        <div className="flex items-center gap-2 text-blue-200 text-xs font-bold uppercase tracking-wider">
          <AlertCircle className="w-4 h-4 text-amber-300" />
          <span>Need Urgent Pool Service?</span>
        </div>

        <h3 className="font-display text-lg font-bold text-white leading-snug">
          Active Equipment Leaks or Severe Shell Cracking?
        </h3>

        <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
          If your pump has failed, plumbing is leaking under pressure, or you are experiencing rapid water loss, call our direct line for same-day diagnostic support in North County.
        </p>

        <div className="pt-1">
          <a
            href={`tel:${COMPANY_INFO.phone1Raw}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#003673] text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call (619) 633-0346</span>
          </a>
        </div>
      </div>
    </div>
  )
}
