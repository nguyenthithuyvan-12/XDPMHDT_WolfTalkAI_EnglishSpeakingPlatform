import React from 'react';
import './StatusCard.css';

export interface StatusCardProps {
  title: string;
  value: string | number;
  icon?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
}

export const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  icon,
  trend,
  color = 'primary',
}) => {
  return (
    <div className={`status-card status-card--${color}`}>
      <div className="status-card__content">
        <div className="status-card__header">
          <span className="status-card__title">{title}</span>
          {icon && <span className="status-card__icon">{icon}</span>}
        </div>
        <div className="status-card__value">{value}</div>
        {trend && (
          <div className="status-card__trend">
            <span className={`trend ${trend.isPositive ? 'trend--up' : 'trend--down'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className="trend__text">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
};
