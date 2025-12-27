// src/presentation/pages/mentor/FeedbackPage/FeedbackPage.tsx
import React from 'react';
import {
  MessageSquare,
  Star,
  Filter,
  Search,
  AlertCircle,
} from 'lucide-react';
import './FeedbackPage.css';

export const FeedbackPage: React.FC = () => {
  return (
    <div className="feedback-page">
      {/* Header */}
      <header className="feedback-page__header glass-card">
        <div className="feedback-page__header-main">
          <div className="feedback-page__header-icon">
            <MessageSquare size={22} />
          </div>
          <div>
            <h1 className="feedback-page__title">Feedback</h1>
            <p className="feedback-page__subtitle">
              Review session feedback and insights from your learners.
            </p>
          </div>
        </div>

        <div className="feedback-page__actions">
          <button className="feedback-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="feedback-page__icon-button" type="button">
            <Filter size={18} />
          </button>
        </div>
      </header>

      {/* Empty state / main card */}
      <section className="feedback-page__content glass-card">
        <div className="feedback-page__empty">
          <div className="feedback-page__empty-icon">
            <Star size={30} />
          </div>
          <h2 className="feedback-page__empty-title">
            Feedback management – coming soon
          </h2>
          <p className="feedback-page__empty-text">
            Soon you will be able to see ratings, comments, and trends for your
            mentoring sessions in one place.
          </p>

          <div className="feedback-page__hint">
            <AlertCircle size={16} />
            <span>
              This section is under active development. Check back in a later
              release.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
