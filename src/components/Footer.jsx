import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Let's Connect!</h3>
          <p>Feel free to reach out through the following platforms:</p>

          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FaGithub /> GitHub
            </a>

            <a href="mailto:rajatdevsalan@gmail.com" className="footer-link">
              <FaEnvelope /> Email
            </a>

            <a href="tel:+91 9205772965" className="footer-link">
              <FaPhoneAlt /> +91 9205772965
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rajat Salar | Frontend Developer Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
