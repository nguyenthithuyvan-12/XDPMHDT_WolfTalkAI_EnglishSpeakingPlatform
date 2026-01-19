
import React from 'react';
import type { Grammar } from '../../../domain/learning/entities/LearningMaterial';

interface GrammarCardProps {
    grammar: Grammar;
    index: number;
}

export const GrammarCard: React.FC<GrammarCardProps> = ({ grammar, index }) => {
    return (
        <div className="grammar-card">
            <div className="grammar-title">{index + 1}. {grammar.name}</div>
            <div className="grammar-formula">Công thức: <b>{grammar.formula}</b></div>
            <div className="grammar-explanation">Giải thích: {grammar.explanation}</div>
            <div className="grammar-example">Ví dụ: "{grammar.example}"</div>
            <div className="grammar-note">Lưu ý: {grammar.note}</div>
        </div>
    );
};
