import { MetricItem, ProjectItem, ServiceItem } from '../types'

export const COMPANY_INFO = {
  name: 'Escondido Fine Pools',
  license: 'CA Lic #1145783',
  licenseDetails: 'Fully Bonded, Insured & City-Permitted Master Builder',
  phone1: '(619) 633-0346',
  phone1Raw: '6196330346',
  phone2: '(760) 829-6403',
  phone2Raw: '7608296403',
  address: '25484 Lake Wohlford Rd, Escondido, CA 92027',
  hours: 'Mon - Sun: 8:00 am - 7:00 pm',
  experienceYears: '14+',
  projectsCount: '100+',
  clientsCount: '500+',
  serviceRadius: '50-Mile',
  rating: '5.0',
  reviewsCount: '500+',
}

export const NAV_LINKS = [
  { name: 'Home', href: '/', path: '/' },
  { name: 'About Us', href: '/about-us', path: '/about-us' },
  { name: 'Services', href: '/services', path: '/services' },
  { name: 'Gallery', href: '/portfolio-gallery', path: '/portfolio-gallery' },
  { name: 'Contact Us', href: '/contact-us', path: '/contact-us' },
]


export const METRICS: MetricItem[] = [
  {
    value: '14+',
    label: 'Years Experience',
    sublabel: 'Dedicated San Diego crew',
  },
  {
    value: '500+',
    label: 'Happy Clients',
    sublabel: 'Residential & boutique estates',
  },
  {
    value: '100+',
    label: 'Projects Finished',
    sublabel: 'Remodels & new architecture',
  },
  {
    value: '50-Mile',
    label: 'Service Radius',
    sublabel: 'Escondido & surroundings',
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'surface-remodeling',
    title: 'Surface Remodeling & Luxury Finishes',
    category: 'Finishes',
    tag: 'Finish Overhaul',
    description:
      'Upgrade worn plaster with premium pebble aggregate, quartz brilliance, handmade Spanish tile lines, and durable mastic expansion joint re-sealing.',
    features: [
      'Pebble Tec & Aggregate Plasters',
      'Waterline & Mosaic Glass Tiles',
      'Perimeter Mastic Joint Sealing',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSVCoZ-xAuU38OLEdalsroLhU1UAVkUoS9ogCI0Q7kiOstmpit7kFxM5JparL78SJP7ge3GD37TNCdPaAhQ77uH5pyGeKJtCXr-Ujjrmpqeiw8lwGonTuJ5V-QW6aggfuohAozs6yHfWqVgvOqREdzu2ev9zcJZ2Nwirv3Ii3X4oSXc5VemfC4mChWBb1NYnJsZcxl8mQYio8uBGVAO-tAsUcBJXSUOtCuj2FrTnw',
    alt: 'Close-up of newly installed iridescent blue glass waterline tiles and smooth quartz pebble pool surface',
    icon: 'Sparkles',
  },
  {
    id: 'structural-modifications',
    title: 'Structural Modifications & Modern Design',
    category: 'Design & Build',
    tag: 'Structural',
    description:
      'Re-engineer your pool cavity. We add zero-depth beach entries, spacious Baja tanning ledges, swim-up bars, raised stone spas, and elegant shear descent waterfalls.',
    features: [
      'Baja Ledges & Sun Shelves',
      'Rock Grottos & Waterfalls',
      'Depth Modifications & Steps',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-HXUuNukX19-DNxbh7ac-Z0HMtn-07HJHZODFegprqKmwkNFdR2jnzulTvRySoPIq8viE2BxYvSwzk4P5Nq8V6ezXV7j9mQj-KMiIFqNKZYbSUgPqpicDqOcMvDxHG3czaDSVo9_iZxJlIF_2imN-teR5JfYV8deSFUkNfIvTntWxDcJRdFFAD-o6yEfZW16137pGBuxX5caoTZZDIGvn3JYBPjJJ81qbSw2ECE',
    alt: 'Modern shallow sun shelf Baja tanning ledge with built-in lounge chairs',
    icon: 'Layers',
  },
  {
    id: 'critical-maintenance',
    title: 'Critical Maintenance & Equipment',
    category: 'Engineering',
    tag: 'Engineering',
    description:
      'Keep your oasis crystal clear and energy-efficient. Precision leak detection, automated chlorination systems, quiet high-efficiency heaters, and full plumbing re-runs.',
    features: [
      'Variable-Speed Eco Pumps',
      'Saltwater Conversion Kits',
      'Smartphone Automation Panels',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWgzT6IoFbjvntjlHPleSIlPU_lvk2VCP3cACae8OyjU0Je1rZVwjOiUbVokLpz3I93Gqp2_ywiV6INeXzVFl-2-TPaiRNqsAV5l2H4kBuLK6i6p-rTp0HXqp33bd8jGX0_2JRHYPCEY8ZLgvl74IWtLRj0-9JbYtc4vDtQ5qlWLYEw9iSQXSgMiaEcg0ltJs4ekG3GO1394fCsh76j1LiZh8VzCKKllW4YULT5Es',
    alt: 'Clean and professional pool equipment pad installation showing energy-efficient pump and filter',
    icon: 'Wrench',
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Travertine & Charcoal Aggregate Plaster',
    category: 'remodels',
    categoryLabel: 'Full Renovation',
    location: 'Escondido Estate',
    details: 'Custom Steps & Coping',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKqg-GZuLTqvYQfh3bm6PTQ_W3m6lxeFhK-pNnkVvuy2e1AKdcpQBYzq8uvjxFuPTgdOk4ZE8hMYPxrOiLHVQCRKOT3HKqO-Bhu-ofAWIOUjFxX4WtP5aruerSs6ZRvYW4cY853SbaHml61aA1C0VNhzrut2tskMIBWWWMjzbEwRNTW36kIqlvQkE_TapMrt0ru-_oIspGXhOclHegGSCWKH8jLPozXRQs6buvtBA',
    alt: 'Modern rectangular in-ground plunge pool with rich dark grey pebble plaster and travertine',
    materials: ['Charcoal Quartz', 'French Travertine', 'Zero-edge Coping'],
  },
  {
    id: 'project-2',
    title: 'Sculpted Rock Grotto Spa Conversion',
    category: 'spas',
    categoryLabel: 'Artisanal Masonry',
    location: 'Lake Wohlford',
    details: 'Natural Sandstone Masonry',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBatc3iQqSTq_4AUA5ocoIffiKOnuZb2qfbY5uqThR5AudKr7wRnkdFdHf3_c2L8U7xc5bdRlpJzMZ8IEZuTTw35xYkm2H6IxYwvrYqSqUWzYfkO-d8qgDn5nZRO8yilyxLslfaDAQb1bWggBO_Dj173PAquMFkX8N6zq2RD8BetSk_96nC4iNFcmX95afVlBKtd7pXSK595IAa_WWWhSaMfi66CerCRz_Hj8o4PD8',
    alt: 'Custom circular outdoor spa embedded within sculpted natural sandstone rock boulders',
    materials: ['Natural Sandstone', 'Custom Hydro-jets', 'Mosaic Accents'],
  },
  {
    id: 'project-3',
    title: 'Lagoon Conversion & Shear Descent',
    category: 'plaster',
    categoryLabel: 'Modern Oasis',
    location: 'Rancho Bernardo',
    details: 'Baja Ledge & LED Ambiance',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4cTg5PvlZJ9IH8G21P2TiisS5s4ONycuBPRL9tgUgtygUVZVolu2q2TYoph2hLKJZbBP90opFPPXB6s4GXXhsp6vIs0F4s3fJg1-GKyXfBmTSgPr83kUcfQgg16ajZjVR8l2BIgYlECKf6uP_uKu6Og6bVhIuHlkgAdc4KDb37wBYTEBSsOGaliczl-mVC9iFix_xu4RyWxhl5V8s8AJLFZO8NFVPl4rFF31qQes',
    alt: 'Luxury lagoon-style pool with cascading rock waterfall and submerged sun shelf',
    materials: ['Tahoe Blue Pebble', 'Shear Waterfall', 'Color-sync LEDs'],
  },
]
