import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import Footer
import './HomePage.css'; // For additional styling

function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <div className="welcome-section">
        <h1>Welcome to CoralGuard</h1>
        <p>
          Our project utilizes advanced AI models to analyze and understand the conditions of coral reefs.
        </p>
        <p>
          By processing images, we aim to provide insights on coral health and surrounding marine life.
        </p>
      </div>
      <div className="coral-section">
        <div className="coral-text">
          <h2>About Coral Reefs</h2>
          <p>
            Coral reefs are vital marine ecosystems that support a diverse array of marine life. 
            They provide essential habitat for many species, protect coastlines from erosion, 
            and are a source of food and livelihood for millions of people worldwide.
          </p>
          <p>
            Unfortunately, coral reefs are facing numerous threats, including climate change, pollution, 
            and overfishing. Conservation efforts are crucial to preserve these ecosystems for future generations.
          </p>
        </div>
        <div className="coral-image-block">
          <img src="D:\frontend-p\public\coralpic.jpg" alt="Coral Reef" />
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default HomePage;
