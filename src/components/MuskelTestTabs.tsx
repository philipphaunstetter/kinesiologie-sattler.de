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
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef(0);

  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];
  const currentTabIndex = tabsData.findIndex(tab => tab.id === activeTab);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if container is in viewport and near top
      const isInView = rect.top <= viewportHeight * 0.3 && rect.bottom > 0;
      
      if (isInView && currentTabIndex < tabsData.length - 1) {
        setIsScrollLocked(true);
        
        // Calculate scroll progress within the section
        const sectionTop = rect.top;
        const threshold = viewportHeight * 0.1; // 10% of viewport for each transition
        
        // Determine which tab should be active based on scroll position
        const progress = Math.abs(sectionTop) / threshold;
        const targetIndex = Math.min(Math.floor(progress), tabsData.length - 1);
        
        if (targetIndex !== currentTabIndex && targetIndex >= 0) {
          setActiveTab(tabsData[targetIndex].id);
        }
        
        // If we've reached the last tab and scrolled past it, unlock
        if (currentTabIndex === tabsData.length - 1 && sectionTop < -threshold * 2) {
          setIsScrollLocked(false);
        }
      } else if (rect.top > viewportHeight * 0.3) {
        // Reset when scrolling back up
        setIsScrollLocked(false);
        if (currentTabIndex !== 0) {
          setActiveTab(tabsData[0].id);
        }
      } else if (rect.bottom <= 0) {
        setIsScrollLocked(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentTabIndex]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsScrollLocked(false);
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-4 w-full" style={{ minHeight: `${tabsData.length * 40}vh` }}>
      <div className="sticky top-0 bg-white z-10">
        {/* Tabs */}
        <div className="overflow-x-auto px-6 py-[10px] w-full scrollbar-hide">
          <div className="flex gap-5 items-center whitespace-nowrap">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className="flex flex-col gap-[2px] cursor-pointer">
                <p className={`text-sm leading-[21px] tracking-[0.07px] text-center transition-colors ${
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
        <div className="px-6 pb-6">
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
                <p className="font-semibold text-base leading-6 tracking-0 text-[#437c6d] whitespace-pre-line">
                  {activeContent.title}
                </p>
                <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
                  {activeContent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
