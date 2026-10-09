import React, { useState, useRef } from 'react'
import { GalleryHero } from '@/components/gallery/GalleryHero'
import { GalleryFilterBar } from '@/components/gallery/GalleryFilterBar'
import { GalleryCaseStudySpotlight } from '@/components/gallery/GalleryCaseStudySpotlight'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { GallerySwatches } from '@/components/gallery/GallerySwatches'
import { GalleryWarrantyBanner } from '@/components/gallery/GalleryWarrantyBanner'
import { GalleryCtaBanner } from '@/components/gallery/GalleryCtaBanner'
import { EstimateSection } from '@/components/sections/EstimateSection'

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedRegion, setSelectedRegion] = useState<string>('All North County Regions')
  const [selectedSort, setSelectedSort] = useState<string>('Sort: Recent Completions')
  const estimateRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full flex flex-col">
      {/* 1. Breadcrumb & Page Header Banner */}
      <GalleryHero />

      {/* 2. Filter & Category Selection Sticky Bar */}
      <GalleryFilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />

      {/* 3. Featured Case Study Spotlight: 2-Column Deep Dive with Before/After Slider */}
      <GalleryCaseStudySpotlight />

      {/* 4. Visual Transformation Grid (6 Comprehensive Luxury Cards) */}
      <GalleryGrid
        activeCategory={activeCategory}
        selectedRegion={selectedRegion}
        selectedSort={selectedSort}
      />

      {/* 5. Interactive Materials & Finishes Swatch Palette */}
      <GallerySwatches />

      {/* 6. Homeowner Confidence & Warranty Guarantee Banner */}
      <GalleryWarrantyBanner />

      {/* 7. Unified Pre-Footer Consultation CTA Section */}
      <GalleryCtaBanner />

      {/* 8. Integrated Estimate Form */}
      <div ref={estimateRef} id="estimate-section">
        <EstimateSection />
      </div>
    </div>
  )
}
