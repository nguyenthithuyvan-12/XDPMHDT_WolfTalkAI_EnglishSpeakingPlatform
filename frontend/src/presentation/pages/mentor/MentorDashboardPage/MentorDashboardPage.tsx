// src/presentation/pages/mentor/MentorDashboardPage/MentorDashboardPage.tsx
import React from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import {
  BookOpen,
  Users,
  ClipboardList,
  Activity,
  TrendingUp,
  LineChart,
  BarChart3,
} from 'lucide-react';
import './MentorDashboardPage.css';

export const MentorDashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="mentor-dashboard">
      {/* Header */}
      <header className="mentor-dashboard__header glass-card">
        <div className="mentor-dashboard__header-main">
          <h1 className="mentor-dashboard__title">
            Dashboard Welcome, {user?.fullName}!
          </h1>
          <p className="mentor-dashboard__subtitle">
            Quick overview of your learners, assessments, and activity.
          </p>
        </div>
        <div className="mentor-dashboard__badge">
          <span className="mentor-dashboard__badge-dot" />
          Mentor
        </div>
      </header>

      {/* Overview row */}
      <section className="mentor-dashboard__overview glass-card">
        <div className="mentor-dashboard__overview-header">
          <div>
            <h2 className="mentor-dashboard__overview-title">Dashboard overview</h2>
            <p className="mentor-dashboard__overview-subtitle">
              Monitor learners, assessments, and engagement at a glance.
            </p>
          </div>
          <div className="mentor-dashboard__overview-pill">
            <TrendingUp size={16} />
            Last 30 days
          </div>
        </div>

        <div className="mentor-dashboard__overview-grid">
          <div className="mentor-dashboard__overview-card">
            <div className="mentor-dashboard__overview-icon mentor-dashboard__overview-icon--primary">
              <Users size={20} />
            </div>
            <p className="mentor-dashboard__overview-label">Total learners</p>
            <p className="mentor-dashboard__overview-value">24</p>
            <p className="mentor-dashboard__overview-trend mentor-dashboard__overview-trend--up">
              +12.5% vs last month
            </p>
          </div>

          <div className="mentor-dashboard__overview-card">
            <div className="mentor-dashboard__overview-icon mentor-dashboard__overview-icon--accent">
              <ClipboardList size={20} />
            </div>
            <p className="mentor-dashboard__overview-label">Active assessments</p>
            <p className="mentor-dashboard__overview-value">8</p>
            <p className="mentor-dashboard__overview-trend mentor-dashboard__overview-trend--up">
              +8.2% vs last month
            </p>
          </div>

          <div className="mentor-dashboard__overview-card">
            <div className="mentor-dashboard__overview-icon mentor-dashboard__overview-icon--warning">
              <BookOpen size={20} />
            </div>
            <p className="mentor-dashboard__overview-label">Materials shared</p>
            <p className="mentor-dashboard__overview-value">36</p>
            <p className="mentor-dashboard__overview-trend mentor-dashboard__overview-trend--neutral">
              Stable vs last month
            </p>
          </div>

          <div className="mentor-dashboard__overview-card">
            <div className="mentor-dashboard__overview-icon mentor-dashboard__overview-icon--success">
              <Activity size={20} />
            </div>
            <p className="mentor-dashboard__overview-label">Check‑ins this week</p>
            <p className="mentor-dashboard__overview-value">14</p>
            <p className="mentor-dashboard__overview-trend mentor-dashboard__overview-trend--up">
              +21% vs last week
            </p>
          </div>
        </div>
      </section>

      {/* Summary stats row (small cards) */}
      <section className="mentor-dashboard__grid">
        <div className="glass-card mentor-dashboard__stat">
          <div className="mentor-dashboard__stat-icon mentor-dashboard__stat-icon--primary">
            <Users size={22} />
          </div>
          <div>
            <p className="mentor-dashboard__stat-label">Active learners</p>
            <p className="mentor-dashboard__stat-value">12</p>
          </div>
        </div>

        <div className="glass-card mentor-dashboard__stat">
          <div className="mentor-dashboard__stat-icon mentor-dashboard__stat-icon--accent">
            <ClipboardList size={22} />
          </div>
          <div>
            <p className="mentor-dashboard__stat-label">Pending assessments</p>
            <p className="mentor-dashboard__stat-value">5</p>
          </div>
        </div>

        <div className="glass-card mentor-dashboard__stat">
          <div className="mentor-dashboard__stat-icon mentor-dashboard__stat-icon--warning">
            <BookOpen size={22} />
          </div>
          <div>
            <p className="mentor-dashboard__stat-label">Materials shared</p>
            <p className="mentor-dashboard__stat-value">18</p>
          </div>
        </div>

        <div className="glass-card mentor-dashboard__stat">
          <div className="mentor-dashboard__stat-icon mentor-dashboard__stat-icon--success">
            <Activity size={22} />
          </div>
          <div>
            <p className="mentor-dashboard__stat-label">Check‑ins this week</p>
            <p className="mentor-dashboard__stat-value">7</p>
          </div>
        </div>
      </section>

      {/* Charts row – giả lập biểu đồ */}
      <section className="mentor-dashboard__charts">
        <div className="glass-card mentor-dashboard__chart mentor-dashboard__chart--wide">
          <div className="mentor-dashboard__chart-header">
            <div className="mentor-dashboard__chart-title-wrap">
              <LineChart size={18} />
              <div>
                <h2 className="mentor-dashboard__chart-title">
                  Learner engagement trend
                </h2>
                <p className="mentor-dashboard__chart-subtitle">
                  Last 6 weeks · Check‑ins & assessments completed.
                </p>
              </div>
            </div>
          </div>
          {/* chart placeholder */}
          <div className="mentor-dashboard__chart-placeholder mentor-dashboard__chart-placeholder--line" />
        </div>

        <div className="glass-card mentor-dashboard__chart">
          <div className="mentor-dashboard__chart-header">
            <div className="mentor-dashboard__chart-title-wrap">
              <BarChart3 size={18} />
              <div>
                <h2 className="mentor-dashboard__chart-title">
                  Assessments by status
                </h2>
                <p className="mentor-dashboard__chart-subtitle">
                  Draft, scheduled, and completed assessments.
                </p>
              </div>
            </div>
          </div>
          {/* chart placeholder */}
          <div className="mentor-dashboard__chart-placeholder mentor-dashboard__chart-placeholder--bar" />
        </div>
      </section>

      {/* Bottom panel */}
      <section className="mentor-dashboard__panel glass-card">
        <h2 className="mentor-dashboard__panel-title">Upcoming sessions</h2>
        <p className="mentor-dashboard__panel-empty">
          No sessions scheduled yet. Plan your next meeting with learners.
        </p>
      </section>
    </div>
  );
};
