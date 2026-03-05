import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/egide-mbonigaba-a5b6a5258/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Stranger1144261',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/egide_mbonigaba/',
    icon: Instagram,
  },
  {
    name: 'Email',
    url: 'mailto:egidefiston@gmail.com',
    icon: Mail,
  },
];

export function SocialLinks({ orientation = 'horizontal', className }: SocialLinksProps) {
  return (
    <div
      className={cn(
        'flex gap-4',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-cyan-primary transition-all duration-300 hover:-translate-y-1"
            aria-label={link.name}
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
}
