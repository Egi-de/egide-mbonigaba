'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github,    href: 'https://github.com/Egi-de',      label: 'GitHub' },
  { icon: Linkedin,  href: 'https://linkedin.com/in/egide-mbonigaba',  label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://twitter.com/Stranger1144261',   label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/__egide__',    label: 'Instagram' },
];

const linkStyle: React.CSSProperties = {
  color: '#64748b',
  transition: 'color 200ms ease, transform 200ms ease',
  display: 'inline-block',
};

export function SideElements() {
  return (
    <>
      {/* Left — social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex"
        style={{ position: 'fixed', bottom: 0, left: '40px', zIndex: 10, flexDirection: 'column', alignItems: 'center', gap: '18px' }}
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
            style={linkStyle}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f97316'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            <Icon size={20} />
          </a>
        ))}
        {/* Gradient line */}
        <div style={{ width: '1px', height: '90px', background: 'linear-gradient(to bottom, #64748b, transparent)' }} />
      </motion.div>

      {/* Right — email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden lg:flex"
        style={{ position: 'fixed', bottom: 0, right: '40px', zIndex: 10, flexDirection: 'column', alignItems: 'center', gap: '18px' }}
      >
        <a
          href="mailto:egidefiston@gmail.com"
          style={{
            ...linkStyle,
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '12px',
            letterSpacing: '0.12em',
            writingMode: 'vertical-rl',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f97316'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#64748b'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
        >
          egidefiston@gmail.com
        </a>
        {/* Gradient line */}
        <div style={{ width: '1px', height: '90px', background: 'linear-gradient(to bottom, #64748b, transparent)' }} />
      </motion.div>
    </>
  );
}
