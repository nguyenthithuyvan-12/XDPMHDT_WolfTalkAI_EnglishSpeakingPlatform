
import type { ILearningRepository } from "../../../domain/learning/repositories/ILearningRepository";
import type { Topic, ScenarioDetail, Vocabulary, Grammar, ConversationTurn, CEFRLevel } from "../../../domain/learning/entities/LearningMaterial";
import { getExpandedData } from "./ExpandedMockData";

const topicGroups: Topic[] = [
    {
        id: "group_basics",
        group: "Giao tiếp cơ bản",
        minLevel: "A1",
        topics: [
            "Chào hỏi & làm quen",
            "Giới thiệu bản thân",
            "Hỏi thăm sức khỏe",
            "Nói về sở thích",
            "Giao tiếp hàng ngày",
        ],
        examples: ["Chào hỏi người lạ", "Nói chuyện với bạn mới", "Bắt đầu cuộc trò chuyện"]
    },
    {
        id: "group_daily",
        group: "Sinh hoạt hằng ngày",
        minLevel: "A2",
        topics: [
            "Gia đình",
            "Nhà ở & sinh hoạt",
            "Mua sắm",
            "Ăn uống",
            "Thời tiết",
        ],
        examples: ["Đi siêu thị", "Gọi món", "Nói về lịch sinh hoạt"]
    },
    {
        id: "group_travel",
        group: "Du lịch & di chuyển",
        minLevel: "A2",
        topics: [
            "Du lịch",
            "Khách sạn",
            "Sân bay",
            "Phương tiện giao thông",
            "Hỏi đường",
        ],
        examples: ["Đặt phòng", "Làm thủ tục check-in", "Thuê xe"]
    },
    {
        id: "group_business",
        group: "Công việc & kinh doanh",
        minLevel: "B1",
        topics: [
            "Kinh doanh",
            "Văn phòng",
            "Họp & thuyết trình",
            "Email công việc",
            "Đàm phán",
        ],
        examples: ["Họp dự án", "Gửi email chuyên nghiệp", "Thương lượng hợp đồng"]
    },
    {
        id: "group_education",
        group: "Học tập & giáo dục",
        minLevel: "B1",
        topics: [
            "Trường học",
            "Lớp học",
            "Bài tập & kiểm tra",
            "Thuyết trình học thuật",
            "Du học",
        ],
        examples: ["Hỏi giảng viên", "Trình bày bài tập", "Làm việc nhóm"]
    },
    {
        id: "group_health",
        group: "Y tế & sức khỏe",
        minLevel: "A2",
        topics: [
            "Sức khỏe",
            "Bệnh viện",
            "Nhà thuốc",
            "Thể dục & thể thao",
            "Chăm sóc bản thân",
        ],
        examples: ["Mô tả triệu chứng", "Đi khám bệnh", "Tư vấn sức khỏe"]
    },
    {
        id: "group_tech",
        group: "Công nghệ & số",
        minLevel: "B2",
        topics: [
            "Công nghệ thông tin",
            "Mạng xã hội",
            "Ứng dụng & phần mềm",
            "Bảo mật",
            "Trí tuệ nhân tạo",
        ],
        examples: ["Báo lỗi phần mềm", "Hướng dẫn sử dụng app", "Thảo luận công nghệ"]
    },
    {
        id: "group_services",
        group: "Dịch vụ & hành chính",
        minLevel: "B1",
        topics: [
            "Ngân hàng",
            "Hành chính công",
            "Bưu điện",
            "Dịch vụ khách hàng",
            "Khiếu nại & phản hồi",
        ],
        examples: ["Mở tài khoản", "Gọi tổng đài hỗ trợ", "Giải quyết sự cố dịch vụ"]
    },
    {
        id: "group_social",
        group: "Xã hội & văn hóa",
        minLevel: "B2",
        topics: [
            "Văn hóa & phong tục",
            "Giải trí",
            "Âm nhạc & phim ảnh",
            "Lễ hội",
            "Giao tiếp xã hội",
        ],
        examples: ["Đi xem phim", "Tham gia sự kiện", "Trò chuyện văn hóa"]
    },
    {
        id: "group_emergency",
        group: "Khẩn cấp & an toàn",
        minLevel: "A2",
        topics: [
            "Tình huống khẩn cấp",
            "Gọi cảnh sát / cứu thương",
            "Mất đồ",
            "Tai nạn",
            "An toàn cá nhân",
        ],
        examples: ["Báo mất hộ chiếu", "Gọi cấp cứu", "Nhờ trợ giúp"]
    },
    {
        id: "group_career",
        group: "Phỏng vấn & nghề nghiệp",
        minLevel: "B2",
        topics: [
            "Phỏng vấn xin việc",
            "CV & hồ sơ",
            "Định hướng nghề nghiệp",
            "Kỹ năng mềm",
        ],
        examples: ["Trả lời phỏng vấn", "Giới thiệu kinh nghiệm", "Thỏa thuận lương"]
    },
    {
        id: "group_advanced",
        group: "Nâng cao – học thuật & chuyên sâu",
        minLevel: "C1",
        topics: [
            "Tranh luận & phản biện",
            "Thuyết trình nâng cao",
            "Viết học thuật",
            "Hội thảo & nghiên cứu",
        ],
        examples: ["Tranh luận quan điểm", "Trình bày nghiên cứu", "Hỏi – đáp học thuật"]
    },
];

