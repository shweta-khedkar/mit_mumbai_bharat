import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h5>Follow Us</h5>
          <ul>
            <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            <li><a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            <li><a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
          </ul>
        </div>

        {/* Sitemap */}
        <div className="footer-section">
          <h5>Sitemap</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="../Pages/about.html">About Us</a></li>
            <li><a href="../Pages/programmes.html">Programmes</a></li>
            <li><a href="../Pages/admissions.html">Admissions</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#news">News & Events</a></li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>&copy; 2025 MIT Mumbai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;