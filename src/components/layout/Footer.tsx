import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Waves,
  Shield,
  ChevronRight,
  Layers,
  Sparkles,
  Wrench,
  Droplets,
  MapPin,
  Phone,
  Clock,
  Globe,
  Camera,
} from 'lucide-react'
import { COMPANY_INFO, NAV_LINKS } from '@/data/siteData'

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLinkClick = (e: React.MouseEvent, link: { name: string; path: string; href: string }) => {
    e.preventDefault()
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

  return (
    <footer className="w-full bg-[#003673] text-white pt-16 pb-8 border-t border-[#0a4d9a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info & License */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 w-fit"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0a4d9a] flex items-center justify-center text-white shadow-sm">
                <Waves className="w-6 h-6" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                {COMPANY_INFO.name}
              </span>
            </Link>
            <p className="text-sm text-[#abc7ff] leading-relaxed">
              Artisanal custom pool architecture, pebble resurfacing, zero-edge conversions, and restorative luxury outdoor living spaces across North County San Diego.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#003b5d] text-xs font-semibold tracking-wider text-[#cce5ff] border border-[#00537f] w-fit">
              <Shield className="w-4 h-4 text-[#93ccff]" />
              <span>{COMPANY_INFO.license} • Bonded &amp; Insured</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[#abc7ff]">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#93ccff]" />
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#93ccff]" />
                <a
                  href="/#why-us-section"
                  onClick={(e) => handleLinkClick(e, { name: 'Why Us', path: '/#why-us-section', href: '#why-us-section' })}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Client FAQs &amp; Warranty
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#93ccff]" />
                <a
                  href="/#reviews-section"
                  onClick={(e) => handleLinkClick(e, { name: 'Reviews', path: '/#reviews-section', href: '#reviews-section' })}
                  className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                >
                  Client Reviews &amp; Ratings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Craftsmanship */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
              Core Craftsmanship
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#abc7ff]">
              <li className="flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>Structural Modifications &amp; Modern Design</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>Surface Remodeling &amp; Luxury Finishes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Wrench className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>Critical Maintenance &amp; Equipment Systems</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Droplets className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>Custom Spas &amp; Water Architecture</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-1">
              Contact &amp; Location
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#abc7ff]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_INFO.phone1Raw}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone1}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone2Raw}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#93ccff] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Website Link"
                className="w-9 h-9 rounded-lg bg-[#003b5d] hover:bg-[#00537f] flex items-center justify-center text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram Link"
                className="w-9 h-9 rounded-lg bg-[#003b5d] hover:bg-[#00537f] flex items-center justify-center text-white transition-colors"
              >
                <Camera className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-[#0a4d9a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#abc7ff]">
          <span>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. CA Contractor License #1145783.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#d7e3ff]">Escondido, CA &amp; North County Oasis Transformations</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
