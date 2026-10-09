import React, { useState } from 'react'
import {
  Sparkles,
  ArrowRight,
  Droplets,
  Layers,
  Palette,
  ShieldCheck,
  Check,
  X,
  Maximize2,
  Calendar,
  MapPin,
  Waves,
} from 'lucide-react'

export interface ProjectCardData {
  id: string
  title: string
  category: 'pebble' | 'structural' | 'spas' | 'masonry'
  region: string
  locationText: string
  completedDate: string
  image: string
  fallbackImage?: string
  alt: string
  tags: string[]
  description: string
  highlight: string
  highlightIcon: 'water' | 'palette' | 'pool' | 'layers' | 'verified' | 'spa'
  scopeDetails: {
    duration: string
    finishType: string
    copingMaterial: string
    equipmentUpgrade: string
    keyFeatures: string[]
  }
}

const PROJECTS_DATA: ProjectCardData[] = [
  {
    id: 'proj-1',
    title: 'Natural Rock Grotto & Heated Spa Restoration',
    category: 'spas',
    region: 'Escondido',
    locationText: 'Lake Wohlford, Escondido',
    completedDate: 'Completed Sep 2024',
    image: '/images/gallery/grotto_spa.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAldNIlicKI3iRgzPvJdafFe_ypuHQYN7_hcJuEdEnfx4PuWMULqtVGZh2nnV0G_IiSN79mxOTTObtKM1rlRdvZpyKFdMIr4fsd4XyoKcQbfm6woX-hD6pL05KQK5A3bI6EdFMNLGATrGH5bPUJ57Qn3Wgqd_zL4ZCl4es9hN6vGhIDp1TcrqDqq9X9U0F7iBQ-UsSehxUTAx_wTd743jgIy504WZdGvh0allabN5s',
    alt: 'Lake Wohlford custom rock grotto and heated spa restoration showing natural sandstone boulder masonry',
    tags: ['Rock Grotto', 'Custom Spa', 'Quartz Finish'],
    description:
      'Structural restoration of failing artificial rockwork replaced with hand-selected local sandstone boulders, cascading shear descent waterfall, and micro-smooth quartz interior.',
    highlight: 'Rebuilt Waterfall',
    highlightIcon: 'water',
    scopeDetails: {
      duration: '14 Days On-Site',
      finishType: 'French Gray Quartz Matrix',
      copingMaterial: 'Local Sandstone Hand-Chiseled Boulders',
      equipmentUpgrade: 'Hayward 400K BTU Gas Spa Heater & 8 Hydrotherapy Jets',
      keyFeatures: [
        'Complete removal of cracked hollow faux-rock matrix',
        'Reinforced hydraulic manifold for whisper-quiet shear water sheet',
        'Sub-surface LED amber & azure dual-zone accent lighting',
        'Custom safety ledge with rounded safety edge bullnose',
      ],
    },
  },
  {
    id: 'proj-2',
    title: 'Mid-Century Modern Pebble Azure Overhaul',
    category: 'pebble',
    region: 'Escondido',
    locationText: 'Del Dios / Lake Hodges',
    completedDate: 'Completed Aug 2024',
    image: '/images/gallery/modern_azure.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZclJ-zReRFPdMh28ZM4oMQgBNeWSMcWnnPYvRM3cT-rp0n5HWOHdufm-z82VhpUXnG7Am6s3Kepv1w_sobIPErGhJJTFZ6bwNcNjm599FvC0Ka2dzitnTU64YZL4sKvrADiQLYKTDP1ooywJ7KFfNozoAivMsBIdDC3BeARyIPy8SbmiOB1ZmaeZ2RzH3McHLBERnYoGJlNdhHRY8hDPayi73it7Qyw60bCLf-8',
    alt: 'Del Dios modern pool renovation with rectilinear architectural lines and brilliant Midnight Azure pebble finish',
    tags: ['Azure Pebble', 'Italian Porcelain', 'LED Automation'],
    description:
      'Preserved mid-century architectural geometry with a rich Midnight Azure pebble resurfacing, frosted Italian waterline tiles, and high-efficiency smart LED spectrum controls.',
    highlight: '25-Yr Durability',
    highlightIcon: 'palette',
    scopeDetails: {
      duration: '10 Days Turnaround',
      finishType: 'Pebble Sheen Midnight Azure Aggregate',
      copingMaterial: 'Flush Mitered Gray Porcelain Coping Edge',
      equipmentUpgrade: 'Pentair IntelliConnect App-Controlled Automation',
      keyFeatures: [
        'Full bond coat multi-layer mechanical hydro-blasting preparation',
        'Frosted 6x6 Italian waterline porcelain impervious to calcium lines',
        'Color-matched expansion joint silicone caulking mastic',
        'Energy-saving variable speed pump installation',
      ],
    },
  },
  {
    id: 'proj-3',
    title: 'Baja Ledge & Sunken Swim-Up Architecture',
    category: 'structural',
    region: 'Poway',
    locationText: 'Poway Valley Estates',
    completedDate: 'Completed Jul 2024',
    image: '/images/gallery/baja_shelf.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBsyG35wHDXEYNOBFYMEm06I51TOYy8foZ_EQXjWUVmFdBQndavQihNAlmG4tMHl9Vdo1XY67gHj2ARgY9nHgutBX7C8QyV-xH38dWmaFl-WiZWmcL0fCF6F_UEFswNk5ksPzfHv9aAsnBPZYHyve_m5PRNaqPPawNDPwccwSnxdE8XmmP7V7_b4dORFH-_myZg0d82odz1hyN1O_dPLKpjjD818lJZoefrfbElYcs',
    alt: 'Poway luxury custom pool with new 18-inch Baja tanning shelf and integrated umbrella sleeve',
    tags: ['Baja Shelf', 'Bubblers', 'French Gray'],
    description:
      'Excavation and gunite integration of an 18-inch deep family tanning shelf featuring dual stainless umbrella anchor sleeves, soothing fountain bubblers, and non-slip aggregate.',
    highlight: '+140 sq ft Usable Area',
    highlightIcon: 'pool',
    scopeDetails: {
      duration: '16 Days Structural Build',
      finishType: 'French Gray Micro-Pebble with Abalone Sparkle',
      copingMaterial: 'Honed Silver Travertine 12-inch Pavers',
      equipmentUpgrade: 'Dedicated Bubbler Booster Circuit & IntelliFlo 3HP',
      keyFeatures: [
        'Rebar tie-in to existing gunite shell with structural engineering permit',
        'Dual flush umbrella sleeve mounts with screw-in caps',
        'Micro-texture slip-resistant finish safe for toddlers and pets',
        'Zero-depth transit step for effortless gradual entry',
      ],
    },
  },
  {
    id: 'proj-4',
    title: 'Travertine Masonry & Charcoal Aggregate',
    category: 'masonry',
    region: 'San Marcos',
    locationText: 'San Marcos Twin Oaks',
    completedDate: 'Completed Jun 2024',
    image: '/images/gallery/travertine_coping.jpg',
    fallbackImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0UhmUSDh7dArmgf6M8hTxPKTOGjTaBQoOovKZFbsHPinWnZzljc9ngmzMo1iiguikWzA_TbkWlt1JxEvvErZtqxlXbDrJzKX5BTYuOsEV3XLJGLlcy4oUAvH_UDQAP9TJzqo0fb0e1BXbMh77eELkxsyjci46zmYctnFiDqd5-H8jxW8jbWV5t8ekVHUBLk-CEdDP1AvLi74e-t1-gUWDfv6UAC6dyWgUgXKukfw',
    alt: 'San Marcos swimming pool transformation with honed walnut travertine coping and dark charcoal pebble interior',
    tags: ['Travertine Coping', 'Charcoal Aggregate', 'Cantilever Steps'],
    description:
      'Full perimeter coping overhaul using hand-beveled natural travertine, custom floating entry steps, and dark charcoal quartz that reflects the surrounding eucalyptus trees.',
    highlight: 'Hand-Chiseled Stone',
    highlightIcon: 'layers',
    scopeDetails: {
      duration: '12 Days On-Site',
      finishType: 'Charcoal Deep Quartz Reflection Finish',
      copingMaterial: 'Walnut Vein-Cut Natural Travertine Bullnose',
      equipmentUpgrade: 'Jandy Cartridge Filter 460 sq ft High Capacity',
      keyFeatures: [
        'Removal of deteriorating 1990s brick coping perimeter',
        'Floating cantilever concrete step tread re-sculpting',
        'Deep thermal absorption boosting ambient pool water by +4°F',
        'Penetrating natural stone sealant preventing salt pitting',
      ],
    },
  },
  {
    id: 'proj-5',
    title: 'Structural Crack Remediation & Plaster Renewal',
    category: 'structural',
    region: 'Escondido',
    locationText: 'Escondido Country Club',
    completedDate: 'Completed May 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7EA6j_auke8crhmtHSVN_UG7oWjL2ZtVyb_i0xJCmDNQlsuXsv_AZX84N0Gl3_AxoKZ1Vv8VuJ7JhKK5pB0Bv5AsAUgkv_rLDLmE3QDa5cVrLtDqIuPiXp0AIdbe1UAKVF83KrUvtiNPQK-HSjPfocSQiDH3ABtAraCPcfPJ2TYhutslKsdGt_tGzmI_Z4rY3pHcBUWQ60VqJmS8AHMNN4gHYXleniekdoLjov0',
    alt: 'Major structural pool restoration in Escondido Country Club showing carbon fiber torque staple stitching',
    tags: ['Structural Stitching', 'Rust Excision', 'Plaster Renewal'],
    description:
      'Critical repair of a 22-foot settling crack utilizing torque-staple carbon fiber grid stitching, epoxy concrete consolidation, and high-density waterproof plaster.',
    highlight: '10-Yr Structural Cert',
    highlightIcon: 'verified',
    scopeDetails: {
      duration: '8 Days Express Remediation',
      finishType: 'High-Density Silica Quartz Waterproof Plaster',
      copingMaterial: 'Repointed & Stabilized Existing Flagstone Coping',
      equipmentUpgrade: 'Pressure Relief Hydrostatic Valves Replacement',
      keyFeatures: [
        '18 high-tensile carbon fiber torque staples embedded in structural slots',
        'Structural epoxy injection filling subterranean voids',
        'Rebar rust spot excision and zinc cold-galvanize coating',
        'Passed full pressure hydrostatic hold test before replastering',
      ],
    },
  },
  {
    id: 'proj-6',
    title: 'Zero-Grade Beach Entry & Quartzite Water Wall',
    category: 'masonry',
    region: 'Escondido',
    locationText: 'Highland Valley / San Pasqual',
    completedDate: 'Completed Apr 2024',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnXPgWCcdgPXMsOcRUQ_dMVSp6zQG7azU7Jpo7a0ZB53Ug_QjS5lu1jfMuWY-qSq94xogLJ3vROGZHhMsdkjHdCXqlGhx4eDJswVQCtlYdriywWHPJ2mQfCnR4M9OkNhfHjbxTXgDMg-okljpcrIU8e0u8671spTnQYqBA5QJUrl28u7dqQDdKmLs0BRpoi9rqmEAHvmB7BoEZHTvL7gqYRBUwqtfFCTrdMN8KKss',
    alt: 'Highland Valley luxury estate swimming pool with gradual zero-grade beach entry and quartzite water wall',
    tags: ['Beach Entry', 'Water Wall', 'Saltwater System'],
    description:
      'Bespoke zero-depth beach entry conversion paired with an 18-foot stacked quartzite sheer water wall and Hayward OmniLogic saltwater sanitization.',
    highlight: 'Resort Grade',
    highlightIcon: 'spa',
    scopeDetails: {
      duration: '21 Days Estate Build',
      finishType: 'Tahoe Blue Satin Micro-Pebble Finish',
      copingMaterial: 'Golden Quartzite Ledgestone Wall Cladding',
      equipmentUpgrade: 'Hayward OmniLogic Salt Chlorine Generator & Automation',
      keyFeatures: [
        'Gradual slip-resistant slope entry matching natural resort style',
        'Triple stainless steel shear descent waterfalls embedded in stone wall',
        'Automated salt chlorine generator providing silky skin-soft water',
        'Independent dual-pump plumbing lines for waterfall volume control',
      ],
    },
  },
]

