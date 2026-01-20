import type { CheckpointTest, CheckpointResult } from '../../../domain/learning/entities/CheckpointTest';

class MockCheckpointService {
    private tests: CheckpointTest[] = [
        {
            id: 'test_a1',
            levelId: 'A1',
            title: 'Bài kiểm tra cuối cấp A1',
            description: 'Đánh giá tổng hợp 4 kỹ năng trước khi lên cấp A2.',
            durationMinutes: 20,
            passingScore: 80,
            questions: [
                {
                    id: 'q1',
                    text: 'Choose the correct greeting for 9:00 AM:',
                    type: 'multiple-choice',
                    options: ['Good evening', 'Good afternoon', 'Good morning', 'Good night'],
                    correctOption: 2
                },
                {
                    id: 'q2',
                    text: 'Which sentence is grammatically correct?',
                    type: 'multiple-choice',
                    options: ['She do not like coffee.', 'She does not like coffee.', 'She not likes coffee.', 'She no like coffee.'],
                    correctOption: 1
                },
                {
                    id: 'q3',
                    text: 'Listen and choose the number you hear:',
                    type: 'listening',
                    audioUrl: 'mock_audio_123.mp3', // Mock URL
                    options: ['13', '30', '33', '3'],
                    correctOption: 0
                },
                {
                    id: 'q4',
                    text: 'Đọc đoạn văn và chọn ý chính: "I have a big family. I live with my parents and two sisters."',
                    type: 'reading',
                    options: ['Living alone', 'Living with friends', 'Living with family', 'Living in a hotel'],
                    correctOption: 2
                },
                {
                    id: 'q5',
                    text: 'Say "Hello, nice to meet you" clearly.',
                    type: 'speaking'
                }
            ]
        }
    ];

    async getTestForLevel(levelId: string): Promise<CheckpointTest | null> {
        return new Promise(resolve => {
            setTimeout(() => {
                const test = this.tests.find(t => t.levelId === levelId);
                resolve(test || null);
            }, 500);
        });
    }

    async submitTest(testId: string, answers: any[]): Promise<CheckpointResult> {
        return new Promise(resolve => {
            setTimeout(() => {
                // Mock grading logic
                // Provide a passing result for demonstration purposes if mostly correct (mock)
                const score = 85;
                resolve({
                    testId,
                    score,
                    isPassed: score >= 80,
                    completedAt: new Date(),
                    weakSkills: score < 100 ? ['Listening'] : []
                });
            }, 1000);
        });
    }
}

export const checkpointService = new MockCheckpointService();
