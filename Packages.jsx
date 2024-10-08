// DiscountPackages.js
import React from 'react';

const DiscountPackages = () => {
  const packages = [
    {
      name: 'Eiffel Tower',
      location: 'Paris, France',
      description: 'Explore the Eiffel Tower with a 20% discount on all tickets.',
      originalPrice: '€500',
      discountPrice: '€400',
      imageUrl: 'https://example.com/eiffel-tower.jpg'
    },
    {
      name: 'Great Wall of China',
      location: 'China',
      description: 'Get a 25% discount on guided tours of the Great Wall of China.',
      originalPrice: '$800',
      discountPrice: '$600',
      imageUrl: 'https://example.com/great-wall-of-china.jpg'
    },
    {
      name: 'Statue of Liberty',
      location: 'New York City, USA',
      description: 'Save 15% on ferry tickets to the Statue of Liberty.',
      originalPrice: '$900',
      discountPrice: '$800',
      imageUrl: 'https://example.com/statue-of-liberty.jpg'
    },
    {
      name: 'Machu Picchu',
      location: 'Peru',
      description: 'Enjoy a 10% discount on entrance tickets to Machu Picchu.',
      originalPrice: '$400',
      discountPrice: '$350',
      imageUrl: 'https://example.com/machu-picchu.jpg'
    },
    {
      name: 'Colosseum',
      location: 'Rome, Italy',
      description: 'Get 20% off on Colosseum tour packages.',
      originalPrice: '€200',
      discountPrice: '€180',
      imageUrl: 'https://example.com/colosseum.jpg'
    }
  ];

  const pageStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const packageStyle = {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const packageNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const packageLocationStyle = {
    fontSize: '18px',
    color: 'gray'
  };

  const packageDescriptionStyle = {
    fontSize: '16px',
    marginTop: '10px'
  };

  const packagePriceStyle = {
    fontSize: '16px',
    marginTop: '10px',
    textDecoration: 'line-through',
    color: 'red'
  };

  const packageDiscountPriceStyle = {
    fontSize: '20px',
    marginTop: '10px',
    color: 'green',
    fontWeight: 'bold'
  };

  const packageImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '10px'
  };

  return (
    <div style={pageStyle}>
      {packages.map((pkg, index) => (
        <div key={index} style={packageStyle}>
          <img src={pkg.imageUrl} alt={pkg.name} style={packageImageStyle} />
          <div style={packageNameStyle}>{pkg.name}</div>
          <div style={packageLocationStyle}>{pkg.location}</div>
          <div style={packageDescriptionStyle}>{pkg.description}</div>
          <div style={packagePriceStyle}>Original Price: {pkg.originalPrice}</div>
          <div style={packageDiscountPriceStyle}>Discount Price: {pkg.discountPrice}</div>
        </div>
      ))}
    </div>
  );
};

export default DiscountPackages;
