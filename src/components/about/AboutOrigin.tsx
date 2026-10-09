import React from 'react'
import {
  Droplets,
  Quote,
  Calendar,
  Clock,
  Sparkles,
  Star,
} from 'lucide-react'

export const AboutOrigin: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Side: Layered Architectural Photography with Metrics */}
          <div className="lg:col-span-6 relative">
            {/* Architectural Dot Accent Matrix */}
            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-25 hidden sm:block pointer-events-none">
              <svg fill="none" height="128" viewBox="0 0 128 128" width="128">
                <defs>
                  <pattern height="16" id="dot-grid" patternUnits="userSpaceOnUse" width="16" x="0" y="0">
                    <circle cx="2" cy="2" fill="#0A4D9A" r="2" />
                  </pattern>
                </defs>
                <rect fill="url(#dot-grid)" height="128" width="128" />
              </svg>
            </div>

            <div className="relative flex flex-col gap-4">
              {/* Main Featured Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-[#e7eeff] border border-[#e2d9d0]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQNWsnANGXmi0KaAo-c94HG-WFWOBx0w8Kg5AlQ7O4MYh6mCWaGREM7UUOYkPcz_Qs3HU84ZfvRh-vGTn-YXsB8ktTNt3lqCALxuzleGTHySLmvF2bHnOGIR4cMbcYDuKqOhV_cL1OpQ7teTESRYGrD8irLx8IoIb9v6Sr7aohNcTpEOqis-BR4IeVmubKcPpNbcoPm1XWOVp9xz6RcoEybrpu7x9xk0KDf__6JIk"
                  alt="An immaculately finished luxury in-ground plunge pool in Escondido California with smooth deep gray pebble plaster finish"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 ease-out"
                />
                <div className="absolute bottom-4 left-4 bg-[#003673]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg font-display text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-sm border border-white/20">
                  <Droplets className="w-4 h-4 text-[#85c7ff]" />
                  <span>Artisan Plaster &amp; Pebble Work</span>
                </div>
              </div>

              {/* Overlapping Bottom Dual-Card & Detail Shot */}
              <div className="grid grid-cols-2 gap-4 -mt-8 sm:-mt-12 relative z-10 px-2 sm:px-4">
                {/* Detail secondary image */}
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-square bg-[#dee8ff] border-4 border-white">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_4GNYxCF5vFHZvySmDko4b0HYa3T-FbFsF1-QkgqduIAfQHgLI0ZfGUA7VKczIF0esn4iuGywuK02F8WXQ-3BtsPr1p__BJn8D8a5x70pMZJz2RJUZU2p3Bl3pq_txlbJTwia0xuTIEUr6S-ahsdxbIUG8FNorls0tGdzqXqWQi-52Hp_axNoACvuU4FKz8hoUQnc8EvgBkKygBk7WOGLaaM_7Po24lciohSrlvY"
                    alt="Close up architectural detail of custom flagstone coping on a sparkling blue water jacuzzi and pool"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Key Metric Overlay Bento Box */}
                <div className="bg-[#0a4d9a] text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl border-4 border-white">
                  <div>
                    <Sparkles className="w-6 h-6 text-[#85c7ff] mb-1" />
                    <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      14+
                    </div>
                    <div className="font-display text-xs sm:text-sm text-[#abc7ff] font-semibold mt-0.5">
                      Years of Continuous Local Craftsmanship
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                    <span className="font-display text-[11px] uppercase tracking-wider text-[#d5e3ff] font-bold">
                      500+ Transformations
                    </span>
                    <span className="font-display text-xs text-amber-300 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300 stroke-amber-300" />
                      5.0 Star
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2 text-[#003673] font-display text-xs font-bold tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#003673]"></span>
              <span>About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight mb-5 leading-tight">
              Mastery In Renovation: 14 Years Transforming Lifestyles In Escondido
            </h2>

            <div className="flex flex-col gap-4 text-[#424751] text-base leading-relaxed">
              <p>
                At <strong className="text-[#111c2d] font-semibold">Escondido Fine Pools</strong>, we don't just repair pools; we restore the heart of your home’s outdoor living space. Founded on a commitment to luxury finishes and definitive structural solutions, our company has become the trusted specialist for homeowners in Escondido, CA, and surrounding communities within a 50-mile radius.
              </p>
              <p>
                Our 14-year trajectory has allowed us to perfect the art of plaster and pebble application, ensuring that every pool not only looks breathtaking on day one but also withstands the test of time and constant use. We understand that your pool is a valuable investment; that is why we operate with an untiring work ethic, offering customer service from Monday to Sunday, 8:00 AM to 7:00 PM, to fit your busy schedule.
              </p>
            </div>

            {/* Highlight Quotation / Value Banner */}
            <div className="mt-7 p-5 bg-[#f0f3ff] rounded-2xl flex items-start gap-4 border border-[#dee8ff] shadow-sm">
              <Quote className="w-8 h-8 text-[#003673] shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-base sm:text-lg font-bold text-[#003673] italic leading-snug">
                  &ldquo;We treat every yard as a fine art installation, engineered to endure the California sun.&rdquo;
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-[#737782] font-display">
                  <span className="font-bold text-[#111c2d]">Lead Master Builder</span>
                  <span>•</span>
                  <span>Escondido Fine Pools Family</span>
                </div>
              </div>
            </div>

            {/* Service Schedule & Availability */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#e2d9d0]/70 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#003673] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#737782] uppercase tracking-wider font-display">
                    Operation Days
                  </span>
                  <span className="font-display text-sm font-bold text-[#111c2d]">
                    Mon - Sun (7 Days)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#e2d9d0]/70 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#003673] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-[#737782] uppercase tracking-wider font-display">
                    Extended Hours
                  </span>
                  <span className="font-display text-sm font-bold text-[#111c2d]">
                    8:00 AM – 7:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
