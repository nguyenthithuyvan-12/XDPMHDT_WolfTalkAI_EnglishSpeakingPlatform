-- Seed data for Placement Test Questions (PostgreSQL compatible)
-- 50 questions across 5 levels

DO $$
DECLARE
    q_id BIGINT;
BEGIN

-- =====================================================
-- BEGINNER LEVEL (15 questions)
-- =====================================================

-- Question 1
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'What is this? 🍎', 'apple', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'apple', true, 1), (q_id, 'banana', false, 2), (q_id, 'orange', false, 3);

-- Question 2
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'How do you say "Xin chào"?', 'Hello', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Hello', true, 1), (q_id, 'Goodbye', false, 2), (q_id, 'Thank you', false, 3);

-- Question 3
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'TRANSLATE', 'Tôi là học sinh', 'I am a student', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'am', false, 2), (q_id, 'a', false, 3), (q_id, 'student', false, 4),
(q_id, 'teacher', false, 5), (q_id, 'doctor', false, 6);

-- Question 4
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'WORD_ORDER', 'Sắp xếp: "Tôi thích cà phê"', 'I like coffee', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'like', false, 2), (q_id, 'coffee', false, 3), (q_id, 'tea', false, 4);

-- Question 5
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'What color is the sky? ☁️', 'blue', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'blue', true, 1), (q_id, 'red', false, 2), (q_id, 'green', false, 3);

-- Question 6
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'TRANSLATE', 'Tôi có một con mèo', 'I have a cat', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'have', false, 2), (q_id, 'a', false, 3), (q_id, 'cat', false, 4),
(q_id, 'dog', false, 5), (q_id, 'bird', false, 6);

-- Question 7
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'Which is a number?', 'five', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'five', true, 1), (q_id, 'house', false, 2), (q_id, 'car', false, 3);

-- Question 8
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'WORD_ORDER', 'Sắp xếp: "Cô ấy xinh đẹp"', 'She is beautiful', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'She', false, 1), (q_id, 'is', false, 2), (q_id, 'beautiful', false, 3), (q_id, 'happy', false, 4);

-- Question 9
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'How do you say "Cảm ơn"?', 'Thank you', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Thank you', true, 1), (q_id, 'Sorry', false, 2), (q_id, 'Please', false, 3);

-- Question 10
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'TRANSLATE', 'Anh ấy là bạn tôi', 'He is my friend', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'He', false, 1), (q_id, 'is', false, 2), (q_id, 'my', false, 3), (q_id, 'friend', false, 4),
(q_id, 'brother', false, 5), (q_id, 'sister', false, 6);

-- Question 11
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'What is this? 🐕', 'dog', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'dog', true, 1), (q_id, 'cat', false, 2), (q_id, 'bird', false, 3);

-- Question 12
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'WORD_ORDER', 'Sắp xếp: "Tôi đi học"', 'I go to school', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'go', false, 2), (q_id, 'to', false, 3), (q_id, 'school', false, 4), (q_id, 'work', false, 5);

-- Question 13
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'Which is a day of the week?', 'Monday', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Monday', true, 1), (q_id, 'January', false, 2), (q_id, 'Summer', false, 3);

-- Question 14
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'TRANSLATE', 'Tôi ăn sáng', 'I eat breakfast', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'eat', false, 2), (q_id, 'breakfast', false, 3),
(q_id, 'lunch', false, 4), (q_id, 'dinner', false, 5);

-- Question 15
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('beginner', 'MULTIPLE_CHOICE', 'How do you say "Tạm biệt"?', 'Goodbye', 1, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Goodbye', true, 1), (q_id, 'Hello', false, 2), (q_id, 'Good morning', false, 3);

-- =====================================================
-- ELEMENTARY LEVEL (15 questions)
-- =====================================================

-- Question 16
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'I ___ a student.', 'am', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'am', true, 1), (q_id, 'is', false, 2), (q_id, 'are', false, 3);

