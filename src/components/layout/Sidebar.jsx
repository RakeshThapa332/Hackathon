import {
  LayoutDashboard,
  Upload,
  Database,
  MessageSquare,
  BarChart3,
  FileText,
  Settings,
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

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        AI Platform
      </div>

      <nav>
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="nav-item"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;