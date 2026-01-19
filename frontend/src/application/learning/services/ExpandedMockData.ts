
import type { Vocabulary, Grammar, ConversationTurn } from "../../../domain/learning/entities/LearningMaterial";

// Mock expansion data
export const expandedVocabulary: Record<string, Record<string, Vocabulary[]>> = {
    "Đặt phòng khách sạn": {
        "A1": [
            { word: "reservation", phonetic: "/ˌrez.əˈveɪ.ʃən/", meaning: "đặt chỗ", example: "I have a reservation for tonight.", usage: "Dùng khi xác nhận đã đặt phòng trước.", level: 1 },
            { word: "check-in", phonetic: "/ˈtʃek.ɪn/", meaning: "nhận phòng", example: "What time is check-in?", usage: "Hỏi về thời gian nhận phòng.", level: 1 },
            { word: "single room", phonetic: "/ˈsɪŋ.ɡəl ruːm/", meaning: "phòng đơn", example: "I'd like a single room.", usage: "Đặt phòng cho 1 người.", level: 1 },
        ],
        "B2": [
            { word: "accommodation", phonetic: "/əˌkɒm.əˈdeɪ.ʃən/", meaning: "chỗ ở", example: "The price includes accommodation and breakfast.", usage: "Từ trang trọng hơn cho place to stay.", level: 3 },
            { word: "vacancy", phonetic: "/ˈveɪ.kən.si/", meaning: "phòng trống", example: "Do you have any vacancies for tonight?", usage: "Hỏi khách sạn còn phòng không.", level: 3 },
            { word: "deposit", phonetic: "/dɪˈpɒz.ɪt/", meaning: "tiền đặt cọc", example: "A $50 deposit is required.", usage: "Thanh toán trước để giữ phòng.", level: 3 },
        ],
        "C1": [
            { word: "amenities", phonetic: "/əˈmen.ə.tiz/", meaning: "tiện nghi cao cấp", example: "The hotel boasts top-notch amenities.", usage: "Mô tả cơ sở vật chất sang trọng.", level: 5 },
            { word: "concierge", phonetic: "/kɒn.siˈeəʒ/", meaning: "nhân viên hỗ trợ khách hàng", example: "Ask the concierge for restaurant recommendations.", usage: "Nhân viên chuyên giải quyết yêu cầu đặc biệt.", level: 5 },
        ]
    },
    "Check-in khách sạn": {
        "A1": [
            { word: "passport", phonetic: "/ˈpɑːs.pɔːt/", meaning: "hộ chiếu", example: "Here is my passport.", usage: "Giấy tờ tùy thân.", level: 1 },
            { word: "form", phonetic: "/fɔːm/", meaning: "mẫu đơn", example: "Please fill out this form.", usage: "Điền thông tin.", level: 1 },
        ]
    },
    "Phàn nàn dịch vụ": {
        "B2": [
            { word: "complaint", phonetic: "/kəmˈpleɪnt/", meaning: "lời phàn nàn", example: "I have a complaint about the room.", usage: "Nói về vấn đề không hài lòng.", level: 3 },
            { word: "refund", phonetic: "/ˈriː.fʌnd/", meaning: "hoàn tiền", example: "I demand a refund.", usage: "Yêu cầu trả lại tiền.", level: 3 },
        ]
    },
    // ... (Họp dự án, Gọi món ăn, Hỏi đường, Phỏng vấn xin việc, Làm quen, Đi siêu thị - kept or expanded)
    "Họp dự án": {
        "B2": [
            { word: "deadline", phonetic: "/ˈded.laɪn/", meaning: "hạn chót", example: "We have a strict deadline.", usage: "Thời điểm phải hoàn thành công việc.", level: 3 },
            { word: "milestone", phonetic: "/ˈmaɪl.stəʊn/", meaning: "cột mốc quan trọng", example: "We reached a key milestone.", usage: "Giai đoạn quan trọng trong dự án.", level: 3 },
            { word: "agenda", phonetic: "/əˈdʒen.də/", meaning: "chương trình nghị sự", example: "Let's review the meeting agenda.", usage: "Danh sách các việc cần thảo luận.", level: 3 },
        ],
        "C1": [
            { word: "consensus", phonetic: "/kənˈsen.səs/", meaning: "sự đồng thuận", example: "We need to reach a consensus.", usage: "Sự đồng ý chung của cả nhóm.", level: 5 },
            { word: "brainstorm", phonetic: "/ˈbreɪn.stɔːm/", meaning: "động não", example: "Let's brainstorm some solutions.", usage: "Thảo luận sổi nổi để tìm ý tưởng.", level: 4 },
        ]
    },
    "Gọi món ăn": {
        "A1": [
            { word: "menu", phonetic: "/ˈmen.juː/", meaning: "thực đơn", example: "Can I have the menu, please?", usage: "Yêu cầu danh sách món ăn.", level: 1 },
            { word: "order", phonetic: "/ˈɔː.dər/", meaning: "gọi món", example: "I would like to order now.", usage: "Hành động chọn món.", level: 1 },
            { word: "bill", phonetic: "/bɪl/", meaning: "hóa đơn", example: "Can I have the bill?", usage: "Yêu cầu tính tiền.", level: 1 },
        ],
        "B2": [
            { word: "appetizer", phonetic: "/ˈæp.ə.taɪ.zər/", meaning: "món khai vị", example: "I'll start with an appetizer.", usage: "Món ăn nhẹ trước món chính.", level: 3 },
            { word: "recommend", phonetic: "/ˌrek.əˈmend/", meaning: "gợi ý, đề xuất", example: "What do you recommend?", usage: "Hỏi ý kiến nhân viên phục vụ.", level: 3 },
        ],
        "C1": [
            { word: "cuisine", phonetic: "/kwɪˈziːn/", meaning: "ẩm thực", example: "I love Italian cuisine.", usage: "Phong cách nấu ăn đặc trưng.", level: 5 },
            { word: "palate", phonetic: "/ˈpæl.ət/", meaning: "khẩu vị", example: "It suits my palate perfectly.", usage: "Khả năng cảm nhận hương vị.", level: 5 },
        ]
    },
    "Hỏi đường": {
        "A1": [
            { word: "map", phonetic: "/mæp/", meaning: "bản đồ", example: "I need a map.", usage: "Công cụ tìm đường.", level: 1 },
            { word: "left", phonetic: "/left/", meaning: "trái", example: "Turn left.", usage: "Chỉ hướng.", level: 1 },
            { word: "right", phonetic: "/raɪt/", meaning: "phải", example: "Turn right.", usage: "Chỉ hướng.", level: 1 },
        ],
        "B2": [
            { word: "intersection", phonetic: "/ˌɪn.təˈsek.ʃən/", meaning: "ngã tư, giao lộ", example: "Turn left at the intersection.", usage: "Nơi hai đường cắt nhau.", level: 3 },
            { word: "landmark", phonetic: "/ˈlænd.mɑːk/", meaning: "mốc địa lý", example: "Look for the tall landmark.", usage: "Điểm dễ nhận biết để định vị.", level: 3 },
        ],
        "C1": [
            { word: "vicinity", phonetic: "/vɪˈsɪn.ə.ti/", meaning: "vùng lân cận", example: "Is there a bank in the vicinity?", usage: "Khu vực xung quanh.", level: 5 },
        ]
    },
    "Phỏng vấn xin việc": {
        "A1": [
            { word: "job", phonetic: "/dʒɒb/", meaning: "công việc", example: "I need a job.", usage: "Nói về nghề nghiệp chung.", level: 1 },
            { word: "company", phonetic: "/ˈkʌm.pə.ni/", meaning: "công ty", example: "This is a big company.", usage: "Nơi làm việc.", level: 1 },
        ],
        "B2": [
            { word: "strength", phonetic: "/streŋθ/", meaning: "điểm mạnh", example: "My greatest strength is patience.", usage: "Ưu điểm cá nhân.", level: 3 },
            { word: "weakness", phonetic: "/ˈwiːk.nəs/", meaning: "điểm yếu", example: "My weakness is public speaking.", usage: "Nhược điểm cần khắc phục.", level: 3 },
            { word: "candidate", phonetic: "/ˈkæn.dɪ.dət/", meaning: "ứng viên", example: "He is a strong candidate.", usage: "Người đi xin việc.", level: 3 },
        ],
        "C1": [
            { word: "proficient", phonetic: "/prəˈfɪʃ.ənt/", meaning: "thành thạo", example: "I am proficient in Java.", usage: "Mức độ giỏi về kỹ năng.", level: 5 },
            { word: "track record", phonetic: "/ˈtræk ˌrek.ɔːd/", meaning: "thành tích quá khứ", example: "I have a proven track record.", usage: "Lịch sử làm việc thành công.", level: 5 },
        ]
    },
    "Làm quen": {
        "A1": [
            { word: "name", phonetic: "/neɪm/", meaning: "tên", example: "What is your name?", usage: "Hỏi tên.", level: 1 },
            { word: "from", phonetic: "/frɒm/", meaning: "từ", example: "Where are you from?", usage: "Hỏi quê quán.", level: 1 },
        ],
        "B2": [
            { word: "acquaintance", phonetic: "/əˈkweɪn.təns/", meaning: "người quen", example: "He is just an acquaintance.", usage: "Người quen biết sơ sơ.", level: 3 },
            { word: "socialize", phonetic: "/ˈsəʊ.ʃəl.aɪz/", meaning: "giao lưu", example: "I like to socialize with colleagues.", usage: "Tương tác xã hội.", level: 3 },
        ]
    },
    "Đi siêu thị": {
        "A1": [
            { word: "buy", phonetic: "/baɪ/", meaning: "mua", example: "I want to buy milk.", usage: "Mua sắm.", level: 1 },
            { word: "price", phonetic: "/praɪs/", meaning: "giá", example: "What is the price?", usage: "Hỏi giá.", level: 1 },
            { word: "market", phonetic: "/ˈmɑː.kɪt/", meaning: "chợ", example: "I go to the market.", usage: "Nơi mua bán truyền thống.", level: 1 },
            { word: "supermarket", phonetic: "/ˈsuː.pəˌmɑː.kɪt/", meaning: "siêu thị", example: "The supermarket is big.", usage: "Nơi mua sắm hiện đại.", level: 1 },
            { word: "apple", phonetic: "/ˈæp.əl/", meaning: "quả táo", example: "An apple a day.", usage: "Trái cây.", level: 1 },
            { word: "banana", phonetic: "/bəˈnɑː.nə/", meaning: "quả chuối", example: "Monkeys like bananas.", usage: "Trái cây.", level: 1 },
            { word: "milk", phonetic: "/mɪlk/", meaning: "sữa", example: "I drink milk.", usage: "Đồ uống.", level: 1 },
            { word: "money", phonetic: "/ˈmʌn.i/", meaning: "tiền", example: "I have no money.", usage: "Phương tiện thanh toán.", level: 1 },
            { word: "expensive", phonetic: "/ɪkˈspen.sɪv/", meaning: "đắt", example: "It is too expensive.", usage: "Giá cao.", level: 1 },
            { word: "cheap", phonetic: "/tʃiːp/", meaning: "rẻ", example: "It is very cheap.", usage: "Giá thấp.", level: 1 }
        ],
        "B2": [
            { word: "aisle", phonetic: "/aɪl/", meaning: "lối đi", example: "It's in aisle 5.", usage: "Vị trí kệ hàng.", level: 3 },
            { word: "discount", phonetic: "/ˈdɪs.kaʊnt/", meaning: "giảm giá", example: "Is there a discount?", usage: "Khuyến mãi.", level: 3 },
        ]
    },
    "Mô tả nhà cửa": {
        "A1": [
            { word: "house", phonetic: "/haʊs/", meaning: "ngôi nhà", example: "My house is big.", usage: "Nơi ở.", level: 1 },
            { word: "room", phonetic: "/ruːm/", meaning: "phòng", example: "This is my room.", usage: "Không gian trong nhà.", level: 1 },
            { word: "kitchen", phonetic: "/ˈkɪtʃ.ɪn/", meaning: "nhà bếp", example: "She cooks in the kitchen.", usage: "Nơi nấu ăn.", level: 1 },
            { word: "bedroom", phonetic: "/ˈbed.ruːm/", meaning: "phòng ngủ", example: "I sleep in the bedroom.", usage: "Nơi ngủ.", level: 1 },
            { word: "bathroom", phonetic: "/ˈbɑːθ.ruːm/", meaning: "phòng tắm", example: "The bathroom is clean.", usage: "Nơi vệ sinh.", level: 1 },
            { word: "living room", phonetic: "/ˈlɪv.ɪŋ ruːm/", meaning: "phòng khách", example: "We watch TV in the living room.", usage: "Nơi sinh hoạt chung.", level: 1 },
            { word: "table", phonetic: "/ˈteɪ.bəl/", meaning: "cái bàn", example: "The book is on the table.", usage: "Đồ nội thất.", level: 1 },
            { word: "chair", phonetic: "/tʃeər/", meaning: "cái ghế", example: "Sit on the chair.", usage: "Đồ nội thất.", level: 1 },
            { word: "bed", phonetic: "/bed/", meaning: "cái giường", example: "The bed is soft.", usage: "Đồ nội thất.", level: 1 },
            { word: "door", phonetic: "/dɔːr/", meaning: "cửa ra vào", example: "Open the door.", usage: "Lối đi.", level: 1 }
        ]
    },
    "Hỏi thăm sức khỏe": {
        "A1": [
            { word: "fine", phonetic: "/faɪn/", meaning: "khỏe", example: "I'm fine, thank you.", usage: "Trả lời khi được hỏi thăm.", level: 1 },
            { word: "sick", phonetic: "/sɪk/", meaning: "ốm", example: "I feel sick.", usage: "Khi không khỏe.", level: 1 },
        ]
    },
    "Mô tả gia đình": {
        "A1": [
            { word: "family", phonetic: "/ˈfæm.əl.i/", meaning: "gia đình", example: "I love my family.", usage: "Nói về tổ ấm.", level: 1 },
            { word: "parent", phonetic: "/ˈpeə.rənt/", meaning: "bố/mẹ", example: "My parents are old.", usage: "Nói về đấng sinh thành.", level: 1 },
            { word: "father", phonetic: "/ˈfɑː.ðər/", meaning: "bố", example: "My father is a doctor.", usage: "Gọi bố.", level: 1 },
            { word: "mother", phonetic: "/ˈmʌð.ər/", meaning: "mẹ", example: "My mother cooks well.", usage: "Gọi mẹ.", level: 1 },
            { word: "brother", phonetic: "/ˈbrʌð.ər/", meaning: "anh/em trai", example: "I have a brother.", usage: "Anh em trai.", level: 1 },
            { word: "sister", phonetic: "/ˈsɪs.tər/", meaning: "chị/em gái", example: "My sister is cute.", usage: "Chị em gái.", level: 1 },
            { word: "sibling", phonetic: "/ˈsɪb.lɪŋ/", meaning: "anh chị em", example: "I have two siblings.", usage: "Anh chị em ruột.", level: 1 },
            { word: "grandmother", phonetic: "/ˈɡræn.mʌð.ər/", meaning: "bà", example: "My grandmother is kind.", usage: "Bà nội/ngoại.", level: 1 },
            { word: "grandfather", phonetic: "/ˈɡræn.fɑː.ðər/", meaning: "ông", example: "My grandfather loves gardening.", usage: "Ông nội/ngoại.", level: 1 }
        ]
    },
    "Kể về bạn thân": {
        "A1": [
            { word: "best friend", phonetic: "/best frend/", meaning: "bạn thân nhất", example: "She is my best friend.", usage: "Mô tả mối quan hệ.", level: 1 },
            { word: "trust", phonetic: "/trʌst/", meaning: "tin tưởng", example: "I trust him completely.", usage: "Nói về lòng tin.", level: 1 },
        ]
    },
    "Hoạt động cuối tuần": {
        "A1": [
            { word: "relax", phonetic: "/rɪˈlæks/", meaning: "thư giãn", example: "I relax at home.", usage: "Nghỉ ngơi.", level: 1 },
            { word: "cinema", phonetic: "/ˈsɪn.ə.mɑː/", meaning: "rạp phim", example: "We go to the cinema.", usage: "Giải trí.", level: 1 },
        ]
    },
    "Mua sắm": {
        "A1": [
            { word: "shop", phonetic: "/ʃɒp/", meaning: "cửa hàng", example: "The shop is open.", usage: "Nơi mua bán.", level: 1 },
            { word: "cheap", phonetic: "/tʃiːp/", meaning: "rẻ", example: "It is very cheap.", usage: "Giá cả.", level: 1 },
        ]
    },
    "Mặc cả giá": {
        "B2": [
            { word: "bargain", phonetic: "/ˈbɑː.ɡɪn/", meaning: "mặc cả", example: "I like to bargain.", usage: "Thương lượng giá.", level: 3 },
            { word: "deal", phonetic: "/diːl/", meaning: "thỏa thuận", example: "It's a good deal.", usage: "Giá tốt.", level: 3 },
        ]
    },
    "Việc nhà": {
        "A1": [
            { word: "clean", phonetic: "/kliːn/", meaning: "dọn dẹp", example: "I clean my room.", usage: "Làm sạch.", level: 1 },
            { word: "wash", phonetic: "/wɒʃ/", meaning: "rửa/giặt", example: "I wash the dishes.", usage: "Làm sạch bằng nước.", level: 1 },
        ]
    },
    "Thuê nhà": {
        "B1": [
            { word: "rent", phonetic: "/rent/", meaning: "thuê", example: "I want to rent an apartment.", usage: "Thuê chỗ ở.", level: 2 },
            { word: "landlord", phonetic: "/ˈlænd.lɔːd/", meaning: "chủ nhà", example: "The landlord is nice.", usage: "Người cho thuê.", level: 2 },
        ]
    },
    "Sửa chữa đồ đạc": {
        "B1": [
            { word: "fix", phonetic: "/fɪks/", meaning: "sửa chữa", example: "Can you fix this?", usage: "Làm cho hoạt động lại.", level: 2 },
            { word: "broken", phonetic: "/ˈbrəʊ.kən/", meaning: "hỏng", example: "The chair is broken.", usage: "Mô tả tình trạng.", level: 2 },
        ]
    },
    "Mua vé tàu xe": {
        "A1": [
            { word: "ticket", phonetic: "/ˈtɪk.ɪt/", meaning: "vé", example: "One ticket, please.", usage: "Giấy thông hành.", level: 1 },
            { word: "seat", phonetic: "/siːt/", meaning: "chỗ ngồi", example: "Is this seat taken?", usage: "Nơi ngồi.", level: 1 },
        ]
    },
    "Tại sân bay": {
        "A2": [
            { word: "gate", phonetic: "/ɡeɪt/", meaning: "cửa ra máy bay", example: "Go to gate 5.", usage: "Cổng chờ.", level: 2 },
            { word: "boarding", phonetic: "/ˈbɔː.dɪŋ/", meaning: "lên máy bay", example: "Boarding starts now.", usage: "Quá trình lên tàu/xe.", level: 2 },
        ]
    },
    "Mô tả địa điểm": {
        "A2": [
            { word: "beautiful", phonetic: "/ˈbjuː.tɪ.fəl/", meaning: "đẹp", example: "The view is beautiful.", usage: "Khen ngợi.", level: 2 },
            { word: "crowded", phonetic: "/ˈkraʊ.dɪd/", meaning: "đông đúc", example: "The street is crowded.", usage: "Nhiều người.", level: 2 },
        ]
    },
    "Hỏi thông tin du lịch": {
        "A2": [
            { word: "guide", phonetic: "/ɡaɪd/", meaning: "hướng dẫn viên", example: "We need a guide.", usage: "Người dẫn đường.", level: 2 },
            { word: "brochure", phonetic: "/ˈbrəʊ.ʃər/", meaning: "tờ rơi", example: "Take a brochure.", usage: "Thông tin quảng cáo.", level: 2 },
        ]
    },
    "Viết CV": {
        "B2": [
            { word: "experience", phonetic: "/ɪkˈspɪə.ri.əns/", meaning: "kinh nghiệm", example: "I have 5 years of experience.", usage: "Thời gian làm việc.", level: 3 },
            { word: "skill", phonetic: "/skɪl/", meaning: "kỹ năng", example: "My skills include coding.", usage: "Khả năng làm việc.", level: 3 },
        ]
    },
    "Thương lượng lương": {
        "B2": [
            { word: "salary", phonetic: "/ˈsæl.ər.i/", meaning: "lương", example: "Expected salary.", usage: "Thu nhập hàng tháng.", level: 3 },
            { word: "negotiate", phonetic: "/nəˈɡəʊ.ʃi.eɪt/", meaning: "đàm phán", example: "I want to negotiate the salary.", usage: "Thương lượng.", level: 3 },
        ]
    },
    "Thuyết trình báo cáo": {
        "B2": [
            { word: "slide", phonetic: "/slaɪd/", meaning: "trang trình chiếu", example: "Next slide, please.", usage: "Công cụ thuyết trình.", level: 3 },
            { word: "data", phonetic: "/ˈdeɪ.tə/", meaning: "dữ liệu", example: "The data shows growth.", usage: "Thông tin số liệu.", level: 3 },
        ]
    },
    "Đưa ra ý kiến": {
        "B2": [
            { word: "opinion", phonetic: "/əˈpɪn.jən/", meaning: "ý kiến", example: "In my opinion...", usage: "Quan điểm cá nhân.", level: 3 },
            { word: "agree", phonetic: "/əˈɡriː/", meaning: "đồng ý", example: "I agree with you.", usage: "Tán thành.", level: 3 },
        ]
    },
    "Gửi email": {
        "B1": [
            { word: "attach", phonetic: "/əˈtætʃ/", meaning: "đính kèm", example: "I attached the file.", usage: "Gửi kèm file.", level: 2 },
            { word: "regards", phonetic: "/rɪˈɡɑːdz/", meaning: "trân trọng", example: "Best regards,", usage: "Kết thúc email.", level: 2 },
        ]
    },
    "Nói chuyện với đồng nghiệp": {
        "B1": [
            { word: "colleague", phonetic: "/ˈkɒl.iːɡ/", meaning: "đồng nghiệp", example: "He is my colleague.", usage: "Bạn làm cùng.", level: 2 },
            { word: "meeting", phonetic: "/ˈmiː.tɪŋ/", meaning: "cuộc họp", example: "See you at the meeting.", usage: "Tụ họp công việc.", level: 2 },
        ]
    },
    "Xin nghỉ phép": {
        "B1": [
            { word: "leave", phonetic: "/liːv/", meaning: "nghỉ phép", example: "I want to take leave.", usage: "Thời gian nghỉ.", level: 2 },
            { word: "approve", phonetic: "/əˈpruːv/", meaning: "phê duyệt", example: "Please approve my request.", usage: "Chấp thuận.", level: 2 },
        ]
    },
    "Greetings & Introductions": {
        "A1": [
            { word: "Hello", phonetic: "/həˈləʊ/", meaning: "Xin chào", example: "Hello, how are you?", usage: "Chào hỏi trang trọng hoặc bình thường.", level: 1 },
            { word: "Hi", phonetic: "/haɪ/", meaning: "Chào (thân mật)", example: "Hi! I'm Minh.", usage: "Chào hỏi bạn bè, người thân.", level: 1 },
            { word: "Goodbye", phonetic: "/ɡʊdˈbaɪ/", meaning: "Tạm biệt", example: "Goodbye, see you later.", usage: "Chào khi ra về.", level: 1 },
            { word: "My name is", phonetic: "/maɪ neɪm ɪz/", meaning: "Tên tôi là...", example: "My name is Lan.", usage: "Giới thiệu tên.", level: 1 },
            { word: "Nice to meet you", phonetic: "/naɪs tuː miːt juː/", meaning: "Rất vui được gặp bạn", example: "Nice to meet you too.", usage: "Dùng khi gặp lần đầu.", level: 1 },
            { word: "What’s your name?", phonetic: "/wɒts jɔː neɪm/", meaning: "Tên bạn là gì?", example: "Hi, what's your name?", usage: "Hỏi tên.", level: 1 },
            { word: "I’m from", phonetic: "/aɪm frɒm/", meaning: "Tôi đến từ...", example: "I'm from Vietnam.", usage: "Giới thiệu quê quán.", level: 1 },
            { word: "How are you?", phonetic: "/haʊ ɑː juː/", meaning: "Bạn khỏe không?", example: "How are you today?", usage: "Hỏi thăm sức khỏe.", level: 1 },
            { word: "I’m fine, thanks", phonetic: "/aɪm faɪn θæŋks/", meaning: "Tôi khỏe, cảm ơn", example: "I'm fine, thanks. And you?", usage: "Trả lời câu hỏi How are you.", level: 1 },
            { word: "And you?", phonetic: "/ænd juː/", meaning: "Còn bạn thì sao?", example: "I'm good. And you?", usage: "Hỏi ngược lại người kia.", level: 1 }
        ]
    },
    "Nói về sở thích": {
        "A1": [
            { word: "hobby", phonetic: "/ˈhɒb.i/", meaning: "sở thích", example: "What is your hobby?", usage: "Danh từ.", level: 1 },
            { word: "like", phonetic: "/laɪk/", meaning: "thích", example: "I like reading.", usage: "Động từ.", level: 1 },
            { word: "love", phonetic: "/lʌv/", meaning: "yêu thích", example: "I love music.", usage: "Mức độ cao hơn Like.", level: 1 },
            { word: "read", phonetic: "/riːd/", meaning: "đọc", example: "I read books.", usage: "Hành động.", level: 1 },
            { word: "listen", phonetic: "/ˈlɪs.ən/", meaning: "nghe", example: "Listen to music.", usage: "Hành động.", level: 1 },
            { word: "swim", phonetic: "/swɪm/", meaning: "bơi", example: "I go swimming.", usage: "Thể thao.", level: 1 },
            { word: "cook", phonetic: "/kʊk/", meaning: "nấu ăn", example: "She cooks well.", usage: "Kỹ năng.", level: 1 },
            { word: "travel", phonetic: "/ˈtræv.əl/", meaning: "du lịch", example: "I want to travel.", usage: "Hoạt động giải trí.", level: 1 },
            { word: "play", phonetic: "/pleɪ/", meaning: "chơi", example: "Play soccer.", usage: "Thể thao.", level: 1 },
            { word: "soccer", phonetic: "/ˈsɒk.ər/", meaning: "bóng đá", example: "I watch soccer.", usage: "Môn thể thao.", level: 1 }
        ]
    },
    "Thức ăn & Đồ uống": {
        "A1": [
            { word: "food", phonetic: "/fuːd/", meaning: "thức ăn", example: "I like food.", usage: "Chung.", level: 1 },
            { word: "drink", phonetic: "/drɪŋk/", meaning: "đồ uống", example: "I drink water.", usage: "Hành động hoặc danh từ.", level: 1 },
            { word: "rice", phonetic: "/raɪs/", meaning: "cơm/gạo", example: "I eat rice every day.", usage: "Thực phẩm chính.", level: 1 },
            { word: "bread", phonetic: "/bred/", meaning: "bánh mì", example: "Bread and butter.", usage: "Thực phẩm.", level: 1 },
            { word: "noodle", phonetic: "/ˈnuː.dəl/", meaning: "mì", example: "Chicken noodles.", usage: "Thực phẩm.", level: 1 },
            { word: "chicken", phonetic: "/ˈtʃɪk.ɪn/", meaning: "thịt gà", example: "Fried chicken.", usage: "Thịt.", level: 1 },
            { word: "water", phonetic: "/ˈwɔː.tər/", meaning: "nước", example: "Drink water.", usage: "Đồ uống.", level: 1 },
            { word: "juice", phonetic: "/dʒuːs/", meaning: "nước ép", example: "Orange juice.", usage: "Đồ uống.", level: 1 },
            { word: "delicious", phonetic: "/dɪˈlɪʃ.əs/", meaning: "ngon", example: "This is delicious.", usage: "Khen ngợi.", level: 1 },
            { word: "hungry", phonetic: "/ˈhʌŋ.ɡri/", meaning: "đói", example: "I am hungry.", usage: "Cảm giác.", level: 1 }
        ]
    },
    "Thành phố của tôi": {
        "A1": [
            { word: "city", phonetic: "/ˈsɪt.i/", meaning: "thành phố", example: "I live in the city.", usage: "Nơi chốn.", level: 1 },
            { word: "park", phonetic: "/pɑːk/", meaning: "công viên", example: "Let's go to the park.", usage: "Địa điểm.", level: 1 },
            { word: "cinema", phonetic: "/ˈsɪn.ə.mə/", meaning: "rạp chiếu phim", example: "Watch a movie at the cinema.", usage: "Giải trí.", level: 1 },
            { word: "museum", phonetic: "/mjuːˈziː.əm/", meaning: "bảo tàng", example: "Visit the museum.", usage: "Văn hóa.", level: 1 },
            { word: "hospital", phonetic: "/ˈhɒs.pɪ.təl/", meaning: "bệnh viện", example: "He is in the hospital.", usage: "Y tế.", level: 1 },
            { word: "street", phonetic: "/striːt/", meaning: "đường phố", example: "Walking on the street.", usage: "Giao thông.", level: 1 },
            { word: "left", phonetic: "/left/", meaning: "trái", example: "Turn left.", usage: "Chỉ đường.", level: 1 },
            { word: "right", phonetic: "/raɪt/", meaning: "phải", example: "Turn right.", usage: "Chỉ đường.", level: 1 },
            { word: "straight", phonetic: "/streɪt/", meaning: "thẳng", example: "Go straight.", usage: "Chỉ đường.", level: 1 },
            { word: "car", phonetic: "/kɑːr/", meaning: "ô tô", example: "Drive a car.", usage: "Phương tiện.", level: 1 }
        ]
    },
    "Công việc & Nghề nghiệp": {
        "A1": [
            { word: "job", phonetic: "/dʒɒb/", meaning: "công việc", example: "I love my job.", usage: "Nghề nghiệp.", level: 1 },
            { word: "doctor", phonetic: "/ˈdɒk.tər/", meaning: "bác sĩ", example: "He is a doctor.", usage: "Nghề.", level: 1 },
            { word: "teacher", phonetic: "/ˈtiː.tʃər/", meaning: "giáo viên", example: "She is a teacher.", usage: "Nghề.", level: 1 },
            { word: "student", phonetic: "/ˈstjuː.dənt/", meaning: "sinh viên/học sinh", example: "I am a student.", usage: "Nghề.", level: 1 },
            { word: "office", phonetic: "/ˈɒf.ɪs/", meaning: "văn phòng", example: "Work in an office.", usage: "Nơi làm việc.", level: 1 },
            { word: "engineer", phonetic: "/ˌen.dʒɪˈnɪər/", meaning: "kỹ sư", example: "I am an engineer.", usage: "Nghề.", level: 1 },
            { word: "nurse", phonetic: "/nɜːs/", meaning: "y tá", example: "The nurse helps the doctor.", usage: "Nghề.", level: 1 },
            { word: "driver", phonetic: "/ˈdraɪ.vər/", meaning: "tài xế", example: "Taxi driver.", usage: "Nghề.", level: 1 },
            { word: "chef", phonetic: "/ʃef/", meaning: "đầu bếp", example: "The chef cooks food.", usage: "Nghề.", level: 1 },
            { word: "police", phonetic: "/pəˈliːs/", meaning: "cảnh sát", example: "Call the police.", usage: "Nghề.", level: 1 }
        ]
    },
    "Thói quen hàng ngày": {
        "A1": [
            { word: "wake up", phonetic: "/weɪk ʌp/", meaning: "thức dậy", example: "I wake up at 6 AM.", usage: "Hành động đầu ngày.", level: 1 },
            { word: "brush teeth", phonetic: "/brʌʃ tiːθ/", meaning: "đánh răng", example: "I brush my teeth twice a day.", usage: "Vệ sinh cá nhân.", level: 1 },
            { word: "have breakfast", phonetic: "/hæv ˈbrek.fəst/", meaning: "ăn sáng", example: "I have breakfast.", usage: "Bữa ăn đầu ngày.", level: 1 },
            { word: "have lunch", phonetic: "/hæv lʌntʃ/", meaning: "ăn trưa", example: "I have lunch at 12.", usage: "Bữa ăn giữa ngày.", level: 1 },
            { word: "have dinner", phonetic: "/hæv ˈdɪn.ər/", meaning: "ăn tối", example: "Family dinner.", usage: "Bữa ăn cuối ngày.", level: 1 },
            { word: "go to school", phonetic: "/ɡəʊ tuː skuːl/", meaning: "đi học", example: "I go to school.", usage: "Nơi học tập.", level: 1 },
            { word: "go to work", phonetic: "/ɡəʊ tuː wɜːk/", meaning: "đi làm", example: "I go to work.", usage: "Công việc.", level: 1 },
            { word: "watch TV", phonetic: "/wɒtʃ tiː.viː/", meaning: "xem tivi", example: "I watch TV in the evening.", usage: "Giải trí.", level: 1 },
            { word: "go to sleep", phonetic: "/ɡəʊ tuː sliːp/", meaning: "đi ngủ", example: "I go to sleep late.", usage: "Nghỉ ngơi.", level: 1 },
            { word: "take a shower", phonetic: "/teɪk ə ʃaʊər/", meaning: "tắm", example: "I take a shower.", usage: "Vệ sinh cá nhân.", level: 1 }
        ]
    },
    "Lễ hội & Kỳ nghỉ": {
        "A1": [
            { word: "holiday", phonetic: "/ˈhɒl.ə.deɪ/", meaning: "kỳ nghỉ", example: "Happy holiday!", usage: "Thời gian nghỉ.", level: 1 },
            { word: "festival", phonetic: "/ˈfes.tɪ.vəl/", meaning: "lễ hội", example: "Tet festival.", usage: "Sự kiện văn hóa.", level: 1 },
            { word: "party", phonetic: "/ˈpɑː.ti/", meaning: "bữa tiệc", example: "Birthday party.", usage: "Vui chơi.", level: 1 },
            { word: "gift", phonetic: "/ɡɪft/", meaning: "quà tặng", example: "A special gift.", usage: "Tặng phẩm.", level: 1 },
            { word: "happy", phonetic: "/ˈhæp.i/", meaning: "vui vẻ", example: "Happy New Year!", usage: "Cảm xúc.", level: 1 },
            { word: "fireworks", phonetic: "/ˈfaɪə.wɜːks/", meaning: "pháo hoa", example: "Watch the fireworks.", usage: "Sự kiện.", level: 1 },
            { word: "tradition", phonetic: "/trəˈdɪʃ.ən/", meaning: "truyền thống", example: "It is a tradition.", usage: "Văn hóa.", level: 1 },
            { word: "decorate", phonetic: "/ˈdek.ə.reɪt/", meaning: "trang trí", example: "Decorate the house.", usage: "Hành động.", level: 1 },
            { word: "visit", phonetic: "/ˈvɪz.ɪt/", meaning: "thăm", example: "Visit grandparents.", usage: "Hành động.", level: 1 },
            { word: "lucky money", phonetic: "/ˈlʌk.i ˈmʌn.i/", meaning: "tiền lì xì", example: "Get lucky money.", usage: "Văn hóa Tết.", level: 1 }
        ]
    }
};

