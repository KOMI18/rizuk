import React, { JSX } from 'react';
interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function Heading({ 
  level, 
  children, 
  className = '',
  centered = false
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizes = {
    1: 'text-5xl md:text-6xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl'
  };

  const alignment = centered ? 'text-center' : '';

  return (
    <Tag className={`font-semibold text-gray-900 ${sizes[level]} ${alignment} ${className}`}>
      {children}
    </Tag>
  );
}