'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/utils';

const experiences = [
  {
    id: '1', company: 'Personal Portfolio', shortName: 'Portfolio',
    title: 'UI/UX Designer & Developer', location: 'Remote',
    startDate: new Date('2023-01-01'), endDate: new Date('2024-12-31'), current: false,
    description: [
      'Designed and developed personal portfolio using modern frameworks and best practices',
      'Created user-centered interfaces applying design thinking and UX principles',
      'Implemented fully responsive layouts for optimal viewing across all devices',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  {
    id: '2', company: 'Brand Design Projects', shortName: 'Brand',
    title: 'Graphic Designer', location: 'Freelance',
    startDate: new Date('2024-01-01'), endDate: new Date('2025-01-01'), current: false,
    description: [
      'Created professional websites, mobile apps, flyers and brand materials for diverse clients',
      'Developed visual identities that align with client brand values and goals',
      'Collaborated closely with clients to deeply understand their design needs',
    ],
    technologies: ['Adobe Photoshop', 'Illustrator', 'Figma'],
  },
  {
    id: '3', company: 'ALX Software Engineering', shortName: 'ALX',
    title: 'Full-Stack Development Student', location: 'Online',
    startDate: new Date('2024-06-01'), endDate: null, current: true,
    description: [
      'Building skills in JavaScript, React, Node.js, and full-stack web development',
      'Working on the Herpathway platform project through the ALX Pathway program',
      'Learning modern development best practices, testing, and CI/CD workflows',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'HTML/CSS'],
  },
  {
    id: '4', company: 'IDA Tech', shortName: 'IDA Tech',
    title: 'Full-Stack Developer', location: 'Remote',
    startDate: new Date('2024-01-01'), endDate: null, current: true,
    description: [
      'Developed and contributed to the majority of the full-stack projects showcased in the portfolio',
      'Acquired and applied comprehensive full-stack development skills using modern web technologies',
      'Built and deployed end-to-end web applications, handling both frontend and backend aspects',
    ],
    technologies: ['React-vite', 'Node.js', 'React Native-expo', 'TypeScript', ' Python', 'Django'],
  },
];

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(135deg,#f97316,#ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const exp = experiences[activeTab];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="experience" style={{ padding: 'clamp(60px,10vh,100px) 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 50px)' }}>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', fontSize: 'clamp(26px,5vw,32px)', fontWeight: 700, color: '#e2e8f0', marginBottom: '50px', gap: '8px 16px' }}
        >
          <span style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: 'clamp(14px,3vw,18px)', fontWeight: 500, ...gradientText }}>02.</span>
          Where I've Worked
          <span style={{ display: 'block', height: '1px', flex: 1, maxWidth: '300px', background: 'linear-gradient(to right,rgba(249,115,22,0.6),transparent)' }} />
        </motion.h2>

        {/* Tabbed layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: isMobile ? 'auto' : '360px', gap: '0' }}
        >
          {/* Tabs — vertical on desktop, horizontal on mobile */}
          <div style={{
            position: 'relative',
            ...(isMobile
              ? { display: 'flex', flexDirection: 'row', borderBottom: '2px solid #2a2a4a', borderLeft: 'none', marginBottom: '24px', overflowX: 'auto' }
              : { minWidth: '170px', borderLeft: '2px solid #2a2a4a' }
            ),
          }}>
            {/* Gradient sliding indicator */}
            {!isMobile && (
              <motion.div
                layoutId="exp-indicator"
                style={{
                  position: 'absolute', left: '-2px', top: `${activeTab * 42}px`,
                  width: '2px', height: '42px',
                  background: 'linear-gradient(to bottom,#f97316,#ec4899)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {isMobile && (
              <motion.div
                layoutId="exp-indicator-h"
                style={{
                  position: 'absolute', bottom: '-2px', left: `calc(${activeTab} * (100% / ${experiences.length}))`,
                  width: `calc(100% / ${experiences.length})`, height: '2px',
                  background: 'linear-gradient(to right,#f97316,#ec4899)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}

            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActiveTab(i)}
                style={{
                  display: 'block', padding: isMobile ? '10px 16px' : '0 20px',
                  height: isMobile ? 'auto' : '42px',
                  flex: isMobile ? '1' : undefined,
                  background: activeTab === i ? 'rgba(249,115,22,0.07)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  textAlign: isMobile ? 'center' : 'left',
                  fontFamily: 'var(--font-mono,monospace)', fontSize: '13px',
                  color: activeTab === i ? '#f97316' : '#64748b',
                  transition: 'all 200ms ease', whiteSpace: 'nowrap',
                }}
                onMouseEnter={ev => { if (activeTab !== i) { ev.currentTarget.style.color = '#e2e8f0'; ev.currentTarget.style.background = 'rgba(249,115,22,0.04)'; } }}
                onMouseLeave={ev => { if (activeTab !== i) { ev.currentTarget.style.color = '#64748b'; ev.currentTarget.style.background = 'transparent'; } }}
              >
                {e.shortName}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}
            style={{ padding: '0 30px', flex: 1 }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
              {exp.title}{' '}
              <span style={gradientText}>@ {exp.company}</span>
            </h3>

            <p style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '13px', color: '#64748b', marginBottom: '28px' }}>
              {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate!)}
              &nbsp;·&nbsp;{exp.location}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
              {exp.description.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.07 }}
                  style={{ display: 'flex', gap: '10px', color: '#94a3b8', fontSize: '18px', lineHeight: 1.7, marginBottom: '12px' }}
                >
                  <span style={{ ...gradientText, marginTop: '5px', flexShrink: 0, fontSize: '13px' }}>▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.technologies.map(tech => (
                <span
                  key={tech}
                  style={{
                    fontFamily: 'var(--font-mono,monospace)', fontSize: '12px', fontWeight: 500,
                    padding: '4px 12px', borderRadius: '6px',
                    background: 'rgba(249,115,22,0.08)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    color: '#f97316',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
