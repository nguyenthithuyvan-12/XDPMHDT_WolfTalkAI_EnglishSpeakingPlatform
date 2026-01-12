-- Seed data for alphabet_questions table
-- NOTE: audio_url can be NULL - audio will be generated via Google Cloud TTS on-demand

-- Clear existing data (optional)
-- DELETE FROM alphabet_questions;

-- Listening questions
INSERT INTO alphabet_questions (question_type, target_word, target_ipa, option_a, option_b, option_c, option_d, correct_answer, difficulty_level) VALUES
('listening', 'dock', '/dɒk/', 'dock', 'deck', 'duck', 'dick', 'dock', 1),
('listening', 'sheep', '/ʃiːp/', 'ship', 'sheep', 'cheap', 'shape', 'sheep', 1),
('listening', 'bit', '/bɪt/', 'beat', 'bit', 'bet', 'bat', 'bit', 2),
('listening', 'full', '/fʊl/', 'fool', 'full', 'fall', 'feel', 'full', 2),
('listening', 'cat', '/kæt/', 'cat', 'cut', 'cot', 'cart', 'cat', 1),
('listening', 'bath', '/bɑːθ/', 'bath', 'bat', 'bass', 'path', 'bath', 2),
('listening', 'think', '/θɪŋk/', 'think', 'sink', 'thing', 'thick', 'think', 3),
('listening', 'measure', '/ˈmeʒə/', 'measure', 'major', 'mesh', 'message', 'measure', 3);

-- Comparison questions
INSERT INTO alphabet_questions (question_type, target_word, target_ipa, comparison_word, comparison_ipa, correct_answer, difficulty_level) VALUES
('comparison', 'deck', '/dek/', 'dock', '/dɒk/', 'different', 1),
('comparison', 'ship', '/ʃɪp/', 'sheep', '/ʃiːp/', 'different', 2),
('comparison', 'bad', '/bæd/', 'bad', '/bæd/', 'same', 1),
('comparison', 'seat', '/siːt/', 'sit', '/sɪt/', 'different', 2),
('comparison', 'pool', '/puːl/', 'pull', '/pʊl/', 'different', 3),
('comparison', 'cot', '/kɒt/', 'caught', '/kɔːt/', 'different', 3),
('comparison', 'than', '/ðæn/', 'then', '/ðen/', 'different', 2),
('comparison', 'berry', '/ˈberi/', 'very', '/ˈveri/', 'different', 2);

-- Speaking questions
INSERT INTO alphabet_questions (question_type, target_word, target_ipa, correct_answer, difficulty_level) VALUES
('speaking', 'got', '/ɡɒt/', 'got', 1),
('speaking', 'three', '/θriː/', 'three', 2),
('speaking', 'father', '/ˈfɑːðə/', 'father', 2),
('speaking', 'school', '/skuːl/', 'school', 1),
('speaking', 'church', '/tʃɜːtʃ/', 'church', 3),
('speaking', 'judge', '/dʒʌdʒ/', 'judge', 3),
('speaking', 'treasure', '/ˈtreʒə/', 'treasure', 4),
('speaking', 'thought', '/θɔːt/', 'thought', 3);
