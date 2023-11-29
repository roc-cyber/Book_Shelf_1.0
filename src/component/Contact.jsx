// Contact.js

import React from 'react';
import Header from './Header';
//import './Contact.css'; // Assuming you have a separate CSS file for styling

export default function Contact() {
  return (
    <div>
      <Header />
      <div className='contact-container'>
        <p>
          Follow us on 
          <span className='contact-link'>
            <a href="https://www.linkedin.com/in/souvik-das-b8115916b/" target="_blank" rel="noopener noreferrer">
              LinkedIn <i className="fab fa-linkedin"></i>
            </a>
          </span>
        </p>
        <p>
          Follow us on 
          <span className='contact-link'>
            <a href="https://www.instagram.com/old_star11/" target="_blank" rel="noopener noreferrer">
              Instagram <i className="fab fa-instagram"></i>
            </a>
          </span>
        </p>
        
      </div>
    </div>
  );
}