-- Question 17
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'TRANSLATE', 'Tôi đang học tiếng Anh', 'I am learning English', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'am', false, 2), (q_id, 'learning', false, 3), (q_id, 'English', false, 4),
(q_id, 'studying', false, 5), (q_id, 'teaching', false, 6);

-- Question 18
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'WORD_ORDER', 'Sắp xếp: "Cô ấy sống ở Hà Nội"', 'She lives in Hanoi', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'She', false, 1), (q_id, 'lives', false, 2), (q_id, 'in', false, 3), (q_id, 'Hanoi', false, 4), (q_id, 'works', false, 5);

-- Question 19
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'They ___ playing football now.', 'are', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'are', true, 1), (q_id, 'is', false, 2), (q_id, 'am', false, 3);

-- Question 20
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'TRANSLATE', 'Anh ấy thích xem phim', 'He likes watching movies', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'He', false, 1), (q_id, 'likes', false, 2), (q_id, 'watching', false, 3), (q_id, 'movies', false, 4),
(q_id, 'reading', false, 5), (q_id, 'books', false, 6);

-- Question 21
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'Where ___ you from?', 'are', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'are', true, 1), (q_id, 'is', false, 2), (q_id, 'am', false, 3);

-- Question 22
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'WORD_ORDER', 'Sắp xếp: "Tôi uống cà phê mỗi sáng"', 'I drink coffee every morning', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'drink', false, 2), (q_id, 'coffee', false, 3), (q_id, 'every', false, 4),
(q_id, 'morning', false, 5), (q_id, 'afternoon', false, 6);

-- Question 23
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'TRANSLATE', 'Chúng tôi có hai con chó', 'We have two dogs', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'We', false, 1), (q_id, 'have', false, 2), (q_id, 'two', false, 3), (q_id, 'dogs', false, 4),
(q_id, 'cats', false, 5), (q_id, 'three', false, 6);

-- Question 24
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'She ___ to school by bus.', 'goes', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'goes', true, 1), (q_id, 'go', false, 2), (q_id, 'going', false, 3);

-- Question 25
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'WORD_ORDER', 'Sắp xếp: "Họ đang ăn tối"', 'They are eating dinner', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'They', false, 1), (q_id, 'are', false, 2), (q_id, 'eating', false, 3), (q_id, 'dinner', false, 4), (q_id, 'lunch', false, 5);

-- Question 26
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'My brother ___ in a hospital.', 'works', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'works', true, 1), (q_id, 'work', false, 2), (q_id, 'working', false, 3);

-- Question 27
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'TRANSLATE', 'Bố tôi lái xe ô tô', 'My father drives a car', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'My', false, 1), (q_id, 'father', false, 2), (q_id, 'drives', false, 3), (q_id, 'a', false, 4),
(q_id, 'car', false, 5), (q_id, 'bike', false, 6);

-- Question 28
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'MULTIPLE_CHOICE', 'How ___ apples do you want?', 'many', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'many', true, 1), (q_id, 'much', false, 2), (q_id, 'lot', false, 3);

-- Question 29
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'WORD_ORDER', 'Sắp xếp: "Tôi thường đọc sách vào tối"', 'I usually read books at night', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'usually', false, 2), (q_id, 'read', false, 3), (q_id, 'books', false, 4),
(q_id, 'at', false, 5), (q_id, 'night', false, 6);

-- Question 30
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('elementary', 'TRANSLATE', 'Em gái tôi chơi piano', 'My sister plays the piano', 2, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'My', false, 1), (q_id, 'sister', false, 2), (q_id, 'plays', false, 3), (q_id, 'the', false, 4),
(q_id, 'piano', false, 5), (q_id, 'guitar', false, 6);

-- =====================================================
-- INTERMEDIATE LEVEL (10 questions)
-- =====================================================

-- Question 31
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'MULTIPLE_CHOICE', 'If I ___ enough money, I would buy a new car.', 'had', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'had', true, 1), (q_id, 'have', false, 2), (q_id, 'has', false, 3);

