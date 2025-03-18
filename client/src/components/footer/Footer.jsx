import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About This Blog</h3>
          <p>
            Sharing cozy recipes, kitchen tips, and delicious
            inspiration for everyday cooks and food lovers.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="#">📸 Instagram</a>
            <br />
            <a href="#">📌 Pinterest</a>
            <br />
            <a href="#">▶️ YouTube</a>
            <br />
            <a href="#">📱 TikTok</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Get Fresh Recipes</h3>
          <p>
            Subscribe to get delicious recipes straight to your inbox.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Your Cook by Gark Godwin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
