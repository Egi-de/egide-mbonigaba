'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated gradient orbs — unique to Egide */}
      <div
        className="orb"
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)',
          animationDelay: '0s',
          zIndex: 0,
        }}
      />
      <div
        className="orb"
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)',
          animationDelay: '3s',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: 'clamp(80px, 15vw, 120px) clamp(20px, 5vw, 50px)',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '16px',
            fontWeight: 400,
            background: 'linear-gradient(135deg, #f97316, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
          }}
        >
          Hi, my name is
        </motion.p>

        {/* Name — gradient text, Space Grotesk */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            fontSize: 'clamp(42px, 8vw, 82px)',
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: '10px',
            background: 'linear-gradient(135deg, #e2e8f0 30%, #f97316 80%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Egide Mbonigaba.
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            fontSize: 'clamp(30px, 6vw, 68px)',
            fontWeight: 700,
            color: '#475569',
            lineHeight: 1.05,
            marginBottom: '30px',
          }}
        >
          I craft digital experiences.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{
            maxWidth: '540px',
            fontSize: '18px',
            color: '#94a3b8',
            lineHeight: 1.7,
            marginBottom: '50px',
          }}
        >
           
          <span
            style={{
              background: 'linear-gradient(135deg, #f97316, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 600,
            }}
          >
UI/UX Designer &nbsp; <span style={{ WebkitTextFillColor: '#94a3b8' }}>&</span> &nbsp; Full-Stack Developer
          </span><br />
          crafting intuitive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
        >
          {[
            { label: 'View My Work', href: '#projects' },
            { label: 'Get In Touch', href: '#contact' },
          ].map(btn => (
            <a
              key={btn.label}
              href={btn.href}
              style={{
                padding: '16px 28px',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '14px',
                fontWeight: 500,
                color: '#f97316',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 200ms ease',
                background: 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
                border: '1px solid transparent',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'linear-gradient(135deg,#f97316,#ec4899)';
                el.style.color = '#fff';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 8px 25px rgba(249,115,22,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box';
                el.style.color = '#f97316';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {btn.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
