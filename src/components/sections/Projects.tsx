'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';

type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'Blockchain';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];   // extra gallery shots
  type: string;
  category: ProjectCategory;
  featured: boolean;
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    id: '1', title: 'Procure2Pay', category: 'Web', featured: true, type: 'Web Application',
    description: 'A comprehensive web-based procurement management system that streamlines purchase requests, approvals, and receipts tracking in one centralized platform. Features multi-level approval workflows and real-time status tracking.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    image: '/images/procure2pay.png',
  },
  {
    id: '2', title: 'PredictX', category: 'Web', featured: true, type: 'Web Application',
    description: 'An innovative prediction markets platform enabling users to create and participate in market predictions across sports, crypto, weather, tech, and economics. Features real-time odds and a dynamic leaderboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    image: '/images/predictx.png',
  },
  {
    id: '3', title: 'KMPDU E-Voting System', category: 'Blockchain', featured: true, type: 'Web Application',
    description: 'A secure, transparent union elections platform empowering KMPDU members with blockchain-verified voting technology. Supports national and branch elections with complete privacy and real-time results.',
    technologies: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    image: '/images/evoting-web.png',
  },
  {
    id: '4', title: 'KMPDU E-Voting Mobile', category: 'Mobile', featured: false, type: 'Mobile Application',
    description: 'The mobile companion for the KMPDU E-Voting system, allowing members to vote securely from their smartphones. Includes biometric authentication and real-time notifications.',
    technologies: ['React Native', 'Node.js', 'Secure Storage'],
    image: '/images/evoting-mobile.png',
    images: ['/images/evoting-mobile.png', '/images/evoting-mobile-darkmode.png'],
  },
  {
    id: '5', title: 'Umudugudu', category: 'Mobile', featured: false, type: 'Mobile Application',
    description: 'A local community management app for managing activities and events. Features calendar integration, resident management, and activity tracking to strengthen community engagement.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    image: '/images/umudugudu.png',
    images: ['/images/umudugudu.png'],
  },
  {
    id: '6', title: 'GoPass', category: 'Mobile', featured: false, type: 'Mobile Application',
    description: 'An e-ticketing and GPS tracking solution for public transport. Features real-time bus tracking, digital ticketing, QR code validation, and driver GPS tracking.',
    technologies: ['React Native', 'Node.js', 'Google Maps API', 'MongoDB'],
    image: '/images/GoPass.png',
    images: [
      '/images/GoPass.png',
      '/images/GoPass2.png',
      '/images/gopass-darkmode.png',
      '/images/gopass-lightmode.png',
      '/images/gopass-driver-tracking.png',
      '/images/gopass-payment-conf.png',
    ],
  },
  {
    id: '7', title: 'IDA Tech Management', category: 'Web', featured: false, type: 'Web Application',
    description: 'A comprehensive school management system for IDA Technology. Handles enrollment, employee management, financial tracking with income/expense overview, and detailed reporting.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/ida-management-system.png',
    images: ['/images/ida-management-system.png'],
  },
];