const expandedGrammar: Record<string, Record<string, Grammar[]>> = {
    "Greetings & Introductions": {
        "A1": [
            { name: "To Be (Giới thiệu tên)", formula: "I am / My name is + Name", explanation: "Dùng để giới thiệu tên của bản thân.", example: "I am Lan. / My name is Minh.", note: "Có thể viết tắt: I'm..." },
            { name: "To Be (Nơi chốn)", formula: "I am from + Country/City", explanation: "Dùng để nói về quê quán, nơi xuất thân.", example: "I'm from Vietnam.", note: "From + Quốc gia/Thành phố" },
            { name: "Hỏi thăm sức khỏe", formula: "How are you? - I'm + Adj", explanation: "Cấu trúc hỏi và trả lời về sức khỏe.", example: "How are you? - I'm fine, thanks.", note: "Các tính từ: fine, good, ok, bad..." }
        ]
    },
    "Đặt phòng khách sạn": {
        "A1": [{ name: "Câu đề nghị (Would like)", formula: "S + would like + to V", explanation: "Dùng để diễn đạt mong muốn lịch sự.", example: "I'd like to book a room.", note: "Trang trọng hơn 'I want'." }],
        "B2": [{ name: "Câu điều kiện loại 2", formula: "If + S + V-ed, S + would + V", explanation: "Dùng để đưa ra yêu cầu lịch sự.", example: "It would be great if I could check in early.", note: "Làm mềm câu yêu cầu." }],
        "C1": [{ name: "Cấu trúc nhấn mạnh", formula: "It is/was + X + that + ...", explanation: "Nhấn mạnh vào thông tin cụ thể.", example: "It was the view that I requested.", note: "Dùng khi khiếu nại." }]
    },
    "Check-in khách sạn": {
        "A1": [{ name: "Giới từ chỉ thời gian", formula: "at + time", explanation: "Nói về mốc thời gian.", example: "Breakfast is at 7am.", note: "Cụ thể." }]
    },
    "Phàn nàn dịch vụ": {
        "B2": [{ name: "Wish + Past Simple", formula: "S + wish + S + V-ed", explanation: "Diễn tả mong muốn trái với hiện tại.", example: "I wish the room was quieter.", note: "Phàn nàn lịch sự." }]
    },
    "Họp dự án": {
        "B2": [{ name: "Thì hiện tại tiếp diễn (Future)", formula: "S + am/is/are + V-ing", explanation: "Nói về kế hoạch chắc chắn.", example: "We are releasing next week.", note: "Kế hoạch đã định." }]
    },
    "Gọi món ăn": {
        "A1": [{ name: "Câu yêu cầu (Can I have)", formula: "Can I have + N?", explanation: "Yêu cầu món ăn lịch sự.", example: "Can I have the menu?", note: "Dùng phổ biến." }],
        "B2": [{ name: "Động từ khuyết thiếu (Suggestions)", formula: "Could/Should + V", explanation: "Đưa ra gợi ý hoặc hỏi gợi ý.", example: "What would you recommend?", note: "Hỏi ý kiến." }]
    },
    "Hỏi đường": {
        "A1": [{ name: "Câu mệnh lệnh (Imperatives)", formula: "V / Don't V", explanation: "Chỉ đường trực tiếp.", example: "Turn left. Go straight.", note: "Dùng khi chỉ dẫn." }],
        "B2": [{ name: "Mệnh đề danh ngữ (Indirect Questions)", formula: "Do you know where + S + V?", explanation: "Hỏi đường lịch sự hơn.", example: "Do you know where the bank is?", note: "Tránh hỏi cộc lốc." }]
    },
    "Phỏng vấn xin việc": {
        "A1": [{ name: "Thì quá khứ đơn", formula: "S + V-ed", explanation: "Kể về kinh nghiệm cũ.", example: "I worked as a teacher.", note: "Sự kiện đã xong." }],
        "B2": [{ name: "Thì hiện tại hoàn thành", formula: "S + have/has + V3", explanation: "Kể về thành tựu.", example: "I have managed a team.", note: "Kết quả còn ảnh hưởng." }]
    },
    "Làm quen": {
        "A1": [{ name: "Câu hỏi WH- (Basic)", formula: "Where / What + be + S?", explanation: "Hỏi thông tin cá nhân.", example: "Where are you from?", note: "Cơ bản." }],
        "B2": [{ name: "Câu hỏi đuôi (Tag questions)", formula: "S + V, aux + not + S?", explanation: "Xác nhận thông tin, tạo thiện cảm.", example: "You are new here, aren't you?", note: "Duy trì hội thoại." }]
    },
    "Đi siêu thị": {
        "A1": [{ name: "Danh từ đếm được/không đếm được", formula: "How much / How many", explanation: "Hỏi số lượng và giá.", example: "How much is this?", note: "Mua bán." }],
        "B2": [{ name: "So sánh hơn/nhất", formula: "Adj-er / More + Adj", explanation: "So sánh giá cả, chất lượng.", example: "This one is cheaper.", note: "Lựa chọn." }]
    },
    "Giới thiệu bản thân": {
        "A1": [{ name: "Động từ to be", formula: "I am + N/Adj", explanation: "Giới thiệu bản thân.", example: "I am a student.", note: "Cơ bản." }]
    },
    "Hỏi thăm sức khỏe": {
        "A1": [{ name: "How questions", formula: "How + be + S?", explanation: "Hỏi thăm trạng thái.", example: "How are you?", note: "Xã giao." }]
    },


    // ... inside expandedGrammar ...
    "Thói quen hàng ngày": {
        "A1": [
            { name: "Hiện tại đơn (Thói quen)", formula: "S + V(s/es)", explanation: "Diễn tả thói quen lặp đi lặp lại.", example: "I usually get up early.", note: "Thói quen." },
            { name: "Trạng từ tần suất", formula: "always, usually, often, sometimes, never", explanation: "Mức độ thường xuyên.", example: "I never smoke.", note: "Đứng trước động từ thường." },
            { name: "Giới từ thời gian (at)", formula: "at + time", explanation: "Chỉ giờ giấc cụ thể.", example: "I start at 8 AM.", note: "Giờ giấc." }
        ]
    },
    "Kể về bạn thân": {
        "A1": [{ name: "Hiện tại đơn", formula: "S + V(s/es)", explanation: "Kể về thói quen của bạn.", example: "He plays soccer.", note: "Mô tả." }]
    },
    "Hoạt động cuối tuần": {
        "A1": [{ name: "Giới từ thời gian (on)", formula: "on + day", explanation: "Chỉ thời gian.", example: "On Sunday, I rest.", note: "Lịch trình." }]
    },
    "Mua sắm": {
        "A1": [{ name: "Want + to V", formula: "S + want + to V", explanation: "Diễn tả mong muốn mua gì.", example: "I want to buy a hat.", note: "Mua bán." }]
    },
    "Mặc cả giá": {
        "B2": [{ name: "Câu điều kiện loại 1", formula: "If + S + V, S + will + V", explanation: "Thương lượng.", example: "If you lower the price, I will buy it.", note: "Đàm phán." }]
    },
    "Việc nhà": {
        "A1": [{ name: "Hiện tại tiếp diễn", formula: "S + am/is/are + V-ing", explanation: "Diễn tả việc đang làm.", example: "I am cleaning the floor.", note: "Hành động." }]
    },
    "Thuê nhà": {
        "B1": [{ name: "Hỏi thông tin (Is there)", formula: "Is there + N?", explanation: "Hỏi về tiện ích.", example: "Is there a washing machine?", note: "Tìm hiểu." }]
    },
    "Sửa chữa đồ đạc": {
        "B1": [{ name: "Need + V-ing/to be V3", formula: "S + need + V-ing", explanation: "Cần được làm gì (bị động).", example: "The TV needs fixing.", note: "Sửa chữa." }]
    },
    "Mua vé tàu xe": {
        "A1": [{ name: "Would like", formula: "I would like + N", explanation: "Mua vé lịch sự.", example: "I'd like a ticket to Hanoi.", note: "Giao dịch." }]
    },
    "Tại sân bay": {
        "A2": [{ name: "Imperatives (Directions)", formula: "V + prep", explanation: "Chỉ dẫn ở sân bay.", example: "Show your passport.", note: "Thủ tục." }]
    },
    "Mô tả địa điểm": {
        "A2": [{ name: "There is/are", formula: "There is/are + N", explanation: "Mô tả sự tồn tại.", example: "There is a beautiful lake.", note: "Cảnh vật." }]
    },
    "Hỏi thông tin du lịch": {
        "A2": [{ name: "Wh- questions", formula: "What/Where...", explanation: "Tìm kiếm thông tin.", example: "What is famous here?", note: "Du lịch." }]
    },
    "Viết CV": {
        "B2": [{ name: "Action Verbs (Past)", formula: "V-ed", explanation: "Mô tả việc đã làm.", example: "Designed a new logo.", note: "Trong CV." }]
    },
    "Thương lượng lương": {
        "B2": [{ name: "Modals of possibility", formula: "Can/Could", explanation: "Khả năng.", example: "Can you offer more?", note: "Đàm phán." }]
    },
    "Thuyết trình báo cáo": {
        "B2": [{ name: "Signposting", formula: "First... Next... Finally...", explanation: "Dẫn dắt bài nói.", example: "First, I will talk about sales.", note: "Thuyết trình." }]
    },
    "Đưa ra ý kiến": {
        "B2": [{ name: "Phrases for opinion", formula: "I think/believe...", explanation: "Bày tỏ quan điểm.", example: "I believe this is correct.", note: "Thảo luận." }]
    },
    "Gửi email": {
        "B1": [{ name: "Formal greetings", formula: "Dear + Name", explanation: "Chào hỏi trong email.", example: "Dear Mr. Smith,", note: "Viết thư." }]
    },
    "Nói chuyện với đồng nghiệp": {
        "B1": [{ name: "Suggestions (Let's)", formula: "Let's + V", explanation: "Rủ rê.", example: "Let's grab lunch.", note: "Thân mật." }]
    },
    "Xin nghỉ phép": {
        "B1": [{ name: "Permission (May I)", formula: "May I + V?", explanation: "Xin phép.", example: "May I take a day off?", note: "Lịch sự." }]
    },

    "Nói về sở thích": {
        "A1": [
            { name: "Like + V-ing", formula: "S + like/love + V-ing", explanation: "Diễn tả sở thích.", example: "I like swimming.", note: "Động từ thêm đuôi ing." },
            { name: "Câu hỏi Sở thích", formula: "What is your hobby?", explanation: "Hỏi về sở thích.", example: "What is your hobby?", note: "Trả lời: My hobby is..." }
        ]
    },
    "Thức ăn & Đồ uống": {
        "A1": [
            { name: "Would like", formula: "I would like + N", explanation: "Muốn cái gì đó (lịch sự).", example: "I would like some water.", note: "Thay cho 'I want'." },
            { name: "Countable/Uncountable", formula: "Some/Any", explanation: "Dùng với danh từ đếm được và không đếm được.", example: "I have some rice.", note: "Cơ bản." }
        ]
    },
    "Thành phố của tôi": {
        "A1": [
            { name: "Imperatives (Directions)", formula: "V (Turn/Go...)", explanation: "Câu mệnh lệnh chỉ đường.", example: "Turn left.", note: "Không dùng chủ ngữ." },
            { name: "Prepositions of Place", formula: "next to, opposite, behind", explanation: "Chỉ vị trí địa điểm.", example: "The bank is next to the park.", note: "Vị trí tương đối." }
        ]
    },
    "Công việc & Nghề nghiệp": {
        "A1": [
            { name: "What do you do?", formula: "What do you do?", explanation: "Hỏi nghề nghiệp.", example: "What do you do? - I'm a teacher.", note: "Hỏi nghề." },
            { name: "Work vs Works", formula: "I/You/We/They work; He/She works", explanation: "Chia động từ hiện tại đơn.", example: "She works in a bank.", note: "Số ít/nhiều." }
        ]
    },
    "Lễ hội & Kỳ nghỉ": {
        "A1": [
            { name: "Past Simple (To Be)", formula: "Was / Were", explanation: "Quá khứ của To Be.", example: "It was fun.", note: "Đã xảy ra." },
            { name: "Past Simple (Regular)", formula: "V-ed", explanation: "Động từ quy tắc quá khứ.", example: "I visited my grandma.", note: "Thêm ed." }
        ]
    }
};

