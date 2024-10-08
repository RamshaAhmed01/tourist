import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '40px',
    cursor: 'pointer',
    height: '40px', 
    width: '150px'
  };

  return (
    <div>
      <button onClick={shoot} style={buttonStyle}>
        Subscribe Now
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

export default Football