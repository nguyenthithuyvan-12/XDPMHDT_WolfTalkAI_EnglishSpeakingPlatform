
export type QuestionType = 'multiple-choice' | 'fill-blank' | 'matching' | 'ordering' | 'listening' | 'speaking' | 'writing';

export interface QuizQuestion {
    id: string;
    type: QuestionType;
    question: string;
    explanation: string;

    // Type-specific fields
    options?: string[]; // For multiple choice, fill-blank suggestions
    correctAnswer?: string; // Simple text answer key

    // Matching type
    pairs?: { id: string; left: string; right: string }[];

    // Ordering type
    segments?: string[]; // Jumbled words/phrases
    correctOrder?: string[]; // Correct sequence of segments

    // Media
    audioUrl?: string;
    imageUrl?: string;
}

export interface PracticeExercise {
    scenarioId: string;
    questions: QuizQuestion[];
}
