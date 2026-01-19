export interface LearningProfile {
  id?: number;
  userId?: number;
  currentLevel: string;
  targetLevel: string;
  studyHoursPerWeek: number;
  preferredLearningStyle: string;
  learningPurpose: string;
  speakingConfidence: number;
  pronunciationScore?: number;
  grammarScore?: number;
  vocabularyScore?: number;
  fluencyScore?: number;
  bio?: string;
  avatarUrl?: string;
}

export interface LearningGoal {
  id?: number;
  userId?: number;
  goalType: string;
  goalCategory: string;
  title: string;
  description?: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  startDate?: string;
  endDate?: string;
  status: string;
  priority: number;
  isCompleted: boolean;
  progressPercentage?: number;
}

export interface UserPreference {
  id?: number;
  userId?: number;
  interestedTopics: string[];
  preferredScenarios: string[];
  preferredAccent: string;
  difficultyPreference: string;
  dailyPracticeTime: number;
  reminderEnabled: boolean;
  reminderTime?: string;
  enableAiFeedback: boolean;
  enablePronunciationCheck: boolean;
  enableGrammarCheck: boolean;
  feedbackDetailLevel: string;
  practiceWithMentor: boolean;
  showSubtitles: boolean;
  backgroundMusicEnabled: boolean;
}
