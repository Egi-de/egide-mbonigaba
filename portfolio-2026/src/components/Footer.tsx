'use client';

import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github,    href: 'https://github.com/Egi-de',      label: 'GitHub' },
  { icon: Linkedin,  href: 'https://linkedin.com/in/egide-mbonigaba',  label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://twitter.com/Stranger1144261',   label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/__egide__',    label: 'Instagram' },
];

export function Footer() {
  return (
    <footer style={{ padding: '30px 0', textAlign: 'center', borderTop: '1px solid rgba(249,115,22,0.08)' }}>
      {/* Social icons — mobile only */}
      <div className="md:hidden" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '16px' }}>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            style={{ color: '#64748b', transition: 'color 200ms ease, transform 200ms ease', display: 'inline-block' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f97316'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <p style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '12px', color: '#475569', lineHeight: 2 }}>
        <span style={{ display: 'block' }}>Designed &amp; Built by</span>
        <span style={{
          fontWeight: 600, fontSize: '13px',
          background: 'linear-gradient(135deg,#f97316,#ec4899)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Egide Mbonigaba
        </span>
        <span style={{ display: 'block', marginTop: '4px', fontSize: '11px' }}>© {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
