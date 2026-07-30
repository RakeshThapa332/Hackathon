function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AI Platform. All rights reserved.</p>

      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}

export default Footer;