import React from 'react';
import {
  Headphones,
  CheckCircle,
  Clock,
  AlertCircle,
  MessageCircle,
  Mail,
  Phone,
  TrendingUp,
  Users,
  Zap,
  LifeBuoy,
  Send
} from 'lucide-react';
import './SupportPage.css';

export const SupportPage: React.FC = () => {
  const features = [
    {
      icon: <MessageCircle size={24} strokeWidth={2} />,
      title: 'Ticket Management',
      description: 'Track and manage support tickets',
      color: '#0056D2',
    },
    {
      icon: <Mail size={24} strokeWidth={2} />,
      title: 'Email Integration',
      description: 'Respond directly via email',
      color: '#8b5cf6',
    },
    {
      icon: <Phone size={24} strokeWidth={2} />,
      title: 'Live Chat',
      description: 'Real-time customer support',
      color: '#22c55e',
    },
    {
      icon: <TrendingUp size={24} strokeWidth={2} />,
      title: 'Analytics Dashboard',
      description: 'Monitor response times & metrics',
      color: '#06b6d4',
    },
    {
      icon: <Users size={24} strokeWidth={2} />,
      title: 'Team Collaboration',
      description: 'Assign tickets to team members',
      color: '#f59e0b',
    },
    {
      icon: <Zap size={24} strokeWidth={2} />,
      title: 'Auto-Responses',
      description: 'Set up automated replies',
      color: '#ec4899',
    },
  ];

  const stats = [
    { label: 'Open Tickets', value: '0', color: '#0056D2', icon: <MessageCircle size={20} strokeWidth={2} /> },
    { label: 'Resolved Today', value: '0', color: '#22c55e', icon: <CheckCircle size={20} strokeWidth={2} /> },
    { label: 'Pending', value: '0', color: '#f59e0b', icon: <Clock size={20} strokeWidth={2} /> },
    { label: 'Avg Response', value: '0h', color: '#8b5cf6', icon: <TrendingUp size={20} strokeWidth={2} /> },
  ];

  return (
    <div className="support-page">
      {/* Header */}
      <div className="support-page__header">
        <div className="support-page__header-content">
          <div className="support-page__icon-wrapper">
            <Headphones size={48} strokeWidth={2} />
          </div>
          <div>
            <h1 className="support-page__title">Support Tickets</h1>
            <p className="support-page__subtitle">
              Manage customer support requests and tickets
            </p>
          </div>
        </div>
        <div className="support-page__status">
          <Clock size={20} strokeWidth={2} />
          <span>Coming Soon</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="support-stats">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="stat-card__icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-card__content">
              <div className="stat-card__value">{stat.value}</div>
              <div className="stat-card__label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="support-card">
        <div className="support-card__badge">
          <AlertCircle size={20} strokeWidth={2} />
          <span>In Development</span>
        </div>

        <div className="support-card__content">
          <div className="support-card__icon">
            <LifeBuoy size={80} strokeWidth={1.5} />
          </div>
          <h2 className="support-card__title">Support Management System</h2>
          <p className="support-card__description">
            Our comprehensive support management system is currently under development.
            Soon you'll be able to manage tickets, respond to user queries, track
            resolution times, collaborate with your team, and provide exceptional
            customer service.
          </p>

          <div className="support-card__actions">
            <button className="action-btn action-btn--primary" disabled>
              <Send size={20} strokeWidth={2} />
              <span>Reply to Ticket</span>
            </button>
            <button className="action-btn action-btn--secondary" disabled>
              <CheckCircle size={20} strokeWidth={2} />
              <span>Resolve Ticket</span>
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="support-features">
        <h3 className="support-features__title">Upcoming Features</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="feature-card__icon"
                style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h4 className="feature-card__title">{feature.title}</h4>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
