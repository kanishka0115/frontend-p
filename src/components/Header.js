import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have routes set up

const Header = () => {
  return (
    <header>
      <h1>Coral AI</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </nav>
    </header>
  );
};

export default Header;
