
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface Topic {
    id: string; // Added ID for better handling
    group: string;
    minLevel: CEFRLevel; // Minimum level required
    topics: string[];
    examples: string[];
}

export interface Vocabulary {
    word: string;
    phonetic: string;
    meaning: string;
    example: string;
    usage: string;
    level: number;
}

export interface Grammar {
    name: string;
    formula: string;
    explanation: string;
    example: string;
    note: string;
}

export interface ConversationTurn {
    en: string;
    vi: string;
}

export interface Conversation {
    scenario: string;
    topic: string; // The parent topic
    turns: ConversationTurn[];
}


import type { PracticeExercise } from "./PracticeMaterial";

export interface ScenarioDetail {
    scenarioName: string;
    vocabulary: Vocabulary[];
    grammar: Grammar[];
    conversation: ConversationTurn[];
    practice?: PracticeExercise; // Optional practice exercises
}
