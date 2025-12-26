'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
}

const tabsData: TabContent[] = [
  {
    id: 'muskeltest',
    label: 'Muskeltest-Techniken',
    title: 'Harmonie von Innen:\nBalance des Energieflusses',
    description: 'Durch das harmonische Ausbalancieren des Energieflusses wird das Gleichgewicht von Körper und Geist gefördert. Erleben Sie, wie Kinesiologie Ihnen hilft, in Ihre innere Mitte zurückzufinden.',
  },
  {
    id: 'energiefluss',
    label: 'Energiefluß-Balance',
    title: 'Energetische Harmonie:\nIhr Weg zur Balance',
    description: 'Die Energiefluß-Balance harmonisiert Ihre körperlichen und geistigen Energien. Entdecken Sie, wie diese Technik Ihnen hilft, Blockaden zu lösen und Ihr inneres Gleichgewicht wiederherzustellen.',
  },
  {
    id: 'strukturell',
    label: 'Strukturelle Anpassung',
    title: 'Körperstruktur im Einklang:\nNatürliche Ausrichtung',
    description: 'Durch gezielte strukturelle Anpassungen wird Ihr Körper in seine natürliche Ausrichtung gebracht. Erfahren Sie, wie diese Methode zu mehr Beweglichkeit und Wohlbefinden führt.',
  },
  {
    id: 'emotional',
    label: 'Emotionaler Stressabbau',
    title: 'Emotionale Freiheit:\nStress loslassen',
    description: 'Der emotionale Stressabbau unterstützt Sie dabei, belastende Gefühle zu verarbeiten und loszulassen. Finden Sie zurück zu innerer Ruhe und emotionaler Stabilität.',
  },
  {
    id: 'selbstentwicklung',
    label: 'Selbstentwicklung & Zielsetzung',
    title: 'Persönliche Vision:\nZiele erreichen',
    description: 'Durch bewusste Selbstentwicklung und klare Zielsetzung entfalten Sie Ihr volles Potenzial. Erleben Sie, wie Sie Ihre Träume in die Realität umsetzen können.',
  },
  {
    id: 'mindbody',
    label: 'Mind-Body-Integration',
    title: 'Ganzheitliche Einheit:\nKörper und Geist verbinden',
    description: 'Die Mind-Body-Integration schafft eine harmonische Verbindung zwischen Ihrem Körper und Geist. Entdecken Sie die transformative Kraft dieser ganzheitlichen Methode.',
  },
];

export function MuskelTestTabs() {
  const [activeTab, setActiveTab] = useState('muskeltest');
  const [hasScrolled, setHasScrolled] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasScrolled && tabsRef.current) {
            // Animate scroll to show it's scrollable
            const scrollAmount = 60; // pixels to scroll
            const duration = 1600; // ms
            const start = performance.now();
            
            const animateScroll = (currentTime: number) => {
              const elapsed = currentTime - start;
              const progress = Math.min(elapsed / duration, 1);
              
              // Ease in-out function
              const easeInOut = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
              
              if (tabsRef.current) {
                if (progress < 0.5) {
                  // Scroll right
                  tabsRef.current.scrollLeft = scrollAmount * easeInOut * 2;
                } else {
                  // Scroll back to start
                  tabsRef.current.scrollLeft = scrollAmount * (1 - (easeInOut - 0.5) * 2);
                }
              }
              
              if (progress < 1) {
                requestAnimationFrame(animateScroll);
              } else {
                setHasScrolled(true);
              }
            };
            
            requestAnimationFrame(animateScroll);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (tabsRef.current) {
      observer.observe(tabsRef.current);
    }

    return () => observer.disconnect();
  }, [hasScrolled]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tabs */}
      <div ref={tabsRef} className="bg-white overflow-x-auto px-6 py-[10px] w-full scrollbar-hide">
        <div className="flex gap-5 items-center whitespace-nowrap">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col gap-[2px] cursor-pointer"
            >
              <p className={`text-[15px] leading-[22px] tracking-[0.07px] text-center transition-colors ${
                activeTab === tab.id 
                  ? 'font-medium text-[#437c6d]' 
                  : 'font-normal text-[#64748b] hover:text-[#437c6d]'
              }`}>
                {tab.label}
              </p>
              {activeTab === tab.id && (
                <div className="h-[1px] bg-[#437c6d] w-full" />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="px-6">
        <div className="bg-[rgba(67,124,109,0.05)] flex flex-col gap-12 p-4 rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col gap-12"
            >
              <p className="font-semibold text-lg leading-7 tracking-0 text-[#437c6d] whitespace-pre-line">
                {activeContent.title}
              </p>
              <p className="font-normal text-base leading-6 tracking-[0.07px] text-[#64748b]">
                {activeContent.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
