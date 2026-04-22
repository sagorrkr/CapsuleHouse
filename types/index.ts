export interface Product {
  slug: string;
  model: string;
  name: string;
  category: 'single' | 'double' | 'apple' | 'specialty';
  floorArea?: string;
  floors?: number;
  guests?: string;
  weight?: string;
  image: string;
  images?: string[];
  specs: { label: string; value: string }[];
  featured?: boolean;
  badge?: string;
  size?: string;
  description?: string;
  useCase?: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  product: string;
  units: string;
  message: string;
}
