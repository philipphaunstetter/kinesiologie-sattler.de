import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white w-full sm:w-[calc(50%-12px)] lg:w-[280px] xl:w-[300px] aspect-square flex flex-col items-start justify-between overflow-hidden px-5 py-6 sm:px-6 sm:py-8 rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
      <div className="w-10 h-10 overflow-hidden flex items-center justify-center text-[#437c6d]">
        {icon}
      </div>
      <div className="flex flex-col gap-3 text-[#437c6d]">
        <p className="font-semibold text-fluid-lg leading-[1.4] tracking-0 whitespace-pre-line">
          {title}
        </p>
        <p className="font-normal text-fluid-base leading-[1.5] tracking-[0.07px]">
          {description}
        </p>
      </div>
    </div>
  );
}
