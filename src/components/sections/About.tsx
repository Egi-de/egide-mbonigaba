'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Layout, Server, PenTool } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={20} />,
    skills: ['JavaScript', 'TypeScript', 'React-vite', 'Next.js', 'React Native expo', 'Flutter', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    skills: ['Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Design',
    icon: <PenTool size={20} />,
    skills: ['Figma', 'Git', 'Postman', 'VS Code', 'Prisma', 'Adobe Illustrator'],
  },
];

/* Reusable numbered heading */
function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <h2
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 'clamp(26px, 5vw, 32px)',
        fontWeight: 700,
        color: '#e2e8f0',
        whiteSpace: 'nowrap',
        marginBottom: '50px',
        gap: '16px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: 'clamp(14px,3vw,18px)',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #f97316, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {num}.
      </span>
      {title}
      {/* Gradient line — unique vs Brittany's grey line */}
      <span
        style={{
          display: 'block',
          height: '1px',
          flex: 1,
          maxWidth: '300px',
          background: 'linear-gradient(to right, rgba(249,115,22,0.6), transparent)',
        }}
      />
    </h2>
  );
}

export function About() {
  return (
    <section id="about" style={{ padding: 'clamp(60px,10vh,100px) 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 50px)' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <SectionHeading num="01" title="About Me" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[40px] items-start">

          {/* Text */}
          <motion.div 
            className="md:col-span-2 order-1"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.8, fontSize: '18px' }}>
              Hello! I&apos;m{' '}
              <span style={{ background: 'linear-gradient(135deg,#f97316,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 700 }}>
                Egide Mbonigaba
              </span>
              , a passionate UI/UX Designer and Full-Stack Developer dedicated to crafting intuitive and visually stunning digital experiences.
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '16px', lineHeight: 1.8, fontSize: '18px' }}>
              With expertise in modern web technologies and design tools, I create user-centered interfaces that blend creativity and functionality. My design philosophy is rooted in empathy — every product I build is aesthetically appealing, meaningful and accessible.
            </p>
            <p style={{ color: '#94a3b8', marginBottom: '28px', lineHeight: 1.8 }}>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </motion.div>

          {/* Photo — gradient border frame */}
          <motion.div
            className="md:col-span-1 order-3 md:order-2 photo-group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
              {/* Image */}
              <div
                className="photo-wrapper"
                style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', zIndex: 1, width: '100%', aspectRatio: '1/1', transition: 'transform 300ms ease' }}
              >
                <Image src="/images/egide.png" alt="Egide Mbonigaba" fill className="object-cover" />
              </div>
              {/* Gradient offset border — uniquely Egide */}
              <div
                className="photo-border"
                style={{
                  position: 'absolute', top: '14px', left: '14px', right: '-14px', bottom: '-14px',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  background: 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
                  zIndex: 0,
                  transition: 'transform 300ms ease',
                }}
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="col-span-1 md:col-span-3 order-2 md:order-3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[40px] mt-4 md:mt-0">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                style={{
                  background: 'rgba(26,26,46,0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(249,115,22,0.15)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'transform 200ms ease, border-color 200ms ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.4)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.15)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#e2e8f0' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(249,115,22,0.1)', color: '#f97316'
                  }}>
                    {category.icon}
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{category.title}</h4>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill) => (
                    <li key={skill} style={{
                      background: 'rgba(249,115,22,0.06)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      color: '#f97316',
                      fontSize: '13px',
                      fontFamily: 'var(--font-mono,monospace)',
                      padding: '6px 12px',
                      borderRadius: '6px'
                    }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
