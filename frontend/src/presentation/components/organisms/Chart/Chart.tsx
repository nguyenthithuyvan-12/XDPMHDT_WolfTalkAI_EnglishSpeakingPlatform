import React from 'react';
import './Chart.css';

interface ChartProps {
  title: string;
  data: { label: string; value: number }[];
  type?: 'bar' | 'line';
}

export const Chart: React.FC<ChartProps> = ({ title, data, type = 'bar' }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="chart">
      <h3 className="chart__title">{title}</h3>
      <div className="chart__container">
        {data.map((item, index) => (
          <div key={index} className="chart__item">
            <div className="chart__bar-wrapper">
              <div
                className="chart__bar"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              >
                <span className="chart__value">{item.value}</span>
              </div>
            </div>
            <span className="chart__label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
