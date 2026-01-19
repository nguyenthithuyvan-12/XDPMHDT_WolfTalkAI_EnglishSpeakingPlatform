import React, { useState } from 'react';
import '../styles/Learning.css';
import type { ScenarioDetail } from '../../../domain/learning/entities/LearningMaterial';


interface LearningPreparationProps {
    scenario: ScenarioDetail;
    userLevel: string; // e.g., "A1", "B2"
    onLevelChange: (level: string) => void;
    onStart: () => void;
    onBack: () => void;
}

export const LearningPreparation: React.FC<LearningPreparationProps> = ({ scenario, userLevel, onLevelChange, onStart, onBack }) => {
    const [isWarmup, setIsWarmup] = useState(false);
    const levels = ["A1", "B2", "C1"];

    return (
        <div className="preparation-container">
            <button className="back-button" onClick={onBack}>← Quay lại</button>

            <div className="mission-card">
                <div className="mission-header">
                    <div className="level-selector">
                        <span className="level-label">Cấp độ:</span>
                        <div className="level-options">
                            {levels.map((lvl) => (
                                <button
                                    key={lvl}
                                    className={`level-btn ${userLevel === lvl ? 'active' : ''}`}
                                    onClick={() => onLevelChange(lvl)}
                                >
                                    {lvl}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h2>{scenario.scenarioName}</h2>
                </div>

                <div className="mission-stats">
                    <div className="stat-item">
                        <span className="stat-label">Thời gian</span>
                        <span className="stat-value">~10 phút</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Mục tiêu XP</span>
                        <span className="stat-value">+50 XP</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Nội dung</span>
                        <span className="stat-value">{scenario.vocabulary.length} từ, {scenario.grammar.length} ngữ pháp</span>
                    </div>
                </div>

                <div className="warmup-toggle">
                    <label>
                        <input
                            type="checkbox"
                            checked={isWarmup}
                            onChange={(e) => setIsWarmup(e.target.checked)}
                        />
                        Khởi động nhanh (Warm-up) - 1 phút
                    </label>
                </div>

                <div className="action-area">
                    <button className="start-button-large" onClick={onStart}>
                        Bắt đầu ngay 🚀
                    </button>
                    <p className="users-learning">🔥 12 người khác đang học chủ đề này</p>
                </div>
            </div>
        </div>
    );
};


