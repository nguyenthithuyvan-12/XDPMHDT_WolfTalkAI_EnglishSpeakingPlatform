import React from "react";
import { useNavigate } from "react-router-dom";
import { placementTestService } from "./api";
import "./PlacementTest.css";

const PlacementTestLanding: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isChecking, setIsChecking] = React.useState(true);

  // Check if user has already completed the test
  React.useEffect(() => {
    const checkTestCompletion = async () => {
      try {
        const hasCompleted = await placementTestService.hasCompletedTest();
        if (hasCompleted) {
          // User has already completed the test, redirect to dashboard
          navigate("/dashboard", { replace: true });
        }
      } catch (error) {
        console.error("Failed to check test completion:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkTestCompletion();
  }, [navigate]);

  const handleStart = async () => {
    setIsLoading(true);
    try {
      const test = await placementTestService.startTest();
      // Navigate to step 1: Language selection
      navigate(`/placement-test/${test.id}/step/1`);
    } catch (error) {
      console.error("Failed to start test:", error);
      alert("Không thể bắt đầu bài kiểm tra. Vui lòng thử lại!");
    } finally {
      setIsLoading(false);
    }
  };

  // Show loading while checking if test is completed
  if (isChecking) {
    return (
      <div className="placement-test-container-dark">
        <div className="placement-test-card placement-test-landing">
          <div className="wolf-mascot-large">
            <div className="wolf-circle">
              <span className="wolf-emoji">🐺</span>
            </div>
          </div>
          <p className="landing-subtitle">Đang kiểm tra...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="placement-test-container-dark">
      <div className="placement-test-card placement-test-landing">
        <div className="wolf-mascot-large">
          <div className="wolf-circle">
            <span className="wolf-emoji">🐺</span>
          </div>
        </div>

        <h1 className="landing-title">Chào mừng đến với WolfTalk!</h1>

        <p className="landing-subtitle">
          Hãy làm bài kiểm tra nhanh để chúng tôi hiểu rõ trình độ của bạn và
          <br />
          tạo lộ trình học phù hợp nhất!
        </p>

        <div className="landing-features">
          <div className="feature-item">
            <span className="feature-icon">⏱️</span>
            <span className="feature-text">Chỉ mất 5-10 phút</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <span className="feature-text">Xác định trình độ chính xác</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📚</span>
            <span className="feature-text">Lộ trình học cá nhân hóa</span>
          </div>
        </div>

        <button
          className="btn-start-test"
          onClick={handleStart}
          disabled={isLoading}
        >
          {isLoading ? "Đang tải..." : "BẮT ĐẦU"}
        </button>

        <p className="landing-note">
          💡 Đừng lo lắng! Không có đúng hay sai, chỉ cần trả lời thật tự nhiên
          nhé
        </p>
      </div>
    </div>
  );
};

export default PlacementTestLanding;
