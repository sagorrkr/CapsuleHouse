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
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  date: string;
  units: number;
  models: string;
  description: string;
  image: string;
  images?: string[];
  highlights: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  product: string;
  units: string;
  message: string;
}
