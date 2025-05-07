import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Abdullah Habberrih</Link>
          </div>
          <div
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#news" onClick={() => setIsMenuOpen(false)}>
                  News
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/files/habberrih-resume.pdf"
                  className="cv-button"
                  download="habberrih-resume.pdf"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
