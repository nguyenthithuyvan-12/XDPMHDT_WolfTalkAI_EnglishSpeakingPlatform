// src/presentation/pages/admin/PolicyPage/PolicyPage.tsx
import React from 'react';
import {
  ShieldCheck,
  Search,
  Filter,
  Plus,
  AlertCircle,
} from 'lucide-react';
import './PolicyPage.css';

export const PolicyPage: React.FC = () => {
  return (
    <div className="policy-page">
      {/* Header */}
      <header className="policy-page__header glass-card">
        <div className="policy-page__header-main">
          <div className="policy-page__header-icon">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="policy-page__title">Policy Management</h1>
            <p className="policy-page__subtitle">
              Manage platform policies and compliance guidelines
            </p>
          </div>
        </div>

        <div className="policy-page__actions">
          <button className="policy-page__icon-button" type="button">
            <Search size={18} />
          </button>
          <button className="policy-page__icon-button" type="button">
            <Filter size={18} />
          </button>
          <button className="policy-page__primary-button" type="button">
            <Plus size={18} />
            <span>New Policy</span>
          </button>
        </div>
      </header>

      {/* Empty state */}
      <section className="policy-page__content glass-card">
        <div className="policy-page__empty">
          <div className="policy-page__empty-icon">
            <ShieldCheck size={64} />
          </div>
          <h2 className="policy-page__empty-title">
            Policy Management – Coming Soon
          </h2>
          <p className="policy-page__empty-text">
            Soon you will be able to create, update, and enforce platform
            policies including terms of service, privacy policy, and community
            guidelines.
          </p>

          <div className="policy-page__hint">
            <AlertCircle size={16} />
            <span>
              This section is under active development. Check back for updates.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