const scenariosMock = [
    "Đặt phòng khách sạn",
    "Gọi món ăn",
    "Hỏi đường",
    "Phỏng vấn xin việc",
    "Mua vé tàu xe",
];

// Dữ liệu mẫu cho từng kịch bản hội thoại
const vocabularyData: Record<string, Array<Vocabulary>> = {
    "Đặt phòng khách sạn": [
        {
            word: "reservation",
            phonetic: "/ˌrez.əˈveɪ.ʃən/",
            meaning: "đặt chỗ",
            example: "I have a reservation for tonight.",
            usage: "Dùng khi xác nhận đã đặt phòng trước.",
            level: 1,
        },
        {
            word: "check-in",
            phonetic: "/ˈtʃek.ɪn/",
            meaning: "nhận phòng",
            example: "What time is check-in?",
            usage: "Hỏi về thời gian nhận phòng.",
            level: 1,
        },
        {
            word: "suite",
            phonetic: "/swiːt/",
            meaning: "phòng hạng sang",
            example: "I'd like to book a suite.",
            usage: "Dùng khi muốn đặt phòng cao cấp.",
            level: 2,
        },
        {
            word: "amenities",
            phonetic: "/əˈmen.ə.tiz/",
            meaning: "tiện nghi",
            example: "What amenities are included?",
            usage: "Hỏi về các tiện nghi trong khách sạn.",
            level: 2,
        },
        {
            word: "complimentary",
            phonetic: "/ˌkɒm.plɪˈmen.tər.i/",
            meaning: "miễn phí, tặng kèm",
            example: "Breakfast is complimentary.",
            usage: "Thông báo dịch vụ miễn phí.",
            level: 3,
        },
    ],
    // ...các kịch bản khác
};

const grammarData: Record<string, Array<Grammar>> = {
    "Đặt phòng khách sạn": [
        {
            name: "Câu hỏi Yes/No",
            formula: "Do/Does + S + V...?",
            explanation: "Dùng để hỏi xác nhận thông tin.",
            example: "Do you have a reservation?",
            note: "Trả lời bằng Yes/No, chú ý đảo trợ động từ lên đầu.",
        },
        {
            name: "Câu đề nghị (Would like)",
            formula: "S + would like + to V",
            explanation: "Dùng để diễn đạt mong muốn lịch sự.",
            example: "I'd like to book a room.",
            note: "Thường dùng trong giao tiếp trang trọng.",
        },
        {
            name: "Thì hiện tại đơn",
            formula: "S + V(s/es) + ...",
            explanation: "Diễn tả thói quen, sự thật, lịch trình.",
            example: "Breakfast is complimentary.",
            note: "Chú ý chia động từ đúng với chủ ngữ.",
        },
    ],
    // ...các kịch bản khác
};

