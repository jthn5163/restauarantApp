import React, { useState } from 'react';
import '../navbar/navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <h1 className="navbar__logo">UrbanSpice</h1>
      </div>

      <div className="navbar__menu">
        {/* Hamburger Button */}
        <button
          className={`navbar__hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        {/* Dropdown Menu */}
        <div className={`navbar__dropdown ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="navbar__links">
            <li className="navbar__item">
              <a href="#" className="navbar__link">Home</a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">Menu</a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">About us</a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;