-- Question 32
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'TRANSLATE', 'Tôi đã sống ở Việt Nam được 5 năm', 'I have lived in Vietnam for 5 years', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'have', false, 2), (q_id, 'lived', false, 3), (q_id, 'in', false, 4),
(q_id, 'Vietnam', false, 5), (q_id, 'for', false, 6), (q_id, '5', false, 7), (q_id, 'years', false, 8);

-- Question 33
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'WORD_ORDER', 'Sắp xếp: "Cô ấy đã làm việc ở đây từ năm 2020"', 'She has been working here since 2020', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'She', false, 1), (q_id, 'has', false, 2), (q_id, 'been', false, 3), (q_id, 'working', false, 4),
(q_id, 'here', false, 5), (q_id, 'since', false, 6), (q_id, '2020', false, 7);

-- Question 34
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'MULTIPLE_CHOICE', 'The book ___ by millions of people around the world.', 'was read', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'was read', true, 1), (q_id, 'read', false, 2), (q_id, 'reads', false, 3);

-- Question 35
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'TRANSLATE', 'Tôi ước tôi có thể nói tiếng Anh tốt hơn', 'I wish I could speak English better', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'wish', false, 2), (q_id, 'I', false, 3), (q_id, 'could', false, 4),
(q_id, 'speak', false, 5), (q_id, 'English', false, 6), (q_id, 'better', false, 7);

-- Question 36
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'MULTIPLE_CHOICE', 'She asked me ___ I had finished my homework.', 'if', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'if', true, 1), (q_id, 'that', false, 2), (q_id, 'what', false, 3);

-- Question 37
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'WORD_ORDER', 'Sắp xếp: "Anh ấy đã đi du lịch khắp châu Âu"', 'He has traveled throughout Europe', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'He', false, 1), (q_id, 'has', false, 2), (q_id, 'traveled', false, 3), (q_id, 'throughout', false, 4), (q_id, 'Europe', false, 5);

-- Question 38
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'TRANSLATE', 'Tôi đã gặp anh ấy trước khi anh ấy chuyển đi', 'I had met him before he moved away', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'I', false, 1), (q_id, 'had', false, 2), (q_id, 'met', false, 3), (q_id, 'him', false, 4),
(q_id, 'before', false, 5), (q_id, 'he', false, 6), (q_id, 'moved', false, 7), (q_id, 'away', false, 8);

-- Question 39
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'MULTIPLE_CHOICE', 'Despite ___ tired, she continued working.', 'being', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'being', true, 1), (q_id, 'be', false, 2), (q_id, 'been', false, 3);

-- Question 40
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('intermediate', 'WORD_ORDER', 'Sắp xếp: "Nếu tôi biết điều đó, tôi đã nói với bạn"', 'If I had known that I would have told you', 3, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'If', false, 1), (q_id, 'I', false, 2), (q_id, 'had', false, 3), (q_id, 'known', false, 4),
(q_id, 'that', false, 5), (q_id, 'I', false, 6), (q_id, 'would', false, 7), (q_id, 'have', false, 8),
(q_id, 'told', false, 9), (q_id, 'you', false, 10);

-- =====================================================
-- ADVANCED LEVEL (5 questions)
-- =====================================================

-- Question 41
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('advanced', 'MULTIPLE_CHOICE', 'Had I known about the problem, I ___ helped you.', 'would have', 4, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'would have', true, 1), (q_id, 'will have', false, 2), (q_id, 'would', false, 3);

