import { Bell, Search, UserCircle, Menu } from "lucide-react";

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="menu-toggle" type="button" onClick={onMenuClick}>
        <Menu size={22} />
      </button>

      <div className="header-left">
        <div>
          <h2>Dashboard</h2>
          <p>Good evening, Rakesh! Here’s what’s happening with your project today.</p>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search size={16} />
          <input placeholder="Search anything..." />
        </div>

        <button className="icon-button" type="button" aria-label="Notifications">
          <Bell size={18} />
        </button>

        <button className="icon-button" type="button" aria-label="Profile">
          <UserCircle size={22} />
        </button>
      </div>
    </header>
  );
}

export default Header;
