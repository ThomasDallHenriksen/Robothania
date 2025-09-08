import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src="/Robothania_logo_White.png" alt="ROBOTHANIA Logo" className="logo-img" />
          </Link>
        </div>
        
        {/* Navigation items on the right (for future use) */}
        <div className="navbar-menu">
          {/* You can add navigation items here later */}
          {/* <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
