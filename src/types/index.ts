// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Experience Types
export interface Experience {
  id: string;
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date | null;
  current: boolean;
  description: string[];
  technologies: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Contact Message Types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
  order: number;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Navigation
export interface NavItem {
  name: string;
  href: string;
  number: string;
}
