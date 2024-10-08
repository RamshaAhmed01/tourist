// Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px'
  };

  const socialIconStyle = {
    fontSize: '20px',
    margin: '0 10px'
  };

  return (
    <footer style={footerStyle}>
      <div>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/contact" style={linkStyle}>Contact</a>
        <a href="/privacy" style={linkStyle}>Privacy Policy</a>
      </div>
      <div>
        <a href="https://facebook.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" style={socialIconStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div style={{ marginTop: '10px' }}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
