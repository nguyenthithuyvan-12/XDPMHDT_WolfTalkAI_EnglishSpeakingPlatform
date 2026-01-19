import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../services/api";
import type { LearningProfile, LearningGoal, UserPreference } from "./types";
import "./ProfileSettings.css";

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<
    "profile" | "goals" | "preferences"
  >("profile");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Learning Profile State
  const [profile, setProfile] = useState<LearningProfile>({
    currentLevel: "Beginner",
    targetLevel: "Intermediate",
    studyHoursPerWeek: 5,
    preferredLearningStyle: "Visual",
    learningPurpose: "Daily Life",
    speakingConfidence: 5,
    bio: "",
  });

  // Learning Goals State
  const [goals, setGoals] = useState<LearningGoal[]>([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoal, setNewGoal] = useState<Partial<LearningGoal>>({
    goalType: "WEEKLY",
    goalCategory: "SPEAKING_TIME",
    title: "",
    targetValue: 0,
    currentValue: 0,
    unit: "minutes",
    status: "ACTIVE",
    priority: 1,
    isCompleted: false,
  });

  // User Preferences State
  const [preferences, setPreferences] = useState<UserPreference>({
    interestedTopics: [],
    preferredScenarios: [],
    preferredAccent: "American",
    difficultyPreference: "ADAPTIVE",
    dailyPracticeTime: 30,
    reminderEnabled: true,
    reminderTime: "19:00",
    enableAiFeedback: true,
    enablePronunciationCheck: true,
    enableGrammarCheck: true,
    feedbackDetailLevel: "MEDIUM",
    practiceWithMentor: false,
    showSubtitles: true,
    backgroundMusicEnabled: false,
  });

  const availableTopics = [
    "Travel",
    "Business",
    "Technology",
    "Health",
    "Food",
    "Sports",
    "Entertainment",
    "Education",
  ];

  const availableScenarios = [
    "Job Interview",
    "Restaurant",
    "Shopping",
    "Airport",
    "Hotel",
    "Meeting",
    "Small Talk",
    "Presentation",
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  const showMessage = (type: "success" | "error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      // Fetch Learning Profile
      try {
        const profileData =
          await apiClient.get<LearningProfile>("/learning-profile");
        setProfile(profileData);
      } catch (err) {
        console.log("No profile found, using defaults");
      }

      // Fetch Learning Goals
      try {
        const goalsData =
          await apiClient.get<LearningGoal[]>("/learning-goals");
        setGoals(goalsData);
      } catch (err) {
        console.log("No goals found");
      }

      // Fetch User Preferences
      try {
        const prefsData =
          await apiClient.get<UserPreference>("/user-preferences");
        setPreferences(prefsData);
      } catch (err) {
        console.log("No preferences found, using defaults");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    setSaving(true);
    try {
      if (profile.id) {
        await apiClient.put("/learning-profile", profile);
      } else {
        await apiClient.post("/learning-profile", profile);
      }
      showMessage("success", "✅ Đã lưu hồ sơ học tập thành công!");
      await fetchAllData();
    } catch (error) {
      console.error("Error saving profile:", error);
      showMessage("error", "❌ Lỗi khi lưu hồ sơ!");
    } finally {
      setSaving(false);
    }
  };

  const savePreferences = async () => {
    setSaving(true);
    try {
      if (preferences.id) {
        await apiClient.put("/user-preferences", preferences);
      } else {
        await apiClient.post("/user-preferences", preferences);
      }
      showMessage("success", "✅ Đã lưu sở thích thành công!");
      await fetchAllData();
    } catch (error) {
      console.error("Error saving preferences:", error);
      showMessage("error", "❌ Lỗi khi lưu sở thích!");
    } finally {
      setSaving(false);
    }
  };

  const addGoal = async () => {
    if (!newGoal.title || !newGoal.targetValue) {
      showMessage("error", "⚠️ Vui lòng nhập đầy đủ thông tin mục tiêu!");
      return;
    }

    setSaving(true);
    try {
      const createdGoal = await apiClient.post<LearningGoal>(
        "/learning-goals",
        newGoal,
      );
      setGoals([...goals, createdGoal]);
      setShowAddGoal(false);
      setNewGoal({
        goalType: "WEEKLY",
        goalCategory: "SPEAKING_TIME",
        title: "",
        targetValue: 0,
        currentValue: 0,
        unit: "minutes",
        status: "ACTIVE",
        priority: 1,
        isCompleted: false,
      });
      showMessage("success", "✅ Đã thêm mục tiêu mới!");
    } catch (error) {
      console.error("Error adding goal:", error);
      showMessage("error", "❌ Lỗi khi thêm mục tiêu!");
    } finally {
      setSaving(false);
    }
  };

  const updateGoalProgress = async (goalId: number, newValue: number) => {
    try {
      const updated = await apiClient.patch<LearningGoal>(
        `/learning-goals/${goalId}/progress?value=${newValue}`,
      );
      setGoals(goals.map((g) => (g.id === goalId ? updated : g)));
      showMessage("success", "✅ Đã cập nhật tiến độ!");
    } catch (error) {
      console.error("Error updating goal:", error);
      showMessage("error", "❌ Lỗi khi cập nhật!");
    }
  };

  const deleteGoal = async (goalId: number) => {
    if (!window.confirm("Bạn có chắc muốn xóa mục tiêu này?")) return;

    try {
      await apiClient.delete(`/learning-goals/${goalId}`);
      setGoals(goals.filter((g) => g.id !== goalId));
      showMessage("success", "✅ Đã xóa mục tiêu!");
    } catch (error) {
      console.error("Error deleting goal:", error);
      showMessage("error", "❌ Lỗi khi xóa!");
    }
  };

  const toggleTopic = (topic: string) => {
    setPreferences({
      ...preferences,
      interestedTopics: preferences.interestedTopics.includes(topic)
        ? preferences.interestedTopics.filter((t) => t !== topic)
        : [...preferences.interestedTopics, topic],
    });
  };

  const toggleScenario = (scenario: string) => {
    setPreferences({
      ...preferences,
      preferredScenarios: preferences.preferredScenarios.includes(scenario)
        ? preferences.preferredScenarios.filter((s) => s !== scenario)
        : [...preferences.preferredScenarios, scenario],
    });
  };

  if (loading) {
    return (
      <div className="duolingo-dashboard">
        <div className="learning-path-container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Đang tải dữ liệu...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="duolingo-dashboard">
      <div className="learning-path-container profile-settings">
        {/* Header with back button */}
        <div className="settings-header">
          <div className="header-top">
            <button className="btn-back" onClick={() => navigate("/profile")}>
              ← QUAY LẠI
            </button>
            <h1>
              <span className="settings-icon">⚙️</span>
              Cài Đặt Hồ Sơ Học Tập
            </h1>
          </div>
          <div className="settings-tabs">
            <button
              className={`tab-btn ${activeSection === "profile" ? "active" : ""}`}
              onClick={() => setActiveSection("profile")}
            >
              <span className="tab-icon">📋</span>
              <span className="tab-label">Hồ Sơ</span>
            </button>
            <button
              className={`tab-btn ${activeSection === "goals" ? "active" : ""}`}
              onClick={() => setActiveSection("goals")}
            >
              <span className="tab-icon">🎯</span>
              <span className="tab-label">Mục Tiêu</span>
            </button>
            <button
              className={`tab-btn ${activeSection === "preferences" ? "active" : ""}`}
              onClick={() => setActiveSection("preferences")}
            >
              <span className="tab-icon">⭐</span>
              <span className="tab-label">Sở Thích</span>
            </button>
          </div>
        </div>

        {/* Message Toast */}
        {message && (
          <div className={`message-toast ${message.type}`}>{message.text}</div>
        )}

        {/* Learning Profile Section */}
        {activeSection === "profile" && (
          <div className="settings-section animate-in">
            <div className="section-header-main">
              <div>
                <h2>📋 Hồ Sơ Học Tập</h2>
                <p className="section-description">
                  Thiết lập thông tin về trình độ và mục tiêu học tập của bạn
                </p>
              </div>
            </div>

            <div className="form-card">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="currentLevel">
                    <span className="label-icon">📊</span>
                    Trình độ hiện tại
                  </label>
                  <select
                    id="currentLevel"
                    value={profile.currentLevel}
                    onChange={(e) =>
                      setProfile({ ...profile, currentLevel: e.target.value })
                    }
                    title="Chọn trình độ hiện tại"
                  >
                    <option value="Beginner">🌱 Beginner (Sơ cấp)</option>
                    <option value="Intermediate">
                      🌿 Intermediate (Trung cấp)
                    </option>
                    <option value="Advanced">🌳 Advanced (Nâng cao)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="targetLevel">
                    <span className="label-icon">🎯</span>
                    Mục tiêu trình độ
                  </label>
                  <select
                    id="targetLevel"
                    value={profile.targetLevel}
                    onChange={(e) =>
                      setProfile({ ...profile, targetLevel: e.target.value })
                    }
                    title="Chọn mục tiêu trình độ"
                  >
                    <option value="Intermediate">
                      🌿 Intermediate (Trung cấp)
                    </option>
                    <option value="Advanced">🌳 Advanced (Nâng cao)</option>
                    <option value="Expert">🏆 Expert (Chuyên gia)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="studyHours">
                    <span className="label-icon">⏰</span>
                    Số giờ học mỗi tuần
                  </label>
                  <input
                    id="studyHours"
                    type="number"
                    min="1"
                    max="40"
                    value={profile.studyHoursPerWeek}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        studyHoursPerWeek: parseInt(e.target.value) || 0,
                      })
                    }
                    placeholder="Ví dụ: 5 giờ"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="learningStyle">
                    <span className="label-icon">🎨</span>
                    Phong cách học
                  </label>
                  <select
                    id="learningStyle"
                    value={profile.preferredLearningStyle}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        preferredLearningStyle: e.target.value,
                      })
                    }
                    title="Chọn phong cách học"
                  >
                    <option value="Visual">👁️ Visual (Thị giác)</option>
                    <option value="Auditory">👂 Auditory (Thính giác)</option>
                    <option value="Kinesthetic">
                      🤸 Kinesthetic (Vận động)
                    </option>
                    <option value="Reading/Writing">
                      📖 Reading/Writing (Đọc viết)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="learningPurpose">
                    <span className="label-icon">💼</span>
                    Mục đích học
                  </label>
                  <select
                    id="learningPurpose"
                    value={profile.learningPurpose}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        learningPurpose: e.target.value,
                      })
                    }
                    title="Chọn mục đích học"
                  >
                    <option value="Business">💼 Business (Kinh doanh)</option>
                    <option value="Travel">✈️ Travel (Du lịch)</option>
                    <option value="Academic">🎓 Academic (Học thuật)</option>
                    <option value="Daily Life">
                      🏠 Daily Life (Sinh hoạt)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="confidence">
                    <span className="label-icon">💪</span>
                    Độ tự tin khi nói:{" "}
                    <strong>{profile.speakingConfidence}/10</strong>
                  </label>
                  <input
                    id="confidence"
                    type="range"
                    min="1"
                    max="10"
                    value={profile.speakingConfidence}
                    onChange={(e) =>
                      setProfile({
                        ...profile,
                        speakingConfidence: parseInt(e.target.value),
                      })
                    }
                    title={`Độ tự tin: ${profile.speakingConfidence}/10`}
                  />
                  <div className="confidence-labels">
                    <span>😰 Rất thấp</span>
                    <span>😊 Trung bình</span>
                    <span>😎 Rất cao</span>
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="bio">
                  <span className="label-icon">✍️</span>
                  Giới thiệu bản thân
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  value={profile.bio || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  placeholder="Chia sẻ về bản thân, mục tiêu học tập và những gì bạn muốn đạt được..."
                />
              </div>

              <button
                className="btn-save-main"
                onClick={saveProfile}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span className="spinner-small"></span> Đang lưu...
                  </>
                ) : (
                  <>💾 Lưu Hồ Sơ</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Learning Goals Section */}
        {activeSection === "goals" && (
          <div className="settings-section animate-in">
            <div className="section-header-main">
              <div>
                <h2>🎯 Mục Tiêu Học Tập</h2>
                <p className="section-description">
                  Đặt mục tiêu và theo dõi tiến độ học tập của bạn
                </p>
              </div>
              <button
                className="btn-add-goal"
                onClick={() => setShowAddGoal(!showAddGoal)}
              >
                {showAddGoal ? "✖ Hủy" : "+ Thêm Mục Tiêu"}
              </button>
            </div>

            {showAddGoal && (
              <div className="add-goal-form animate-in">
                <h3>✨ Tạo Mục Tiêu Mới</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="goalType">Loại mục tiêu</label>
                    <select
                      id="goalType"
                      value={newGoal.goalType}
                      onChange={(e) =>
                        setNewGoal({ ...newGoal, goalType: e.target.value })
                      }
                      title="Chọn loại mục tiêu"
                    >
                      <option value="DAILY">📅 Hàng ngày</option>
                      <option value="WEEKLY">📆 Hàng tuần</option>
                      <option value="MONTHLY">🗓️ Hàng tháng</option>
                      <option value="CUSTOM">⚙️ Tùy chỉnh</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="goalCategory">Danh mục</label>
                    <select
                      id="goalCategory"
                      value={newGoal.goalCategory}
                      onChange={(e) =>
                        setNewGoal({ ...newGoal, goalCategory: e.target.value })
                      }
                      title="Chọn danh mục"
                    >
                      <option value="SPEAKING_TIME">🗣️ Thời gian nói</option>
                      <option value="VOCABULARY">📚 Từ vựng</option>
                      <option value="PRONUNCIATION">🎤 Phát âm</option>
                      <option value="FLUENCY">💫 Lưu loát</option>
                      <option value="LESSONS">📖 Bài học</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="goalTitle">Tiêu đề</label>
                    <input
                      id="goalTitle"
                      type="text"
                      value={newGoal.title}
                      onChange={(e) =>
                        setNewGoal({ ...newGoal, title: e.target.value })
                      }
                      placeholder="Ví dụ: Luyện nói 30 phút mỗi ngày"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="goalTarget">Giá trị mục tiêu</label>
                    <input
                      id="goalTarget"
                      type="number"
                      min="1"
                      value={newGoal.targetValue}
                      onChange={(e) =>
                        setNewGoal({
                          ...newGoal,
                          targetValue: parseInt(e.target.value) || 0,
                        })
                      }
                      placeholder="Ví dụ: 30"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="goalUnit">Đơn vị</label>
                    <select
                      id="goalUnit"
                      value={newGoal.unit}
                      onChange={(e) =>
                        setNewGoal({ ...newGoal, unit: e.target.value })
                      }
                      title="Chọn đơn vị"
                    >
                      <option value="minutes">⏱️ Phút</option>
                      <option value="words">📝 Từ</option>
                      <option value="lessons">📚 Bài học</option>
                      <option value="sessions">🎯 Buổi học</option>
                    </select>
                  </div>
                </div>

                <button
                  className="btn-save-main"
                  onClick={addGoal}
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span className="spinner-small"></span> Đang thêm...
                    </>
                  ) : (
                    <>✓ Thêm Mục Tiêu</>
                  )}
                </button>
              </div>
            )}

            <div className="goals-list">
              {goals.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-icon">🎯</div>
                  <h3>Chưa có mục tiêu nào</h3>
                  <p>
                    Hãy tạo mục tiêu đầu tiên để bắt đầu hành trình học tập!
                  </p>
                </div>
              ) : (
                goals.map((goal) => (
                  <div key={goal.id} className="goal-card animate-in">
                    <div className="goal-header">
                      <h3>{goal.title}</h3>
                      <span
                        className={`goal-badge ${goal.status?.toLowerCase()}`}
                      >
                        {goal.status}
                      </span>
                    </div>
                    {goal.description && (
                      <p className="goal-description">{goal.description}</p>
                    )}
                    <div className="goal-progress">
                      <div className="progress-bar-wrapper">
                        <div
                          className="progress-bar-fill"
                          data-progress={goal.progressPercentage || 0}
                        ></div>
                      </div>
                      <span className="progress-text">
                        {goal.currentValue} / {goal.targetValue} {goal.unit} (
                        {goal.progressPercentage || 0}%)
                      </span>
                    </div>
                    <div className="goal-actions">
                      <button
                        className="btn-update"
                        onClick={() => {
                          const newValue = window.prompt(
                            `Nhập giá trị mới (hiện tại: ${goal.currentValue}):`,
                            goal.currentValue?.toString(),
                          );
                          if (newValue && goal.id) {
                            updateGoalProgress(goal.id, parseInt(newValue));
                          }
                        }}
                      >
                        📊 Cập nhật
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => goal.id && deleteGoal(goal.id)}
                      >
                        🗑️ Xóa
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* User Preferences Section */}
        {activeSection === "preferences" && (
          <div className="settings-section animate-in">
            <div className="section-header-main">
              <div>
                <h2>⭐ Sở Thích & Cài Đặt</h2>
                <p className="section-description">
                  Tùy chỉnh trải nghiệm học tập theo sở thích của bạn
                </p>
              </div>
            </div>

            <div className="form-card">
              <div className="preference-group">
                <h3>🌟 Chủ đề quan tâm</h3>
                <p className="group-description">
                  Chọn các chủ đề bạn muốn luyện tập
                </p>
                <div className="tags-container">
                  {availableTopics.map((topic) => (
                    <button
                      key={topic}
                      className={`tag ${preferences.interestedTopics.includes(topic) ? "selected" : ""}`}
                      onClick={() => toggleTopic(topic)}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              <div className="preference-group">
                <h3>🎭 Kịch bản ưa thích</h3>
                <p className="group-description">
                  Chọn các tình huống giao tiếp bạn muốn học
                </p>
                <div className="tags-container">
                  {availableScenarios.map((scenario) => (
                    <button
                      key={scenario}
                      className={`tag ${preferences.preferredScenarios.includes(scenario) ? "selected" : ""}`}
                      onClick={() => toggleScenario(scenario)}
                    >
                      {scenario}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="accent">
                    <span className="label-icon">🗣️</span>
                    Giọng ưa thích
                  </label>
                  <select
                    id="accent"
                    value={preferences.preferredAccent}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        preferredAccent: e.target.value,
                      })
                    }
                    title="Chọn giọng ưa thích"
                  >
                    <option value="American">🇺🇸 American</option>
                    <option value="British">🇬🇧 British</option>
                    <option value="Australian">🇦🇺 Australian</option>
                    <option value="Canadian">🇨🇦 Canadian</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="difficulty">
                    <span className="label-icon">📊</span>
                    Độ khó
                  </label>
                  <select
                    id="difficulty"
                    value={preferences.difficultyPreference}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        difficultyPreference: e.target.value,
                      })
                    }
                    title="Chọn độ khó"
                  >
                    <option value="EASY">😊 Dễ</option>
                    <option value="MEDIUM">🙂 Trung bình</option>
                    <option value="HARD">😤 Khó</option>
                    <option value="ADAPTIVE">🤖 Tự động điều chỉnh</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="practiceTime">
                    <span className="label-icon">⏱️</span>
                    Thời gian luyện tập hàng ngày
                  </label>
                  <input
                    id="practiceTime"
                    type="number"
                    min="5"
                    max="180"
                    value={preferences.dailyPracticeTime}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        dailyPracticeTime: parseInt(e.target.value) || 0,
                      })
                    }
                    placeholder="Phút"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reminderTime">
                    <span className="label-icon">⏰</span>
                    Thời gian nhắc nhở
                  </label>
                  <input
                    id="reminderTime"
                    type="time"
                    value={preferences.reminderTime}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        reminderTime: e.target.value,
                      })
                    }
                    title="Chọn thời gian nhắc nhở"
                  />
                </div>
              </div>

              <div className="toggles-section">
                <h3>🤖 Cài đặt AI & Phản hồi</h3>
                <div className="toggles-grid">
                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.enableAiFeedback}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          enableAiFeedback: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">🤖</span>
                      Bật phản hồi AI
                    </span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.enablePronunciationCheck}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          enablePronunciationCheck: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">🎤</span>
                      Kiểm tra phát âm
                    </span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.enableGrammarCheck}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          enableGrammarCheck: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">📝</span>
                      Kiểm tra ngữ pháp
                    </span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.practiceWithMentor}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          practiceWithMentor: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">👨‍🏫</span>
                      Luyện tập với Mentor
                    </span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.showSubtitles}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          showSubtitles: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">📺</span>
                      Hiển thị phụ đề
                    </span>
                  </label>

                  <label className="toggle-item">
                    <input
                      type="checkbox"
                      checked={preferences.reminderEnabled}
                      onChange={(e) =>
                        setPreferences({
                          ...preferences,
                          reminderEnabled: e.target.checked,
                        })
                      }
                    />
                    <span className="toggle-label">
                      <span className="toggle-icon">🔔</span>
                      Bật nhắc nhở
                    </span>
                  </label>
                </div>
              </div>

              <button
                className="btn-save-main"
                onClick={savePreferences}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <span className="spinner-small"></span> Đang lưu...
                  </>
                ) : (
                  <>💾 Lưu Sở Thích</>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="settings-sidebar">
        <div className="sidebar-card">
          <div className="sidebar-icon">💡</div>
          <h3>Mẹo học tập</h3>
          <p>
            Thiết lập mục tiêu rõ ràng và theo dõi tiến độ hàng ngày để đạt kết
            quả tốt nhất!
          </p>
        </div>

        <div className="sidebar-card">
          <div className="sidebar-icon">📊</div>
          <h3>Thống kê của bạn</h3>
          <div className="stat-item">
            <span className="stat-label">Ngày học liên tục</span>
            <span className="stat-value">0 ngày 🔥</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Tổng thời gian học</span>
            <span className="stat-value">0 giờ ⏱️</span>
          </div>
        </div>

        <div className="sidebar-card sidebar-help">
          <div className="sidebar-icon">❓</div>
          <h3>Cần trợ giúp?</h3>
          <p>
            Liên hệ với chúng tôi nếu bạn gặp khó khăn trong việc thiết lập hồ
            sơ.
          </p>
          <button className="btn-help">Liên hệ hỗ trợ</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
