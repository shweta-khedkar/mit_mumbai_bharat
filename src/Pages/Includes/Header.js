import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-section">
          <img src="/assets/mit-wpu-logo.png" alt="MIT Logo" className="logo" />
        </a>

        <div className={`nav-container ${menuOpen ? 'show' : ''}`}>
          <div className="nav-row top-row">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/admissions">Admissions</a>
            <a href="/programs">Programs</a>
            <a href="/student">Student Corner</a>
          </div>

          <div className="divider-bar"></div>

          <div className="nav-row bottom-row">
            <a href="/it">IT @ MIT</a>
            <a href="/placements">Placements</a>
            <a href="/faculty">Faculty</a>
            <a href="/careers">Careers</a>
            <a href="/life">Life @ MIT Mumbai</a>
            <a href="/news">News & Events</a>
          </div>
        </div>

        <button className="apply-btn">Apply Now</button>

        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
