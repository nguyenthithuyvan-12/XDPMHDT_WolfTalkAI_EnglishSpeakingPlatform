
import React from 'react';
import type { Topic } from '../../../domain/learning/entities/LearningMaterial';


interface TopicSelectorProps {
    topics: Topic[];
    selectedTopic: string | null;
    onSelectTopic: (topic: string) => void;
    selectedScenario: string | null;
    scenarios: string[];
    onSelectScenario: (scenario: string) => void;
    onBack?: () => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
    topics,
    selectedTopic,
    onSelectTopic,
    selectedScenario,
    scenarios,
    onSelectScenario,
    onBack,
}) => {
    return (
        <div className="learning-section">
            {onBack && <button className="back-button" onClick={onBack}>← Quay lại</button>}
            <h2 className="learning-title">Chọn chủ đề</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 32, marginTop: 32 }}>
                {topics.map((group) => (
                    <div key={group.group} style={{ background: "#232a3d", borderRadius: 12, boxShadow: "0 2px 8px #232a3d", padding: 24, marginBottom: 8 }}>
                        <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 8, color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {group.group}
                            <span style={{
                                fontSize: '12px',
                                padding: '2px 8px',
                                borderRadius: '4px',
                                background: group.minLevel === 'A1' || group.minLevel === 'A2' ? '#58cc02' :
                                    group.minLevel === 'B1' || group.minLevel === 'B2' ? '#f4a100' : '#ff4b4b',
                                color: '#fff'
                            }}>
                                {group.minLevel}
                            </span>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 8 }}>
                            {group.topics.map((topic) => (
                                <button
                                    key={topic}
                                    className={selectedTopic === topic ? "topic-btn selected" : "topic-btn"}
                                    onClick={() => onSelectTopic(topic)}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                        <div style={{ fontSize: 14, color: "#9ca3af", marginTop: 8 }}>
                            <b>Kịch bản ví dụ:</b> {group.examples.join(", ")}
                        </div>
                        {/* Nếu đã chọn chủ đề trong group này, hiển thị danh sách kịch bản */}
                        {selectedTopic && group.topics.includes(selectedTopic) && (
                            <div className="scenario-list">
                                {scenarios.map((sc) => (
                                    <button
                                        className={selectedScenario === sc ? "scenario-btn selected" : "scenario-btn"}
                                        key={sc}
                                        onClick={() => onSelectScenario(sc)}
                                        style={{ borderColor: selectedScenario === sc ? "#58cc02" : undefined }}
                                    >
                                        {sc}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
