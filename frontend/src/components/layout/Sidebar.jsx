import {
  LayoutDashboard,
  Upload,
  Database,
  MessageSquare,
  BarChart3,
  FileText,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Upload", icon: Upload, path: "/upload" },
  { name: "Data", icon: Database, path: "/data" },
  { name: "Chat", icon: MessageSquare, path: "/chat" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Reports", icon: FileText, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

function Sidebar({ open, onClose }) {
  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-brand">
        <div className="logo-icon">AI</div>
        <div className="logo-text">
          <span>AI Platform</span>
          <small>Intelligent Solutions</small>
        </div>
      </div>

      <button className="sidebar-close" onClick={onClose} type="button">
        <X size={18} />
      </button>

      <nav>
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            onClick={onClose}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">R</div>
          <div className="user-meta">
            <span>Rakesh Thapa</span>
            <small>Admin</small>
          </div>
        </div>
        <button className="upgrade-button" type="button">
          Upgrade Plan
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
