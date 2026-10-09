import React, { useEffect } from 'react'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactDirectHub } from '@/components/contact/ContactDirectHub'
import { ContactConsultationForm } from '@/components/contact/ContactConsultationForm'
import { ContactProtocolSteps } from '@/components/contact/ContactProtocolSteps'
import { ContactCoverageArea } from '@/components/contact/ContactCoverageArea'
import { ContactFaq } from '@/components/contact/ContactFaq'
import { ContactQuickCallBanner } from '@/components/contact/ContactQuickCallBanner'

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact & Consultation | Escondido Fine Pools'
  }, [])

  return (
    <div className="w-full flex flex-col">
      {/* 1. Status Notification Bar & Architectural Hero */}
      <ContactHero />

      {/* 2. Direct Communication Hub & Intake Form */}
      <section className="w-full bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Contractor Communication Hub */}
            <div className="lg:col-span-5">
              <ContactDirectHub />
            </div>

            {/* Right Column: Modernized Architectural Consultation Intake Form */}
            <div className="lg:col-span-7">
              <ContactConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-Step Consultation Transparency Protocol */}
      <ContactProtocolSteps />

      {/* 4. 50-Mile Service Radius & Regional North County Coverage Map */}
      <ContactCoverageArea />

      {/* 5. Frequently Asked Questions Accordion */}
      <ContactFaq />

      {/* 6. Quick Direct Call Action Banner */}
      <ContactQuickCallBanner />
    </div>
  )
}

export default ContactPage
