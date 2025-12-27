import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
}

export default function Section({ 
  children, 
  className = '',
  background = 'white'
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50'
  };

  return (
    <section className={`py-24 md:py-32 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-6 max-w-container">
        {children}
      </div>
    </section>
  );
}