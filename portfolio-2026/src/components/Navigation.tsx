'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About',      num: '01', href: '#about' },
  { name: 'Experience', num: '02', href: '#experience' },
  { name: 'Projects',   num: '03', href: '#projects' },
  { name: 'Contact',    num: '04', href: '#contact' },
];

/* Gradient style for numbers */
const numStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono, monospace)',
  fontSize: '12px',
  fontWeight: 500,
  marginRight: '5px',
  background: 'linear-gradient(135deg, #f97316, #ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export function Navigation() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 300ms ease',
        background: scrolled ? 'rgba(15,15,26,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(249,115,22,0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div style={{ width: '100%', padding: '0 clamp(16px, 4vw, 40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'clamp(70px, 10vw, 100px)' }}>

          {/* Logo — gradient text, Space Grotesk bold */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '1px',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'opacity 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            EM
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
            <ol style={{ display: 'flex', listStyle: 'none', gap: '4px', margin: 0, padding: 0 }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 14px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 200ms ease',
                      borderRadius: '6px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#e2e8f0';
                      e.currentTarget.style.background = 'rgba(249,115,22,0.06)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span style={numStyle}>{link.num}.</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ol>

            {/* Resume — gradient border button */}
            <motion.a
              href="/mbonigaba-egide_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                marginLeft: '12px',
                padding: '10px 20px',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '13px',
                fontWeight: 500,
                color: '#f97316',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 200ms ease',
                background: 'linear-gradient(#0f0f1a, #0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
                border: '1px solid transparent',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'linear-gradient(135deg,#f97316,#ec4899)';
                el.style.color = '#fff';
                el.style.transform = 'translateY(-2px)';
                el.style.boxShadow = '0 0 20px rgba(249,115,22,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box';
                el.style.color = '#f97316';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: '#f97316', background: 'none', border: 'none', cursor: 'pointer', zIndex: 60 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 50, backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: 'min(75vw, 400px)',
                background: '#1a1a2e',
                borderLeft: '1px solid rgba(249,115,22,0.2)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px',
                zIndex: 55,
              }}
            >
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px', fontSize: '20px', fontWeight: 600, color: '#e2e8f0', textDecoration: 'none' }}
                    >
                      <span style={{ ...numStyle, fontSize: '12px', marginRight: 0, marginBottom: '4px' }}>{link.num}.</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ol>
              <a
                href="/mbonigaba-egide_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '30px', padding: '16px 50px',
                  fontFamily: 'var(--font-mono, monospace)', fontSize: '14px',
                  color: '#f97316', borderRadius: '8px',
                  background: 'linear-gradient(#1a1a2e,#1a1a2e) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
                  border: '1px solid transparent',
                  textDecoration: 'none',
                }}
              >
                Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
