export interface PlacementTest {
  id: number;
  userId: number;
  testDate: string;
  targetLanguage?: string;
  dailyGoalMinutes?: number;
  learningGoals?: string[];
  currentLevel?: string;
  learningReasons?: string[];
  discoverySource?: string;
  pronunciationScore?: number;
  accuracyScore?: number;
  fluencyScore?: number;
  completenessScore?: number;
  cefrLevel?: string;
  overallScore?: number;
  grammarLevel?: string;
  vocabularyLevel?: string;
  strengths?: string;
  weaknesses?: string;
  recommendations?: string;
  audioUrls?: string[];
  aiAnalysis?: string;
  isCompleted: boolean;
  currentStep: number;
  learningPath?: string;
  totalCorrectAnswers: number;
  totalQuestions: number;
}

export interface PlacementTestStepRequest {
  testId: number;
  step: number;
  targetLanguage?: string;
  dailyGoalMinutes?: number;
  learningGoals?: string[];
  currentLevel?: string;
  learningReasons?: string[];
  discoverySource?: string;
  questionId?: string;
  answer?: string;
  isCorrect?: boolean;
}

export interface QuizQuestion {
  id: string;
  type: "listen" | "translate" | "match" | "picture";
  question: string;
  audio?: string;
  options?: string[];
  correctAnswer: string;
  image?: string;
}
