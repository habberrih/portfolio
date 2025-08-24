"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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

  useEffect(() => {
    // Toggle body scroll when menu is open
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Theme toggle
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const attr = document.documentElement.getAttribute('data-theme');
      const initial = attr === 'dark' ? 'dark' : 'light';
      setTheme(initial);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const html = document.documentElement;
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
    }
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      html.classList.add('theme-transition');
      setTimeout(() => html.classList.remove('theme-transition'), 400);
    }
    try {
      // Use global toggler if available to avoid hydration edge cases
      const next = typeof window !== 'undefined' && window.__toggleTheme ? window.__toggleTheme() : (theme === 'dark' ? 'light' : 'dark');
      setTheme(next);
    } catch {
      setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/" onClick={closeMenu}>Abdullah Habberrih</Link>
          </div>
          <div
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={closeMenu}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#news" onClick={closeMenu}>
                  News
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/files/habberrih-resume.pdf"
                  className="cv-button"
                  download="habberrih-resume.pdf"
                  onClick={closeMenu}
                >
                  Download CV
                </a>
              </li>
              <li>
                <button
                  className="theme-toggle-btn"
                  type="button"
                  aria-label="Toggle dark mode"
                  onClick={toggleTheme}
                >
                  <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
