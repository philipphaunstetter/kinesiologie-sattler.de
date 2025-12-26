import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="w-full max-w-[250px] h-[250px] flex items-center">
      <div className="bg-white w-full aspect-square flex flex-col items-start justify-between overflow-hidden px-4 py-6 rounded-2xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <div className="w-8 h-8 overflow-hidden flex items-center justify-center text-[#437c6d]">
          {icon}
        </div>
        <div className="flex flex-col gap-[10px] pr-4 text-[#437c6d]">
          <p className="font-semibold text-base leading-6 tracking-0">
            {title}
          </p>
          <p className="font-normal text-sm leading-[21px] tracking-[0.07px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
