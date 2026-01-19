import React from 'react';
import type { TestResult } from '../../../../domain/learning/entities/PlacementTest';
import '../../styles/Learning.css';
import { FaMedal, FaArrowRight } from 'react-icons/fa';

interface PlacementResultProps {
    result: TestResult;
    onStartCourse: () => void;
}

export const PlacementResult: React.FC<PlacementResultProps> = ({ result, onStartCourse }) => {
    return (
        <div className="summary-container">
            <div className="celebration-animation">🎉</div>
            <h2 className="learning-title">Kết quả kiểm tra</h2>
            <p className="summary-subtitle">Chúc mừng bạn đã hoàn thành bài đánh giá năng lực!</p>

            <div className="mission-card" style={{ marginBottom: '32px' }}>
                <p className="summary-label">TRÌNH ĐỘ CỦA BẠN</p>
                <h1 style={{ fontSize: '4rem', color: '#58cc02', margin: '16px 0' }}>{result.recommendedLevel}</h1>
                <div className="summary-stats-grid" style={{ marginBottom: '0' }}>
                    <div className="stat-item">
                        <span className="stat-label">Điểm số</span>
                        <span className="stat-value">{Math.round(result.score)}%</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Số câu đúng</span>
                        <span className="stat-value">{result.correctCount}/{result.totalQuestions}</span>
                    </div>
                </div>
            </div>

            <p style={{ color: '#ccc', marginBottom: '32px' }}>
                Dựa trên kết quả này, chúng tôi đề xuất bạn bắt đầu tại cấp độ
                <strong style={{ color: '#fff' }}> {result.recommendedLevel}</strong>.
                Lộ trình học đã được cá nhân hóa cho bạn.
            </p>

            <button className="start-button-large" onClick={onStartCourse}>
                Bắt đầu học ngay <FaArrowRight style={{ marginLeft: '8px' }} />
            </button>
        </div>
    );
};
