import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; // Import Footer
import axios from 'axios';
import './UploadPage.css'; // For additional styling

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [aiResult, setAiResult] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        // Replace this URL with your actual AI API endpoint
        const response = await axios.post('https://your-ai-backend.com/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        setAiResult(response.data.result);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload file or process the image.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <Header />
      <div className="upload-container">
        <h1>Upload Your Coral Reef Picture</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <br /><br />
          <button type="submit" className="submit-button">Submit</button>
        </form>

        {aiResult && (
          <div className="result-container">
            <h2>AI Analysis Result:</h2>
            <p>{aiResult}</p>
          </div>
        )}
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default UploadPage;
