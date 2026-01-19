export interface Lesson {
    id: string;
    title: string;
    description?: string;
    type: 'vocabulary' | 'grammar' | 'conversation' | 'practice' | 'summary';
    durationMinutes?: number;
    isCompleted?: boolean;
}

export interface Unit {
    id: string;
    levelId: string;
    order: number;
    title: string;
    description: string;
    topic: string;
    imageUrl?: string;
    lessons: Lesson[];
    status: 'locked' | 'unlocked' | 'completed';
    totalLessons: number;
    completedLessons: number;
    score?: number; // 0-100, used for ranking (Gold/Silver/Bronze)
}

export interface Level {
    id: string; // 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'
    name: string; // e.g., 'Beginner', 'Elementary'
    description: string;
    totalUnits: number;
    completedUnits: number;
    status: 'locked' | 'active' | 'completed';
    color: string; // Hex code for UI theme
}

export interface Syllabus {
    levels: Level[];
    currentLevelId: string;
}
