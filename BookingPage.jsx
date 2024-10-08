// BookingPage.js
import React, { useState } from 'react';
import BookingModal from './BookingModal';

const BookingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const bookNowButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={pageStyle}>
      <h1 style={headerStyle}>Book Your Dream Holiday</h1>
      <button onClick={handleOpenModal} style={bookNowButtonStyle}>
        Book Now
      </button>
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BookingPage;
