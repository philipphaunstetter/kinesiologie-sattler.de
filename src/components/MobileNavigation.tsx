'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Über mich', href: '#' },
  { label: 'Leistungen', href: '#' },
  { label: 'AURA-SOMA®', href: '#' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6">
        <div className="w-[150px] h-[150px] flex-shrink-0">
          <img
            src="/brand_logo.png"
            alt="Kinesiologie Carolin Sattler"
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-[6px] flex-shrink-0"
          aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          <motion.span
            className="w-6 h-[2px] bg-[#437c6d] block"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
          <motion.span
            className="w-6 h-[2px] bg-[#437c6d] block"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.span
            className="w-6 h-[2px] bg-[#437c6d] block"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </button>
      </div>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-b border-[rgba(67,124,109,0.5)] overflow-hidden"
          >
            <div className="px-6 py-12 min-h-[200px] flex items-center">
              <div className="flex flex-col items-center justify-between w-full gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: 'easeInOut',
                      delay: index * 0.1 
                    }}
                    className="font-semibold text-2xl leading-7 text-[#437c6d] w-full text-center"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