-- Question 42
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('advanced', 'TRANSLATE', 'Không chỉ anh ấy thông minh mà còn rất chăm chỉ', 'Not only is he intelligent but he is also very hardworking', 4, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Not', false, 1), (q_id, 'only', false, 2), (q_id, 'is', false, 3), (q_id, 'he', false, 4),
(q_id, 'intelligent', false, 5), (q_id, 'but', false, 6), (q_id, 'he', false, 7), (q_id, 'is', false, 8),
(q_id, 'also', false, 9), (q_id, 'very', false, 10), (q_id, 'hardworking', false, 11);

-- Question 43
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('advanced', 'WORD_ORDER', 'Sắp xếp: "Hiếm khi tôi gặp ai đó có tài năng như vậy"', 'Rarely have I met someone so talented', 4, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Rarely', false, 1), (q_id, 'have', false, 2), (q_id, 'I', false, 3), (q_id, 'met', false, 4),
(q_id, 'someone', false, 5), (q_id, 'so', false, 6), (q_id, 'talented', false, 7);

-- Question 44
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('advanced', 'MULTIPLE_CHOICE', 'The committee ___ its decision by the end of the week.', 'will have made', 4, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'will have made', true, 1), (q_id, 'will make', false, 2), (q_id, 'has made', false, 3);

-- Question 45
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('advanced', 'TRANSLATE', 'Đã đến lúc chính phủ thực hiện hành động quyết định', 'It is time the government took decisive action', 4, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'It', false, 1), (q_id, 'is', false, 2), (q_id, 'time', false, 3), (q_id, 'the', false, 4),
(q_id, 'government', false, 5), (q_id, 'took', false, 6), (q_id, 'decisive', false, 7), (q_id, 'action', false, 8);

-- =====================================================
-- EXPERT LEVEL (5 questions)
-- =====================================================

-- Question 46
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('expert', 'MULTIPLE_CHOICE', 'The proposal, ___ merits are debatable, requires careful consideration.', 'whose', 5, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'whose', true, 1), (q_id, 'which', false, 2), (q_id, 'that', false, 3);

-- Question 47
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('expert', 'TRANSLATE', 'Giả sử anh ấy không đến, chúng ta sẽ phải hoãn cuộc họp', 'Should he not come we will have to postpone the meeting', 5, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Should', false, 1), (q_id, 'he', false, 2), (q_id, 'not', false, 3), (q_id, 'come', false, 4),
(q_id, 'we', false, 5), (q_id, 'will', false, 6), (q_id, 'have', false, 7), (q_id, 'to', false, 8),
(q_id, 'postpone', false, 9), (q_id, 'the', false, 10), (q_id, 'meeting', false, 11);

-- Question 48
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('expert', 'WORD_ORDER', 'Sắp xếp: "Không lúc nào trong lịch sử thế giới đã chứng kiến sự thay đổi như vậy"', 'Never in history has the world witnessed such change', 5, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Never', false, 1), (q_id, 'in', false, 2), (q_id, 'history', false, 3), (q_id, 'has', false, 4),
(q_id, 'the', false, 5), (q_id, 'world', false, 6), (q_id, 'witnessed', false, 7), (q_id, 'such', false, 8), (q_id, 'change', false, 9);

-- Question 49
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('expert', 'MULTIPLE_CHOICE', 'The phenomenon, ___ complexity has baffled scientists for decades, remains unexplained.', 'the', 5, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'the', true, 1), (q_id, 'whose', false, 2), (q_id, 'which', false, 3);

-- Question 50
INSERT INTO placement_questions (level, type, question_text, correct_answer, difficulty, created_at)
VALUES ('expert', 'TRANSLATE', 'Dù có thể gặp nhiều khó khăn, chúng ta vẫn phải tiếp tục', 'Whatever difficulties we may encounter we must carry on', 5, NOW()) RETURNING id INTO q_id;
INSERT INTO question_options (question_id, option_text, is_correct, display_order) VALUES
(q_id, 'Whatever', false, 1), (q_id, 'difficulties', false, 2), (q_id, 'we', false, 3), (q_id, 'may', false, 4),
(q_id, 'encounter', false, 5), (q_id, 'we', false, 6), (q_id, 'must', false, 7), (q_id, 'carry', false, 8), (q_id, 'on', false, 9);

END $$;