interface GalleryGridProps {
  activeCategory: string
  selectedRegion: string
  selectedSort: string
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  activeCategory,
  selectedRegion,
  selectedSort,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Filter projects by category and region
  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory
    const matchesRegion =
      selectedRegion === 'All North County Regions' ||
      proj.region.toLowerCase().includes(selectedRegion.toLowerCase()) ||
      proj.locationText.toLowerCase().includes(selectedRegion.toLowerCase())
    return matchesCategory && matchesRegion
  })

  // Sort projects if specified
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (selectedSort === 'Sort: Pebble Sheen Finishes') {
      const aIsPebble = a.tags.some((t) => t.toLowerCase().includes('pebble'))
      const bIsPebble = b.tags.some((t) => t.toLowerCase().includes('pebble'))
      return aIsPebble === bIsPebble ? 0 : aIsPebble ? -1 : 1
    }
    return 0
  })

  return (
    <section className="w-full py-16 sm:py-20 bg-white border-b border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-display text-xs uppercase tracking-wider text-[#003673] font-bold">
              North County Portfolio Catalog
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111c2d] font-bold">
              Recent Pool &amp; Spa Craftsmanship
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#424751] leading-relaxed">
              Examine our high-standard craftsmanship across Escondido, Poway, San Marcos, and surrounding communities. Every installation inspected and signed off by our licensed builder.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#424751] font-display text-xs sm:text-sm font-semibold shrink-0">
            <Sparkles className="w-4 h-4 text-[#003673]" />
            <span>Showing {sortedProjects.length} of {PROJECTS_DATA.length} Featured Case Studies</span>
          </div>
        </div>

        {/* 6-Card Gallery Grid */}
        {sortedProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#f0f3ff] border border-[#dee8ff]">
            <p className="font-display text-base font-bold text-[#111c2d]">
              No projects found matching the selected filter criteria.
            </p>
            <p className="text-xs text-[#737782] mt-1">
              Try switching back to &ldquo;All Projects&rdquo; or selecting &ldquo;All North County Regions&rdquo;.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#f9f9ff] shadow-md hover:shadow-xl transition-all duration-300 group border border-[#dee8ff]/80"
              >
                {/* Card Media Header */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#dee8ff]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    onError={(e) => {
                      if (project.fallbackImage) {
                        e.currentTarget.src = project.fallbackImage
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                    onClick={() => setLightboxImage(project.image)}
                  />

                  {/* Location Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm font-display text-[11px] text-[#003673] font-bold shadow-sm">
                    {project.locationText}
                  </div>

                  {/* Completion Date */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-[#263143]/85 text-[#ecf1ff] font-display text-[11px] font-medium backdrop-blur-sm">
                    {project.completedDate}
                  </div>

                  {/* Quick Zoom Trigger */}
                  <button
                    type="button"
                    onClick={() => setLightboxImage(project.image)}
                    aria-label={`Enlarge photo for ${project.title}`}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                  <div className="flex flex-col gap-2.5">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-[#dee8ff] text-[#003673] font-display text-[11px] font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#111c2d] leading-snug group-hover:text-[#003673] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#424751] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-3.5 border-t border-[#dee8ff] flex items-center justify-between font-display text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-[#003673]">
                      <Droplets className="w-3.5 h-3.5 text-[#003673]" />
                      {project.highlight}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 font-bold text-[#003673] hover:text-[#0a4d9a] transition-colors cursor-pointer group/btn"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Scope Detail Modal / Drawer */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] border border-[#dee8ff]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f0f3ff] hover:bg-[#dee8ff] text-[#111c2d] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#d7e3ff] text-[#003673] font-display text-xs font-bold uppercase tracking-wider">
                  {selectedProject.locationText}
                </span>
                <span className="text-xs text-[#737782]">{selectedProject.completedDate}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#111c2d]">
                {selectedProject.title}
              </h3>

              {/* Photo Preview inside Modal */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#dee8ff] shadow-inner">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  onError={(e) => {
                    if (selectedProject.fallbackImage) {
                      e.currentTarget.src = selectedProject.fallbackImage
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-sm text-[#424751] leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technical Scope Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#dee8ff]">
                  <span className="block text-[11px] font-bold text-[#737782] uppercase tracking-wider">
                    Execution Timeline
                  </span>
                  <span className="font-display text-sm font-bold text-[#003673]">
                    {selectedProject.scopeDetails.duration}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#dee8ff]">
                  <span className="block text-[11px] font-bold text-[#737782] uppercase tracking-wider">
                    Interior Finish
                  </span>
                  <span className="font-display text-sm font-bold text-[#003673]">
                    {selectedProject.scopeDetails.finishType}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#dee8ff]">
                  <span className="block text-[11px] font-bold text-[#737782] uppercase tracking-wider">
                    Coping &amp; Masonry
                  </span>
                  <span className="font-display text-sm font-bold text-[#003673]">
                    {selectedProject.scopeDetails.copingMaterial}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#f0f3ff] border border-[#dee8ff]">
                  <span className="block text-[11px] font-bold text-[#737782] uppercase tracking-wider">
                    Hydraulic &amp; Automation
                  </span>
                  <span className="font-display text-sm font-bold text-[#003673]">
                    {selectedProject.scopeDetails.equipmentUpgrade}
                  </span>
                </div>
              </div>

              {/* Key Features Checklist */}
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="font-display text-xs font-bold text-[#111c2d] uppercase tracking-wider">
                  Detailed Scope Tasks Executed
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.scopeDetails.keyFeatures.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#003673] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#424751]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Inside Modal */}
              <div className="pt-4 mt-2 border-t border-[#dee8ff] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#003673] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Backed by 10-Yr Structural Warranty</span>
                </div>
                <a
                  href="#estimate-section"
                  onClick={() => {
                    setSelectedProject(null)
                    document.querySelector('#estimate-section')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-4 py-2 rounded-lg bg-[#003673] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#0a4d9a] transition-colors"
                >
                  Request Similar Transformation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Photo Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close enlarged photo"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged pool project view"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
