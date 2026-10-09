import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ArrowLeftRight, CheckCircle2, Star } from 'lucide-react'

export const GalleryCaseStudySpotlight: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    let x = clientX - rect.left
    if (x < 0) x = 0
    if (x > rect.width) x = rect.width
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX)
    }

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchend', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [isDragging, handleMove])

  return (
    <section className="w-full py-12 sm:py-16 bg-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Micro-Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#003673] animate-pulse" />
            <span className="font-display text-xs uppercase tracking-widest text-[#003673] font-bold">
              Featured Architectural Deep Dive
            </span>
          </div>
          <span className="font-mono text-xs text-[#737782] hidden sm:inline">
            Project ID: EFP-RB-2024-09
          </span>
        </div>

        {/* Spotlight Bento Card */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 lg:p-10 shadow-xl border border-[#dee8ff]/80 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Before/After Comparison Visualizer */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden group select-none shadow-md cursor-ew-resize bg-[#dee8ff]"
            >
              {/* Background Image: AFTER */}
              <img
                src="/images/gallery/spotlight_after.jpg"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLz3F-ufydDsAguuTf8g-l9A1shTdea9T4W1Tngbluy3OMAWte1fRZW6G6uvmk0V-kgBV2_c9fnEOJyo6MD0Xq3YN6nrXN-AgbEMJR5IstBObQDgg0hOEA9iQ1rHjKFH8kSymRPkr2BacaV9T5UDAn3SmvAAKTXqLshrXy7zoJbK5mMYe4bu-R-jP-nWqx-9z8oze6dF8NnXVMpYsfvaxoPBtPoM0sfNyT-VTN3Q'
                }}
                alt="Completed luxury swimming pool renovation in Rancho Bernardo with French Gray Pebble Sheen finish and Baja tanning shelf"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Foreground Image: BEFORE (Clipped by slider handle) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="/images/gallery/spotlight_before.jpg"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBq-ZNtTIpa0arw3MlCM79XhKoKTrfYOSKeXCwxclYkE_ESXcPKNLybHwkwZ9oFNCrQWpb5x14S8jnIof5HhUjGuS8daFPFgudsLtekSgeCKbHhtnfjnPCZi0b3pIXX0UBy8Xm5pvoJs55gmBtaiF0IhRE-GJZLyn1sMjdgzbWBir1NWpibxAkN8zJMTgcaRePzBD6xOdQKe4v9uxQCIn_VOJfoByEgE2OgrBGNvD4'
                  }}
                  alt="Original outdated 1980s concrete pool before renovation in Rancho Bernardo"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    height: '100%',
                  }}
                />
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-md bg-[#263143]/85 text-[#ecf1ff] font-display text-[11px] font-bold tracking-wide backdrop-blur-sm pointer-events-none shadow-sm">
                BEFORE: 1980s 9-Foot Diving Pit
              </div>
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-md bg-[#003673]/90 text-white font-display text-[11px] font-bold tracking-wide backdrop-blur-sm pointer-events-none shadow-sm">
                AFTER: French Gray Pebble Sheen
              </div>

              {/* Draggable Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] flex items-center justify-center -translate-x-1/2"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#003673] text-white flex items-center justify-center shadow-xl ring-2 ring-white">
                  <ArrowLeftRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Instruction Micro-tip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md font-display text-xs text-[#111c2d] pointer-events-none shadow-sm border border-[#dee8ff]/80 font-medium">
                Drag slider left or right to compare transformation
              </div>
            </div>

            {/* Quick Metrics Ribbon Below Comparison */}
            <div className="grid grid-cols-3 gap-3 mt-1">
              <div className="p-3.5 rounded-xl bg-[#f0f3ff] text-center border border-[#dee8ff]">
                <span className="font-display text-xl sm:text-2xl text-[#003673] font-extrabold block">
                  18 Days
                </span>
                <span className="font-display text-[11px] sm:text-xs text-[#424751] font-medium mt-0.5 block">
                  Demolition to Balance
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f0f3ff] text-center border border-[#dee8ff]">
                <span className="font-display text-xl sm:text-2xl text-[#003673] font-extrabold block">
                  -38%
                </span>
                <span className="font-display text-[11px] sm:text-xs text-[#424751] font-medium mt-0.5 block">
                  Gas Heating Volume
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#f0f3ff] text-center border border-[#dee8ff]">
                <span className="font-display text-xl sm:text-2xl text-[#003673] font-extrabold block">
                  100%
                </span>
                <span className="font-display text-[11px] sm:text-xs text-[#424751] font-medium mt-0.5 block">
                  Shotcrete Integrity
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Transformation Breakdown */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#d7e3ff] text-[#001b3f] font-display text-xs uppercase font-bold tracking-wider">
                  Rancho Bernardo Estate
                </span>
                <span className="text-[#c2c6d3] font-display text-xs">•</span>
                <span className="text-[#424751] font-display text-xs font-semibold">
                  Completed October 2024
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl text-[#111c2d] font-bold leading-tight">
                9ft Deep-Well Conversion &amp; Baja Tanning Shelf Architecture
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#424751] leading-relaxed">
                Homeowners transformed an obsolete, unheated 9-foot deep diving pit into an entertainer’s oasis. The master builder backfilled and elevated the pool floor to a uniform 4.5’–5.5’ social depth while integrating an expansive 7’×11’ tanning shelf with dual bubbler jets.
              </p>

              {/* Technical Scope Checklist */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#003673] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-[#111c2d]">
                    <strong className="font-bold text-[#003673]">Structural Reshaping:</strong> 12 yards engineered structural backfill and gunite pinning.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#003673] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-[#111c2d]">
                    <strong className="font-bold text-[#003673]">Surface Finish:</strong> Pebble Sheen French Gray with 15% shimmering abalone shell flakes.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#003673] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-[#111c2d]">
                    <strong className="font-bold text-[#003673]">Waterline &amp; Coping:</strong> 12&quot; Spanish Cobalt hand-pressed glass tile &amp; honed silver travertine.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#003673] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-[#111c2d]">
                    <strong className="font-bold text-[#003673]">Hydraulics:</strong> Pentair IntelliFlo 3HP variable-speed automation &amp; LED multi-spectrum lighting.
                  </span>
                </div>
              </div>
            </div>

            {/* Homeowner Testimonial Module */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#f0f3ff] border border-[#dee8ff] flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-1 text-[#003673]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#003673]" />
                ))}
                <span className="font-display text-xs font-bold ml-1.5 text-[#111c2d]">
                  5.0 Star Verified Review
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#424751] italic leading-relaxed">
                &ldquo;Escondido Fine Pools turned an unusable dangerous pit into the absolute highlight of our home. We spend every weekend around the Baja ledge. The team was punctual, direct, and flawless.&rdquo;
              </p>
              <div className="flex items-center justify-between font-display text-xs mt-1 pt-2 border-t border-[#dee8ff]">
                <span className="font-bold text-[#111c2d]">David &amp; Claire M.</span>
                <span className="text-[#737782]">The Greens, Rancho Bernardo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
