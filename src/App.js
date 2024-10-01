import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Ensure the 'Pages' directory is capitalized
import UploadPage from './Pages/UploadPage'; // Ensure the 'Pages' directory is capitalized
import Footer from './components/Footer'; // Ensure this path is correct
import './styles/App.css'; // Main styles

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Use 'element' for v6 */}
          <Route path="/upload" element={<UploadPage />} /> {/* Use 'element' for v6 */}
        </Routes>
        <Footer /> {/* Add Footer here to appear on all pages */}
      </div>
    </Router>
  );
}

export default App;
