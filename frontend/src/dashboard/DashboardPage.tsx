import React from "react";
import "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);

  return (
    <div className="duolingo-dashboard">
      {/* Main Learning Path */}
      <div className="learning-path-container">
        <div className="unit-header">
          <button className="back-btn">← PHẦN 1, CỬA 1</button>
          <div className="unit-title">Mời khách xơi nước</div>
          <button className="guide-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M3 4h14v2H3V4zm0 5h14v2H3V9zm0 5h14v2H3v-2z" />
            </svg>
            HƯỚNG DẪN
          </button>
        </div>

        <div className="learning-path">
          {/* Level 1 - Start */}
          <div className="path-level">
            <div className="level-label">BẮT ĐẦU</div>
            <div
              className={`lesson-node active ${
                hoveredNode === 1 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredNode(1)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="#58cc02"
                  stroke="#46a302"
                  strokeWidth="3"
                />
                <path
                  d="M30 15 L35 25 L45 26 L37 34 L39 44 L30 39 L21 44 L23 34 L15 26 L25 25 Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Connector */}
          <div className="path-connector"></div>

          {/* Level 2 - Locked */}
          <div className="path-level">
            <div
              className={`lesson-node locked ${
                hoveredNode === 2 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredNode(2)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="#37464f"
                  stroke="#2b353b"
                  strokeWidth="3"
                />
                <path
                  d="M30 15 L35 25 L45 26 L37 34 L39 44 L30 39 L21 44 L23 34 L15 26 L25 25 Z"
                  fill="#4b5c69"
                />
              </svg>
            </div>
          </div>

          {/* Connector */}
          <div className="path-connector"></div>

          {/* Treasure chest */}
          <div className="path-level">
            <div className="treasure-chest">
              <svg width="80" height="60" viewBox="0 0 80 60">
                <rect
                  x="10"
                  y="20"
                  width="60"
                  height="35"
                  rx="5"
                  fill="#5a6978"
                />
                <rect
                  x="10"
                  y="20"
                  width="60"
                  height="15"
                  rx="5"
                  fill="#4a5968"
                />
                <rect x="35" y="25" width="10" height="20" fill="#3a4958" />
                <circle cx="40" cy="35" r="3" fill="#7a8998" />
              </svg>
            </div>
          </div>

          {/* Connector */}
          <div className="path-connector"></div>

          {/* Wolf mascot */}
          <div className="path-level">
            <div className="mascot-container">
              <div className="mascot-wolf">
                <div className="wolf-face">
                  <div className="wolf-ear left"></div>
                  <div className="wolf-ear right"></div>
                  <div className="wolf-head">
                    <div className="wolf-eyes">
                      <div className="wolf-eye left">
                        <div className="pupil"></div>
                      </div>
                      <div className="wolf-eye right">
                        <div className="pupil"></div>
                      </div>
                    </div>
                    <div className="wolf-snout">
                      <div className="wolf-nose"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="path-connector"></div>

          {/* Level 3 - Locked */}
          <div className="path-level">
            <div
              className={`lesson-node locked ${
                hoveredNode === 3 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredNode(3)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="#37464f"
                  stroke="#2b353b"
                  strokeWidth="3"
                />
                <path
                  d="M30 15 L35 25 L45 26 L37 34 L39 44 L30 39 L21 44 L23 34 L15 26 L25 25 Z"
                  fill="#4b5c69"
                />
              </svg>
            </div>
          </div>

          {/* Connector */}
          <div className="path-connector"></div>

          {/* Level 4 - Review */}
          <div className="path-level">
            <div
              className={`lesson-node review ${
                hoveredNode === 4 ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredNode(4)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="#37464f"
                  stroke="#2b353b"
                  strokeWidth="3"
                />
                <path
                  d="M25 20 L30 15 L35 20 L40 15 L45 25 L40 35 L35 45 L30 40 L25 45 L20 35 L15 25 L20 15 Z"
                  fill="#4b5c69"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="unit-description">
          <p className="unit-intro">Giới thiệu gốc gác</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        {/* Stats Header */}
        <div className="stats-header">
          <div className="stat-item">
            <div className="stat-icon flag">🇺🇸</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon flame">🔥</div>
            <span className="stat-value">0</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon gem">💎</div>
            <span className="stat-value">500</span>
          </div>
          <div className="stat-item">
            <div className="stat-icon heart">❤️</div>
            <span className="stat-value">5</span>
          </div>
        </div>

        {/* Unlock Leaderboard Card */}
        <div className="side-card">
          <div className="card-icon">🔒</div>
          <h3>Mở khóa Băng xếp hạng!</h3>
          <p>Hoàn thành thêm 10 bài học để bắt đầu thi đua</p>
        </div>

        {/* Daily Quest Card */}
        <div className="side-card daily-quest">
          <div className="quest-header">
            <h3>Nhiệm vụ hàng ngày</h3>
            <a href="#" className="view-all">
              XEM TẤT CẢ
            </a>
          </div>
          <div className="quest-item">
            <div className="quest-icon">⚡</div>
            <div className="quest-details">
              <p className="quest-title">Kiếm 10 KN</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "0%" }}></div>
              </div>
              <p className="quest-progress">0 / 10</p>
            </div>
            <div className="quest-reward">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFB800'%3E%3Cpath d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'/%3E%3C/svg%3E"
                alt="reward"
                width="24"
              />
            </div>
          </div>
        </div>

        {/* Create Profile Card */}
        <div className="side-card profile-cta">
          <h3>Tạo hồ sơ để lưu tiến trình của bạn!</h3>
          <button className="btn-create-profile">TẠO HỒ SƠ</button>
          <button className="btn-login">ĐĂNG NHẬP</button>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <a href="#">GIỚI THIỆU</a>
          <a href="#">CỬA HÀNG</a>
          <a href="#">TÍNH HIỆU QUẢ</a>
          <a href="#">CÔNG VIỆC</a>
          <a href="#">NHÀ ĐẦU TƯ</a>
          <a href="#">ĐIỀU KHOẢN</a>
          <a href="#">BẢO MẬT</a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
