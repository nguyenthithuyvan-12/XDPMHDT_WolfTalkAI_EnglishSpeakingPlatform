export interface PlacementQuestion {
    id: string;
    text: string;
    type: 'multiple-choice' | 'listening' | 'reading';
    options: string[];
    correctOption: number; // Index 0-3
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    audioUrl?: string; // For listening questions
    imageUrl?: string; // For visual context
}

export interface TestResult {
    score: number;
    totalQuestions: number;
    recommendedLevel: string;
    correctCount: number;
    details: {
        level: string;
        correct: boolean;
    }[];
}
