import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;