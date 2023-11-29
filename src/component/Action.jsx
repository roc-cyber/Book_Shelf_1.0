import React, { useEffect, useState } from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'


export default function Action() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [complaint, setComplaint] = useState('');
  const [submitted,setSubmitted] = useState(false);

  useEffect(()=>{
    setEmail(' ');
    setSubject(' ');
    setComplaint(' ');

    setSubmitted(false);
  
  },[submitted]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Complaint:', complaint);
    alert('Thanks for submitting for complaint!');
    setSubmitted(true);

  
    // setTimeout(() => {
    //   setSubmitted(false);
    //   window.location.reload();
    // }, 1000);
    
  };
  

  const handleComplaintChange = (event) => {
    const text = event.target.value;
    if (text.split(' ').length <= 500) {
      setComplaint(text);
    }
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const formStyle = {
    width: '70%',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    margin: '5px 0',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
  };

  const textareaStyle = {
    margin: '5px 0',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const pstyle ={
    padding: '30px',
  };


  return (
    <div>
      <Header />
      <p style={pstyle}>
        {' '}
      </p>
      <div className='Action' style={formContainerStyle}>
        {/* {submitted && (
          <div style={{ textAlign: 'center', margin: '20px', padding: '10px', background: '#e0e0e0', borderRadius: '5px' }}>
            <p>Thanks for submitting your complaint!</p>
          </div>
        )} */}
        <form style={formStyle} onSubmit={handleFormSubmit} method='POST'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label>Subject</label>
          <input
            type='text'
            placeholder='Enter your subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={inputStyle}
          />

          <label>Complaint</label>
          <textarea
            placeholder='Enter your complaint in 500 words'
            value={complaint}
            onChange={handleComplaintChange}
            style={textareaStyle}
          ></textarea>

          <p>Words left: {500 - complaint.split(' ').length}</p>

          <Button type="submit" style={buttonStyle}><NavLink to='/Submit' style={{color:'white', textDecoration:'none'}}>Submit</NavLink></Button>
        </form>
      </div>
    </div>
  );
}
