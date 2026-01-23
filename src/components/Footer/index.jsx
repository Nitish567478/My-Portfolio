import React from "react";
import './index.css'
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-name">Nitish Kumar Yadav</h3>

        <p className="footer-text">
          &copy; {year} Nitish Kumar Yadav. Made with ❤️.
        </p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/nitishkumaryadav111"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn <span className="arrow">↗</span>
          </a>

          <a
            href="https://github.com/Nitish567478"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub <span className="arrow">↗</span>
          </a>

          <a href="#home" className="footer-link">
            Back to Top <span className="arrow">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
