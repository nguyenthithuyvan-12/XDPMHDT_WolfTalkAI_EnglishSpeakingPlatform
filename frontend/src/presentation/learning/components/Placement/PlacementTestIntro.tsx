import React from 'react';
import '../../styles/Learning.css'; // Reusing learning styles for consistency

interface PlacementTestIntroProps {
    onStartTest: () => void;
    onSkipTest: () => void;
}

export const PlacementTestIntro: React.FC<PlacementTestIntroProps> = ({ onStartTest, onSkipTest }) => {
    return (
        <div className="preparation-container" style={{ textAlign: 'center', marginTop: '50px' }}>
            <div className="mission-card">
                <div className="mission-header">
                    <span style={{ fontSize: '4rem' }}>🎯</span>
                    <h2 className="learning-title" style={{ marginTop: '1rem' }}>Kiểm tra trình độ</h2>
                    <p className="summary-subtitle">
                        Để có lộ trình học phù hợp nhất, hãy dành 10 phút để chúng tôi đánh giá khả năng tiếng Anh hiện tại của bạn.
                    </p>
                </div>

                <div className="summary-actions" style={{ flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                    <button
                        className="start-button-large"
                        onClick={onStartTest}
                        style={{ maxWidth: '400px' }}
                    >
                        Bắt đầu bài kiểm tra
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={onSkipTest}
                        style={{ maxWidth: '400px', width: '100%', border: 'none', color: '#9ca3af', textDecoration: 'underline' }}
                    >
                        Tôi là người mới bắt đầu (A1)
                    </button>
                </div>

                <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
                    Bài kiểm tra bao gồm Ngữ pháp, Từ vựng, và Kỹ năng Đọc hiểu theo chuẩn CEFR (A1-B2).
                </p>
            </div>
        </div>
    );
};