const categories: ProjectCategory[] = ['All', 'Web', 'Mobile', 'Blockchain'];

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(135deg,#f97316,#ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

/* ── Image lightbox modal ── */
function ProjectImageModal({
  project, onClose,
}: { project: Project; onClose: () => void }) {
  const allImages = project.images?.length ? project.images : [project.image];
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(i => (i - 1 + allImages.length) % allImages.length), [allImages.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % allImages.length), [allImages.length]);

  // keyboard nav
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(8px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '16px',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'rgba(249,115,22,0.15)',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: '50%', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#f97316', zIndex: 101,
            transition: 'all 200ms ease',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f97316'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.15)'; (e.currentTarget as HTMLElement).style.color = '#f97316'; }}
        >
          <X size={20} />
        </button>

        {/* Main image container */}
        <motion.div
          key="modal-card"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%', maxWidth: '900px',
            display: 'flex', flexDirection: 'column', gap: '16px',
          }}
        >
          {/* Title + type */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <h3 style={{ color: '#e2e8f0', fontSize: 'clamp(18px,4vw,26px)', fontWeight: 700, margin: 0 }}>
              {project.title}
            </h3>
            <span style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '12px', color: '#f97316',
              padding: '4px 12px', borderRadius: '20px',
              background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}>
              {project.type}
            </span>
          </div>

          {/* Image viewer */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', background: '#0f0f1a',
            border: '1px solid rgba(249,115,22,0.2)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.2 }}
                style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}
              >
                <Image
                  src={allImages[current]}
                  alt={`${project.title} screenshot ${current + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, 900px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next arrows (only if multiple images) */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  style={{
                    position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(15,15,26,0.8)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    borderRadius: '50%', width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#f97316', zIndex: 2,
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f97316'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,26,0.8)'; (e.currentTarget as HTMLElement).style.color = '#f97316'; }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  style={{
                    position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(15,15,26,0.8)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    borderRadius: '50%', width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#f97316', zIndex: 2,
                    transition: 'all 200ms ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f97316'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,26,0.8)'; (e.currentTarget as HTMLElement).style.color = '#f97316'; }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Image counter badge */}
                <div style={{
                  position: 'absolute', bottom: '10px', right: '10px',
                  background: 'rgba(15,15,26,0.85)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  borderRadius: '20px', padding: '3px 12px',
                  fontFamily: 'var(--font-mono,monospace)', fontSize: '12px', color: '#94a3b8',
                }}>
                  {current + 1} / {allImages.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {allImages.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
              {allImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    flexShrink: 0,
                    width: '72px', height: '50px',
                    borderRadius: '8px', overflow: 'hidden',
                    border: idx === current ? '2px solid #f97316' : '2px solid rgba(249,115,22,0.15)',
                    cursor: 'pointer', background: 'none', padding: 0,
                    transition: 'border-color 150ms ease',
                    position: 'relative',
                    opacity: idx === current ? 1 : 0.55,
                  }}
                >
                  <Image
                    src={src}
                    alt={`thumb ${idx + 1}`}
                    fill
                    sizes="72px"
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map(tech => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono,monospace)', fontSize: '12px',
                padding: '4px 12px', borderRadius: '6px',
                background: 'rgba(249,115,22,0.08)',
                border: '1px solid rgba(249,115,22,0.2)',
                color: '#f97316',
              }}>{tech}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Featured project — alternating overlap with warm gradient overlay ── */
function FeaturedProject({ project, index, onImageClick }: { project: Project; index: number; onImageClick?: (p: Project) => void }) {
  const isEven = index % 2 === 0;
  const [isMobile, setIsMobile] = useState(false);
  const hasImages = !!(project.images?.length || project.image);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '10px',
        alignItems: 'center',
        marginBottom: isMobile ? '60px' : '120px',
      }}
    >
      {/* Image */}
      <div
        className="feat-img"
        onClick={() => hasImages && onImageClick && onImageClick(project)}
        style={{
          gridColumn: isMobile ? '1' : (isEven ? '1' : '2'),
          gridRow: '1',
          position: 'relative',
          zIndex: 1,
          height: isMobile ? '220px' : '360px',
          borderRadius: '12px',
          overflow: 'hidden',
          cursor: hasImages && onImageClick ? 'pointer' : 'default',
        }}
      >
        {/* Warm gradient overlay — unique to Egide */}
        <div
          className="feat-overlay"
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            background: 'linear-gradient(135deg, rgba(249,115,22,0.55), rgba(236,72,153,0.45))',
            transition: 'opacity 350ms ease',
            mixBlendMode: 'multiply',
            borderRadius: '12px',
          }}
        />
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="50vw"
          style={{ objectFit: 'cover', filter: 'grayscale(30%)', transition: 'filter 350ms ease' }}
          className="feat-photo"
        />
      </div>

      {/* Text card — overlaps image */}
      <div
        style={{
          gridColumn: isMobile ? '1' : (isEven ? '2' : '1'),
          gridRow: isMobile ? '2' : '1',
          position: 'relative',
          zIndex: 2,
          textAlign: isMobile ? 'left' : (isEven ? 'right' : 'left'),
        }}
      >
        <p style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '13px', fontWeight: 500, marginBottom: '10px', ...gradientText }}>
          Featured Project
        </p>

        <h3 style={{ fontSize: 'clamp(22px,3vw,28px)', fontWeight: 700, color: '#e2e8f0', marginBottom: '28px' }}>
          {project.title}
        </h3>

        {/* Glassmorphism description card */}
        <div
          style={{
            background: 'rgba(26,26,46,0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(249,115,22,0.15)',
            borderRadius: '12px',
            padding: '28px',
            marginBottom: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            position: 'relative', zIndex: 3,
          }}
        >
          <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.7 }}>{project.description}</p>
        </div>

        {/* Tech stack */}
        <ul
          style={{
            display: 'flex', flexWrap: 'wrap', gap: '15px',
            justifyContent: isMobile ? 'flex-start' : (isEven ? 'flex-end' : 'flex-start'),
            listStyle: 'none', padding: 0, margin: '0 0 20px',
          }}
        >
          {project.technologies.map(tech => (
            <li key={tech} style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '13px', color: '#64748b' }}>{tech}</li>
          ))}
        </ul>

        {/* Links */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: isMobile ? 'flex-start' : (isEven ? 'flex-end' : 'flex-start') }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ color: '#94a3b8', transition: 'color 200ms' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f97316')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
            ><Github size={22} /></a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer"
              style={{ color: '#94a3b8', transition: 'color 200ms' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f97316')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#94a3b8')}
            ><ExternalLink size={22} /></a>
          )}
        </div>
      </div>

      <style jsx>{`
        .feat-img:hover .feat-overlay { opacity: 0; }
        .feat-img:hover .feat-photo   { filter: none; }
      `}</style>
    </motion.div>
  );
}

/* ── Small project card — glassmorphism, clickable to open image modal ── */
function SmallProject({ project, onImageClick }: { project: Project; onImageClick: (p: Project) => void }) {
  const hasImages = !!(project.images?.length || project.image);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      style={{
        background: 'rgba(26,26,46,0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(249,115,22,0.12)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column', height: '100%',
        transition: 'border-color 200ms ease, box-shadow 200ms ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        cursor: hasImages ? 'pointer' : 'default',
      }}
      onClick={() => hasImages && onImageClick(project)}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.4)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(249,115,22,0.12)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.12)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      }}
    >
      {/* Image preview strip */}
      {project.image && (
        <div style={{ position: 'relative', width: '100%', height: '160px', overflow: 'hidden' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width:600px) 100vw, 400px"
            style={{ objectFit: 'cover', transition: 'transform 350ms ease' }}
          />
          {/* gradient fade at bottom */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(26,26,46,0.95) 100%)',
          }} />
          {/* zoom hint overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 250ms ease',
          }}
            className="card-zoom-hint"
          >
            <div style={{
              background: 'rgba(249,115,22,0.85)',
              borderRadius: '50%', width: '48px', height: '48px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}>
              <ZoomIn size={22} color="#fff" />
            </div>
          </div>
          {/* gallery count badge */}
          {(project.images?.length ?? 0) > 1 && (
            <div style={{
              position: 'absolute', top: '8px', right: '8px',
              background: 'rgba(15,15,26,0.85)',
              border: '1px solid rgba(249,115,22,0.3)',
              borderRadius: '20px', padding: '2px 10px',
              fontFamily: 'var(--font-mono,monospace)', fontSize: '11px', color: '#f97316',
            }}>
              {project.images!.length} photos
            </div>
          )}
        </div>
      )}

      <div style={{ padding: '1.5rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'linear-gradient(135deg,rgba(249,115,22,0.2),rgba(236,72,153,0.2))',
            border: '1px solid rgba(249,115,22,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Folder size={20} style={{ color: '#f97316' }} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }} onClick={e => e.stopPropagation()}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{ color: '#64748b', transition: 'color 200ms' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f97316')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
              ><Github size={18} /></a>
            )}
            {project.external && (
              <a href={project.external} target="_blank" rel="noopener noreferrer"
                style={{ color: '#64748b', transition: 'color 200ms' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#f97316')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#64748b')}
              ><ExternalLink size={18} /></a>
            )}
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' }}>
          {project.title}
        </h3>

        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, flex: 1, marginBottom: '16px' }}>{project.description}</p>

        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
          {project.technologies.map(tech => (
            <li key={tech} style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '11px', color: '#64748b' }}>{tech}</li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .card-zoom-hint { opacity: 0; }
        div:hover .card-zoom-hint { opacity: 1; }
      `}</style>
    </motion.div>
  );
}

