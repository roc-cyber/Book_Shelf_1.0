import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Assuming the CSS file is named 'Error.css'

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className='Error-page'>404 Error!!!</div>
      <button onClick={() => navigate('/')} className='back-button'>Back To Home</button>
    </div>
  );
}

export default Error;
