-- Seed learning packages
INSERT INTO learning_packages (package_code, package_name, description, price, monthly_price, annual_price, has_mentor, mentor_hours_per_month, active, created_at, updated_at)
VALUES 
    ('BASIC', 'Gói Cơ Bản', 'Gói cơ bản để bắt đầu học tiếng Anh. Bao gồm bài học video, bài tập, và công cụ học tập cơ bản.', 0, 4.99, 49.99, FALSE, 0, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('PREMIUM', 'Gói Premium', 'Gói cao cấp với tất cả tính năng của gói cơ bản cộng với các bài học nâng cao, bài tập nghe đặc biệt, và hỗ trợ từ mentor (1 giờ/tuần).', 50, 9.99, 99.99, TRUE, 4, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('PROFESSIONAL', 'Gói Chuyên Nghiệp', 'Gói toàn diện dành cho những người muốn học sâu. Bao gồm tất cả tính năng, hỗ trợ mentor nhiều hơn (2 giờ/tuần), truy cập tài liệu độc quyền, và đánh giá chuyên sâu.', 100, 19.99, 199.99, TRUE, 8, TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Seed package features for BASIC package
INSERT INTO package_features (package_id, feature_name, description, included, active, created_at)
SELECT id, 'Bài học video', 'Truy cập vô hạn các bài học video tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'BASIC'
UNION ALL
SELECT id, 'Bài tập viết', 'Thực hành viết tiếng Anh qua các bài tập hàng ngày', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'BASIC'
UNION ALL
SELECT id, 'Công cụ phát âm', 'Công cụ kiểm tra phát âm tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'BASIC'
UNION ALL
SELECT id, 'Cộng đồng học tập', 'Tham gia cộng đồng học viên trao đổi kinh nghiệm', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'BASIC'
UNION ALL
SELECT id, 'Mentor hỗ trợ', 'Hỗ trợ từ mentor cá nhân', FALSE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'BASIC';

-- Seed package features for PREMIUM package
INSERT INTO package_features (package_id, feature_name, description, included, active, created_at)
SELECT id, 'Bài học video', 'Truy cập vô hạn các bài học video tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Bài tập viết', 'Thực hành viết tiếng Anh qua các bài tập hàng ngày', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Công cụ phát âm', 'Công cụ kiểm tra phát âm tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Cộng đồng học tập', 'Tham gia cộng đồng học viên trao đổi kinh nghiệm', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Mentor hỗ trợ', 'Hỗ trợ từ mentor cá nhân (1 giờ/tuần)', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Bài học nâng cao', 'Truy cập các bài học nâng cao và chuyên đề', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM'
UNION ALL
SELECT id, 'Bài tập nghe chuyên sâu', 'Các bài nghe thực tế từ những người bản xứ', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PREMIUM';

-- Seed package features for PROFESSIONAL package
INSERT INTO package_features (package_id, feature_name, description, included, active, created_at)
SELECT id, 'Bài học video', 'Truy cập vô hạn các bài học video tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Bài tập viết', 'Thực hành viết tiếng Anh qua các bài tập hàng ngày', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Công cụ phát âm', 'Công cụ kiểm tra phát âm tiếng Anh', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Cộng đồng học tập', 'Tham gia cộng đồng học viên trao đổi kinh nghiệm', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Mentor hỗ trợ', 'Hỗ trợ từ mentor cá nhân (2 giờ/tuần)', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Bài học nâng cao', 'Truy cập các bài học nâng cao và chuyên đề', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Bài tập nghe chuyên sâu', 'Các bài nghe thực tế từ những người bản xứ', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Tài liệu độc quyền', 'Truy cập bộ tài liệu học tập độc quyền', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Đánh giá chuyên sâu', 'Nhận đánh giá chi tiết về tiến độ học tập', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL'
UNION ALL
SELECT id, 'Lộ trình học tập cá nhân', 'Nhận lộ trình học tập được tùy chỉnh cá nhân', TRUE, TRUE, CURRENT_TIMESTAMP FROM learning_packages WHERE package_code = 'PROFESSIONAL';
