'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const gradientText: React.CSSProperties = {
  background: 'linear-gradient(135deg,#f97316,#ec4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    background: '#0f0f1a', border: '1px solid #2a2a4a',
    borderRadius: '8px', color: '#e2e8f0', fontSize: '16px',
    outline: 'none', transition: 'border-color 200ms',
    fontFamily: 'inherit', boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(60px,10vh,100px) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradient ring — unique to Egide */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-60%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, rgba(236,72,153,0.04) 50%, transparent 70%)',
        zIndex: 0, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 50px)', position: 'relative', zIndex: 1 }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '16px', textAlign: 'center', marginBottom: '20px', ...gradientText }}
        >
          04. What&apos;s Next?
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}
          style={{ fontSize: 'clamp(48px,8vw,80px)', fontWeight: 700, textAlign: 'center', marginBottom: '20px', lineHeight: 1.05, color: '#e2e8f0' }}
        >
          Get In Touch.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto 50px', color: '#94a3b8', fontSize: '18px', lineHeight: 1.7, textAlign: 'center' }}
        >
          I&apos;m currently open to new opportunities. Whether you have a project in mind,
          a question, or just want to say hi — my inbox is always open!
        </motion.p>

        {/* Primary CTA — gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <a
            href="mailto:egidefiston@gmail.com"
            style={{
              display: 'inline-block', padding: '20px 32px',
              fontFamily: 'var(--font-mono,monospace)', fontSize: '15px', fontWeight: 500,
              color: '#f97316', borderRadius: '10px', textDecoration: 'none',
              transition: 'all 200ms ease',
              background: 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
              border: '1px solid transparent',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'linear-gradient(135deg,#f97316,#ec4899)';
              el.style.color = '#fff';
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 10px 30px rgba(249,115,22,0.3)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'linear-gradient(#0f0f1a,#0f0f1a) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box';
              el.style.color = '#f97316';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            Say Hello ✉
          </a>
        </motion.div>

        {/* Contact form — glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'rgba(26,26,46,0.8)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(249,115,22,0.15)', borderRadius: '16px',
            padding: 'clamp(24px, 5vw, 44px)', maxWidth: '640px', margin: '0 auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono,monospace)', fontSize: '13px', marginBottom: '28px', textAlign: 'center', ...gradientText }}>
            or drop me a message directly
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
              {[
                { id: 'name',  label: 'Name *',  type: 'text',  placeholder: 'Your name', required: true },
                { id: 'email', label: 'Email *', type: 'email', placeholder: 'Your email', required: true },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={{ display: 'block', color: '#94a3b8', fontSize: '13px', marginBottom: '8px', fontFamily: 'var(--font-mono,monospace)' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type} id={f.id} name={f.id}
                    value={formData[f.id as keyof typeof formData]}
                    onChange={handleChange} required={f.required}
                    placeholder={f.placeholder}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#2a2a4a')}
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', color: '#94a3b8', fontSize: '13px', marginBottom: '8px', fontFamily: 'var(--font-mono,monospace)' }}>
                Message *
              </label>
              <textarea
                id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="Your message..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.currentTarget.style.borderColor = '#f97316')}
                onBlur={e => (e.currentTarget.style.borderColor = '#2a2a4a')}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit" disabled={status === 'loading'}
                style={{
                  padding: '14px 40px', fontFamily: 'var(--font-mono,monospace)', fontSize: '14px', fontWeight: 500,
                  color: '#f97316', borderRadius: '8px', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1, transition: 'all 200ms ease',
                  background: 'linear-gradient(#1a1a2e,#1a1a2e) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box',
                  border: '1px solid transparent',
                }}
                onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = 'linear-gradient(135deg,#f97316,#ec4899)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 0 20px rgba(249,115,22,0.25)'; } }}
                onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(#1a1a2e,#1a1a2e) padding-box, linear-gradient(135deg,#f97316,#ec4899) border-box'; e.currentTarget.style.color = '#f97316'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message →'}
              </button>
            </div>

            {status === 'success' && <p style={{ color: '#4ade80', textAlign: 'center', fontFamily: 'var(--font-mono,monospace)', fontSize: '13px' }}>✓ Message sent! I&apos;ll get back to you soon.</p>}
            {status === 'error'   && <p style={{ color: '#f87171', textAlign: 'center', fontFamily: 'var(--font-mono,monospace)', fontSize: '13px' }}>✗ Something went wrong. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
