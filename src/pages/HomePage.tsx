import React from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { MetricsStrip } from '@/components/sections/MetricsStrip'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { BeforeAfterSlider } from '@/components/sections/BeforeAfterSlider'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { EstimateSection } from '@/components/sections/EstimateSection'

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section & Value Pillars */}
      <HeroSection />

      {/* Metrics & Social Proof Strip */}
      <MetricsStrip />

      {/* Mastery in Renovation (About Preview) */}
      <AboutSection />

      {/* Exceptional Unmatched Quality Services */}
      <ServicesSection />

      {/* The Escondido Advantage (Why Us) */}
      <WhyUsSection />

      {/* Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* Recent Oasis Transformations (Portfolio Showcase) */}
      <PortfolioSection />

      {/* Get In Touch & Free Estimate Request Form */}
      <EstimateSection />
    </>
  )
}
