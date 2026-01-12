import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AlphabetQuiz.css";

// Configure axios defaults for this component
const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false, // Not sending cookies, using Bearer token instead
  headers: {
    "Content-Type": "application/json",
  },
});

type QuestionType = "listening" | "comparison" | "speaking";

interface Question {
  id: number;
  questionType: QuestionType;
  targetWord: string;
  targetIpa?: string;
  audioUrl?: string;
  optionA?: string;
  optionB?: string;
  optionC?: string;
  optionD?: string;
  correctAnswer: string;
  comparisonWord?: string;
  comparisonIpa?: string;
  comparisonAudioUrl?: string;
}

const AlphabetQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{
    message: string;
    code?: string;
    status?: number;
    details?: string;
  } | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playingAudioIndex, setPlayingAudioIndex] = useState<number | null>(
    null
  ); // Track which audio is playing: 1 or 2
  const [startTime, setStartTime] = useState<number>(Date.now());

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    loadQuestions();
    initializeSpeechRecognition();

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const loadQuestions = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await api.get("/api/alphabet/questions", {
        params: { limit: 10 },
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.data || response.data.length === 0) {
        setError({
          message: "Không tìm thấy câu hỏi nào. Vui lòng thử lại sau!",
          code: "NO_QUESTIONS",
          status: 200,
        });
        setQuestions([]);
      } else {
        setQuestions(response.data);
        setError(null);
      }
      setLoading(false);
      setStartTime(Date.now());
    } catch (error: any) {
      console.error("Error loading questions:", error);

      // Extract detailed error information
      const errorResponse = error.response?.data;
      const status = error.response?.status || 500;

      let errorMessage =
        "Không thể tải câu hỏi. Vui lòng kiểm tra kết nối và thử lại!";
      let errorCode = "UNKNOWN_ERROR";
      let errorDetails = "";

      if (errorResponse) {
        // Backend returned structured error
        errorMessage = errorResponse.message || errorMessage;
        errorCode = errorResponse.errorCode || errorResponse.error || errorCode;

        // Build detailed error info
        if (errorResponse.exceptionType) {
          errorDetails = `${errorResponse.exceptionType}: ${
            errorResponse.detailedMessage || ""
          }`;
        }
        if (errorResponse.debugInfo) {
          errorDetails += `\n\nLocation: ${errorResponse.debugInfo.class}.${errorResponse.debugInfo.method}:${errorResponse.debugInfo.line}`;
        }
        if (errorResponse.path) {
          errorDetails += `\n\nPath: ${errorResponse.path}`;
        }
        if (errorResponse.timestamp) {
          errorDetails += `\n\nTime: ${errorResponse.timestamp}`;
        }
      } else if (error.message) {
        // Network or other error
        errorMessage = error.message;
        if (error.code) {
          errorCode = error.code;
        }
      }

      setError({
        message: errorMessage,
        code: errorCode,
        status: status,
        details: errorDetails || undefined,
      });
      setQuestions([]);
      setLoading(false);
    }
  };

  const initializeSpeechRecognition = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        console.log("Speech recognized:", transcript);
        handleSpeechResult(transcript);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress =
    questions.length > 0
      ? ((currentQuestionIndex + 1) / questions.length) * 100
      : 0;

  // Audio playback using Google Cloud TTS API
  const playAudio = async (
    text?: string,
    audioUrl?: string,
    audioIndex?: number
  ) => {
    try {
      setIsPlayingAudio(true);
      if (audioIndex !== undefined) {
        setPlayingAudioIndex(audioIndex);
      }

      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      // If audioUrl exists, use it (legacy MP3 files)
      if (audioUrl && audioUrl.startsWith("/audio/")) {
        const fullUrl = `http://localhost:8080${audioUrl}`;
        console.log("Playing audio from URL:", fullUrl);
        audioRef.current = new Audio(fullUrl);
        audioRef.current.volume = 1.0; // Set volume to 100% (max)

        audioRef.current.onended = () => {
          setIsPlayingAudio(false);
          setPlayingAudioIndex(null);
        };
        audioRef.current.onerror = (e) => {
          console.error("Audio playback error:", e);
          setIsPlayingAudio(false);
          setPlayingAudioIndex(null);
          // Fallback to browser TTS if legacy audio fails
          if (text) {
            console.log("Legacy audio failed, trying browser TTS");
            playBrowserTTS(text);
          } else {
            console.warn("Audio playback failed, no fallback text available");
            setIsPlayingAudio(false);
          }
        };

        await audioRef.current.play();
        return;
      }

      // Otherwise, use TTS API to generate audio on-demand
      if (text) {
        console.log("Generating audio for text:", text);
        const token = localStorage.getItem("accessToken");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await fetch(
          `http://localhost:8080/api/audio/generate?text=${encodeURIComponent(
            text
          )}&lang=en-US`,
          {
            method: "GET",
            headers: headers,
            credentials: "omit",
          }
        );

        // If TTS service not configured (503), use browser fallback
        if (response.status === 503) {
          const errorData = await response.json();
          if (errorData.useBrowserTTS) {
            console.log("Backend TTS not available, using browser TTS");
            playBrowserTTS(text);
            return;
          }
        }

        if (!response.ok) {
          const errorText = await response.text().catch(() => "Unknown error");
          console.error("Audio generation failed:", response.status, errorText);
          // Fallback to browser TTS on any error
          console.log("Falling back to browser TTS");
          playBrowserTTS(text);
          return;
        }

        const audioBlob = await response.blob();
        console.log("Audio blob received:", audioBlob.size, "bytes");

        if (audioBlob.size === 0) {
          console.log("Empty audio blob, using browser TTS");
          playBrowserTTS(text);
          return;
        }

        const audioObjectUrl = URL.createObjectURL(audioBlob);
        audioRef.current = new Audio(audioObjectUrl);
        audioRef.current.volume = 1.0; // Set volume to 100% (max)

        audioRef.current.onended = () => {
          setIsPlayingAudio(false);
          setPlayingAudioIndex(null);
          URL.revokeObjectURL(audioObjectUrl); // Clean up
        };

        audioRef.current.onerror = (e) => {
          console.error("Audio playback error:", e);
          setIsPlayingAudio(false);
          setPlayingAudioIndex(null);
          URL.revokeObjectURL(audioObjectUrl);
          // Fallback to browser TTS
          playBrowserTTS(text);
        };

        await audioRef.current.play();
        console.log("Audio playing successfully");
      }
    } catch (error: any) {
      console.error("Error playing audio:", error);
      setIsPlayingAudio(false);
      setPlayingAudioIndex(null);

      // Fallback to browser TTS
      if (text) {
        console.log("Error occurred, falling back to browser TTS");
        playBrowserTTS(text);
      } else {
        console.warn("Audio playback failed with no fallback text");
      }
    }
  };

  // Browser's built-in Text-to-Speech (Web Speech API fallback)
  const playBrowserTTS = (text: string) => {
    try {
      if (!("speechSynthesis" in window)) {
        console.error("Browser TTS not supported");
        setIsPlayingAudio(false);
        // Silently fail - don't show alert
        return;
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      // Function to actually speak after voices are loaded
      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 0.85; // Slightly slower for learning
        utterance.pitch = 1.0;
        utterance.volume = 1.0; // Max volume

        // Try to find an English voice
        const voices = window.speechSynthesis.getVoices();
        const englishVoice = voices.find(
          (voice) =>
            voice.lang.startsWith("en-") ||
            voice.lang === "en" ||
            voice.name.includes("English")
        );

        if (englishVoice) {
          utterance.voice = englishVoice;
          console.log("Using voice:", englishVoice.name);
        } else {
          console.log("No specific English voice found, using default");
        }

        utterance.onstart = () => {
          console.log("Browser TTS started:", text);
          setIsPlayingAudio(true);
        };

        utterance.onend = () => {
          console.log("Browser TTS ended");
          setIsPlayingAudio(false);
        };

        utterance.onerror = (event) => {
          console.error("Browser TTS error:", event.error);
          setIsPlayingAudio(false);

          // Only show error for non-canceled errors
          if (event.error !== "canceled" && event.error !== "interrupted") {
            console.warn("TTS playback failed, but continuing silently");
          }
        };

        window.speechSynthesis.speak(utterance);
        console.log("Browser TTS speak() called");
      };

      // Get voices and speak
      const voices = window.speechSynthesis.getVoices();

      if (voices.length > 0) {
        // Voices already loaded
        speak();
      } else {
        // Wait for voices to load (Chrome needs this)
        console.log("Waiting for voices to load...");

        const voicesChangedHandler = () => {
          window.speechSynthesis.removeEventListener(
            "voiceschanged",
            voicesChangedHandler
          );
          console.log(
            "Voices loaded:",
            window.speechSynthesis.getVoices().length
          );
          speak();
        };

        window.speechSynthesis.addEventListener(
          "voiceschanged",
          voicesChangedHandler
        );

        // Timeout fallback - speak anyway after 500ms
        setTimeout(() => {
          window.speechSynthesis.removeEventListener(
            "voiceschanged",
            voicesChangedHandler
          );
          speak();
        }, 500);
      }
    } catch (error) {
      console.error("Browser TTS error:", error);
      setIsPlayingAudio(false);
      // Silently fail - don't interrupt user experience
    }
  };

  const handleSelectAnswer = (answer: string) => {
    if (!isChecking) {
      setSelectedAnswer(answer);
    }
  };

  const saveProgress = async (
    isCorrect: boolean,
    pronunciationScore?: number
  ) => {
    try {
      const token = localStorage.getItem("accessToken");
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      await api.post(
        "/api/alphabet/progress",
        {
          questionId: currentQuestion.id,
          userAnswer: selectedAnswer,
          isCorrect: isCorrect,
          pronunciationScore: pronunciationScore,
          timeSpentSeconds: timeSpent,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };

  const handleCheck = async () => {
    if (!selectedAnswer && currentQuestion.questionType !== "speaking") return;

    setIsChecking(true);
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      setStreak(streak + 1);
    }

    await saveProgress(correct);
  };

  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setIsChecking(false);
      setIsCorrect(null);
      setStartTime(Date.now());
    } else {
      // Quiz completed
      navigate("/alphabet", {
        state: { completed: true, score: streak },
      });
    }
  };

  const handleSkip = () => {
    handleContinue();
  };

  const handleMicrophoneRecord = () => {
    if (!recognitionRef.current) {
      console.warn("Speech recognition not supported");
      // Show a gentle message instead of alert
      setIsChecking(true);
      setIsCorrect(false);
      setTimeout(() => {
        handleSkip();
      }, 2000);
      return;
    }

    if (isRecording) {
      console.log("Stopping speech recognition");
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      console.log("Starting speech recognition");
      setIsRecording(true);
      try {
        recognitionRef.current.start();
      } catch (error) {
        console.error("Error starting recognition:", error);
        setIsRecording(false);
      }
    }
  };

  const handleSpeechResult = async (transcript: string) => {
    const targetWord = currentQuestion.targetWord.toLowerCase().trim();
    const similarity = calculateSimilarity(transcript, targetWord);
    const score = similarity * 100;
    const correct = similarity > 0.7; // 70% threshold

    setSelectedAnswer(transcript);
    setIsChecking(true);
    setIsCorrect(correct);

    if (correct) {
      setStreak(streak + 1);
    }

    await saveProgress(correct, score);
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;

    if (longer.length === 0) return 1.0;

    const editDistance = (s1: string, s2: string): number => {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
      const costs: number[] = [];

      for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
          if (i === 0) {
            costs[j] = j;
          } else if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            }
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
        if (i > 0) {
          costs[s2.length] = lastValue;
        }
      }
      return costs[s2.length];
    };

    return (longer.length - editDistance(longer, shorter)) / longer.length;
  };

  const renderListeningQuestion = () => {
    const options = [
      currentQuestion.optionA,
      currentQuestion.optionB,
      currentQuestion.optionC,
      currentQuestion.optionD,
    ].filter(Boolean);

    return (
      <div className="quiz-content">
        <h2 className="quiz-question-title">Bạn nghe được gì?</h2>

        <div className="audio-button-container">
          <button
            className={`audio-play-button ${isPlayingAudio ? "playing" : ""}`}
            onClick={() =>
              playAudio(currentQuestion.targetWord, currentQuestion.audioUrl)
            }
          >
            <div className="audio-button-waves">
              <span className="wave wave-1"></span>
              <span className="wave wave-2"></span>
              <span className="wave wave-3"></span>
            </div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="#1CB0F6" />
              <g transform="translate(30, 25)">
                <path d="M8 5v20l15-10L8 5z" fill="white" />
                <path
                  d="M25 8c1.5 1.5 2.5 3.5 2.5 6s-1 4.5-2.5 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M29 4c3 3 5 7 5 12s-2 9-5 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            </svg>
          </button>
        </div>

        <div className="answer-options">
          {options.map((option, index) => (
            <button
              key={index}
              className={`answer-option ${
                selectedAnswer === option ? "selected" : ""
              } ${
                isChecking && option === currentQuestion.correctAnswer
                  ? "correct"
                  : ""
              } ${
                isChecking && selectedAnswer === option && !isCorrect
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => handleSelectAnswer(option!)}
              disabled={isChecking}
            >
              <span className="option-number">{index + 1}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderComparisonQuestion = () => {
    return (
      <div className="quiz-content">
        <h2 className="quiz-question-title">Nghe và trả lời</h2>

        <div className="comparison-audio-box">
          <div
            className={`comparison-audio-item ${
              playingAudioIndex === 1 ? "playing" : ""
            }`}
            onClick={() =>
              playAudio(currentQuestion.targetWord, currentQuestion.audioUrl, 1)
            }
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1CB0F6">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <div className="audio-placeholder">
              <div className="placeholder-line"></div>
            </div>
            {isChecking && (
              <div className="word-reveal">
                <span className="word-text">{currentQuestion.targetWord}</span>
                <span className="word-ipa">{currentQuestion.targetIpa}</span>
              </div>
            )}
          </div>
          <div
            className={`comparison-audio-item ${
              playingAudioIndex === 2 ? "playing" : ""
            }`}
            onClick={() =>
              playAudio(
                currentQuestion.comparisonWord,
                currentQuestion.comparisonAudioUrl,
                2
              )
            }
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1CB0F6">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <div className="audio-placeholder">
              <div className="placeholder-line"></div>
            </div>
            {isChecking && (
              <div className="word-reveal">
                <span className="word-text">
                  {currentQuestion.comparisonWord}
                </span>
                <span className="word-ipa">
                  {currentQuestion.comparisonIpa}
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="comparison-hint">Bạn nghe thấy gì?</p>

        <div className="answer-options comparison-options">
          <button
            className={`answer-option ${
              selectedAnswer === "same" ? "selected" : ""
            } ${
              isChecking && currentQuestion.correctAnswer === "same"
                ? "correct"
                : ""
            } ${
              isChecking && selectedAnswer === "same" && !isCorrect
                ? "incorrect"
                : ""
            }`}
            onClick={() => handleSelectAnswer("same")}
            disabled={isChecking}
          >
            <span className="option-number">1</span>
            <span className="option-text">cùng một từ</span>
          </button>
          <button
            className={`answer-option ${
              selectedAnswer === "different" ? "selected" : ""
            } ${
              isChecking && currentQuestion.correctAnswer === "different"
                ? "correct"
                : ""
            } ${
              isChecking && selectedAnswer === "different" && !isCorrect
                ? "incorrect"
                : ""
            }`}
            onClick={() => handleSelectAnswer("different")}
            disabled={isChecking}
          >
            <span className="option-number">2</span>
            <span className="option-text">khác nhau</span>
          </button>
        </div>
      </div>
    );
  };

  const renderSpeakingQuestion = () => {
    return (
      <div className="quiz-content">
        <h2 className="quiz-question-title">Đọc câu này</h2>

        <div className="speaking-character-container">
          <div className="character-avatar">
            <div className="character-circle">
              <span className="character-emoji">👤</span>
            </div>
          </div>
          <div
            className="speech-bubble"
            onClick={() =>
              playAudio(currentQuestion.targetWord, currentQuestion.audioUrl)
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#1CB0F6">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
            <span className="speech-text">{currentQuestion.targetWord}</span>
            <span className="word-ipa">{currentQuestion.targetIpa}</span>
          </div>
        </div>

        <button
          className={`microphone-button ${isRecording ? "recording" : ""}`}
          onClick={handleMicrophoneRecord}
          disabled={isChecking}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4s4-1.8 4-4V6c0-2.2-1.8-4-4-4zm8 10h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6H8c0 4.1 3.2 7.5 7 7.9V26h2v-6.1c3.8-.4 7-3.8 7-7.9z" />
          </svg>
          <span>{isRecording ? "ĐANG GHI ÂM..." : "NHẤN ĐỂ ĐỌC"}</span>
        </button>

        {selectedAnswer && (
          <div className="recognition-result">
            <p>
              Bạn đã nói: <strong>{selectedAnswer}</strong>
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderQuestion = () => {
    if (loading) {
      return (
        <div className="quiz-content">
          <div className="loading-spinner">Đang tải câu hỏi...</div>
        </div>
      );
    }

    if (error || questions.length === 0 || !currentQuestion) {
      return (
        <div
          className="quiz-content"
          style={{
            textAlign: "center",
            padding: "40px 20px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            ⚠️
          </div>
          <h2
            style={{
              color: "#ff4b4b",
              marginBottom: "10px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {error?.message || "Không có câu hỏi"}
          </h2>

          {/* Error Code and Status */}
          {error && (error.code || error.status) && (
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              {error.code && (
                <span
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#ff4b4b20",
                    color: "#ff4b4b",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "monospace",
                  }}
                >
                  {error.code}
                </span>
              )}
              {error.status && (
                <span
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#ff8c4b20",
                    color: "#ff8c4b",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: "600",
                    fontFamily: "monospace",
                  }}
                >
                  HTTP {error.status}
                </span>
              )}
            </div>
          )}

          <p
            style={{
              color: "#888",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          >
            {questions.length === 0
              ? "Hệ thống chưa có câu hỏi nào. Vui lòng liên hệ quản trị viên hoặc thử lại sau."
              : "Đã xảy ra lỗi khi tải câu hỏi."}
          </p>

          {/* Detailed Error Info (Collapsible) */}
          {error?.details && (
            <details
              style={{
                textAlign: "left",
                backgroundColor: "#2a2a2a",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                fontSize: "13px",
                fontFamily: "monospace",
                color: "#ccc",
                border: "1px solid #444",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#ff8c4b",
                  marginBottom: "10px",
                  userSelect: "none",
                }}
              >
                🔍 Chi tiết lỗi (dành cho developer)
              </summary>
              <pre
                style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: "12px",
                  lineHeight: "1.6",
                }}
              >
                {error.details}
              </pre>
            </details>
          )}
          <button
            onClick={() => {
              setError(null);
              setLoading(true);
              loadQuestions();
            }}
            style={{
              padding: "12px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#1CB0F6",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            THỬ LẠI
          </button>
          <button
            onClick={() => navigate("/alphabet")}
            style={{
              padding: "12px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#888",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            QUAY LẠI
          </button>
        </div>
      );
    }

    switch (currentQuestion.questionType) {
      case "listening":
        return renderListeningQuestion();
      case "comparison":
        return renderComparisonQuestion();
      case "speaking":
        return renderSpeakingQuestion();
      default:
        return null;
    }
  };

  return (
    <div className="alphabet-quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <button
          className="quiz-close-btn"
          onClick={() => navigate("/alphabet")}
        >
          ✕
        </button>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        {streak > 0 && (
          <div className="quiz-streak">
            <span className="streak-text">{streak} LẦN LIÊN TIẾP</span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="quiz-main">{renderQuestion()}</div>

      {/* Footer */}
      <div className="quiz-footer">
        {isCorrect !== null ? (
          <div className={`feedback-banner ${isCorrect ? "success" : "error"}`}>
            <div className="feedback-content">
              <div className="feedback-icon">
                {isCorrect ? (
                  <div className="check-circle">✓</div>
                ) : (
                  <div className="x-circle">✗</div>
                )}
              </div>
              <div className="feedback-text">
                <h3>{isCorrect ? "Bạn làm tốt lắm!" : "Đáp án đúng:"}</h3>
                {!isCorrect &&
                  currentQuestion?.questionType === "comparison" && (
                    <p className="correct-answer">
                      {currentQuestion.targetWord} {currentQuestion.targetIpa},{" "}
                      {currentQuestion.comparisonWord}{" "}
                      {currentQuestion.comparisonIpa}
                    </p>
                  )}
              </div>
            </div>
            <button className="continue-btn" onClick={handleContinue}>
              TIẾP TỤC
            </button>
          </div>
        ) : (
          <div className="action-buttons">
            <button className="skip-btn" onClick={handleSkip}>
              {currentQuestion?.questionType === "speaking"
                ? "TẠM THỜI KHÔNG NÓI ĐƯỢC"
                : "BỎ QUA"}
            </button>
            {currentQuestion?.questionType !== "speaking" && (
              <button
                className={`check-btn ${
                  selectedAnswer ? "active" : "disabled"
                }`}
                onClick={handleCheck}
                disabled={!selectedAnswer}
              >
                KIỂM TRA
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlphabetQuiz;
