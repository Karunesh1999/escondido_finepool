import React from 'react'
import { Touchpad, CheckCircle, Sparkles } from 'lucide-react'

interface SwatchItem {
  id: string
  title: string
  badge: string
  subtitle: string
  description: string
  lifespan: string
  image: string
  alt: string
}

const SWATCHES: SwatchItem[] = [
  {
    id: 'swatch-1',
    title: 'Pebble Sheen Azure Blue',
    badge: 'Medium Pebble',
    subtitle: 'Resort Mediterranean Hue',
    description: 'Deep vibrant blue refraction with velvety foot texture. Resistant to chemical etching.',
    lifespan: '20–25+ Yrs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBSAgpZSj23tUOLq6EljWIigZS_lWeUgZwB7t4XODZ3cXAU-JFzjPLHr8X2vaNnAATddmdHxvhgK7mZ_UZTQ_tN4-H8xscZRAmhvAdiBAHXwuMTzgpPZYxfIOJvKxwXIasPqxjNaY6FhRMqi-dtoxcB6lv7KPyzS5lBgTnpgB4iu8XTU3TuZAPjz5XeFRg11DITSKuGsjljZcwnnaYAmkNIzzcsG7Bkqz_aDUx9xKU',
    alt: 'Macro close-up texture of Pebble Sheen Azure Blue pool interior finish',
  },
  {
    id: 'swatch-2',
    title: 'French Gray Micro-Pebble',
    badge: 'Micro Aggregates',
    subtitle: 'Caribbean Aqua Refraction',
    description: 'Soft sky-cyan water tint. Extremely smooth underfoot for families and children.',
    lifespan: '18–22+ Yrs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBmKMP1K6vC4jTRHpq7fCLXJN3xxH2G2T3VI8lTUAoLnfMcufzdms9ejSrOLYe6g0fuvIAebMFaGKFa-wTK-KqDsgrevpdkD_VuQh7tXYNyiwrjEJR1N5pAI1yQLcjx4PQVzqNw7neMSWBittBlTvAVlsdDBHOzyIvilyZMCMigzV8bGWUy4FEaRdsOP5411IYK3PShEjZqL18R-IKYjKqTU9Mal07-XgaGp-9x6-o',
    alt: 'Macro close-up texture of French Gray micro-pebble pool plaster',
  },
  {
    id: 'swatch-3',
    title: 'Midnight Black Quartz',
    badge: 'Diamond Quartz',
    subtitle: 'Mountain Lake Mirror',
    description: 'Dramatically retains solar thermal heat and reflects cloudscapes and trees like glass.',
    lifespan: '20–25+ Yrs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIkViH2XgRE7FHX-kXG68l8OijzpjOkGt3fNXOFjK-rMBPVTQsjUmyo8NxURHbN02nCM9LuS7-O8JK7dlkzQ9UHXVqcn1UYD9yEWKvX3T9JbIlUuE3aPH_2_10ubQzO8H7spNkll3vPZeBZUdSI0YEw8-3YmHOzwY_p3IqKuKs7PYGJof132DH_MzbhZ0aUbFhlXSJ6Ws8gYZwHRqJTTtdK2jFjVqrViCo2j5wb2A',
    alt: 'Macro close-up of Midnight Black Diamond Quartz pool finish',
  },
  {
    id: 'swatch-4',
    title: 'Cobalt Iridescent Glass',
    badge: 'Spanish Glass',
    subtitle: 'Glistening Waterline',
    description: 'Zero water absorption. Impervious to pool chemicals, calcium banding, and sun fade.',
    lifespan: 'Lifetime',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxi-764PeZixV9rJyzhSWmiX8T6caEKuc2MLaB9L17koEAs8-FhXYvEAwy65PUT5VMmB0kF4T_6cZYuVSxdqjwZdxKyDxkLWsocZWsgaOyWts3UzXAltArx-sU2V2jon8GYz6Eas4bPNdliLg5o39ghfY2-SV25JWj6pxNG2JZhgjjEgrWpIBXQf4j7GhqlyuTDTLy2NF7N8bKwKzNy16p-2Wg7cBdihUlJrIhPHA',
    alt: 'Macro close-up of handcrafted Royal Blue iridescent Spanish glass mosaic waterline tiles',
  },
  {
    id: 'swatch-5',
    title: 'Silver Travertine Coping',
    badge: 'Natural Stone',
    subtitle: 'Cool Underfoot in Heat',
    description: 'Naturally stays 20° cooler under direct Escondido summer sun than poured concrete.',
    lifespan: '30+ Yrs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCt8bkUWFVPlVeTJ1ZxrT0Vg2N3b1bjiYDfBg8ClkUK8M1M-mpeNozejmRSo4ai-mLoqfqi8UkHAJu8giKAH6cVj0bPRN9Z_jAloN2Oc0_ycT7ksEv8krXsOonvBpeBjogu9TmijG325se2pTmgAwfg6HY5S2FEG_2JMwa7NIlNU77A3O3DSt2FWbqYuuFIHW49Cv-25ZURwX4N1fhuD-QvL4v_LbItVnapydnvSNU',
    alt: 'Macro close-up of honed unfilled Silver Travertine natural stone pool coping',
  },
]

export const GallerySwatches: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#f0f3ff] border-b border-[#dee8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-wider text-[#003673] font-bold">
              Tactile Physical Samples
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#111c2d] font-bold">
              Artisanal Materials &amp; Surface Finishes
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#424751] leading-relaxed">
              Explore the exact pebble aggregates, glass mosaics, and natural travertine stones applied across our portfolio. Every finish is brought directly to your home for physical inspection during your estimate.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 p-3.5 rounded-xl bg-white text-[#111c2d] font-display text-xs font-bold shadow-sm border border-[#dee8ff] shrink-0">
            <Sparkles className="w-4 h-4 text-[#003673]" />
            <span>Sample Kit Delivered to Your On-Site Consult</span>
          </div>
        </div>

        {/* Swatch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SWATCHES.map((swatch) => (
            <div
              key={swatch.id}
              className="rounded-2xl bg-white p-4 shadow-sm hover:shadow-lg flex flex-col gap-3 group hover:-translate-y-1 transition-all border border-[#dee8ff]"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#dee8ff] relative shadow-inner">
                <img
                  src={swatch.image}
                  alt={swatch.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#003673]/90 text-white font-display text-[10px] font-bold tracking-wide backdrop-blur-xs">
                  {swatch.badge}
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1 justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#111c2d] leading-snug">
                    {swatch.title}
                  </h4>
                  <span className="font-display text-xs text-[#003673] font-semibold block mt-0.5">
                    {swatch.subtitle}
                  </span>
                  <p className="font-sans text-xs text-[#424751] leading-relaxed mt-1 line-clamp-2">
                    {swatch.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#dee8ff] flex items-center justify-between font-display text-xs text-[#737782]">
                  <span>Lifespan</span>
                  <strong className="text-[#111c2d] font-bold">{swatch.lifespan}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
