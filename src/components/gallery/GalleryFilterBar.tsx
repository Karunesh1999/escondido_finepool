import React from 'react'
import { MapPin, ArrowUpDown, ChevronDown } from 'lucide-react'

interface GalleryFilterBarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  selectedRegion: string
  onRegionChange: (region: string) => void
  selectedSort: string
  onSortChange: (sort: string) => void
}

export const GalleryFilterBar: React.FC<GalleryFilterBarProps> = ({
  activeCategory,
  onCategoryChange,
  selectedRegion,
  onRegionChange,
  selectedSort,
  onSortChange,
}) => {
  const filters = [
    { id: 'all', label: 'All Projects (36)' },
    { id: 'pebble', label: 'Pebble & Quartz (14)' },
    { id: 'structural', label: 'Baja Shelves & Structural (9)' },
    { id: 'spas', label: 'Custom Spas (7)' },
    { id: 'masonry', label: 'Coping & Masonry (6)' },
  ]

  return (
    <section
      id="gallery-filter-bar"
      className="sticky top-[120px] z-30 w-full bg-white/95 backdrop-blur-md py-4 border-b border-slate-200/90 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Filter Pills: Natural flex-wrap, no clipping, no horizontal scrollbars */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
          {filters.map((btn) => {
            const isActive = activeCategory === btn.id
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => onCategoryChange(btn.id)}
                className={`px-3.5 py-2 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#003673] text-white shadow-sm ring-1 ring-[#003673]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/70'
                }`}
              >
                {btn.label}
              </button>
            )
          })}
        </div>

        {/* Location & Sorting Controls */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-2.5 w-full lg:w-auto shrink-0">
          {/* Location Select */}
          <div className="relative inline-flex items-center">
            <MapPin className="w-4 h-4 absolute left-3 text-slate-500 pointer-events-none" />
            <select
              aria-label="Filter by Location"
              value={selectedRegion}
              onChange={(e) => onRegionChange(e.target.value)}
              className="pl-9 pr-8 py-2 rounded-xl bg-slate-100 text-slate-800 font-display text-xs font-semibold appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#003673] border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <option>All North County Regions</option>
              <option>Escondido</option>
              <option>Rancho Bernardo</option>
              <option>Poway</option>
              <option>San Marcos</option>
              <option>Del Mar / Coastal</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2.5 text-slate-500 pointer-events-none" />
          </div>

          {/* Sort Select */}
          <div className="relative inline-flex items-center">
            <select
              aria-label="Sort Order"
              value={selectedSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="pl-3.5 pr-8 py-2 rounded-xl bg-slate-100 text-slate-800 font-display text-xs font-semibold appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#003673] border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <option>Sort: Recent Completions</option>
              <option>Sort: Largest Transformations</option>
              <option>Sort: Pebble Sheen Finishes</option>
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 absolute right-2.5 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
