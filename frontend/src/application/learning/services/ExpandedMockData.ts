
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
    "Sức khỏe": {
        "A1": [
            { word: "doctor", phonetic: "/ˈdɒk.tər/", meaning: "bác sĩ", example: "I need to see a doctor.", usage: "Nghề nghiệp.", level: 1 },
            { word: "hospital", phonetic: "/ˈhɒs.pɪ.təl/", meaning: "bệnh viện", example: "Go to the hospital.", usage: "Địa điểm.", level: 1 },
        ],
        "A2": [
            { word: "headache", phonetic: "/ˈhed.eɪk/", meaning: "đau đầu", example: "I have a headache.", usage: "Bệnh tật.", level: 2 },
            { word: "fever", phonetic: "/ˈfiː.vər/", meaning: "sốt", example: "She has a high fever.", usage: "Triệu chứng.", level: 2 },
            { word: "cough", phonetic: "/kɒf/", meaning: "ho", example: "He is coughing.", usage: "Triệu chứng.", level: 2 },
            { word: "sore throat", phonetic: "/sɔː θrəʊt/", meaning: "đau họng", example: "Drink tea for a sore throat.", usage: "Bệnh tật.", level: 2 },
            { word: "medicine", phonetic: "/ˈmed.ɪ.sən/", meaning: "thuốc", example: "Take this medicine.", usage: "Điều trị.", level: 2 },
            { word: "stomach ache", phonetic: "/ˈstʌm.ək eɪk/", meaning: "đau bụng", example: "I ate too much and got a stomach ache.", usage: "Bệnh tật.", level: 2 },
            { word: "healthy", phonetic: "/ˈhel.θi/", meaning: "lành mạnh", example: "Eat healthy food.", usage: "Tính từ.", level: 2 },
            { word: "exercise", phonetic: "/ˈek.sə.saɪz/", meaning: "tập thể dục", example: "Exercise daily.", usage: "Thói quen.", level: 2 },
            { word: "tired", phonetic: "/taɪəd/", meaning: "mệt mỏi", example: "I feel very tired.", usage: "Cảm giác.", level: 2 },
            { word: "dentist", phonetic: "/ˈden.tɪst/", meaning: "nha sĩ", example: "Visit the dentist.", usage: "Nghề nghiệp.", level: 2 }
        ]
    },
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
        "A2": [
            { word: "delicious", phonetic: "/dɪˈlɪʃ.əs/", meaning: "ngon", example: "This meal is delicious.", usage: "Mô tả vị giác.", level: 2 },
            { word: "spicy", phonetic: "/ˈspaɪ.si/", meaning: "cay", example: "I like spicy food.", usage: "Vị giác.", level: 2 },
            { word: "salty", phonetic: "/ˈsuːl.ti/", meaning: "mặn", example: "The soup is too salty.", usage: "Vị giác.", level: 2 },
            { word: "sweet", phonetic: "/swiːt/", meaning: "ngọt", example: "This cake is very sweet.", usage: "Vị giác.", level: 2 },
            { word: "vegetarian", phonetic: "/ˌvedʒ.ɪˈteə.ri.ən/", meaning: "chay", example: "I am a vegetarian.", usage: "Chế độ ăn.", level: 2 },
            { word: "dessert", phonetic: "/dɪˈzɜːt/", meaning: "tráng miệng", example: "Ice cream for dessert.", usage: "Loại món.", level: 2 },
            { word: "main course", phonetic: "/ˌmeɪn ˈkɔːs/", meaning: "món chính", example: "The main course was steak.", usage: "Loại món.", level: 2 },
            { word: "starter", phonetic: "/ˈstɑː.tər/", meaning: "món khai vị", example: "We ordered soup as a starter.", usage: "Loại món.", level: 2 },
            { word: "waiter", phonetic: "/ˈweɪ.tər/", meaning: "bồi bàn (nam)", example: "The waiter brought the menu.", usage: "Nghề nghiệp.", level: 2 },
            { word: "recommend", phonetic: "/ˌrek.əˈmend/", meaning: "gợi ý", example: "What do you recommend?", usage: "Hỏi ý kiến.", level: 2 }
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
    "Dự định tương lai": {
        "A2": [
            { word: "tomorrow", phonetic: "/təˈmɒr.əʊ/", meaning: "ngày mai", example: "I will see you tomorrow.", usage: "Thời gian.", level: 2 },
            { word: "weekend", phonetic: "/ˌwiːkˈend/", meaning: "cuối tuần", example: "What are you doing this weekend?", usage: "Thời gian.", level: 2 },
            { word: "vacation", phonetic: "/veɪˈkeɪ.ʃən/", meaning: "kỳ nghỉ", example: "We are going on vacation.", usage: "Du lịch.", level: 2 },
            { word: "flight", phonetic: "/flaɪt/", meaning: "chuyến bay", example: "My flight is at 9 PM.", usage: "Di chuyển.", level: 2 },
            { word: "ticket", phonetic: "/ˈtɪk.ɪt/", meaning: "vé", example: "I booked a ticket.", usage: "Mua sắm/Du lịch.", level: 2 },
            { word: "arrive", phonetic: "/əˈraɪv/", meaning: "đến nơi", example: "When do you arrive?", usage: "Di chuyển.", level: 2 },
            { word: "leave", phonetic: "/liːv/", meaning: "rời đi", example: "The train leaves at 5.", usage: "Di chuyển.", level: 2 },
            { word: "stay", phonetic: "/steɪ/", meaning: "ở lại/lưu trú", example: "We will stay at a hotel.", usage: "Du lịch.", level: 2 },
            { word: "visit", phonetic: "/ˈvɪz.ɪt/", meaning: "thăm", example: "I am going to visit my grandma.", usage: "Hoạt động.", level: 2 },
            { word: "picnic", phonetic: "/ˈpɪk.nɪk/", meaning: "dã ngoại", example: "Let's go for a picnic.", usage: "Hoạt động.", level: 2 }
        ]
    },
    "Dịch vụ công cộng": {
        "A2": [
            { word: "bank", phonetic: "/bæŋk/", meaning: "ngân hàng", example: "I need to go to the bank.", usage: "Địa điểm.", level: 2 },
            { word: "post office", phonetic: "/ˈpəʊst ˌɒf.ɪs/", meaning: "bưu điện", example: "Where is the post office?", usage: "Địa điểm.", level: 2 },
            { word: "library", phonetic: "/ˈlaɪ.brər.i/", meaning: "thư viện", example: "Silence in the library.", usage: "Địa điểm.", level: 2 },
            { word: "hospital", phonetic: "/ˈhɒs.pɪ.təl/", meaning: "bệnh viện", example: "He is in the hospital.", usage: "Địa điểm.", level: 2 },
            { word: "pharmacy", phonetic: "/ˈfɑː.mə.si/", meaning: "hiệu thuốc", example: "Buy medicine at the pharmacy.", usage: "Địa điểm.", level: 2 },
            { word: "account", phonetic: "/əˈkaʊnt/", meaning: "tài khoản", example: "I want to open an account.", usage: "Ngân hàng.", level: 2 },
            { word: "parcel", phonetic: "/ˈpɑː.səl/", meaning: "bưu kiện", example: "I want to send a parcel.", usage: "Bưu điện.", level: 2 },
            { word: "stamp", phonetic: "/stæmp/", meaning: "tem", example: "Put a stamp on the envelope.", usage: "Bưu điện.", level: 2 },
            { word: "borrow", phonetic: "/ˈbɒr.əʊ/", meaning: "mượn", example: "Can I borrow this book?", usage: "Thư viện.", level: 2 },
            { word: "police station", phonetic: "/pəˈliːs ˌsteɪ.ʃən/", meaning: "đồn cảnh sát", example: "Call the police station.", usage: "Địa điểm.", level: 2 }
        ]
    },
    "Công nghệ & Truyền thông": {
        "A2": [
            { word: "computer", phonetic: "/kəmˈpjuː.tər/", meaning: "máy tính", example: "I work on my computer.", usage: "Thiết bị.", level: 2 },
            { word: "smartphone", phonetic: "/ˈsmɑːt.fəʊn/", meaning: "điện thoại thông minh", example: "She has a new smartphone.", usage: "Thiết bị.", level: 2 },
            { word: "laptop", phonetic: "/ˈlæp.tɒp/", meaning: "máy tính xách tay", example: "My laptop is light.", usage: "Thiết bị.", level: 2 },
            { word: "internet", phonetic: "/ˈɪn.tə.net/", meaning: "mạng internet", example: "Connect to the internet.", usage: "Kết nối.", level: 2 },
            { word: "website", phonetic: "/ˈweb.saɪt/", meaning: "trang web", example: "Visit our website.", usage: "Internet.", level: 2 },
            { word: "wifi", phonetic: "/ˈwaɪ.faɪ/", meaning: "mạng không dây", example: "Is there free wifi?", usage: "Kết nối.", level: 2 },
            { word: "app", phonetic: "/æp/", meaning: "ứng dụng", example: "Download this app.", usage: "Phần mềm.", level: 2 },
            { word: "battery", phonetic: "/ˈbæt.ər.i/", meaning: "pin", example: "My battery is low.", usage: "Phần cứng.", level: 2 },
            { word: "keyboard", phonetic: "/ˈkiː.bɔːd/", meaning: "bàn phím", example: "Type on the keyboard.", usage: "Phần cứng.", level: 2 },
            { word: "mouse", phonetic: "/maʊs/", meaning: "con chuột", example: "Click the mouse.", usage: "Phần cứng.", level: 2 }
        ]
    },
    "Thời tiết & Môi trường": {
        "A2": [
            { word: "sunny", phonetic: "/ˈsʌn.i/", meaning: "nắng", example: "It is sunny today.", usage: "Thời tiết.", level: 2 },
            { word: "rainy", phonetic: "/ˈreɪ.ni/", meaning: "mưa", example: "I hate rainy days.", usage: "Thời tiết.", level: 2 },
            { word: "cloudy", phonetic: "/ˈklaʊ.di/", meaning: "có mây", example: "It is cloudy.", usage: "Thời tiết.", level: 2 },
            { word: "windy", phonetic: "/ˈwɪn.di/", meaning: "có gió", example: "It is very windy.", usage: "Thời tiết.", level: 2 },
            { word: "storm", phonetic: "/stɔːm/", meaning: "bão", example: "A storm is coming.", usage: "Thời tiết.", level: 2 },
            { word: "fog", phonetic: "/fɒɡ/", meaning: "sương mù", example: "Thick fog.", usage: "Thời tiết.", level: 2 },
            { word: "hot", phonetic: "/hɒt/", meaning: "nóng", example: "It is hot in summer.", usage: "Nhiệt độ.", level: 2 },
            { word: "cold", phonetic: "/kəʊld/", meaning: "lạnh", example: "It is cold in winter.", usage: "Nhiệt độ.", level: 2 },
            { word: "environment", phonetic: "/ɪnˈvaɪ.rən.mənt/", meaning: "môi trường", example: "Protect the environment.", usage: "Tự nhiên.", level: 2 },
            { word: "pollution", phonetic: "/pəˈluː.ʃən/", meaning: "ô nhiễm", example: "Air pollution is bad.", usage: "Vấn đề.", level: 2 }
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
        ],
        "A2": [
            { word: "clothes", phonetic: "/kləʊðz/", meaning: "quần áo", example: "I need new clothes.", usage: "Chung.", level: 2 },
            { word: "shirt", phonetic: "/ʃɜːt/", meaning: "áo sơ mi", example: "A white shirt.", usage: "Trang phục.", level: 2 },
            { word: "pants", phonetic: "/pænts/", meaning: "quần dài", example: "Black pants.", usage: "Trang phục.", level: 2 },
            { word: "dress", phonetic: "/dres/", meaning: "váy liền", example: "She wears a red dress.", usage: "Trang phục.", level: 2 },
            { word: "shoes", phonetic: "/ʃuːz/", meaning: "giày", example: "Running shoes.", usage: "Phụ kiện.", level: 2 },
            { word: "size", phonetic: "/saɪz/", meaning: "kích cỡ", example: "What is your size?", usage: "Mua sắm.", level: 2 },
            { word: "fit", phonetic: "/fɪt/", meaning: "vừa vặn", example: "It fits me well.", usage: "Mặc thử.", level: 2 },
            { word: "try on", phonetic: "/traɪ ɒn/", meaning: "mặc thử", example: "Can I try it on?", usage: "Hành động.", level: 2 },
            { word: "customer", phonetic: "/ˈkʌs.tə.mər/", meaning: "khách hàng", example: "The customer is always right.", usage: "Người mua.", level: 2 },
            { word: "cashier", phonetic: "/kæˈʃɪər/", meaning: "thu ngân", example: "Pay at the cashier.", usage: "Thanh toán.", level: 2 }
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
            { word: "cinema", phonetic: "/ˈsɪn.ə.mə/", meaning: "rạp chiếu phim", example: "Watch a movie at the cinema.", usage: "Giải trí.", level: 1 }
        ],
        "A2": [
            { word: "ancient", phonetic: "/ˈeɪn.ʃənt/", meaning: "cổ kính", example: "Hanoi has an ancient quarter.", usage: "Mô tả lịch sử.", level: 2 },
            { word: "modern", phonetic: "/ˈmɒd.ən/", meaning: "hiện đại", example: "This is a modern building.", usage: "Mô tả kiến trúc.", level: 2 },
            { word: "peaceful", phonetic: "/ˈpiːs.fəl/", meaning: "yên bình", example: "The village is peaceful.", usage: "Mô tả không khí.", level: 2 },
            { word: "noisy", phonetic: "/ˈnɔɪ.zi/", meaning: "ồn ào", example: "The street is very noisy.", usage: "Mô tả âm thanh.", level: 2 },
            { word: "market", phonetic: "/ˈmɑː.kɪt/", meaning: "chợ truyền thống", example: "Buy food at the market.", usage: "Địa điểm.", level: 2 },
            { word: "pagoda", phonetic: "/pəˈɡəʊ.də/", meaning: "chùa", example: "Visit the pagoda.", usage: "Tôn giáo.", level: 2 },
            { word: "scenery", phonetic: "/ˈsiː.nər.i/", meaning: "phong cảnh", example: "The scenery is beautiful.", usage: "Thiên nhiên.", level: 2 },
            { word: "atmosphere", phonetic: "/ˈæt.məs.fɪər/", meaning: "bầu không khí", example: "Fresh atmosphere.", usage: "Cảm giác.", level: 2 },
            { word: "famous", phonetic: "/ˈfeɪ.məs/", meaning: "nổi tiếng", example: "Ha Long Bay is famous.", usage: "Đặc điểm.", level: 2 },
            { word: "local", phonetic: "/ˈləʊ.kəl/", meaning: "địa phương", example: "Eat local food.", usage: "Đặc trưng.", level: 2 }
        ]
    },
    "Giao thông & Đi lại": {
        "A2": [
            { word: "vehicle", phonetic: "/ˈviː.ə.kəl/", meaning: "phương tiện", example: "Motorbikes remain the most popular vehicle.", usage: "Chung.", level: 2 },
            { word: "traffic jam", phonetic: "/ˈtræf.ɪk dʒæm/", meaning: "tắc đường", example: "I was stuck in a traffic jam.", usage: "Giao thông.", level: 2 },
            { word: "public transport", phonetic: "/ˌpʌb.lɪk ˈtræn.spɔːt/", meaning: "giao thông công cộng", example: "I use public transport.", usage: "Di chuyển.", level: 2 },
            { word: "fare", phonetic: "/feər/", meaning: "giá vé", example: "Bus fare is cheap.", usage: "Chi phí.", level: 2 },
            { word: "passenger", phonetic: "/ˈpæs.ən.dʒər/", meaning: "hành khách", example: "The bus was full of passengers.", usage: "Người đi xe.", level: 2 },
            { word: "station", phonetic: "/ˈsteɪ.ʃən/", meaning: "nhà ga/bến xe", example: "Meet me at the station.", usage: "Địa điểm.", level: 2 },
            { word: "platform", phonetic: "/ˈplæt.fɔːm/", meaning: "sân ga", example: "The train departs from platform 3.", usage: "Tàu hỏa.", level: 2 },
            { word: "depart", phonetic: "/dɪˈpɑːt/", meaning: "khởi hành", example: "The plane departs at 9 AM.", usage: "Lịch trình.", level: 2 },
            { word: "arrive", phonetic: "/əˈraɪv/", meaning: "đến nơi", example: "We arrived late.", usage: "Lịch trình.", level: 2 },
            { word: "helmet", phonetic: "/ˈhel.mət/", meaning: "mũ bảo hiểm", example: "Wear a helmet.", usage: "An toàn.", level: 2 }
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
        "A2": [
            { name: "Would like", formula: "S + would like + N/to V", explanation: "Diễn tả mong muốn lịch sự.", example: "I would like a menu, please.", note: "Lịch sự hơn 'want'." },
            { name: "Countable / Uncountable Nouns", formula: "a/an/some + N", explanation: "Danh từ đếm được và không đếm được.", example: "Some water, an apple.", note: "Phân biệt danh từ." },
            { name: "How much / How many", formula: "How much + Uncountable / How many + Countable", explanation: "Hỏi số lượng.", example: "How much is it? How many apples?", note: "Hỏi lượng." },
            { name: "Any / Some", formula: "Some (+), Any (-/?)", explanation: "Dùng trong câu khẳng định/phủ định/nghi vấn.", example: "Do you have any sugar?", note: "Lượng từ." }
        ],
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


    "Sức khỏe": {
        "A2": [
            { name: "Imperatives (Lời khuyên)", formula: "V / Don't V", explanation: "Đưa ra lời khuyên hoặc hướng dẫn.", example: "Drink more water. Don't eat fast food.", note: "Khuyên nhủ." },
            { name: "Modal Verbs: Should / Shouldn't", formula: "S + should + V", explanation: "Khuyên ai đó nên/không nên làm gì.", example: "You should see a doctor.", note: "Lời khuyên." },
            { name: "Have / Has + Illness", formula: "S + have/has + N (bệnh)", explanation: "Mô tả bệnh tật.", example: "I have a headache.", note: "Mô tả." },
            { name: "Must / Mustn't", formula: "S + must + V", explanation: "Sự bắt buộc hoặc cần thiết.", example: "You must take this medicine.", note: "Bắt buộc." }
        ]
    },
    "Thói quen hàng ngày": {
        "A1": [
            { name: "Hiện tại đơn (Thói quen)", formula: "S + V(s/es)", explanation: "Diễn tả thói quen lặp đi lặp lại.", example: "I usually get up early.", note: "Thói quen." },
            { name: "Trạng từ tần suất", formula: "always, usually, often, sometimes, never", explanation: "Mức độ thường xuyên.", example: "I never smoke.", note: "Đứng trước động từ thường." },
            { name: "Giới từ thời gian (at)", formula: "at + time", explanation: "Chỉ giờ giấc cụ thể.", example: "I start at 8 AM.", note: "Giờ giấc." }
        ]
    },
    "Dự định tương lai": {
        "A2": [
            { name: "Be going to", formula: "S + am/is/are + going to + V", explanation: "Diễn tả dự định hoặc kế hoạch trong tương lai gần.", example: "I am going to visit Paris.", note: "Dự định." },
            { name: "Present Continuous (Future)", formula: "S + am/is/are + V-ing + time", explanation: "Diễn tả kế hoạch đã được sắp xếp cố định.", example: "We are meeting at 7 PM.", note: "Kế hoạch chắc chắn." },
            { name: "Prepositions of Time", formula: "on + day, in + month/year, at + time", explanation: "Giới từ chỉ thời gian cho kế hoạch.", example: "On Monday, in 2024.", note: "Thời gian." }
        ]
    },
    "Dịch vụ công cộng": {
        "A2": [
            { name: "Polite Requests", formula: "Could you / Would you / Can I + V?", explanation: "Cách yêu cầu lịch sự.", example: "Could you help me?", note: "Lịch sự." },
            { name: "Prepositions of Place", formula: "Review: next to, between, opposite", explanation: "Ôn tập giới từ chỉ vị trí để tìm dịch vụ.", example: "The bank is next to the post office.", note: "Vị trí." },
            { name: "May I", formula: "May I + V?", explanation: "Xin phép làm gì một cách trang trọng.", example: "May I sit here?", note: "Trang trọng." }
        ]
    },
    "Công nghệ & Truyền thông": {
        "A2": [
            { name: "Zero Conditional", formula: "If + S + V(s/es), S + V(s/es)", explanation: "Diễn tả sự thật hiển nhiên hoặc hướng dẫn kỹ thuật.", example: "If you press this button, it starts.", note: "Sự thật/Hướng dẫn." },
            { name: "Imperatives (Review)", formula: "V / Don't V", explanation: "Mệnh lệnh thức dùng để hướng dẫn sử dụng.", example: "Click on the icon.", note: "Hướng dẫn." }
        ]
    },
    "Kể về bạn thân": {
        "A1": [{ name: "Hiện tại đơn", formula: "S + V(s/es)", explanation: "Kể về thói quen của bạn.", example: "He plays soccer.", note: "Mô tả." }]
    },
    "Hoạt động cuối tuần": {
        "A1": [{ name: "Giới từ thời gian (on)", formula: "on + day", explanation: "Chỉ thời gian.", example: "On Sunday, I rest.", note: "Lịch trình." }]
    },
    "Mua sắm": {
        "A1": [{ name: "Want + to V", formula: "S + want + to V", explanation: "Diễn tả mong muốn mua gì.", example: "I want to buy a hat.", note: "Mua bán." }],
        "A2": [
            { name: "Too / Enough", formula: "Too + Adj / Adj + enough", explanation: "Quá... / Đủ... để làm gì.", example: "It is too expensive. It isn't big enough.", note: "Diễn tả mức độ." },
            { name: "Order of Adjectives", formula: "Opinion - Size - Age - Color - Origin - Material", explanation: "Trật tự tính từ trước danh từ.", example: "A beautiful new red dress.", note: "Op-S-A-C-O-M." },
            { name: "Comparison of Price", formula: "Price + is + higher/lower than...", explanation: "So sánh giá cả.", example: "This shirt is cheaper than that one.", note: "So sánh." }
        ]
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
        "A2": [
            { name: "Comparative Adjectives", formula: "S + be + Adj-er / more Adj + than...", explanation: "So sánh hơn để mô tả sự khác biệt giữa hai địa điểm.", example: "Hanoi is older than Da Nang.", note: "Tính từ ngắn thêm -er, dài thêm more." },
            { name: "Superlative Adjectives", formula: "S + be + the + Adj-est / most Adj...", explanation: "So sánh nhất để chỉ đặc điểm nổi bật.", example: "This is the most beautiful city.", note: "Dùng tính từ ngắn/dài." },
            { name: "There is / There are (Quantifiers)", formula: "There is + a/an/some... There are + many...", explanation: "Mô tả những gì có ở địa điểm đó.", example: "There are many tall buildings.", note: "Số ít/nhiều." },
            { name: "Prepositions of Place (Adv)", formula: "opposite, between, next to, in front of", explanation: "Giới từ chỉ vị trí chính xác.", example: "The bank is opposite the park.", note: "Chỉ đường." }
        ]
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

    "Thể thao yêu thích": {
        "A1": [{ name: "Present Simple", formula: "S + V(s/es)", explanation: "Nói về sở thích.", example: "I play soccer.", note: "Thói quen." }]
    },
    "Âm nhạc và phim ảnh": {
        "A1": [{ name: "Like + Noun", formula: "S + like + N", explanation: "Thích cái gì.", example: "I like pop music.", note: "Sở thích." }]
    },
    "Danh lam thắng cảnh": {
        "A1": [{ name: "There is/are", formula: "There is + a/an + N", explanation: "Mô tả cảnh vật.", example: "There is a mountain.", note: "Mô tả." }]
    },
    "Giao thông & Đi lại": {
        "A1": [{ name: "By + vehicle", formula: "Go by + Car/Bus", explanation: "Đi bằng phương tiện gì.", example: "I go by bus.", note: "Phương tiện." }],
        "A2": [
            { name: "Should/Shouldn't", formula: "S + should + V", explanation: "Đưa ra lời khuyên về giao thông.", example: "You should take a taxi.", note: "Khuyên nhủ." },
            { name: "Hỏi và chỉ đường (Chi tiết)", formula: "Could you tell me the way to...", explanation: "Hỏi đường lịch sự.", example: "Could you tell me the way to the station?", note: "Lịch sự." },
            { name: "Giới từ chỉ chuyển động", formula: "along, across, through, past", explanation: "Mô tả hướng đi chi tiết.", example: "Go along the river and go through the park.", note: "Chỉ đường." }
        ]
    },
    "Khách sạn": { "A1": [{ name: "I would like", formula: "I would like + to V", explanation: "Muốn làm gì.", example: "I would like to check in.", note: "Lịch sự." }] },
    "Phỏng vấn & Xin việc": { "A1": [{ name: "Can", formula: "I can + V", explanation: "Nói về khả năng.", example: "I can use Office.", note: "Kỹ năng." }] },
    "Họp hành & Thuyết trình": { "A1": [{ name: "Let's", formula: "Let's + V", explanation: "Rủ rê, đề nghị.", example: "Let's start.", note: "Gợi ý." }] },
    "Giao tiếp văn phòng": { "A1": [{ name: "Have to", formula: "I have to + V", explanation: "Phải làm gì.", example: "I have to send email.", note: "Bắt buộc." }] },
    "Nhà cửa & Đời sống": { "A1": [{ name: "Prepositions", formula: "In/On/At", explanation: "Giới từ chỉ nơi chốn.", example: "In the kitchen.", note: "Vị trí." }] },
    "Mua sắm & Ăn uống": { "A1": [{ name: "How much", formula: "How much is + N?", explanation: "Hỏi giá.", example: "How much is it?", note: "Mua bán." }] },
    "Tình huống khẩn cấp": { "A1": [{ name: "Imperatives", formula: "Call + N!", explanation: "Mệnh lệnh thức.", example: "Call the police!", note: "Khẩn cấp." }] },


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
        "A2": [
            { en: "Waiter: Good evening. Are you ready to order?", vi: "PV: Chào buổi tối. Quý khách đã sẵn sàng gọi món chưa?" },
            { en: "Customer: Yes, I would like the menu, please.", vi: "Khách: Vâng, làm ơn cho tôi xem thực đơn." },
            { en: "Waiter: Here you are. Today's special is grilled steak.", vi: "PV: Của quý khách đây. Món đặc biệt hôm nay là bò bít tết nướng." },
            { en: "Customer: Sounds delicious. I'll have the steak and a salad.", vi: "Khách: Nghe ngon đấy. Tôi sẽ ăn bít tết và sa lát." },
            { en: "Waiter: Would you like anything to drink?", vi: "PV: Quý khách có muốn uống gì không?" },
            { en: "Customer: Just some water, please. No ice.", vi: "Khách: Chỉ một chút nước thôi. Không đá." },
            { en: "Waiter: Certainy. I'll be right back.", vi: "PV: Chắc chắn rồi. Tôi sẽ quay lại ngay." }
        ],
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
        "A1": [{ en: "A: Can I help you?", vi: "A: Tôi giúp gì được không?" }, { en: "B: Just looking.", vi: "B: Tôi chỉ xem thôi." }],
        "A2": [
            { en: "Shop Assistant: Hello, can I help you find something?", vi: "NV: Xin chào, tôi có thể giúp bạn tìm gì không?" },
            { en: "Customer: Yes, I'm looking for a white shirt.", vi: "Khách: Vâng, tôi đang tìm một chiếc áo sơ mi trắng." },
            { en: "Shop Assistant: What is your size?", vi: "NV: Cỡ của bạn là gì?" },
            { en: "Customer: I think I am a medium.", vi: "Khách: Tôi nghĩ tôi mặc cỡ vừa." },
            { en: "Shop Assistant: Here is a nice one in medium. Would you like to try it on?", vi: "NV: Đây là một chiếc rất đẹp cỡ vừa. Bạn có muốn thử không?" },
            { en: "Customer: Yes, please. Where is the fitting room?", vi: "Khách: Có ạ. Phòng thử đồ ở đâu?" },
            { en: "Shop Assistant: It's over there, behind the mirror.", vi: "NV: Nó ở đằng kia, sau chiếc gương." },
            { en: "Customer: It fits perfectly. How much is it?", vi: "Khách: Nó vừa in. Giá bao nhiêu vậy?" },
            { en: "Shop Assistant: It's $25.", vi: "NV: 25 đô la ạ." },
            { en: "Customer: Okay, I'll take it.", vi: "Khách: Được, tôi sẽ lấy nó." }
        ]
    },
    "Sức khỏe": {
        "A2": [
            { en: "Doctor: Good morning. What's the matter with you?", vi: "BS: Chào buổi sáng. Bạn bị sao vậy?" },
            { en: "Patient: I have a terrible headache and a sore throat.", vi: "BN: Tôi bị đau đầu dữ dội và đau họng." },
            { en: "Doctor: Let me check. Open your mouth, please.", vi: "BS: Để tôi kiểm tra. Hãy mở miệng ra." },
            { en: "Patient: Ahhh...", vi: "BN: Ahhh..." },
            { en: "Doctor: You have a bad cold. You should take this medicine and rest for 3 days.", vi: "BS: Bạn bị cảm nặng. Bạn nên uống thuốc này và nghỉ ngơi 3 ngày." },
            { en: "Patient: Should I go to work tomorrow?", vi: "BN: Tôi có nên đi làm ngày mai không?" },
            { en: "Doctor: No, you shouldn't. You must stay in bed.", vi: "BS: Không, bạn không nên. Bạn bắt buộc phải nằm nghỉ trên giường." },
            { en: "Patient: Okay, thank you doctor.", vi: "BN: Vâng, cảm ơn bác sĩ." }
        ]
    },

    "Việc nhà": {
        "A1": [{ en: "A: Did you clean the room?", vi: "A: Bạn dọn phòng chưa?" }, { en: "B: Not yet.", vi: "B: Chưa." }]
    },
    "Thuê nhà": {
        "B1": [{ en: "A: Is the room available?", vi: "A: Phòng còn trống không?" }, { en: "B: Yes, it is.", vi: "B: Còn." }]
    },
    // --- ADDED MISSING SCENARIOS ---
    "Thể thao yêu thích": {
        "A1": [
            { en: "A: Do you like sports?", vi: "A: Bạn thích thể thao không?" },
            { en: "B: Yes, I like soccer.", vi: "B: Có, tôi thích bóng đá." }
        ]
    },
    "Âm nhạc và phim ảnh": {
        "A1": [
            { en: "A: What kind of music do you like?", vi: "A: Bạn thích loại nhạc nào?" },
            { en: "B: I like pop music.", vi: "B: Tôi thích nhạc pop." }
        ]
    },
    "Danh lam thắng cảnh": {
        "A1": [
            { en: "A: This temple is beautiful.", vi: "A: Ngôi đền này đẹp quá." },
            { en: "B: Yes, it is very famous.", vi: "B: Đúng vậy, nó rất nổi tiếng." }
        ]
    },
    "Giao thông & Đi lại": {
        "A1": [
            { en: "A: How do you go to work?", vi: "A: Bạn đi làm bằng gì?" },
            { en: "B: I go by motorbike.", vi: "B: Tôi đi bằng xe máy." }
        ],
        "A2": [
            { en: "A: Excuse me, which bus goes to the city center?", vi: "A: Xin lỗi, xe buýt nào đi vào trung tâm thành phố?" },
            { en: "B: You should take number 32.", vi: "B: Bạn nên bắt xe số 32." },
            { en: "A: How often does it run?", vi: "A: Bao lâu thì có một chuyến?" },
            { en: "B: Every 15 minutes.", vi: "B: Mỗi 15 phút." },
            { en: "A: Thank you. How much is the fare?", vi: "A: Cảm ơn. Giá vé bao nhiêu?" },
            { en: "B: It's 7000 dong.", vi: "B: 7000 đồng." }
        ]
    },
    "Khách sạn": {
        "A1": [
            { en: "A: I'd like to check in.", vi: "A: Tôi muốn nhận phòng." },
            { en: "B: Certainly. May I have your ID?", vi: "B: Chắc chắn rồi. Cho tôi xem giấy tờ tùy thân được không?" }
        ]
    },
    "Phỏng vấn & Xin việc": {
        "A1": [
            { en: "A: Tell me about yourself.", vi: "A: Hãy giới thiệu về bản thân bạn." },
            { en: "B: I am hard-working.", vi: "B: Tôi là người chăm chỉ." }
        ]
    },
    "Họp hành & Thuyết trình": {
        "A1": [
            { en: "A: Let's start the meeting.", vi: "A: Chúng ta bắt đầu cuộc họp nhé." },
            { en: "B: I agree.", vi: "B: Tôi đồng ý." }
        ]
    },
    "Giao tiếp văn phòng": {
        "A1": [
            { en: "A: Did you see the email?", vi: "A: Bạn đã xem email chưa?" },
            { en: "B: No, not yet.", vi: "B: Chưa, tôi chưa xem." }
        ]
    },
    "Nhà cửa & Đời sống": {
        "A1": [
            { en: "A: Where is the kitchen?", vi: "A: Nhà bếp ở đâu?" },
            { en: "B: It's over there.", vi: "B: Nó ở đằng kia." }
        ]
    },
    "Mua sắm & Ăn uống": {
        "A1": [
            { en: "A: How much is this?", vi: "A: Cái này bao nhiêu tiền?" },
            { en: "B: It's 5 dollars.", vi: "B: Nó giá 5 đô la." }
        ]
    },
    "Tình huống khẩn cấp": {
        "A1": [
            { en: "A: Help me!", vi: "A: Cứu tôi với!" },
            { en: "B: I will call the police.", vi: "B: Tôi sẽ gọi cảnh sát." }
        ]
    },

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
        "A2": [
            { en: "Sarah: Excuse me, can you tell me the way to the Ho Chi Minh Museum?", vi: "Sarah: Xin lỗi, bạn có thể chỉ đường cho tôi đến Bảo tàng Hồ Chí Minh không?" },
            { en: "Nam: Yes, of course. Go straight along this street, then turn left at the traffic light.", vi: "Nam: Vâng, tất nhiên. Đi thẳng dọc con phố này, sau đó rẽ trái ở đèn giao thông." },
            { en: "Sarah: Is it far from here?", vi: "Sarah: Nó có xa đây không?" },
            { en: "Nam: No, it's about 10 minutes on foot. It is next to the One Pillar Pagoda.", vi: "Nam: Không, đi bộ khoảng 10 phút. Nó nằm cạnh Chùa Một Cột." },
            { en: "Sarah: Oh, I know that pagoda. It is very ancient and beautiful.", vi: "Sarah: Ồ, tôi biết chùa đó. Nó rất cổ kính và đẹp." },
            { en: "Nam: Yes. There are also many nice cafes in that area.", vi: "Nam: Đúng vậy. Cũng có nhiều quán cà phê đẹp ở khu vực đó." },
            { en: "Sarah: Thank you very much.", vi: "Sarah: Cảm ơn bạn rất nhiều." },
            { en: "Nam: You're welcome. Enjoy your visit!", vi: "Nam: Không có chi. Chúc bạn tham quan vui vẻ!" }
        ]
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


    "Dự định tương lai": {
        "A2": [
            { en: "A: What are you going to do this weekend?", vi: "A: Bạn định làm gì cuối tuần này?" },
            { en: "B: I am going to visit my grandparents.", vi: "B: Tôi định đi thăm ông bà." },
            { en: "A: When are you leaving?", vi: "A: Khi nào bạn đi?" },
            { en: "B: I'm leaving on Saturday morning.", vi: "B: Tôi đi vào sáng thứ Bảy." },
            { en: "A: How are you getting there?", vi: "A: Bạn đến đó bằng gì?" },
            { en: "B: We are going by car.", vi: "B: Chúng tôi đi bằng ô tô." }
        ]
    },
    "Dịch vụ công cộng": {
        "A2": [
            { en: "A: Good morning. I'd like to send this parcel to Da Nang.", vi: "A: Chào buổi sáng. Tôi muốn gửi bưu kiện này đi Đà Nẵng." },
            { en: "B: Certainly. Put it on the scale, please.", vi: "B: Chắc chắn rồi. Vui lòng đặt nó lên cân." },
            { en: "A: How much is it?", vi: "A: Bao nhiêu tiền vậy?" },
            { en: "B: It's 50,000 dong. Do you want express delivery?", vi: "B: 50,000 đồng. Bạn có muốn chuyển phát nhanh không?" },
            { en: "A: Yes, please. When will it arrive?", vi: "A: Có. Khi nào nó sẽ đến nơi?" },
            { en: "B: Tomorrow afternoon.", vi: "B: Chiều mai." }
        ]
    },
    "Công nghệ & Truyền thông": {
        "A2": [
            { en: "A: My laptop is not working.", vi: "A: Laptop của tôi không hoạt động." },
            { en: "B: What is the problem?", vi: "B: Vấn đề là gì?" },
            { en: "A: The screen is black.", vi: "A: Màn hình bị đen." },
            { en: "B: Have you tried restarting it?", vi: "B: Bạn đã thử khởi động lại chưa?" },
            { en: "A: No, not yet.", vi: "A: Chưa, tôi chưa thử." },
            { en: "B: Press the power button and hold it.", vi: "B: Nhấn nút nguồn và giữ nó." }
        ]
    },
    "Thời tiết & Môi trường": {
        "A2": [
            { en: "A: What is the weather like today?", vi: "A: Thời tiết hôm nay thế nào?" },
            { en: "B: It is sunny and hot.", vi: "B: Trời nắng và nóng." },
            { en: "A: What will the weather be like tomorrow?", vi: "A: Thời tiết ngày mai sẽ thế nào?" },
            { en: "B: The forecast says it will rain.", vi: "B: Dự báo nói trời sẽ mưa." },
            { en: "A: Oh no, we planned a picnic.", vi: "A: Ôi không, chúng tôi đã lên kế hoạch dã ngoại." },
            { en: "B: You should bring an umbrella.", vi: "B: Bạn nên mang theo ô." }
        ]
    }
};


import type { PracticeExercise } from "../../../domain/learning/entities/PracticeMaterial";

export const getExpandedData = (scenario: string, level: string) => {
    let key = "A1";
    if (level === "A2") key = "A2";
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
                },
                // 5. Fill-blank
                {
                    id: "u2_q5",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'My father is a ______.' (Bác sĩ)",
                    explanation: "Bác sĩ trong tiếng Anh là Doctor.",
                    correctAnswer: "doctor",
                    options: ["doctor", "teacher", "farmer", "nurse"]
                },
                // 6. Listening (Mock)
                {
                    id: "u2_q6",
                    type: "listening",
                    question: "Nghe và chọn thành viên gia đình: 'This is my sister.'",
                    explanation: "Sister = Chị/Em gái.",
                    options: ["Brother", "Mother", "Sister", "Father"],
                    correctAnswer: "Sister",
                    audioUrl: "mock_family_sister.mp3"
                },
                // 7. Writing
                {
                    id: "u2_q7",
                    type: "writing",
                    question: "Viết lại câu: 'in / How / person / family / many / your /?'",
                    explanation: "Sắp xếp lại thành: How many person in your family?",
                    correctAnswer: "How many person in your family?"
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
                },
                // 6. Listening (Mock)
                {
                    id: "u3_q6",
                    type: "listening",
                    question: "Nghe và điền giá tiền: 'It is 5 dollars.'",
                    explanation: "5 dollars = 5 đô la.",
                    options: ["1 dollar", "5 dollars", "10 dollars", "2 dollars"],
                    correctAnswer: "5 dollars",
                    audioUrl: "mock_price_5.mp3"
                },
                // 7. Writing
                {
                    id: "u3_q7",
                    type: "writing",
                    question: "Viết câu hỏi giá: 'is / How / much / this?'",
                    explanation: "Cấu trúc: How much is this?",
                    correctAnswer: "How much is this?"
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
                },
                // 5. Fill-blank
                {
                    id: "u4_q5",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'I sleep in the ______.'",
                    explanation: "Nơi để ngủ là phòng ngủ (Bedroom).",
                    correctAnswer: "bedroom",
                    options: ["kitchen", "bedroom", "bathroom", "garden"]
                },
                // 6. Listening (Mock)
                {
                    id: "u4_q6",
                    type: "listening",
                    question: "Nghe và chọn phòng: 'I am cooking in the kitchen.'",
                    explanation: "Kitchen = Nhà bếp.",
                    options: ["Bedroom", "Living room", "Kitchen", "Bathroom"],
                    correctAnswer: "Kitchen",
                    audioUrl: "mock_kitchen.mp3"
                },
                // 7. Writing
                {
                    id: "u4_q7",
                    type: "writing",
                    question: "Viết câu mô tả: 'My / is / house / big.'",
                    explanation: "Cấu trúc: S + be + Adj.",
                    correctAnswer: "My house is big"
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
                },
                // 7. Fill-blank
                {
                    id: "u6_q7",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'She ______ to music.' (Cô ấy nghe nhạc)",
                    explanation: "Listen to music. Chia động từ số ít: listens.",
                    correctAnswer: "listens",
                    options: ["listen", "listens", "listening", "listened"]
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
                },
                // 7. Fill-blank
                {
                    id: "u7_q7",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'I am ______.' (Tôi đói)",
                    explanation: "Đói bụng là 'hungry'.",
                    correctAnswer: "hungry",
                    options: ["hungry", "thirsty", "full", "happy"]
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
                },
                // 7. Fill-blank
                {
                    id: "u8_q7",
                    type: "fill-blank",
                    question: "Điền giới từ: 'The hotel is ______ the bank.' (Khách sạn ở cạnh ngân hàng)",
                    explanation: "Next to = Ở cạnh.",
                    correctAnswer: "next to",
                    options: ["next to", "on", "in", "at"]
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
                },
                // 7. Fill-blank
                {
                    id: "u9_q7",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'He is a ______.' (Cảnh sát)",
                    explanation: "Cảnh sát là Police (officer).",
                    correctAnswer: "police",
                    options: ["police", "doctor", "teacher", "driver"]
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
                // 1. Matching (Verbs)
                {
                    id: "u10_q1",
                    type: "matching",
                    question: "Nối động từ quá khứ với hiện tại:",
                    explanation: "Động từ bất quy tắc.",
                    pairs: [
                        { id: "p1", left: "Go", right: "Went" },
                        { id: "p2", left: "Have", right: "Had" },
                        { id: "p3", left: "Eat", right: "Ate" },
                        { id: "p4", left: "See", right: "Saw" },
                        { id: "p5", left: "Buy", right: "Bought" }
                    ]
                },
                // 2. Multiple Choice (Was/Were)
                {
                    id: "u10_q2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: 'The party ______ fun.'",
                    options: ["was", "were", "is", "are"],
                    correctAnswer: "was",
                    explanation: "Party (số ít) dùng Was."
                },
                // 3. Ordering
                {
                    id: "u10_q3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'I visited my grandma yesterday.'",
                    explanation: "Câu kể quá khứ.",
                    segments: ["yesterday", "grandma", "my", "visited", "I"],
                    correctOrder: ["I", "visited", "my", "grandma", "yesterday"],
                    correctAnswer: "I visited my grandma yesterday"
                },
                // 4. Speaking
                {
                    id: "u10_q4",
                    type: "speaking",
                    question: "Hãy nói: 'It was a great holiday.'",
                    explanation: "Kể về kỳ nghỉ.",
                    correctAnswer: "It was a great holiday"
                },
                // 5. Listening (Mock)
                {
                    id: "u10_q5",
                    type: "listening",
                    question: "Nghe và chọn hoạt động: 'We went to the beach.'",
                    explanation: "Từ khóa: Beach (bãi biển).",
                    options: ["Mountain", "Beach", "City", "Park"],
                    correctAnswer: "Beach",
                    audioUrl: "mock_holiday.mp3"
                },
                // 6. Multiple Choice (Negative)
                {
                    id: "u10_q6",
                    type: "multiple-choice",
                    question: "Chọn câu phủ định đúng quá khứ:",
                    options: ["I didn't went.", "I didn't go.", "I not go.", "I don't go."],
                    correctAnswer: "I didn't go.",
                    explanation: "Did not + V (nguyên thể)."
                },
                // 7. Fill-blank
                {
                    id: "u10_q7",
                    type: "fill-blank",
                    question: "Điền từ còn thiếu: 'We ______ a party.' (Chúng tôi có một bữa tiệc)",
                    explanation: "Have a party -> Quá khứ: Had a party.",
                    correctAnswer: "had",
                    options: ["have", "has", "had", "having"]
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // A2 Scenarios

    // Specific logic for "Tại sân bay" (A2)
    if (scenario === "Tại sân bay") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Airport terms)
                {
                    id: "a2_airport_1",
                    type: "matching",
                    question: "Nối từ vựng sân bay:",
                    explanation: "Các thuật ngữ thường gặp ở sân bay.",
                    pairs: [
                        { id: "p1", left: "Passport", right: "Hộ chiếu" },
                        { id: "p2", left: "Boarding pass", right: "Thẻ lên máy bay" },
                        { id: "p3", left: "Gate", right: "Cổng ra máy bay" },
                        { id: "p4", left: "Luggage", right: "Hành lý" },
                        { id: "p5", left: "Delay", right: "Hoãn chuyến" }
                    ]
                },
                // 2. Ordering
                {
                    id: "a2_airport_2",
                    type: "ordering",
                    question: "Sắp xếp câu: 'Please show me your passport.'",
                    explanation: "Câu yêu cầu lịch sự.",
                    segments: ["passport", "your", "me", "show", "Please"],
                    correctOrder: ["Please", "show", "me", "your", "passport"],
                    correctAnswer: "Please show me your passport"
                },
                // 3. Multiple Choice (Check-in)
                {
                    id: "a2_airport_3",
                    type: "multiple-choice",
                    question: "Chọn câu đúng khi muốn gửi hành lý:",
                    options: ["I want to check in my bags.", "I want to buy bags.", "Where is the bag?", "My bag is heavy."],
                    correctAnswer: "I want to check in my bags.",
                    explanation: "Check in bags = Gửi hành lý ký gửi."
                },
                // 4. Speaking
                {
                    id: "a2_airport_4",
                    type: "speaking",
                    question: "Hãy nói: 'Where is Gate 5?'",
                    explanation: "Hỏi đường đến cổng số 5.",
                    correctAnswer: "Where is Gate 5"
                },
                // 5. Fill-blank
                {
                    id: "a2_airport_5",
                    type: "fill-blank",
                    question: "Điền từ: 'The flight is ______.' (Chuyến bay bị hoãn)",
                    explanation: "Hoãn = Delayed.",
                    correctAnswer: "delayed",
                    options: ["delayed", "early", "on time", "cancelled"]
                },
                // 6. Listening (Mock)
                {
                    id: "a2_airport_6",
                    type: "listening",
                    question: "Nghe thông báo: 'Last call for flight VN123.'",
                    explanation: "Last call = Lời kêu gọi cuối cùng.",
                    options: ["Boarding now", "Last call", "Flight cancelled", "Gate open"],
                    correctAnswer: "Last call",
                    audioUrl: "mock_airport_announcement.mp3"
                },
                // 7. Writing
                {
                    id: "a2_airport_7",
                    type: "writing",
                    question: "Viết câu hỏi: 'time / boarding / is / What?' (Mấy giờ lên máy bay?)",
                    explanation: "Boarding time = Giờ lên máy bay.",
                    correctAnswer: "What time is boarding?"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Mô tả địa điểm" (A2)
    if (scenario === "Mô tả địa điểm") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Adjectives)
                {
                    id: "a2_place_1",
                    type: "matching",
                    question: "Nối tính từ mô tả:",
                    explanation: "Tính từ dùng cho địa điểm.",
                    pairs: [
                        { id: "p1", left: "Crowded", right: "Đông đúc" },
                        { id: "p2", left: "Quiet", right: "Yên tĩnh" },
                        { id: "p3", left: "Modern", right: "Hiện đại" },
                        { id: "p4", left: "Historic", right: "Mang tính lịch sử" },
                        { id: "p5", left: "Beautiful", right: "Đẹp đẽ" }
                    ]
                },
                // 2. Multiple Choice (This/That)
                {
                    id: "a2_place_2",
                    type: "multiple-choice",
                    question: "Chọn từ đúng: '______ is a very old building.' (Đó là)",
                    options: ["That", "These", "Those", "Here"],
                    correctAnswer: "That",
                    explanation: "That dùng cho vật ở xa, số ít."
                },
                // 3. Ordering
                {
                    id: "a2_place_3",
                    type: "ordering",
                    question: "Sắp xếp câu: 'The park is near the river.'",
                    explanation: "Mô tả vị trí.",
                    segments: ["river", "the", "near", "is", "park", "The"],
                    correctOrder: ["The", "park", "is", "near", "the", "river"],
                    correctAnswer: "The park is near the river"
                },
                // 4. Speaking
                {
                    id: "a2_place_4",
                    type: "speaking",
                    question: "Hãy nói: 'It has a beautiful view.'",
                    explanation: "Mô tả cảnh đẹp.",
                    correctAnswer: "It has a beautiful view"
                },
                // 5. Fill-blank
                {
                    id: "a2_place_5",
                    type: "fill-blank",
                    question: "Điền từ: 'There ______ many shops here.'",
                    explanation: "Many shops (số nhiều) -> Are.",
                    correctAnswer: "are",
                    options: ["is", "are", "be", "was"]
                },
                // 6. Listening (Mock)
                {
                    id: "a2_place_6",
                    type: "listening",
                    question: "Nghe mô tả: 'The streets are very busy.'",
                    explanation: "Busy = Bận rộn, đông đúc.",
                    options: ["Quiet", "Busy", "Clean", "Dirty"],
                    correctAnswer: "Busy",
                    audioUrl: "mock_place_desc.mp3"
                },
                // 7. Writing
                {
                    id: "a2_place_7",
                    type: "writing",
                    question: "Viết câu: 'This / famous / city / is / a.' (Đây là một thành phố nổi tiếng)",
                    explanation: "S + V + Article + Adj + N.",
                    correctAnswer: "This is a famous city"
                },
                // 8. Multiple Choice (Prepositions)
                {
                    id: "a2_place_8",
                    type: "multiple-choice",
                    question: "The cafe is ______ the bank and the post office.",
                    options: ["between", "opposite", "next", "in"],
                    correctAnswer: "between",
                    explanation: "Between... and... = Ở giữa cái gì và cái gì."
                },
                // 9. Matching (Directions)
                {
                    id: "a2_place_9",
                    type: "matching",
                    question: "Nối hướng đi với ý nghĩa:",
                    explanation: "Từ vựng chỉ đường.",
                    pairs: [
                        { id: "p6", left: "Go straight", right: "Đi thẳng" },
                        { id: "p7", left: "Cross the street", right: "Qua đường" },
                        { id: "p8", left: "At the corner", right: "Ở góc đường" },
                        { id: "p9", left: "Turn back", right: "Quay lại" }
                    ]
                },
                // 10. Ordering (Comparatives)
                {
                    id: "a2_place_10",
                    type: "ordering",
                    question: "Sắp xếp câu: 'smaller / Hanoi / than / is / HCMC.'",
                    explanation: "So sánh hơn: S1 + is + Adj-er + than + S2.",
                    segments: ["than", "HCMC", "smaller", "Hanoi", "is"],
                    correctOrder: ["Hanoi", "is", "smaller", "than", "HCMC"],
                    correctAnswer: "Hanoi is smaller than HCMC"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Hỏi thông tin du lịch" (A2)
    if (scenario === "Hỏi thông tin du lịch") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Questions)
                {
                    id: "a2_travel_1",
                    type: "matching",
                    question: "Nối câu hỏi và ý nghĩa:",
                    explanation: "Các câu hỏi thường gặp khi du lịch.",
                    pairs: [
                        { id: "p1", left: "Where is...?", right: "...ở đâu?" },
                        { id: "p2", left: "How far is...?", right: "...bao xa?" },
                        { id: "p3", left: "How to get to...?", right: "Làm sao để đến...?" },
                        { id: "p4", left: "When does it open?", right: "Khi nào mở cửa?" },
                        { id: "p5", left: "How much is the ticket?", right: "Vé bao nhiêu tiền?" }
                    ]
                },
                // 2. Multiple Choice (Ticket)
                {
                    id: "a2_travel_2",
                    type: "multiple-choice",
                    question: "Chọn câu hỏi giá vé:",
                    options: ["How many tickets?", "How much is the ticket?", "Where is the ticket?", "Who has the ticket?"],
                    correctAnswer: "How much is the ticket?",
                    explanation: "How much = Hỏi giá."
                },
                // 3. Fill-blank
                {
                    id: "a2_travel_3",
                    type: "fill-blank",
                    question: "Điền từ: '______ way to the museum?' (Đường nào)",
                    explanation: "Which way = Đường nào.",
                    correctAnswer: "Which",
                    options: ["Where", "What", "Which", "Who"]
                },
                // 4. Speaking
                {
                    id: "a2_travel_4",
                    type: "speaking",
                    question: "Hãy nói: 'Can you help me?'",
                    explanation: "Yêu cầu giúp đỡ lịch sự.",
                    correctAnswer: "Can you help me"
                },
                // 5. Ordering
                {
                    id: "a2_travel_5",
                    type: "ordering",
                    question: "Sắp xếp câu: 'Is it far from here?'",
                    explanation: "Hỏi khoảng cách.",
                    segments: ["here", "from", "far", "it", "Is"],
                    correctOrder: ["Is", "it", "far", "from", "here"],
                    correctAnswer: "Is it far from here"
                },
                // 6. Listening (Mock)
                {
                    id: "a2_travel_6",
                    type: "listening",
                    question: "Nghe giờ mở cửa: 'It opens at 9 AM.'",
                    explanation: "9 AM = 9 giờ sáng.",
                    options: ["8 AM", "9 AM", "10 AM", "9 PM"],
                    correctAnswer: "9 AM",
                    audioUrl: "mock_opening_hours.mp3"
                },
                // 7. Writing
                {
                    id: "a2_travel_7",
                    type: "writing",
                    question: "Viết câu hỏi: 'map / Do / a / have / you?' (Bạn có bản đồ không?)",
                    explanation: "Do you have + N?",
                    correctAnswer: "Do you have a map?"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Sức khỏe" (A2)
    if (scenario === "Sức khỏe") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Body Parts)
                {
                    id: "a2_health_1",
                    type: "matching",
                    question: "Nối từ vựng với nghĩa:",
                    explanation: "Từ vựng bộ phận cơ thể.",
                    pairs: [
                        { id: "p1", left: "Head", right: "Đầu" },
                        { id: "p2", left: "Stomach", right: "Bụng/Dạ dày" },
                        { id: "p3", left: "Throat", right: "Họng" },
                        { id: "p4", left: "Heart", right: "Tim" }
                    ]
                },
                // 2. Multiple Choice (Illness)
                {
                    id: "a2_health_2",
                    type: "multiple-choice",
                    question: "I have a high temperature. I have a ______.",
                    options: ["fever", "headache", "broken leg", "happy"],
                    correctAnswer: "fever",
                    explanation: "High temperature = Fever (Sốt)."
                },
                // 3. Fill-blank (Should advice)
                {
                    id: "a2_health_3",
                    type: "fill-blank",
                    question: "You ______ see a doctor.",
                    options: ["should", "shouldn't", "can't", "won't"],
                    correctAnswer: "should",
                    explanation: "Lời khuyên: You should see a doctor."
                },
                // 4. Ordering (Imperative)
                {
                    id: "a2_health_4",
                    type: "ordering",
                    question: "Sắp xếp: 'more / Drink / water.'",
                    explanation: "Câu mệnh lệnh.",
                    segments: ["water", "Drink", "more"],
                    correctOrder: ["Drink", "more", "water"],
                    correctAnswer: "Drink more water"
                },
                // 5. Speaking
                {
                    id: "a2_health_5",
                    type: "speaking",
                    question: "Hãy nói: 'I have a headache.'",
                    explanation: "Mô tả triệu chứng.",
                    correctAnswer: "I have a headache"
                },
                // 6. Multiple Choice (Doctor)
                {
                    id: "a2_health_6",
                    type: "multiple-choice",
                    question: "Where do you go when you are sick?",
                    options: ["Hospital", "School", "Cinema", "Park"],
                    correctAnswer: "Hospital",
                    explanation: "Bệnh viện."
                },
                // 7. Listening (Mock)
                {
                    id: "a2_health_7",
                    type: "listening",
                    question: "Nghe lời khuyên: 'You must rest.'",
                    explanation: "Must rest = Phải nghỉ ngơi.",
                    options: ["Work hard", "Rest", "Run", "Eat"],
                    correctAnswer: "Rest",
                    audioUrl: "mock_rest.mp3"
                },
                // 8. Writing
                {
                    id: "a2_health_8",
                    type: "writing",
                    question: "Viết câu: 'well / feel / don't / I.' (Tôi cảm thấy không khỏe)",
                    explanation: "S + don't + V + Adj.",
                    correctAnswer: "I don't feel well"
                },
                // 9. Matching (Habits)
                {
                    id: "a2_health_9",
                    type: "matching",
                    question: "Nối thói quen:",
                    explanation: "Thói quen sức khỏe.",
                    pairs: [
                        { id: "p5", left: "Exercise", right: "Tập thể dục" },
                        { id: "p6", left: "Sleep early", right: "Ngủ sớm" },
                        { id: "p7", left: "Eat fruit", right: "Ăn hoa quả" },
                        { id: "p8", left: "Wash hands", right: "Rửa tay" }
                    ]
                },
                // 10. Ordering (Advice)
                {
                    id: "a2_health_10",
                    type: "ordering",
                    question: "Sắp xếp: 'eat / fast food / Don't.'",
                    explanation: "Câu mệnh lệnh phủ định.",
                    segments: ["food", "fast", "Don't", "eat"],
                    correctOrder: ["Don't", "eat", "fast", "food"],
                    correctAnswer: "Don't eat fast food"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Mua sắm" (A2)
    if (scenario === "Mua sắm") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Clothes)
                {
                    id: "a2_shop_1",
                    type: "matching",
                    question: "Nối từ vựng với nghĩa:",
                    explanation: "Từ vựng quần áo.",
                    pairs: [
                        { id: "p1", left: "Shirt", right: "Áo sơ mi" },
                        { id: "p2", left: "Dress", right: "Váy liền" },
                        { id: "p3", left: "Pants", right: "Quần dài" },
                        { id: "p4", left: "Shoes", right: "Giày" }
                    ]
                },
                // 2. Multiple Choice (Size)
                {
                    id: "a2_shop_2",
                    type: "multiple-choice",
                    question: "Choose the correct question for size:",
                    options: ["What is your size?", "How many size?", "Where is size?", "Who is size?"],
                    correctAnswer: "What is your size?",
                    explanation: "Hỏi kích cỡ: What is your size?"
                },
                // 3. Fill-blank (Too/Enough)
                {
                    id: "a2_shop_3",
                    type: "fill-blank",
                    question: "This shirt is ______ big (quá).",
                    options: ["too", "enough", "very", "much"],
                    correctAnswer: "too",
                    explanation: "Too + Adj = Quá..."
                },
                // 4. Ordering (Adjectives)
                {
                    id: "a2_shop_4",
                    type: "ordering",
                    question: "Sắp xếp: 'beautiful / dress / a / red.'",
                    explanation: "Op-C: Beautiful (Op) -> Red (Color).",
                    segments: ["dress", "red", "a", "beautiful"],
                    correctOrder: ["a", "beautiful", "red", "dress"],
                    correctAnswer: "a beautiful red dress"
                },
                // 5. Speaking
                {
                    id: "a2_shop_5",
                    type: "speaking",
                    question: "Hãy nói: 'Can I try it on?' (Tôi có thể thử không?)",
                    explanation: "Yêu cầu thử đồ.",
                    correctAnswer: "Can I try it on"
                },
                // 6. Multiple Choice (Fitting room)
                {
                    id: "a2_shop_6",
                    type: "multiple-choice",
                    question: "Where do you try on clothes?",
                    options: ["Fitting room", "Kitchen", "Garden", "Library"],
                    correctAnswer: "Fitting room",
                    explanation: "Phòng thử đồ."
                },
                // 7. Listening (Price - Mock)
                {
                    id: "a2_shop_7",
                    type: "listening",
                    question: "Nghe giá tiền: 'It costs 50 dollars.'",
                    explanation: "50 dollars.",
                    options: ["$15", "$50", "$5", "$500"],
                    correctAnswer: "$50",
                    audioUrl: "mock_price.mp3"
                },
                // 8. Writing
                {
                    id: "a2_shop_8",
                    type: "writing",
                    question: "Viết câu: 'is / expensive / This / too / hat.'",
                    explanation: "S + be + too + Adj.",
                    correctAnswer: "This hat is too expensive"
                },
                // 9. Matching (Verbs)
                {
                    id: "a2_shop_9",
                    type: "matching",
                    question: "Nối hành động:",
                    explanation: "Động từ mua sắm.",
                    pairs: [
                        { id: "p5", left: "Pay", right: "Thanh toán" },
                        { id: "p6", left: "Try on", right: "Mặc thử" },
                        { id: "p7", left: "Buy", right: "Mua" },
                        { id: "p8", left: "Sell", right: "Bán" }
                    ]
                },
                // 10. Ordering (Conversation)
                {
                    id: "a2_shop_10",
                    type: "ordering",
                    question: "Sắp xếp: 'take / I / will / it.' (Tôi sẽ lấy nó)",
                    explanation: "Quyết định mua.",
                    segments: ["it", "will", "I", "take"],
                    correctOrder: ["I", "will", "take", "it"],
                    correctAnswer: "I will take it"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Giao thông & Đi lại" (A2)
    if (scenario === "Giao thông & Đi lại") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                {
                    id: "a2_transport_1",
                    type: "matching",
                    question: "Nối từ vựng với nghĩa:",
                    explanation: "Từ vựng về giao thông.",
                    pairs: [
                        { id: "p1", left: "Traffic jam", right: "Tắc đường" },
                        { id: "p2", left: "Vehicle", right: "Phương tiện" },
                        { id: "p3", left: "Helmet", right: "Mũ bảo hiểm" },
                        { id: "p4", left: "Fare", right: "Giá vé" }
                    ]
                },
                {
                    id: "a2_transport_2",
                    type: "multiple-choice",
                    question: "What should you do when riding a motorbike?",
                    options: ["Wear a helmet", "Sleep", "Read a book", "Eat"],
                    correctAnswer: "Wear a helmet",
                    explanation: "Luôn đội mũ bảo hiểm khi đi xe máy."
                },
                {
                    id: "a2_transport_3",
                    type: "fill-blank",
                    question: "The bus ______ at 7 AM.",
                    correctAnswer: "departs",
                    options: ["departs", "depart", "departure", "departing"],
                    explanation: "Động từ 'depart' chia ở ngôi thứ 3 số ít (The bus)."
                },
                {
                    id: "a2_transport_4",
                    type: "ordering",
                    question: "Sắp xếp câu: 'should / take / You / taxi / a.'",
                    explanation: "Lời khuyên: You should + V...",
                    segments: ["a", "taxi", "You", "take", "should"],
                    correctOrder: ["You", "should", "take", "a", "taxi"],
                    correctAnswer: "You should take a taxi"
                },
                {
                    id: "a2_transport_5",
                    type: "multiple-choice", // Mock listening as multiple choice for now or specific type if supported
                    question: "Chọn đáp án đúng (Nghe): 'The fare is 5 dollars.'",
                    options: ["$5", "$15", "$50", "$500"],
                    correctAnswer: "$5",
                    explanation: "Fare là giá vé."
                },
                {
                    id: "a2_transport_6",
                    type: "matching",
                    question: "Nối biển báo với ý nghĩa:",
                    explanation: "Biển báo giao thông.",
                    pairs: [
                        { id: "p5", left: "Stop sign", right: "Dừng lại" },
                        { id: "p6", left: "No parking", right: "Cấm đỗ xe" },
                        { id: "p7", left: "Turn left", right: "Rẽ trái" },
                        { id: "p8", left: "One way", right: "Đường một chiều" }
                    ]
                },
                {
                    id: "a2_transport_7",
                    type: "fill-blank",
                    question: "Go ______ the bridge.",
                    options: ["over", "under", "in", "at"],
                    correctAnswer: "over",
                    explanation: "Go over the bridge = Đi qua cầu."
                },
                {
                    id: "a2_transport_8",
                    type: "ordering",
                    question: "Sắp xếp câu: 'lost / I / am / help / me / please.'",
                    explanation: "Xin giúp đỡ khi lạc đường.",
                    segments: ["me", "please", "help", "am", "I", "lost"],
                    correctOrder: ["I", "am", "lost", "please", "help", "me"],
                    correctAnswer: "I am lost please help me"
                },
                {
                    id: "a2_transport_9",
                    type: "multiple-choice",
                    question: "Where do you buy a train ticket?",
                    options: ["At the cinema", "At the station", "At the library", "At the park"],
                    correctAnswer: "At the station",
                    explanation: "Vé tàu mua ở nhà ga."
                },
                {
                    id: "a2_transport_10",
                    type: "multiple-choice",
                    question: "Which vehicle has 2 wheels?",
                    options: ["Car", "Bus", "Motorbike", "Train"],
                    correctAnswer: "Motorbike",
                    explanation: "Xe máy có 2 bánh."
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Gọi món ăn" (A2)
    if (scenario === "Gọi món ăn") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Food)
                {
                    id: "a2_food_1",
                    type: "matching",
                    question: "Nối món ăn với nghĩa:",
                    explanation: "Từ vựng đồ ăn.",
                    pairs: [
                        { id: "p1", left: "Steak", right: "Bít tết" },
                        { id: "p2", left: "Salad", right: "Rau trộn" },
                        { id: "p3", left: "Soup", right: "Súp" },
                        { id: "p4", left: "Rice", right: "Cơm" }
                    ]
                },
                // 2. Multiple Choice (Taste)
                {
                    id: "a2_food_2",
                    type: "multiple-choice",
                    question: "This candy is very ______.",
                    options: ["sweet", "salty", "spicy", "bitter"],
                    correctAnswer: "sweet",
                    explanation: "Kẹo thì ngọt (sweet)."
                },
                // 3. Fill-blank (Would like)
                {
                    id: "a2_food_3",
                    type: "fill-blank",
                    question: "I ______ like a menu, please.",
                    options: ["would", "will", "can", "do"],
                    correctAnswer: "would",
                    explanation: "Cấu trúc lịch sự: I would like..."
                },
                // 4. Ordering (Conversation)
                {
                    id: "a2_food_4",
                    type: "ordering",
                    question: "Sắp xếp: 'to / ready / order / Are / you?'",
                    explanation: "Câu hỏi của bồi bàn.",
                    segments: ["you", "Are", "ready", "order", "to"],
                    correctOrder: ["Are", "you", "ready", "to", "order"],
                    correctAnswer: "Are you ready to order"
                },
                // 5. Speaking
                {
                    id: "a2_food_5",
                    type: "speaking",
                    question: "Hãy nói: 'The bill, please.'",
                    explanation: "Yêu cầu tính tiền.",
                    correctAnswer: "The bill please"
                },
                // 6. Multiple Choice (Countable)
                {
                    id: "a2_food_6",
                    type: "multiple-choice",
                    question: "Choose the countable noun:",
                    options: ["Apple", "Water", "Rice", "Milk"],
                    correctAnswer: "Apple",
                    explanation: "Apple đếm được (an apple)."
                },
                // 7. Listening (Order - Mock)
                {
                    id: "a2_food_7",
                    type: "listening",
                    question: "Nghe gọi món: 'I'll have the fish.'",
                    explanation: "Fish = Cá.",
                    options: ["Beef", "Chicken", "Fish", "Pork"],
                    correctAnswer: "Fish",
                    audioUrl: "mock_order_fish.mp3"
                },
                // 8. Writing
                {
                    id: "a2_food_8",
                    type: "writing",
                    question: "Viết câu: 'delicious / is / food / This.'",
                    explanation: "S + be + Adj.",
                    correctAnswer: "This food is delicious"
                },
                // 9. Matching (Drink)
                {
                    id: "a2_food_9",
                    type: "matching",
                    question: "Nối đồ uống:",
                    explanation: "Từ vựng đồ uống.",
                    pairs: [
                        { id: "p5", left: "Water", right: "Nước lọc" },
                        { id: "p6", left: "Juice", right: "Nước ép" },
                        { id: "p7", left: "Beer", right: "Bia" },
                        { id: "p8", left: "Tea", right: "Trà" }
                    ]
                },
                // 10. Ordering (Request)
                {
                    id: "a2_food_10",
                    type: "ordering",
                    question: "Sắp xếp: 'some / like / I / would / water.'",
                    explanation: "Yêu cầu lịch sự.",
                    segments: ["water", "would", "I", "like", "some"],
                    correctOrder: ["I", "would", "like", "some", "water"],
                    correctAnswer: "I would like some water"
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Dự định tương lai" (A2)
    if (scenario === "Dự định tương lai") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Verbs)
                {
                    id: "a2_plans_1",
                    type: "matching",
                    question: "Nối động từ với nghĩa:",
                    explanation: "Từ vựng kế hoạch.",
                    pairs: [
                        { id: "p1", left: "Visit", right: "Thăm" },
                        { id: "p2", left: "Stay", right: "Ở lại" },
                        { id: "p3", left: "Leave", right: "Rời đi" },
                        { id: "p4", left: "Arrive", right: "Đến nơi" }
                    ]
                },
                // 2. Multiple Choice (Be going to)
                {
                    id: "a2_plans_2",
                    type: "multiple-choice",
                    question: "I ______ visit my aunt tomorrow.",
                    options: ["am going to", "going to", "go to", "will going"],
                    correctAnswer: "am going to",
                    explanation: "Cấu trúc: Be going to + V."
                },
                // 3. Unscramble (Sentence)
                {
                    id: "a2_plans_3",
                    type: "ordering",
                    question: "Sắp xếp: 'to / going / They / cover / are / soccer.'",
                    explanation: "Dự định làm gì.",
                    segments: ["soccer", "play", "They", "are", "going", "to"],
                    correctOrder: ["They", "are", "going", "to", "play", "soccer"],
                    correctAnswer: "They are going to play soccer"
                },
                // 4. Fill-blank (Preposition)
                {
                    id: "a2_plans_4",
                    type: "fill-blank",
                    question: "We are meeting ______ 7 PM.",
                    options: ["at", "on", "in", "to"],
                    correctAnswer: "at",
                    explanation: "Dùng 'at' với giờ cụ thể."
                },
                // 5. Speaking (Plan)
                {
                    id: "a2_plans_5",
                    type: "speaking",
                    question: "Hãy nói: 'I am going to travel.'",
                    explanation: "Nói về dự định du lịch.",
                    correctAnswer: "I am going to travel"
                },
                // 6. Multiple Choice (Time)
                {
                    id: "a2_plans_6",
                    type: "multiple-choice",
                    question: "See you ______ Monday.",
                    options: ["on", "at", "in", "by"],
                    correctAnswer: "on",
                    explanation: "Dùng 'on' với thứ trong tuần."
                },
                // 7. Listening (Schedule - Mock)
                {
                    id: "a2_plans_7",
                    type: "listening",
                    question: "Nghe lịch trình: 'The meeting is at 10.'",
                    explanation: "Thời gian gặp mặt.",
                    options: ["9 AM", "10 AM", "2 PM", "10 PM"],
                    correctAnswer: "10 AM",
                    audioUrl: "mock_schedule_10.mp3"
                },
                // 8. Writing (Intentions)
                {
                    id: "a2_plans_8",
                    type: "writing",
                    question: "Viết câu: 'going / is / She / buy / to / a car.'",
                    explanation: "Cấu trúc Be going to.",
                    correctAnswer: "She is going to buy a car"
                },
                // 9. Matching (Vocabulary)
                {
                    id: "a2_plans_9",
                    type: "matching",
                    question: "Nối từ vựng:",
                    explanation: "Từ vựng du lịch.",
                    pairs: [
                        { id: "p5", left: "Ticket", right: "Vé" },
                        { id: "p6", left: "Flight", right: "Chuyến bay" },
                        { id: "p7", left: "Hotel", right: "Khách sạn" },
                        { id: "p8", left: "Luggage", right: "Hành lý" }
                    ]
                },
                // 10. Multiple Choice (Continuous)
                {
                    id: "a2_plans_10",
                    type: "multiple-choice",
                    question: "She ______ (fly) to Paris next week.",
                    options: ["is flying", "flies", "flown", "fly"],
                    correctAnswer: "is flying",
                    explanation: "Hiện tại tiếp diễn diễn tả kế hoạch tương lai."
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Dịch vụ công cộng" (A2)
    if (scenario === "Dịch vụ công cộng") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Places)
                {
                    id: "a2_services_1",
                    type: "matching",
                    question: "Nối địa điểm với chức năng:",
                    explanation: "Từ vựng dịch vụ.",
                    pairs: [
                        { id: "p1", left: "Bank", right: "Gửi tiền" },
                        { id: "p2", left: "Post Office", right: "Gửi thư" },
                        { id: "p3", left: "Library", right: "Mượn sách" },
                        { id: "p4", left: "Hospital", right: "Khám bệnh" }
                    ]
                },
                // 2. Multiple Choice (Request)
                {
                    id: "a2_services_2",
                    type: "multiple-choice",
                    question: "______ you help me with this form?",
                    options: ["Could", "Do", "Are", "Have"],
                    correctAnswer: "Could",
                    explanation: "Câu yêu cầu lịch sự: Could you..."
                },
                // 3. Fill-blank (Preposition)
                {
                    id: "a2_services_3",
                    type: "fill-blank",
                    question: "The bank is ______ the park.",
                    options: ["next to", "on", "at", "to"],
                    correctAnswer: "next to",
                    explanation: "Chỉ vị trí: bên cạnh."
                },
                // 4. Ordering (Request)
                {
                    id: "a2_services_4",
                    type: "ordering",
                    question: "Sắp xếp: 'send / like / I / replace / would / to / a letter.'",
                    explanation: "Gửi thư.",
                    segments: ["to", "would", "I", "like", "send", "a letter"],
                    correctOrder: ["I", "would", "like", "to", "send", "a letter"],
                    correctAnswer: "I would like to send a letter"
                },
                // 5. Speaking (May I)
                {
                    id: "a2_services_5",
                    type: "speaking",
                    question: "Hãy nói: 'May I come in?'",
                    explanation: "Xin phép vào.",
                    correctAnswer: "May I come in"
                },
                // 6. Multiple Choice (Vocabulary)
                {
                    id: "a2_services_6",
                    type: "multiple-choice",
                    question: "I want to buy some medicine. I go to the ______.",
                    options: ["pharmacy", "bank", "cinema", "school"],
                    correctAnswer: "pharmacy",
                    explanation: "Mua thuốc ở hiệu thuốc."
                },
                // 7. Listening (Service)
                {
                    id: "a2_services_7",
                    type: "listening",
                    question: "Nghe yêu cầu: 'I'd like to open an account.'",
                    explanation: "Mở tài khoản ngân hàng.",
                    options: ["Close account", "Open account", "Withdraw money", "Send money"],
                    correctAnswer: "Open account",
                    audioUrl: "mock_bank_account.mp3"
                },
                // 8. Writing
                {
                    id: "a2_services_8",
                    type: "writing",
                    question: "Viết câu: 'post / Where / the / office / is?'",
                    explanation: "Hỏi đường.",
                    correctAnswer: "Where is the post office"
                },
                // 9. Matching (Actions)
                {
                    id: "a2_services_9",
                    type: "matching",
                    question: "Nối hành động:",
                    explanation: "Hoạt động tại dịch vụ.",
                    pairs: [
                        { id: "p5", left: "Borrow", right: "Mượn" },
                        { id: "p6", left: "Send", right: "Gửi" },
                        { id: "p7", left: "Save", right: "Tiết kiệm" },
                        { id: "p8", left: "Buy", right: "Mua" }
                    ]
                },
                // 10. Multiple Choice (Polite)
                {
                    id: "a2_services_10",
                    type: "multiple-choice",
                    question: "______ I use your pen?",
                    options: ["May", "Am", "Do", "Have"],
                    correctAnswer: "May",
                    explanation: "Xin phép: May I..."
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Công nghệ & Truyền thông" (A2)
    if (scenario === "Công nghệ & Truyền thông") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Devices)
                {
                    id: "a2_tech_1",
                    type: "matching",
                    question: "Nối thiết bị với tên gọi:",
                    explanation: "Từ vựng công nghệ.",
                    pairs: [
                        { id: "p1", left: "Computer", right: "Máy tính bàn" },
                        { id: "p2", left: "Laptop", right: "Máy tính xách tay" },
                        { id: "p3", left: "Smartphone", right: "Điện thoại thông minh" },
                        { id: "p4", left: "Mouse", right: "Chuột máy tính" }
                    ]
                },
                // 2. Multiple Choice (Zero Conditional)
                {
                    id: "a2_tech_2",
                    type: "multiple-choice",
                    question: "If you ______ this button, the computer turns on.",
                    options: ["press", "pressed", "pressing", "will press"],
                    correctAnswer: "press",
                    explanation: "Câu điều kiện loại 0: If + H.T.Đ, H.T.Đ."
                },
                // 3. Fill-blank (Imperative)
                {
                    id: "a2_tech_3",
                    type: "fill-blank",
                    question: "______ on the link to open the website.",
                    options: ["Click", "Type", "See", "Go"],
                    correctAnswer: "Click",
                    explanation: "Click on = Nhấp vào."
                },
                // 4. Ordering (Instruction)
                {
                    id: "a2_tech_4",
                    type: "ordering",
                    question: "Sắp xếp: 'password / your / enter / Please.'",
                    explanation: "Yêu cầu nhập mật khẩu.",
                    segments: ["your", "Please", "password", "enter"],
                    correctOrder: ["Please", "enter", "your", "password"],
                    correctAnswer: "Please enter your password"
                },
                // 5. Speaking (Problem)
                {
                    id: "a2_tech_5",
                    type: "speaking",
                    question: "Hãy nói: 'My internet is slow.'",
                    explanation: "Mô tả vấn đề mạng.",
                    correctAnswer: "My internet is slow"
                },
                // 6. Multiple Choice (Vocabulary)
                {
                    id: "a2_tech_6",
                    type: "multiple-choice",
                    question: "I need to charge my phone. The ______ is low.",
                    options: ["battery", "screen", "wifi", "mouse"],
                    correctAnswer: "battery",
                    explanation: "Battery = Pin."
                },
                // 7. Listening (Tech Support)
                {
                    id: "a2_tech_7",
                    type: "listening",
                    question: "Nghe hướng dẫn: 'Restart your computer.'",
                    explanation: "Khởi động lại máy.",
                    options: ["Turn off", "Restart", "Buy new", "Clean"],
                    correctAnswer: "Restart",
                    audioUrl: "mock_restart.mp3"
                },
                // 8. Writing (Conditional)
                {
                    id: "a2_tech_8",
                    type: "writing",
                    question: "Viết câu: 'rain / wet / gets / If / it / grass / the.'",
                    explanation: "Sự thật hiển nhiên.",
                    correctAnswer: "If it rains the grass gets wet"
                },
                // 9. Matching (Actions)
                {
                    id: "a2_tech_9",
                    type: "matching",
                    question: "Nối hành động:",
                    explanation: "Hoạt động công nghệ.",
                    pairs: [
                        { id: "p5", left: "Download", right: "Tải xuống" },
                        { id: "p6", left: "Upload", right: "Tải lên" },
                        { id: "p7", left: "Connect", right: "Kết nối" },
                        { id: "p8", left: "Install", right: "Cài đặt" }
                    ]
                },
                // 10. Multiple Choice (Zero Conditional)
                {
                    id: "a2_tech_10",
                    type: "multiple-choice",
                    question: "If ice melts, it ______ water.",
                    options: ["becomes", "become", "became", "will become"],
                    correctAnswer: "becomes",
                    explanation: "Sự thật hiển nhiên: becomes."
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Thời tiết & Môi trường" (A2)
    if (scenario === "Thời tiết & Môi trường") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Matching (Symbols)
                {
                    id: "a2_weather_1",
                    type: "matching",
                    question: "Nối biểu tượng thời tiết:",
                    explanation: "Từ vựng thời tiết.",
                    pairs: [
                        { id: "p1", left: "Sun", right: "Nắng" },
                        { id: "p2", left: "Cloud", right: "Mây" },
                        { id: "p3", left: "Rain", right: "Mưa" },
                        { id: "p4", left: "Snow", right: "Tuyết" }
                    ]
                },
                // 2. Multiple Choice (Prediction)
                {
                    id: "a2_weather_2",
                    type: "multiple-choice",
                    question: "I think it ______ rain tomorrow.",
                    options: ["will", "is", "did", "does"],
                    correctAnswer: "will",
                    explanation: "Tiên đoán tương lai: Will."
                },
                // 3. Unscramble (Sentence)
                {
                    id: "a2_weather_3",
                    type: "ordering",
                    question: "Sắp xếp: 'sunny / is / It / today.'",
                    explanation: "Mô tả thời tiết.",
                    segments: ["today", "It", "is", "sunny"],
                    correctOrder: ["It", "is", "sunny", "today"],
                    correctAnswer: "It is sunny today"
                },
                // 4. Fill-blank (Conditional)
                {
                    id: "a2_weather_4",
                    type: "fill-blank",
                    question: "If it rains, we ______ stay inside.",
                    options: ["will", "do", "are", "have"],
                    correctAnswer: "will",
                    explanation: "Câu điều kiện loại 1."
                },
                // 5. Speaking (Weather)
                {
                    id: "a2_weather_5",
                    type: "speaking",
                    question: "Hãy nói: 'It is very cold.'",
                    explanation: "Mô tả nhiệt độ.",
                    correctAnswer: "It is very cold"
                },
                // 6. Multiple Choice (Vocabulary)
                {
                    id: "a2_weather_6",
                    type: "multiple-choice",
                    question: "You can't see anything. It is ______.",
                    options: ["foggy", "sunny", "hot", "dry"],
                    correctAnswer: "foggy",
                    explanation: "Foggy = Sương mù."
                },
                // 7. Listening (Forecast)
                {
                    id: "a2_weather_7",
                    type: "listening",
                    question: "Nghe dự báo: 'It will be windy.'",
                    explanation: "Dự báo gió.",
                    options: ["Windy", "Rainy", "Sunny", "Cloudy"],
                    correctAnswer: "Windy",
                    audioUrl: "mock_windy.mp3"
                },
                // 8. Writing (Prediction)
                {
                    id: "a2_weather_8",
                    type: "writing",
                    question: "Viết câu: 'snow / It / might / tonight.'",
                    explanation: "Khả năng xảy ra.",
                    correctAnswer: "It might snow tonight"
                },
                // 9. Matching (Temperature)
                {
                    id: "a2_weather_9",
                    type: "matching",
                    question: "Nối nhiệt độ:",
                    explanation: "Từ vựng nhiệt độ.",
                    pairs: [
                        { id: "p5", left: "Hot", right: "Nóng" },
                        { id: "p6", left: "Cold", right: "Lạnh" },
                        { id: "p7", left: "Warm", right: "Ấm" },
                        { id: "p8", left: "Cool", right: "Mát" }
                    ]
                },
                // 10. Multiple Choice (Possibility)
                {
                    id: "a2_weather_10",
                    type: "multiple-choice",
                    question: "Look at those clouds. It ______ rain.",
                    options: ["is going to", "will", "does", "is"],
                    correctAnswer: "is going to",
                    explanation: "Dự đoán có căn cứ: Be going to." // Adjusted explanation slightly
                }
            ]
        };
        return { vocab, grammar, conversation, practice };
    }

    // Specific logic for "Tổng ôn tập A2"
    if (scenario === "Tổng ôn tập A2") {
        const practice: PracticeExercise = {
            scenarioId: scenario,
            questions: [
                // 1. Multiple Choice (Mixed Grammar - Past)
                {
                    id: "a2_review_1",
                    type: "multiple-choice",
                    question: "Yesterday, I ______ to the cinema.",
                    options: ["went", "go", "going", "will go"],
                    correctAnswer: "went",
                    explanation: "Quá khứ đơn."
                },
                // 2. Fill-blank (Mixed Vocabulary - Health)
                {
                    id: "a2_review_2",
                    type: "fill-blank",
                    question: "I have a headache. I should take some ______.",
                    options: ["medicine", "cake", "shoe", "ticket"],
                    correctAnswer: "medicine",
                    explanation: "Từ vựng sức khỏe."
                },
                // 3. Ordering (Future Plan)
                {
                    id: "a2_review_3",
                    type: "ordering",
                    question: "Sắp xếp: 'going / am / I / visit / to / Mom.'",
                    explanation: "Cấu trúc Be going to.",
                    segments: ["Mom", "visit", "to", "I", "am", "going"],
                    correctOrder: ["I", "am", "going", "to", "visit", "Mom"],
                    correctAnswer: "I am going to visit Mom"
                },
                // 4. Matching (Mixed Topics)
                {
                    id: "a2_review_4",
                    type: "matching",
                    question: "Nối từ với chủ đề:",
                    explanation: "Ôn tập tổng hợp.",
                    pairs: [
                        { id: "p1", left: "Nurse", right: "Job" },
                        { id: "p2", left: "Beefsteak", right: "Food" },
                        { id: "p3", left: "Boots", right: "Fashion" },
                        { id: "p4", left: "Rainy", right: "Weather" }
                    ]
                },
                // 5. Speaking (Self Intro Review)
                {
                    id: "a2_review_5",
                    type: "speaking",
                    question: "Hãy nói: 'I like playing soccer.'",
                    explanation: "Nói về sở thích.",
                    correctAnswer: "I like playing soccer"
                },
                // 6. Multiple Choice (Comparisons)
                {
                    id: "a2_review_6",
                    type: "multiple-choice",
                    question: "This car is ______ than that one.",
                    options: ["more expensive", "expensive", "expensiver", "most expensive"],
                    correctAnswer: "more expensive",
                    explanation: "So sánh hơn tính từ dài."
                },
                // 7. Listening (Mixed)
                {
                    id: "a2_review_7",
                    type: "listening",
                    question: "Nghe câu hỏi: 'Where are you from?'",
                    explanation: "Thông tin cá nhân.",
                    options: ["I am from Vietnam", "I am 10", "I like blue", "I am a student"],
                    correctAnswer: "I am from Vietnam",
                    audioUrl: "mock_from.mp3"
                },
                // 8. Writing (Modal)
                {
                    id: "a2_review_8",
                    type: "writing",
                    question: "Viết câu: 'should / go / You / doctor / the / to.'",
                    explanation: "Lời khuyên.",
                    correctAnswer: "You should go to the doctor"
                },
                // 9. Matching (Antonyms)
                {
                    id: "a2_review_9",
                    type: "matching",
                    question: "Nối từ trái nghĩa:",
                    explanation: "Từ vựng.",
                    pairs: [
                        { id: "p5", left: "Hot", right: "Cold" },
                        { id: "p6", left: "Big", right: "Small" },
                        { id: "p7", left: "Happy", right: "Sad" },
                        { id: "p8", left: "Fast", right: "Slow" }
                    ]
                },
                // 10. Multiple Choice (Conditional)
                {
                    id: "a2_review_10",
                    type: "multiple-choice",
                    question: "If you study hard, you ______ pass the exam.",
                    options: ["will", "do", "did", "are"],
                    correctAnswer: "will",
                    explanation: "Câu điều kiện loại 1."
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

