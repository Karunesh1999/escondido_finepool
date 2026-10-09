export interface ServiceItem {
  id: string
  title: string
  category: string
  tag: string
  description: string
  features: string[]
  image: string
  alt: string
  icon: string
}

export interface MetricItem {
  value: string
  label: string
  sublabel: string
}

export interface ProjectItem {
  id: string
  title: string
  category: 'all' | 'remodels' | 'spas' | 'plaster'
  categoryLabel: string
  location: string
  details: string
  image: string
  alt: string
  materials?: string[]
}

export interface ValuePillar {
  title: string
  description: string
  icon: string
}

export interface EstimateFormData {
  fullName: string
  phone: string
  email: string
  cityZip: string
  services: string[]
  details: string
}
