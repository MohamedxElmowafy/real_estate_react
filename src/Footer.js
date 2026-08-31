import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Column 1: Brand & Description */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footLogo d-flex align-items-center mb-3">
              <div className="logo">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  ></path>
                </svg>
              </div>
              <span>RealEstate</span>
            </div>
            <p className="pe-lg-4">
              The most trusted platform for buying, selling, and renting premium
              real estate globally. We make property hunting seamless.
            </p>
            <div className="footer-social-links">
              <a href="/" className="social-btn" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="/" className="social-btn" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/" className="social-btn" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="/" className="social-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6 mb-4 mb-lg-0">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li className="footer-link-item">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/#how-it-works" className="footer-link">
                  How It Works
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/properties" className="footer-link">
                  Properties
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/#testimonials" className="footer-link">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope footer-contact-icon"></i>
                <p className="footer-contact-text">
                  <a href="mailto:contact@reestate.com">contact@reestate.com</a>
                </p>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone footer-contact-icon"></i>
                <p className="footer-contact-text">
                  <a href="tel:+911234567890">+91 1234567890</a>
                </p>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot footer-contact-icon"></i>
                <p className="footer-contact-text">123 Business Hub, Cairo</p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-box">
              <p>
                Subscribe to our newsletter to receive latest property updates.
              </p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Your Email Address"
                  required
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  aria-label="Subscribe"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="footer-bottom-text">
                &copy; {new Date().getFullYear()} RealEstate. All rights
                reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="footer-bottom-links justify-content-center justify-content-md-end">
                <li>
                  <a href="/" className="footer-bottom-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-bottom-link">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/" className="footer-bottom-link">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
