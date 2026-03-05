'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { PageLoader } from '@/components/PageLoader';
import { SideElements } from '@/components/SideElements';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: 'relative', background: '#0a0a0f', minHeight: '100vh' }}>
      <PageLoader finishLoading={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <Navigation />
          <SideElements />

          <main style={{ counterReset: 'item 0' }}>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
