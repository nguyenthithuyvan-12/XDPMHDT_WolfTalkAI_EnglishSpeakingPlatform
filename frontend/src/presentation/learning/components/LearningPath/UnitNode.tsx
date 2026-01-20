import React from 'react';
import { FaLock, FaCheck, FaStar } from 'react-icons/fa';
import type { Unit } from '../../../../domain/learning/entities/Syllabus';

interface UnitNodeProps {
    unit: Unit;
    onClick: (unit: Unit) => void;
    levelColor: string;
}

export const UnitNode: React.FC<UnitNodeProps> = ({ unit, onClick, levelColor }) => {
    const isLocked = unit.status === 'locked';
    const isCompleted = unit.status === 'completed';
    const isActive = unit.status === 'unlocked' && !isCompleted;

    const handleClick = () => {
        if (!isLocked) {
            onClick(unit);
        }
    };

    // Medal colors (kept for reference if needed later, or utilized via class logic)
    const MEDAL_GOLD = '#FFD700';
    const MEDAL_SILVER = '#C0C0C0';
    const MEDAL_BRONZE = '#CD7F32';

    const getMedalColor = (score: number = 0) => {
        if (score >= 90) return MEDAL_GOLD;
        if (score >= 70) return MEDAL_SILVER;
        return MEDAL_BRONZE;
    };

    const medalColor = isCompleted ? getMedalColor(unit.score) : levelColor;

    // Use medalColor for completed state to show achievement (Gold/Silver/Bronze)
    // Use levelColor for active state to show level identity

    // Container Style: Border matches the status color
    const containerStyle: React.CSSProperties = (isActive || isCompleted)
        ? { borderColor: isCompleted ? medalColor : levelColor }
        : {};

    // Visual Circle Style:
    // - Active: White bg, Level Color border/icon
    // - Completed: Medal Color bg, White icon
    const visualStyle: React.CSSProperties = isCompleted
        ? { backgroundColor: medalColor, borderColor: medalColor, color: '#fff' }
        : isActive
            ? { color: levelColor, backgroundColor: '#fff', borderColor: levelColor }
            : {};

    const btnStyle = { backgroundColor: levelColor };

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
                <span className="unit-label" style={{ color: (isActive || isCompleted) ? levelColor : '#999' }}>UNIT {unit.order}</span>
                <h4 className="unit-title">{unit.title}</h4>
                <p className="unit-desc">{unit.description}</p>

                {isActive && (
                    <button className="start-btn" style={btnStyle}>Bắt đầu</button>
                )}
            </div>
        </div>
    );
};
