import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, X, Sparkles, MapPin, Layers } from 'lucide-react'
import { PROJECTS } from '@/data/siteData'
import { ProjectItem } from '@/types'

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'remodels' | 'spas' | 'plaster'>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'remodels', label: 'Remodels' },
    { id: 'spas', label: 'Custom Spas' },
    { id: 'plaster', label: 'Plaster & Pebble' },
  ] as const

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section id="gallery-section" className="w-full py-20 sm:py-28 bg-[#f0f3ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#003673] block mb-2">
              Our Portfolio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#111c2d] tracking-tight">
              Recent Oasis Transformations
            </h2>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-[#e2d9d0]/80 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#003673] text-white shadow-sm'
                      : 'text-[#424751] hover:text-[#111c2d] hover:bg-[#f0f3ff]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Bento-style Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative rounded-2xl overflow-hidden group h-[380px] bg-[#dee8ff] shadow-md border border-[#e2d9d0]/60 cursor-pointer hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Dark Scrim for Perfect Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003673]/95 via-[#003673]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-display text-[11px] uppercase tracking-widest text-[#d5e3ff] font-bold block mb-1">
                  {project.categoryLabel}
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold mb-1 leading-snug">
                  {project.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#abc7ff] flex items-center justify-between mt-2">
                  <span>{project.location} • {project.details}</span>
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#003673] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA Footnote */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/portfolio-gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#003673] text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#0a4d9a] hover:-translate-y-0.5 transition-all shadow-md"
          >
            <span>Explore Complete Gallery &amp; Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#estimate-section"
            className="inline-flex items-center gap-2 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#003673] hover:text-[#0a4d9a] hover:underline underline-offset-4 transition-colors"
          >
            <span>Schedule an on-site portfolio review</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Interactive Project Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#003673] text-white font-display text-xs font-bold uppercase tracking-wider">
                  {selectedProject.categoryLabel}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#111c2d]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#424751] flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4 text-[#003673]" />
                    <span>{selectedProject.location} — {selectedProject.details}</span>
                  </p>
                </div>
              </div>

              {selectedProject.materials && (
                <div>
                  <h5 className="font-display text-xs font-bold uppercase tracking-wider text-[#737782] mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Materials &amp; Craft Finishes</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#f0f3ff] text-[#003673] font-display text-xs font-semibold rounded-lg border border-[#dee8ff]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-[#dee8ff] flex items-center justify-between">
                <a
                  href="#estimate-section"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#003673] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#0a4d9a] transition-all shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Similar Transformation</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-semibold text-[#737782] hover:text-[#111c2d] uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
