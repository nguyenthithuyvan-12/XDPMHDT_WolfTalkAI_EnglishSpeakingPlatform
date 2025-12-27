// src/presentation/pages/mentor/AssessmentPage/AssessmentPage.tsx
import React from 'react';
import {
  ClipboardList,
  Filter,
  Search,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import './AssessmentPage.css';

export const AssessmentPage: React.FC = () => {
  return (
    <div className="assessment-page">
      {/* Header */}
      <header className="assessment-page__header glass-card">
        <div className="assessment-page__header-main">
          <div className="assessment-page__header-icon">
            <ClipboardList size={22} />
          </div>
          <div>
            <h1 className="assessment-page__title">Assessments</h1>
            <p className="assessment-page__subtitle">
              Plan and review assessments for your learners.
            </p>
          </div>
        </div>

        <div className="assessment-page__actions">
          <button className="assessment-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="assessment-page__icon-button" type="button">
            <Filter size={18} />
          </button>
        </div>
      </header>

      {/* Empty / main card */}
      <section className="assessment-page__content glass-card">
        <div className="assessment-page__empty">
          <div className="assessment-page__empty-icon">
            <CheckCircle2 size={30} />
          </div>
          <h2 className="assessment-page__empty-title">
            Assessment management – coming soon
          </h2>
          <p className="assessment-page__empty-text">
            Soon you will be able to schedule assessments, record results, and
            track learner progress from this view.
          </p>

          <div className="assessment-page__hint">
            <AlertCircle size={16} />
            <span>
              This feature is under development and will be available in a
              future update.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
