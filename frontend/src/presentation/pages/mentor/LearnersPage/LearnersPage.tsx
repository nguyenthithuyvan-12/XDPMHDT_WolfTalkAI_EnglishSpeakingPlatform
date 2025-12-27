// src/presentation/pages/mentor/LearnersPage/LearnersPage.tsx
import React from 'react';
import { Users, Search, Filter, UserPlus, AlertCircle } from 'lucide-react';
import './LearnersPage.css';

export const LearnersPage: React.FC = () => {
  return (
    <div className="learners-page">
      {/* Header */}
      <header className="learners-page__header glass-card">
        <div className="learners-page__header-main">
          <div className="learners-page__header-icon">
            <Users size={22} />
          </div>
          <div>
            <h1 className="learners-page__title">My Learners</h1>
            <p className="learners-page__subtitle">
              Manage your assigned learners and track their progress.
            </p>
          </div>
        </div>

        <div className="learners-page__actions">
          <button className="learners-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="learners-page__icon-button" type="button">
            <Filter size={18} />
          </button>
          <button className="learners-page__primary-button" type="button">
            <UserPlus size={18} />
            Add learner
          </button>
        </div>
      </header>

      {/* Empty state / glass card */}
      <section className="learners-page__content glass-card">
        <div className="learners-page__empty">
          <div className="learners-page__empty-icon">
            <AlertCircle size={32} />
          </div>
          <h2 className="learners-page__empty-title">
            Learners management - coming soon
          </h2>
          <p className="learners-page__empty-text">
            You will be able to see all your learners here, review their
            assessments, and track check‑ins and materials shared.
          </p>
        </div>
      </section>
    </div>
  );
};
