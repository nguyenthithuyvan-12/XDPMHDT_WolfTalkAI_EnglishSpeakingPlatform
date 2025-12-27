import React from 'react';
import './Badge.css';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded = false,
}) => {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded ? 'badge--rounded' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
};
