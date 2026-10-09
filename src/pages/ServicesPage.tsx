import React, { useRef } from 'react'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesStickyNav } from '@/components/services/ServicesStickyNav'
import { SurfaceRemodelingCategory } from '@/components/services/SurfaceRemodelingCategory'
import { StructuralDesignCategory } from '@/components/services/StructuralDesignCategory'
import { HydraulicEquipmentCategory } from '@/components/services/HydraulicEquipmentCategory'
import { MasticSafetyCategory } from '@/components/services/MasticSafetyCategory'
import { RemodelingProcessSteps } from '@/components/services/RemodelingProcessSteps'
import { ServicesFaq } from '@/components/services/ServicesFaq'
import { ServicesCtaBanner } from '@/components/services/ServicesCtaBanner'
import { EstimateSection } from '@/components/sections/EstimateSection'

export const ServicesPage: React.FC = () => {
  const estimateRef = useRef<HTMLDivElement>(null)

  const scrollToEstimate = () => {
    estimateRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero & Architectural Overview */}
      <ServicesHero />

      {/* 2. Sticky Sub-Navigation Anchor Bar */}
      <ServicesStickyNav />

      {/* 3. Service Category 01: Surface Remodeling & Luxury Finishes */}
      <SurfaceRemodelingCategory />

      {/* 4. Service Category 02: Structural Modifications & Modern Design */}
      <StructuralDesignCategory />

      {/* 5. Service Category 03: Critical Maintenance, Hydraulic & Equipment */}
      <HydraulicEquipmentCategory />

      {/* 6. Service Category 04: Mastic & Perimeter Safety Solutions */}
      <MasticSafetyCategory />

      {/* 7. 4-Step Streamlined Remodeling Process */}
      <RemodelingProcessSteps />

      {/* 8. Frequently Asked Questions (FAQs) Accordion */}
      <ServicesFaq />

      {/* 9. High-Conversion CTA Callout Banner */}
      <ServicesCtaBanner onScheduleConsult={scrollToEstimate} />

      {/* 10. Integrated Estimate & Free Quote Request Form */}
      <div ref={estimateRef}>
        <EstimateSection />
      </div>
    </div>
  )
}
