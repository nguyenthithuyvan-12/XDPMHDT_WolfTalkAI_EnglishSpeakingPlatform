import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Import icon library - chọn 1 trong 3 options sau:

// Option 1: Lucide React (Recommended - clean & modern)
import { 
  LayoutDashboard,
  Users,
  GraduationCap,
  CreditCard,
  Receipt,
  ShieldCheck,
  MessageCircle,
  UserCircle,
  ClipboardList,
  MessageSquare,
  BookOpen,
  Sparkles
} from 'lucide-react';

// Option 2: React Icons (nếu dùng)
// import { 
//   RiDashboardLine,
//   RiUserLine,
//   RiGraduationCapLine,
//   RiBankCardLine,
//   RiMoneyDollarCircleLine,
//   RiShieldCheckLine,
//   RiCustomerService2Line,
//   RiUserFollowLine,
//   RiFileList3Line,
//   RiChatSmile3Line,
//   RiBookOpenLine
// } from 'react-icons/ri';

interface MenuItem {
  path: string;
  label: string;
  icon: React.ReactNode; // Changed from string to ReactNode
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'Admin' | 'Mentor';
}

// Admin Menu với Lucide Icons
const adminMenuItems: MenuItem[] = [
  { 
    path: '/admin/dashboard', 
    label: 'Dashboard', 
    icon: <LayoutDashboard size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/users', 
    label: 'Users', 
    icon: <Users size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/mentors', 
    label: 'Mentors', 
    icon: <GraduationCap size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/plans', 
    label: 'Plans', 
    icon: <CreditCard size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/transactions', 
    label: 'Transactions', 
    icon: <Receipt size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/moderation', 
    label: 'Moderation', 
    icon: <ShieldCheck size={20} strokeWidth={2} />
  },
  { 
    path: '/admin/support', 
    label: 'Support', 
    icon: <MessageCircle size={20} strokeWidth={2} />
  },

  {
    path: '/admin/policys',
    label: 'Policies',
    icon: <ShieldCheck size={20} strokeWidth={2} />
  }
];
// Mentor 
const mentorMenuItems: MenuItem[] = [
  { 
    path: '/mentor/dashboard', 
    label: 'Dashboard', 
    icon: <LayoutDashboard size={20} strokeWidth={2} />
  },
  { 
    path: '/mentor/learners', 
    label: 'My Learners', 
    icon: <UserCircle size={20} strokeWidth={2} />
  },
  { 
    path: '/mentor/assessment', 
    label: 'Assessment', 
    icon: <ClipboardList size={20} strokeWidth={2} />
  },
  { 
    path: '/mentor/feedback', 
    label: 'Feedback', 
    icon: <MessageSquare size={20} strokeWidth={2} />
  },
  { 
    path: '/mentor/materials', 
    label: 'Materials', 
    icon: <BookOpen size={20} strokeWidth={2} />
  },

  {
    path: '/mentor/sharedexperience',
    label: 'Shared Experience',
    icon: <Sparkles size={20} strokeWidth={2} />
  }
];
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, role }) => {
  const menuItems = role === 'Admin' ? adminMenuItems : mentorMenuItems;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Logo */}
        <div className="sidebar__logo">
          <span className="sidebar__logo-icon">
            <Sparkles size={28} strokeWidth={2.5} />
          </span>
          <span className="sidebar__logo-text">AESP Portal</span>
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
              }
              onClick={onClose}
            >
              <span className="sidebar__item-icon">{item.icon}</span>
              <span className="sidebar__item-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar__footer">
          <div className="sidebar__role-badge">
            {role === 'Admin' ? (
              <>
                <ShieldCheck size={16} strokeWidth={2.5} /> Admin
              </>
            ) : (
              <>
                <GraduationCap size={16} strokeWidth={2.5} /> Mentor
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
