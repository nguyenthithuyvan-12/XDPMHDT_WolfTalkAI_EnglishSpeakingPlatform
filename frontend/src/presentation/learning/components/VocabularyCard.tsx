
import React from 'react';
import type { Vocabulary } from '../../../domain/learning/entities/LearningMaterial';

interface VocabularyCardProps {
    vocab: Vocabulary;
    index: number;
}

import { FaVolumeUp, FaMicrophone } from 'react-icons/fa';

export const VocabularyCard: React.FC<VocabularyCardProps> = ({ vocab, index }) => {
    if (!vocab) return null; // Guard against undefined data
    return (
        <div className="vocab-card">
            <div className="vocab-word">{index + 1}. {vocab.word} <span className="vocab-phonetic">{vocab.phonetic}</span></div>
            <div className="vocab-meaning">Nghĩa: {vocab.meaning}</div>
            <div className="vocab-example">Ví dụ: "{vocab.example}"</div>
            <div className="vocab-usage">Giao tiếp: {vocab.usage}</div>

            <div className="vocab-controls" style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                <button className="audio-btn small" onClick={() => alert(`Playing slow: ${vocab.word}`)}>
                    <FaVolumeUp /> Chậm
                </button>
                <button className="audio-btn small" onClick={() => alert(`Playing normal: ${vocab.word}`)}>
                    <FaVolumeUp /> Thường
                </button>
                <button className="mic-btn small" onClick={() => alert("Recording...")}>
                    <FaMicrophone /> Lặp lại
                </button>
            </div>
        </div>
    );
};
