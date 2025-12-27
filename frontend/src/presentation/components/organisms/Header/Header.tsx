// src/presentation/components/organisms/Header/Header.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Settings, User, LogOut, ChevronDown, Menu } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    // nếu dùng navigate: navigate('/login');
  };

  // Click outside để đóng menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header glass-card">
      <div className="header__left">
        <button className="header__menu-btn" onClick={onMenuClick} type="button">
          <Menu size={24} />
        </button>
        <h1 className="header__title">
          Welcome back, <span className="header__title-name">{user?.fullName}</span>! 👋
        </h1>
      </div>

      <div className="header__right">
        {/* User dropdown */}
        <div className="header__user-wrapper" ref={menuRef}>
          <button
            className="header__user"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <div className="header__user-avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.fullName} />
              ) : (
                <span>{user?.fullName?.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div className="header__user-info">
              <span className="header__user-name">{user?.fullName}</span>
              <span className="header__user-role">{user?.role}</span>
            </div>
            <ChevronDown
              size={16}
              className={`header__user-chevron ${
                isMenuOpen ? 'header__user-chevron--open' : ''
              }`}
            />
          </button>

          {isMenuOpen && (
            <div className="header__user-menu glass-card">
              <button className="header__user-menu-item" type="button">
                <User size={16} />
                <span>Profile</span>
              </button>
              <button className="header__user-menu-item" type="button">
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <div className="header__user-menu-divider" />
              <button
                className="header__user-menu-item header__user-menu-item--danger"
                type="button"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
