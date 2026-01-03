import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/wolftalk/logo_wolf.png";

export type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  onClick?: () => void;
};

const defaultItems: MenuItem[] = [
  {
    id: "dashboard",
    label: "HỌC",
    icon: "🏠",
  },
  {
    id: "alphabet",
    label: "CHỮ CÁI",
    icon: "あ",
  },
  {
    id: "leaderboard",
    label: "BẢNG XẾP HẠNG",
    icon: "🏆",
  },
  {
    id: "quests",
    label: "NHIỆM VỤ",
    icon: "👑",
  },
  {
    id: "shop",
    label: "CỬA HÀNG",
    icon: "🛒",
  },
  {
    id: "profile",
    label: "HỒ SƠ",
    icon: "👤",
  },
  {
    id: "more",
    label: "XEM THÊM",
    icon: "⋯",
  },
];

const Sidebar: React.FC<{ items?: MenuItem[] }> = ({
  items = defaultItems,
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  // Map id to route path
  const idToPath: Record<string, string> = {
    dashboard: "/dashboard",
    alphabet: "/alphabet",
    leaderboard: "/leaderboard",
    quests: "/quests",
    shop: "/shop",
    profile: "/profile",
    more: "/more",
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("accessToken");
    } catch (e) {
      // ignore
    }
    // reload to make App re-evaluate auth state
    window.location.href = "/";
  };

  return (
    <aside className={`sidebar duolingo ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top">
        <div className="brand">
          <div className="logo">
            <img src={logo} alt="WolfTalk" />
          </div>
          <div className="title">
            <strong>wolftalk</strong>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map((it) => (
          <Link
            key={it.id}
            to={idToPath[it.id] || "/"}
            className={`sidebar-item${
              location.pathname === idToPath[it.id] ? " active" : ""
            }`}
            aria-current={
              location.pathname === idToPath[it.id] ? "page" : undefined
            }
            title={it.label}
            style={{ textDecoration: "none" }}
          >
            <span className="icon" aria-hidden>
              {it.icon}
            </span>
            <span className="label">{it.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