const expandedConversations: Record<string, Record<string, ConversationTurn[]>> = {
    "Đặt phòng khách sạn": {
        "A1": [
            { en: "Guest: I saw this on the website.", vi: "Khách: Tôi thấy cái này trên web." },
            { en: "Receptionist: Yes, we have that room.", vi: "Lễ tân: Vâng, chúng tôi có phòng đó." }
        ],
        "B2": [
            { en: "Guest: Do you have vacancies?", vi: "Khách: Bạn còn phòng trống không?" },
            { en: "Receptionist: We have a suite available.", vi: "Lễ tân: Chúng tôi còn 1 phòng hạng sang." }
        ],
        "C1": [
            { en: "Guest: I require absolute silence.", vi: "Khách: Tôi yêu cầu sự yên tĩnh tuyệt đối." },
            { en: "Receptionist: Understood.", vi: "Lễ tân: Đã hiểu." }
        ]
    },
    "Check-in khách sạn": {
        "A1": [
            { en: "Recep: Good morning.", vi: "LT: Chào buổi sáng." },
            { en: "Guest: I want to check in.", vi: "Khách: Tôi muốn nhận phòng." }
        ]
    },
    "Phàn nàn dịch vụ": {
        "B2": [
            { en: "Guest: The AC is not working.", vi: "Khách: Điều hòa không chạy." },
            { en: "Recep: I will send someone up.", vi: "LT: Tôi sẽ cử người lên xem." }
        ]
    },
    "Họp dự án": {
        "B2": [
            { en: "Lead: Are we on track?", vi: "Trưởng nhóm: Chúng ta đúng tiến độ chứ?" },
            { en: "Dev: Yes, just a small bottleneck.", vi: "Dev: Vâng, chỉ có một chút tắc nghẽn nhỏ." }
        ]
    },
    "Gọi món ăn": {
        "A1": [{ en: "Guest: Menu please.", vi: "Khách: Cho xem menu." }, { en: "Waiter: Here you are.", vi: "PV: Đây ạ." }],
        "B2": [{ en: "Guest: What do you recommend?", vi: "Khách: Bạn gợi ý món gì?" }, { en: "Waiter: The steak is excellent.", vi: "PV: Món bít tết rất tuyệt." }]
    },
    "Hỏi đường": {
        "A1": [{ en: "A: Where is the bank?", vi: "A: Ngân hàng ở đâu?" }, { en: "B: Go straight.", vi: "B: Đi thẳng." }],
        "B2": [{ en: "A: Excuse me, could you direct me to the station?", vi: "A: Xin lỗi, chỉ tôi đến nhà ga được không?" }, { en: "B: Take a shortcut through the park.", vi: "B: Đi đường tắt qua công viên." }]
    },
    "Phỏng vấn xin việc": {
        "A1": [{ en: "A: What is your job?", vi: "A: Nghề của bạn là gì?" }, { en: "B: I am a student.", vi: "B: Tôi là sinh viên." }],
        "B2": [{ en: "HR: What are your strengths?", vi: "HR: Điểm mạnh của bạn là gì?" }, { en: "Candidate: I am a quick learner.", vi: "UV: Tôi học hỏi rất nhanh." }]
    },
    "Làm quen": {
        "A1": [{ en: "A: Hello, I'm Nam.", vi: "A: Chào, tôi là Nam." }, { en: "B: Nice to meet you.", vi: "B: Rất vui được gặp bạn." }],
        "B2": [{ en: "A: You look familiar.", vi: "A: Trông bạn quen quen." }, { en: "B: Maybe we have a mutual friend.", vi: "B: Chắc chúng ta có bạn chung." }]
    },
    "Thói quen hàng ngày": {
        "A1": [
            { en: "A: What time do you wake up?", vi: "A: Bạn thức dậy lúc mấy giờ?" },
            { en: "B: I wake up at 6 AM.", vi: "B: Tôi dậy lúc 6 giờ sáng." },
            { en: "A: What do you do then?", vi: "A: Sau đó bạn làm gì?" },
            { en: "B: I brush my teeth and have breakfast.", vi: "B: Tôi đánh răng và ăn sáng." },
            { en: "A: Do you go to school?", vi: "A: Bạn có đi học không?" },
            { en: "B: Yes, I go to school at 7 AM.", vi: "B: Có, tôi đi học lúc 7 giờ." }
        ]
    },
    "Đi siêu thị": {
        "A1": [
            { en: "A: Hello! How much is this apple?", vi: "A: Xin chào! Quả táo này bao nhiêu tiền?" },
            { en: "B: It's 1 dollar.", vi: "B: Nó giá 1 đô la." },
            { en: "A: Can I have two apples, please?", vi: "A: Cho tôi 2 quả táo nhé?" },
            { en: "B: Sure. Here you are.", vi: "B: Chắc chắn rồi. Của bạn đây." },
            { en: "A: Thank you. Here is the money.", vi: "A: Cảm ơn. Tiền đây ạ." },
            { en: "B: Thank you!", vi: "B: Cảm ơn!" }
        ],
        "B2": [{ en: "A: Is this on discount?", vi: "A: Cái này có giảm giá không?" }, { en: "B: Yes, 20% off.", vi: "B: Có, giảm 20%." }]
    },
    "Giới thiệu bản thân": {
        "A1": [{ en: "A: Tell me about yourself.", vi: "A: Kể về bạn đi." }, { en: "B: I like reading.", vi: "B: Tôi thích đọc sách." }]
    },
    "Hỏi thăm sức khỏe": {
        "A1": [{ en: "A: How are you?", vi: "A: Bạn khỏe không?" }, { en: "B: I'm fine.", vi: "B: Tôi khỏe." }]
    },
    "Mô tả gia đình": {
        "A1": [{ en: "A: Do you have siblings?", vi: "A: Bạn có anh chị em không?" }, { en: "B: One sister.", vi: "B: Một em gái." }]
    },
    "Kể về bạn thân": {
        "A1": [{ en: "A: Who is your best friend?", vi: "A: Bạn thân bạn là ai?" }, { en: "B: It's Tom.", vi: "B: Là Tom." }]
    },
    "Hoạt động cuối tuần": {
        "A1": [{ en: "A: What do you do on Sunday?", vi: "A: Bạn làm gì chủ nhật?" }, { en: "B: I sleep.", vi: "B: Tôi ngủ." }]
    },
    "Mua sắm": {
        "A1": [{ en: "A: Can I help you?", vi: "A: Tôi giúp gì được không?" }, { en: "B: Just looking.", vi: "B: Tôi chỉ xem thôi." }]
    },
    "Mặc cả giá": {
        "B2": [{ en: "A: Too expensive.", vi: "A: Đắt quá." }, { en: "B: I can give a discount.", vi: "B: Tôi có thể giảm giá." }]
    },
    "Việc nhà": {
        "A1": [{ en: "A: Did you clean the room?", vi: "A: Bạn dọn phòng chưa?" }, { en: "B: Not yet.", vi: "B: Chưa." }]
    },
    "Thuê nhà": {
        "B1": [{ en: "A: Is the room available?", vi: "A: Phòng còn trống không?" }, { en: "B: Yes, it is.", vi: "B: Còn." }]
    },
    // Added Missing Conversations
    "Greetings & Introductions": {
        "A1": [
            { en: "A: Hello, I'm Nam.", vi: "A: Chào, tôi là Nam." },
            { en: "B: Hi Nam, I'm Sarah. Nice to meet you.", vi: "B: Chào Nam, tôi là Sarah. Rất vui được gặp bạn." },
            { en: "A: Where are you from?", vi: "A: Bạn đến từ đâu?" },
            { en: "B: I'm from America. And you?", vi: "B: Tôi đến từ Mỹ. Còn bạn?" }
        ]
    },
    "Mô tả nhà cửa": {
        "A1": [
            { en: "A: Do you live in a house or a flat?", vi: "A: Bạn sống ở nhà riêng hay căn hộ?" },
            { en: "B: I live in a small house.", vi: "B: Tôi sống trong một ngôi nhà nhỏ." },
            { en: "A: How many rooms are there?", vi: "A: Có bao nhiêu phòng?" },
            { en: "B: There are 4 rooms.", vi: "B: Có 4 phòng." }
        ]
    },
    "Nói về sở thích": {
        "A1": [
            { en: "A: What is your hobby?", vi: "A: Sở thích của bạn là gì?" },
            { en: "B: I like swimming and reading.", vi: "B: Tôi thích bơi lội và đọc sách." },
            { en: "A: How often do you swim?", vi: "A: Bạn có thường xuyên bơi không?" },
            { en: "B: Twice a week.", vi: "B: Hai lần một tuần." }
        ]
    },
    "Thức ăn & Đồ uống": {
        "A1": [
            { en: "A: What is your favorite food?", vi: "A: Món ăn yêu thích của bạn là gì?" },
            { en: "B: I love chicken and rice.", vi: "B: Tôi thích gà và cơm." },
            { en: "A: Do you like noodles?", vi: "A: Bạn có thích mì không?" },
            { en: "B: Yes, sometimes.", vi: "B: Có, thỉnh thoảng." }
        ]
    },
    "Thành phố của tôi": {
        "A1": [
            { en: "A: Is there a park near here?", vi: "A: Có công viên nào gần đây không?" },
            { en: "B: Yes, it is next to the cinema.", vi: "B: Có, nó ở cạnh rạp chiếu phim." },
            { en: "A: Is it beautiful?", vi: "A: Nó có đẹp không?" },
            { en: "B: Yes, very beautiful.", vi: "B: Có, rất đẹp." }
        ]
    },
    "Công việc & Nghề nghiệp": {
        "A1": [
            { en: "A: What do you do?", vi: "A: Bạn làm nghề gì?" },
            { en: "B: I am a teacher.", vi: "B: Tôi là giáo viên." },
            { en: "A: Where do you work?", vi: "A: Bạn làm việc ở đâu?" },
            { en: "B: I work at a school.", vi: "B: Tôi làm việc ở trường học." }
        ]
    },
    "Lễ hội & Kỳ nghỉ": {
        "A1": [
            { en: "A: What do you do on Tet holiday?", vi: "A: Bạn làm gì vào dịp Tết?" },
            { en: "B: I visit my grandparents.", vi: "B: Tôi đi thăm ông bà." },
            { en: "A: Do you get lucky money?", vi: "A: Bạn có nhận lì xì không?" },
            { en: "B: Yes, I do.", vi: "B: Có chứ." }
        ]
    },
    "Sửa chữa đồ đạc": {
        "B1": [{ en: "A: My phone is broken.", vi: "A: Điện thoại tôi hỏng." }, { en: "B: Let me see.", vi: "B: Để tôi xem." }]
    },
    "Mua vé tàu xe": {
        "A1": [{ en: "A: One ticket to Hue.", vi: "A: Một vé đi Huế." }, { en: "B: Here you go.", vi: "B: Đây, của bạn." }]
    },
    "Tại sân bay": {
        "A2": [{ en: "A: Passport please.", vi: "A: Xin hộ chiếu." }, { en: "B: Here.", vi: "B: Đây." }]
    },
    "Mô tả địa điểm": {
        "A2": [{ en: "A: Is it beautiful?", vi: "A: Nó đẹp không?" }, { en: "B: Very beautiful.", vi: "B: Rất đẹp." }]
    },
    "Hỏi thông tin du lịch": {
        "A2": [{ en: "A: Where is the museum?", vi: "A: Bảo tàng ở đâu?" }, { en: "B: Near the park.", vi: "B: Gần công viên." }]
    },
    "Viết CV": {
        "B2": [{ en: "A: Is your CV ready?", vi: "A: CV xong chưa?" }, { en: "B: Almost.", vi: "B: Gần xong." }]
    },
    "Thương lượng lương": {
        "B2": [{ en: "A: What is your expectation?", vi: "A: Mong muốn lương của bạn?" }, { en: "B: $1000.", vi: "B: 1000 đô." }]
    },
    "Thuyết trình báo cáo": {
        "B2": [{ en: "A: Any questions?", vi: "A: Có câu hỏi nào không?" }, { en: "B: No, thanks.", vi: "B: Không, cảm ơn." }]
    },

    "Gửi email": {
        "B1": [{ en: "A: Did you send the email?", vi: "A: Bạn gửi mail chưa?" }, { en: "B: Yes, sent.", vi: "B: Vâng, đã gửi." }]
    },
    "Nói chuyện với đồng nghiệp": {
        "B1": [{ en: "A: Coffee?", vi: "A: Cà phê không?" }, { en: "B: Sure.", vi: "B: Chắc chắn rồi." }]
    },
    "Xin nghỉ phép": {
        "B1": [{ en: "A: I need a day off.", vi: "A: Tôi cần nghỉ 1 ngày." }, { en: "B: Okay.", vi: "B: Được thôi." }]
    },

};


