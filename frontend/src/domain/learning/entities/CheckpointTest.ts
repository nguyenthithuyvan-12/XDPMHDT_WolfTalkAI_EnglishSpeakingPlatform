export interface CheckpointQuestion {
    id: string;
    text: string;
    type: 'multiple-choice' | 'listening' | 'speaking' | 'reading';
    options?: string[];
    correctOption?: number; // Index of correct option
    audioUrl?: string; // For listening questions
}

export interface CheckpointTest {
    id: string;
    levelId: string; // The level being tested (e.g., 'A1')
    title: string;
    description: string;
    durationMinutes: number;
    questions: CheckpointQuestion[];
    passingScore: number; // Percentage (e.g., 80)
}

export interface CheckpointResult {
    testId: string;
    score: number; // Percentage
    isPassed: boolean;
    completedAt: Date;
    weakSkills: string[]; // e.g., ['Listening', 'Grammar']
}
