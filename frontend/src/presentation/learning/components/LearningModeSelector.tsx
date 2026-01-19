import React from 'react';
import '../styles/Learning.css';

// Define available learning modes
export type LearningMode = 'quick' | 'pathway' | 'free' | 'placement';

interface LearningModeSelectorProps {
    onSelectMode: (mode: LearningMode) => void;
}

export const LearningModeSelector: React.FC<LearningModeSelectorProps> = ({ onSelectMode }) => {
    return (
        <div className="learning-mode-container">
            <h2 className="learning-title">Hôm nay bạn muốn học gì?</h2>

            <div className="mode-grid">
                {/* Option A: Quick Practice */}
                <div className="mode-card quick" onClick={() => onSelectMode('quick')}>
                    <div className="mode-icon">⚡</div>
                    <div className="mode-content">
                        <h3>Học nhanh (5-10p)</h3>
                        <p>Ôn tập từ vựng & duy trì Streak hàng ngày.</p>
                        <span className="mode-tag">Recommended</span>
                    </div>
                </div>

                {/* Option B: Long-term Path */}
                <div className="mode-card path" onClick={() => onSelectMode('pathway')}>
                    <div className="mode-icon">🗺️</div>
                    <div className="mode-content">
                        <h3>Lộ trình bài bản</h3>
                        <p>Học theo cấp độ CEFR (A1 ➔ C1).</p>
                    </div>
                </div>

                {/* Option C: Free Learning */}
                <div className="mode-card free" onClick={() => onSelectMode('free')}>
                    <div className="mode-icon">🔍</div>
                    <div className="mode-content">
                        <h3>Học tự do</h3>
                        <p>Tự chọn chủ đề yêu thích (Du lịch, Công việc...).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
