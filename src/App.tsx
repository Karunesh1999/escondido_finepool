import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ServicesPage } from '@/pages/ServicesPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { ContactPage } from '@/pages/ContactPage'
import { FloatingActions } from '@/components/common/FloatingActions'
import { SearchModal } from '@/components/common/SearchModal'

// Component to scroll to top automatically whenever the route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}

export const App: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#003673] selection:text-white">
      <ScrollToTop />

      {/* Fixed Header: TopBar + Navbar with React Router Active Route State */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* Main Content Routed Area */}
      <main className="w-full pt-[120px] flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio-gallery" element={<GalleryPage />} />
          <Route path="/portfolio" element={<GalleryPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Luxury Footer with Router Navigation Links */}
      <Footer />

      {/* Floating Action Pill & Scroll to top */}
      <FloatingActions />

      {/* Global Quick Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

export default App
