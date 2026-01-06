import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PlacementTest.css";

const PlacementTestComplete: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to dashboard after 3 seconds
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="placement-test-container">
      <div className="placement-test-step">
        <div className="completion-screen">
          <div className="completion-icon">🎉</div>
          <h1 className="completion-title">Chúc mừng!</h1>
          <p className="completion-subtitle">
            Bạn đã hoàn thành bài kiểm tra đánh giá.
            <br />
            Chúng tôi đang chuẩn bị lộ trình học phù hợp nhất cho bạn...
          </p>

          <div className="wolf-mascot-large">
            <div className="wolf-circle">
              <span className="wolf-emoji">🐺</span>
            </div>
          </div>

          <button
            className="btn-start-test"
            onClick={() => navigate("/dashboard")}
          >
            Đi đến Bảng điều khiển
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementTestComplete;
