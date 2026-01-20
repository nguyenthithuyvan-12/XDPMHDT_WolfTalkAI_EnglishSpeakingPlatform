import type { Level, Unit, Lesson } from '../../../domain/learning/entities/Syllabus';

class MockSyllabusService {
    private levels: Level[] = [
        {
            id: 'A1',
            name: 'Beginner',
            group: 'Basic',
            description: 'Khởi động hành trình tiếng Anh. Hiểu và sử dụng các cấu trúc cơ bản nhất.',
            totalUnits: 10,
            completedUnits: 0,
            status: 'active',
            color: '#4CAF50' // Green
        },
        {
            id: 'A2',
            name: 'Elementary',
            group: 'Basic',
            description: 'Giao tiếp trong các tình huống quen thuộc hàng ngày.',
            totalUnits: 12,
            completedUnits: 0,
            status: 'locked',
            color: '#2196F3' // Blue
        },
        {
            id: 'B1',
            name: 'Intermediate',
            group: 'Independent',
            description: 'Xử lý các tình huống khi đi du lịch và công việc đơn giản.',
            totalUnits: 15,
            completedUnits: 0,
            status: 'locked',
            color: '#FF9800' // Orange
        },
        {
            id: 'B2',
            name: 'Upper Intermediate',
            group: 'Independent',
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

    private unitsA2: Unit[] = [
        {
            id: 'u11_travel',
            levelId: 'A2',
            order: 11,
            title: 'Transport & Travel',
            description: 'Hỏi đường, đặt vé và sử dụng phương tiện giao thông.',
            topic: 'Giao thông & Đi lại',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            imageUrl: 'https://img.freepik.com/free-vector/travel-concept-illustration_114360-3944.jpg',
            lessons: [
                { id: 'l11_1', title: 'Từ vựng: Phương tiện & Nhà ga', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l11_2', title: 'Ngữ pháp: Should & Hỏi đường', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l11_3', title: 'Hội thoại: Bắt xe buýt', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l11_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l11_5', title: 'Tổng kết Unit 11', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u12_places',
            levelId: 'A2',
            order: 12,
            title: 'Describing Places',
            description: 'Mô tả địa điểm, thành phố và phong cảnh.',
            topic: 'Mô tả địa điểm',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l12_1', title: 'Từ vựng: Thành phố & Miêu tả', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l12_2', title: 'Ngữ pháp: So sánh & Giới từ', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l12_3', title: 'Hội thoại: Hỏi đường & Chỉ dẫn', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l12_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l12_5', title: 'Tổng kết Unit 12', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u13_shopping',
            levelId: 'A2',
            order: 13,
            title: 'Shopping & Fashion',
            description: 'Mua quần áo, hỏi size và màu sắc.',
            topic: 'Mua sắm',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l13_1', title: 'Từ vựng: Quần áo & Màu sắc', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l13_2', title: 'Ngữ pháp: Too/Enough & Tính từ', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l13_3', title: 'Hội thoại: Mua sắm & Trả giá', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l13_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l13_5', title: 'Tổng kết Unit 13', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u14_health',
            levelId: 'A2',
            order: 14,
            title: 'Health & Fitness',
            description: 'Nói về sức khỏe, đi bác sĩ và thể thao.',
            topic: 'Sức khỏe',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l14_1', title: 'Từ vựng: Cơ thể & Bệnh tật', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l14_2', title: 'Ngữ pháp: Lời khuyên & Should', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l14_3', title: 'Hội thoại: Tại phòng khám', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l14_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l14_5', title: 'Tổng kết Unit 14', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u15_restaurant',
            levelId: 'A2',
            order: 15,
            title: 'At the Restaurant',
            description: 'Đặt bàn, gọi món và thanh toán.',
            topic: 'Gọi món ăn',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l15_1', title: 'Từ vựng: Đồ ăn & Đồ uống', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l15_2', title: 'Ngữ pháp: Would like & Danh từ', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l15_3', title: 'Hội thoại: Gọi món tại nhà hàng', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l15_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l15_5', title: 'Tổng kết Unit 15', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u16_plans',
            levelId: 'A2',
            order: 16,
            title: 'Plans & Arrangements',
            description: 'Nói về dự định và kế hoạch tương lai.',
            topic: 'Dự định tương lai',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l16_1', title: 'Từ vựng: Kế hoạch & Du lịch', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l16_2', title: 'Ngữ pháp: Be going to & Hiện tại tiếp diễn', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l16_3', title: 'Hội thoại: Sắp xếp cuộc hẹn', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l16_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l16_5', title: 'Tổng kết Unit 16', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u17_services',
            levelId: 'A2',
            order: 17,
            title: 'Public Services',
            description: 'Sử dụng dịch vụ ngân hàng, bưu điện...',
            topic: 'Dịch vụ công cộng',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l17_1', title: 'Từ vựng: Ngân hàng & Bưu điện', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l17_2', title: 'Ngữ pháp: Câu yêu cầu lịch sự', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l17_3', title: 'Hội thoại: Tại bưu điện', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l17_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l17_5', title: 'Tổng kết Unit 17', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u18_tech',
            levelId: 'A2',
            order: 18,
            title: 'Technology & Media',
            description: 'Sử dụng điện thoại, máy tính và mạng xã hội.',
            topic: 'Công nghệ & Truyền thông',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l18_1', title: 'Từ vựng: Thiết bị & Internet', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l18_2', title: 'Ngữ pháp: Câu điều kiện loại 0', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l18_3', title: 'Hội thoại: Hỗ trợ kỹ thuật', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l18_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l18_5', title: 'Tổng kết Unit 18', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u19_weather',
            levelId: 'A2',
            order: 19,
            title: 'Weather & Environment',
            description: 'Dự báo thời tiết và các vấn đề môi trường.',
            topic: 'Thời tiết & Môi trường',
            status: 'locked',
            totalLessons: 5,
            completedLessons: 0,
            lessons: [
                { id: 'l19_1', title: 'Từ vựng: Thời tiết & Tự nhiên', type: 'vocabulary', durationMinutes: 10, isCompleted: false },
                { id: 'l19_2', title: 'Ngữ pháp: Tương lai với Will/May', type: 'grammar', durationMinutes: 15, isCompleted: false },
                { id: 'l19_3', title: 'Hội thoại: Dự báo thời tiết', type: 'conversation', durationMinutes: 15, isCompleted: false },
                { id: 'l19_4', title: 'Luyện tập tình huống', type: 'practice', durationMinutes: 20, isCompleted: false },
                { id: 'l19_5', title: 'Tổng kết Unit 19', type: 'summary', durationMinutes: 5, isCompleted: false }
            ]
        },
        {
            id: 'u20_review',
            levelId: 'A2',
            order: 20,
            title: 'A2 Review',
            description: 'Tổng ôn tập kiến thức cấp độ A2.',
            topic: 'General',
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
                else if (levelId === 'A2') resolve(this.unitsA2);
                else resolve([]);
            }, 600);
        });
    }

    async unlockUnit(unitId: string): Promise<void> {
        const unit = this.unitsA1.find(u => u.id === unitId) || this.unitsA2.find(u => u.id === unitId);
        if (unit) unit.status = 'unlocked';
    }

    async unlockLevel(levelId: string): Promise<void> {
        const level = this.levels.find(l => l.id === levelId);
        if (level) {
            level.status = 'active';
            // Also unlock the first unit of this level
            if (levelId === 'A2' && this.unitsA2.length > 0) {
                this.unitsA2[0].status = 'unlocked';
            }
        }
    }

    async completeUnit(unitId: string, score: number = 0): Promise<void> {
        let unit = this.unitsA1.find(u => u.id === unitId);
        let nextUnit;

        if (unit) {
            nextUnit = this.unitsA1.find(u => u.order === unit!.order + 1);
        } else {
            unit = this.unitsA2.find(u => u.id === unitId);
            if (unit) {
                nextUnit = this.unitsA2.find(u => u.order === unit!.order + 1);
            }
        }

        if (unit) {
            unit.status = 'completed';
            // Update score if new score is higher or if it wasn't set (simple logic)
            if (score > (unit.score || 0)) {
                unit.score = score;
            }

            // Auto unlock next unit
            if (nextUnit) nextUnit.status = 'unlocked';
        }
    }
}

export const syllabusService = new MockSyllabusService();
