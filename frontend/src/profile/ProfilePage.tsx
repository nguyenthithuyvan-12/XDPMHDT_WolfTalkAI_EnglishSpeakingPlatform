import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import { apiClient } from "../services/api";

interface UserProfile {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  roles?: string;
  createdAt?: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    email: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"following" | "followers">(
    "following"
  );

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await apiClient.get<UserProfile>("/me");
        setUser(response);
      } catch (err) {
        console.error("Could not fetch profile", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const getInitials = () => {
    const first = user.firstName?.[0] || "";
    const last = user.lastName?.[0] || "";
    return (first + last).toUpperCase() || "U";
  };

  const getUsername = () => {
    return user.email?.split("@")[0] || "user";
  };

  const formatJoinDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    const months = [
      "Tháng Một",
      "Tháng Hai",
      "Tháng Ba",
      "Tháng Tư",
      "Tháng Năm",
      "Tháng Sáu",
      "Tháng Bảy",
      "Tháng Tám",
      "Tháng Chín",
      "Tháng Mười",
      "Tháng Mười Một",
      "Tháng Mười Hai",
    ];
    return `Đã tham gia ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="profile-page-duo">
        <div className="loading">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="profile-page-duo">
      <div className="profile-duo-container">
        {/* Left Main Content */}
        <div className="profile-main-content">
          {/* Profile Header Card */}
          <div className="profile-header-card">
            <div className="profile-avatar-large">
              <div className="avatar-placeholder">{getInitials()}</div>
              <button className="avatar-edit-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </button>
            </div>

            <div className="profile-header-info">
              <h1 className="profile-display-name">
                {user.firstName} {user.lastName}
              </h1>
              <p className="profile-username">{getUsername()}</p>
              <p className="profile-join-date">
                {formatJoinDate(user.createdAt)}
              </p>

              <div className="profile-follow-stats">
                <button className="follow-stat-btn active">
                  Đang theo dõi <strong>0</strong>
                </button>
                <button className="follow-stat-btn">
                  <strong>0</strong> Người theo dõi
                </button>
              </div>

              <div className="profile-country-flag">🇺🇸</div>
            </div>
          </div>

          {/* Follow Tabs */}
          <div className="profile-tabs">
            <button
              className={`profile-tab ${
                activeTab === "following" ? "active" : ""
              }`}
              onClick={() => setActiveTab("following")}
            >
              ĐANG THEO DÕI
            </button>
            <button
              className={`profile-tab ${
                activeTab === "followers" ? "active" : ""
              }`}
              onClick={() => setActiveTab("followers")}
            >
              NGƯỜI THEO DÕI
            </button>
          </div>

          {/* Tab Content */}
          <div className="profile-tab-content">
            <div className="empty-follow-state">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/4338922b73f6dc43e5f0f34e3cb904dd.svg"
                alt="Empty"
                className="empty-illustration"
              />
              <p>Kết nối bạn bè giúp học vui và hiệu quả hơn.</p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="profile-statistics">
            <h2 className="section-title">Thống kê</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-icon">🔥</div>
                <div className="stat-info">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Ngày streak</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon">💎</div>
                <div className="stat-info">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Tổng điểm KN</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon">🛡️</div>
                <div className="stat-info">
                  <div className="stat-value">Chưa có xếp hạng</div>
                  <div className="stat-label">Giải đấu hiện tại</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon">🏅</div>
                <div className="stat-info">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Số lần đạt top 3</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="profile-achievements">
            <div className="achievements-header">
              <h2 className="section-title">Thành tích</h2>
              <a href="#" className="view-all-link">
                XEM TẤT CẢ
              </a>
            </div>
            <div className="achievements-placeholder">
              <p>Chưa có thành tích nào</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="profile-footer-links">
            <a href="#">GIỚI THIỆU</a>
            <a href="#">CỬA HÀNG</a>
            <a href="#">TÍNH HIỆU QUẢ</a>
            <a href="#">CÔNG VIỆC</a>
            <a href="#">NHÀ ĐẦU TƯ</a>
            <a href="#">ĐIỀU KHOẢN</a>
            <a href="#">BẢO MẬT</a>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="profile-right-sidebar">
          <div className="add-friends-card">
            <h3>Thêm bạn bè</h3>
            <div className="friend-option">
              <div className="friend-icon">🔍</div>
              <div className="friend-info">
                <div className="friend-title">Tìm bạn bè</div>
              </div>
              <button className="friend-action-btn">›</button>
            </div>
            <div className="friend-option">
              <div className="friend-icon duolingo-green">🦉</div>
              <div className="friend-info">
                <div className="friend-title">Mời bạn bè</div>
              </div>
              <button className="friend-action-btn">›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
