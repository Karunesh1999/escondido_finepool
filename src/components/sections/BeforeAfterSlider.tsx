import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react'

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percent)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <section className="w-full py-16 sm:py-24 bg-[#e7eeff]/60 border-y border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-[#003673] mb-2">
            <Sparkles className="w-4 h-4 text-[#0a4d9a]" />
            <span>Interactive Transformation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
            See The Transformation: Before &amp; After
          </h2>
          <p className="text-base text-[#424751] mt-3">
            Slide horizontally to reveal how we reconstruct weathered cavities into resort-grade outdoor sanctuaries with premium plaster and natural masonry.
          </p>
        </div>

        {/* Interactive Comparison Frame */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-[#e2d9d0]"
          >
            {/* "AFTER" Image (Full background) */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSVCoZ-xAuU38OLEdalsroLhU1UAVkUoS9ogCI0Q7kiOstmpit7kFxM5JparL78SJP7ge3GD37TNCdPaAhQ77uH5pyGeKJtCXr-Ujjrmpqeiw8lwGonTuJ5V-QW6aggfuohAozs6yHfWqVgvOqREdzu2ev9zcJZ2Nwirv3Ii3X4oSXc5VemfC4mChWBb1NYnJsZcxl8mQYio8uBGVAO-tAsUcBJXSUOtCuj2FrTnw"
              alt="After Pool Remodel with Sapphire Quartz Finish and Glass Mosaic Tiles"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* "BEFORE" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJB4x_3FpvPuEbK_WV6sh8t9wZLuia8iI6t9CYgFBB9xTnGb66FpumWtSB0OZ0o6Qz4JeYzec0Cb18UYXbXWbwxH6mvw3Xsix0bTKWsQhh8hDuNoR7QPwUCzsjn-tbcu9_49U2AQesgtmsvwRgc--4eUvl0WW002dcCa2rvy_9QN_K9cSvKk4z5GF32Mcm7opsFcK78P_bxY5waET0L59V3wWAg7shi7QcWobAmsw"
                alt="Before Pool Remodel - Raw Concrete and Unfinished Stone Structure"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
            </div>

            {/* Divider Line & Sapphire Grab Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/90 shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Draggable Sapphire Pill */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#003673] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,54,115,0.4)] border-2 border-white ring-4 ring-[#0a4d9a]/30">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

            {/* Frosted "Before" Label */}
            <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white font-display text-xs font-bold uppercase tracking-wider border border-white/20">
              Before Restoration
            </div>

            {/* Frosted "After" Label */}
            <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#003673]/85 backdrop-blur-md text-white font-display text-xs font-bold uppercase tracking-wider border border-white/20">
              After • Luxury Quartz &amp; Glass
            </div>

            {/* Drag helper hint at bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#003673] font-display text-xs font-semibold shadow-md pointer-events-none">
              Drag left or right to compare
            </div>
          </div>

          {/* Quick Specs Under Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-[#e2d9d0]/70 text-xs font-semibold text-[#111c2d]">
              <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
              <span>Full Re-plaster with Quartz Blend</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-[#e2d9d0]/70 text-xs font-semibold text-[#111c2d]">
              <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
              <span>Hand-laid Iridescent Waterline Tile</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-[#e2d9d0]/70 text-xs font-semibold text-[#111c2d]">
              <CheckCircle2 className="w-4 h-4 text-[#003673] shrink-0" />
              <span>Renewed Mastic &amp; Coping Expansion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
