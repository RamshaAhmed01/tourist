import React, { useState } from 'react';

const App = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const openForm = () => {
    setFormIsOpen(true);
  };

  const closeForm = () => {
    setFormIsOpen(false);
  };
  

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    height: '50px',
    width: '150px'
  };

  return (
    <div>
      <button onClick={openForm} style={buttonStyle}>
        Subscribe Now
      </button>
      {formIsOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2>Subscription Form</h2>
          <form> <br />
            <div>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
            </div> <br />
            <div>
              <label>
                Address:
                <input type="text" name="email" />
              </label>
            </div> <br />
            <div>
              <label>
               ConatctNo:
                <input type="number" name="email" />
              </label>
            </div> <br />
            <div>
              <label>
                PostalCode:
                <input type="number" name="email" />
              </label>
            </div> <br />
            <div>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
            </div> <br />



           <button type="submit" style={buttonStyle}>
              Submit
            </button>
            <button type="button" onClick={closeForm} style={buttonStyle}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
