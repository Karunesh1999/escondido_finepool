import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Waves, Search, MessageSquare, User, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/data/siteData'

interface NavbarProps {
  onOpenSearch?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent, link: { name: string; path: string; href: string }) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (link.path === '/') {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (link.path === '/about-us') {
      navigate('/about-us')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (link.path === '/services') {
      navigate('/services')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (link.path === '/portfolio-gallery' || link.path === '/portfolio') {
      navigate('/portfolio-gallery')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (link.path === '/contact-us' || link.path === '/contact') {
      navigate('/contact-us')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Anchored sections like /#why-us-section
      const targetHash = link.href.includes('#') ? '#' + link.href.split('#')[1] : ''
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          if (targetHash) {
            document.querySelector(targetHash)?.scrollIntoView({ behavior: 'smooth' })
          }
        }, 120)
      } else {
        if (targetHash) {
          document.querySelector(targetHash)?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const isCurrentActive = (link: { name: string; path: string }) => {
    if (link.path === '/' && location.pathname === '/') return true
    if (link.path === '/about-us' && location.pathname === '/about-us') return true
    if (link.path === '/services' && location.pathname === '/services') return true
    if (
      (link.path === '/portfolio-gallery' || link.path === '/portfolio') &&
      (location.pathname === '/portfolio-gallery' || location.pathname === '/portfolio')
    )
      return true
    if (
      (link.path === '/contact-us' || link.path === '/contact') &&
      (location.pathname === '/contact-us' || location.pathname === '/contact')
    )
      return true
    return false
  }

  return (
    <nav className="bg-white border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group shrink-0 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-[#003673] flex items-center justify-center text-white shadow-sm group-hover:bg-[#0a4d9a] transition-colors">
            <Waves className="w-6 h-6 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold text-[#003673] tracking-tight leading-none group-hover:text-[#0a4d9a] transition-colors">
              Escondido
            </span>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#737782] mt-0.5">
              Fine Pools
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const active = isCurrentActive(link)

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                  active
                    ? 'bg-[#003673]/10 text-[#003673] font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Action Cluster (Right) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search */}
          <button
            type="button"
            aria-label="Search projects and services"
            onClick={onOpenSearch}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-[#003673] transition-all cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Free Estimate CTA */}
          <button
            onClick={() => {
              navigate('/contact-us')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#003673] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:bg-[#0a4d9a] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#a1c1ff]" />
            <span>Get Free Estimate</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-[#111c2d] hover:bg-[#dee8ff] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e2d9d0] bg-white px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link) => {
            const active = isCurrentActive(link)

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide cursor-pointer ${
                  active
                    ? 'bg-[#dee8ff] text-[#003673] font-bold'
                    : 'text-[#424751] hover:bg-[#f0f3ff]'
                }`}
              >
                {link.name}
              </a>
            )
          })}
          <div className="pt-3 border-t border-[#dee8ff]">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                if (location.pathname !== '/') {
                  navigate('/')
                  setTimeout(() => {
                    document.querySelector('#estimate-section')?.scrollIntoView({ behavior: 'smooth' })
                  }, 120)
                } else {
                  document.querySelector('#estimate-section')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#003673] text-white text-sm font-semibold shadow-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free Estimate Now</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
