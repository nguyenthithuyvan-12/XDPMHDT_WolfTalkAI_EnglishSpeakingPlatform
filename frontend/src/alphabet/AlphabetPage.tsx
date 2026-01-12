import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./AlphabetPage.css";

interface Sound {
  ipa: string;
  example: string;
  progress: number;
}

interface UserProgress {
  totalCorrect: number;
  averagePronunciationScore: number;
  totalAttempts: number;
}

const AlphabetPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"vowels" | "consonants">("vowels");
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserProgress();

    // Check if returning from quiz
    if (location.state?.completed) {
      const { score } = location.state;
      alert(`Chúc mừng! Bạn đã hoàn thành quiz với ${score} câu đúng!`);
    }
  }, [location]);

  const loadUserProgress = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        "http://localhost:8080/api/alphabet/progress",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserProgress(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error loading progress:", error);
      setLoading(false);
    }
  };

  // Nguyên âm (Vowels)
  const vowels: Sound[] = [
    { ipa: "ɑ", example: "hot", progress: 0 },
    { ipa: "æ", example: "cat", progress: 0 },
    { ipa: "ʌ", example: "but", progress: 0 },
    { ipa: "e", example: "bed", progress: 0 },
    { ipa: "eɪ", example: "say", progress: 0 },
    { ipa: "ɜː", example: "bird", progress: 0 },
    { ipa: "ɪ", example: "ship", progress: 0 },
    { ipa: "iː", example: "sheep", progress: 0 },
    { ipa: "ə", example: "about", progress: 0 },
    { ipa: "ɒ", example: "boat", progress: 0 },
    { ipa: "ɔː", example: "foot", progress: 0 },
    { ipa: "ʊ", example: "food", progress: 0 },
    { ipa: "uː", example: "food", progress: 0 },
    { ipa: "aʊ", example: "cow", progress: 0 },
    { ipa: "aɪ", example: "time", progress: 0 },
    { ipa: "ɔɪ", example: "boy", progress: 0 },
  ];

  // Phụ âm (Consonants)
  const consonants: Sound[] = [
    { ipa: "b", example: "book", progress: 0 },
    { ipa: "tʃ", example: "chair", progress: 0 },
    { ipa: "d", example: "day", progress: 0 },
    { ipa: "f", example: "fish", progress: 0 },
    { ipa: "g", example: "go", progress: 0 },
    { ipa: "h", example: "home", progress: 0 },
    { ipa: "dʒ", example: "job", progress: 0 },
    { ipa: "k", example: "key", progress: 0 },
    { ipa: "l", example: "lion", progress: 0 },
    { ipa: "m", example: "moon", progress: 0 },
    { ipa: "n", example: "nose", progress: 0 },
    { ipa: "ŋ", example: "sing", progress: 0 },
    { ipa: "p", example: "pig", progress: 0 },
    { ipa: "r", example: "red", progress: 0 },
    { ipa: "s", example: "see", progress: 0 },
    { ipa: "ʃ", example: "measure", progress: 0 },
    { ipa: "ʃ", example: "shoe", progress: 0 },
    { ipa: "t", example: "time", progress: 0 },
    { ipa: "ð", example: "then", progress: 0 },
    { ipa: "θ", example: "think", progress: 0 },
    { ipa: "v", example: "very", progress: 0 },
    { ipa: "w", example: "water", progress: 0 },
    { ipa: "j", example: "you", progress: 0 },
    { ipa: "z", example: "zoo", progress: 0 },
  ];

  const currentSounds = activeTab === "vowels" ? vowels : consonants;

  const playSound = (sound: Sound) => {
    // TODO: Integrate with audio API
    console.log(`Playing sound: ${sound.ipa} - ${sound.example}`);
  };

  return (
    <div className="duolingo-dashboard">
      {/* Main Content Area */}
      <div className="learning-path-container">
        {/* Welcome Header */}
        <div className="alphabet-header">
          <h1>Cùng học phát âm tiếng Anh! 🎯</h1>
          <p className="alphabet-subtitle">
            Tập nghe và học phát âm các âm trong tiếng Anh
          </p>
          <button
            className="start-practice-btn"
            onClick={() => navigate("/alphabet/quiz")}
          >
            BẮT ĐẦU +10 KN
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="sound-tabs">
          <button
            className={`tab-btn ${activeTab === "vowels" ? "active" : ""}`}
            onClick={() => setActiveTab("vowels")}
          >
            Nguyên âm
          </button>
          <button
            className={`tab-btn ${activeTab === "consonants" ? "active" : ""}`}
            onClick={() => setActiveTab("consonants")}
          >
            Phụ âm
          </button>
        </div>

        {/* Sounds Grid */}
        <div className="sounds-grid">
          {currentSounds.map((sound, index) => (
            <div
              key={index}
              className="sound-card"
              onClick={() => playSound(sound)}
            >
              <div className="sound-ipa">{sound.ipa}</div>
              <div className="sound-example">{sound.example}</div>
              <div className="sound-progress-bar">
                <div
                  className="sound-progress-fill"
                  style={{ width: `${sound.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Stats Header */}
        <div className="stats-header">
          <h3>Thống kê</h3>
        </div>

        {loading ? (
          <div className="stats-loading">Đang tải...</div>
        ) : userProgress ? (
          <div className="stats-content">
            <div className="stat-item">
              <div className="stat-label">Tổng câu đúng</div>
              <div className="stat-value">{userProgress.totalCorrect}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Tổng bài làm</div>
              <div className="stat-value">{userProgress.totalAttempts}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Điểm phát âm TB</div>
              <div className="stat-value">
                {userProgress.averagePronunciationScore.toFixed(1)}%
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Độ chính xác</div>
              <div className="stat-value">
                {userProgress.totalAttempts > 0
                  ? Math.round(
                      (userProgress.totalCorrect / userProgress.totalAttempts) *
                        100
                    )
                  : 0}
                %
              </div>
            </div>
          </div>
        ) : (
          <div className="stats-empty">
            <p>Chưa có dữ liệu</p>
            <p>Hãy bắt đầu luyện tập!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlphabetPage;
