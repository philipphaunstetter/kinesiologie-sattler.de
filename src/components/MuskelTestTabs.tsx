'use client';

import { useState } from 'react';

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

  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Tabs */}
      <div className="bg-white overflow-x-auto px-6 py-[10px] w-full scrollbar-hide">
        <div className="flex gap-5 items-center whitespace-nowrap">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col gap-[2px] cursor-pointer"
            >
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
      <div className="px-6">
        <div className="bg-[rgba(67,124,109,0.05)] flex flex-col gap-12 p-4 rounded-lg">
          <p className="font-semibold text-base leading-6 tracking-0 text-[#437c6d] whitespace-pre-line">
            {activeContent.title}
          </p>
          <p className="font-normal text-sm leading-[21px] tracking-[0.07px] text-[#64748b]">
            {activeContent.description}
          </p>
        </div>
      </div>
    </div>
  );
}
