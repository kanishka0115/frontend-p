import React from 'react';
import './Footer.css'; // For styling

function Footer() {
  return (
    <footer className="app-footer">
      <p className="disclaimer">
        Disclaimer: This application is based on different model comparisons and cannot guarantee 100% accuracy in results.
      </p>
      <div className="college-logo">
        <img src="/path/to/your/college/logo.png" alt="College Logo" />
      </div>
    </footer>
  );
}

export default Footer;
