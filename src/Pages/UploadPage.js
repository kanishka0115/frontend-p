import React, { useState } from 'react';
import Header from '../components/Header'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import './UploadPage.css'; // Import your CSS file

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock result generation (replace with your logic)
    setResult('Your image has been uploaded successfully!');
  };

  return (
    <div className="upload-container">
      <Header />
      <div className="upload-content">
        <h1 className="upload-title">Upload Your Coral Image</h1>
        <div className="upload-card">
          <form className="upload-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fileUpload" className="upload-label">Choose Image:</label>
              <input 
                type="file" 
                id="fileUpload" 
                className="upload-input" 
                accept="image/*" 
                onChange={handleFileChange} 
                required
              />
            </div>
            {file && (
              <div className="image-preview">
                <img src={file} alt="Preview" className="preview-image" />
              </div>
            )}
            <button type="submit" className="upload-button">Upload</button>
          </form>
          {result && <div className="result-message">{result}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadPage;
