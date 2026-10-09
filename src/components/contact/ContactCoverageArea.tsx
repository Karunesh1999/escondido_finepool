import React from 'react'
import { MapPin, Truck, ExternalLink } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

const COVERAGE_CITIES = [
  'Escondido',
  'Rancho Bernardo',
  'Poway',
  'San Marcos',
  'Rancho Santa Fe',
  'Del Mar',
  'Carlsbad',
  'Encinitas',
  'Valley Center',
  'Vista',
  'Fallbrook',
  'Solana Beach',
]

export const ContactCoverageArea: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Cities & Coverage details */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#003673]">
                Service Areas
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1.5">
                Serving North County San Diego
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                Headquartered in Escondido, our mobile crews service residential homes and boutique estates across North San Diego County within a 50-mile radius.
              </p>
            </div>

            {/* Cities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {COVERAGE_CITIES.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#003673] shrink-0" />
                  <span>{city}</span>
                </div>
              ))}
            </div>

            {/* Sample Showcase Callout */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-[#003673] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs sm:text-sm">
                <span className="font-bold text-slate-900">
                  Physical Samples Brought to Your Yard
                </span>
                <span className="text-slate-600 mt-0.5 leading-relaxed">
                  We bring real stone samples, pebble swatches, and glass tile lines to your consultation so you can see how colors look in your actual yard sunlight.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Map Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xs bg-slate-100 p-2 border border-slate-200">
              <div
                className="w-full h-80 sm:h-96 bg-cover bg-center rounded-xl relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzpbPWBs474nRGggRC1j7pkxUb71j0ea-Z2ksGg-1Dt5hiyuFTxYU2TaUAF3nPLdnTnqojhEiCOoKYm3SIyjDwwPNQ0G0TF3pbUEdvTibxMA6YNSsG36u1u1wEPSxx_hVXVAr5uRMo6iv--i5tUTip7-o92S_rE9rzmAGJrKa3eZMkS083KJ2NLMkZWJRaQQQN8GmV7PLl3Vpbv06rPD9OUh5sCiKgBBaClzmOSWw')`,
                }}
              >
                <div className="absolute inset-0 bg-slate-900/20 rounded-xl" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-xs shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#003673] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                        Escondido Fine Pools
                      </span>
                      <span className="text-xs text-slate-500">
                        {COMPANY_INFO.address}
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=25484+Lake+Wohlford+Rd+Escondido+CA+92027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