// Đoạn hội thoại mẫu cho từng kịch bản
const conversationSamples: Record<string, Array<ConversationTurn>> = {
    "Đặt phòng khách sạn": [
        {
            en: "Receptionist: Good evening! Do you have a reservation?",
            vi: "Lễ tân: Chào buổi tối! Anh/chị đã đặt phòng trước chưa?",
        },
        {
            en: "Guest: Yes, I have a reservation under the name Linh.",
            vi: "Khách: Vâng, tôi đã đặt phòng tên là Linh.",
        },
        {
            en: "Receptionist: Great! May I have your ID, please?",
            vi: "Lễ tân: Tuyệt vời! Cho tôi xin giấy tờ tùy thân của anh/chị nhé?",
        },
        {
            en: "Guest: Here you are.",
            vi: "Khách: Đây ạ.",
        },
    ],
    // ...các kịch bản khác
};

export class MockLearningService implements ILearningRepository {
    async getTopics(): Promise<Topic[]> {
        return topicGroups;
    }

    async getScenariosByTopic(topicName: string): Promise<string[]> {
        // Map individual topics to specific scenarios
        // This simulates a DB query where scenarios are linked to topics
        const scenarios: Record<string, string[]> = {
            // Group: Giao tiếp cơ bản
            "Chào hỏi & làm quen": ["Greetings & Introductions", "Giới thiệu bản thân", "Hỏi thăm sức khỏe"],
            "Gia đình & bạn bè": ["Mô tả gia đình", "Kể về bạn thân", "Hoạt động cuối tuần"],
            "Sở thích cá nhân": ["Nói về sở thích", "Thể thao yêu thích", "Âm nhạc và phim ảnh"],

            // Group: Sinh hoạt hằng ngày
            "Mua sắm & Ăn uống": ["Đi siêu thị", "Gọi món ăn", "Mặc cả giá"],
            "Nhà cửa & Đời sống": ["Việc nhà", "Thuê nhà", "Sửa chữa đồ đạc"],

            // Group: Du lịch & di chuyển
            "Khách sạn": ["Đặt phòng khách sạn", "Check-in khách sạn", "Phàn nàn dịch vụ"],
            "Giao thông & Đi lại": ["Hỏi đường", "Mua vé tàu xe", "Tại sân bay"],
            "Danh lam thắng cảnh": ["Mô tả địa điểm", "Hỏi thông tin du lịch"],

            // Group: Công việc & kinh doanh
            "Phỏng vấn & Xin việc": ["Phỏng vấn xin việc", "Viết CV", "Thương lượng lương"],
            "Họp hành & Thuyết trình": ["Họp dự án", "Thuyết trình báo cáo", "Đưa ra ý kiến"],
            "Giao tiếp văn phòng": ["Gửi email", "Nói chuyện với đồng nghiệp", "Xin nghỉ phép"],

            // Fallback for others
            "Mặc định": ["Hội thoại chung", "Thực hành phản xạ"]
        };

        // Return scenarios for the topic, or default if not found
        // Also check if the topic matches a key in our expanded data directly
        return scenarios[topicName] || scenarios["Mặc định"];
    }

    async getScenarioDetail(scenarioName: string, level: string = "A1"): Promise<ScenarioDetail> {
        const expanded = getExpandedData(scenarioName, level);
        if (expanded.vocab.length > 0) {
            return {
                scenarioName,
                vocabulary: expanded.vocab,
                grammar: expanded.grammar,
                conversation: expanded.conversation,
                practice: expanded.practice
            };
        }

        // Fallback to legacy data if expanded data not found for other scenarios
        return {
            scenarioName,
            vocabulary: vocabularyData[scenarioName] || [],
            grammar: grammarData[scenarioName] || [],
            conversation: conversationSamples[scenarioName] || []
        };
    }
}

export const learningService = new MockLearningService();
