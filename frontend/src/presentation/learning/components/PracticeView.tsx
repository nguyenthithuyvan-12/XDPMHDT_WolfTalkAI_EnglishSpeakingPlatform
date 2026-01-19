import React, { useState } from 'react';
// Updated to fix hook order
import type { PracticeExercise, QuizQuestion } from '../../../domain/learning/entities/PracticeMaterial';
import { FaCheckCircle, FaTimesCircle, FaVolumeUp, FaMicrophone, FaPen } from 'react-icons/fa';
import '../styles/Learning.css';

interface PracticeViewProps {
    exercise: PracticeExercise;
    onComplete: (score: number) => void;
    onBack?: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({ exercise, onComplete, onBack }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [userAnswer, setUserAnswer] = useState<string>(""); // For text input / ordering
    const [matchingPairs, setMatchingPairs] = useState<Record<string, string>>({}); // {leftId: rightId}
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);

    const [errorPair, setErrorPair] = useState<{ left: string; right: string } | null>(null);
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);

    const question = exercise.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === exercise.questions.length - 1;

    const handleAnswerSelection = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        checkAnswer(option);
    };

    const checkAnswer = (answer: string) => {
        const isCorrect = answer === question.correctAnswer;
        if (isCorrect) {
            setScore(prev => prev + 10);
            setFeedback("Chính xác! " + question.explanation);
        } else {
            setFeedback("Chưa chính xác. " + question.explanation);
        }
        setIsAnswered(true);
    };

    const handleNext = () => {
        if (isLastQuestion) {
            onComplete(score);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedOption(null);
            setUserAnswer("");
            setMatchingPairs({});
            setSelectedLeft(null); // Reset matching selection
            setErrorPair(null);
            setIsAnswered(false);
            setFeedback(null);
        }
    };

    // --- Sub-components (Renderers) ---

    // 1. Multiple Choice & Listening (Similar UI)
    const renderMultipleChoice = () => (
        <div className="options-grid">
            {question.options?.map((option, idx) => (
                <button
                    key={idx}
                    className={`option-card ${selectedOption === option ? (option === question.correctAnswer ? 'correct' : 'wrong') : ''}`}
                    onClick={() => handleAnswerSelection(option)}
                    disabled={isAnswered}
                >
                    {option}
                </button>
            ))}
        </div>
    );

    // 2. Matching
    const renderMatching = () => {
        const handleLeftClick = (id: string) => {
            if (isAnswered) return;
            // If already matched, allow re-selecting to change? Yes.
            setSelectedLeft(id);
        };

        const handleRightClick = (rightId: string) => {
            if (isAnswered || !selectedLeft) return;

            // 1. Create temporary new pairs state
            const newPairs = { ...matchingPairs, [selectedLeft]: rightId };
            setMatchingPairs(newPairs);
            setSelectedLeft(null);

            // 2. Check if ALL pairs are connected
            const totalPairs = question.pairs?.length || 0;
            if (Object.keys(newPairs).length === totalPairs) {
                // Batch Validation
                let correctCount = 0;
                question.pairs?.forEach(p => {
                    const userRightId = newPairs[p.id]; // The right ID user picked for this left ID
                    const expectedRightId = p.id + "_r"; // Logic used in render: right ID is leftID + "_r"
                    // Wait, rightId passed in is `p.id + "_r"` from render below.
                    if (userRightId === expectedRightId) {
                        correctCount++;
                    }
                });

                const earnedScore = correctCount * 5;
                setScore(prev => prev + earnedScore);

                if (correctCount === totalPairs) {
                    setFeedback(`Tuyệt vời! Bạn đúng tất cả (${correctCount}/${totalPairs}). +${earnedScore}XP`);
                } else {
                    setFeedback(`Bạn đúng ${correctCount}/${totalPairs} cặp. +${earnedScore}XP`);
                }
                setIsAnswered(true);
            }
        };

        return (
            <div className="matching-container">
                <div className="col-left">
                    {question.pairs?.map((p) => {
                        const userMatch = matchingPairs[p.id];
                        // State calculation
                        let statusClass = '';
                        if (isAnswered) {
                            // Validation phase
                            const expectedRightId = p.id + "_r";
                            if (userMatch === expectedRightId) statusClass = 'matched'; // Correct -> Green
                            else statusClass = 'error'; // Wrong -> Red
                        } else {
                            // Selection phase
                            if (selectedLeft === p.id) statusClass = 'selected';
                            else if (userMatch) statusClass = 'selected'; // Paired but not validated (Blue-ish)
                        }

                        return (
                            <button
                                key={p.id}
                                className={`match-item ${statusClass}`}
                                onClick={() => handleLeftClick(p.id)}
                            >
                                {p.left}
                            </button>
                        );
                    })}
                </div>
                <div className="col-right">
                    {question.pairs?.map((p) => {
                        const myId = p.id + "_r";
                        // Find if this right item is selected by ANY left item
                        const pairedLeftId = Object.keys(matchingPairs).find(key => matchingPairs[key] === myId);

                        let statusClass = '';
                        if (isAnswered) {
                            if (pairedLeftId) {
                                // Check correctness
                                // Actually simpler: Does pairedLeftId correspond to THIS right item?
                                // p.id of right item matches p.id of left item.
                                if (pairedLeftId === p.id) statusClass = 'matched';
                                else statusClass = 'error';
                            }
                        } else {
                            if (pairedLeftId) statusClass = 'selected';
                        }

                        return (
                            <button
                                key={myId}
                                className={`match-item ${statusClass}`}
                                onClick={() => handleRightClick(myId)}
                            >
                                {p.right}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    // 3. Ordering / Fill Blank / Writing (Input types)
    const renderInputType = () => {
        const checkInput = () => {
            let isCorrect = false;
            if (question.type === 'ordering') {
                // Strict comparison for ordering
                isCorrect = userAnswer.trim() === question.correctAnswer?.trim();
            } else {
                // Loose comparison for others
                isCorrect = userAnswer.toLowerCase().trim().includes(question.correctAnswer?.toLowerCase().trim() || "");
            }

            if (isCorrect) {
                setScore(prev => prev + 10);
                setFeedback("Chính xác! " + question.explanation);
            } else {
                setFeedback(`Chưa chính xác. Đáp án là: ${question.correctAnswer}`);
            }
            setIsAnswered(true);
        };

        return (
            <div className="input-question-container">
                {question.type === 'ordering' && (
                    <div className="segments-pool">
                        {question.segments?.map(seg => <span key={seg} className="segment-badge">{seg}</span>)}
                    </div>
                )}

                <textarea
                    className="answer-input"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Nhập câu trả lời của bạn..."
                    disabled={isAnswered}
                />

                {!isAnswered && (
                    <button className="check-btn" onClick={checkInput}>Kiểm tra</button>
                )}
            </div>
        );
    };

    // 4. Speaking
    const renderSpeaking = () => {
        const handleRecord = () => {
            // Mock recording
            setTimeout(() => {
                setScore(prev => prev + 10);
                setFeedback("AI đánh giá: 90/100 (Phát âm tốt!)");
                setIsAnswered(true);
            }, 1000);
        };

        return (
            <div className="speaking-container">
                <button className="mic-btn huge" onClick={handleRecord} disabled={isAnswered}>
                    <FaMicrophone /> {isAnswered ? "Đã thu âm" : "Nhấn để nói"}
                </button>
            </div>
        );
    };

    return (
        <div className="practice-view">
            <div className="practice-header">
                <button className="back-btn" onClick={onBack}>&larr; Thoát</button>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${((currentQuestionIndex + 1) / exercise.questions.length) * 100}%` }}
                    ></div>
                </div>
                <div className="score-badge">Điểm: {score}</div>
            </div>

            <div className="question-card">
                <span className="question-type-badge">{question.type?.toUpperCase()}</span>
                <h3 className="question-text">
                    {question.question}
                    {question.audioUrl && (
                        <button className="audio-play-btn" onClick={() => alert("Playing audio: " + question.audioUrl)}>
                            <FaVolumeUp />
                        </button>
                    )}
                </h3>
                {question.imageUrl && <img src={question.imageUrl} alt="Visual" className="question-image" />}

                <div className="interaction-area">
                    {question.type === 'multiple-choice' && renderMultipleChoice()}
                    {question.type === 'listening' && renderMultipleChoice()}
                    {question.type === 'matching' && renderMatching()}
                    {(question.type === 'fill-blank' || question.type === 'writing' || question.type === 'ordering') && renderInputType()}
                    {question.type === 'speaking' && renderSpeaking()}
                </div>

                {isAnswered && (
                    <div className={`feedback-message ${feedback?.includes("Chưa") ? 'error' : 'success'}`}>
                        {feedback?.includes("Chưa") ? <FaTimesCircle /> : <FaCheckCircle />}
                        <p>{feedback}</p>
                    </div>
                )}
            </div>

            <div className="navigation-footer">
                <button
                    className="next-btn"
                    onClick={handleNext}
                    disabled={!isAnswered}
                >
                    {isLastQuestion ? 'Hoàn thành' : 'Câu tiếp theo'}
                </button>
            </div>
        </div>
    );
};
