
import React from 'react';

const AboutUs = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const contentStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    maxWidth: '800px',
    textAlign: 'center'
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>About Us</h1>
      <p style={contentStyle}>
        Welcome to our company! We are dedicated to providing the best service
        and products to our customers. Our team of professionals is here to
        assist you with any needs you may have. We value your feedback and
        are constantly striving to improve our offerings. Thank you for choosing us!
      </p>
      <p style={contentStyle}>
        Our mission is to make a positive impact in the community and industry
        through innovation and excellence. We believe in the power of teamwork,
        integrity, and customer satisfaction.
      </p>
      <p style={contentStyle}>
        If you have any questions or would like to learn more about our company,
        please do not hesitate to contact us.
      </p>
    </div>
  );
};

export default AboutUs;
