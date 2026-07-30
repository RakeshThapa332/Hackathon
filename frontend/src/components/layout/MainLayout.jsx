import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      <div
        className={sidebarOpen ? "page-overlay active" : "page-overlay"}
        onClick={closeSidebar}
      />

      <div className="content">
        <Header onMenuClick={toggleSidebar} />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