/* ── Main section ── */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.filter(p => p.featured && (activeFilter === 'All' || p.category === activeFilter));
  const others   = projects.filter(p => !p.featured && (activeFilter === 'All' || p.category === activeFilter));

  return (
    <>
      <section id="projects" style={{ padding: 'clamp(60px,10vh,100px) 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 50px)' }}>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', fontSize: 'clamp(26px,5vw,32px)', fontWeight: 700, color: '#e2e8f0', marginBottom: '40px', gap: '8px 16px' }}
        >
          <span style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: 'clamp(14px,3vw,18px)', fontWeight: 500, ...gradientText }}>03.</span>
          Some Things I've Built
          <span style={{ display: 'block', height: '1px', flex: 1, maxWidth: '300px', background: 'linear-gradient(to right,rgba(249,115,22,0.6),transparent)' }} />
        </motion.h2>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 20px',
                fontFamily: 'var(--font-mono,monospace)', fontSize: '13px', fontWeight: 500,
                borderRadius: '8px', cursor: 'pointer', transition: 'all 200ms ease',
                border: '1px solid transparent',
                background: activeFilter === cat
                  ? 'linear-gradient(135deg, #f97316, #ec4899)'
                  : 'transparent',
                borderColor: activeFilter === cat ? 'transparent' : '#2a2a4a',
                color: activeFilter === cat ? '#fff' : '#64748b',
              }}
              onMouseEnter={ev => { if (activeFilter !== cat) { ev.currentTarget.style.color = '#fff'; ev.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; } }}
              onMouseLeave={ev => { if (activeFilter !== cat) { ev.currentTarget.style.color = '#64748b'; ev.currentTarget.style.borderColor = '#2a2a4a'; } }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured projects */}
        {featured.map((p, i) => <FeaturedProject key={p.id} project={p} index={i} onImageClick={setSelectedProject} />)}

        {/* Other noteworthy */}
        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: 'clamp(20px,3vw,24px)', fontWeight: 700, color: '#e2e8f0', textAlign: 'center', marginBottom: '10px' }}
            >
              Other Noteworthy Projects
            </motion.h3>
            <p style={{ textAlign: 'center', marginBottom: '50px' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '14px', ...gradientText, textDecoration: 'none' }}
              >
                view the archive
              </a>
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '16px' }}>
              {others.map(p => <SmallProject key={p.id} project={p} onImageClick={setSelectedProject} />)}
            </div>
          </>
        )}

        {featured.length === 0 && others.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b' }}>No projects in this category.</p>
        )}
      </div>
    </section>

      {selectedProject && (
        <ProjectImageModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