import type { PracticeExercise } from "../../../domain/learning/entities/PracticeMaterial";

export const getExpandedData = (scenario: string, level: string) => {
    let key = "A1";
    if (["B1", "B2"].includes(level)) key = "B2";
    if (["C1", "C2"].includes(level)) key = "C1";

    // Inject extended grammar for Family
    if (scenario === "Mô tả gia đình" && !expandedGrammar["Mô tả gia đình"]?.["A1"]) {
        // Hot-fix to ensure data exists if not defined above
    }

    const vocab = expandedVocabulary[scenario]?.[key] || expandedVocabulary[scenario]?.["A1"] || expandedVocabulary[scenario]?.["B1"] || expandedVocabulary[scenario]?.["B2"] || [];
    const grammar = expandedGrammar[scenario]?.[key] || expandedGrammar[scenario]?.["A1"] || expandedGrammar[scenario]?.["B1"] || expandedGrammar[scenario]?.["B2"] || [];
    const conversation = expandedConversations[scenario]?.[key] || expandedConversations[scenario]?.["A1"] || expandedConversations[scenario]?.["B1"] || expandedConversations[scenario]?.["B2"] || [];


    // Specific logic for Unit 1
    if (scenario === "Greetings & Introductions") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching
                {
                    id: "u1_q1",
                    type: "matching",
                    question: "Nối từ tiếng Anh với nghĩa tiếng Việt tương ứng:",
                    explanation: "Hãy ghi nhớ các cặp từ vựng cơ bản này nhé!",
                    pairs: [
                        { id: "p1", left: "Hello", right: "Xin chào" },
                        { id: "p2", left: "Nice to meet you", right: "Rất vui được gặp bạn" },
                        { id: "p3", left: "Goodbye", right: "Tạm biệt" },
                        { id: "p4", left: "My name is", right: "Tên tôi là" }
                    ]
                },
                // 2. Fill in the blank
                {
                    id: "u1_q2",
                    type: "fill-blank",
                    question: "Hoàn thành đoạn hội thoại sau:",
                    explanation: "Cấu trúc hỏi tên: 'What's your name?' và trả lời 'My name is...'",
                    correctAnswer: "name", // Simplification for now, UI handles context
                    options: ["name", "is", "from", "hello"],
                    // In a real app, we might struct this differently, e.g. text with {{blank}}
                    imageUrl: "https://img.freepik.com/free-vector/people-talking-illustration_52683-29470.jpg"
                },
                // 3. Multiple Choice
                {
                    id: "u1_q3",
                    type: "multiple-choice",
                    question: "Để trả lời câu hỏi 'How are you?', bạn nói:",
                    options: ["I'm from Vietnam.", "I'm fine, thanks.", "My name is Lan.", "Goodbye."],
                    correctAnswer: "I'm fine, thanks.",
                    explanation: "'How are you?' nghĩa là 'Bạn khỏe không?', nên câu trả lời hợp lý nhất là về sức khỏe."
                },
                // 4. Ordering
                {
                    id: "u1_q4",
                    type: "ordering",
                    question: "Sắp xếp các từ thành câu đúng:",
                    explanation: "Cấu trúc: My + name + is + [Tên].",
                    segments: ["is", "name", "My", "Lan"],
                    correctOrder: ["My", "name", "is", "Lan"],
                    correctAnswer: "My name is Lan"
                },
                // 5. Listening (Mock)
                {
                    id: "u1_q5",
                    type: "listening",
                    question: "Nghe và chọn bức tranh phù hợp với câu: 'I'm from Japan.'",
                    explanation: "Câu nói 'I'm from Japan' nghĩa là 'Tôi đến từ Nhật Bản'.",
                    options: ["🇯🇵 Cờ Nhật Bản", "🇻🇳 Cờ Việt Nam", "🇺🇸 Cờ Mỹ", "🇬🇧 Cờ Anh"],
                    correctAnswer: "🇯🇵 Cờ Nhật Bản",
                    audioUrl: "mock_audio_japan.mp3"
                },
                // 6. Speaking (Mock)
                {
                    id: "u1_q6",
                    type: "speaking",
                    question: "Hãy nói to câu sau: 'Hi! My name is [Tên của bạn].'",
                    explanation: "Cố gắng phát âm tự nhiên, nhấn vào tên của bạn.",
                    correctAnswer: "Hi! My name is..." // Loose matching for mock
                },
                // 7. Writing
                {
                    id: "u1_q7",
                    type: "writing",
                    question: "Viết một câu giới thiệu quê quán của bạn (Ví dụ: I'm from...)",
                    explanation: "Sử dụng cấu trúc 'I am from + [Nơi chốn]'.",
                    correctAnswer: "I'm from" // Contains check
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 2
    if (scenario === "Mô tả gia đình") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching
                {
                    id: "u2_q1",
                    type: "matching",
                    question: "Nối thành viên gia đình với nghĩa tiếng Việt:",
                    explanation: "Ôn tập từ vựng về gia đình.",
                    pairs: [
                        { id: "p1", left: "Father", right: "Bố" },
                        { id: "p2", left: "Mother", right: "Mẹ" },
                        { id: "p3", left: "Brother", right: "Anh/Em trai" },
                        { id: "p4", left: "Sister", right: "Chị/Em gái" },
                        { id: "p5", left: "Grandmother", right: "Bà" }
                    ]
                },
                // 2. Ordering
                {
                    id: "u2_q2",
                    type: "ordering",
                    question: "Sắp xếp câu: 'This is my mother.'",
                    explanation: "Cấu trúc giới thiệu: This is + [Người].",
                    segments: ["is", "mother", "This", "my"],
                    correctOrder: ["This", "is", "my", "mother"],
                    correctAnswer: "This is my mother"
                },
                // 3. Choice
                {
                    id: "u2_q3",
                    type: "multiple-choice",
                    question: "Chọn từ đúng điền vào chỗ trống: 'I have two ______.' (Tôi có 2 chị gái)",
                    options: ["sister", "sisters", "brother", "mother"],
                    correctAnswer: "sisters",
                    explanation: "Số lượng là 2 nên danh từ phải ở số nhiều (thêm s)."
                },
                // 4. Speaking
                {
                    id: "u2_q4",
                    type: "speaking",
                    question: "Hãy nói: 'I love my family.'",
                    explanation: "Phát âm rõ ràng từ Family.",
                    correctAnswer: "I love my family"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 3
    if (scenario === "Đi siêu thị") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Food items)
                {
                    id: "u3_q1",
                    type: "matching",
                    question: "Nối tên thực phẩm với nghĩa tương ứng:",
                    explanation: "Từ vựng về đồ ăn thông dụng.",
                    pairs: [
                        { id: "p1", left: "Apple", right: "Quả táo" },
                        { id: "p2", left: "Banana", right: "Quả chuối" },
                        { id: "p3", left: "Milk", right: "Sữa" },
                        { id: "p4", left: "Bread", right: "Bánh mì" },
                        { id: "p5", left: "Rice", right: "Cơm/Gạo" }
                    ]
                },
                // 2. Multiple Choice (Price)
                {
                    id: "u3_q2",
                    type: "multiple-choice",
                    question: "Để hỏi giá cái này bao nhiêu, bạn nói:",
                    options: ["How old is this?", "How much is this?", "What is this?", "Where is this?"],
                    correctAnswer: "How much is this?",
                    explanation: "Cấu trúc 'How much is...' dùng để hỏi giá tiền."
                },
                // 3. Ordering
                {
                    id: "u3_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'Can I have two apples?'",
                    explanation: "Câu đề nghị lịch sự: Can I have + số lượng + tên vật?",
                    segments: ["apples", "two", "have", "I", "Can"],
                    correctOrder: ["Can", "I", "have", "two", "apples"],
                    correctAnswer: "Can I have two apples"
                },
                // 4. Fill blank
                {
                    id: "u3_q4",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'That is too ______.' (Đắt quá)",
                    explanation: "Tính từ 'expensive' nghĩa là đắt.",
                    correctAnswer: "expensive",
                    options: ["cheap", "expensive", "good", "nice"]
                },
                // 5. Speaking
                {
                    id: "u3_q5",
                    type: "speaking",
                    question: "Hãy nói: 'I want to buy some fruit.'",
                    explanation: "Chú ý âm cuối của từ Fruit /fruːt/.",
                    correctAnswer: "I want to buy some fruit"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 4
    if (scenario === "Mô tả nhà cửa") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Rooms)
                {
                    id: "u4_q1",
                    type: "matching",
                    question: "Nối tên phòng với nghĩa tiếng Việt:",
                    explanation: "Từ vựng về các phòng trong nhà.",
                    pairs: [
                        { id: "p1", left: "Bedroom", right: "Phòng ngủ" },
                        { id: "p2", left: "Bathroom", right: "Phòng tắm" },
                        { id: "p3", left: "Kitchen", right: "Nhà bếp" },
                        { id: "p4", left: "Living room", right: "Phòng khách" },
                        { id: "p5", left: "Garden", right: "Vườn" }
                    ]
                },
                // 2. Multiple Choice (Prepositions)
                {
                    id: "u4_q2",
                    type: "multiple-choice",
                    question: "Chọn giới từ đúng: 'The book is ______ the table.' (Quyển sách ở trên bàn)",
                    options: ["in", "on", "at", "under"],
                    correctAnswer: "on",
                    explanation: "'On' nghĩa là ở trên bề mặt."
                },
                // 3. Ordering
                {
                    id: "u4_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'There is a sofa in the living room.'",
                    explanation: "Cấu trúc There is + a/an + N + Place.",
                    segments: ["room", "living", "in", "sofa", "a", "is", "There", "the"],
                    correctOrder: ["There", "is", "a", "sofa", "in", "the", "living", "room"],
                    correctAnswer: "There is a sofa in the living room"
                },
                // 4. Speaking
                {
                    id: "u4_q4",
                    type: "speaking",
                    question: "Hãy nói: 'Welcome to my home.'",
                    explanation: "Chào mừng khách đến nhà.",
                    correctAnswer: "Welcome to my home"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 5
    if (scenario === "Thói quen hàng ngày") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Verbs)
                {
                    id: "u5_q1",
                    type: "matching",
                    question: "Nối hành động với nghĩa tiếng Việt:",
                    explanation: "Từ vựng chỉ hoạt động hàng ngày.",
                    pairs: [
                        { id: "p1", left: "Wake up", right: "Thức dậy" },
                        { id: "p2", left: "Brush teeth", right: "Đánh răng" },
                        { id: "p3", left: "Have breakfast", right: "Ăn sáng" },
                        { id: "p4", left: "Go to work", right: "Đi làm" },
                        { id: "p5", left: "Go to sleep", right: "Đi ngủ" }
                    ]
                },
                // 2. Multiple Choice (Time Preposition)
                {
                    id: "u5_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'I go to school ______ 7 AM.'",
                    options: ["in", "on", "at", "to"],
                    correctAnswer: "at",
                    explanation: "Dùng giới từ 'at' trước giờ giấc cụ thể."
                },
                // 3. Multiple Choice (Adverb placement)
                {
                    id: "u5_q3",
                    type: "multiple-choice",
                    question: "Chọn câu đúng vị trí trạng từ:",
                    options: ["I always am happy.", "I am always happy.", "I happy always am.", "Always I am happy."],
                    correctAnswer: "I am always happy.",
                    explanation: "Trạng từ tần suất đứng sau động từ To Be."
                },
                // 4. Ordering (Routine)
                {
                    id: "u5_q4",
                    type: "ordering",
                    question: "Sắp xếp câu: 'usually / up / get / I / early.'",
                    explanation: "Trạng từ 'usually' đứng trước động từ thường 'get up'.",
                    segments: ["I", "get", "up", "early", "usually"],
                    correctOrder: ["I", "usually", "get", "up", "early"],
                    correctAnswer: "I usually get up early"
                },
                // 5. Listening (Mock)
                {
                    id: "u5_q5",
                    type: "listening",
                    question: "Nghe và chọn giờ được nhắc đến: 'I have lunch at 12:30.'",
                    explanation: "12:30 đọc là 'Twelve thirty' hoặc 'Half past twelve'.",
                    options: ["12:00", "12:15", "12:30", "01:30"],
                    correctAnswer: "12:30",
                    audioUrl: "mock_lunch_time.mp3"
                },
                // 6. Speaking
                {
                    id: "u5_q6",
                    type: "speaking",
                    question: "Hãy nói: 'I brush my teeth twice a day.'",
                    explanation: "Luyện phát âm âm đuôi /s/ và /θ/ trong 'brush teeth'.",
                    correctAnswer: "I brush my teeth twice a day"
                },
                // 7. Writing
                {
                    id: "u5_q7",
                    type: "writing",
                    question: "Viết lại câu dùng 'never': 'I do not smoke.' (Tôi không bao giờ hút thuốc)",
                    explanation: "Thay 'do not' bằng 'never' để nhấn mạnh KHÔNG BAO GIỜ.",
                    correctAnswer: "I never smoke"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 6
    if (scenario === "Nói về sở thích") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Hobbies)
                {
                    id: "u6_q1",
                    type: "matching",
                    question: "Nối sở thích với nghĩa tiếng Việt:",
                    explanation: "Từ vựng về sở thích.",
                    pairs: [
                        { id: "p1", left: "Reading", right: "Đọc sách" },
                        { id: "p2", left: "Swimming", right: "Bơi lội" },
                        { id: "p3", left: "Cooking", right: "Nấu ăn" },
                        { id: "p4", left: "Music", right: "Âm nhạc" },
                        { id: "p5", left: "Travel", right: "Du lịch" }
                    ]
                },
                // 2. Multiple Choice (Gerund)
                {
                    id: "u6_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'I like ______ soccer.'",
                    options: ["play", "plays", "playing", "played"],
                    correctAnswer: "playing",
                    explanation: "Sau 'Like' thường dùng V-ing (Gerund)."
                },
                // 3. Ordering
                {
                    id: "u6_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'My hobby is reading books.'",
                    explanation: "Cấu trúc: My hobby is + [Noun/V-ing].",
                    segments: ["reading", "is", "hobby", "books", "My"],
                    correctOrder: ["My", "hobby", "is", "reading", "books"],
                    correctAnswer: "My hobby is reading books"
                },
                // 4. Speaking
                {
                    id: "u6_q4",
                    type: "speaking",
                    question: "Hãy nói: 'I love listening to music.'",
                    explanation: "Chú ý nối âm 'listening to'.",
                    correctAnswer: "I love listening to music"
                },
                // 5. Listening (Mock)
                {
                    id: "u6_q5",
                    type: "listening",
                    question: "Nghe và chọn sở thích được nhắc đến: 'She loves cooking.'",
                    explanation: "Từ khóa: Cooking.",
                    options: ["Swimming", "Cooking", "Reading", "Travel"],
                    correctAnswer: "Cooking",
                    audioUrl: "mock_hobbies.mp3"
                },
                // 6. Writing
                {
                    id: "u6_q6",
                    type: "writing",
                    question: "Viết lại câu dùng 'like': 'I enjoy swimming.' (Tôi thích bơi)",
                    explanation: "Enjoy + V-ing = Like + V-ing.",
                    correctAnswer: "I like swimming"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 7
    if (scenario === "Thức ăn & Đồ uống") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Food)
                {
                    id: "u7_q1",
                    type: "matching",
                    question: "Nối tên món ăn với nghĩa tiếng Việt:",
                    explanation: "Từ vựng về thức ăn.",
                    pairs: [
                        { id: "p1", left: "Rice", right: "Cơm" },
                        { id: "p2", left: "Noodles", right: "Mì" },
                        { id: "p3", left: "Chicken", right: "Thịt gà" },
                        { id: "p4", left: "Water", right: "Nước" },
                        { id: "p5", left: "Juice", right: "Nước ép" }
                    ]
                },
                // 2. Multiple Choice (Like)
                {
                    id: "u7_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'She ______ pizza.' (Cô ấy thích pizza)",
                    options: ["like", "likes", "liking", "to like"],
                    correctAnswer: "likes",
                    explanation: "Chủ ngữ số ít 'She' thì động từ thêm 's'."
                },
                // 3. Ordering
                {
                    id: "u7_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'I would like some water.'",
                    explanation: "Cấu trúc mời/đề nghị lịch sự.",
                    segments: ["water", "like", "some", "would", "I"],
                    correctOrder: ["I", "would", "like", "some", "water"],
                    correctAnswer: "I would like some water"
                },
                // 4. Speaking
                {
                    id: "u7_q4",
                    type: "speaking",
                    question: "Hãy nói: 'My favorite food is chicken.'",
                    explanation: "Nói về món ăn yêu thích.",
                    correctAnswer: "My favorite food is chicken"
                },
                // 5. Listening (Mock)
                {
                    id: "u7_q5",
                    type: "listening",
                    question: "Nghe và chọn món ăn: 'I would like some noodles.'",
                    explanation: "Từ khóa: Noodles (Mì).",
                    options: ["Rice", "Noodles", "Bread", "Chicken"],
                    correctAnswer: "Noodles",
                    audioUrl: "mock_order_food.mp3"
                },
                // 6. Writing
                {
                    id: "u7_q6",
                    type: "writing",
                    question: "Viết câu hỏi: 'You / like / do / rice?' (Bạn có thích cơm không?)",
                    explanation: "Cấu trúc: Do + S + like + N?",
                    correctAnswer: "Do you like rice?"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 8
    if (scenario === "Thành phố của tôi") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Places)
                {
                    id: "u8_q1",
                    type: "matching",
                    question: "Nối địa điểm với nghĩa tiếng Việt:",
                    explanation: "Từ vựng về địa điểm trong thành phố.",
                    pairs: [
                        { id: "p1", left: "Park", right: "Công viên" },
                        { id: "p2", left: "Cinema", right: "Rạp chiếu phim" },
                        { id: "p3", left: "Hospital", right: "Bệnh viện" },
                        { id: "p4", left: "Supermarket", right: "Siêu thị" },
                        { id: "p5", left: "Bank", right: "Ngân hàng" }
                    ]
                },
                // 2. Multiple Choice (Directions)
                {
                    id: "u8_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'Go ______ ahead.' (Đi thẳng)",
                    options: ["straight", "straights", "street", "left"],
                    correctAnswer: "straight",
                    explanation: "'Go straight ahead' nghĩa là đi thẳng về phía trước."
                },
                // 3. Ordering
                {
                    id: "u8_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'Where is the nearest bank?'",
                    explanation: "Hỏi đường: Where is + [Place]?",
                    segments: ["bank", "nearest", "the", "Where", "is"],
                    correctOrder: ["Where", "is", "the", "nearest", "bank"],
                    correctAnswer: "Where is the nearest bank"
                },
                // 4. Speaking
                {
                    id: "u8_q4",
                    type: "speaking",
                    question: "Hãy nói: 'Turn left at the corner.'",
                    explanation: "Chỉ đường rẽ trái.",
                    correctAnswer: "Turn left at the corner"
                },
                // 5. Listening (Mock)
                {
                    id: "u8_q5",
                    type: "listening",
                    question: "Nghe và chọn địa điểm: 'The cinema is next to the bank.'",
                    explanation: "Từ khóa: Cinema, Bank.",
                    options: ["Hospital", "School", "Cinema", "Park"],
                    correctAnswer: "Cinema",
                    audioUrl: "mock_city_place.mp3"
                },
                // 6. Writing
                {
                    id: "u8_q6",
                    type: "writing",
                    question: "Viết câu dùng 'There is': 'a park / near here.' (Có một công viên ở gần đây)",
                    explanation: "Cấu trúc: There is + a/an + N + Place.",
                    correctAnswer: "There is a park near here"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 9
    if (scenario === "Công việc & Nghề nghiệp") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Jobs)
                {
                    id: "u9_q1",
                    type: "matching",
                    question: "Nối nghề nghiệp với nghĩa tiếng Việt:",
                    explanation: "Từ vựng về nghề nghiệp.",
                    pairs: [
                        { id: "p1", left: "Doctor", right: "Bác sĩ" },
                        { id: "p2", left: "Teacher", right: "Giáo viên" },
                        { id: "p3", left: "Engineer", right: "Kỹ sư" },
                        { id: "p4", left: "Office", right: "Văn phòng" },
                        { id: "p5", left: "Student", right: "Học sinh" }
                    ]
                },
                // 2. Multiple Choice (Work vs Works)
                {
                    id: "u9_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'She ______ in a hospital.'",
                    options: ["work", "works", "working", "worker"],
                    correctAnswer: "works",
                    explanation: "Hiện tại đơn: He/She/It + V(s/es)."
                },
                // 3. Ordering
                {
                    id: "u9_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'What do you do?'",
                    explanation: "Câu hỏi nghề nghiệp.",
                    segments: ["do", "you", "What", "do"],
                    correctOrder: ["What", "do", "you", "do"],
                    correctAnswer: "What do you do"
                },
                // 4. Speaking
                {
                    id: "u9_q4",
                    type: "speaking",
                    question: "Hãy nói: 'I am a teacher.'",
                    explanation: "Giới thiệu nghề nghiệp.",
                    correctAnswer: "I am a teacher"
                },
                // 5. Listening (Mock)
                {
                    id: "u9_q5",
                    type: "listening",
                    question: "Nghe và chọn nghề nghiệp: 'He drives a taxi.'",
                    explanation: "Drives a taxi -> Driver.",
                    options: ["Doctor", "Teacher", "Driver", "Nurse"],
                    correctAnswer: "Driver",
                    audioUrl: "mock_job_guess.mp3"
                },
                // 6. Writing
                {
                    id: "u9_q6",
                    type: "writing",
                    question: "Viết câu hỏi: 'do / What / do / you?' (Bạn làm nghề gì?)",
                    explanation: "Câu hỏi nghề nghiệp: What do you do?",
                    correctAnswer: "What do you do?"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for Unit 10
    if (scenario === "Lễ hội & Kỳ nghỉ") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Holiday)
                {
                    id: "u10_q1",
                    type: "matching",
                    question: "Nối từ vựng lễ hội:",
                    explanation: "Từ vựng về lễ hội.",
                    pairs: [
                        { id: "p1", left: "Holiday", right: "Kỳ nghỉ" },
                        { id: "p2", left: "Festival", right: "Lễ hội" },
                        { id: "p3", left: "Happy", right: "Vui vẻ" },
                        { id: "p4", left: "Gift", right: "Quà tặng" },
                        { id: "p5", left: "Party", right: "Bữa tiệc" }
                    ]
                },
                // 2. Multiple Choice (Past Simple)
                {
                    id: "u10_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'I ______ my grandpa yesterday.' (Tôi đã thăm ông hôm qua)",
                    options: ["visit", "visited", "visiting", "visits"],
                    correctAnswer: "visited",
                    explanation: "Quá khứ đơn của visit là visited (có quy tắc)."
                },
                // 3. Ordering
                {
                    id: "u10_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'It was fun.'",
                    explanation: "Mô tả cảm xúc trong quá khứ.",
                    segments: ["fun", "was", "It"],
                    correctOrder: ["It", "was", "fun"],
                    correctAnswer: "It was fun"
                },
                // 4. Speaking
                {
                    id: "u10_q4",
                    type: "speaking",
                    question: "Hãy nói: 'Happy New Year!'",
                    explanation: "Chúc mừng năm mới.",
                    correctAnswer: "Happy New Year"
                },
                // 5. Listening (Mock)
                {
                    id: "u10_q5",
                    type: "listening",
                    question: "Nghe và chọn cảm xúc: 'The party was great!'",
                    explanation: "Great -> Vui vẻ/Tuyệt vời.",
                    options: ["Boring", "Sad", "Great", "Tired"],
                    correctAnswer: "Great",
                    audioUrl: "mock_holiday_feeling.mp3"
                },
                // 6. Writing
                {
                    id: "u10_q6",
                    type: "writing",
                    question: "Viết câu quá khứ: 'I (go) to the festival yesterday.'",
                    explanation: "Quá khứ của go là went.",
                    correctAnswer: "I went to the festival yesterday"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Default mock generation for other scenarios
    const practice: PracticeExercise = {
        scenarioId: scenario,
        questions: [
            {
                id: "q1",
                type: "multiple-choice",
                question: `Từ nào có nghĩa là "${vocab[0]?.meaning || '...'} "?`,
                options: [vocab[0]?.word || "A", "Wrong 1", "Wrong 2", "Wrong 3"].sort(() => Math.random() - 0.5),
                correctAnswer: vocab[0]?.word || "A",
                explanation: `"${vocab[0]?.word}" có nghĩa là ${vocab[0]?.meaning}.`
            },
            {
                id: "q_grammar",
                type: "multiple-choice",
                question: `Cấu trúc nào đúng cho: ${grammar[0]?.name || '...'}?`,
                options: [grammar[0]?.formula || "A", "S + Ving", "To be + N", "S + will + V"].sort(() => Math.random() - 0.5),
                correctAnswer: grammar[0]?.formula || "A",
                explanation: grammar[0]?.explanation || "Giải thích ngữ pháp."
            }
        ]
    };

    return {
        vocab,
        grammar,
        conversation,
        practice
    };
};

