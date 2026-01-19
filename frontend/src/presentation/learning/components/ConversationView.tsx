
import React from 'react';
import type { ConversationTurn } from '../../../domain/learning/entities/LearningMaterial';

interface ConversationViewProps {
    turns: ConversationTurn[];
}

import { FaPlay, FaPause, FaRedo, FaTachometerAlt } from 'react-icons/fa';
import { useState } from 'react';

export const ConversationView: React.FC<ConversationViewProps> = ({ turns }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) alert("Playing full conversation...");
    };

    const changeSpeed = () => {
        setSpeed(prev => (prev === 1 ? 0.8 : 1));
        alert(`Speed changed to ${speed === 1 ? '0.8x' : '1.0x'}`);
    };

    const playSentence = (text: string) => {
        alert(`Playing sentence: "${text}"`);
    };

    return (
        <div style={{ marginTop: 24 }}>
            <div className="conversation-controls" style={{ marginBottom: 20, display: 'flex', gap: 12, alignItems: 'center' }}>
                <button className="control-btn primary" onClick={togglePlay}>
                    {isPlaying ? <><FaPause /> Tạm dừng</> : <><FaPlay /> Nghe tất cả</>}
                </button>
                <button className="control-btn" onClick={changeSpeed}>
                    <FaTachometerAlt /> {speed}x
                </button>
            </div>

            <div className="conversation-list">
                {turns.length === 0 && <p>Chưa có hội thoại mẫu cho kịch bản này.</p>}
                {turns.map((turn, idx) => (
                    <div
                        key={idx}
                        className="conversation-item"
                        style={{
                            marginBottom: 16,
                            padding: 12,
                            borderLeft: '4px solid #667eea',
                            background: '#f8f9fa',
                            cursor: 'pointer'
                        }}
                        onClick={() => playSentence(turn.en)}
                    >
                        <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 4 }}>
                            {turn.en} <FaRedo style={{ fontSize: '0.8rem', color: '#999', marginLeft: 8 }} />
                        </div>
                        <div style={{ color: '#666', fontStyle: 'italic' }}>{turn.vi}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
