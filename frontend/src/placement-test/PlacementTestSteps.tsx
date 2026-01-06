import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { placementTestService } from "./api";
import type { PlacementTest } from "./types";
import "./PlacementTest.css";

const PlacementTestSteps: React.FC = () => {
  const { testId, stepNumber } = useParams<{
    testId: string;
    stepNumber: string;
  }>();
  const navigate = useNavigate();
  const [, setTest] = useState<PlacementTest | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const currentStep = parseInt(stepNumber || "1");

  // Step 1: Language Selection
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Step 2: Daily Goal
  const [dailyGoal, setDailyGoal] = useState(10);

  // Step 3: Learning Goals (multi-select)
  const [learningGoals, setLearningGoals] = useState<string[]>([]);

  // Step 4: Current Level
  const [currentLevel, setCurrentLevel] = useState("");

  // Step 5: Learning Reasons (multi-select)
  const [learningReasons, setLearningReasons] = useState<string[]>([]);

  // Step 6: Discovery Source
  const [discoverySource, setDiscoverySource] = useState("");

  useEffect(() => {
    loadCurrentTest();
  }, []);

  const loadCurrentTest = async () => {
    try {
      const currentTest = await placementTestService.getCurrentTest();
      setTest(currentTest);

      // Load saved values
      if (currentTest.targetLanguage)
        setSelectedLanguage(currentTest.targetLanguage);
      if (currentTest.dailyGoalMinutes)
        setDailyGoal(currentTest.dailyGoalMinutes);
      if (currentTest.learningGoals)
        setLearningGoals(currentTest.learningGoals);
      if (currentTest.currentLevel) setCurrentLevel(currentTest.currentLevel);
      if (currentTest.learningReasons)
        setLearningReasons(currentTest.learningReasons);
      if (currentTest.discoverySource)
        setDiscoverySource(currentTest.discoverySource);
    } catch (error) {
      console.error("Failed to load test:", error);
    }
  };

  const handleNext = async () => {
    setIsLoading(true);
    try {
      const updateData: {
        testId: number;
        step: number;
        targetLanguage?: string;
        dailyGoalMinutes?: number;
        learningGoals?: string[];
        currentLevel?: string;
        learningReasons?: string[];
        discoverySource?: string;
      } = {
        testId: parseInt(testId!),
        step: currentStep,
      };

      if (currentStep === 1) updateData.targetLanguage = selectedLanguage;
      if (currentStep === 2) updateData.dailyGoalMinutes = dailyGoal;
      if (currentStep === 3) updateData.learningGoals = learningGoals;
      if (currentStep === 4) updateData.currentLevel = currentLevel;
      if (currentStep === 5) updateData.learningReasons = learningReasons;
      if (currentStep === 6) updateData.discoverySource = discoverySource;

      await placementTestService.updateStep(updateData);

      // Navigate to next step
      if (currentStep < 7) {
        navigate(`/placement-test/${testId}/step/${currentStep + 1}`);
      } else {
        // Complete test
        navigate(`/placement-test/${testId}/complete`);
      }
    } catch (error) {
      console.error("Failed to save step:", error);
      alert("Lỗi khi lưu. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      navigate(`/placement-test/${testId}/step/${currentStep - 1}`);
    } else {
      navigate("/placement-test");
    }
  };

  const toggleMultiSelect = (
    value: string,
    list: string[],
    setList: (list: string[]) => void
  ) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const isStepValid = () => {
    if (currentStep === 1) return selectedLanguage !== "";
    if (currentStep === 2) return dailyGoal > 0;
    if (currentStep === 3) return learningGoals.length > 0;
    if (currentStep === 4) return currentLevel !== "";
    if (currentStep === 5) return learningReasons.length > 0;
    if (currentStep === 6) return discoverySource !== "";
    return false;
  };

  const renderStep = () => {
    if (currentStep === 1) {
      return (
        <>
          <h2 className="step-title">Bạn muốn học ngôn ngữ gì?</h2>
          <p className="step-subtitle">
            Chọn ngôn ngữ bạn muốn học tại WolfTalk
          </p>
          <div className="selection-options">
            {[
              { value: "english", icon: "🇺🇸", text: "Tiếng Anh" },
              { value: "chinese", icon: "🇨🇳", text: "Tiếng Hoa" },
              { value: "japanese", icon: "🇯🇵", text: "Tiếng Nhật" },
              { value: "korean", icon: "🇰🇷", text: "Tiếng Hàn" },
              { value: "french", icon: "🇫🇷", text: "Tiếng Pháp" },
              { value: "spanish", icon: "🇪🇸", text: "Tiếng Tây Ban Nha" },
            ].map((lang) => (
              <div
                key={lang.value}
                className={`selection-option ${
                  selectedLanguage === lang.value ? "selected" : ""
                }`}
                onClick={() => setSelectedLanguage(lang.value)}
              >
                <span className="option-icon">{lang.icon}</span>
                <span className="option-text">{lang.text}</span>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (currentStep === 2) {
      return (
        <>
          <h2 className="step-title">Mục tiêu học tập hàng ngày</h2>
          <p className="step-subtitle">
            Bạn muốn dành bao nhiêu thời gian mỗi ngày?
          </p>
          <div className="slider-container">
            <div className="slider-labels">
              <span
                className={`slider-label ${dailyGoal === 5 ? "active" : ""}`}
              >
                Nhẹ nhàng
              </span>
              <span
                className={`slider-label ${dailyGoal === 10 ? "active" : ""}`}
              >
                Bình thường
              </span>
              <span
                className={`slider-label ${dailyGoal === 15 ? "active" : ""}`}
              >
                Nghiêm túc
              </span>
              <span
                className={`slider-label ${dailyGoal === 20 ? "active" : ""}`}
              >
                Cường độ cao
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="20"
              step="5"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(parseInt(e.target.value))}
              className="slider-input"
              aria-label="Daily goal in minutes"
            />
            <div className="slider-value">{dailyGoal} phút/ngày</div>
          </div>
        </>
      );
    }

    if (currentStep === 3) {
      return (
        <>
          <h2 className="step-title">Thành quả bạn muốn đạt được</h2>
          <p className="step-subtitle">
            Chọn một hoặc nhiều mục tiêu (có thể chọn nhiều)
          </p>
          <div className="multi-select-options">
            {[
              {
                value: "confident_speaking",
                icon: "💬",
                text: "Tự tin giao tiếp",
              },
              {
                value: "rich_vocabulary",
                icon: "📚",
                text: "Kho từ vựng đa dạng",
              },
              {
                value: "study_habit",
                icon: "📅",
                text: "Tạo thói quen học tập",
              },
              {
                value: "career_advancement",
                icon: "💼",
                text: "Phát triển sự nghiệp",
              },
              {
                value: "travel_preparation",
                icon: "✈️",
                text: "Chuẩn bị đi du lịch",
              },
              {
                value: "entertainment",
                icon: "🎬",
                text: "Giải trí (phim, nhạc, sách...)",
              },
            ].map((goal) => (
              <div
                key={goal.value}
                className={`multi-select-option ${
                  learningGoals.includes(goal.value) ? "selected" : ""
                }`}
                onClick={() =>
                  toggleMultiSelect(goal.value, learningGoals, setLearningGoals)
                }
              >
                <div className="checkbox"></div>
                <span className="option-icon">{goal.icon}</span>
                <span className="option-text">{goal.text}</span>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (currentStep === 4) {
      return (
        <>
          <h2 className="step-title">Trình độ hiện tại của bạn</h2>
          <p className="step-subtitle">
            Đánh giá thật lòng để chúng tôi tư vấn chính xác nhất
          </p>
          <div className="selection-options">
            {[
              {
                value: "beginner",
                text: "Tôi mới học",
                desc: "Chưa có kiến thức gì",
              },
              {
                value: "elementary",
                text: "Tôi biết một vài từ",
                desc: "Có thể nói một vài cụm từ đơn giản",
              },
              {
                value: "intermediate",
                text: "Tôi có thể giao tiếp cơ bản",
                desc: "Hiểu và trả lời câu hỏi thường gặp",
              },
              {
                value: "upper_intermediate",
                text: "Tôi có thể nói về nhiều chủ đề",
                desc: "Giao tiếp tốt trong hầu hết tình huống",
              },
              {
                value: "advanced",
                text: "Tôi có thể đi sâu vào hầu hết các chủ đề",
                desc: "Thành thạo và tự tin",
              },
            ].map((level) => (
              <div
                key={level.value}
                className={`selection-option vertical ${
                  currentLevel === level.value ? "selected" : ""
                }`}
                onClick={() => setCurrentLevel(level.value)}
              >
                <div className="option-text option-text-bold">{level.text}</div>
                <div className="option-desc">{level.desc}</div>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (currentStep === 5) {
      return (
        <>
          <h2 className="step-title">Tại sao bạn học tiếng Anh?</h2>
          <p className="step-subtitle">Chọn một hoặc nhiều lý do</p>
          <div className="multi-select-options">
            {[
              { value: "career", icon: "💼", text: "Phát triển sự nghiệp" },
              { value: "study", icon: "📖", text: "Hỗ trợ việc học tập" },
              { value: "travel", icon: "✈️", text: "Chuẩn bị đi du lịch" },
              {
                value: "free_time",
                icon: "⏰",
                text: "Tận dụng thời gian rảnh",
              },
              { value: "connect", icon: "👥", text: "Kết nối với mọi người" },
              { value: "entertainment", icon: "🎬", text: "Giải trí" },
              { value: "other", icon: "🔖", text: "Khác" },
            ].map((reason) => (
              <div
                key={reason.value}
                className={`multi-select-option ${
                  learningReasons.includes(reason.value) ? "selected" : ""
                }`}
                onClick={() =>
                  toggleMultiSelect(
                    reason.value,
                    learningReasons,
                    setLearningReasons
                  )
                }
              >
                <div className="checkbox"></div>
                <span className="option-icon">{reason.icon}</span>
                <span className="option-text">{reason.text}</span>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (currentStep === 6) {
      return (
        <>
          <h2 className="step-title">Bạn biết tới WolfTalk từ đâu?</h2>
          <p className="step-subtitle">
            Giúp chúng tôi hiểu bạn tìm thấy chúng tôi như thế nào
          </p>
          <div className="selection-options">
            {[
              { value: "google", icon: "🔍", text: "Google" },
              { value: "tiktok", icon: "📱", text: "TikTok" },
              { value: "youtube", icon: "📺", text: "YouTube" },
              { value: "facebook", icon: "👍", text: "Facebook/Instagram" },
              { value: "friend", icon: "👥", text: "Bạn bè giới thiệu" },
              { value: "ad", icon: "📢", text: "Quảng cáo" },
              { value: "other", icon: "💡", text: "Khác" },
            ].map((source) => (
              <div
                key={source.value}
                className={`selection-option ${
                  discoverySource === source.value ? "selected" : ""
                }`}
                onClick={() => setDiscoverySource(source.value)}
              >
                <span className="option-icon">{source.icon}</span>
                <span className="option-text">{source.text}</span>
              </div>
            ))}
          </div>
        </>
      );
    }

    if (currentStep === 7) {
      return (
        <div className="encouragement-screen">
          <div className="encouragement-mascot">
            <div className="wolf-circle">
              <span className="wolf-emoji">🐺</span>
            </div>
          </div>
          <h2 className="encouragement-title">Tuyệt vời! Bạn đã sẵn sàng!</h2>
          <p className="encouragement-text">
            Chúng ta đã hiểu rõ về bạn rồi. Giờ hãy cùng bắt đầu hành trình
            <br />
            chinh phục ngôn ngữ mới nào! 🎉
          </p>
        </div>
      );
    }

    return null;
  };

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="placement-test-container">
      <div className="placement-test-step">
        <div className="test-progress">
          <div className="progress-bar-container">
            <div className="progress-bar-fill" data-progress={progress}></div>
          </div>
          <div className="progress-text">
            Bước {currentStep} / {totalSteps}
          </div>
        </div>

        {renderStep()}

        <div className="step-navigation">
          <button className="btn-back" onClick={handleBack}>
            Quay lại
          </button>
          <button
            className="btn-next"
            onClick={handleNext}
            disabled={!isStepValid() || isLoading}
          >
            {currentStep === 7 ? "Hoàn thành" : "Tiếp tục"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementTestSteps;
