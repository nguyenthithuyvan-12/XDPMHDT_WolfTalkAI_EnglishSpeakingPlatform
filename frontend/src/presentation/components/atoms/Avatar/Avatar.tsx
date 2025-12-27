import React from 'react';
import './Avatar.css';

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  rounded?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = 'medium',
  rounded = true,
}) => {
  const getInitials = (fullName?: string) => {
    if (!fullName) return '?';
    const parts = fullName.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return fullName[0].toUpperCase();
  };

  return (
    <div
      className={`avatar avatar--${size} ${rounded ? 'avatar--rounded' : ''}`}
      title={alt || name}
    >
      {src ? (
        <img src={src} alt={alt || name} className="avatar__image" />
      ) : (
        <span className="avatar__initials">{getInitials(name)}</span>
      )}
    </div>
  );
};
