import type { Level, Unit, Lesson } from '../../../domain/learning/entities/Syllabus';

class MockSyllabusService {
    private levels: Level[] = [
        {
            id: 'A1',
            name: 'Beginner',
            description: 'Khởi động hành trình tiếng Anh. Hiểu và sử dụng các cấu trúc cơ bản nhất.',
            totalUnits: 10,
            completedUnits: 0,
            status: 'active',
            color: '#4CAF50' // Green
        },
        {
            id: 'A2',
            name: 'Elementary',
            description: 'Giao tiếp trong các tình huống quen thuộc hàng ngày.',
            totalUnits: 12,
            completedUnits: 0,
            status: 'locked',
            color: '#2196F3' // Blue
        },
        {
            id: 'B1',
            name: 'Intermediate',
            description: 'Xử lý các tình huống khi đi du lịch và công việc đơn giản.',
            totalUnits: 15,
            completedUnits: 0,
            status: 'locked',
            color: '#FF9800' // Orange
        },
        {
            id: 'B2',
            name: 'Upper Intermediate',
            description: 'Giao tiếp trôi chảy, hiểu các văn bản phức tạp.',
            totalUnits: 15,
            completedUnits: 0,
            status: 'locked',
            color: '#9C27B0' // Purple
        }
    ];

    private unitsA1: Unit[] = [
        {
            id: 'u1_greet',
            levelId: 'A1',
            order: 1,
            title: 'Greetings & Introductions',
            description: 'Học cách chào hỏi, giới thiệu bản thân và người khác.',
            topic: 'Social',
            status: 'unlocked',
            totalLessons: 5,
            completedLessons: 0,
            imageUrl: 'https://img.freepik.com/free-vector/people-waving-hand-illustration-concept_52683-24227.jpg',
            lessons: [
                { id: 'l1_vocab', title: 'Từ vựng chào hỏi', type: 'vocabulary', durationMinutes: 5, isCompleted: false },
                { id: 'l1_gram', title: 'Động từ To Be', type: 'grammar', durationMinutes: 7, isCompleted: false },
                { id: 'l1_conv', title: 'Hội thoại làm quen', type: 'conversation', durationMinutes: 10, isCompleted: false },
                { id: 'l1_prac', title: 'Luyện tập', type: 'practice', durationMinutes: 10, isCompleted: false },
                { id: 'l1_sum', title: 'Tổng kết', type: 'summary', durationMinutes: 2, isCompleted: false }
            ]
        },
        {
            id: 'u2_family',
            levelId: 'A1',
            order: 2,
            title: 'Family & Friends',
            description: 'Mô tả gia đình, bạn bè và hình dáng bên ngoài.',
            topic: 'Family',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            imageUrl: 'https://img.freepik.com/free-vector/happy-family-concept-illustration_114360-1784.jpg',
            lessons: []
        },
        {
            id: 'u3_market',
            levelId: 'A1',
            order: 3,
            title: 'At the Market',
            description: 'Mua sắm, hỏi giá cả và số đếm.',
            topic: 'Shopping',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            imageUrl: 'https://img.freepik.com/free-vector/fruit-market-concept-illustration_114360-1811.jpg',
            lessons: []
        },
        {
            id: 'u4_home',
            levelId: 'A1',
            order: 4,
            title: 'My Home',
            description: 'Mô tả nhà cửa, phòng ốc và vị trí đồ vật.',
            topic: 'Home',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            imageUrl: 'https://img.freepik.com/free-vector/sweet-home-concept-illustration_114360-3944.jpg',
            lessons: []
        },
        {
            id: 'u5_routine',
            levelId: 'A1',
            order: 5,
            title: 'Daily Routine',
            description: 'Nói về các hoạt động hàng ngày và giờ giấc.',
            topic: 'Lifestyle',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        },
        {
            id: 'u6_hobby',
            levelId: 'A1',
            order: 6,
            title: 'Hobbies & Interests',
            description: 'Sở thích, thể thao và các hoạt động giải trí.',
            topic: 'Lifestyle',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        },
        {
            id: 'u7_food',
            levelId: 'A1',
            order: 7,
            title: 'Food & Drink',
            description: 'Gọi món, sở thích ăn uống và công thức nấu ăn đơn giản.',
            topic: 'Food',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        },
        {
            id: 'u8_city',
            levelId: 'A1',
            order: 8,
            title: 'My City',
            description: 'Mô tả thành phố, hỏi đường và giao thng.',
            topic: 'Travel',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        },
        {
            id: 'u9_job',
            levelId: 'A1',
            order: 9,
            title: 'Jobs & Work',
            description: 'Nghề nghiệp và nơi làm việc.',
            topic: 'Work',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        },
        {
            id: 'u10_holiday',
            levelId: 'A1',
            order: 10,
            title: 'Holidays & Festivals',
            description: 'Các ngày lễ hội và kỳ nghỉ.',
            topic: 'Culture',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: []
        }
    ];

    async getLevels(): Promise<Level[]> {
        // Simulate API delay
        return new Promise(resolve => setTimeout(() => resolve(this.levels), 500));
    }

    async getUnitsByLevel(levelId: string): Promise<Unit[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (levelId === 'A1') resolve(this.unitsA1);
                else resolve([]); // Mock data only for A1 currently
            }, 600);
        });
    }

    async unlockUnit(unitId: string): Promise<void> {
        const unit = this.unitsA1.find(u => u.id === unitId);
        if (unit) unit.status = 'unlocked';
    }

    async completeUnit(unitId: string, score: number = 0): Promise<void> {
        const unit = this.unitsA1.find(u => u.id === unitId);
        if (unit) {
            unit.status = 'completed';
            // Update score if new score is higher or if it wasn't set (simple logic)
            if (score > (unit.score || 0)) {
                unit.score = score;
            }

            // Auto unlock next unit
            const nextUnit = this.unitsA1.find(u => u.order === unit.order + 1);
            if (nextUnit) nextUnit.status = 'unlocked';
        }
    }
}

export const syllabusService = new MockSyllabusService();
