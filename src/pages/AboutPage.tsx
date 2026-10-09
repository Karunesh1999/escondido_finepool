import React, { useRef } from 'react'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutOrigin } from '@/components/about/AboutOrigin'
import { MissionVision } from '@/components/about/MissionVision'
import { WhyChooseUsPillars } from '@/components/about/WhyChooseUsPillars'
import { ProcessProtocol } from '@/components/about/ProcessProtocol'
import { AboutCta } from '@/components/about/AboutCta'
import { EstimateSection } from '@/components/sections/EstimateSection'

export const AboutPage: React.FC = () => {
  const estimateRef = useRef<HTMLDivElement>(null)

  const scrollToEstimate = () => {
    estimateRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full flex flex-col">
      {/* 1. Sub-Hero / Breadcrumb Banner Section */}
      <AboutHero />

      {/* 2. Company Origin & Narrative Section (Mastery In Renovation) */}
      <AboutOrigin />

      {/* 3. Mission & Vision Section (Guiding Purpose & Future) */}
      <MissionVision />

      {/* 4. "Why Choose Escondido Fine Pools?" (5 Pillars & Performance Stats) */}
      <WhyChooseUsPillars />

      {/* 5. Standards of Craftsmanship & Process (4-Stage Protocol) */}
      <ProcessProtocol />

      {/* 6. High-Impact Lead & Support CTA Section */}
      <AboutCta onConsultationClick={scrollToEstimate} />

      {/* 7. Free In-Home Estimate Intake Section */}
      <div ref={estimateRef}>
        <EstimateSection />
      </div>
    </div>
  )
}
