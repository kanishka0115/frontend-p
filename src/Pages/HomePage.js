import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import Footer
import './HomePage.css'; // For additional styling

function HomePage() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1>Welcome to Coral AI</h1>
        <p>
          Our project utilizes advanced AI models to analyze and understand the conditions of coral reefs. 
          By processing images, we aim to provide insights on coral health and surrounding marine life.
        </p>
        <p>
          With our platform, you can upload pictures of coral reefs and receive detailed analyses, helping 
          researchers and conservationists make informed decisions for marine preservation.
        </p>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default HomePage;
