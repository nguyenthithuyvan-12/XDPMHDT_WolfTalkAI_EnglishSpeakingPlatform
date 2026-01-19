import React, { useState, useEffect } from 'react';
import type { Level, Unit } from '../../../../domain/learning/entities/Syllabus';
import { syllabusService } from '../../../../application/learning/services/MockSyllabusService';
import { UnitNode } from './UnitNode';
import '../../styles/LearningPath.css'; // Will create this next

interface LearningPathDashboardProps {
    onSelectUnit: (unit: Unit) => void;
}

export const LearningPathDashboard: React.FC<LearningPathDashboardProps> = ({ onSelectUnit }) => {
    const [levels, setLevels] = useState<Level[]>([]);
    const [selectedLevelId, setSelectedLevelId] = useState<string>('A1');
    const [units, setUnits] = useState<Unit[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadLevels();
    }, []);

    useEffect(() => {
        if (selectedLevelId) {
            loadUnits(selectedLevelId);
        }
    }, [selectedLevelId]);

    const loadLevels = async () => {
        const data = await syllabusService.getLevels();
        setLevels(data);
    };

    const loadUnits = async (levelId: string) => {
        setIsLoading(true);
        const data = await syllabusService.getUnitsByLevel(levelId);
        setUnits(data);
        setIsLoading(false);
    };

    return (
        <div className="learning-path-dashboard">
            {/* Level Selector Header */}
            <div className="level-selector-strip">
                {levels.map(level => (
                    <button
                        key={level.id}
                        className={`level-tab ${selectedLevelId === level.id ? 'active' : ''} ${level.status}`}
                        onClick={() => setSelectedLevelId(level.id)}
                        disabled={level.status === 'locked'}
                        style={{ borderBottomColor: selectedLevelId === level.id ? level.color : 'transparent' }}
                    >
                        <span className="level-id">{level.id}</span>
                        <span className="level-name">{level.name}</span>
                    </button>
                ))}
            </div>

            {/* Path Content */}
            <div className="path-content-area">
                <div className="path-header">
                    <h3>Lộ trình {selectedLevelId} - {levels.find(l => l.id === selectedLevelId)?.name}</h3>
                    <p>{levels.find(l => l.id === selectedLevelId)?.description}</p>
                </div>

                {isLoading ? (
                    <div className="loading-spinner">Đang tải lộ trình...</div>
                ) : (
                    <div className="units-path-list">
                        {units.map((unit, index) => (
                            <div key={unit.id} className="path-step">
                                <UnitNode
                                    unit={unit}
                                    onClick={onSelectUnit}
                                    levelColor={levels.find(l => l.id === selectedLevelId)?.color || '#4CAF50'}
                                />
                                {/* Connector Line (except for last item) */}
                                {index < units.length - 1 && <div className="path-connector"></div>}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
