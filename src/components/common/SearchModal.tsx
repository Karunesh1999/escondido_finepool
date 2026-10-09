import React, { useState, useMemo } from 'react'
import { Search, X, ArrowRight, Layers, Sparkles } from 'lucide-react'
import { SERVICES, PROJECTS } from '@/data/siteData'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()

    const matchedServices = SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.features.some((f) => f.toLowerCase().includes(q))
    ).map((s) => ({
      type: 'Service',
      title: s.title,
      description: s.description,
      href: '#services-section',
    }))

    const matchedProjects = PROJECTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.details.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.materials?.some((m) => m.toLowerCase().includes(q))
    ).map((p) => ({
      type: 'Project',
      title: p.title,
      description: `${p.location} • ${p.details}`,
      href: '#gallery-section',
    }))

    return [...matchedServices, ...matchedProjects]
  }, [query])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-[#e2d9d0] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#dee8ff] flex items-center gap-3 bg-[#f0f3ff]">
          <Search className="w-5 h-5 text-[#003673]" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search finishes, materials, pebble, spas, ledges..."
            className="w-full bg-transparent text-sm sm:text-base text-[#111c2d] placeholder:text-[#737782] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#737782] hover:text-[#111c2d]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#737782] hover:bg-[#dee8ff] hover:text-[#003673]"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          {query.trim() === '' ? (
            <div className="py-6 text-center text-xs text-[#737782]">
              <p className="font-semibold text-sm text-[#111c2d] mb-2">Popular Searches:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {['Quartz Pebble', 'Baja Sun Shelf', 'Rock Grotto', 'Variable Pump', 'Spanish Tile'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 rounded-full bg-[#dee8ff] text-[#003673] hover:bg-[#d5e3ff] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((res, i) => (
              <a
                key={i}
                href={res.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#f0f3ff] transition-colors group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#dee8ff] text-[#003673]">
                      {res.type}
                    </span>
                    <span className="font-display text-sm font-bold text-[#111c2d]">
                      {res.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#424751] mt-1 line-clamp-1">
                    {res.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#737782] group-hover:text-[#003673] group-hover:translate-x-1 transition-all" />
              </a>
            ))
          ) : (
            <div className="py-8 text-center text-sm text-[#737782]">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
