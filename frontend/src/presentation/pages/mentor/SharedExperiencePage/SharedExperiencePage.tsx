// src/presentation/pages/mentor/SharedExperiencePage/SharedExperiencePage.tsx
import React from 'react';
import {
  Sparkles,
  Search,
  Filter,
  Plus,
  AlertCircle,
} from 'lucide-react';
import './SharedExperiencePage.css';

export const SharedExperiencePage: React.FC = () => {
  return (
    <div className="shared-experience-page">
      {/* Header */}
      <header className="shared-experience-page__header glass-card">
        <div className="shared-experience-page__header-main">
          <div className="shared-experience-page__header-icon">
            <Sparkles size={22} />
          </div>
          <div>
            <h1 className="shared-experience-page__title">Shared Experience</h1>
            <p className="shared-experience-page__subtitle">
              Share your insights and success stories with the community.
            </p>
          </div>
        </div>

        <div className="shared-experience-page__actions">
          <button className="shared-experience-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="shared-experience-page__icon-button" type="button">
            <Filter size={18} />
          </button>
          <button className="shared-experience-page__primary-button" type="button">
            <Plus size={18} />
            Share story
          </button>
        </div>
      </header>

      {/* Empty state */}
      <section className="shared-experience-page__content glass-card">
        <div className="shared-experience-page__empty">
          <div className="shared-experience-page__empty-icon">
            <Sparkles size={32} />
          </div>
          <h2 className="shared-experience-page__empty-title">
            Shared experience – coming soon
          </h2>
          <p className="shared-experience-page__empty-text">
            Soon you will be able to share your mentoring journey, best
            practices, and success stories with other mentors and learners.
          </p>

          <div className="shared-experience-page__hint">
            <AlertCircle size={16} />
            <span>
              This feature is under development. Stay tuned for updates.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
