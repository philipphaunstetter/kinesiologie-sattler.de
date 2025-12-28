'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'AURA-SOMA®', href: '/aura-soma' },
  { label: 'Kontakt', href: '/kontakt' },
];

const leftNavItems = [
  { label: 'Über mich', href: '/ueber-mich' },
  { label: 'Leistungen', href: '/leistungen' },
];

const rightNavItems = [
  { label: 'AURA-SOMA®', href: '/aura-soma' },
  { label: 'Kontakt', href: '/kontakt' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full sticky top-0 z-50 shadow-sm">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-6 py-6 w-full max-w-[1440px] mx-auto">
        <a href="/" className="w-[150px] h-[150px] flex-shrink-0">
          <img
            src="/brand_logo.png"
            alt="Kinesiologie Carolin Sattler"
            className="w-full h-full object-cover"
          />
        </a>
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-b border-[rgba(67,124,109,0.5)] overflow-hidden"
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

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-center w-full px-12 py-4 max-w-[1440px] mx-auto">
        {/* Left Nav */}
        <div className="flex items-center gap-12 flex-1 justify-end">
          {leftNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold text-lg text-[#437c6d] hover:text-[#2d5449] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Center Logo */}
        <a href="/" className="w-[180px] h-[180px] flex-shrink-0 mx-12">
          <img
            src="/brand_logo.png"
            alt="Kinesiologie Carolin Sattler"
            className="w-full h-full object-cover"
          />
        </a>

        {/* Right Nav */}
        <div className="flex items-center gap-12 flex-1 justify-start">
          {rightNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-semibold text-lg text-[#437c6d] hover:text-[#2d5449] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
