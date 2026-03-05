'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  finishLoading?: () => void;
}

export function PageLoader({ finishLoading }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'EM';
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (finishLoading) finishLoading();
    }, 2200);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]"
        >
          <div className="relative flex items-center justify-center h-32 w-48">
            {/* Ambient Background Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1.5 }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
              className="absolute w-24 h-24 rounded-full blur-2xl"
              style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
            />

            {/* Left Bracket */}
            <motion.div
              initial={{ x: 0, height: "10px", opacity: 0 }}
              animate={{ x: -44, height: "64px", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-[3px] rounded-full"
              style={{ background: "linear-gradient(to bottom, #f97316, #ec4899)", zIndex: 2 }}
            />

            {/* Center Text EM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)", letterSpacing: "-4px" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", letterSpacing: "6px" }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold font-mono z-10"
              style={{ 
                fontFamily: 'var(--font-mono, monospace)',
                background: "linear-gradient(135deg, #f97316, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginLeft: "6px" // Offset slightly to account for final letterSpacing visually
              }}
            >
              EM
            </motion.div>

            {/* Right Bracket */}
            <motion.div
              initial={{ x: 0, height: "10px", opacity: 0 }}
              animate={{ x: 44, height: "64px", opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-[3px] rounded-full"
              style={{ background: "linear-gradient(to top, #f97316, #ec4899)", zIndex: 2 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
