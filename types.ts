
// Fix: Import React to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  // Fix: Use React.ReactNode for components that can be rendered as icons or content
  icon: React.ReactNode;
  highlight?: string;
}
