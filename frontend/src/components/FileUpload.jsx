import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [columns, setColumns] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setResponseMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setResponseMessage(response.data.message);
      setColumns(response.data.columns);
    } catch (error) {
      setResponseMessage(error.response.data.error || 'Error uploading file.');
    }
  };

  return (
    <div>
      <h2>Upload Your Dataset</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {responseMessage && <p>{responseMessage}</p>}
      {columns.length > 0 && (
        <div>
          <h3>Columns in the uploaded dataset:</h3>
          <ul>
            {columns.map((column, index) => (
              <li key={index}>{column}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FileUpload;
