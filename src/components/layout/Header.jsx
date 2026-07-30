import { Bell, Search, UserCircle } from "lucide-react";



function Header() {
  return (
    <header className="header">

      <h2>AI Dashboard</h2>

      <div className="header-right">

        <Search size={20} />

        <Bell size={20} />

        <UserCircle size={28} />

      </div>

    </header>
  );
}

export default Header;