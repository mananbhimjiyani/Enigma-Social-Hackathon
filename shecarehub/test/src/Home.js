// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    // Navigate to the corresponding route based on the section
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>

      {/* Buttons for different sections */}
      <div>
        <button onClick={() => handleButtonClick("Pre-diagnosis")}>
          Pre-diagnosis
        </button>
        <button onClick={() => handleButtonClick("Diagnosis")}>
          Diagnosis
        </button>
        <button onClick={() => handleButtonClick("Confirmation")}>
          Confirmation
        </button>
        <button onClick={() => handleButtonClick("Support")}>
          Support
        </button>
      </div>
    </div>
  );
};

export default Home;
