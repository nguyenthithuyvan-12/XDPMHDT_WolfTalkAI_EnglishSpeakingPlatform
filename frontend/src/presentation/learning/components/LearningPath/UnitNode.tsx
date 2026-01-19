import React from 'react';
import { FaLock, FaCheck, FaStar } from 'react-icons/fa';
import type { Unit } from '../../../../domain/learning/entities/Syllabus';

interface UnitNodeProps {
    unit: Unit;
    onClick: (unit: Unit) => void;
    levelColor: string;
}

// Helper to create transparent background from hex
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const UnitNode: React.FC<UnitNodeProps> = ({ unit, onClick, levelColor }) => {
    const isLocked = unit.status === 'locked';
    const isCompleted = unit.status === 'completed';
    const isActive = unit.status === 'unlocked' && !isCompleted;

    const handleClick = () => {
        if (!isLocked) {
            onClick(unit);
        }
    };

    // Medal colors
    const MEDAL_GOLD = '#FFD700';
    const MEDAL_SILVER = '#C0C0C0';
    const MEDAL_BRONZE = '#CD7F32';

    const getMedalColor = (score: number = 0) => {
        if (score >= 90) return MEDAL_GOLD;
        if (score >= 70) return MEDAL_SILVER;
        return MEDAL_BRONZE;
    };

    const medalColor = isCompleted ? getMedalColor(unit.score) : levelColor;
    const finalBorderColor = isCompleted ? medalColor : isActive ? levelColor : 'transparent';
    const finalShadowColor = isCompleted ? medalColor : levelColor;

    // Dynamic styles based on level color or medal color
    const containerStyle: React.CSSProperties = isCompleted
        ? {
            borderColor: finalBorderColor,
            boxShadow: `0 0 0 1px ${finalBorderColor}`,
            backgroundColor: hexToRgba(finalBorderColor, 0.1)
        }
        : isActive
            ? {
                borderColor: levelColor,
                backgroundColor: hexToRgba(levelColor, 0.05)
            }
            : {};

    const visualStyle: React.CSSProperties = isCompleted
        ? { backgroundColor: finalBorderColor }
        : isActive
            ? { color: levelColor, backgroundColor: '#fff', border: `2px solid ${levelColor}` }
            : {};

    const btnStyle = { backgroundColor: levelColor }; // Button stays level color for consistency? Or medal? Let's keep level color for start button on active units.

    return (
        <div
            className={`unit-node-container ${unit.status}`}
            onClick={handleClick}
            style={containerStyle}
        >
            <div className="unit-node-visual" style={visualStyle}>
                {isLocked && <FaLock className="node-icon lock" />}
                {isCompleted && <FaCheck className="node-icon check" />}
                {isActive && <FaStar className="node-icon active" />}
            </div>

            <div className="unit-info">
                <span className="unit-label" style={{ color: isActive || isCompleted ? levelColor : '#999' }}>UNIT {unit.order}</span>
                <h4 className="unit-title">{unit.title}</h4>
                <p className="unit-desc">{unit.description}</p>

                {isActive && (
                    <button className="start-btn" style={btnStyle}>Bắt đầu</button>
                )}
            </div>
        </div>
    );
};
