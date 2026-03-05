import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ subtitle, title, description }: SectionHeaderProps) {
  return (
    <div className="section-heading">
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <h2>{title}</h2>
      {description && <p className="description">{description}</p>}
      <div className="divider"></div>
    </div>
  );
}
