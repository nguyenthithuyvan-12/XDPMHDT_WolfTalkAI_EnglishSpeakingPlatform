import React from 'react';
import './Icon.css';

export interface IconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color,
  className = '',
}) => {
  return (
    <span
      className={`icon icon--${size} ${className}`}
      style={{ color }}
      role="img"
      aria-label={name}
    >
      {name}
    </span>
  );
};
