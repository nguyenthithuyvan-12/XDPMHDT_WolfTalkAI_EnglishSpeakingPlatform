// src/presentation/pages/mentor/MaterialsPage/MaterialsPage.tsx
import React from 'react';
import {
  BookOpen,
  FolderPlus,
  Search,
  Filter,
  AlertCircle,
} from 'lucide-react';
import './MaterialsPage.css';

export const MaterialsPage: React.FC = () => {
  return (
    <div className="materials-page">
      {/* Header */}
      <header className="materials-page__header glass-card">
        <div className="materials-page__header-main">
          <div className="materials-page__header-icon">
            <BookOpen size={22} />
          </div>
          <div>
            <h1 className="materials-page__title">Learning Materials</h1>
            <p className="materials-page__subtitle">
              Organize resources and share materials with your learners.
            </p>
          </div>
        </div>

        <div className="materials-page__actions">
          <button className="materials-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="materials-page__icon-button" type="button">
            <Filter size={18} />
          </button>
          <button className="materials-page__primary-button" type="button">
            <FolderPlus size={18} />
            Add material
          </button>
        </div>
      </header>

      {/* Empty / main card */}
      <section className="materials-page__content glass-card">
        <div className="materials-page__empty">
          <div className="materials-page__empty-icon">
            <BookOpen size={30} />
          </div>
          <h2 className="materials-page__empty-title">
            Materials management – coming soon
          </h2>
          <p className="materials-page__empty-text">
            Soon you will be able to upload, categorize, and share learning
            materials directly with your learners.
          </p>

          <div className="materials-page__hint">
            <AlertCircle size={16} />
            <span>
              This section is in progress and will be enabled in an upcoming
              release.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
