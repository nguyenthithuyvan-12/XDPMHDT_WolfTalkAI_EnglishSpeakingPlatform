import type { PlacementQuestion, TestResult } from '../../../domain/learning/entities/PlacementTest';

class MockPlacementService {
    private questions: PlacementQuestion[] = [
        // A1 Questions
        {
            id: 'p1',
            text: 'Choose the correct greeting: "__________ morning, Mr. Wilson."',
            type: 'multiple-choice',
            options: ['Good', 'Nice', 'Hello', 'Happy'],
            correctOption: 0,
            level: 'A1'
        },
        {
            id: 'p2',
            text: 'I __________ from Vietnam.',
            type: 'multiple-choice',
            options: ['is', 'are', 'am', 'be'],
            correctOption: 2,
            level: 'A1'
        },
        // A2 Questions
        {
            id: 'p3',
            text: 'Yesterday, I __________ to the market.',
            type: 'multiple-choice',
            options: ['go', 'gone', 'went', 'going'],
            correctOption: 2,
            level: 'A2'
        },
        {
            id: 'p4',
            text: 'She is __________ than her sister.',
            type: 'multiple-choice',
            options: ['tall', 'taller', 'more tall', 'tallest'],
            correctOption: 1,
            level: 'A2'
        },
        // B1 Questions
        {
            id: 'p5',
            text: 'If I __________ you, I would study harder.',
            type: 'multiple-choice',
            options: ['was', 'am', 'were', 'have been'],
            correctOption: 2,
            level: 'B1'
        },
        {
            id: 'p6',
            text: 'I look forward __________ from you soon.',
            type: 'multiple-choice',
            options: ['to hearing', 'to hear', 'hearing', 'hear'],
            correctOption: 0,
            level: 'B1'
        },
        // B2 Questions
        {
            id: 'p7',
            text: 'The meeting was __________ off due to bad weather.',
            type: 'multiple-choice',
            options: ['put', 'called', 'set', 'taken'],
            correctOption: 1,
            level: 'B2'
        },
        {
            id: 'p8',
            text: 'Scarcely had he entered the room __________ the phone rang.',
            type: 'multiple-choice',
            options: ['when', 'than', 'then', 'after'],
            correctOption: 0,
            level: 'B2'
        },
    ];

    async getQuestions(): Promise<PlacementQuestion[]> {
        // Return a shuffled subset or all questions
        // For now returning all to test logic
        return new Promise(resolve => setTimeout(() => resolve(this.questions), 500));
    }

    calculateResult(answers: { questionId: string; selectedOption: number }[]): TestResult {
        let correctCount = 0;
        const details = [];

        // Count correct answers per level
        const levelPerformance: { [key: string]: { total: number, correct: number } } = {
            'A1': { total: 0, correct: 0 },
            'A2': { total: 0, correct: 0 },
            'B1': { total: 0, correct: 0 },
            'B2': { total: 0, correct: 0 }
        };

        answers.forEach(ans => {
            const question = this.questions.find(q => q.id === ans.questionId);
            if (question) {
                const isCorrect = question.correctOption === ans.selectedOption;
                if (isCorrect) correctCount++;

                // Track per level
                if (levelPerformance[question.level]) {
                    levelPerformance[question.level].total++;
                    if (isCorrect) levelPerformance[question.level].correct++;
                }

                details.push({ level: question.level, correct: isCorrect });
            }
        });

        // Determine Level: 
        // Logic: Must pass > 70% of current level to unlock next.
        let recommendedLevel = 'A1';

        if (this.passedLevel(levelPerformance['A1'])) {
            recommendedLevel = 'A2';
            if (this.passedLevel(levelPerformance['A2'])) {
                recommendedLevel = 'B1';
                if (this.passedLevel(levelPerformance['B1'])) {
                    recommendedLevel = 'B2';
                }
            }
        }

        return {
            score: (correctCount / this.questions.length) * 100,
            totalQuestions: this.questions.length,
            correctCount,
            recommendedLevel,
            details: []
        };
    }

    private passedLevel(stats: { total: number, correct: number }): boolean {
        if (stats.total === 0) return false;
        return (stats.correct / stats.total) >= 0.7; // 70% threshold
    }
}

export const placementService = new MockPlacementService();
