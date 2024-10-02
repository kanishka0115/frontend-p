import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header styles

function Header() {
  return (
    <header className="app-header">
      <div className="left-section">
        <h1 className="project-name">CoralGuard</h1>
      </div>
      <nav className="right-section">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/upload" className="nav-button">Upload</Link>
      </nav>
    </header>
  );
}

export default Header;
