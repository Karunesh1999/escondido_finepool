import React, { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/data/siteData'

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-white text-[#003673] shadow-[0_10px_30px_-10px_rgba(10,77,154,0.3)] border border-[#e2d9d0] flex items-center justify-center hover:bg-[#dee8ff] transition-all cursor-pointer animate-in fade-in zoom-in-75 duration-200"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Action Pill */}
      <a
        href={`https://wa.me/1${COMPANY_INFO.phone1Raw}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instant WhatsApp Consult"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#00537f] text-white shadow-[0_10px_30px_-10px_rgba(0,83,127,0.45)] hover:bg-[#003673] hover:shadow-[0_12px_32px_-8px_rgba(0,54,115,0.6)] transition-all transform hover:-translate-y-0.5 border border-[#85c7ff]/30"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85c7ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a1c1ff]"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="font-display text-xs font-bold uppercase tracking-wider pr-1">
          Chat with Builder
        </span>
      </a>
    </div>
  )
}
